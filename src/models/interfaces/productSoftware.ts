import { IProduct } from "@/models/interfaces/product";

export interface ISoftwareProduct extends IProduct {
  version: string;
  license: string;
  author: string;
}

