import React, {useState} from "react";
import NewHogForm from "./NewHogForm";
import Filter from "./Filter";
import HogTile from "./HogTile";
import { v4 as uuid } from "uuid";

function HogList( {hogs} ){
	const [hogData, setHogData] = useState(hogs)
    const [isChecked, setIsChecked] = useState(false)
    const[sortBy, setSortBy] = useState("All")


    const hogElements = hogData.map(hog=>{
        return <HogTile key={uuid()} hog={hog}/>
    })

    function handleSubmit(newHog){
        setHogData([
            ...hogData,
            newHog
        ])
    }

    function handleCheckboxChange(e){
        setIsChecked(e.target.checked)

        if(e.target.checked){
            const greasedHogs = hogData.filter(hog=>hog.greased === true)
            setHogData(greasedHogs)
        } else {
            setHogData(hogs)
        }
    }

    function handleSortChange(e){
        const hogSorter = e.target.value
        setSortBy(hogSorter)

        if(hogSorter === "all"){
            setHogData(hogs)
        } else if (hogSorter === "name"){
            const sortedHogs = hogData.sort((a,b)=> a.name.localeCompare(b.name))
            setHogData(sortedHogs)
        } else {
            const sortedHogs = hogData.sort((a,b)=> a.weight - b.weight)
            setHogData(sortedHogs)
        }
    }

    return (
        <div className="HogList">
            <NewHogForm onNewHogSubmit={handleSubmit}/>
            <Filter isChecked={isChecked} onCheckboxChange={handleCheckboxChange} sortBy={sortBy} onSortChange={handleSortChange}/>
            <ul className="ui container three column grid">
                {hogElements}
            </ul>
        </div>
    )
}

export default HogList