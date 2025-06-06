import React, { useState } from 'react'
import AuthLayout from '../../componentes/layouts/AuthLayout'
import {useNavigate} from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const Navigate = useNavigate();
  return (
    <AuthLayout>
    <div>
      <div className='lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center'>
        <h3 className='text-xl font-semibold text-black'>Welcome Back</h3>
        <p className='text-xs text-slate-700 mt-[5px] mb-6'>
          Please enter your detail to log in
        </p>
      </div>
    </div>
    </AuthLayout>
  )
}

export default Login
