import React, { Component } from 'react'
import close from './../images/close.svg'

export default class Buttons extends Component {
  render() {
   const { filterIssues, handleButtons, handleClose } = this.props
   return (
      <div className="buttonTitles">
        <span className={filterIssues === 'all' ? 'active' : ''} onClick={()=> handleButtons('all')}>All Issues</span>
        <span className={filterIssues === 'open' ? 'active' : ''} onClick={()=> handleButtons('open')}>Open Issues</span>
        <span className={filterIssues === 'closed' ? 'active' : ''} onClick={()=> handleButtons('closed')}>Closed Issues</span>
        <span className={filterIssues === 'pull' ? 'active' : ''} onClick={()=> handleButtons('pull')}>Pull Requests</span>
        <img className="crossIcon" onClick={handleClose} src={close} alt="close" />
      </div>
    )
  }
}
