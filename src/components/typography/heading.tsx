interface IHeading {
	title: string
}

function Heading({ title }: IHeading) {
	return <div>{title}</div>
}

export default Heading
