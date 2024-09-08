import logo from './logo.svg';
import './App.css';
import { Authlogin } from './Components/Auth/Authlogin';
import {Routes,Route} from "react-router-dom";
import Dashboard from './Components/Dashboard/Dashboard';
import UserInfo from './Components/UserInfo/UserInfo';
import ErrorBoundary from './Components/ErrorBoundary';
function App() {
  return (
    <div className="App overflow-auto">
      
   <ErrorBoundary>
      <Routes>
         <Route path='/' element={<Authlogin />} />
         <Route path="dashboard" element={<Dashboard />} ></Route>
           <Route path="/dashboard/UserInfo" element={<UserInfo />} />
      </Routes>
      </ErrorBoundary>
    </div>
  );
}
 
export default App;
