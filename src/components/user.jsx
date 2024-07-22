import React, { useState } from 'react'
import { IoCloseCircleSharp, IoHammerSharp } from 'react-icons/io5'
import AddUser from './AddUser'

function User({ user, onDelete, onEdit }) {
	const [state, setState] = useState({
		editForm: false,
	})
	return (
		<>
			<div className='user'>
				<IoCloseCircleSharp
					className='deleteIcon'
					onClick={() => onDelete(user.id)}
				/>
				<IoHammerSharp
					className='editIcon'
					onClick={() => {
						setState({
							editForm: !state.editForm,
						})
					}}
				/>
				<h3>
					{user.firstname} {user.lastname}
				</h3>
				<p>{user.bio}</p>
				<b>{user.isHappy ? 'Счастлив :)' : 'Не особо :('}</b>
				{state.editForm && <AddUser user={user} onAdd={onEdit} />}
			</div>
		</>
	)
}

export default User
