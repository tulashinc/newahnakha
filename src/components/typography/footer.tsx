import { Link } from 'react-router-dom'

function Footer() {
	return (
		<>
			<div>
				<Link to="/">
					<img src="Logo.png" className="h-10 ml-5"></img>
				</Link>
			</div>
			<div>Home</div>
			<div>History</div>
			<div>Events</div>
			<div>Messages</div>
			<div>Contact Us</div>
			<div>About Us</div>
			<div>Gallery</div>
			<div>Feedback</div>
			(c) Newah Nakha New York
		</>
	)
}

export default Footer
