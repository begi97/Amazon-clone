/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

export const ProductItem = ({ product }) => {
  return (
    <article className="card">
      <Link href={`/product/${product.slug}`}>
        <img
          src={product.image}
          alt={product.name}
          className="rounded shadow"
        />
      </Link>
      <div className="p-5 flex flex-col items-center justify-center">
        <Link href={`/product/${product.slug}`}>
          <h2 className="text-lg">{product.name}</h2>
        </Link>
        <p className="mb-2">{product.brand}</p>
        <p>${product.price}</p>
        <button className="primary-button" type="button">
          Add to cart
        </button>
      </div>
    </article>
  );
};
