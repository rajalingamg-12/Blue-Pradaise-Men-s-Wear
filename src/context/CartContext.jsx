// import React, {
//     createContext,
//     useContext,
//     useEffect,
//     useState
// } from "react";

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {

//     const [cartItems, setCartItems] = useState(() => {

//         const savedCart = localStorage.getItem("cart");

//         return savedCart ? JSON.parse(savedCart) : [];

//     });

//     useEffect(() => {

//         localStorage.setItem(
//             "cart",
//             JSON.stringify(cartItems)
//         );

//     }, [cartItems]);

//     const addToCart = (product) => {

//         setCartItems(prev => {

//             const existing = prev.find(
//                 item => item.id === product.id
//             );

//             if (existing) {

//                 return prev.map(item =>
//                     item.id === product.id
//                         ? {
//                               ...item,
//                               quantity: item.quantity + 1
//                           }
//                         : item
//                 );

//             }

//             return [

//                 ...prev,

//                 {

//                     ...product,

//                     quantity: 1

//                 }

//             ];

//         });

//     };

//     const increaseQuantity = (id) => {

//         setCartItems(prev =>
//             prev.map(item =>
//                 item.id === id
//                     ? {
//                           ...item,
//                           quantity: item.quantity + 1
//                       }
//                     : item
//             )
//         );

//     };

//     const decreaseQuantity = (id) => {

//         setCartItems(prev =>
//             prev.map(item =>
//                 item.id === id && item.quantity > 1
//                     ? {
//                           ...item,
//                           quantity: item.quantity - 1
//                       }
//                     : item
//             )
//         );

//     };

//     const removeItem = (id) => {

//         setCartItems(prev =>
//             prev.filter(item => item.id !== id)
//         );

//     };

//     const clearCart = () => {

//         setCartItems([]);

//     };

//     return (

//         <CartContext.Provider

//             value={{

//                 cartItems,

//                 addToCart,

//                 increaseQuantity,

//                 decreaseQuantity,

//                 removeItem,

//                 clearCart

//             }}

//         >

//             {children}

//         </CartContext.Provider>

//     );

// };

// export const useCart = () => useContext(CartContext);

import React, {
    createContext,
    useContext,
    useEffect,
    useState
} from "react";


const CartContext = createContext();


export function CartProvider({ children }) {

    /* ==========================================
       INITIAL CART
    ========================================== */

    const [cartItems, setCartItems] = useState(() => {

        const savedCart =
            localStorage.getItem("blueParadiseCart");

        return savedCart
            ? JSON.parse(savedCart)
            : [];

    });


    /* ==========================================
       SAVE CART
    ========================================== */

    useEffect(() => {

        localStorage.setItem(
            "blueParadiseCart",
            JSON.stringify(cartItems)
        );

    }, [cartItems]);


    /* ==========================================
       ADD TO CART
    ========================================== */

    const addToCart = (product) => {

        setCartItems((currentItems) => {

            const existingItem =
                currentItems.find(
                    (item) => item.id === product.id
                );


            /* PRODUCT ALREADY EXISTS */

            if (existingItem) {

                return currentItems.map((item) =>

                    item.id === product.id

                        ? {
                            ...item,
                            quantity:
                                (item.quantity || 1) + 1
                        }

                        : item

                );

            }


            /* NEW PRODUCT */

            return [

                ...currentItems,

                {
                    ...product,
                    quantity: 1
                }

            ];

        });

    };


    /* ==========================================
       INCREASE QUANTITY
    ========================================== */

    const increaseQuantity = (id) => {

        setCartItems((currentItems) =>

            currentItems.map((item) =>

                item.id === id

                    ? {
                        ...item,
                        quantity:
                            (item.quantity || 1) + 1
                    }

                    : item

            )

        );

    };


    /* ==========================================
       DECREASE QUANTITY
    ========================================== */

    const decreaseQuantity = (id) => {

        setCartItems((currentItems) =>

            currentItems
                .map((item) => {

                    if (item.id === id) {

                        const quantity =
                            (item.quantity || 1) - 1;


                        return {
                            ...item,
                            quantity
                        };

                    }

                    return item;

                })
                .filter(
                    (item) => item.quantity > 0
                )

        );

    };


    /* ==========================================
       REMOVE ITEM
    ========================================== */

    const removeItem = (id) => {

        setCartItems((currentItems) =>

            currentItems.filter(
                (item) => item.id !== id
            )

        );

    };


    /* ==========================================
       CLEAR CART
    ========================================== */

    const clearCart = () => {

        setCartItems([]);

    };


    /* ==========================================
       CART ITEM COUNT
    ========================================== */

    const cartCount = cartItems.reduce(

        (total, item) =>
            total + (item.quantity || 1),

        0

    );


    /* ==========================================
       CART SUBTOTAL
    ========================================== */

    const cartSubtotal = cartItems.reduce(

        (total, item) =>

            total +
            Number(item.price) *
            (item.quantity || 1),

        0

    );


    /* ==========================================
       CONTEXT VALUE
    ========================================== */

    const value = {

        cartItems,

        addToCart,

        increaseQuantity,

        decreaseQuantity,

        removeItem,

        clearCart,

        cartCount,

        cartSubtotal

    };


    return (

        <CartContext.Provider value={value}>

            {children}

        </CartContext.Provider>

    );

}


export function useCart() {

    return useContext(CartContext);

}