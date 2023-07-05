const initialState = {
    count: 0,
}
console.log("countReducer is: ",initialState)
export const countReducer = (state = initialState,action) => {
    switch(action.type){
        case 'INCREMENT': 
        return {...state,count: state.count +1};
        case 'DECREMENT': 
        if(state.count > 0){
        return {...state,count: state.count -1};
        }
        return state;
    default: 
        return state;
    }
}