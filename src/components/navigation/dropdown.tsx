import { Link } from 'react-router-dom'

function Dropdown() {
	return (
		<div>
			<div className="absolute text-red-800 min-w-44 mt-5 flex flex-col justify-center shadow-2xl">
				{/* <a
					className="bg-amber-200 flex hover:bg-amber-300 px-6 p-1"
					href="./messages/president"
				> */}

				<Link
					className="bg-amber-200 flex hover:bg-amber-300 hover:text-orange-600 px-6 p-1"
					to="/messages/president"
				>
					President
				</Link>
				{/* President
				</a> */}
				{/* <a
					className="bg-amber-200 flex hover:bg-amber-300 px-6 p-1"
					href="./messages/vice-president"
				>
					Vice President
				</a> */}
				<Link
					className="bg-amber-200 flex hover:bg-amber-300 hover:text-orange-400 px-6 p-1"
					to="/messages/vice-president"
				>
					Vice President
				</Link>
				<Link
					className="bg-amber-100 flex hover:bg-amber-300 hover:text-blue-700 px-6 p-1"
					to="/messages/general-secretary"
				>
					General Secretary
				</Link>
				<a
					className="bg-green-200 flex hover:bg-green-300 hover:text-blue-700 px-6 p-1"
					href="./messages/president"
				>
					Secretary
				</a>
				<a
					className="bg-green-200 flex hover:bg-green-300 hover:text-orange-400 px-6 p-1"
					href="./messages/president"
				>
					Advisor
				</a>
			</div>
		</div>
	)
}

export default Dropdown
