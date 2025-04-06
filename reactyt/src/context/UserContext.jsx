import React, { createContext } from 'react'


const DataContext = createContext()
const UserContext = ({Children}) => {

    // const username = "Pankaj"
  return (
    <div>
       {Children}
    </div>
  )
}

export default UserContext