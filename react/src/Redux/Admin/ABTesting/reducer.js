// adminReducer.js

const initialState = {
    // Other initial state properties
    useExperimentalUI: false
};

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        // Other cases
        case 'UPDATE_AB_TESTING_STATUS':
            return {
                ...state,
                useExperimentalUI: action.payload
            };
        default:
            return state;
    }
};

export default adminReducer;
