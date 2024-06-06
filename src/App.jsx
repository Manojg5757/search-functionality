import React from 'react'
import CardItem from './Components/CardItem'
import './App.css'
import Search from './Components/Search'
import { UserProvider } from './context/context'

const App = () => {
  return (
    <UserProvider>
      <Search />
      <CardItem />
    </UserProvider>
  )
}

export default App