import styled, {createGlobalStyle} from 'styled-components';
import { SERVICE, NODE, MPS } from '../common/types/tree';

export const GlobalStyle = createGlobalStyle`
    .rst__rowContents {
        padding-left: 0px !important;
        border: 1px solid rgba(34,36,38,.15) !important;
        border-radius: 5px !important;
    }
    .rst__rowTitle {
        font-family: monospace !important;
    }
    .rst__rowSearchFocus {
        outline: 0 !important;
        box-shadow: 0 0 4pt 1pt #C4D613 !important;
        border-radius: 5px !important;
    }
    .rst__rowSearchMatch {
        outline: 0 !important;
        box-shadow: 0 0 4pt 1pt #FCE904;
        border-radius: 5px !important;
    }
`;

export const StyledDeploymentModel = styled.div`
    height: 100%;
    width: 54%;
    border: 1px solid rgba(34,36,38,.15);
    border-radius: 5px;
`;

const attachClassNameProps = ({ type }) => {
    if (type === NODE)
        return { className: 'fa fa-laptop' };
    if (type === SERVICE)
        return { className: 'fa fa-cogs' };
    if (type === MPS)
        return { className: 'fa fa-user-o' };

    return { className: '' };
}

const iconStyle = `
	border-right: solid 1px rgba(34,36,38,.15);
	padding: 12px;
	font-size: 16px;
	margin-right: 10px;
	color: #5d5c5c;
	background-color: #F6F6F6;
    &:hover {
	    background-color: #D9D9D9;
    }
    &.fa-user-o:hover {
        background-color: #F6F6F6;
    }
    &.fa-user-o {
        cursor: auto !important;
    }
`;

export const Icon = styled.i.attrs(props => (attachClassNameProps(props)))`${iconStyle}`;
