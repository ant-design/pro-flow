import { CaretDownFilled } from '@ant-design/icons';
import { ActionIcon } from '@ant-design/pro-editor';
import { ConfigProvider } from 'antd';
import { createStyles } from 'antd-style';
import { CSSProperties, memo, PropsWithChildren, ReactNode } from 'react';
import { Flexbox } from 'react-layout-kit';
import { Handle, Position } from 'reactflow';
import useControlledState from 'use-merge-value';
import { shallow } from 'zustand/shallow';

import { CollapseProvider, useStore, useStoreApi } from '@/BasicNode/CollapseContext';

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

export interface ExtraAction {
  title?: string;
  icon?: ReactNode;
  onClick?: () => void;
}

interface ValueItemprops extends PropsWithChildren {
  id: string;
  title?: ReactNode;
  extra?: ExtraAction[];
  collapsed?: boolean;
  onCollapsedChange?: (collapsed: boolean) => void;
  valueContainer?: boolean;
  classNames?: { extra?: string; value?: string; header?: string; title?: string };

  handles?: {
    source?: true | string;
    target?: true | string;
  };
  style?: CSSProperties;
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
    style,
  }: ValueItemprops) => {
    const { styles, theme, cx } = useNodeFieldStyles();

    const [collapsedKeys, toggleCollapsedKey] = useStore(
      (s) => [s.collapsedKeys, s.toggleCollapsedKey],
      shallow,
    );

    const [isCollapsed, setCollapsed] = useControlledState<boolean>(collapsedKeys.includes(id), {
      value: typeof collapsed === 'undefined' ? collapsedKeys.includes(id) : collapsed,
      onChange: (v) => {
        toggleCollapsedKey(id);
        onCollapsedChange?.(v);
      },
    });

    return (
      <Flexbox gap={12} className={cx(`${prefixCls}-container`)} style={style}>
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
              <ConfigProvider
                theme={{ token: { colorText: theme.colorTextSecondary, fontSize: 12 } }}
              >
                {isCollapsed
                  ? null
                  : extra &&
                    extra.map((item, index) => (
                      <ActionIcon
                        key={item.title || '' + index}
                        // size={'small'}
                        icon={item.icon}
                        title={item.title}
                        onClick={item.onClick}
                      />
                    ))}
                <ActionIcon
                  // size={'small'}
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

export const NodeField = memo<ValueItemprops>((props) => (
  <Wrapper>
    <NodeFieldContent {...props} />
  </Wrapper>
));
