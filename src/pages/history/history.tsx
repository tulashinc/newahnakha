import Container from '../../components/container/container.11'

function History() {
	return (
		<Container>
			<div className="flex justify-center items-center relative">
				<img
					src="../../Logo.png"
					className="opacity-10 absolute top-0 rounded-3xl"
				/>
			</div>
			History:
			<ul>
				<li>Introduction</li>
				<li>History</li>
				<li>Current EC Members</li>
				<li>Immediate EC Members</li>
				<li>By Laws</li>
			</ul>
		</Container>
	)
}

export default History
