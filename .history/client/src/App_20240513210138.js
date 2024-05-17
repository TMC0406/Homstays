import React from 'react'
import {BrowserRouter as Router , Routes,Route } from "react-router-dom"
import {routes,personalRoutes} from "./routes/index.js"
import DefaultLayOut from './components/DefaultLayOut/DefaulLayOut.tsx'
import PersonalPage from './pages/PersonalPage/PersonalPage.tsx'
// import {personalRoutes} from "./routes/personalRoutes.js"
 const App = () => {
  return (
    <div className="App">
       <Router>
          <Routes>
            {
              routes.map((it)=>{
                const Page = it.page;
                const Layout = it.isShowHeader ? DefaultLayOut : ({ children }) => <div>{children}</div>;
                return (
                  <Route key={it.path} path ={it.path}  element={
                  <Layout className='relative'>
                    < Page />
                  </Layout>
                }/>
                )
              })
            }
            {
                personalRoutes.map((it)=>{
                  const PageChild = it.PageChild;
                  // const Layout =  PersonalPage 
                  return (
                    <Route key={it.path} path ={it.path}  element={
                    <PersonalPage className='relative'>
                      < PageChild />
                    </PersonalPage>
                  }/>
                  )
                })
            }
          </Routes>
        </Router>
    </div>
  )
}
export default App