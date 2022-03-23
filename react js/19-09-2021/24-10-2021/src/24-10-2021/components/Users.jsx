import { USERS } from "../helper"

const Users = () => {
    return <div>
        <h1>Users Page</h1>
        <ul>
            { USERS.map((user) => <li key={user.id}>
                <span>Id: {user.id} </span>
                <span>Name: {user.name} </span>
                <span>Email: {user.email} </span>
            </li>)}
        </ul>
    </div>
}

export default Users;