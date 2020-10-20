import React, { useEffect, useState } from 'react';
import axios from 'axios'
import AllDaPets from '../components/allDaPets';

export default () => {
    const [pets, setPets] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/pets')
            .then(res=>{
                setPets(res.data);
                setLoaded(true);
            });
    },[])

    const removeFromDom = petsID => {
        setPets(pets.filter(pets => pets._id != petsID));
    }

    return (
        <div>
           <hr/>
           {loaded && <AllDaPets pets={pets} removeFromDom={removeFromDom}/>}
        </div>
    )
}