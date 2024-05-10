import { Link } from 'react-router-dom'
import EstTime from './est-time'
import NstDateTime from './nst-date-time'
import Dropdown from './dropdown'

function HeaderNavbar() {
	return (
		<>
			<div className="flex flex-wrap justify-between text-white h-16">
				<div className="text-yellow-300 px-2">
					<EstTime />
				</div>
				<div className="flex items-center gap-8 font-bold">
					<Link className="h-16 py-5 px-1" to="/history">
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
					<Link className="h-16 py-5 px-1 hover:bg-green-700" to="/events">
						Events
					</Link>
					<Link className="h-16 py-5 px-1 hover:block" to="/messages">
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
					<Link className="h-16 py-5 px-1" to="/contact">
						Contact Us
					</Link>
					<Link className="h-16 py-5 px-1" to="/about">
						Media
					</Link>
					<Link className="h-16 py-5 px-1" to="/gallery">
						<div className="hover:bg-sky-700 hover:inline-block relative">
							Gallery
						</div>
						<div className="flex flex-col absolute shadow-2xl py-5 text-red-800">
							<a
								className="bg-amber-200 flex hover:bg-amber-300 px-6 p-1"
								href="_blank"
							>
								Ihee
							</a>
							<a
								className="bg-amber-200 flex hover:bg-amber-300 px-6 p-1"
								href="_blank"
							>
								Yomari
							</a>
							<a
								className="bg-amber-200 flex hover:bg-amber-300 px-6 p-1"
								href="_blank"
							>
								Pahan Chahre
							</a>
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
