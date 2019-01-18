import React, { Component } from 'react'
export const Context = React.createContext();

const reducer = (state,action)=>{

  switch (action.type) {
    case 'ADD_CONTACT':
    return {
      ...state,
      contacts:[action.payload,...state.contacts]
    }

    case 'GET_CONTACT':
    return {
      ...state,
      contact:state.contacts.filter(contact=>contact.id ===action.payload)
    }

    case 'EDIT_CONTACT':
    return{
      ...state,
      contacts:state.contacts.map(contact=>(contact.id === action.payload.id)?(contact=action.payload):contact),
      contact:state.contacts.filter(contact=>contact.id ===action.payload.id)
    }

    case 'DELETE_CONTACT':
    return{
      ...state,
      contacts:state.contacts.filter(contact=>contact.id !== action.payload)
    }
  
    default:
      return state
  }
}

export class Provider extends Component {
  state={
    contacts:[ 
      {id:"1",name:'Jacob Sima',email:'jsima@gmail.com',number:'9383-39393-2922'},
      {id:"2",name:'Benj Sima',email:'bsima@gmail.com',number:'8373-2322-23221'},
      {id:"3",name:'Cons Sima',email:'csima@gmail.com',number:'3642-492-32234'},
      {id:"4",name:'Bene Sima',email:'besima@gmail.com',number:'0947-473-283874'}
    ],
    contact:[],
    disptach:action =>this.setState(state=> reducer(state,action)),
  } 
  render() {
    return (
      <Context.Provider value ={this.state}>
         {this.props.children}
      </Context.Provider>
    )
  }
}

export const  Consumer = Context.Consumer