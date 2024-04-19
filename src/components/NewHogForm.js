import React, { useState } from "react";

function NewHogForm({onNewHogSubmit}){
    const [newPigData, setNewPigData] = useState({
        name: "",
        weight: "",
        specialty: "",
        image: "",
        "highest medal achieved": "bronze",
        greased: false,
    })

    function handleFormChange(e){
        if (e.target.type === "checkbox"){
            const name = e.target.name
            const value = e.target.checked
            setNewPigData({
                ...newPigData,
                [name]: value,
            })
        } else {
            const name = e.target.name
            const value = e.target.value
            setNewPigData({
                ...newPigData,
                [name]: value,
            })
        }
    }


    return (
        <form className="ui form" onChange={handleFormChange} onSubmit={(e)=>{
            e.preventDefault()
            onNewHogSubmit(newPigData)
            e.target.reset()
            }}>
            <div className="field">
                <label>Hog Name</label>
                <input type="text" name="name" placeholder="Hog Name"/>
            </div>
            <div className="field">
                <label>Specialty</label>
                <input type="text" name="specialty" placeholder="Specialty"/>
            </div>
            <div className="field">
                <label>Weight</label>
                <input type="number" name="weight" placeholder="Weight"/>
            </div>
            <div className="field">
                <label>Image URL</label>
                <input type="text" name="image" placeholder="image URL"/>
            </div>
            <div className="field">
                <label>Highest Medal Achieved</label>
                <select name="highest medal achieved">
                        <option value="bronze">bronze</option>
                        <option value="silver">silver</option>
                        <option value="gold">gold</option>
                    </select>
            </div>
            <div className="field">
                <label>
                    <input className="ui checkbox" type="checkbox" name="greased"/>
                    Greased
                </label>
            </div>
                
            <input className="ui button" type="submit" value="Add New Hog"/>
        </form>
    )
}

export default NewHogForm