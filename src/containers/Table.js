import React from 'react';

export const Table = (props) => {
    const isToday = props.type === "today";
    const title = isToday ? 'CURRENT WEATHER' : `FORECAST FOR NEXT 5 DAYS`;

    const data = isToday ? "Name" : "Date";

    const displayList = [];

    props.table.forEach((a, i, arr) => {
        //get only date form string
        const name1 = a.name.substring(0, a.name.indexOf(' '));
        if (arr.length > 1) {
            if (i === 0) {
                //for first element push first date
                displayList.push({ name: name1 })
            }
            if (i < arr.length - 1) {

                const elem2 = arr[i + 1];
                const name2 = elem2.name.substring(0, elem2.name.indexOf(' '));

                //compare dates if diffrent push date tr    
                if (name1 === name2) {

                    displayList.push(a)

                } else {
                    displayList.push(a)
                    //for every other day push next date
                    displayList.push({ name: name2 })
                }
            }
        } else {
            //for the today list push first and only  element
            displayList.push(a)
        }
    })


    const list = displayList.map((a, i) => {
        //if name is converted to date only its length is always 10
        if (a.name.length === 10) {
<<<<<<< develop
            return <tr className="bg-primary text-light" key={i + a.name}><th colSpan="5">{a.name}</th></tr>
=======
            return <tr key={i + a.name}><th colSpan="5">{a.name}</th></tr>
>>>>>>> master
        }
        const name = isToday ? a.name : a.name.substring(a.name.indexOf(' '), a.name.lenght);

        return (
            <tr key={i + a.name}>
                <td>{name}</td>
                <td><img alt="icon" src={`http://openweathermap.org/img/w/${a.icon}.png`} /></td>
                <td>{a.description}</td>
                <td> {Math.round(a.temp - 272.15) + ' C'}</td>
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




