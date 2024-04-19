import React, {useState} from "react";

function HogTile( {hog} ){
    const [isClicked, setIsClicked] = useState(false)

    function handleHide(e){
        e.target.parentNode.parentNode.style.display = "none"
    }

    const pigTileBody = () => {
        if(isClicked){
            return (
                <>
                    <h3>
                        Hi! {hog.name} is my name, and {hog.specialty.toLowerCase()} is my game. 
                        I'm a {hog["highest medal achieved"]} medal winner, weighing in at {hog.weight} lbs. 
                        {hog.greased ? " Oh, and I love me some grease!" : " Oh, and no grease for me!"}
                    </h3>
                </>
            )
            
        } else {
            return (
                <>
                    <h3>{hog.name}</h3>
                    <p>Weight: {hog.weight}</p>
                    <p>Click on my profile card for more info!</p>
                    <button onClick={handleHide}>Hide Me</button>
                </>
            )
        }
    }
    
    
    return (
        <section className="column">
            <div className="pigTile" value={isClicked} onClick={()=>setIsClicked(!isClicked)}>
                <img className="ui image" src={hog.image} alt="idk"/>
                {pigTileBody()}
            </div>
        </section>
    )
}

export default HogTile