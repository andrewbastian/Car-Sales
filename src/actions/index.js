export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURES = "REMOVE_FEATURES";

export const addFeature = newFeature => {
    return {
        type: 'ADD_FEATURES',
        payload: newFeature
    };
};
export const removeFeature = newFeature => {
    return {
        type: 'REMOVE_FEATURES',
        payload: newFeature
    };
};
