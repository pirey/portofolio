import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Main from './Main'
import PortofolioDetail from './PortofolioDetail'

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/portofolio/:title" exact component={PortofolioDetail} />
        <Route path="/" exact component={Main} />
      </Switch>
    </HashRouter>
  )
}

export default App
