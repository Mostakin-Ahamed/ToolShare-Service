import { useLoaderData } from "react-router-dom";
import CategoriesCard from "../Categories/CategoriesCard";


const Services = () => {

    const categories = useLoaderData();
    console.log(categories.length);


    return (
        <div>

            <div className="font-bold text-7xl text-center mb-9 ">
                <p>A few of our Products</p>
            </div>
            <div data-aos="fade-left" className=" w-10/12 mx-auto grid gap-9 md:gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-24">
                {
                    categories.map(category => <CategoriesCard key={category.id} category={category} ></CategoriesCard>)
                }
            </div>
        </div>
    );
};

export default Services;