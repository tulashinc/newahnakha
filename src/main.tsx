import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home/home'
import History from './pages/history/history'
import Messages from './pages/messages/messages'
import Events from './pages/events/events'
import About from './pages/about/about'
import Contact from './pages/contact-us/contact'
import Gallery from './pages/gallery/gallery'
import NotFound from './pages/not-found/not-found'
import PresidentMessage from './pages/messages/president'
import VicePresident from './pages/messages/vice-president'
import GeneralSecretary from './pages/messages/general-secretary'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		errorElement: <NotFound />,
	},
	{
		path: '/history',
		element: <History />,
	},
	{
		path: '/events',
		element: <Events />,
	},
	{
		path: '/messages',
		element: <Messages />,
	},
	{
		path: '/messages/president',
		element: <PresidentMessage />,
	},
	{
		path: '/messages/vice-president',
		element: <VicePresident />,
	},
	{
		path: '/messages/general-secretary',
		element: <GeneralSecretary />,
	},
	{
		path: '/contact',
		element: <Contact />,
	},
	{
		path: '/about',
		element: <About />,
	},
	{
		path: '/gallery',
		element: <Gallery />,
	},
])

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
