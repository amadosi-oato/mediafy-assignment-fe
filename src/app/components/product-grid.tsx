"use client";

import React, { useEffect, useState } from "react";
import { getProducts, GetProductsResponse } from "../api/getProducts";
import ProductCard from "./product-card";
import TagsMenu from "./tags-menu";

const ProductGrid: React.FC = () => {
  console.log("ProductGrid rendered");

  const [data, setData] = useState<GetProductsResponse | null>(null);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  useEffect(() => {
    getProducts().then((response) => {
      setData(response);
    });
  }, []);

  if (!data) {
    return null;
  }

  const tags = [...new Set(data.data.map((product) => product.tags).flat())];

  const products = data.data.filter((product) => {
    if (!selectedTag) {
      return true;
    }
    return product.tags.includes(selectedTag);
  });

  return (
    <>
      <section className="my-5">
        <TagsMenu
          tags={tags}
          onSelect={(tag) => setSelectedTag(tag)}
          selectedTag={selectedTag}
        />
      </section>
      <section className="w-fit mx-auto grid grid-cols-3 justify-items-center justify-center gap-14 mt-10 mb-5">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isSelected={product.id === selectedId}
            onSelect={(product) => setSelectedId(product.id)}
          />
        ))}
      </section>
    </>
  );
};

export default ProductGrid;
