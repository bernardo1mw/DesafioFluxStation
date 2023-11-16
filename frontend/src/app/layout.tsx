
'use client';
import './globals.css';
import Providers from './components/Providers';
import Header from './components/Header';
import { useSelectedLayoutSegment } from 'next/navigation';

interface Props {
  children: React.ReactNode;
}

export default function RootLayout(props: Props) {

  const segment = useSelectedLayoutSegment()
  return (
		<html lang="en">
		<body  style={{ backgroundColor: segment == 'signup' ?  '#e1eaf2' : '#FEFBF6' }} >
			
    <div>
      <Providers>
        <Header />
        
        {props.children}
      </Providers>
    </div>
		</body>
		</html>
  );
}
