import { useEffect, useState } from "react";

const initialUser = {
    name: "",
    age: "",
    skills: "",
    email: ""
}
const App = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [user, setUser] = useState(initialUser);
  const [ isEditing, setIsEditing ] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3001/users")
      .then((res) => res.json())
      .then((users) => {
        setUsers(users);
      })
      .catch((err) => console.log("Error", err))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const onDelete = (id) => {
    fetch("http://localhost:3001/users/" + id, {
        method: "DELETE"
    })
      .then((res) => res.text())
      .then((res) => {
          const updateUsers = users.filter((user) => user.id !== id);
          setUsers(updateUsers)
          console.log(res);
      })
      .catch((err) => console.log("Error", err))
     
  };

  const onUserInputChange = (event, inputName) => {
    const value = event.target.value;
    const newUser = {
        ...user
    }
    newUser[inputName] = value;
    setUser(newUser)
  }

  const onSave = () => {
      const newUser = {...user}
      newUser.skills = user.skills.split(",")

    fetch("http://localhost:3001/create-user", {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
            'Content-type': 'application/json'
        }
    })
    .then((res) => res.json())
    .then((res) => {
        const user = res.data.user;
        setUsers([...users, user])
        setUser(initialUser)
        console.log(res);
    })
    .catch((err) => console.log("Error", err))

  }

  const onEdit = (user) => {
      setIsEditing(true)
      setUser({
          ...user,
            skills: user.skills.join()
        })
  }

  const onUpdateUser = () => {
    const newUser = {...user}
    console.log(user)
    newUser.skills = user.skills.split(",")
    fetch("http://localhost:3001/users/" + user.id, {
        method: "PATCH",
        body: JSON.stringify(newUser),
        headers: {
            'Content-type': 'application/json'
        }
    })
    .then((res) => res.json())
    .then((res) => {
        const user = res.data.user;
        const userIdx = users.findIndex((usr) => usr.id === user.id)
        users.splice(userIdx, 1, user)
        setUsers([...users])
        setUser(initialUser)
        setIsEditing(false);
        console.log(res);
    })
    .catch((err) => console.log("Error", err))
  }
 
  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  console.log(user)
  return (
    <div>
      <h1>Users Dashboard</h1>

        <div>
            <p>Name: <input type="text" value={user.name} onChange={(event) => onUserInputChange(event, 'name')} /></p>
            <p>Age: <input type="number" value={user.age} onChange={(event) => onUserInputChange(event, 'age')} /></p>
            <p>Email: <input type="email" value={user.email} onChange={(event) => onUserInputChange(event, 'email')} /></p>
            <p>Skills (Please add Comma seperated Skills): <input type="text" value={user.skills} onChange={(event) => onUserInputChange(event, 'skills')} /></p>
            {isEditing ? <button onClick={onUpdateUser}>Update</button>: <button onClick={onSave}>Save</button>}
        </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Skills</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, idx) => {
            return (
              <tr key={idx}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>{user.skills}</td>
                <td>
                    <button onClick={() => onDelete(user.id)}>Delete</button>
                    <button onClick={() => onEdit(user)}>Edit</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default App;
