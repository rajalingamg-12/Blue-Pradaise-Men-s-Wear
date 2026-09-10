// import React, {
//     createContext,
//     useContext,
//     useEffect,
//     useState
// } from "react";

// const WishlistContext = createContext(null);


// /* ==========================================================
//    WISHLIST PROVIDER
// ========================================================== */

// export function WishlistProvider({ children }) {

//     const [wishlistItems, setWishlistItems] = useState(() => {

//         try {

//             const savedWishlist =
//                 localStorage.getItem("wishlist");

//             return savedWishlist
//                 ? JSON.parse(savedWishlist)
//                 : [];

//         } catch (error) {

//             console.error(
//                 "Error loading wishlist:",
//                 error
//             );

//             return [];

//         }

//     });


//     /* ======================================================
//        SAVE WISHLIST
//     ====================================================== */

//     useEffect(() => {

//         localStorage.setItem(
//             "wishlist",
//             JSON.stringify(wishlistItems)
//         );

//     }, [wishlistItems]);


//     /* ======================================================
//        ADD TO WISHLIST
//     ====================================================== */

//     const addToWishlist = (product) => {

//         setWishlistItems((currentItems) => {

//             const alreadyExists = currentItems.some(
//                 (item) => item.id === product.id
//             );

//             if (alreadyExists) {
//                 return currentItems;
//             }

//             return [
//                 ...currentItems,
//                 product
//             ];

//         });

//     };


//     /* ======================================================
//        REMOVE FROM WISHLIST
//     ====================================================== */

//     const removeFromWishlist = (id) => {

//         setWishlistItems((currentItems) => {

//             return currentItems.filter(
//                 (item) => item.id !== id
//             );

//         });

//     };


//     /* ======================================================
//        TOGGLE WISHLIST
//     ====================================================== */

//     const toggleWishlist = (product) => {

//         setWishlistItems((currentItems) => {

//             const alreadyExists = currentItems.some(
//                 (item) => item.id === product.id
//             );

//             if (alreadyExists) {

//                 return currentItems.filter(
//                     (item) => item.id !== product.id
//                 );

//             }

//             return [
//                 ...currentItems,
//                 product
//             ];

//         });

//     };


//     /* ======================================================
//        CHECK IF PRODUCT IS IN WISHLIST
//     ====================================================== */

//     const isInWishlist = (id) => {

//         return wishlistItems.some(
//             (item) => item.id === id
//         );

//     };


//     /* ======================================================
//        CLEAR ALL WISHLIST
//     ====================================================== */

//     const clearWishlist = () => {

//         setWishlistItems([]);

//     };


//     /* ======================================================
//        CONTEXT PROVIDER
//     ====================================================== */

//     return (

//         <WishlistContext.Provider
//             value={{

//                 wishlistItems,

//                 addToWishlist,

//                 removeFromWishlist,

//                 toggleWishlist,

//                 isInWishlist,

//                 clearWishlist

//             }}
//         >

//             {children}

//         </WishlistContext.Provider>

//     );

// }


// /* ==========================================================
//    USE WISHLIST HOOK
// ========================================================== */

// export function useWishlist() {

//     const context = useContext(WishlistContext);

//     if (!context) {

//         throw new Error(
//             "useWishlist must be used inside WishlistProvider"
//         );

//     }

//     return context;

// }

import React, {
    createContext,
    useContext,
    useEffect,
    useState
} from "react";

const WishlistContext = createContext(null);

export function WishlistProvider({ children }) {

    const [wishlistItems, setWishlistItems] = useState(() => {

        try {
            const savedWishlist =
                localStorage.getItem("wishlist");

            return savedWishlist
                ? JSON.parse(savedWishlist)
                : [];

        } catch (error) {
            console.error(
                "Error loading wishlist:",
                error
            );

            return [];
        }
    });


    /* ==================================================
       SAVE WISHLIST TO LOCAL STORAGE
    ================================================== */

    useEffect(() => {

        localStorage.setItem(
            "wishlist",
            JSON.stringify(wishlistItems)
        );

    }, [wishlistItems]);


    /* ==================================================
       ADD TO WISHLIST
    ================================================== */

    const addToWishlist = (item) => {

        setWishlistItems((currentItems) => {

            const exists = currentItems.some(
                (wishlistItem) =>
                    wishlistItem.id === item.id
            );

            if (exists) {
                return currentItems;
            }

            return [
                ...currentItems,
                item
            ];
        });
    };


    /* ==================================================
       REMOVE FROM WISHLIST
    ================================================== */

    const removeFromWishlist = (id) => {

        setWishlistItems((currentItems) =>
            currentItems.filter(
                (item) => item.id !== id
            )
        );
    };


    /* ==================================================
       CHECK WISHLIST
    ================================================== */

    const isInWishlist = (id) => {

        return wishlistItems.some(
            (item) => item.id === id
        );
    };


    /* ==================================================
       TOGGLE WISHLIST
    ================================================== */

    const toggleWishlist = (item) => {

        setWishlistItems((currentItems) => {

            const exists = currentItems.some(
                (wishlistItem) =>
                    wishlistItem.id === item.id
            );

            if (exists) {

                return currentItems.filter(
                    (wishlistItem) =>
                        wishlistItem.id !== item.id
                );

            }

            return [
                ...currentItems,
                item
            ];
        });
    };


    /* ==================================================
       CLEAR WISHLIST
    ================================================== */

    const clearWishlist = () => {

        setWishlistItems([]);

    };


    /* ==================================================
       CONTEXT
    ================================================== */

    return (
        <WishlistContext.Provider
            value={{
                wishlistItems,
                addToWishlist,
                removeFromWishlist,
                isInWishlist,
                toggleWishlist,
                clearWishlist
            }}
        >
            {children}
        </WishlistContext.Provider>
    );
}


/* ======================================================
   CUSTOM HOOK
====================================================== */

export function useWishlist() {

    const context = useContext(WishlistContext);

    if (!context) {
        throw new Error(
            "useWishlist must be used inside WishlistProvider"
        );
    }

    return context;
}