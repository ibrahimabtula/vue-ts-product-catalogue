export const DEFAULT_LIMIT = undefined;

export interface ICriteria {
  limit?: number;
  offset?: number;
}

export interface IQueryResult<T>{
  total: number,
  data: T
}

/**
 * Full interface should have delete and update methods too
*/
export interface IQueryable<T> {
  get(id: string): Promise<T | undefined> ;
  list(criteria?: ICriteria):  Promise<IQueryResult<T[]>>;
}