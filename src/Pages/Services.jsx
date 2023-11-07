import { useLoaderData } from "react-router-dom";
import CategoriesCard from "../Components/Categories/CategoriesCard";

const Services = () => {

    const categories = useLoaderData()

    return (
        <div className="w-10/12 border border-black mx-auto">
            <div className="font-bold text-7xl text-center mb-9 ">
                <p>All of our products!</p>
            </div>
            <div className="input-group flex justify-center border py-6  border-red-600 mb-9">
                <form action="" className="flex" >
                    <input type="text" name="search" placeholder="Search…" className="input input-bordered w-[400px]" />
                    <button className="btn bg-yellow-200">Search</button>
                </form>
            </div>
            <div data-aos="fade-left" className="grid gap-9 md:gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-24">
                {
                    categories.map(category => <CategoriesCard key={category.id} category={category} ></CategoriesCard>)
                }
            </div>
            <div className="join flex justify-center">
                <button className="join-item btn">1</button>
                <button className="join-item btn btn-active">2</button>
                <button className="join-item btn">3</button>
                <button className="join-item btn">4</button>
            </div>
        </div>
    );
};

export default Services;