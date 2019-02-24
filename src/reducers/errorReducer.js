import { GET_ERRORS } from "../actions/types";
const initialState = {};
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return action.payload; //TODO: this seems wrong. The entire state along with payload should be returned I think
    default:
      return state;
  }
}
