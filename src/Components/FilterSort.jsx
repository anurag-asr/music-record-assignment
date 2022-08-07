import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';

import '../App.css';

export const FilterSort = () => {
    const [searchParams,setSearchParams]=useSearchParams();
    const initialGenreParams=searchParams.getAll("genre")
    const initialSortParams=searchParams.getAll("sortBy")
    

    //it will save the lasat searchparam even if the page is reload
     const [catagory,setCatagory]=useState(initialGenreParams||[])

     const [sortBy,setSortBy]=useState(initialSortParams[0]||"")
  

    const handleGenreChange=(e)=>{
        const option =e.target.value
        let newCatagory=[...catagory];
        if(catagory.includes(option))
        {
            newCatagory.splice(newCatagory.indexOf(option),1)
        }
        else{
            newCatagory.push(option)
        }
        setCatagory(newCatagory)
    }
    // console.log(catagory)
    // console.log(sortBy)

    const handleSortBy=(e)=>{
        setSortBy(e.target.value)
    }

    useEffect(()=>{
        if(catagory||sortBy){
            const params={}
            catagory && (params.genre=catagory)
            sortBy && (params.sortBy=sortBy)
            setSearchParams(params)
        }
    },[catagory,setSearchParams,sortBy])

    console.log(searchParams.getAll("genre"))

  
  return (
    <div >
       <h3>Filter</h3>
        <div>
            <input  type="checkbox" defaultChecked={catagory.includes("K-Pop")}  value="K-Pop" onChange={handleGenreChange}/>
            <label>K-Pop</label>
        </div>

        <div>
            <input value="Pop" type="checkbox" defaultChecked={catagory.includes("Pop")} onChange={handleGenreChange} />
            <label>Pop</label>
        </div>

        {/* <div>
            <input type="checkbox" value="Hard Rock" onchange={handleGenreChange}/>
            <label>Hard Rock</label>
        </div>

        <div>
            <input type="checkbox" value="Holiday" onchange={handleGenreChange}/>
            <label>Holiday</label>
        </div>

        <div>
            <input type="checkbox" value="Classical Crossover" onchange={handleGenreChange}/>
            <label>Classical Crossover</label>
        </div>

        <div>
            <input  type="checkbox" value="Singer/Songwriter" onchange={handleGenreChange}/>
            <label>Singer/Songwriter</label>
        </div>

   
        <div>
            <input  type="checkbox" value="Heavy Metal" onchange={handleGenreChange}/>
            <label>Heavy Metal</label>
        </div>
        <div>
            <input  type="checkbox" value="Rock" onchange={handleGenreChange}/>
            <label>Rock</label>
        </div>
        <div>
            <input  type="checkbox" value="Christmas" onchange={handleGenreChange}/>
            <label>Christmas</label>
        </div> */}
     

       <h3>Sort</h3>
        <div onChange={handleSortBy}>
            <div>
                <input type="radio" name="sortBy" value="asc"
                 defaultChecked={sortBy==="asc"} />
                <label>Ascending</label>
            </div>
            <div>
                <input type="radio" value="desc" name="sortBy"
                 defaultChecked={sortBy==="desc"}
                 />
                <label>Descending</label>
            </div>
        </div>

    </div>
  )
}
