import { IProduct } from "@/models/interfaces/product";

export interface IMobileProduct extends IProduct {
  battery: number;
  cpu: string;
  ram: number;
  storage: number
}

