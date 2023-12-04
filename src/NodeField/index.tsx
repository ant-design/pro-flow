import { CaretDownFilled } from '@ant-design/icons';
import { ActionIcon } from '@ant-design/pro-editor';
import { ConfigProvider } from 'antd';
import { createStyles } from 'antd-style';
import { CSSProperties, memo, PropsWithChildren, ReactNode } from 'react';
import { Flexbox } from 'react-layout-kit';
import { Handle, Position } from 'reactflow';
import useControlledState from 'use-merge-value';

import { CollapseProvider, useStore, useStoreApi } from '@/EditNode/CollapseContext';

const prefixCls = 'editor-field-item';

export const useNodeFieldStyles = createStyles(({ css, token, cx }) => {
  const handle = css`
    width: 20px;
    height: 20px;
    background: ${token.colorBgElevated};
    border: 4px solid ${token.colorPrimary};
  `;

  return {
    title: cx(
      `${prefixCls}-title`,
      css`
        position: relative;
        font-weight: bold;
        color: ${token.colorText};
      `,
    ),
    extra: cx(
      css`
        position: relative;
      `,
    ),
    value: css`
      padding: 12px 16px;
      background: ${token.colorBgLayout};
      border-radius: 8px;
    `,
    handle,
    handleRight: css`
      ${handle};
      right: -35px;
    `,
    handleLeft: css`
      ${handle};
      left: -35px;
    `,
  };
});

/**
 * 额外操作选项
 */
export interface ExtraAction {
  /**
   * 操作标题
   */
  title?: string;
  /**
   * 操作图标
   */
  icon?: ReactNode;
  /**
   * 点击操作时的回调函数
   */
  onClick?: () => void;
}

/**
 * NodeField 组件的 props
 */
export interface NodeFieldProps {
  /**
   * 节点的唯一标识符
   */
  id: string;
  /**
   * 节点标题，支持传入 ReactNode
   */
  title?: ReactNode;
  /**
   * 额外的操作按钮，格式为 ExtraAction 数组
   */
  extra?: ExtraAction[];
  /**
   * 是否折叠，默认为 false
   */
  collapsed?: boolean;
  /**
   * 折叠状态改变时的回调函数
   * @param collapsed - 折叠状态
   */
  onCollapsedChange?: (collapsed: boolean) => void;
  /**
   * 值区域是否使用容器包裹
   * @default true
   */
  valueContainer?: boolean;
  /**
   * 自定义类名
   * @param extra - 操作按钮的类名
   * @param value - 值区域的类名
   * @param header - 节点头部的类名
   * @param title - 标题的类名
   */
  classNames?: { extra?: string; value?: string; header?: string; title?: string };
  /**
   * 节点的连接点，用于连线
   * @param source - 源节点的连接点，默认为 true
   * @param target - 目标节点的连接点，默认为 true
   */
  handles?: {
    source?: true | string;
    target?: true | string;
  };
  /**
   * 自定义样式
   */
  style?: CSSProperties;
  className?: string;
  /**
   * 子元素
   */
  children?: ReactNode;
}

const NodeFieldContent = memo(
  ({
    children,
    title,
    extra,
    collapsed,
    onCollapsedChange,
    valueContainer,
    classNames = {},
    handles = {},
    id,
    className,
    style,
  }: NodeFieldProps) => {
    const { styles, theme, cx } = useNodeFieldStyles();

    const [collapsedKeys, toggleCollapsedKey] = useStore((s) => [
      s.collapsedKeys,
      s.toggleCollapsedKey,
    ]);

    const [isCollapsed, setCollapsed] = useControlledState<boolean>(collapsedKeys.includes(id), {
      value: typeof collapsed === 'undefined' ? collapsedKeys.includes(id) : collapsed,
      onChange: (v) => {
        toggleCollapsedKey(id);
        onCollapsedChange?.(v);
      },
    });

    return (
      <Flexbox gap={12} className={cx(`${prefixCls}-container`, className)} style={style}>
        {title && (
          <Flexbox
            horizontal
            distribution={'space-between'}
            align={'center'}
            className={cx(`${prefixCls}-header`, classNames?.header)}
          >
            <Flexbox className={cx(styles.title, classNames?.title)}>
              {!!handles?.source && (
                <Handle
                  id={typeof handles?.source === 'string' ? handles?.source : id}
                  type={'target'}
                  position={Position.Left}
                  className={styles.handleLeft}
                />
              )}
              {title}
            </Flexbox>
            <Flexbox
              horizontal
              gap={4}
              className={cx(styles.extra, `${prefixCls}-extra`, classNames?.extra, 'nodrag')}
            >
              <ConfigProvider theme={{ token: { colorText: theme.colorTextSecondary } }}>
                {isCollapsed
                  ? null
                  : extra &&
                    extra.map((item, index) => (
                      <ActionIcon
                        key={item.title || '' + index}
                        icon={item.icon}
                        title={item.title}
                        onClick={item.onClick}
                      />
                    ))}
                <ActionIcon
                  icon={<CaretDownFilled rotate={isCollapsed ? -90 : 0} />}
                  title={isCollapsed ? '展开' : '折起'}
                  onClick={() => {
                    setCollapsed(!isCollapsed);
                  }}
                />
              </ConfigProvider>

              {!!handles?.target && (
                <Handle
                  id={typeof handles?.target === 'string' ? handles?.target : id}
                  type={'source'}
                  position={Position.Right}
                  className={styles.handleRight}
                />
              )}
            </Flexbox>
          </Flexbox>
        )}
        {isCollapsed ? null : children && valueContainer === false ? (
          children
        ) : (
          <div className={cx(styles.value, classNames.value)}>{children}</div>
        )}
      </Flexbox>
    );
  },
);

const Wrapper = ({ children }: PropsWithChildren) => {
  let isWrapped = true;

  const Content = <>{children}</>;

  try {
    useStoreApi();
  } catch (e) {
    isWrapped = false;
  }

  if (isWrapped) {
    return Content;
  }

  return <CollapseProvider>{children}</CollapseProvider>;
};

export const NodeField = memo<NodeFieldProps>((props) => (
  <Wrapper>
    <NodeFieldContent {...props} />
  </Wrapper>
));
