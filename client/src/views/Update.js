import React, { useEffect, useState } from 'react'
import { navigate, Link } from '@reach/router';
import axios from 'axios';


export default props => {
    const { id } = props;
    const [petName, setPetName] = useState('');
    const [petType, setPetType] = useState('');
    const [desc, setDesc] = useState('');

    const [skill1, setSkill1] = useState("")
    const [skill2, setSkill2] = useState("")
    const [skill3, setSkill3] = useState("")
    
    
    useEffect(() => { //gets the pet that we are updating
        axios.get('http://localhost:8000/api/pet/' + id)
            .then(res => {
                setPetName(res.data.petName);
                setPetType(res.data.petType);
                setDesc(res.data.desc);
                setSkill1(res.data.skill1);
                setSkill2(res.data.skill2);
                setSkill3(res.data.skill3);
            })
    }, [])


    const updatePet = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/pets/' + id +"/update", { 
            petName,
            petType,
            desc,
            skill1,
            skill2,
            skill3
        })
            .then(res=>{
                console.log(res); 
                navigate("/")
            })
        }
        return (
            <div>
            
            <Link to={"/"}>back to home</Link>
            
            <h1>Pet Shelter</h1>
            <h2>Edit {petName}</h2>

            <form onSubmit={updatePet}>
                <p>
                    <label>Pet Name</label><br />
                    <input type="text" 
                    name="petName" 
                    value={petName} 
                    onChange={(e) => { setPetName(e.target.value) }} />
                </p>
                <p>
                    <label>Pet Type</label><br />
                    <input type="text" 
                    name="petType"
                    value={petType} 
                    onChange={(e) => { setPetType(e.target.value) }} />
                </p>
                <p>
                    <label>Pet Description</label> <br/>
                    <input type="text"
                    name="desc"
                    value={desc}
                    onChange={(e) => { setDesc(e.target.value) }}/>
                </p>

                <p>Skills (optional)</p>

                <p>
                    <label>Skill 1:</label><br/>
                    <input type="text"
                    name="skill1"
                    value={skill1} 
                    onChange ={(e)=>setSkill1(e.target.value)}/>
                </p>
                <p>
                    <label>Skill 2:</label><br/>
                    <input type="text"
                    name="skill2"
                    value={skill2} 
                    onChange ={(e)=>setSkill2(e.target.value)}/>
                </p>
                <p>
                    <label>Skill 3:</label><br/>
                    <input type="text"
                    name="skill3"
                    value={skill3} 
                    onChange ={(e)=>setSkill3(e.target.value)}/>
                </p>

                <input type="submit" value="Edit Pet"/> <br/>
            </form>
        </div>
    )
}