import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const CategoriesCard = ({ category }) => {

    // eslint-disable-next-line react/prop-types
    const {_id, name, image, description, price, providerEmail, providerImg } = category;
    

    return (
        <div className="bg-inherit flex justify-center shadow-sm rounded">
            <div data-aos="fade-left" className="flex justify-center bg-inherit">
                <div className="card w-96 bg-inherit  h-full ">
                    <div className="h-80 flex justify-center">
                        <img className="object-fit h-80" src={image} alt="Shoes" />
                    </div>
                    <div className="card-body">
                        <h2 className="text-center font-bold text-xl">{name}</h2>
                        <p className="text-center font-medium text-md">{description}</p>
                        <h2 className="text-center font-semibold text-lg">Price: ${price}</h2>
                        <div className="flex gap-10 justify-around">
                            <img className="w-10 rounded-full object-cover" src={providerImg} alt="" />
                            <p className=" font-medium text-md">Provider: {providerEmail}</p>
                        </div>
                        <div className=" card-actions justify-center mt-6">
                            <Link to={`/singleService/${_id}`}><button className="btn btn-ghost w-full">View Details</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoriesCard;