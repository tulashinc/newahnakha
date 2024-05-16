import Container from '../../components/container/Container.1'

function Contact() {
	return (
		<Container>
			<div>
				Hi, we would like to know you!
				<p className="text-red-500">Please enter following information</p>
				<form>
					<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
						Click me
					</button>
					<div className="w-half">
						<label
							htmlFor="first_name"
							className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
						>
							Name:
						</label>
						<input
							type="text"
							id="first_name"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-half p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Your Name:"
							required
						/>
					</div>
					<button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
						Click Me
					</button>
					<div>
						<input
							type="text"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-half p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="your age"
						/>
					</div>
				</form>
			</div>
		</Container>
	)
}

export default Contact
