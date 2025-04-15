import { SERVICE_BASE_URL } from "./apiUtils";

export type GetProductsResponse = {
  data: {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    tags: string[];
  }[];
};

export const getProducts = async (): Promise<GetProductsResponse> => {
  const response = await fetch(`${SERVICE_BASE_URL}/api/products`);
  const products = await response.json();
  return products;
};
