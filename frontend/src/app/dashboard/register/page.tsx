
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { TextField } from '@mui/material';
import Form from '../../components/Form';
import { BACKEND_URL, BASE_URL } from '../../lib/constants';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';



const RegisterRefuelPage = () => {

	

	return (
    <Form/>
  );
};

export default RegisterRefuelPage;
