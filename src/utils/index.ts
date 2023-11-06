import {
  NODE_DANGER,
  NODE_SELECT,
  NODE_SUB_DANGER,
  NODE_SUB_SELECT,
  NODE_SUB_WARNING,
  NODE_WARNING,
} from '@/FlowView/constants';
import { NodeSelect } from '..';

export function getClsFromSelectType(select: NodeSelect) {
  switch (select) {
    case NodeSelect.SELECT:
      return NODE_SELECT;
    case NodeSelect.SUB_SELECT:
      return NODE_SUB_SELECT;
    case NodeSelect.DANGER:
      return NODE_DANGER;
    case NodeSelect.SUB_DANGER:
      return NODE_SUB_DANGER;
    case NodeSelect.WARNING:
      return NODE_WARNING;
    case NodeSelect.SUB_WARNING:
      return NODE_SUB_WARNING;
    default:
      return 'nodeDefault';
  }
}
