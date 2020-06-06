import React, { useState } from 'react';
import styled from 'styled-components'

const FormComponent = styled.form`
    display: flex;
    flex-direction: column;
    width: 200px;
    margin: auto
`
const Input = styled.input`
    padding: 7px 5px;
    margin: 5px 0;
`
const Button = styled.button`
    background: red;
    border: 1px solid black;
    color: black;
`

function Form(props) {

    const [member, setMember] = useState({name: '', email: '', role: ''})

    const handleEventOnChange = (event) => {
        setMember({
            ...member,
            [event.target.name]: event.target.value
        })
        
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.addMember(member)
        setMember({name: '', email: '', role: ''})
        
    }

  return (
    <FormComponent onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <Input type="text" id="name" name="name" onChange={handleEventOnChange} value={member.name}/>
        <label htmlFor="email">Email</label>
        <Input type="email" id="email" name="email" onChange={handleEventOnChange} value={member.email}/>
        <label htmlFor="role">Role</label>
        <Input type="text" id="role" name="role" onChange={handleEventOnChange} value={member.role}/>
        <Button>Submit</Button>
    </FormComponent>
  );
}

export default Form;
