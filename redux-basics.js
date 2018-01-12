const redux = require('redux');

const createStore=redux.createStore;

const initialState={
    counter:0
}
//Reducer
const rootReducer=(state=initialState,action)=>           //if state is undefined it will take default value i.e initial state
{
    if(action.type==='INC_COUNTER')
    {
        return {
            ...state,
            counter: state.counter + 1
        };
    }
    if(action.type==='ADD_COUNTER')
    {
        return {
            ...state,
            counter: state.counter +action.value
        };
    }
    return state;
};
//Store
const store=createStore(rootReducer);
console.log("[From Store]"+store.getState());

//Subscription
store.subscribe(()=>{
    console.log('[Subscribtion]',store.getState())
});


//Dispatching Action
store.dispatch({type:'INC_COUNTER'});
console.log("[Dispatching INC_COUNTER]"+store.getState());
store.dispatch({type:'ADD_COUNTER',value:10});
console.log("[Dispatching ADD_COUNTER]"+store.getState());

