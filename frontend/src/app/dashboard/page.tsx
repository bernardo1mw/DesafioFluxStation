
import {
  Card,
  Grid,
  Title,
  Text,
  Tab,
  TabList,
  TabGroup,
  TabPanel,
  TabPanels,
} from "@tremor/react";
import Block from '../components/TableRow';
import TableRow from '../components/TableRow';
import HistoryTable from '../components/Table';
import EnhancedTable from '../components/Table1';
import { redirect, useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { BACKEND_URL, BASE_URL } from '../lib/constants';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';



interface Data {
	id: number
  licensePlate: string;
  fuel: string;
  refuelDate: Date;
  quantity: number;
	price: number
  total: number;
}


export default async function DashboardPage() {
	// const  session  = await getServerSession(authOptions);
  // if(!session || !session.user ) {
	// 	redirect('/signin')
	// }
	const session = await getServerSession(authOptions)
	const res = await fetch(BACKEND_URL + '/refuel/history', {
		method: 'GET',
		headers: {
			authorization: `Bearer ${session?.backendTokens.token}`,
			'Content-Type': 'application/json',
		},
	});
	const response: Data[] = await res.json()
	
  return (
    <div  className='mx-10 my-10'>
      <Title className='font-bold text-xl mb-1.5'>Dashboard</Title>
      <Text className='text-[1.1rem]'>Veja seu histórico, seus gastos e registre novos abastecimentos de maneira simples e intuitiva.</Text>
      <TabGroup className="mt-6">
        <TabPanels>
          <TabPanel>
						{/* <div className="mt-10">
						<Card>
	          	<TableRow/>
						</Card>
						</div> */}

            <div className="mt-6">
              <Card>
								<EnhancedTable data={response}/>
              </Card>
            </div>
          </TabPanel>

          

        </TabPanels>
      </TabGroup>
    </div>
  );
}