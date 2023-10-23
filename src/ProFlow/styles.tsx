import { createStyles } from 'antd-style';
import {
  EDGE_DANGER,
  EDGE_SELECT,
  EDGE_SUB_DANGER,
  EDGE_SUB_SELECT,
  EDGE_SUB_WARNING,
  EDGE_WARNING,
  INIT_NODE,
} from './constants';

export const useStyles = createStyles(({ css }) => ({
  container: css`
    width: 100%;
    height: 100%;

    .react-flow__attribution {
      display: none;
    }

    .${INIT_NODE} {
      padding: 0;
      box-sizing: border-box;
      width: 320px;
      height: 83px;
      border: none;
      box-shadow: 0 1px 4px 1px rgba(0, 0, 0, 8%);
      border-radius: 8px;
      cursor: pointer;
      z-index: 1;
    }

    .${EDGE_SELECT} path {
      stroke: #1677ff;
      stroke-width: 2;
      z-index: 100;
    }

    .${EDGE_SUB_SELECT} path {
      stroke: #1677ff;
      stroke-width: 1;
      z-index: 100;
    }

    .${EDGE_DANGER} path {
      stroke: #f7636e;
      stroke-width: 2;
      z-index: 100;
    }

    .${EDGE_SUB_DANGER} path {
      stroke: #f7636e;
      stroke-width: 1;
      z-index: 100;
    }

    .${EDGE_WARNING} path {
      stroke: #ef9d3b;
      stroke-width: 2;
      z-index: 100;
    }

    .${EDGE_SUB_WARNING} path {
      stroke: #ef9d3b;
      stroke-width: 1;
      z-index: 100;
    }

    .selectable:focus {
      box-shadow: none !important;
    }

    .selected {
      box-shadow: none !important;
    }
  `,
}));
