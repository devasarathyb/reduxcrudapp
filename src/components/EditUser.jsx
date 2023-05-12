import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextField from './TextField';
import Button from './Button';
import { editUser } from './Userslice';

export default function EditUser() {
  
    const dispatch = useDispatch();
    const params = useParams()
    const navigate = useNavigate();
    const user = useSelector(state=>state.users)
    const existingUser = user.filter(users=> users.id === params.id)
    const {name,email} = existingUser[0];
    const [values, setValues] = useState({
        name,
        email,
    })

    const handleEditUser = () => {
        setValues({name:'', email:''})
        console.log(values)
        dispatch(editUser({
            id: params.id,
            name: values.name,
            email :  values.email
        }))
        navigate('/')
    }
    
    return (
        <div className='mt-10 max-w-xl  mx-auto'>
            <TextField label='Name' value={values.name} onChange={(e) => setValues({ ...values, name: e.target.value })} inputProps={{ type: 'text', placeholder: 'JohnDoe' }} />
            <TextField label='Email' value={values.email} onChange={(e) => setValues({ ...values, email: e.target.value })} inputProps={{ type: 'email', placeholder: 'john@gmail.com' }} />
            <Button onClick={handleEditUser}>Edit</Button>
        </div>
    )
}
