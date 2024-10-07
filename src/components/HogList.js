import React, { useState } from "react";
import Hog from "./Hog";

function HogList({ hogList }){
    const hogElements = hogList.map(hog=>{
        return (
            <Hog key={hog.name} hog={hog}/>
        )
    })

    return (
        <div className="ui grid container">
            <div className="ui four column grid">
                {hogElements}
            </div>
        </div>
    )
}

export default HogList