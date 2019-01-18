import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Consumer} from '../../Context'



 class Contact extends Component {
   state={
     isContactOpened:false
   }

  deleteContact = (id,disptach,e)=>{
    disptach({
      type:'DELETE_CONTACT',
      payload:id
    })
  }
  render() {
    const {name,email,number,id} = this.props.contact
    const {isContactOpened} =this.state
    return (<Consumer>
              {value=>{
                const {disptach}=value
                return(
                    <div className="card card-body mb-2">
                      <h4 className="card-title">{name}
                      <i 
                       className="material-icons"
                       onClick={()=>this.setState({isContactOpened:!this.state.isContactOpened})}
                       style={{cursor:'pointer'}}
                      >{isContactOpened?"remove":"add"}</i>
                      <i className="material-icons left"
                      style={{float:"right",color:'red',cursor:'pointer'}}
                      onClick={this.deleteContact.bind(this,id,disptach)}
                      >delete</i>
                      <Link to={`/contact/edit/${id}`}><i className="material-icons left"
                      style={{float:"right",cursor:'pointer',marginRight:'5px'}}
                      >edit</i></Link>
                      </h4>
                      {isContactOpened?(<ul className="list-group">
                         <li className="list-group-item">{email}</li>
                         <li className="list-group-item">{number}</li>
                      </ul>):(null)}
                    </div>
                )
              }}
           </Consumer>
    )
  }
}

export default Contact
