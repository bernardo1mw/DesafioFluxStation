'use client';
import Link from 'next/link';
import React, { useRef } from 'react';
import { BACKEND_URL, BASE_URL } from '../lib/constants';
import { Button } from '../components/Button';
import InputBox from '../components/InputBox';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import Login from '../components/Login';



const SigninPage = () => {
	

	return (
		<Login></Login>
		
  );
};

export default SigninPage;
