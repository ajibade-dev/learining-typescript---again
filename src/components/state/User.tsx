import React, { useState } from 'react'

type AuthUser = {
    name:string
    email:string
}

const User = () => {
const [user, setUser] = useState<AuthUser>({} as AuthUser)
const handleLogin = () => {
    setUser({
        name: "Paul",
        email:"ajibadeifedolapo17@gmail.com"
    })
}


  return (
    <div>
        <button onClick={handleLogin}>Login</button>
      
        <div>Username is{user.name}</div>
        <div>Username is {user.email} </div>
    </div>
  )
}

export default User