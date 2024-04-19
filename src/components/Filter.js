import React from "react";

function Filter({isChecked, onCheckboxChange, sortBy, onSortChange}){

    return (
        <div className="filterWrapper">
            <select className="combobox" name="sort" value={sortBy} onChange={onSortChange}>
                <option value="all">Sort By...</option>
                <option name="name" value="name">Name</option>
                <option name="weight" value="weight">Weight</option>
            </select>
            <div>
                <input className="ui checkbox" type="checkbox" name="greased" checked={isChecked} onChange={onCheckboxChange}/>
                <label>Gimme grease!</label>
            </div>
        </div>
    )
}

export default Filter