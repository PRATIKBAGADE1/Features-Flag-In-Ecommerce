// adminActions.js

export const updateABTestingStatus = (status) => {
    return {
        type: 'UPDATE_AB_TESTING_STATUS',
        payload: status
    };
};
