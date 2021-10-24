import { IProduct } from "@/models/interfaces/product";

type ClothesSize = "S" | "M" | "L" | "XL" | "XXL";
type ShoeSize = 39 | 40 | 41 | 42 | 43 | 44 | 45;

export interface IFashionProduct extends IProduct {
  size: ClothesSize | ShoeSize;
  color: string;
}

