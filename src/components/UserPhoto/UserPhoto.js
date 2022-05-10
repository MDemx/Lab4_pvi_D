import React, { useEffect, useState } from "react"
import './UserPhoto.css';
import Image from 'react-bootstrap/Image'
import { Container, Col, Row } from 'react-bootstrap';

function UserPhoto() {

	const [imgUrl, setImgUrl] = useState();

	useEffect(() => {
		fetch('https://random.dog/woof.json?ref=apilist.fun')
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				setImgUrl(data.url);
				console.log(data);
			});
	}, [])


	return (
		<div className="user-photo">
			<Container>
				<Row>
					<Col>
						<Image id="dog-img" src={imgUrl} roundedCircle alt="dog" />
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default UserPhoto;