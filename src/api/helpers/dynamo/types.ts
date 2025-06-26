export type DynamoDBError = {
  error: string;
};

export type DynamoDBSuccess<T> = {
  data: T;
};

export type DynamoDBResult<T> = DynamoDBSuccess<T> | DynamoDBError;

export interface DynamoFilter {
  filterExpression: string;
  attrNames: Record<string, string>;
  attrValues?: Record<string, unknown>;
}

export interface ScanOptions {
  /** eg
   * filter: {
      filterExpression: '#feedIcon = :empty',
      attrNames: { '#feedIcon': 'feedIcon' },
      attrValues: {
        ':empty': '',
      },
    },
   */
  filter?: DynamoFilter;
  requiredAttributeList?: string[];
  indexName?: string;
  alwaysRetry?: boolean;
}

export interface DynamoQueryParams {
  tableName: string;
  pkName: string;
  pkValue: string | number;
  pkOperator?: '=' | '<' | '>' | '<=' | '>=';
  skName?: string;
  skValue?: string | number | [string | number, string | number];
  skOperator?: '=' | '<' | '>' | '<=' | '>=' | 'BETWEEN' | 'BEGINS_WITH';
  indexName?: string;
  limit?: number;
  filter?: DynamoFilter;
  sortAscending?: boolean;
  alwaysRetry?: boolean;
}

export interface DynamoBatchQueryParams {
  tableName: string;
  pkName: string;
  pkValues: (string | number)[];
  indexName?: string;
  limit?: number;
  filter?: DynamoFilter;
}

export const isError = <T>(
  result: DynamoDBResult<T>,
): result is DynamoDBError => 'error' in result;
