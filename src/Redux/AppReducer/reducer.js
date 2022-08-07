import React from 'react'
import * as types from "./actiontype"

const initState={
    musicRecords:[],
    isLoading:false,
    isError:false
}
export const reducer = (state=initState,action) => {
    
 const {type,payload}=action;


 switch (type){
    case types.GET_MUSIC_RECORDS_REQUEST:
        return {
            ...state,
            isLoading:true,
            isError:false,
        }
        case types.GET_MUSIC_RECORDS_SUCCESS:
            return {
                ...state,
                isLoading:false,
                isError:false,
                musicRecords:payload,
            }

            case types.GET_MUSIC_RECORDS_FAILURE:
                return {
                    ...state,
                    isLoading:false,
                    isError:true,
                }  

    default :
    return state
 }
}
