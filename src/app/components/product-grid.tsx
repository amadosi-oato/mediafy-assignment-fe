"use client";

import React, { useState } from "react";
import { GetProductsResponse } from "../api/getProducts";
import ProductCard from "./product-card";
import TagsMenu from "./tags-menu";

interface ProductGridProps {
  products: GetProductsResponse;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  const { data } = products;
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const tags = [...new Set(data.map((product) => product.tags).flat())];

  const filteredProducts = data.filter((product) => {
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
        {filteredProducts.map((product) => (
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
