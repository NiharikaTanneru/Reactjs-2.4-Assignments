import React, {Component} from 'react'
 
export default class Message extends Component{
    render(){
            return(
                <div className="d-flex justify-content-center align-items-center mt-5 text-center">
                    <ul className="w-50 list-group">
                        <li className="list-group-item active"><i className="fa fa-envelope me-3"></i>Message From Person1</li>
                        <li className="list-group-item"><i className="fa fa-envelope me-3"></i>Message From Person2</li>
                        <li className="list-group-item"><i className="fa fa-envelope me-3"></i>Message From Person3</li>
                        <li className="list-group-item"><i className="fa fa-envelope me-3"></i>Message From Person4</li>
                        <li className="list-group-item"><i className="fa fa-envelope me-3"></i>Message From Person5</li>
                    </ul>
                </div>
            )
    }
}