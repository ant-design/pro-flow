import { memo, ReactNode } from 'react';
import { create, StoreApi } from 'zustand';
import { createContext, createStoreUpdater } from 'zustand-utils';

// ============ State ============ //

interface CollapseState {
  collapsedKeys: string[];
  onCollapsedKeysChange?: (keys: string[]) => void;
  toggleCollapsedKey: (key: string) => void;
}

type ControlledState = Partial<Pick<CollapseState, 'collapsedKeys' | 'onCollapsedKeysChange'>>;

// ============ Store ============ //

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

// ============ Provider ============ //

export interface CollapseProviderProps extends ControlledState {
  children: ReactNode;
  defaultCollapsedKeys?: string[];
}

const StoreUpdater = memo<Pick<CollapseProviderProps, 'collapsedKeys'>>(({ collapsedKeys }) => {
  const storeApi = useStoreApi();
  const useUpdater = createStoreUpdater(storeApi);

  useUpdater('collapsedKeys', collapsedKeys);

  return null;
});

export const CollapseProvider = memo<CollapseProviderProps>(
  ({ children, defaultCollapsedKeys, onCollapsedKeysChange, collapsedKeys }) => (
    <>
      <Provider
        createStore={() =>
          createStore({ collapsedKeys: defaultCollapsedKeys, onCollapsedKeysChange })
        }
      >
        {children}
        <StoreUpdater collapsedKeys={collapsedKeys} />
      </Provider>
    </>
  ),
);
