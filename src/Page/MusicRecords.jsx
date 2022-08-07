import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector,} from 'react-redux'
import { getMusicRecords } from '../Redux/AppReducer/action';
import {store} from "../Redux/store"
import styled from 'styled-components';
import  "../App.css"
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const MusicRecords = () => {

    const dispatch=useDispatch();
    const musicRecords=useSelector(store=>store.AppReducer.musicRecords)
    const [searchParams]=useSearchParams();
    const location=useLocation()



   

    useEffect(()=>{
        if(location || musicRecords.length === 0 )
        {   
            const sortBy=searchParams.get("sortBy")


            const queryParams={
                params:{
                    genre:searchParams.getAll("genre"),
                    _sort:sortBy && "year",
                    _order:sortBy
                }
            }

            dispatch(getMusicRecords(queryParams))
        }
     
    },[location.search])
    // console.log(musicRecords)



  return (
    <div className='musicRecords'>
      {
        musicRecords.length>0 && musicRecords.map(elem=>{
            return (
           <div  key={elem.id}>
            <Link to={`/music/${elem.id}`}>
               <div>{elem.name}</div>
               <div><img src={elem.img} alt={elem.name} /></div>
               <div>{elem.genre}</div>
               <div>{elem.year}</div>
            </Link>

            
            </div>
            )
        })
      }
    </div>
  )
}

export default MusicRecords

const MusicRecordsWrapper=styled.div`
border:1px solid green;
width:300px;


`
