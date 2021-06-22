import React, { Component } from 'react'
import './ViewNotes.css'
import Header from '../Header/Header'

class ViewNotes extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
    this.editNote = this.editNote.bind(this)
  }

  editNote (note) {
    window.localStorage.setItem('editnote', JSON.stringify(note))
    this.props.history.push('/editnote')
  }

  componentDidMount () {
    setTimeout(() => this.props.getNotes(), 1000)
  }

  render () {
    return (
      <div id='view-notes'>
        <Header history={this.props.history} />
        <div className='notes-wrapper'>
          {this.props.notes && this.props.notes.length > 0 && this.props.notes.map((element, index) => {
            return (
              <div key={index}>
                <div className='note-card'>
                  <div>{element ? element.note : ''}</div>
                </div>
                <div className='btns-container'>
                  <img className='note-btn' src='/Assets/Images/delete.webp' onClick={() => this.props.deleteNote(element)} />
                  <img className='note-btn' src='/Assets/Images/edit.png' onClick={() => this.editNote(element)} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default ViewNotes
