import React from 'react'
import './Contact.modules.css'
//import { useState } from 'react';
import { error } from '@11ty/eleventy/src/EleventyErrorHandler';

// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export const validate= (inputs) =>{
let errors={};
if(!inputs.name){
  errors.name ="Se requiere un nombre";
}
if(!regexEmail.test(inputs.email)){
errors.email = "Debe ser un correo electronico";
}
if(!inputs.message){
  error.message = "Se requiere un mensaje"
}
return errors
}

export default function Contact () {
  const [inputs, setInputs]= React.useState({
    name:"",
    email:"",
    message:""
  })

    const [errors, setErrors]= React.useState({
      name:"",
      email:"",
      message:""

    })

    const handleChange = (event)=>{
      setInputs({
        ...inputs,
       [ event.target.name]:event.target.value
      })
      setErrors(validate({
        ...inputs,
        [event.target.name]: event.target.value
      }))
    }
    const handleSubmit = (event)=>{
      event.preventDefault();
      if(!Object.keys(errors).length){
       alert("Datos completos")
       setInputs({
        name:"",
        email:"",
        message:""
       })
       setErrors({
        name:"",
        email:"",
        message:""
       })

      } else{
        alert("Debe llenar todos los campos")
      }
    }


  
  return (
    <form onSubmit={handleSubmit}>
     <label htmlFor = "name">Nombre</label>
     <input type ="text" name="name" placeholder='Escribe tu nombre...' value={inputs.name} onChange={handleChange} className= {errors.name && "warning" }/>
     {errors.name && <p className='danger'>{errors.name}</p>}
     <hr/>

      <label htmlFor='email'>Correo Electronico</label>
      <input type="text" name="email" placeholder='Escribe tu email...' value={inputs.email} onChange={handleChange} className={errors.email && "warning"}/>
       {errors.email && <p className='danger'>{errors.email}</p>}
        <hr/>
      <label htmlFor='message'>Mensaje:</label>
      <textarea name="message" placeholder= 'Escribe tu mensaje...' type="text" value={inputs.message} onChange={handleChange} className= {errors.message && "warning"}></textarea>
      {errors.message && <p className= 'danger'>{errors.message}</p>}

       <button type="submit">Enviar</button> 
    </form>
  )
}
