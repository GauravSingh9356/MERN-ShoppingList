import {GET_ITEMS, ADD_ITEMS, DELETE_ITEMS, ITEMS_LOADING} from './types'
import axios from 'axios'
export const get_ITEMS=()=>dispatch=>{
   dispatch(setItemsLoading)
   axios
   .get('/api/items')
   .then(response=> dispatch({
       type:
       GET_ITEMS,
       payload:response.data
   }))
}


export const deleteItem=(id) =>dispatch=> {
    axios.delete(`/api/items/${id}`).then(res=>
        dispatch({
            type:DELETE_ITEMS,
            payload:id
        }))
}

export const addItem=(item) => dispatch=>{
    axios
    .post('/api/items', item)
    .then(response=> dispatch({
        type: ADD_ITEMS,
        payload:response.data
    }))
}


export const setItemsLoading=()=>{
    return {
        type:ITEMS_LOADING
    }
}