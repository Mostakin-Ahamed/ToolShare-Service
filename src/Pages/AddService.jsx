// ref={formRef} onSubmit={handleNewProduct}

import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const AddService = () => {

    const {user}= useContext(AuthContext)
    console.log(user);
    return (
        <div className="mb-48">
            <h2 className="text-3xl my-10 text-center">Add a new car!</h2>
            <form  className="w-1/2 lg:w-1/2 md:3/4 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <input type="text" name="productName" placeholder="Product Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Name</span>
                    </label>
                    <input type="text" name="productName" 
                    defaultValue={user.displayName}
                    readOnly className="input input-bordered" required />
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
                        <span className="label-text">Image URL</span>
                    </label>
                    <input type="text" name="imageURL" placeholder="Image URL" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Service Area</span>
                    </label>
                    <input type="text" name="imageURL" placeholder="Service Area" className="input input-bordered" required />
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