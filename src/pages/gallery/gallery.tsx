import Container from '../../components/container/container.11'

function Gallery() {
	return (
		<Container>
			<div className="flex justify-center items-center relative">
				<img
					src="../../Logo.png"
					className="opacity-10 absolute top-0 rounded-3xl"
				/>
			</div>
			Photo Galleries
			<ul>
				<li>World Newah Day - Daya Shakya</li>
				<li>World Newah Day - Youth Interaction</li>
				<li>Yo-mari Punhi Celebration</li>
				<li>Election</li>
			</ul>
		</Container>
	)
}

export default Gallery
