import React from 'react'
import User from './user'

function Users({ users, onDelete, onEdit }) {
	if (users.length > 0)
		return (
			<>
				<div>
					{users.map(elem => (
						<User
							onDelete={onDelete}
							onEdit={onEdit}
							key={elem.id}
							user={elem}
						/>
					))}
				</div>
			</>
		)
	else
		return (
			<>
				<div className='user'>
					<h3>Пользователей нет</h3>
				</div>
			</>
		)
}

export default Users
