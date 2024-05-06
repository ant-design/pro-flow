import isEqual from 'fast-deep-equal';
import { memo } from 'react';

import Cursor from './Cursor';

import type { AwarenessState } from '../store';
import { useStore } from '../store';

const Cursors = memo(() => {
  const awarenessStates = useStore<AwarenessState[]>(
    (s) => s.awarenessStates?.filter((a) => a.active && a.user.id !== s.currentUser.id),
    isEqual,
  );

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
