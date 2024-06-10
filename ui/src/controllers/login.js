import { users } from "../data/users";

function login(userName, password) {
    const user = users.find(u => u.user === userName )
    return user?.password === password
}

export default login