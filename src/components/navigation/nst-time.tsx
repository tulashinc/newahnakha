import { useEffect, useState } from 'react'

function NstTime() {
	const [nstTime, setNstTime] = useState(
		new Date().toLocaleTimeString('en-us', { timeZone: 'Asia/Kathmandu' })
	)

	const npDate = new Date().toLocaleDateString('en-us', {
		timeZone: 'Asia/Kathmandu',
	})

	// const week_Day = new Date().toLocaleDateString('en-us', {
	// 	timeZone: 'Asia/Kathmandu',
	// })

	const week_Day = new Date(npDate).getDay()
	const dayOfWeek = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	]

	// const updateEstTime = () => {
	// 	const usEstTime = new Date().toLocaleTimeString('en-us', {
	// 		timeZone: 'America/New_York',
	// 	})

	useEffect(() => {
		const id = tickTime()
		return () => clearTimeout(id)
	}, [])

	const tickTime = () => {
		return setInterval(() => {
			setNstTime(() => nstTime)
		}, 1000)
	}

	return (
		<div className="p-2">
			{dayOfWeek[week_Day]}, {npDate}
			<br />
			Nepal: {nstTime}
		</div>
	)
}

export default NstTime
