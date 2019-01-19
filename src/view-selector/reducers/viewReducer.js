import { FETCH_NODE_VIEW, FETCH_SERVICE_VIEW, FETCH_MPS_VIEW } from '../../common/types/actionType';
import { NODE_VIEW, SERVICE_VIEW, MPS_VIEW } from '../../common/types/treeViewType';

const viewReducer = (treeView = '', { type }) => {
    if (type === FETCH_NODE_VIEW)
        return NODE_VIEW;
    if (type === FETCH_SERVICE_VIEW)
        return SERVICE_VIEW;
    if (type === FETCH_MPS_VIEW)
        return MPS_VIEW;

    return treeView;
}

export default viewReducer;
