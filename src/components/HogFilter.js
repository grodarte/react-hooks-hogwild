import React from "react";

function HogFilter({ filterGrease, onFilterChange }){
    return (
        <div className="ui checkbox">
            <input type="checkbox" name="greased" checked={filterGrease} onChange={onFilterChange}/>
            <label>Show me greasers</label>
        </div>
    )
}

export default HogFilter