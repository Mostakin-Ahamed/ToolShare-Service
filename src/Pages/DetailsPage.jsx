import { useLoaderData } from "react-router-dom";


const DetailsPage = () => {

    const detail= useLoaderData();
    const {image, name ,category, description, price}=detail
    
    return (
        <div>
            <div >
                <div className="flex justify-center bg-inherit lg:w-auto lg:h-auto md:w-auto md:auto w-auto h-auto  mb-10">
                    <div className="card card-compact md:w-auto md:h-auto lg:w-[1320px]  lg:h-[680px] bg-inherit ">
                        <figure><img className="object-cover h-full" src={image} alt="Shoes" /></figure>
                        {/* <div className="card-body w-auto h-auto md:w-auto md:h-auto lg:h-auto lg:w-auto">
                            <div className="card-actions lg:justify-start md:justify-center justify-center w-auto h-auto lg:w-[1320px] lg:-mt-36 lg:-mx-4 relative bg-[#0B0B0B80] lg:p-10">
                                <button className="btn h-auto w-auto text-center border-none text-black font-medium ">Price: ${price} </button>
                            </div>

                        </div> */}
                        <h2 className="card-title mb-5">Price: $ {price}</h2>
                        <h2 className="card-title mb-5">Brand Name:{category} </h2>
                        <h2 className="card-title mb-5">Name: {name}</h2>
                        <p className="font-medium text-lg mb-5">Details: {description}</p>
                        <button className="btn btn-warning h-auto w-auto text-center border-none text-black font-medium ">Add to cart </button>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default DetailsPage;