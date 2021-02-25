import {updateLastValue} from './actions'

const initialState = {
   temperatures:[]
};
  
  function reducer(state = initialState, action) {
    switch (action.type) {
      case 'NEW_TEMP':
        let temperatures = state.temperatures
        temperatures.push(action.payload)
        
        console.log(action.type, action.payload.value, state.temperatures)
        return {
          ...state,
          temperatures: temperatures
        }
      default:
        return state;
    }
  }
  export default reducer;