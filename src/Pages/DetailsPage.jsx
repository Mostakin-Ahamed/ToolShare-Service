import { Link, useLoaderData } from "react-router-dom";


const DetailsPage = () => {

    const detail = useLoaderData();
    const { _id, image, name, category, description, price } = detail

    return (
        <div>
            <div >
                <div className="flex justify-center bg-inherit lg:w-auto lg:h-auto md:w-auto md:auto w-auto h-auto  mb-10">
                    <div className="card card-compact md:w-auto md:h-auto lg:w-[1320px]  lg:h-[680px] bg-inherit ">
                        <figure><img className="object-cover h-full" src={image} alt="Shoes" /></figure>
                        <h2 className="card-title mb-5">Price: $ {price}</h2>
                        <h2 className="card-title mb-5">Brand Name:{category} </h2>
                        <h2 className="card-title mb-5">Name: {name}</h2>
                        <p className="font-medium text-lg mb-5">Details: {description}</p>

                        <div className=" justify-center mt-6">
                            <Link to={`/bookItems/${_id}`}><button className="btn  btn-warning h-auto w-full text-center border-none text-black font-medium ">Book This Item </button></Link>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default DetailsPage;