import React from 'react';
import DetailsScreen from "../views/DetailAttraction"
import { useNavigate } from "react-router-dom";
const Attraction = (props) => {
    // const 
    // const inputvalue = "exampleValue";
    // setValue(inputvalue);
    // function handleClick() {
    //     console.log('Clicked!');
    //     console.log(props.title);
    //     // navigation.navigate('/DetailAttraction', {value: value});
    // }

    const value = props.title;

    let navigate = useNavigate(); 
    const handleClick = () =>{ 
        console.log(props.api);
        let path = `/DetailAttraction`; 
        navigate(path, 
            {
                state: {api: props.api}
            });
    }
    return (
    <div>
        <div className="card">
        <h2>{props.title}</h2>
        <div className="actions">
            <button className="btn" onClick={handleClick}>Detail</button>
        </div>
        </div>
    </div>);
}

export default Attraction;