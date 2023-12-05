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

export const useStyles = createStyles(({ css, cx }) => ({
  container: css`
    width: 100%;
    height: 100%;

    .react-flow__attribution {
      display: none;
    }

    .${INIT_NODE} {
      padding: 0;
      box-sizing: border-box;
      border: none;
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

    .${EDGE_SUB_SELECT}:hover path {
      stroke: red;
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
  nodeWrap: cx(
    css`
      display: flex;
      z-index: 10 !important;
      position: absolute;
      border-radius: 8px;
      padding: 16px 12px;
      box-sizing: border-box;
      /* border: 3px solid white; */
      flex: 1;
      background: #ffffff;
      border: 1px solid rgba(255, 255, 255, 0.04);
      box-shadow: 0 4px 6px -2px rgba(25, 15, 15, 0.05), 0 0 1px 0 rgba(0, 0, 0, 0.08);

      .img {
        width: 48px;
        height: 48px;
      }

      .content {
        width: 230px;
        margin-left: 13px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;

        .title {
          width: 100%;
          display: flex;
          flex: 1;

          span {
            font-size: 16px;
            color: rgba(0, 0, 0, 85%);
            line-height: 22px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            text-align: left;
          }

          .dangerLogo {
            width: 28px;
            height: 16px;
            background: #ffeef1;
            border-radius: 7px;
            margin-left: 8px;
            margin-top: 3px;
            display: flex;
            justify-content: center;
            align-items: center;
            img {
              width: 8px;
              height: 9px;
            }
          }
        }

        .des {
          font-size: 14px;
          color: rgba(0, 0, 0, 45%);
          line-height: 20px;
          white-space: nowrap;
          width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          text-align: left;
        }
      }
    `,
  ),
  nodeSelected: css`
    box-shadow: 0 0 0 3px #1677ff, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `,
  nodeSubSelected: css`
    box-shadow: 0 0 0 1px #1677ff, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `,
  nodeDanger: css`
    box-shadow: 0 0 0 3px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%);
  `,
  nodeSubDanger: css`
    box-shadow: 0 0 0 1px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `,
  nodeWarning: css`
    box-shadow: 0 0 0 3px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `,
  nodeSubWarning: css`
    box-shadow: 0 0 0 1px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `,
  nodeDefault: css``,
}));
