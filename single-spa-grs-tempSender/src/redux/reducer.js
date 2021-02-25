const initialState = {
    machines: [{
        name: "Machine 1",
        status: "active",
        currentValue: 0
    }]
};
  
  function reducer(state = initialState, action) {
    switch (action.type) {
      case 'SEND_TEMP':
        let machines = state.machines
        machines[action.payload.id].currentValue = action.payload.value
        
        console.log(action.type, action.payload.value)
        return {
          ...state,
          machines: machines
        }
      default:
        return state;
    }
  }
  export default reducer;