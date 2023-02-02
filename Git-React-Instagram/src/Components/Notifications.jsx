import React, {Component} from 'react'
import Message from './Message'
 
export default class Notifications extends Component{
    render(){
            return(
                <>
                    <p className="my-3 text-center">You have <span className='badge bg-primary'>5</span> new messages</p>
                    <Message/>
                    </>
            )
    }
}