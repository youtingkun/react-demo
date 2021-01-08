import { createStore,applyMiddleware  } from "redux";
import thunk from 'redux-thunk';
import rootReducer from "./reducers";



// 安装redux-devtools-extension的可视化工具。
import { composeWithDevTools } from 'redux-devtools-extension'



export default  createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk),
    ),
  
);