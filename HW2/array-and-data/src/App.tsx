import './App.css'
import ColorList from './components/ColorList'
import EvenNumbers from './components/EvenNumbers'
import UserList from './components/UserList'

function App() {
 

  return (
    <>
     <div>
      <h1>Color List</h1>
      <ColorList />
      <h1>Even Numbers</h1>
      <EvenNumbers />
      <h1>User List</h1>
      <UserList />
    </div>
      
    </>
  )
}

export default App
