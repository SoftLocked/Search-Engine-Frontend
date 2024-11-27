"use client";

import { TextField, Box, IconButton } from '@mui/material'
import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { useRouter } from 'next/navigation';

const SearchBar = (props) => {

    const defVal = decodeURIComponent(props.default);

    const [searchValue, setSearchValue] = useState('');
    const router = useRouter();

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
    };

    const handleSearch = () => {
        if (searchValue.trim()) {
            // Example of routing to a search results page, passing the search term as a query parameter
            router.push(`${encodeURIComponent(searchValue)}`);
        } else {
            // Optional: Redirect to a default page if search is empty
            alert('Please enter a search term');
        }
    };

    const handleKeyDown = (event) => {
        if (event.key == "Enter") {
            handleSearch();
        }
    };

    console.log("test", defVal);

    return (
        <Box display="flex" gap={2} alignItems="center" width="50%">
            <TextField
                sx={
                    {
                        borderRadius: '20px'
                    }
                }
                variant="outlined"
                placeholder="Search..."
                defaultValue={defVal != "undefined" ? defVal : ""}
                //value={searchValue}
                onChange={handleSearchChange}
                onKeyDown={handleKeyDown}
                fullWidth
            />
            <IconButton variant="contained" color="secondary" onClick={handleSearch} size="large">
                <SearchIcon />
            </IconButton>
        </Box>
    )
}

export default SearchBar
