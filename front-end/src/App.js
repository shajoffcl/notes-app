import React, { Component } from 'react'
import './App.css'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
// import Notes from './component/Notes/Notes'
import NotesContainer from './redux/containers/NotesContainer'
import ViewNotesContainer from './redux/containers/ViewNotesContainer'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={NotesContainer} />
          <Route exact path='/viewnotes' component={ViewNotesContainer} />
          <Route exact path='/editnote' component={NotesContainer} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
