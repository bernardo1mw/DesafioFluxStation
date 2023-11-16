'use client';
import { useSession, signOut, signIn } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';
import Button from '@mui/material/Button';

const SigninButton = () => {
  const { data: session } = useSession();
  if (session && session.user) {
    return (
      <div>
        <Button color="error" onClick={() => signOut()}>
          Sign Out
        </Button>
      </div>
    );
  }

  return (
    <div >
      <Button color="success" onClick={() => signIn()}>
        Sign In
      </Button>
      <Link href="/signup">
        <Button color="success">Sign Up</Button>
      </Link>
    </div>
  );
};

export default SigninButton;
