import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const CategoriesCard = ({ category }) => {

    // eslint-disable-next-line react/prop-types
    const { name, image} = category;
    console.log(category);

    return (
        <div className="bg-inherit">
            <Link to={`/brandDetail/${name}`}>
                <div data-aos="fade-left" className="flex justify-center bg-inherit">
                    <div className="card w-96 bg-inherit shadow-xl h-full ">
                        <div className="h-80">
                            <img className="object-fit " src={image} alt="Shoes" />
                        </div>
                        <div className="card-body">
                            <h2 className="text-center font-bold text-xl">{name}</h2>
                            <div className="card-actions justify-center mt-6">
                                <button className="btn btn-ghost w-full">See More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default CategoriesCard;