import React from 'react'
import { UserContext } from './UserContext'
import { useContext } from 'react'


const User = () => {
    const userContext = useContext(UserContext)
    const handleLogin = () => {{
            userContext.setUser({
                name: "Paul",
                email: "ajibadeifedolapo17@gmail.com"
            })
        }
    }
    const handleLogout = () => {{
            userContext.setUser(null)
        }
    }
  return (
    <>
    <button onClick={handleLogin}>Login</button>
    <button onClick={handleLogout}>Logout</button>
    <div>User name is {userContext?.user?.name} </div>
    <div>User name is {userContext?.user?.email} </div>
    </>
  )
}

export default User