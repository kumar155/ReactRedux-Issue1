
import * as ActionTypes from './actioTypes';

export const onAddItem = () => {
    return{
        type:ActionTypes.ADD_ITEM
    }
}
export const onEditItem = () => {
    return{
        type:ActionTypes.EDIT_ITEM
    }
}
export const onDeleteItem = () => {
    return{
        type:ActionTypes.DELETE_ITEM
    }
}

export const onToggleItem = () => {
    return{
        type:ActionTypes.TOGGLE_ITEM
    }
}

export const onCheckNameExists=()=>{
    return{
        type:ActionTypes.CHECK_NAME
    }
}