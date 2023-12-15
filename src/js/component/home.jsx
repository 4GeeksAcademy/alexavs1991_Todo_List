import React, { useState } from "react";

const tasks = [
	"Take the dog out",
	"Make dinner",
	"Buy groceries",
	"Feed the dog",
]


const Home = () => {

	const [inputItem, setInputItem] = useState("");
	const [todos, setTodos] = useState(tasks);


	return (
		<>
			<div className="container">
				<h1>To Do List</h1>
				<ul>
					
						<li>
							<input type="text" onChange={(e) => setInputItem(e.target.value)} value={inputItem} onKeyPress={(e) => { if (e.key === "Enter") { setTodos(todos.concat(inputItem)); setInputItem("") } }} placeholder="What needs to be done?"></input>
						</li>
						<div className="todo-list">


						{todos.map((item, index) => (
							<li key={index}>
								{item} 
								<i className="m-1 p-0 fas fa-trash" 
								onClick={() => setTodos(todos.filter((list, currentList) => index != currentList))}></i></li>
						))}
					</div>
				</ul>
				<div className="fs-6 fw-lighter">
					{todos.length} item left
				</div>
			</div>
		</>
	);
};

export default Home;
