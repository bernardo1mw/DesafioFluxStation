'use client';
import Link from 'next/link';
import React, { useRef } from 'react';
import { BACKEND_URL, BASE_URL } from '../lib/constants';
import { Button } from '../components/Button';


import InputBox from '../components/InputBox';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

type FormInputs = {
  name: string;
  document: string;
  password: string;
};

const SignupPage = () => {
	const router = useRouter()
  const register = async () => {
    const res = await fetch(BACKEND_URL + '/auth/signup', {
      method: 'POST',
      body: JSON.stringify({
        name: data.current.name,
        document: data.current.document,
        password: data.current.password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      alert(res.statusText);
      return;
    }
    alert('Registrado com sucesso!');
		await signIn(undefined, {callbackUrl: "/"})
  };

  const data = useRef<FormInputs>({
    name: '',
    document: '',
    password: '',
  });

	return (
    <div className="mx-auto my-20 shadow-2xl shadow-[#4561ae] rounded overflow-hidden 	 mx max-w-md bg-[#4561ae]">
			<div className=''>

			</div>
		  <div className="px-4 py-2 text-slate-200 font-bold">
        Sign up
      </div>
      <div className="px-10 py-5 flex flex-col gap-6">
        <InputBox
          autoComplete="off"
          name="name"
          labelText="Name"
          required
          onChange={(e) => (data.current.name = e.target.value)}
					/>
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
          
					<button onClick={register} className='group hover:font-semibold text-white rounded-md px-4 py-2 my-3 hover:px-6 hover:py-3  focus:bg-pink-700 bg-pink-600   hover:duration-[500ms]'>
						Submit
					</button>
          <Link className="group  hover:bg-slate-300 hover:duration-[700ms] hover:text-slate-900 text-slate-200 px-4 py-2 rounded-md" href={"/"}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
