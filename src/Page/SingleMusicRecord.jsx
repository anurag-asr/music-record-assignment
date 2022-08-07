import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { getMusicRecords } from '../Redux/AppReducer/action';
import { store } from '../Redux/store';

export const SingleMusicRecord = () => {
    // we have some data in the params
    // get the id from the  params
    // filter the music albumsn based on the id
    // get the album petaining to that particular id

    const {id}=useParams();
    const musicRecords=useSelector((store)=>store.AppReducer.musicRecords)
    const dispatch=useDispatch();
    const [currentMusicAlbum,setCurrentMusicAlbum]=useState({})

    useEffect(()=>{
  if(musicRecords.length===0)
  {
    dispatch(getMusicRecords())
  }
    },[dispatch,musicRecords.length])

  useEffect(()=>{
    if(id)//filter the album base on the id 
    {
        const currentMusic=musicRecords.find(album=>album.id===id)
        
        currentMusic && setCurrentMusicAlbum(currentMusic)
    }
  },[id,musicRecords])

  return (

    <div>SingleMusicRecord
        <h1>{currentMusicAlbum.name}</h1>
        <div>
            <Link to={`/music/${id}/edit`}>Edit</Link>
        </div>
    </div>
  )
}
