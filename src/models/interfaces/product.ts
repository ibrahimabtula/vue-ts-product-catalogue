import { ICategory } from "@/models/interfaces/category";
import { ICurrency } from "@/models/interfaces/currency";

export interface IProduct{
  id: string;
  name: string;
  description: string;
  imgPath: string;
  price: number;
  category: ICategory;
  currency: ICurrency;
}