import React, { Component } from 'react'

export class Profile extends Component {
  render() {
    return (
        <div className="d-flex justify-content-center pt-3">
       <div className="card bg-secondary mb-3 text-white" style={{}}>
        <div className="card-header m-0 p-0"><img style={{width: '50rem',objectFit: 'contain', borderRadius: '6px'}} src={'https://www.tatasteel.com/media/2996/groupprofile_fullimg.jpg'}/></div>
        
        <div className="card-body">
          <h5 className="card-title">Tata  Steel</h5>
          <p className="card-text">Tata companies have made significant investments in different geographies. With our ever-increasing global.</p>
        </div>
      </div>
      </div>
    )
  }
}

export default Profile