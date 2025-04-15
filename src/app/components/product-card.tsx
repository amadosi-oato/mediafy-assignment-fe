import React from "react";
import { GetProductsResponse } from "../api/getProducts";

type ProductCardProps = {
  product: GetProductsResponse["data"][0];
  onSelect: (product: GetProductsResponse["data"][0]) => void;
  isSelected: boolean;
};

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelect,
  isSelected,
}) => {
  return (
    <div
      className={`w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl ${
        isSelected ? "border-2 border-blue-500" : ""
      }`}
    >
      <img
        src={product.image}
        alt={`Photo of ${product.name}`}
        className="h-80 w-72 object-cover rounded-t-xl"
      />
      <div className="px-4 py-3 w-72">
        <p className="text-lg font-bold text-black truncate block capitalize">
          {product.name}
        </p>
        <div className="flex items-center">
          <p className="text-lg font-semibold text-black cursor-auto my-3">
            {product.price} kr
          </p>
          <button className="ml-auto" onClick={() => onSelect(product)}>
            {isSelected ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 64 64"
                enable-background="new 0 0 64 64"
              >
                <path
                  d="M32,2C15.431,2,2,15.432,2,32c0,16.568,13.432,30,30,30c16.568,0,30-13.432,30-30C62,15.432,48.568,2,32,2z M25.025,50
	l-0.02-0.02L24.988,50L11,35.6l7.029-7.164l6.977,7.184l21-21.619L53,21.199L25.025,50z"
                  fill="#43a047"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-bag-plus"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                />
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
