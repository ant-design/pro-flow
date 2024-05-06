import { Avatar as A, Badge, Tooltip } from 'antd';
import Color from 'color';
import { memo } from 'react';

export interface AvatarProps {
  /**
   * 用户名
   */
  name: string;
  /**
   * 颜色
   */
  color: string;
  /**
   * 是否激活状态
   * @default false
   */
  active?: boolean;
  /**
   * 是否当前用户
   * @default false
   */
  current?: boolean;
  /**
   * 是否关注了当前用户
   * @default false
   */
  following?: boolean;
  /**
   * 点击事件回调函数
   */
  onClick?: () => void;
}

const Avatar = memo<AvatarProps>(({ name, color, onClick, active, current, following }) => {
  if (!name) return <A />;

  const colorModel = Color(color);

  return (
    <Tooltip title={name} showArrow={false}>
      <A
        shape={'circle'}
        style={{
          background: color,
          outline: following ? `2px solid ${color}` : '',
          color: colorModel.isLight() ? 'black' : 'inherit',
          zIndex: following ? 1000 : active ? 100 : 0,
          filter: active ? 'none' : 'grayscale(80%)',
          overflow: 'initial',
          cursor: current ? 'inherit' : 'pointer',
        }}
        onClick={onClick}
      >
        {name.slice(0, 1)}
        <Badge
          status={active ? 'success' : 'default'}
          color={active ? undefined : '#d9d9d9'}
          style={{ position: 'absolute', left: 11, top: 11 }}
        />
      </A>
    </Tooltip>
  );
});

export default Avatar;
