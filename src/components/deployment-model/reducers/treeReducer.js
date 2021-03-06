import { UPDATE_TREE } from '../actionType';
import { FETCH_NODE_VIEW, FETCH_SERVICE_VIEW, FETCH_TAG_VIEW } from '../../view-selector/actionTypes';

const treeReducer = (treeData = [], { type, payload }) => {
    if (
        type === FETCH_NODE_VIEW ||
        type === FETCH_SERVICE_VIEW ||
        type === FETCH_TAG_VIEW ||
        type === UPDATE_TREE
    )
        return payload;

    return treeData;
}

export default treeReducer;
