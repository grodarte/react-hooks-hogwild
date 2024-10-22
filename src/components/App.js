import React, { useState } from "react";
import Nav from "./Nav";
import HogList from "./HogList";
import HogFilter from "./HogFilter";
import HogSort from "./HogSort";
import NewHogForm from "./NewHogForm";

import hogs from "../porkers_data";
console.log("Here is your data:", hogs)

function App() {
	const [allHogs, setAllHogs] = useState(hogs)
	const [filterGrease, setFilterGrease] = useState(false)
	const [sortBy, setSortBy] = useState("")

	const displayHogs = allHogs.filter(hog=>{
		if(filterGrease){
			return hog.greased ? hog : null
		} else {
			return hog
		}
	})

	function handleFilterChange(){
		setFilterGrease(filterGrease=>!filterGrease)
	}

	function handleSortChange(event){
		setSortBy(event.target.value)
	}

	function handleNewHogSubmit(newHogData){
		setAllHogs([
			...allHogs,
			newHogData
		])
	}

	return (
		<div className="App">
			<Nav />
			<HogFilter filterGrease={filterGrease} onFilterChange={handleFilterChange}/>
			<HogSort onSortChange={handleSortChange}/>
			<br/>
			<NewHogForm onNewHogSubmit={handleNewHogSubmit}/>
			<HogList hogList={sortBy ? displayHogs.sort((a,b)=> sortBy === "name" ? a[sortBy].localeCompare(b[sortBy]) : a[sortBy] - b[sortBy]) : displayHogs}/>
		</div>
	);
}

export default App;
