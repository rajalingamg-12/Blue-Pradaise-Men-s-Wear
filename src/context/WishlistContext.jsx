import React, {
    createContext,
    useContext,
    useEffect,
    useState
} from "react";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {

    const [wishlistItems, setWishlistItems] = useState(() => {

        const saved = localStorage.getItem("wishlist");

        return saved ? JSON.parse(saved) : [];

    });

    useEffect(() => {

        localStorage.setItem(

            "wishlist",

            JSON.stringify(wishlistItems)

        );

    }, [wishlistItems]);

    const addToWishlist = (product) => {

        const exists = wishlistItems.find(

            item => item.id === product.id

        );

        if (exists) return;

        setWishlistItems(prev => [

            ...prev,

            product

        ]);

    };

    const removeFromWishlist = (id) => {

        setWishlistItems(prev =>

            prev.filter(item => item.id !== id)

        );

    };

    const toggleWishlist = (product) => {

        const exists = wishlistItems.find(

            item => item.id === product.id

        );

        if (exists) {

            removeFromWishlist(product.id);

        } else {

            addToWishlist(product);

        }

    };

    const isInWishlist = (id) => {

        return wishlistItems.some(

            item => item.id === id

        );

    };

    return (

        <WishlistContext.Provider

            value={{

                wishlistItems,

                addToWishlist,

                removeFromWishlist,

                toggleWishlist,

                isInWishlist

            }}

        >

            {children}

        </WishlistContext.Provider>

    );

};

export const useWishlist = () => useContext(WishlistContext);