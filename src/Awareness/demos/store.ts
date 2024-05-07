import { createContext } from 'react';
import * as Y from 'yjs';
export { default as yjsMiddleware } from 'zustand-middleware-yjs';

interface Store {
  count: number;
  text: string;
  increment: () => void;
  updateText: (text: string) => void;
}

export const doc = new Y.Doc();

export const StoreContext = createContext<Store | null>(null);
