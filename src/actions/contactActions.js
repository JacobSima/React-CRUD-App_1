import {GET_CONTACTS,GET_CONTACT,DELETE_CONTACT,ADD_CONTACT,UPDATE_CONTACT} from './types'

export const getContacts = ()=> async dispatch =>{
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const resData = await res.json()
 dispatch({
    type:GET_CONTACTS,payload:resData
  })
}

export const getContact = (id)=>async dispatch =>{
    
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  const resData = await res.json()
  dispatch({type:GET_CONTACT,payload:resData})
}


export const deleteContact =(id)=> async dispatch =>{
      try{
        await fetch(`https://jsonplaceholder.typicode.com/users/${id}`,{
          method:'DELETE',
          headers:{'Content-type':'application/json'}
        })
        dispatch({type:DELETE_CONTACT,payload:id})
    }
    catch(ex){
      dispatch({type:DELETE_CONTACT,payload:id})
    }
}

export const addContact = (contact)=> async dispatch =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users',{
        method:'POST',
        headers:{'Content-type':'application/json'},
        body:JSON.stringify(contact)
     }) 
    const resData = await res.json()
    dispatch({type:ADD_CONTACT,payload:resData})
}
export const updateContact = (contact)=> async dispatch =>{
     try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${contact.id}`,{
          method:'PUT',
          headers:{'Content-type':'application/json'},
          body:JSON.stringify(contact)
        })
        const resData = await res.json()
        dispatch({type:UPDATE_CONTACT,payload:resData})
     }
     catch(ex){
      dispatch({type:UPDATE_CONTACT,payload:contact})
     }

}




  


