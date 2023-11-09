// import { Link } from "react-router-dom";

import { Link } from "react-router-dom";
import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
const MyServiceCard = ({ service }) => {

    // eslint-disable-next-line react/prop-types
    const {_id, serviceName, detail ,serviceArea, price, photo } = service;
    const handleDelete = _id =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
             
              fetch(`http://localhost:5000/myServices/${_id}`,{
                method:'DELETE'
              })
              .then(res =>res.json())
              .then(data =>{
                if(data.deletedCount>0){
                    Swal.fire(
                        'Deleted!',
                        'Your cart item has been deleted.',
                        'success'
                    )
                }
              })
            }
          })

    }

    return (
        <div>
            <div className="flex items-center justify-center  w-full">
                <div className="hero w-full">
                    <div className="hero-content justify-evenly w-2/4 flex-col lg:flex-row">
                        <img src={photo} className="max-w-sm h-[70px]  rounded-lg shadow-2xl" />
                        <div className="ml-5 w-full">
                            <h1 className="text-2xl my-2 font-bold">{serviceName}</h1>
                            <h1 className="text-4xl my-2 font-bold">{serviceArea}</h1>
                            <p className="text-2xl my-2">Price: ${price}</p>
                            <p className="text-2xl my-2"> Rating: {detail} /10</p>
                            {/* <Link to={`/singleCarDetail/${_id}`} params={_id}><button className="btn btn-sm btn-primary m-2">See Details</button></Link> */}
                            <Link to={`/update/${_id}`} params={_id}><button className="btn  m-2 btn-warning">Update</button></Link>
                            <button onClick={()=>handleDelete(_id)} className="btn btn-error">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyServiceCard;