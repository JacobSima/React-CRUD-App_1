import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect }from 'react-redux'
import {deleteContact} from '../../actions/contactActions'




 class Contact extends Component {
   state={
     isContactOpened:false
   }

   deleteContact =async(id,e)=>{
     this.props.deleteContact(id)
  }
  render() {
    const {name,email,phone,id} = this.props.contact
    const {isContactOpened} =this.state
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
                      onClick={this.deleteContact.bind(this,id)}
                      >delete</i>
                      <Link to={`/contact/edit/${id}`}><i className="material-icons left"
                      style={{float:"right",cursor:'pointer',marginRight:'5px'}}
                      >edit</i></Link>
                      </h4>
                      {isContactOpened?(<ul className="list-group">
                         <li className="list-group-item">{email}</li>
                         <li className="list-group-item">{phone}</li>
                      </ul>):(null)}
                    </div>
                )
              }}

const mapStateToprops =(state)=>({
  contacts:state.contact.contacts
})

// const mapDispatchToProps = (dispatch)=>({
//     deleteContact:(id)=>{
//       dispatch({type:'DELETE_CONTACT',payload:id})
//     }
// })
           
export default connect(mapStateToprops,{deleteContact})(Contact)
