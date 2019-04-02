import React from 'react'
import closed from './../images/issue-closed.svg'
import pullReq from './../images/pull-request.svg'

const Issue = ({ title, body, id, state, pull_request }) => {
const closedIcon = state === 'closed' ?  <img className="closedIcon" src={closed} alt="closed"/> : ''
const pullIcon = pull_request ? <img className="pullIcon" src={pullReq} alt="pull request" /> : ''
return (
  <div key={id} className="col-6 col-md-4" style={{marginBottom: "2rem"}}>
   <div className="card issue__box" style={{height: "15rem", width: "auto"}}>
    <div className="cardHeader" style={{height: "5rem", width: "100%"}} >
    {closedIcon}
    {pullIcon}
     <h2 className="issue__title" style={{height: "5rem"}}> {title.length < 80 ? `${title}` : `${title.substring(0,100)}...`} </h2>
    </div>
     <div className="card-body"> 
      <p className="issue__body" style={{height: "5rem"}}> {body < 400 ? `${body}` : `${body.substring(0, 500)}...`} </p>
     </div>
   </div>
  </div>
 
)
}
export default Issue