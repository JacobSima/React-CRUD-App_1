import React, { Component } from 'react'
import InputForm from '../pages/InputForm'
import {connect} from 'react-redux'
import {getContact,updateContact} from '../../actions/contactActions'


class Edit extends Component {
  state ={
    name:'',
    email:'',
    phone:'',
    errors:''
  }
  //fetch single contact
  componentDidMount(){
      const {id} = this.props.match.params
      this.props.getContact(id)
  }
  componentWillReceiveProps(nextProps,nextState){
    const {name,email,phone}=nextProps.contact
    this.setState({name,email,phone})
  }

  //onform submit event
  onSubmit = async(e)=>{
    e.preventDefault()
    const {name,email,phone} = this.state
    const id = this.props.match.params.id
    //check validate inputs fields
    if(name===''){this.setState({errors:{name:'Please Enter Name'}});return}
    if(email===''){this.setState({errors:{email:'Please Enter Email'}});return}
    if(phone===''){this.setState({errors:{phone:'Please Enter phone'}}); return}

    const newContact ={
      name,
      email,
      phone,
      id
    }
    
    this.props.updateContact(newContact)
    
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
                    <h4>Edit Contact</h4>
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
                     label="Phone"
                     error={errors.phone}
                    />
                      <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                  </React.Fragment>
                )
                
              }}

const mapStateToprops=(state)=>({
  conctats:state.contact.conctats,
  contact:state.contact.contact
})    
// const mapDispatchToprops =(dispatch)=>({
   
// })          

export default connect(mapStateToprops,{getContact,updateContact})(Edit)



