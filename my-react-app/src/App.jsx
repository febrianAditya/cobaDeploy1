// import './App.css'
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import HomePage from './pages/HomePage/HomePage'
import AboutPage from './pages/aboutPage/AboutPage'
import AboutCompany from "./pages/AllAbout/AboutCompany"
import AboutMePage from "./pages/AllAbout/AboutMePage" 
import FebirPage from "./pages/memberPage/FebriPage"
import JhonPage from "./pages/memberPage/JhonPage"
import OnlyMember from "./pages/memberPage/onlyMemberPage"
import CarPage from "./pages/CarsPage/CarsPage"
import DetailCar from "./pages/CarsPage/DetailCar"
import ProtectecRoute from "./components/ProtectedRoute"
import UserPage from "./pages/UserPage"
// import DemoPage from "./pages/DemoPage"

// import { Routes, Route } from "react-router-dom"
import { Route, Routes } from "react-router-dom"
import NavbarComponent from './components/NavbarComponent'
import MemberPage from "./pages/memberPage/MemberPage"
import DashboardPage from "./pages/DashboardPage"
import { useState } from "react"


function App() {
  const [dataUser, setDataUser] = useState("Pak Amjad")

  return (
    <>
      <NavbarComponent/>

      <Routes>
        <Route path='/home' element={<HomePage dataUser={"Pak Ari"}/>}/>
        {/* <Route path='/demo' element={<DemoPage/>}/> */}
        <Route path="/dashboard" element={<DashboardPage />}/>
        <Route path="/userpage" element={<UserPage />}/>

        <Route path='/about' element={<AboutPage/>}>

          <Route path="about-company" element={<AboutCompany/>}/>
          <Route path="about-me" element={<AboutMePage/>}/>

        </Route>

        <Route path="/member" element={<MemberPage/>} >
          <Route path=":memberuser" element={<OnlyMember/>}/>
        </Route>


          <Route path="/cars" element={
            <ProtectecRoute>
              <CarPage/>
            </ProtectecRoute>
          } 
          >
           
          </Route>
       

        <Route path="/car/:carid" element={<DetailCar/>}/>


      </Routes>
    </>
  )
}

export default App
