import './App.css'
import ListEmployeeComponent from './components/ListEmployeeComponent'

function App() {

  return (
    <div className="min-vh-100 bg-dark text-light">
      <div className="container-fluid py-4">
        <h1 className="text-center mb-5 text-primary">Employee Management System</h1>
        <ListEmployeeComponent/>
      </div>
    </div>
  )
}

export default App
