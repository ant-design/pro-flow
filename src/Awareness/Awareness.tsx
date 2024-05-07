import { memo } from 'react';
import type { WebrtcProvider } from 'y-webrtc';
import Avatars from './Avatars';
// import Cursors from './Cursors';
import Cursors from './Cursors';
import { StoreContext, User, useCreateStore } from './store';
export interface AwarenessProps {
  provider: WebrtcProvider;
  avatars?: boolean;
  cursors?: boolean;
  user: Pick<User, 'color' | 'name'>;
}

const Awareness = memo<AwarenessProps>(({ provider, avatars = true, cursors = true, user }) => {
  const value = useCreateStore(provider, user);

  return (
    <StoreContext.Provider value={value}>
      {cursors && <Cursors />}
      {avatars && <Avatars />}
    </StoreContext.Provider>
  );
});

export default Awareness;
