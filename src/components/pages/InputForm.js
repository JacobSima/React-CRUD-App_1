import React from 'react'
import  classnames from 'classnames'

export default function InputForm({
  type,
  placeholder,
  name,
  onChange,
  error,
  label,
  value

}) {
  return (
    <div className="form-group">
                        <label htmlFor="name">{label}</label>
                        <input 
                            type={type}
                            className={classnames({"form-control":true,"is-invalid":error})}
                            placeholder={placeholder}
                            name={name} 
                            value={value}
                            onChange ={onChange}
                         />
                          <div className="invalid-feedback">
                          {error}
                        </div>
                      </div>
  )
}
