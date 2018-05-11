import React from 'react';

export const Table = (props) => {
   // console.log(props.table)
    const isToday = props.type === "today";
    const title = isToday ? 'CURRENT WEATHER' : `FORECAST FOR NEXT 5 DAYS`

    const data = isToday ? "Name" : "Date";
    const list = props.table.map((a,i) => {
        return (
            <tr key={i + a.name}>
                <td>{a.name}</td>
                <td><img alt="icon" src={`http://openweathermap.org/img/w/${a.icon}.png`} /></td>
                <td>{a.description}</td>
                <td> {Math.round(a.temp -272.15) + ' C'}</td>
                <td>{a.humidity + ' %'}  </td>
            </tr>
        )
    })
    //ADD COMPONONENT WITH CHART AND TEST
    return (
        <table className="table table-striped text-center table-bordered table-light mt-4">
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
            <tbody className='tbody-class'>
                {list}
            </tbody>
        </table>
    );
}




