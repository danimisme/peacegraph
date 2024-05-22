"use client";
import DashboardCardProduct from "@/components/DashboardCardProduct";
import { Product } from "@/models/Product";
import { getData } from "@/services/getDataClient";
import { useEffect, useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    getData("/api/products")
      .then((res) => setProducts(res.data.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
        <div className="bg-pink-500 px-10 py-5 rounded-xl flex items-center justify-between">
          <div>
            <h1 className="text-white text-5xl mb-2">Products</h1>
            <p className="text-white  mb-1">
              {products.length} Products are available
            </p>
          </div>
          <button className="bg-transparent  hover:bg-blue-500 text-white font-semibold hover:text-blue-700 hover:border-blue-800 py-2 px-4 border-2 border-white hover:border-transparent rounded-xl flex items-center gap-2">
            <span>
              <IoMdAddCircleOutline className="h-6 w-6" />
            </span>
            Add Product
          </button>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 mt-3 p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
        {products &&
          products.map((product) => (
            <DashboardCardProduct key={product.id} {...product} />
          ))}
      </div>
    </div>
  );
}