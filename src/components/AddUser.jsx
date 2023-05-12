import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import TextField from './TextField'
import Button from './Button'
import { useDispatch } from 'react-redux'
import { addUser } from './Userslice'
import { v4 as uuidv4 } from 'uuid'

export default function AddUser() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [values, setValues] = useState({
        name: '',
        email: ''
    })

    const handleAddUser = () => {
        setValues({name:'', email:''})
        dispatch(addUser({
            id:uuidv4(),
            name:values.name,
            email:values.email
        }))
        navigate('/')
        console.log(values)
    }
    
    return (
        <div className='mt-10 max-w-xl  mx-auto'>
            <TextField label='Name' value={values.name} onChange={(e) => setValues({ ...values, name: e.target.value })} inputProps={{ type: 'text', placeholder: 'JohnDoe' }} />
            <TextField label='Email' value={values.email} onChange={(e) => setValues({ ...values, email: e.target.value })} inputProps={{ type: 'email', placeholder: 'john@gmail.com' }} />
            <Button onClick={handleAddUser}>Submit</Button>
        </div>
    )
}
