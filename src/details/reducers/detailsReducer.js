import { FETCH_SERVICE_DETAILS, FETCH_NODE_DETAILS } from '../../types/actionType';
import { FETCH_NODE_VIEW, FETCH_SERVICE_VIEW, FETCH_MPS_VIEW, RESET_DETAILS } from '../../types/actionType';

const detailsReducer = (treeNodeInfo = [], { type, payload }) => {
    if (type === FETCH_SERVICE_DETAILS || type === FETCH_NODE_DETAILS )
        return payload;
        
    if (
        type === FETCH_NODE_VIEW ||
        type === FETCH_SERVICE_VIEW ||
        type === FETCH_MPS_VIEW ||
        type === RESET_DETAILS
    )
        return [];
    
    return treeNodeInfo;
}

export default detailsReducer;