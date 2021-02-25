import {createStore} from "redux";

import reducer from "./reducer";

export const storeInstance = createStore(reducer);