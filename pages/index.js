// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import { Layout } from "../components/Layout";
import { ProductItem } from "../components/ProductItem";
import data from "../utils/data";

export default function Home() {
  return (
    <Layout title="Home Page">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {data.products.map((product) => {
          // console.log(product);
          return <ProductItem product={product} key={product.slug} />;
        })}
      </div>
    </Layout>
  );
}
