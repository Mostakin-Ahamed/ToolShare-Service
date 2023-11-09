import { useContext, useRef } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";


const Update = () => {
    const { user } = useContext(AuthContext)
    const formRef = useRef()

    const service = useLoaderData();
    console.log(service);

    const { _id, serviceName,  photo, serviceArea, price } = service;


    const handleUpdate = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const serviceName = form.get('serviceName');
        const price = form.get('price');
        const serviceArea = form.get('serviceArea')
        const photo = form.get('imageURL');
        const detail = form.get('details');

        const updatedService = {serviceName, photo, serviceArea, price, detail }
        console.log(updatedService);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Update it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/update/${_id}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(updatedService)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.modifiedCount > 0) {
                            Swal.fire(
                                'Success',
                                'Car detail updated successfully!',
                                'success'
                            )
                            formRef.current?.reset();
                        }
                    })
            }
        })

    }


    return (
        <div>
            <div className="py-4">
                <h3 className="font-bold text-lg text-center">{name}</h3>
                <form ref={formRef} onSubmit={handleUpdate} className="w-1/2 lg:w-1/2 md:3/4 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Service Name</span>
                    </label>
                    <input type="text" name="serviceName" defaultValue={serviceName} placeholder="Service Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Name</span>
                    </label>
                    <input type="text" name="providerName" 
                    defaultValue={user.displayName}
                    readOnly className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Email</span>
                    </label>
                    <input type="text" name="providerEmail" 
                    defaultValue={user.email}
                    readOnly
                    className="input input-bordered" required />
                </div>
                
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Image URL</span>
                    </label>
                    <input type="text" name="imageURL" defaultValue={photo} placeholder="Image URL" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Service Area</span>
                    </label>
                    <input type="text" defaultValue={serviceArea} name="serviceArea" placeholder="Service Area" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="number" defaultValue={price} name="price" placeholder="Price" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Short Description</span>
                    </label>
                    <textarea name="details" placeholder="Details" className="textarea textarea-bordered textarea-lg w-full " required ></textarea>
                </div>
                
                <div className="form-control mt-6 flex">
                    <button className="btn bg-blue-400">Update Service</button>
                    
                </div>
            </form>
            </div>
        </div>
    );
};

export default Update;