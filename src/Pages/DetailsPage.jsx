import { useContext, useRef } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";


const DetailsPage = () => {
    const { user } = useContext(AuthContext)
    const detail = useLoaderData();
    console.log(detail);
    const { image, name, description, price, providerEmail } = detail
    const formRef = useRef()
    const addedToCart = event => {
        event.preventDefault();
        
        console.log('form submitted');
        const form = event.target;
        const userEmail = user.email
        const name = detail.name;
        const image = detail.image;
        const price = form.price.value;
        const instructions = form.instructions.value;
        const date = form.date.value;
        const description = detail.description;
        const providerEmail = detail.providerEmail;
        const serviceArea = detail.serviceArea;
        
        const bookedService = {
         userEmail, name, image,serviceArea, price, date, instructions, description, providerEmail
        }
        console.log(bookedService);
        fetch('https://tool-share-server.vercel.app/bookItems',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookedService)

        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Service added to cart!',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
                formRef.current?.reset();
            }
        })


        
    }

    return (
        <div>
            <div className="font-bold text-7xl text-center mb-20 ">
                <p>{name} Details</p>
            </div>
            <div className="mt-32">
                <div className="flex justify-center bg-inherit lg:w-auto lg:h-auto md:w-auto md:auto w-auto h-auto  mb-10">
                    <div className="card card-compact md:w-auto md:h-auto lg:w-[1520px]  lg:h-[680px] bg-inherit ">
                        <figure><img className="h-full" src={image} alt="Shoes" /></figure>
                        <h2 className="card-title mb-5">Price: $ {price}</h2>
                        <h2 className="card-title mb-5">Service Name: {name} </h2>
                        <h2 className="card-title mb-5">Service Provider Email: {providerEmail}</h2>
                        <p className="font-medium text-lg mb-5">Details: {description}</p>
                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                        <button className="btn btn-warning" onClick={() => document.getElementById('my_modal_5').showModal()}>Book This Service</button>
                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                                <div className="py-4">
                                    <h3 className="font-bold text-lg text-center">{name}</h3>
                                    <form onSubmit={addedToCart} className="w-1/2 lg:w-10/12 md:3/4 mx-auto">
                                        
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
                                                    defaultValue={providerEmail}
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
                                                <input type="date" name="date"
                                                    className="input input-bordered" required />
                                            </div>

                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Special Instructions</span>
                                                </label>
                                                <input type="text" name="instructions" placeholder="eg: address/area/customized service plan" className="input input-bordered" />
                                            </div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Price</span>
                                                </label>
                                                <input type="text" name="price"
                                                    defaultValue={price} readOnly
                                                    className="input input-bordered" />
                                            </div>
                                            <button className=" w-10/12 mt-4 btn font-medium ">Book This Item </button>
                                        



                                    </form>
                                </div>
                                <div className="modal-action ">
                                    <form method="dialog">

                                        {/* if there is a button in form, it will close the modal */}
                                        
                                        <div className="flex justify-center ">
                                            <button className="btn ">Close</button>
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