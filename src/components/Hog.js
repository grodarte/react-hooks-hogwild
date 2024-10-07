import React, { useState } from "react";

function Hog({ hog }){
    const [clicked, setClicked] = useState(false)

    return (
        <div className="column" key={hog.name} onClick={()=>setClicked(clicked=>!clicked)}>
                <div className="ui fluid card">
                    <div className="image">
                        <img src={hog.image} alt={hog.name}/>
                    </div>
                    <div className="content">
                        <div className="header" > 
                            {hog.name}
                        </div>
                        {!clicked ? null : <div className="description">
                            Specialty: {hog.specialty} 
                            <br/>
                            Weight: {hog.weight}
                            <br/>
                            {hog.greased ? "Greased" : "Not greased"}
                            <br/>
                            Highest Medal Achieved: {hog["highest medal achieved"]}
                        </div>}
                        
                    </div>
                </div>
            </div>
    )
}

export default Hog