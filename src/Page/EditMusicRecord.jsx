import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getMusicRecords, updateMusicRecord } from '../Redux/AppReducer/action';


export const EditMusicRecord = () => {
    const dispatch=useDispatch();
    const {id}=useParams();
    const params=useParams();
    
    const musicRecords=useSelector((store)=>store.AppReducer.musicRecords)
    const [currentMusicAlbum,setCurrentMusicAlbum]=useState({})
    const [musicName,setMusicName]=useState('')
    const [artistName,setArtistName]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(musicName && artistName)
        {
            const payload={
                name:musicName,
                artist:artistName
            }
            dispatch(updateMusicRecord(id,payload))
            .then(()=>{getMusicRecords()})
        }
    }

    useEffect(()=>{
        if(id)//filter the album base on the id 
        {
            const currentMusic=musicRecords.find(album=>album.id===id)
            
            // currentMusic && setCurrentMusicAlbum(currentMusic)
            if(currentMusic){
                setMusicName(currentMusic.name)
                setArtistName(currentMusic.artist)
            }
            // console.log(currentMusic)
        }
       
      },[id,musicRecords])

  console.log(musicName,artistName)
  return (
    <div>
        <h1>Edit Page</h1>
        <form onSubmit={handleSubmit}>
        <div>
            <label>Edit Music Name</label>
            <input type="text" value={musicName} onChange={(e)=>setMusicName(e.target.value)}/>
        </div>
        <div>
            <label>Edit Artist Name</label>
            <input type="text" value={artistName} onChange={(e)=>setArtistName(e.target.value)}/>
        </div>
        <button type="submit">Submit</button>
        </form>
       
    </div>
  )
}
