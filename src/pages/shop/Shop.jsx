import React, { useEffect, useMemo, useState } from "react";

import ShopHero from "./components/ShopHero/ShopHero";
import FilterSidebar from "./components/FilterSidebar/FilterSidebar";
import ProductGrid from "./components/ProductGrid/ProductGrid";
import Pagination from "./components/Pagination/Pagination";

import productData from "./components/ProductGrid/productData";

import "./Shop.css";

function Shop() {

const PRODUCTS_PER_PAGE = 4;

    const [search, setSearch] = useState("");

    const [sortBy, setSortBy] = useState("");

    const [currentPage, setCurrentPage] = useState(1);

    const [filters, setFilters] = useState({

        category: "",

        brand: "",

        color: "",

        size: "",

        price: 10000,

    });

    // Reset to first page whenever search/filter/sort changes

    useEffect(() => {

        setCurrentPage(1);

    }, [search, sortBy, filters]);

    const filteredProducts = useMemo(() => {

        let products = [...productData];

        // Search

        if (search.trim()) {

            products = products.filter((item) =>
                item.name
                    .toLowerCase()
                    .includes(search.toLowerCase())
            );

        }

        // Category

        if (filters.category) {

            products = products.filter(
                (item) => item.category === filters.category
            );

        }

        // Brand

        if (filters.brand) {

            products = products.filter(
                (item) => item.brand === filters.brand
            );

        }

        // Color

        if (filters.color) {

            products = products.filter(
                (item) => item.color === filters.color
            );

        }

        // Size

        if (filters.size) {

            products = products.filter(
                (item) => item.size.includes(filters.size)
            );

        }

        // Price

        products = products.filter(
            (item) => item.price <= filters.price
        );

        // Sorting

        switch (sortBy) {

            case "low":

                products.sort((a, b) => a.price - b.price);

                break;

            case "high":

                products.sort((a, b) => b.price - a.price);

                break;

            case "new":

                products.sort(
                    (a, b) => Number(b.newest) - Number(a.newest)
                );

                break;

            case "best":

                products.sort(
                    (a, b) => Number(b.bestSelling) - Number(a.bestSelling)
                );

                break;

            default:

                break;

        }

        return products;

    }, [search, sortBy, filters]);

    const totalPages = Math.ceil(
        filteredProducts.length / PRODUCTS_PER_PAGE
    );

    const currentProducts = filteredProducts.slice(

        (currentPage - 1) * PRODUCTS_PER_PAGE,

        currentPage * PRODUCTS_PER_PAGE

    );

    return (

        <div className="shop-page">

            <ShopHero />

            <section className="shop-container">

                <aside className="shop-sidebar">

                    <FilterSidebar

                        filters={filters}

                        setFilters={setFilters}

                    />

                </aside>

                <main className="shop-products">

                    <div className="shop-topbar">

                        <div className="shop-search">

                            <input

                                type="text"

                                placeholder="Search products..."

                                value={search}

                                onChange={(e) =>
                                    setSearch(e.target.value)
                                }

                            />

                        </div>

                        <select

                            value={sortBy}

                            onChange={(e) =>
                                setSortBy(e.target.value)
                            }

                        >

                            <option value="">
                                Sort By
                            </option>

                            <option value="new">
                                Newest
                            </option>

                            <option value="low">
                                Price Low → High
                            </option>

                            <option value="high">
                                Price High → Low
                            </option>

                            <option value="best">
                                Best Selling
                            </option>

                        </select>

                    </div>

                    <ProductGrid

                        products={currentProducts}

                    />

                    <Pagination

                        currentPage={currentPage}

                        totalPages={totalPages}

                        setCurrentPage={setCurrentPage}

                    />

                </main>

            </section>

        </div>

    );

}

export default Shop;