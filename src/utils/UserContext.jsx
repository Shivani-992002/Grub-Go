import React, { createContext, useState } from 'react'
import { food_items } from '../food';



export const DataContext=createContext();
const UserContext = ({children}) => {
      const [cat, setCat] = useState(food_items);
    const [input, setInput] = useState("")
    const [showCart, setShowCart] = useState(false)
    const data={
        input,
        setInput,
        cat,
        setCat,
        showCart,
        setShowCart
    }
  return (
    <div>
        <DataContext.Provider value={data}>

      {children}
        </DataContext.Provider>
    </div>
  )
}

export default UserContext
