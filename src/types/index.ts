export type ApiPostMethods = "POST" | "PUT" | "DELETE";
export type TPayment = "cash" | "card";

export interface IApi {
  get<T extends object>(uri: string): Promise<T>;
  post<T extends object>(
    uri: string,
    data: object,
    method?: ApiPostMethods
  ): Promise<T>;
}

// Интерфейс для товара
export interface IProduct {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  price: number | null;
}

// Интерфейс для данных покупателя
export interface IBuyer {
  payment: TPayment | null;
  email: string;
  phone: string;
  address: string;
}

export type TProductsResponse = {
  total: number;
  items: IProduct[];
};
export type TOrder = {
  payment: TPayment;
  email: string;
  phone: string;
  address: string;
  total: number;
  items: string[];
  id?: string;
};
export type IOrderResponse = {
  id: string;
  total: number;
};
