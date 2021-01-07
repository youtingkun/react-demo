export const SET_FILTER = "SET_FILTER";

const initialState = 'all'

const visibilityFilter = (state = initialState, action:any) => {
  switch (action.type) {
    case SET_FILTER: {
      return action.payload.filter;
    }
    default: {
      return state;
    }
  }
};

export default visibilityFilter;
