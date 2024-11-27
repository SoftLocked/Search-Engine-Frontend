import React, { useState } from 'react'
import Result from "@/components/Result";
import { Pagination } from '@mui/material';

const Results = (props) => {

    const [page, setPage] = useState(1);

    const data = props.data;

    const handleChangePage = (event, page) => {
        setPage(page);
    }

    console.log(data);

    return (
        <div>
            {data[page-1].map((item, index) => (
                <Result key={index} url={item}/>
            ))}
            <Pagination count={data.length} showFirstButton showLastButton
            onChange={handleChangePage}/>
        </div>
        
    )
}

export default Results
