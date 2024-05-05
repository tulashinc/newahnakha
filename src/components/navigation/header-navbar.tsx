import { Link } from 'react-router-dom'
import EstTime from './est-time'
import NstDateTime from './nst-date-time'
import Dropdown from './dropdown'

function HeaderNavbar() {
	return (
		// <div className="flex items-center">
		// 	<div className="text-yellow-300 font-bold px-2 py-2">
		// 		<EstTime />
		// 	</div>

		// 	<div className="flex justify-between py-2 px-16 text-white text-2xl font-bold">
		// 		{/* <div className="flex items-center w-full gap-8"> */}
		// 		{/* <Link to="/">Home</Link> */}
		// 		<div className="flex">
		// 			<Link to="/history">History</Link>
		// 			<Link to="/events">Events</Link>
		// 			<Link to="/messages">Messages</Link>
		// 		</div>
		// 		<div className="px-10">
		// 			<Link to="/">
		// 				<img
		// 					src="Logo_Background.jpg"
		// 					className="h-28 absolute top-0 rounded-3xl"
		// 				/>
		// 			</Link>
		// 		</div>
		// 		<div>
		// 			<Link to="/contact">Contact Us</Link>
		// 			<Link to="/about">About Us</Link>
		// 			<Link to="/gallery">Gallery</Link>
		// 		</div>
		// 		{/* </div> */}
		// 	</div>

		// 	<div className="text-blue-500 font-bold px-10 py-2">
		// 		<NstDateTime />
		// 	</div>
		// </div>

		<>
			<div className="flex flex-wrap justify-between text-white h-16">
				<div className="text-yellow-300 px-2">
					<EstTime />
				</div>
				<div className="flex items-center gap-8 font-bold">
					<Link className="h-16 py-5 px-3" to="/history">
						History
						<div
							id="dropdownHover"
							className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
						>
							<ul
								className="py-2 text-sm text-gray-700 dark:text-gray-200"
								aria-labelledby="dropdownHoverButton"
							>
								<li>
									<a
										href="#"
										className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
									>
										Introduction
									</a>
								</li>
								<li>
									<a
										href="#"
										className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
									>
										Objectives
									</a>
								</li>
								<li>
									<a
										href="#"
										className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
									>
										Current EC Members
									</a>
								</li>
								<li>
									<a
										href="#"
										className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
									>
										Immediate EC Members
									</a>
								</li>
								<li>
									<a
										href="#"
										className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
									>
										By Laws
									</a>
								</li>
							</ul>
						</div>
						{/* </div> */}
					</Link>
					<Link className="h-16 py-5 px-3" to="/events">
						Events
					</Link>
					<Link className="h-16 py-5 px-3 hover:visible" to="/messages">
						Messages
						<Dropdown />
					</Link>
				</div>
				<div>
					<Link to="/">
						<img
							src="Logo_Background_1.jpg"
							className="h-32 absolute top-0 rounded-3xl"
						/>
					</Link>
				</div>
				<div className="flex items-center gap-8 font-bold">
					<Link to="/contact">Contact Us</Link>
					<Link to="/about">Media</Link>
					<Link to="/gallery">
						<div className="hover:bg-sky-700 hover:inline-block">Gallery</div>
						<div className="bg-green-600 px-4 flex flex-col">
							<a href="_blank">Ihee</a>
							<a href="_blank">Yomari</a>
							<a href="_blank">Pahan</a>
						</div>
					</Link>
				</div>
				<div className="text-blue-400 px-2">
					<NstDateTime />
				</div>
				{/* <div>Hello World. This is my new world</div> */}
			</div>
		</>
	)
}

export default HeaderNavbar
