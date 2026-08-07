import "./CategorySection.css";
import categories from "./categoryData";
import { FaArrowRight } from "react-icons/fa";

function CategorySection() {

    return (

        <section className="category-section">

            <div className="container">

                <div className="section-header">

                    <span>SHOP BY CATEGORY</span>

                    <h2>
                        Find Your Signature Style
                    </h2>

                    <p>
                        Explore premium collections designed for every occasion.
                    </p>

                </div>

                <div className="category-grid">

                    {categories.map((item) => (

                        <div
                            className="category-card"
                            key={item.id}
                        >

                            <img
                                src={item.image}
                                alt={item.title}
                            />

                            <div className="category-overlay">

                                <h3>{item.title}</h3>

                                <button>

                                    Shop Now

                                    <FaArrowRight/>

                                </button>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

}

export default CategorySection;