import React, { Component } from 'react'
import Contact from './Contact'
import {connect} from 'react-redux'
import {getContacts} from  '../../actions/contactActions'


class Contacts extends Component {
  componentDidMount(){
    this.props.getContacts()
  }
  render() {
    const {contacts} =this.props
             return (
              <React.Fragment>
               {contacts.map(contact=>(
                    <Contact contact={contact} key={contact.id}/>
                ))}
                </React.Fragment>
             )
           }}

const mapStateToprops =(state)=>({
  contacts:state.contact.contacts
})
// const mapDispatchToProps=(dispatch)=>({

//   getContacts:async()=>{
//     const res = await fetch('https://jsonplaceholder.typicode.com/users')
//     const resData = await res.json()
//     dispatch({
//       type:'GET_CONTACTS',payload:resData
//     })
//   }


// })

export default connect(mapStateToprops,{getContacts})(Contacts) 
