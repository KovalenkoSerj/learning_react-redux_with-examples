// import { createStore, applyMiddleware } from 'redux';
// import { reducer } from './reducers/reducer';
// // import thunk from 'redux-thunk'
// import  createSagaMiddleware  from 'redux-saga'
// import { watchAgeUp } from './sagas/saga'

// export const sagaMiddleware = createSagaMiddleware();
// export const store =  createStore(reducer, applyMiddleware(sagaMiddleware)) //saga
// sagaMiddleware.run(watchAgeUp)


// // const logAction = store => {
// // 	return next => {
// // 		return action => {
// // 			const result = next(action);
// // 			console.log(`middleware${JSON.stringify(result)} `)
// // 			return result
// // 		}
// // 	}
// // } // example middleware

// // export const store = createStore(reducer, applyMiddleware(thunk)) // use thunk

// //middleware