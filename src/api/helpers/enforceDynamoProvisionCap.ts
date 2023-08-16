import { warn } from '../../common/helpers/log';
import { sumArray } from '../../common/helpers/math';
import { safeStringify } from '../../common/helpers/string/json';
import { trim } from '../../common/helpers/string/trim';

const extractSum = ({ str, regex }: { str: string; regex: RegExp }) =>
  sumArray(
    str
      .match(regex)
      ?.map((s2) => trim(s2.substring(s2.indexOf(':') + 1), ':', ',', ' '))
      .filter((r) => r && Number(r))
      .map((r) => Number(r)) ?? [],
  );

/** ensure that dynamo tables in stack dont exceed passed in provisioned limits */
export const enforceDynamoProvisionCap = ({
  tables,
  readsMax = 25,
  writesMax = 25,
  mustEqual = false,
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
  /**
   * default false. if true, will throw if cap isnt met. will still throw if exceeds.
   */
  mustEqual?: boolean;
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
  warn(`dynamo table provisioned reads:${reads}/${readsMax}`);
  warn(`dynamo table provisioned writes:${writes}/${writesMax}`);

  if (reads > readsMax || writes > writesMax) {
    throw new Error('exceeded dynamo provision cap');
  }

  if (mustEqual && (reads !== readsMax || writes !== writesMax)) {
    throw new Error(`dynamo provision cap not met`);
  }
};
