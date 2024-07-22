import React, { useState } from 'react'

function AddUser({ onAdd, user }) {
	let userAdd = {}

	const [state, setState] = useState({
		firstname: '',
		lastname: '',
		bio: '',
		age: 1,
		isHappy: false,
	})

	let myForm = null
	return (
		<>
			<form ref={elem => (myForm = elem)}>
				<input
					placeholder='Имя'
					onChange={e => setState({ ...state, firstname: e.target.value })}
				/>
				<input
					placeholder='Фамилия'
					onChange={e => setState({ ...state, lastname: e.target.value })}
				/>
				<textarea
					placeholder='Биография'
					onChange={e => setState({ ...state, bio: e.target.value })}
				></textarea>
				<input
					placeholder='Возраст'
					onChange={e => setState({ ...state, age: e.target.value })}
				/>
				<label htmlFor='isHappy'>Счастлив?</label>
				<input
					type='checkbox'
					id='isHappy'
					onChange={e => setState({ ...state, isHappy: e.target.checked })}
				/>
				<button
					type='button'
					onClick={() => {
						myForm.reset()
						const userAdd = {
							firstname: state.firstname,
							lastname: state.lastname,
							bio: state.bio,
							age: state.age,
							isHappy: state.isHappy,
						}

						if (user) {
							userAdd.id = user.id
						}

						onAdd(userAdd)
					}}
				>
					Добавить
				</button>
			</form>
		</>
	)
}

export default AddUser
