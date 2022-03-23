export const USERS = [
    { name: 'User 1', id: 1, email: 'user1@gmail.com'},
    { name: 'User 2', id: 2, email: 'user2@gmail.com'}
]

export const getUserById = (id) => {
    let user = null;
    for(let i =0;i< USERS.length;i++) {
        if(USERS[i].id === parseInt(id)) {
            user = USERS[i];
            break;
        }
    }
    return user;
}