import React, { useContext } from 'react'
import { UserContext } from "./App"; 
export default function Profile() {
const user=useContext(UserContext) 
  return (
    <div>
    <h2>Profile Component</h2>
    <p>User Name: {user.name}</p>
  </div>
  )
}
