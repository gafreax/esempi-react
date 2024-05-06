import { users } from "../data/users";

function login(userName, password) {
    const user = users.find(u => u.user === userName )
    console.log(user)
    return user?.password === password
}

export default login