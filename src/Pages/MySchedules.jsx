import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import BookingRow from "../Components/BookingRow/BookingRow";


const MySchedules = () => {

    const { user } = useContext(AuthContext);
    const [schedules, setSchedules]= useState([]);
    const url = `https://tool-share-server.vercel.app/mySchedules?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setSchedules(data))
    }, [url])


    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Service Name and Area</th>
                            <th>Instructions an Price</th>
                            <th>Service Date</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                            schedules.map(schedule =><BookingRow 
                            key={schedule._id} schedule={schedule}></BookingRow>)
                        }
                    </tbody>
                   

                </table>
            </div>
        </div>
    );
};

export default MySchedules;