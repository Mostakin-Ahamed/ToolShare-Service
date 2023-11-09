import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import MyServiceCard from "../Components/MyServiceCard/MyServiceCard";


const MyServices = () => {

    const {user} = useContext(AuthContext)

    const[services, setServices]= useState([])
    const url = `https://tool-share-server.vercel.app/myServices?email=${user?.email}`

    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data =>setServices(data))
    },[url])

    return (
        <div>
            <div className="max-w-full  grid gap-9 md:gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mb-10">
                {
                    services.length>0 && services.map((service) => <MyServiceCard key={service.id} service={service}></MyServiceCard> )
                }
            </div>
            <div>     
        </div>
        </div>
    );
};

export default MyServices;