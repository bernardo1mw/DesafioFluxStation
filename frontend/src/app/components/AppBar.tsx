import Link from 'next/link';
import React from 'react';
import SigninButton from './SigninButton';

const AppBar = () => (
  <header className="flex gap-4 p-4 bg-gradient-to-b from-white to-gray-200 shadow">
    <Link className="transition-colors hover:text-blue-500" href={'/'}>
      Home Page
    </Link>
    <Link className="transition-colors hover:text-blue-500" href={'/dashboard'}>
      DashBoard
    </Link>
    <Link href={'/dashboard1/settings'}>Settings</Link>
    <SigninButton />
  </header>
);

export default AppBar;
