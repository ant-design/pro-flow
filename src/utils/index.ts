import {
  NODE_DANGER,
  NODE_SELECT,
  NODE_SUB_DANGER,
  NODE_SUB_SELECT,
  NODE_SUB_WARNING,
  NODE_WARNING,
} from '@/FlowView/constants';
import { SelectType } from '..';

export function getClsFromSelectType(select: SelectType) {
  switch (select) {
    case SelectType.SELECT:
      return NODE_SELECT;
    case SelectType.SUB_SELECT:
      return NODE_SUB_SELECT;
    case SelectType.DANGER:
      return NODE_DANGER;
    case SelectType.SUB_DANGER:
      return NODE_SUB_DANGER;
    case SelectType.WARNING:
      return NODE_WARNING;
    case SelectType.SUB_WARNING:
      return NODE_SUB_WARNING;
    default:
      return 'nodeDefault';
  }
}
