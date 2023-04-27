import React from "react";
import Head from "next/head";
import Link from "next/link";

export const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title ? title + " - Amazon" : "Amazon"}</title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="stylesheet" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 justify-between shadow-md items-center px-4">
            <Link href="/" className="text-lg">
              Amazon
            </Link>
            <div>
              <Link href="/cart" className="p-2">
                Cart
              </Link>
              <Link href="/login" className="p-2">
                Login
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex justify-center items-center h-10 shadow-inner">
          <p>
            Copyright Amazon 2023
            {new Date().getFullYear().toString() === "2023"
              ? ""
              : new Date().getFullYear().toString()}
          </p>
        </footer>
      </div>
    </>
  );
};
