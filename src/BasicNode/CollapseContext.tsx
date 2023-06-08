import { memo, ReactNode } from 'react';
import { create, StoreApi } from 'zustand';
import { createContext } from 'zustand-utils';

interface CollapseState {
  collapsedKeys: string[];
  onCollapsedKeysChange?: (keys: string[]) => void;
  toggleCollapsedKey: (key: string) => void;
}

type ControlledState = Partial<Pick<CollapseState, 'collapsedKeys' | 'onCollapsedKeysChange'>>;

const createStore = ({ collapsedKeys, onCollapsedKeysChange }: ControlledState) =>
  create<CollapseState>((set, get) => ({
    collapsedKeys: collapsedKeys ?? [],
    onCollapsedKeysChange,

    toggleCollapsedKey: (key) => {
      let nextCollapsedKeys: string[] = [];
      if (get().collapsedKeys.includes(key)) {
        nextCollapsedKeys = get().collapsedKeys.filter((item) => item !== key);
      } else {
        nextCollapsedKeys = [...get().collapsedKeys, key];
      }

      set({ collapsedKeys: nextCollapsedKeys });
      get().onCollapsedKeysChange?.(nextCollapsedKeys);
    },
  }));

export const { useStore, useStoreApi, Provider } = createContext<StoreApi<CollapseState>>();

export interface CollapseProviderProps extends ControlledState {
  children: ReactNode;
}

export const CollapseProvider = memo<CollapseProviderProps>(({ children, ...props }) => (
  <Provider createStore={() => createStore(props)}>{children}</Provider>
));
