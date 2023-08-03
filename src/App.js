import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Test from './pages/Test'
import UserListView from './pages/UserListView';
import UserActivityView from './pages/UserActivityView';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' Component={Home}/>
        <Route exact path='/users' Component={UserListView}/>
        <Route exact path='/user/activity/:userID' Component={UserActivityView}/>
        <Route exact path='/test' Component={Test}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
