// pages/index.js
import YourComponent from './api/pokiapi';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import Example from './components/Query';
// import ChartComponent from './components/ApexChart';

export default function Home() {
const queryClient = new QueryClient()

  return (
<>
<YourComponent/>
{/* <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider> */}
{/* <ChartComponent/> */}
</>
  );
}

