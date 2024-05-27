"use client";
import BannerProducts from "@/components/Fragments/BannerProducts";
import ProductsContainer from "@/components/Fragments/ProductsContainer";

export default function Page() {
  return (
    <div className="mt-20">
      <BannerProducts />
      <ProductsContainer />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"></div>
    </div>
  );
}