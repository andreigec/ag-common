import { warn } from '../../common/helpers/log';
import { sumArray } from '../../common/helpers/math';
import { safeStringify, trim } from '../../common/helpers/string';

const extractSum = ({ str, regex }: { str: string; regex: RegExp }) =>
  sumArray(
    str
      .match(regex)
      ?.map((s2) => trim(s2.substring(s2.indexOf(':') + 1), ':', ',', ' '))
      .filter((r) => r && Number(r))
      .map((r) => Number(r)) || [],
  );

export const enforceDynamoProvisionCap = ({
  tables,
  readsMax = 25,
  writesMax = 25,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tables: any[];
  /**
   * default 25
   */
  readsMax?: number;
  /**
   * default 25
   */
  writesMax?: number;
}) => {
  if (!tables || tables.length === 0) {
    warn('error in dynamo FT enforce');
    return;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const t = tables[0] as any;
  const s = safeStringify(t.node._children.Resource.node.scope);
  const reads = extractSum({ str: s, regex: /readCapacityUnits.*/gim });
  const writes = extractSum({ str: s, regex: /writeCapacityUnits.*/gim });

  if (reads > readsMax) {
    warn(
      `dynamo table provisioned reads:${reads} greater than max:${readsMax}`,
    );

    throw new Error('exceeded dynamo provision cap');
  }

  if (writes > writesMax) {
    warn(
      `dynamo table provisioned writes:${writes} greater than max:${writesMax}`,
    );
    throw new Error('exceeded dynamo provision cap');
  }

  warn(`dynamo provisioned total: R=${reads} W=${writes}`);
};
