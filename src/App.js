import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Test from './pages/Test'
import UserListView from './pages/UserListView'
import UserActivityView from './pages/UserActivityView'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' Component={Home}/>
        <Route exact path='/login' Component={Login}/>
        <Route exact path='/users' Component={UserListView}/>
        <Route exact path='/user/activity/:userID' Component={UserActivityView}/>
        <Route exact path='/test' Component={Test}/>
        <Route exact path='/dashboard'  Component={Dashboard}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
