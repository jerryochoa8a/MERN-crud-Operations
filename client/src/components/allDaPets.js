import React from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';


export default props => {
    
    const addPet = (e) =>{
        navigate('/pets/new')
    }

    return (
        <div>
            <Link to={'/pets/new'}>Add a pet to the shelter</Link>

            <h1>Pet Shelter</h1>
            <h2>These pets are looking for a good home</h2>

            <h1>Pet Shelter</h1>

                        <tr>
                            <th>Name </th>
                            <th>|  Type  |</th>
                            <th>action</th>
                        </tr>
            {props.pets.map((pet, idx)=>{
                return (
                    <table key={idx}>
                        <tr>
                            <td>{pet.petName}</td>
                            <td>|  {pet.petType}  |</td>
                            <td>
                                <Link to={"/pets/"+ pet._id}> details </Link> .
                                <Link to={"/pets/"+ pet._id +"/edit"}>edit</Link>
                            </td>
                        </tr>
                    </table>    
                )
            })}
        </div>
    )
}