import React from 'react'
import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
    return (
        		<form className='flex items-center gap-2'>
        			<input type='text' placeholder='Search here...' className='w-full input rounded-full focus:outline-none focus:border-2 h-10 border-2  bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 text-white' />
        			<button type='submit' className='btn btn-circle   rounded-full focus:outline-none border-none hover:text-black  bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 text-white'>
        				<IoSearchSharp className='w-8 h-6 outline-none' />
        			</button>
        		</form>
        	);
}

export default SearchInput