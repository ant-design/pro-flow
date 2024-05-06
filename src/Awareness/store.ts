import { nanoid } from 'nanoid';
import { createContext, useState } from 'react';
import type { Awareness } from 'y-protocols/awareness';
import { WebrtcProvider } from 'y-webrtc';

export interface User {
  id: string;
  name: string;
  color: string;
}

export declare type Position = {
  x: number;
  y: number;
};

export interface AwarenessState {
  user: User;
  cursor: Position;
  active: boolean;
}

interface ProviderStore {
  provider: WebrtcProvider;
  awareness?: Awareness;
  currentUser: User;
  awarenessStates: AwarenessState[];
  followUser?: string;

  setFollowUser: (id: string) => void;
}

export const useCreateStore = (provider: WebrtcProvider, user: Pick<User, 'color' | 'name'>) => {
  const [followUser, setFollowUser] = useState<string | undefined>(undefined);

  return {
    provider,
    awareness: provider.awareness,
    currentUser: {
      id: nanoid(),
      name: user?.name ?? 'Anonymous',
      color: user?.color ?? 'black',
    },
    awarenessStates: [],
    followUser,
    setFollowUser,
  };
};

export const StoreContext = createContext<ProviderStore | null>(null);
