import { useState } from 'react'

function NstTime() {
	const [nstTime, setNstTime] = useState()

	const nepaDate = new Date().toLocaleDateString('en-us', {
		timeZone: 'Asia/Kathmandu',
	})

	const week_Day = new Date(nepaDate).getDay()
	const dayOfWeek = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	]

	const updateNstTime = () => {
		const nstTime = new Date().toLocaleTimeString('en-us', {
			timeZone: 'Asia/Kathmandu',
		})
		setNstTime(nstTime)
	}
	setInterval(updateNstTime, 1000)

	return (
		<div className="p-2">
			{dayOfWeek[week_Day]}, {nepaDate}
			<br />
			Nepal: {nstTime}
		</div>
	)
}

export default NstTime
