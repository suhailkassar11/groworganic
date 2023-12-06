import { useQuery } from 'react-query';
import { DataGrid } from '@mui/x-data-grid';
import DepartmentList from '../components/DepartmentList';
import { Box } from '@mui/material';
import {useEffect} from 'react';
import { useNavigate } from 'react-router';
const Home = () => {
  const navigate=useNavigate()
    const { data } = useQuery('posts', async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        return response.json();
      });
    useEffect(()=>{
      const userData=localStorage.getItem('userData');
      if(!userData){
        navigate("/")
        localStorage.clear()
      }
    },[])
      return (
        <Box className="flex flex-col justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 items-center space-y-12 p-5">
          <h1 className='text-3xl font-bold text-slate-300'>Details</h1>
          <div>
            {data && (
              <DataGrid className='text-white bg-slate-300'
                rows={data}
                columns={[
                  { field: 'id', headerName: 'ID', width: 70 },
                  { field: 'title', headerName: 'Title', width: 200 },
                  { field: 'body', headerName: 'Body', width: 500 },
                ]}
              />
            )}
          </div>
          <div className='w-[60%] bg-slate-300 rounded-lg'>
            
            <DepartmentList />
          </div>
        </Box>
      );
}

export default Home
