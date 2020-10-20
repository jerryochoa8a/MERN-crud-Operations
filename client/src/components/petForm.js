import React, { useState } from 'react'
import axios from 'axios';
import { navigate, Link } from '@reach/router';


export default () => {
const [petName, setPetName] = useState(""); 
const [petType, setPetType] = useState("");
const [desc, setDesc] = useState("");

const [skill1, setSkill1] = useState("");
const [skill2, setSkill2] = useState("")
const [skill3, setSkill3] = useState("");

const [errors, setErrors] = useState([]); //errors


const onSubmitHandler = e => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/pet/new', {
        petName,
        petType,
        desc,
        skill1,
        skill2,
        skill3,
    })
        .then(res=>{
            console.log(res); 
            navigate('/')
        })
        .catch(err=>{
            const errorResponse = err.response.data.errors; 
            const errorArr = []; 
            for (const key of Object.keys(errorResponse)) { 
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr);
        })   
    }
    
    return (
        <div>
            <Link to={'/'}>back to home</Link>

            <h1>Pet Shelter</h1>
            <h2>Know a pet needing a home?</h2>

            <form onSubmit={onSubmitHandler}>
            {errors.map((err, index) => {
            return(
                <p style={{color:"red"}}  key={index}>{err}</p>
                )
                })} 
                <p>
                    <label>Pet Name</label><br/>
                    <input type="text" onChange = {(e)=>setPetName(e.target.value)}/>
                </p>
                <p>
                    <label>Pet Type</label><br/>
                    <input type="text" onChange = {(e)=>setPetType(e.target.value)}/>
                </p>
                <p>
                    <label>Pet Description</label><br/>
                    <input type="text" onChange ={(e)=>setDesc(e.target.value)}/>
                </p>

                <p>Skills (optional)</p>

                <p>
                    <label>Skill 1:</label><br/>
                    <input type="text" onChange ={(e)=>setSkill1(e.target.value)}/>
                </p>
                <p>
                    <label>Skill 2:</label><br/>
                    <input type="text" onChange ={(e)=>setSkill2(e.target.value)}/>
                </p>
                <p>
                    <label>Skill 3:</label><br/>
                    <input type="text" onChange ={(e)=>setSkill3(e.target.value)}/>
                </p>
                

                <input type="submit" value="Add Pet"/>
            </form>
        </div>
    )
}