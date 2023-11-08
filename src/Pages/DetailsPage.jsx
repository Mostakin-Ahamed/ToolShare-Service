import { useContext } from "react";
import {  useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";


const DetailsPage = () => {

    const { user } = useContext(AuthContext)

    const detail = useLoaderData();
    const { image, name, category, description, price } = detail

    const addedToCart = e => {
        e.preventDefault();
        Swal.fire({
            title: 'Success!',
            text: 'Car added to cart!',
            icon: 'success',
            confirmButtonText: 'Cool'
        })
    }

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


                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                        <button className="btn btn-warning" onClick={() => document.getElementById('my_modal_5').showModal()}>Book This Service</button>
                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                                <div className="modal-action ">
                                    <form method="dialog">
                                        <div className="py-4">
                                            <h3 className="font-bold text-lg text-center">{name}</h3>
                                            <form className="w-1/2 lg:w-10/12 md:3/4 mx-auto">
                                                <figure><img className="object-cover h-full" src={image} alt="Shoes" /></figure>
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text">Service Name</span>
                                                    </label>
                                                    <input type="text" name="productName" placeholder="Product Name" defaultValue={name} readOnly className="input input-bordered" />
                                                </div>
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text">Service Provider Email</span>
                                                    </label>
                                                    <input type="text" name="productName"
                                                        placeholder="Service Provider Email"
                                                        readOnly className="input input-bordered" />
                                                </div>
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text">Your Email</span>
                                                    </label>
                                                    <input type="text" name="productName"
                                                        defaultValue={user.email}
                                                        readOnly
                                                        className="input input-bordered" required />
                                                </div>
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text">Service Taking Date</span>
                                                    </label>
                                                    <input type="date" name="serviceTakingDate"
                                                        className="input input-bordered" required />
                                                </div>

                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text">Special Instructions</span>
                                                    </label>
                                                    <input type="text" name="specialInstructions" placeholder="eg: address/area/customized service plan" className="input input-bordered" required />
                                                </div>
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text">Price</span>
                                                    </label>
                                                    <input type="text" name="imageURL"
                                                        defaultValue={price} readOnly
                                                        className="input input-bordered" />
                                                </div>
                                                <button onClick={addedToCart} className="  mt-4 btn  btn-warning h-auto w-full text-center border-none text-black font-medium ">Book This Item </button>

                                            </form>
                                        </div>
                                        {/* if there is a button in form, it will close the modal */}
                                        {/* <div className=" justify-center ">
                                            
                                        </div> */}
                                        <div className="flex justify-center ">
                                            <button className="btn bg-red-600 w-10/12">Close</button>
                                        </div>

                                    </form>

                                </div>
                            </div>
                        </dialog>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default DetailsPage;