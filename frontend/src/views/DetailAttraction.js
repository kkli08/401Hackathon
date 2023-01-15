import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const DetailsScreen = (props) => {
//   const value = props.title;
// const passedValue = route.params.value;
    const location = useLocation();
    const api = location.state.api;
    console.log("this is api: ", api);

    const [data, setData] = useState(null);
    useEffect(() => {
    async function fetchData() {
        const response = await fetch('http://127.0.0.1:8000/attraction/'+api+'/');
        const json = await response.json();
        setData(json);
        }
        fetchData();
    }, []);

    if (!data) {
        return <div>Loading...</div>;
    }

    var obj = JSON.parse(JSON.stringify(data));
    return (
        <div>
            {/* <p>Passed Value: {location.state.api}</p> */}
            <h1 style={{color:'black',
                      zIndex:1,
                      fontSize:25,
                      textAlign:'center',
                      justifyContent:'center',
                      fontFamily:'papyrus'}}>{obj.name}</h1>
            <p><h1 style={{color:'black',
                      zIndex:1,
                      fontSize:20,
                    //   textAlign:'center',
                    //   justifyContent:'center',
                      fontFamily:'papyrus'}}>{obj.location}</h1></p>
            <p><h1 style={{color:'black',
                      zIndex:1,
                      fontSize:20,
                    //   textAlign:'center',
                    //   justifyContent:'center',
                      fontFamily:'papyrus'}}>{obj.descriptions}</h1></p>
            <p><h1 style={{color:'navy blue',
                      zIndex:1,
                      fontSize:20,
                    //   textAlign:'center',
                    //   justifyContent:'center',
                      fontFamily:'papyrus'}}>Average Rating: {obj.avgrate}</h1></p>
            {/* <p>{JSON.stringify(data)}</p> */}
            
        </div>
    );
}

export default DetailsScreen


