import SearchBar from '../components/SearchBar';
import { Typography, Button } from '@mui/material';


export default function Home() {
  return (
        <div className='h-screen flex flex-col justify-center items-center'>
            <Typography variant="h1" component="h1" className='mb-10 font-bold'>
                ICSearch
            </Typography>
            <SearchBar/>
        </div>
  );
}