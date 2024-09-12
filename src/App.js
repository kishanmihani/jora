
import './App.css';
import {Routes,Route} from "react-router-dom";
import UserInfo from './Components/UserInfo/UserInfo';
import ErrorBoundary from './Components/ErrorBoundary';
import { lazy, Suspense } from 'react';
import Authlogin from './Components/Auth/Authlogin';
const Dashboardfast = lazy(() => import('./Components/Dashboard/Dashboard'));
const MarkdownPreview = lazy(() => import('./Components/Error/PageNotfound'));
function App() {
  return (
    <div className="App overflow-auto">
      
     <ErrorBoundary>
      <Routes>
         <Route  path='/' element={< Authlogin />} />
         <Route path="dashboard" element={<Dashboardfast />} ></Route>
           <Route path="/dashboard/UserInfo" element={<UserInfo message='2' />} />
         <Route path='*' element={
          <Suspense fallback='loading'>
          <MarkdownPreview /></Suspense>}></Route>  
      </Routes>
      </ErrorBoundary>
    </div>
  );
}
 
export default App;
