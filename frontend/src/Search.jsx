import React from 'react'
import { CiSearch } from "react-icons/ci";

const Search = () => {
    const [input,SetInput]=React.useState(false);
    const show=()=>{
        SetInput(!input);
    }

  return (
    <div>
      <CiSearch onClick={show} className='text-gray-700 text-xl hover:text-orange-300 cursor-pointer'/>
      {input && (
        <input type="text" placeholder='search..' />
      )}
    </div>
  )
}

export default Search
