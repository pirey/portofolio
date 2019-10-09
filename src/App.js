import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Main from './Main'
import PortoDetail from './PortoDetail'

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/porto/:index" exact component={PortoDetail} />
        <Route path="/" exact component={Main} />
      </Switch>
    </HashRouter>
  )
}

export default App
