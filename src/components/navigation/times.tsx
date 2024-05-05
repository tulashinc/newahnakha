import { useState } from 'react'

const Times = () => {
	const [estTime, setEstTime] = useState(Date)
	const [nstTime, setNstTime] = useState(Date)

	// const ESTTime = new Date().toLocaleTimeString('en-us', {
	// 	timeZone: 'America/New_York',
	// })

	// const NSTTime = new Date().toLocaleString('en-us', {
	// 	timeZone: 'Asia/Kathmandu',
	// })

	const updateESTTime = () => {
		const usESTTime = new Date().toLocaleTimeString('en-us', {
			timeZone: 'America/New_York',
		})
		setEstTime(usESTTime)
	}

	const updateNSTTime = () => {
		const NSTTime = new Date().toLocaleTimeString('en-us', {
			timeZone: 'Asia/Kathmandu',
		})
		setNstTime(NSTTime)
	}
	setInterval(updateESTTime, 1000)
	setInterval(updateNSTTime, 1000)

	// const ESTDate = new Date().toDateString()

	return (
		<div>
			EST: {estTime} <br />
			NST: {nstTime}
			{/* {ESTTime} <br /> */}
			{/* {NSTTime} <br /> */}
		</div>
	)
}

export default Times
