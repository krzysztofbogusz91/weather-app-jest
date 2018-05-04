import React from 'react';

export const Table = (props) => {
    const isToday = props.type === "today";
    const city = 'Poznań';
    const title = isToday ? "CURRENT WEATHER" : `FORECAST FOR ${city}`
    const data = isToday ? "Name" : "Date"  
    
    return (
        <table className="table text-center  table-bordered table-light mt-4">
            <thead>
                <tr>
                    <th className='title' scope="col" colSpan="5">{title}</th>
                </tr>
                <tr>
                    <th scope="col">{data}</th> 
                    <th scope="col">Icon</th>
                    <th scope="col">Description</th>
                    <th scope="col">Temperature</th>
                    <th scope="col">Humidity</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    {/* <td>{data}</td>
                        <td>{dscr}</td>
                        <td>{icon}</td>
                        <td>{temp}</td>
                        <td>{humid}</td> */}
                </tr>
            </tbody>
        </table>
    );
}




