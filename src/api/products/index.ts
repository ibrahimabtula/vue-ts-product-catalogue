import { ICriteria, IQueryable, IQueryResult, DEFAULT_LIMIT } from "@/api/IQueryable";
import { IProduct } from "@/models/interfaces/product";

export class ProductsQuery implements IQueryable<IProduct> {
  delay(time: number) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  async get(id: string): Promise<IProduct | undefined> {
    const products = (await import("./products")).default as any[];
    return products.find((i) => i.id === id);
  }

  async list(criteria?: ICriteria): Promise<IQueryResult<IProduct[]>> {
    // Delay to simulate real request
    await this.delay(500);

    const products = (await import("./products")).default as any[];
    let result = products;
    const offset = criteria?.offset || 0;
    const limit = criteria?.limit || 0;

    result = result.slice(offset, offset + limit);

    return {
      data: result,
      total: products.length,
    };
  }
}
