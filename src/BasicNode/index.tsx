import { Card } from 'antd';
import { createStyles } from 'antd-style';
import { CSSProperties, ReactNode, memo } from 'react';

import EditableText from '@/EditableText';
import { useFlowEditor } from '@/hooks/useFlowEditor';
import { CollapseProvider } from './CollapseContext';

const useStyles = createStyles(({ css, token, prefixCls }) => ({
  container: css`
    will-change: transform;
    width: 800px;
    border: 2px solid ${token.colorBorder};
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

interface BasicNodePreviewProps {
  id?: string;
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
  className?: string;
  style?: CSSProperties;

  collapsedKeys?: string[];
  onCollapsedKeysChange?: (collapsedKeys: string[]) => void;
  onTitleChange?: (title: string) => void;
}

const Preview = memo<BasicNodePreviewProps>(
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

    return (
      <CollapseProvider collapsedKeys={collapsedKeys} onCollapsedKeysChange={onCollapsedKeysChange}>
        <Card
          title={<EditableText onChange={onTitleChange} value={title || '基础节点'} />}
          className={cx(styles.container, active && styles.selected, className)}
          extra={extra}
          style={style}
        >
          {children}
        </Card>
      </CollapseProvider>
    );
  },
);

interface BasicNodeProps extends BasicNodePreviewProps {
  id: string;
}

const Default = memo<BasicNodeProps>(({ id, onTitleChange, onCollapsedKeysChange, ...props }) => {
  const editor = useFlowEditor();
  return (
    <Preview
      id={id}
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
}) as (props: BasicNodeProps) => JSX.Element;

interface IBasicNode {
  (props: BasicNodeProps): JSX.Element;
  Preview: typeof Preview;
}

const BasicNode = Default as IBasicNode;

BasicNode.Preview = Preview;

export default BasicNode;
