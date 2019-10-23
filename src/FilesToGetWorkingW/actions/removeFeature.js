export const removeFeature = newFeature => {
    return {
        type: 'REMOVE_FEATURES',
        payload: newFeature
    };
};
