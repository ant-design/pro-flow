import { nanoid } from 'nanoid';
import { createContext, useEffect, useState } from 'react';
import type { Awareness } from 'y-protocols/awareness';
import { WebrtcProvider } from 'y-webrtc';
import { useAwarenessEvent } from './event';

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
  const [awarenessStates, setAwarenessStates] = useState<AwarenessState[]>([]);
  const [currentUser] = useState<User>({
    id: nanoid(),
    name: user?.name ?? 'Anonymous',
    color: user?.color ?? 'black',
  });
  const [awareness] = useState<ProviderStore['awareness']>(provider.awareness);

  useAwarenessEvent({
    onMouseMove: (p) => {
      awareness!.setLocalStateField('cursor', p);
    },
    onBlur: (e) => {
      awareness!.setLocalStateField('active', e === 'visible');
    },
  });

  useEffect(() => {
    // 先创建一下监听事件
    awareness!.on('change', () => {
      const awarenessStates = Array.from(awareness!.getStates().values()) as AwarenessState[];

      setAwarenessStates(awarenessStates);
    });

    // 再初始化一轮用户
    awareness!.setLocalStateField('user', currentUser);

    awareness!.setLocalStateField('active', true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    provider,
    awareness,
    currentUser,
    awarenessStates,
    followUser,
    setFollowUser,
  };
};

export const StoreContext = createContext<ProviderStore | null>(null);
