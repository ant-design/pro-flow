import { Card, ConfigProvider } from 'antd';
import { createStyles } from 'antd-style';
import { CSSProperties, ReactNode, memo, useRef } from 'react';

import EditableText from '@/EditableText';
import { useFlowEditor } from '@/FlowEditor';
import { CollapseProvider } from './CollapseContext';

const useStyles = createStyles(({ css, token, prefixCls }) => ({
  container: css`
    will-change: transform;
    width: 100%;
    max-width: 600px;
    border: 1px solid ${token.colorBorder};
    border-radius: 12px;
    .${prefixCls}-card-head {
      padding-right: 16px;
    }

    .editor-field-item-container:not(:last-child) {
      margin-bottom: 24px;
    }
  `,
  selected: css`
    border-color: ${token.colorPrimary};
    border-width: 2px;
    box-shadow: 0 9px 25px -6px rgba(0, 0, 0, 0.1);
  `,
}));

export interface EditNodePreviewProps {
  /**
   * 标题
   */
  title?: string;
  /**
   * 额外的 ReactNode
   */
  extra?: ReactNode;
  /**
   * 子元素 ReactNode
   */
  children?: ReactNode;
  /**
   * 是否激活状态
   */
  active?: boolean;
  /**
   * 自定义类名
   */
  className?: string;
  /**
   * 自定义样式
   */
  style?: CSSProperties;

  /**
   * 折叠的键数组
   * @default []
   */
  collapsedKeys?: string[];
  /**
   * 折叠键数组变化时的回调函数
   */
  onCollapsedKeysChange?: (collapsedKeys: string[]) => void;
  /**
   * 标题变化时的回调函数
   */
  onTitleChange?: (title: string) => void;
}

const Preview = memo<EditNodePreviewProps>(
  ({
    active,
    collapsedKeys,
    onCollapsedKeysChange,
    onTitleChange,
    style,
    className,
    title,
    children,
    extra,
  }) => {
    const { styles, cx } = useStyles();
    const cardRef = useRef<HTMLDivElement>(null);

    return (
      <ConfigProvider
        // 不这样做会导致 select 的下拉菜单被遮挡，并且不会正常放大缩小
        getPopupContainer={() => {
          return cardRef.current || document.body;
        }}
      >
        <CollapseProvider
          collapsedKeys={collapsedKeys}
          onCollapsedKeysChange={onCollapsedKeysChange}
        >
          <Card
            ref={cardRef}
            title={<EditableText onChange={onTitleChange} value={title || '基础节点'} />}
            className={cx(styles.container, active && styles.selected, className)}
            extra={extra}
            style={style}
          >
            {children}
          </Card>
        </CollapseProvider>
      </ConfigProvider>
    );
  },
);

interface EditNodeProps extends EditNodePreviewProps {
  /**
   * 节点的 id
   */
  id: string;
}

const Default = memo<EditNodeProps>(({ id, onTitleChange, onCollapsedKeysChange, ...props }) => {
  const editor = useFlowEditor();
  return (
    <Preview
      onTitleChange={(title) => {
        editor.updateNodeMeta(id, 'title', title);
        onTitleChange?.(title);
      }}
      onCollapsedKeysChange={(collapsedKeys) => {
        editor.updateNodeState(id, 'collapsedKeys', collapsedKeys);

        onCollapsedKeysChange?.(collapsedKeys);
      }}
      {...props}
    />
  );
}) as (props: EditNodeProps) => JSX.Element;

interface IEditNode {
  (props: EditNodeProps): ReactNode;
  Preview: typeof Preview;
}

const EditNode = Default as IEditNode;

EditNode.Preview = Preview;

export default EditNode;
