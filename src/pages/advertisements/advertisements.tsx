import ComingEvents from '../current-event/upcoming-events'

function Advertisements() {
	return (
		<div className="grid grid-rows min-h-24 gap-4 p-4">
			<div className="border border-indigo-600 rounded-md min-h-36">
				<ComingEvents />
			</div>
			<div className="border border-indigo-600 rounded-lg min-h-36">
				Advertisement 1
			</div>
			<div className="border border-indigo-600 rounded-lg min-h-36">
				Advertisement 2
			</div>
			<div className="border border-indigo-600 rounded-lg min-h-36">
				Advertisement 3
			</div>
		</div>
	)
}

export default Advertisements
