import React from 'react'
import Header from './Header'
import Banner from './Banner'
import Card from './Card'
import Home from './Home'
import Search from './Search.js'
import SearchResults from './SearchResults'
import SearchPage from './SearchPage'
import Footer from './Footer'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


const App = () => {
  return (
    <>
      <Router>
        <Header />
        
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        
        <Footer />
      </ Router>
    </>
  )
}

export default App
