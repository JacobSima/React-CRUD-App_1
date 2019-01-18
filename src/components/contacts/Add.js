import React, { Component } from 'react'
import uuid from 'uuid'
import InputForm from '../pages/InputForm'
import {connect} from 'react-redux'
import {addContact} from '../../actions/contactActions'

class Add extends Component {
  state ={
    name:'',
    email:'',
    phone:'',
    errors:''
  }

  //onform submit event
  onSubmit = async(e)=>{
    e.preventDefault()
    const {name,email,phone} = this.state
    //check validate inputs fields
    if(name===''){this.setState({errors:{name:'Please Enter Name'}});return}
    if(email===''){this.setState({errors:{email:'Please Enter Email'}});return}
    if(phone===''){this.setState({errors:{phone:'Please Enter Phone'}}); return}

    const newContact ={
      name,
      email,
      phone,
    }
    //add new user tot the context state
    this.props.addContact(newContact)
    //redirect

    this.props.history.push('/');

    //clear the input fields
    this.setState({
      name:'',
      email:'',
      phone:'',
      errors:''
    })
  }

  //input values on change events
  onChange =(e)=>{this.setState({[e.target.name]:e.target.value})}
  render() {
    const {name,email,phone,errors} = this.state
                return (
                  <React.Fragment>
                    <h4>Add Contact</h4>
                    <form onSubmit={this.onSubmit.bind(this)}> 
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
                     placeholder="Enter Phone"
                     name="phone" 
                     value={phone}
                     onChange ={this.onChange}
                     label="phone"
                     error={errors.phone}
                    />
                      <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                  </React.Fragment>
                )
                
              }}

export default connect(null,{addContact})(Add )


