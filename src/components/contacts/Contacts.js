import React, { Component } from 'react'
import Contact from './Contact'
import { Consumer} from "../../Context";

class Contacts extends Component {
  render() {
     return (<Consumer>
           {value=>{
             const {contacts}=value
             return (
              <React.Fragment>
               {contacts.map(contact=>(
                    <Contact contact={contact} key={contact.id}/>
                ))}
                </React.Fragment>
             )
           }}
        </Consumer>
     )
  }
}

export default Contacts 
