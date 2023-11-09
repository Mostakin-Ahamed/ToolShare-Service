// 

import { useContext, useRef } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const AddService = () => {
    const {user}= useContext(AuthContext)
    console.log(user);

    
   
        const formRef = useRef()
        const handleNewService = e => {
            e.preventDefault();
            const form = new FormData(e.currentTarget);
            const serviceName = form.get('serviceName');
            const providerName = user.displayName;
            const price = form.get('price');
            const providerEmail = user.email;
            const providerImg=user.photoURL;
            const serviceArea=form.get('serviceArea')
            const photo = form.get('imageURL');
            const detail = form.get('details');
            
            const newService = { serviceName,providerName,providerEmail,providerImg,photo,serviceArea,price,detail}
            console.log(newService);
            formRef.current?.reset();
    
            fetch('http://localhost:5000/addService',{
                method: 'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newService)
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'New Service Added Successfully!',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }
            })
        }
    
        

    
    return (
        <div className="mb-48">
            <h2 className="text-3xl my-10 text-center">Add a new service!</h2>
            <form ref={formRef} onSubmit={handleNewService} className="w-1/2 lg:w-1/2 md:3/4 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Service Name</span>
                    </label>
                    <input type="text" name="serviceName" placeholder="Service Name" className="input input-bordered" required />
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
                    <input type="text" name="imageURL" placeholder="Image URL" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Service Area</span>
                    </label>
                    <input type="text" name="serviceArea" placeholder="Service Area" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="number" name="price" placeholder="Price" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Short Description</span>
                    </label>
                    <textarea name="details" placeholder="Details" className="textarea textarea-bordered textarea-lg w-full " required ></textarea>
                </div>
                
                <div className="form-control mt-6">
                    <button className="btn bg-blue-400">Add Product</button>
                </div>
            </form>
        </div>
    );
};

export default AddService;