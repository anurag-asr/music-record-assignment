import * as types from "./actiontype"
import axios from "axios"
import { useDispatch } from "react-redux"




export const getMusicRecords=(params)=>dispatch=>{
   

    dispatch({type:types.GET_MUSIC_RECORDS_REQUEST})

    return  axios.get("http://localhost:8080/albums",params)
        .then((res)=>{
            // console.log("car")
            return dispatch({type:types.GET_MUSIC_RECORDS_SUCCESS,payload:res.data})})
        .catch((err)=>{return dispatch({type:types.GET_MUSIC_RECORDS_FAILURE})})
    

    
}

export const updateMusicRecord=(id,payload)=>(dispatch)=>{
    dispatch({type:types.UPDATE_MUSIC_RECORDS_REQUEST})
    return axios.patch(`http://localhost:8080/albums/${id}`,payload)
    .then((r)=>dispatch({type:types.UPDATE_MUSIC_RECORDS_SUCCESS}))
    .catch((e)=>dispatch({type:types.GET_MUSIC_RECORDS_FAILURE}))
}
