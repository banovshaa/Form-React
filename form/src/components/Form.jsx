import React from 'react'
import {Row,Col} from 'react-bootstrap'
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import{yupResolver} from '@hookform/resolvers/yup'

const Form = () => {
    const schema=yup.object().shape({
        fullName:yup.string().required("enter your full name"),
        email:yup.string().email().required("enter your email properly"),
        age:yup.number().integer().positive().required("enter your age"),
        password:yup.string().min(8).max(20).required(),
        confirmPassword:yup.string().oneOf([yup.ref('password'),null],"passwords don't match")
    })
    const{register, handleSubmit,formState:{errors}}=useForm({
        resolver:yupResolver(schema)
    })
    const onSubmit=(data)=>{alert('successfully passed')}

  return (
    <div className='formAll'>
        <Row>
            <Col className='left px-0' md={6}>
                <h1>Register</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="line">
                        <label htmlFor="fullName">full name:</label>
                        <input type="text" id='fullName' {...register('fullName')} />
                        <p>{errors.fullName?.message}</p>
                    </div>
                    <div className="line">
                        <label htmlFor="email">email:</label>
                        <input type="email"  id='email' {...register('email')} />
                        <p>{errors.email?.message}</p>
                    </div>
                    <div className="line">
                        <label htmlFor="age">age:</label>
                        <input type="number"  id='age' {...register('age')}/>
                        <p>{errors.age?.message}</p>
                    </div>
                    <div className="line">
                        <label htmlFor="password">password:</label>
                        <input type="password"  id='password'{...register('password')}/>
                        <p>{errors.password?.message}</p>
                    </div>
                    <div className="line">
                        <label htmlFor="confirmPassword">confirm password:</label>
                        <input type="password" id='confirmPassword' {...register('confirmPassword')}/>
                        <p>{errors.confirmPassword?.message}</p>
                    </div>
                    <button className='subBtn'>Submit</button>
                </form>
            </Col>
            <Col className='right px-0' md={6}>
                <img src='https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt="bg" />
            </Col>
        </Row>
        
    </div>
  )
}

export default Form