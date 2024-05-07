import { memo, useContext } from 'react';

import { StoreContext } from '../store';
import Cursor from './Cursor';

// import { useStore } from '../store';

const Cursors = memo(() => {
  // const awarenessStates = useStore<AwarenessState[]>(
  //   (s) => s.awarenessStates?.filter((a) => a.active && a.user.id !== s.currentUser.id),
  //   isEqual,
  // );

  const { awarenessStates } = useContext(StoreContext)!;
  return (
    <>
      {awarenessStates?.map((a) => {
        const { cursor, user } = a;

        return <Cursor key={user.id} position={cursor} color={user.color} name={user.name} />;
      })}
    </>
  );
});

export default Cursors;
