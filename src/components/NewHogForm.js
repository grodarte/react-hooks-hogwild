import React, { useState } from "react";

function NewHogForm({ onNewHogSubmit }){
    const blankNewHog = {
        name: "",
        weight: "",
        specialty: "",
        image: "",
        ["highest medal achieved"]: "",
        greased: false
    }

    const [newHog, setNewHog] = useState(blankNewHog)

    function handleChange(event){
        let name = event.target.name
        let value

        if(name === "greased"){
            value = event.target.checked
        } else {
            value = name === "weight" ? Number(event.target.value) : event.target.value
        }

        setNewHog({
            ...newHog,
            [name]: value,
        })

    }

    function handleSubmit(event){
        event.preventDefault()
        onNewHogSubmit(newHog)
        setNewHog(blankNewHog)
    }


    return (
        <form onSubmit={handleSubmit}>
            <label>New Hog Form:</label>
            <div className="ui input">
                <input name="name" type="text" value={newHog.name} placeholder="Name..." required onChange={handleChange}/>
                <input name="weight" type="number" step="0.1" value={newHog.weight} placeholder="Weight..." required onChange={handleChange}/>
                <input name="specialty" value={newHog.specialty} type="text" placeholder="Specialty..." required onChange={handleChange}/>
                <input name="image" value={newHog.image} type="text" placeholder="Image URL..." required onChange={handleChange}/>
                <select name="highest medal achieved" value={newHog["highest medal achieved"]} onChange={handleChange}>
                    <option value="">Highest Achieved</option>
                    <option value="bronze">Bronze</option>
                    <option value="silver">Silver</option>
                    <option value="gold">Gold</option>
                </select>
                <input type="checkbox" checked={newHog.greased} name="greased" onChange={handleChange}/>
                <label>Greased</label>
            </div>
            <input type="submit" value="Submit Hog"/>
        </form>
    )
}

export default NewHogForm