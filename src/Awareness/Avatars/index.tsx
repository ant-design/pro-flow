import { Avatar as A } from 'antd';
import { memo, useContext } from 'react';
import { StoreContext } from '../store';
import Avatar from './Avatar';

const AvatarWrapper = ({ id, name, color, active }) => {
  const { currentUser, followUser, setFollowUser } = useContext(StoreContext)!;

  const current = currentUser === id!;
  const following = followUser && followUser === id! ? true : false;

  return (
    <Avatar
      name={name}
      current={current}
      following={following}
      color={color}
      active={active}
      onClick={() => {
        if (current) return;

        if (following) {
          setFollowUser('');
        } else {
          setFollowUser(id);
        }
      }}
    />
  );
};

const Avatars = memo(() => {
  const awarenessStates = useContext(StoreContext)?.awarenessStates;

  return (
    <A.Group>
      {awarenessStates &&
        awarenessStates
          .filter(Boolean)
          .map(({ user, active }, index) => (
            <AvatarWrapper active={active} key={`${user?.id}-${index}`} {...user} />
          ))}
    </A.Group>
  );
});

export default Avatars;
