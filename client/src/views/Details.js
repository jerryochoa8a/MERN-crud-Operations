import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';



export default props => {
    const [pet, setPet] = useState({})
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/pet/" + props.id)
            .then(res => setPet(res.data))
    }, [])

    
    const deletePet = (petID) => {
        axios.delete('http://localhost:8000/api/pet/' +petID+ '/delete')
        .then(res=>{
            console.log(res); 
            navigate('/')
        })
    }

    return  (
        <div>
            <Link to={"/"} >Back to home</Link>

            <h1>Pet Shelter</h1>
            <h2>Details about: {pet.petName}</h2>
            <button onClick={(e)=>{deletePet(pet._id)}}>Adopt {pet.petName}</button>

            <p><b>Pet Type:</b> {pet.petType}</p>
            <p><b>Description:</b> {pet.desc}</p>
            <b><p>Skills:</p></b>
            <p>{pet.skill1}</p>
            <p>{pet.skill2}</p>
            <p>{pet.skill3}</p>

        </div>
    )
}