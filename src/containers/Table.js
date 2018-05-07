import React from 'react';

export const Table = (props) => {
    const isToday = props.type === "today";
    const title = isToday ? 'CURRENT WEATHER' : `FORECAST FOR`

    const data = isToday ? "Name" : "Date";
    const list = props.table.map((a,i) => {
        return (
            <tr key={a.id + i + a.name}>
                <td>{a.name}</td>
                <td>{a.description}</td>
                <td><img src={`http://openweathermap.org/img/w/${a.icon}.png`} /></td>
                <td> {Math.round(a.temp -272.15) + ' C'}</td>
                <td>{a.humidity + ' %'}  </td>
            </tr>
        )
    })
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




