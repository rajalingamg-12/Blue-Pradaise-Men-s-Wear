import shirtWhite from "../../../../assets/blueA.jpeg";
import shirtWhiteHover from "../../../../assets/blueA-hover.jpeg";

import shirtBlue from "../../../../assets/blueB.jpeg";
import shirtBlueHover from "../../../../assets/blueB-hover.jpeg";

import poloBlack from "../../../../assets/blueC.jpeg";
import poloBlackHover from "../../../../assets/blueC-hover.jpeg";

import jeansBlue from "../../../../assets/blueD.jpeg";
import jeansBlueHover from "../../../../assets/blueD-hover.jpeg";

import hoodies from "../../../../assets/blueE.jpeg";
import hoodiesHover from "../../../../assets/blueE-hover.jpeg";

import koreanPants from "../../../../assets/blueF.jpeg";
import koreanPantsHover from "../../../../assets/blueF-hover.jpeg";

import watches from "../../../../assets/blueG.jpeg";
import watchesHover from "../../../../assets/blueG-hover.jpeg";

import perfumes from "../../../../assets/blueH.jpeg";
import perfumesHover from "../../../../assets/blueH-hover.jpeg";


const productData = [

    {
        id: 1,
        name: "Premium Cotton Shirt & Pants",
        category: "Shirts & Pants",
        brand: "Louis Philippe",
        price: 1499,
        oldPrice: 1999,
        discount: 25,
        rating: 4.8,
        reviews: 126,
        size: ["M", "L", "XL"],
        color: "White",
        bestSelling: true,
        newest: true,
        image: shirtWhite,
        hoverImage: shirtWhiteHover
    },

    {
        id: 2,
        name: "Slim Fit Casual Shirt",
        category: "Shirts",
        brand: "Allen Solly",
        price: 1199,
        oldPrice: 1499,
        discount: 26,
        rating: 4.6,
        reviews: 95,
        size: ["S", "M", "L"],
        color: "Blue",
        bestSelling: false,
        newest: true,
        image: shirtBlue,
        hoverImage: shirtBlueHover
    },

    {
        id: 3,
        name: "Classic Polo T-Shirt",
        category: "T-Shirts",
        brand: "Peter England",
        price: 999,
        oldPrice: 1399,
        discount: 29,
        rating: 4.7,
        reviews: 182,
        size: ["M", "L", "XL"],
        color: "Black",
        bestSelling: true,
        newest: false,
        image: poloBlack,
        hoverImage: poloBlackHover
    },

    {
        id: 4,
        name: "Baggy Jeans",
        category: "Jeans",
        brand: "Levi's",
        price: 1499,
        oldPrice: 1999,
        discount: 22,
        rating: 4.9,
        reviews: 243,
        size: ["30", "32", "34", "36"],
        color: "Blue",
        bestSelling: true,
        newest: false,
        image: jeansBlue,
        hoverImage: jeansBlueHover
    },

    {
        id: 5,
        name: "Casual Hoodies",
        category: "Hoodies",
        brand: "Van Heusen",
        price: 1999,
        oldPrice: 2999,
        discount: 23,
        rating: 4.8,
        reviews: 87,
        size: ["M", "L", "XL"],
        color: "Grey",
        bestSelling: false,
        newest: true,
        image: hoodies,
        hoverImage: hoodiesHover
    },

    {
        id: 6,
        name: "Korean Baggy",
        category: "Korean Baggy",
        brand: "Jack & Jones",
        price: 2099,
        oldPrice: 2899,
        discount: 21,
        rating: 4.5,
        reviews: 156,
        size: ["M", "L", "XL", "XXL"],
        color: "Brown",
        bestSelling: true,
        newest: true,
        image: koreanPants,
        hoverImage: koreanPantsHover
    },

    {
        id: 7,
        name: "Premium Watches",
        category: "Watches",
        brand: "U.S.",
        price: 999,
        oldPrice: 1399,
        discount: 20,
        rating: 4.4,
        reviews: 72,
        size: ["Free Size"],
        color: "Back",
        bestSelling: false,
        newest: false,
        image: watches,
        hoverImage: watchesHover
    },

    {
        id: 8,
        name: "Premium Perfumes",
        category: "Perfumes",
        brand: "BlueSky,etc..",
        price: 2299,
        oldPrice: 2899,
        discount: 21,
        rating: 4.8,
        reviews: 138,
        size: ["30", "32", "34"],
        color: "Beige",
        bestSelling: true,
        newest: false,
        image: perfumes,
        hoverImage: perfumesHover
    }

];

export default productData;