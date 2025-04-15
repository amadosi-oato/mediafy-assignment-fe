import ProductGrid from "./components/product-grid";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <header>
        <h1 className="text-4xl font-bold text-center">Assignment 2025</h1>
      </header>
      <main>
        <h2 className="text-2xl text-center">Products</h2>
        <ProductGrid />
      </main>
    </div>
  );
}
