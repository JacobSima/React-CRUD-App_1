import React, { Component } from 'react'
import uuid from 'uuid'
import {Consumer} from '../../Context'
import InputForm from '../pages/InputForm'
import {Context} from '../../Context'

class Edit extends Component {
  state ={
    name:'',
    email:'',
    number:'',
    errors:''
  }
  //fetch single contact from the context
  async componentDidMount(){
       const {id} = this.props.match.params
       const {disptach}=this.context
       await disptach({
         type:'GET_CONTACT',
         payload:id
       }) 
       this.setState({
      name:this.context.contact[0].name,
      email:this.context.contact[0].email,
      number:this.context.contact[0].number
    })
    
  }
  




  //onform submit event
  onSubmit = async(disptach,e)=>{
    e.preventDefault()
    const {name,email,number} = this.state
    const id = this.props.match.params.id
    //check validate inputs fields
    if(name===''){this.setState({errors:{name:'Please Enter Name'}});return}
    if(email===''){this.setState({errors:{email:'Please Enter Email'}});return}
    if(number===''){this.setState({errors:{number:'Please Enter Number'}}); return}

    const newContact ={
      name,
      email,
      number,
      id
    }
     
    //add new user tot the context state
    disptach({
      type:'EDIT_CONTACT',
      payload:newContact
    })
    //redirect
    this.props.history.push('/');

    //clear the input fields
    this.setState({
      name:'',
      email:'',
      number:'',
      errors:''
    })
  }

  //input values on change events
  onChange =(e)=>{this.setState({[e.target.name]:e.target.value})}
  render() {
    const {name,email,number,errors} = this.state
      return(<Consumer>
              {value=>{
                const {disptach} = value
                return (
                  <React.Fragment>
                    <h4>Edit Contact</h4>
                    <form onSubmit={this.onSubmit.bind(this,disptach)}> 
                        <InputForm
                        type="text" 
                        placeholder="Enter name"
                        name="name" 
                        value={name}
                        onChange ={this.onChange}
                        label="Name"
                        error={errors.name}
                        />
                    <InputForm
                     type="email" 
                     placeholder="Enter Email"
                     name="email" 
                     value={email}
                     onChange ={this.onChange}
                     label="Email"
                     error={errors.email}
                    />

                    <InputForm
                     type="text" 
                     placeholder="Enter Number"
                     name="number" 
                     value={number}
                     onChange ={this.onChange}
                     label="Number"
                     error={errors.number}
                    />
                      <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                  </React.Fragment>
                )
                
              }}
         </Consumer>)
  }
}

export default Edit
Edit.contextType  = Context


