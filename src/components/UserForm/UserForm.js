import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import UserPhoto from '../UserPhoto/UserPhoto'
import './UserForm.css'

const UserForm = () =>{
	
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [gender, setGender] = useState("");
	const [country, setCountry] = useState("Ukraine");
	const [age, setAge] = useState("18");
	const [suggestions, setSuggestions] = useState("Nothing.");
	
	const handleSubmit = (event)=>{

		if(!ValidateEmail(username))
		{
			alert("Wrong username format.");
			return;
		}

		if(username === "" || password === "" || suggestions === "" || gender === "")
		{
			alert("Wrong data");
			return;
		}

		let user_data = "Welcome, " + username + "!\n\n";
		user_data += "Here is your data:\n";
		user_data += "Gender: " + gender + "\n";
		user_data += "Age: " + age + "\n";
		user_data += "Country: " + country + "\n";
		user_data += "Suggestions: " + suggestions + "\n";
		alert(user_data); 
	}

	return(
		<div className="info-form">
			<UserPhoto />
			<Form className="my-form" onSubmit={handleSubmit}>
				<Form.Group controlId="username-field" className="info-item input-field" onChange={(event) => setUsername(event.target.value)}>
					<Form.Label>Enter username:</Form.Label>
					<Form.Control type="Username" placeholder="Email"/>
				</Form.Group>
				<Form.Group controlId="password-field" className="info-item input-field" onChange={(event) => setPassword(event.target.value)}>
					<Form.Label>Enter password:</Form.Label>
					<Form.Control type="password" placeholder="Password"/>
				</Form.Group>
				<Form.Group controlId="gender-field" className="info-item">
					<Form.Label>Choose your gender:</Form.Label>
				</Form.Group>
				<Form.Group controlId="gender-field" className="info-item input-radio">
					<Form.Check type="radio" name="gender-radios" id="male" label="male" onClick={(event) => setGender("male")}/>
					<Form.Check type="radio" name="gender-radios" id="female" label="female" onClick={(event) => setGender("female")}/>
				</Form.Group>
				<Form.Group controlId="age-field" className="info-item input-field" onChange={(event) => setAge(event.target.value)}>
					<Form.Label>Enter your age:</Form.Label>
					<Form.Control type="number" min="14" max="80" placeholder="Age"/>
				</Form.Group>
				<Form.Group controlId="country-field" className="info-item input-field" onChange={(event) => setCountry(event.target.value)}>
					<Form.Label>Enter where are you from:</Form.Label>
					<Form.Control as="select" defaultValue="Ukraine">
						<option>Ukraine</option>
						<option>Poland</option>
						<option>Norway</option>
						<option>Hungary</option>
					</Form.Control>
				</Form.Group>
				<Form.Group controlId="suggestions-field" className="info-item input-field" onChange={(event) => setSuggestions(event.target.value)}>
					<Form.Label>Enter what would you improve on this page:</Form.Label>
					<Form.Control as="textarea" rows={8} defaultValue="Nothing."/>
				</Form.Group>
				<Button className="info-item button" id="sbutton" variant="primary" type="submit">Submit</Button>
			</Form>
			<Nav className="info-item refs">
				<Nav.Item as="li">
					<Nav.Link target="_blank" href="https://www.chess.com/puzzles/problem/491418">Solve puzzle</Nav.Link>
				</Nav.Item>
				<Nav.Item as="li">
					<Nav.Link target="_blank" href="https://en.wikipedia.org/wiki/Rules_of_chess">Chess rules</Nav.Link>
				</Nav.Item>
			</Nav>
		</div>
	)
}

function ValidateEmail(inputText){

	return /^[a-zA-Z0-9_.-]*$/.test(inputText);
}

export default UserForm;