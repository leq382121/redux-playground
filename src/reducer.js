import * as actions from './actionTypes';
// []

let lastId = 0;

export const reducer = (state = [], action) => {
    // reducer is a pure function

    switch (action.type) {
        case actions.BUG_ADDED: {
            // we copy all the bugs in a current state
            return [
                ...state,
                {
                    id: ++lastId,
                    description: action.payload.description,
                    resolved: false
                }
            ]
        }

        case actions.BUG_REMOVED: {
            console.log(state);

            return state.filter(bug => bug.id !== action.payload.id)
        }

        case actions.BUG_RESOLVED : {
            return state.map((bug) => {
                return bug.id !== action.payload.id ? bug : {...bug, resolved: true};
            })
        }

        default: {
            return state;
        }
    }
}