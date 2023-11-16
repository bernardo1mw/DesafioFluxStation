"use client"
import React, { useRef, useState } from 'react'
import InputBox from './InputBox'
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

type InputData = {
  document: string;
  password: string;
};

const Login = () => {
	const router = useRouter()
	const [error, setError] = useState('')

  const searchParams = useSearchParams()
	let callbackUrl: string
	if(searchParams.get("callbackUrl")?.endsWith("dashboard")){
 	 callbackUrl = '/dashboard'}
  
  const data = useRef<InputData>({
    document: '',
    password: ''
  });

	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await signIn("credentials", {
			document: data.current.document,
      password: data.current.password,
      redirect: false,
    });
		
		if(!res?.error) {
		setTimeout(()=>{
			
			router.push(callbackUrl || '/')
		}, 1000)	
		}
		else {
			setError('Invalid email or password')
		}

		
  };

	return (
		
		<div className="mx-auto my-20 shadow-2xl shadow-[#4561ae] rounded overflow-hidden 	 mx max-w-md bg-[#4561ae]">
			{error && (
        <p className="bg-red-100 text-red-600 text-center p-2 ">
          Authentication Failed
        </p>
      )}
		  <div className="px-4 py-2 text-slate-200 font-bold">
        Sign up
      </div>
			<form onSubmit={onSubmit}>
      <div className="px-10 py-5 flex flex-col gap-6">
        <InputBox
          name="document"
          labelText="Document"
          required
          onChange={(e) => (data.current.document = e.target.value)}
					/>
        <InputBox
          name="password"
          labelText="Password"
          type="password"
          required
          onChange={(e) => (data.current.password = e.target.value)}
					/>
        <div className="flex justify-center items-center gap-5">
          
					<button type='submit' className='group hover:font-semibold text-white rounded-md px-4 py-2 my-3 hover:px-6 hover:py-3  focus:bg-pink-700 bg-pink-600   hover:duration-[500ms]'>
						Sign In
					</button>
          <Link className="group  hover:bg-slate-300 hover:duration-[700ms] hover:text-slate-900 text-slate-200 px-4 py-2 rounded-md" href={"/"}>
            Cancel
          </Link>
        </div>
      </div>
		</form>
    </div>
	)
}

export default Login