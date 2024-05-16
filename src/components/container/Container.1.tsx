import { ReactNode } from 'react'
import HeaderNavbar from '../navigation/header-navbar'
import Footer from '../typography/footer'
import Advertisements from '../../pages/advertisements/advertisements'

interface IContainer {
	children: ReactNode
}

export function ContainerN({ children }: IContainer) {
	return (
		<div className="">
			<div className="bg-red-900 sticky top-0 z-index-50">
				<HeaderNavbar />
			</div>
			<div className="flex justify-center items-center relative">
				<img
					src="../../Logo.png"
					className="opacity-10 absolute top-0 rounded-3xl"
				/>
			</div>
			<div className="grid grid-cols-4 gap-4 bg-rose-100 min-h-screen p-5">
				<div className="col-span-3">{children}</div>
				<div className="bg-green-100">
					<Advertisements />
				</div>
			</div>
			<div className="flex justify-center gap-10 bg-red-200">
				<Footer />
			</div>
		</div>
	)
}

export default ContainerN
