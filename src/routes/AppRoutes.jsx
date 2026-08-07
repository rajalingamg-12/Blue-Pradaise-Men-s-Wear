import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/home/Home";
import AboutUs from "../pages/aboutus/AboutUs";
import Shop from "../pages/shop/Shop";
import ProductDetails from "../pages/shop/ProductDetails/ProductDetails";
import Collections from "../pages/collections/Collections";
import Contact from "../pages/contact/ Contact";
import Cart from "../pages/cart/Cart";
import Wishlist from "../pages/wishlist/Wishlist";
import Checkout from "../pages/checkout/Checkout";
import OrderSuccess from "../pages/orderSuccess/OrderSuccess";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";

function AppRoutes() {
    return (
        <Routes>

            <Route element={<MainLayout />}>

                <Route path="/" element={<Home />} />

                <Route path="/about" element={<AboutUs />} />

                <Route path="/shop" element={<Shop />} />

                <Route
                    path="/shop/product/:id"
                    element={<ProductDetails />}
                />

                <Route
                    path="/collections"
                    element={<Collections />}
                />

                <Route path="/contact" element={<Contact />} />

                <Route path="/cart" element={<Cart />} />

                <Route path="/wishlist" element={<Wishlist />} />

                <Route path="/checkout" element={<Checkout />} />

                <Route
                    path="/order-success"
                    element={<OrderSuccess />}
                />

            </Route>

            {/* Authentication pages */}
            <Route path="/login" element={<Login />} />

            <Route path="/register" element={<Register />} />

        </Routes>
    );
}

export default AppRoutes;