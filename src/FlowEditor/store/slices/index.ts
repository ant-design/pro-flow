import { EdgesSlice, PublicEdgesAction } from './edgesSlice';
import { GeneralActionSlice, PublicGeneralAction } from './generalActionSlice';
import { NodesSlice, PublicNodesAction } from './nodesSlice';
export { edgesSlice } from './edgesSlice';
export { generalActionSlice } from './generalActionSlice';
export { nodesSlice } from './nodesSlice';

export type InternalStoreAction = GeneralActionSlice & EdgesSlice & NodesSlice;

export type PublicStoreAction = PublicGeneralAction & PublicEdgesAction & PublicNodesAction;
