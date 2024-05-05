import CurrentEvent from '../current-event/current-event'

function Advertisements() {
	return (
		<div className="grid grid-rows h-full gap-5 p-4">
			<div className=" border border-indigo-600 rounded-md">
				<CurrentEvent />
			</div>
			<div className=" border border-indigo-600 rounded-lg">
				Advertisement 1
			</div>
			<div className=" border border-indigo-600 rounded-lg">
				Advertisement 2
			</div>
			<div className=" border border-indigo-600 rounded-lg">
				Advertisement 3
			</div>
		</div>
	)
}

export default Advertisements
