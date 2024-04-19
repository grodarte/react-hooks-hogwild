import React from "react";
import Nav from "./Nav";
import HogList from "./HogList";
import hogs from "../porkers_data";

console.log("This is the data you're working with")
console.log({hogs})

function App() {

	return (
		<div className="App">
			<Nav />
			<HogList hogs={hogs}/>
		</div>
	);
}

export default App;

