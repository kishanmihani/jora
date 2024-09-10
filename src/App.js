import logo from './logo.svg';
import './App.css';
import { Authlogin } from './Components/Auth/Authlogin';
import {Routes,Route} from "react-router-dom";
import Dashboard from './Components/Dashboard/Dashboard';
import UserInfo from './Components/UserInfo/UserInfo';
import ErrorBoundary from './Components/ErrorBoundary';
import { lazy, Suspense } from 'react';
const MarkdownPreview = lazy(() => import('./Components/Dashboard/Dashboard'));
function App() {
  return (
    <div className="App overflow-auto">
      
   <ErrorBoundary>
      <Routes>
         <Route path='/' element={<Authlogin />} />
         {/* <Suspense fallback='loading...'>
         <MarkdownPreview></MarkdownPreview>
         </Suspense> */}
         <Route path="dashboard" element={<Dashboard />} ></Route>
           <Route path="/dashboard/UserInfo" element={<UserInfo message='2' />} />
      </Routes>
      </ErrorBoundary>
    </div>
  );
}
 
export default App;
