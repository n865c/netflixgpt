import React from 'react'
import Header from './components/Header'
import MainBody from './components/MainBody'
import SignIn from './components/SignIn'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import appStore from './utils/appStore'
import Browser from './components/Browser'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Provider store={appStore}>
      
      <BrowserRouter >
      <Header />
        <Routes>
          <Route path="/" element={<MainBody />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/browser" element={<Browser/>}/>
           
        </Routes>
        <Footer/>
        </BrowserRouter>
        
      </Provider>
     
    </div>
  )
}

export default App
