import logo from './logo.svg';
import './App.css';
import UserList from './components/UserList';
import AddUser from './components/AddUser'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import EditUser from './components/EditUser';
function App() {
  return (
    <Router>
    <div className='container mx-auto px-2 max-w-5xl pt-10 md:pt-32'>
    <h1 className='text-center font-bold text-2xl text-gray-700'>CRUD with React Redux</h1>
   
    <Routes>
      <Route exact path='/' element={ <UserList/>}/>
      <Route exact path='/add' element={ <AddUser/>}/>
      <Route exact path='/edit-user/:id' element={ <EditUser/>}/>
    </Routes>
      
    </div>
    </Router>
    
  );
}

export default App;
