import * as types from "./actiontype"

const initState={
    isAuth:false,
    isLoading:false,
    isError:false,
    token:""
}

export const reducer=(state=initState,action)=>{
    const {type,payload}=action;
    switch(type){
        case types.USER_LOGIN_REQUEST:
            return {
                ...state,
                isLoading:true,
            }
            case types.USER_LOGIN_SUCCESS:
                // {console.log(payload)}
                return {
                    ...state,
                    isLoading:true,
                    isError:false,
                    isAuth:true,
                    token:""
                }   
             
                case types.USER_LOGIN_ERROR:
                    return {
                        ...state,
                        isLoading:false,
                        isError:true,
                        isAuth:false

                    } 
          default:
            return state             
    }
    

    
}