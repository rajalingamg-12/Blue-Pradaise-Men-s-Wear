import { useEffect, useState } from "react";

import { 
    Link,
    useNavigate
} from "react-router-dom";


import logo from "../../assets/logo-blue.jpeg";


import { useCart } from "../../context/CartContext";

import { useWishlist } from "../../context/WishlistContext";



import {
    FaSearch,
    FaRegHeart,
    FaShoppingBag,
    FaRegUser,
    FaBars,
    FaTimes,
} from "react-icons/fa";


import "./Navbar.css";


import { menuItems } from "./menuData";



function Navbar(){



    const [scrolled,setScrolled] = useState(false);


    const [mobileMenu,setMobileMenu] = useState(false);



    // Search states

    const [searchOpen,setSearchOpen] = useState(false);

    const [searchText,setSearchText] = useState("");



    const navigate = useNavigate();





    const { cartItems } = useCart();


    const { wishlistItems } = useWishlist();







    const totalItems = cartItems.reduce(

        (total,item)=>

            total + item.quantity,

        0

    );





    const wishlistCount = wishlistItems.length;







    useEffect(()=>{


        const handleScroll=()=>{


            setScrolled(
                window.scrollY > 80
            );


        };



        window.addEventListener(
            "scroll",
            handleScroll
        );



        return()=>{


            window.removeEventListener(
                "scroll",
                handleScroll
            );


        };


    },[]);








    // Search submit


    const handleSearch=(e)=>{


        e.preventDefault();



        if(searchText.trim()){


            navigate(
                `/shop?search=${searchText}`
            );


            setSearchOpen(false);


            setSearchText("");


        }


    };







    return(



        <header

            className={

                scrolled

                ?

                "navbar active"

                :

                "navbar"

            }

        >



            <div className="container navbar-container">





                {/* LOGO */}



                <Link

                    to="/"

                    className="logo"

                >


                    <img

                        src={logo}

                        alt="Blue Paradise Logo"

                        className="logo-img"

                    />




                    <div className="logo-text">


                        <span>
                            BLUE
                        </span>


                        PARADISE



                        <small>
                            MEN'S WEAR
                        </small>



                    </div>



                </Link>









                {/* MENU */}




                <nav


                    className={

                        mobileMenu

                        ?

                        "nav-menu active"

                        :

                        "nav-menu"

                    }


                >



                    {

                        menuItems.map((item)=>(


                            <Link


                                key={item.title}


                                to={item.path}


                                onClick={()=>


                                    setMobileMenu(false)

                                }


                            >

                                {item.title}


                            </Link>



                        ))

                    }



                </nav>









                {/* ICONS */}





                <div className="nav-icons">







                    {/* SEARCH */}



                    <button

                        className="icon-btn"

                        onClick={()=>


                            setSearchOpen(
                                !searchOpen
                            )


                        }

                    >

                        <FaSearch />


                    </button>









                    {/* WISHLIST */}




                    <Link

                        to="/wishlist"

                        className="wishlist-icon"

                    >



                        <FaRegHeart />



                        {

                            wishlistCount > 0 &&


                            (

                                <span

                                    className="wishlist-count"

                                >

                                    {wishlistCount}


                                </span>


                            )


                        }



                    </Link>









                    {/* CART */}




                    <Link

                        to="/cart"

                        className="cart-icon"

                    >



                        <FaShoppingBag />



                        {

                            totalItems > 0 &&


                            (

                                <span

                                    className="cart-count"

                                >

                                    {totalItems}


                                </span>


                            )


                        }



                    </Link>









                    {/* LOGIN */}




                    <Link

                        to="/login"

                        className="user-icon"

                    >


                        <FaRegUser />


                    </Link>









                    {/* MOBILE MENU */}





                    <button


                        className="mobile-toggle"



                        onClick={()=>


                            setMobileMenu(
                                !mobileMenu
                            )


                        }


                    >



                        {

                            mobileMenu

                            ?

                            <FaTimes />

                            :

                            <FaBars />

                        }



                    </button>






                </div>







            </div>









            {/* SEARCH BOX */}





            {

                searchOpen &&



                (

                    <div className="search-overlay">


                        <form


                            className="search-box"


                            onSubmit={handleSearch}


                        >



                            <input


                                type="text"


                                placeholder="Search products..."


                                value={searchText}


                                onChange={(e)=>

                                    setSearchText(
                                        e.target.value
                                    )

                                }


                                autoFocus


                            />





                            <button

                                type="submit"

                            >


                                <FaSearch />


                            </button>




                        </form>


                    </div>


                )


            }





        </header>



    );


}



export default Navbar;