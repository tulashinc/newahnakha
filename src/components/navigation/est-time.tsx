import { useState } from 'react'

function EstTime() {
	const [estTime, setEstTime] = useState()

	const nyDate = new Date().toLocaleDateString('en-us', {
		timeZone: 'America/New_York',
	})

	const week_Day = new Date(nyDate).getDay()
	const dayOfWeek = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	]

	const updateEstTime = () => {
		const usEstTime = new Date().toLocaleTimeString('en-us', {
			timeZone: 'America/New_York',
		})
		setEstTime(usEstTime)
	}
	setInterval(updateEstTime, 1000)

	return (
		<div className="p-2">
			{dayOfWeek[week_Day]}, {nyDate}
			<br />
			USA EST: {estTime}
		</div>
	)
}

export default EstTime
