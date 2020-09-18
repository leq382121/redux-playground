import store from './store';
import { bugAdded, bugRemoved, bugResolved } from './actions';

const unsubscribe = store.subscribe(() => {
  console.log("store changed", store.getState());
});

// state = reducer(state, action)
// in real world it happens when user clicks button dispatch an action
store.dispatch(bugAdded('Bug 1'));
store.dispatch(bugResolved(1));
store.dispatch(bugRemoved(1))

unsubscribe();

console.log(store.getState());