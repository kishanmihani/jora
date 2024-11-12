import './App.css';
import {Routes,Route} from "react-router-dom";
import UserInfo from './Components/UserInfo/UserInfo';
import ErrorBoundary from './Components/ErrorBoundary';
import { lazy, Suspense} from 'react';
import React from 'react';
import Authlogin from './Components/Auth/Authlogin';
import DashboardIndex from './Components/Dashboard/DashboardIndex/DashboardIndex';
import HooksCounterOne from './Config/Practice/HooksCounterOne';
import CounterThree from './Config/Practice/CounterThree';
import ProductList from './Components/Product/ProductList';
import TestIndex from './Components/Product/Test/TestIndex';
import Loadericon from './Components/Dashboard/Loadericon/Loadericon';
import TestEmail from './Components/Product/Test/TestEmail/TestEmail';
import TestChoosPassword from './Components/Product/Test/TestChoosPassword/TestChoosPassword';
import TestDashboard from './Components/Product/Test/TestDashboard/TestDashboard';
import TaskList from './Components/TaskList/TaskList';
import Multipleentry from './Components/Product/Multipleentry/Multipleentry';
const Dashboardfast = lazy(() => import('./Components/Dashboard/Dashboard'));
const MarkdownPreview = lazy(() => import('./Components/Error/PageNotfound'));
export const UserContext=React.createContext();
export const ChannelContext=React.createContext();
function App() {
  return (
    <div className="App overflow-auto">
     <ErrorBoundary>
      <Routes>
         <Route  path='' element={
          < Authlogin />
          } />
         <Route path="dashboard" element={<Dashboardfast />} >
            <Route path="" element={<DashboardIndex  />}></Route>
            <Route path="UserInfo" element={<UserInfo  />}></Route>
            <Route path="CounterThree" element={<CounterThree  />}></Route>
            <Route path="HooksCounterOne" element={<UserContext.Provider value={'Vishwas'}><ChannelContext.Provider value='codeinnovation'><HooksCounterOne  /></ChannelContext.Provider></UserContext.Provider>}></Route>
                                                               
            <Route path="ProductList" element={<ProductList />}></Route> 
            <Route path="TaskList" element={<TaskList />}></Route>
            <Route path="Multientry" element={<Multipleentry />}></Route>
         </Route>
         <Route path='TestIndex' element={<TestIndex />}>
         <Route path='' element={<TestEmail />} />
         <Route path='TestPassword' element={<TestChoosPassword />} />
         <Route path='TestDashboard' element={<TestDashboard />} />         
         </Route>
         <Route path='*' element={
          <Suspense fallback={<Loadericon />}>
          <MarkdownPreview /></Suspense>}></Route>  
      </Routes>
      </ErrorBoundary>
    </div>
  );
}
 
export default App;
