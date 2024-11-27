"use client";

import Results from "@/components/Results";
import SearchBar from "@/components/SearchBar";
import { Typography } from "@mui/material";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';

const SearchStr = () => {
    const { query } = useParams();
    const router = useRouter();
    const [data, setData] = useState([[]]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://127.0.0.1:5000/search/${query}`);
            console.log(response);
            const result = await response.json();
            setData(result['results']);
        }

        fetchData();
    }, []);

    const handleHome = () => {
        console.log('test')
        router.push('/');
    }

    return (
        <div className="pl-10 pt-10">
            <div className="flex items-center">
                <div onClick={handleHome} className="cursor-pointer">
                    <Typography variant="h2" component="h2" className='mr-5 font-bold'>
                        ICS
                    </Typography>
                </div>
                <SearchBar default={query}/>
            </div>
            <div className="ml-10 m-5">
                <Results data={data}/>
            </div>
        </div>
    );
};

export default SearchStr;
