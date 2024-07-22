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
		let allUsers = [...state.users]
		allUsers[user.id - 1] = user

		setState(prevState => ({ ...prevState, users: [] }))
		setState(prevState => ({ ...prevState, users: allUsers }))
	}

	const addUser = user => {
		console.log(user)
		const id = state.users.length + 1
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
