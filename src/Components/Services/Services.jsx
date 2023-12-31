import { Link, useLoaderData } from "react-router-dom";
import CategoriesCard from "../Categories/CategoriesCard";


const Services = () => {

    const categories = useLoaderData();
    console.log(categories.length);
    const pages = []
    for ( let i=1; i <= 4;i++){
        pages.push(i)
        console.log(pages);
    }
    const newCategories = categories.slice(0,8);


    return (
        <div>
            <div className="font-bold text-7xl text-center mb-9 ">
                <p>A few of our Services</p>
            </div>
            <div data-aos="fade-left" className=" w-10/12 mx-auto grid gap-9 md:gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-24">
                {
                    newCategories.map( (category => <CategoriesCard key={category.id} category={category}></CategoriesCard>))
                }
            </div>
            <div className="flex justify-center">
                <Link to={'/services'}><button className="btn btn-warning">All Of Our Services</button></Link>
            </div>
        </div>
    );
};

export default Services;