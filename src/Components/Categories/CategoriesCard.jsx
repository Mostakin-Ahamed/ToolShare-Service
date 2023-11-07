import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const CategoriesCard = ({ category }) => {

    // eslint-disable-next-line react/prop-types
    const { name, image, description, price } = category;
    console.log(category);

    return (
        <div className="bg-inherit flex justify-center">

            <div data-aos="fade-left" className="flex justify-center bg-inherit">
                <div className="card w-96 bg-inherit  h-full ">
                    <div className="h-80">
                        <img className="object-fit" src={image} alt="Shoes" />
                    </div>
                    <div className="card-body">
                        <h2 className="text-center font-bold text-xl">{name}</h2>
                        <p className="text-center font-medium text-md">{description}</p>
                        <h2 className="text-center font-semibold text-lg">Price: ${price}</h2>
                        <div className=" card-actions justify-center mt-6">
                            <Link to={`/brandDetail/${name}`}><button className="btn btn-ghost w-full">See More</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoriesCard;