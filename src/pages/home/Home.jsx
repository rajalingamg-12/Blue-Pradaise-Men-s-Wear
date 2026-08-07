
import Hero from "./components/Hero/Hero";
import FeatureStrip from "./components/FeatureStrip/FeatureStrip";
import NewArrival from "./components/NewArrival/NewArrival";
import CategorySection from "./components/CategorySection/CategorySection";
import PromoBanner from "./components/PromoBanner/PromoBanner";
import BestSellers from "./components/BestSellers/BestSellers";
import ShopByStyle from "./components/ShopByStyle/ShopByStyle";
import TrendingCollection from "./components/TrendingCollection/TrendingCollection";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import BrandStory from "./components/BrandStory/BrandStory";
import Testimonials from "./components/Testimonials/Testimonials";
import InstagramGallery from "./components/InstagramGallery/InstagramGallery";
import Newsletter from "./components/Newsletter/Newsletter";
import VisitStore from "./components/VisitStore/VisitStore";

function Home() {
    return (
        <>
            <Hero />
            <FeatureStrip />
            <NewArrival />
            <CategorySection />
            <PromoBanner />
            <BestSellers />
            <ShopByStyle />
            <TrendingCollection />
            <WhyChooseUs />
            <BrandStory />
            <Testimonials />
            <InstagramGallery />
            <Newsletter />
            <VisitStore />



        </>
    );
}

export default Home;