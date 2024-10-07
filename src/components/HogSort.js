import React from "react";

function HogSort({ onSortChange }){
    return (
        <div>
            <label>
                
                <select onChange={onSortChange}>
                    <option value="">Sort by</option>
                    <option name="name" value="name">Name</option>
                    <option name="weight" value="weight">Weight</option>
                </select>
            </label>
        </div>
    )
}

export default HogSort