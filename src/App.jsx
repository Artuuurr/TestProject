import React, { useState } from 'react'
import './App.css'
import AddUser from './components/AddUser'
import Header from './components/header'
import Users from './components/Users'

function App() {
	const [state, setState] = useState({
		users: [
			{
				id: 1,
				firstname: 'Bob',
				lastname: 'Marley',
				bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
				age: 40,
				isHappy: true,
			},
			{
				id: 2,
				firstname: 'John',
				lastname: 'Doe',
				bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
				age: 22,
				isHappy: false,
			},
		],
	})

	const deleteUser = id => {
		setState({ users: [...state.users.filter(el => el.id !== id)] })
	}

	const editUser = user => {
		console.log(user)
		let allUsers = state.users.map(u => (u.id === user.id ? user : u))

		setState(prevState => ({ ...prevState, users: [] }))
		setState(prevState => ({ ...prevState, users: allUsers }))
	}

	const addUser = user => {
		console.log(user)
		const maxId =
			state.users.length > 0 ? Math.max(...state.users.map(u => u.id)) : 0
		const id = maxId + 1
		setState({ users: [...state.users, { id, ...user }] })
	}
	return (
		<>
			<Header title='Список пользователей' />
			<main>
				<Users users={state.users} onDelete={deleteUser} onEdit={editUser} />
			</main>
			<aside>
				<AddUser onAdd={addUser} />
			</aside>
		</>
	)
}

export default App
