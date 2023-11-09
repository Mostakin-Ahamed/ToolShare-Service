

// eslint-disable-next-line react/prop-types
const BookingRow = ({ schedule }) => {

    console.log(schedule);

        // eslint-disable-next-line react/prop-types
        const {image,name,serviceArea,price, date, instructions }=schedule


    return (
        
            <tr>
                <th>
                    <label>
                        <input type="checkbox" className="checkbox" />
                    </label>
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={image} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{name}</div>
                            <div className="text-sm opacity-50">{serviceArea}</div>
                        </div>
                    </div>
                </td>
                <td>
                    {instructions}
                    <br />
                    <span className="badge badge-ghost badge-sm">$: {price}</span>
                </td>
                <td>{date}</td>
                <th>
                    <button className="btn btn-ghost btn-xs">Details</button>
                </th>
            </tr>
    );
};

export default BookingRow;