import { useState } from 'react'

const Times = () => {
	const [estTime, setEstTime] = useState(Date)
	const [nstTime, setNstTime] = useState(Date)

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

	return (
		<div>
			EST: {estTime} <br />
			NST: {nstTime}
		</div>
	)
}

export default Times
