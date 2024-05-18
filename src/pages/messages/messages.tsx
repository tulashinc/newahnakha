import { Link } from 'react-router-dom'
import Container from '../../components/container/container'

function Messages() {
	return (
		<Container>
			Messages are:
			<ul>
				<li>
					{/* <Link className="h-16 py-5 px-1 hover:block" to="/messages"></Link> */}
					<Link to="/messages/president">From President</Link>
				</li>
				<li>
					<Link to="/messages/vice-president">Vice President</Link>
				</li>
				<li>
					<Link to="/messages/general-secretary">General Secretary</Link>
				</li>
				<li>
					<Link to="/messages/secretary">Secretary</Link>
				</li>
			</ul>
		</Container>
	)
}

export default Messages
