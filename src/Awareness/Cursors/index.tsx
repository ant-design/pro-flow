import { memo, useContext } from 'react';

import { Awareness } from '@ant-design/pro-editor';
import { StoreContext } from '../store';

// import { useStore } from '../store';

const Cursors = memo(() => {
  // const awarenessStates = useStore<AwarenessState[]>(
  //   (s) => s.awarenessStates?.filter((a) => a.active && a.user.id !== s.currentUser.id),
  //   isEqual,
  // );

  const { awarenessStates, currentUser } = useContext(StoreContext)!;
  return (
    <>
      {awarenessStates
        .filter((a) => a.active && a.user.id !== currentUser.id)
        ?.map((a) => {
          const { cursor, user } = a;

          return (
            <Awareness.Cursor key={user.id} position={cursor} color={user.color} name={user.name} />
          );
        })}
    </>
  );
});

export default Cursors;
