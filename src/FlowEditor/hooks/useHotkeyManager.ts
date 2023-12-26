import { useHotkeys } from 'react-hotkeys-hook';

import { useStore } from '../store';

export const useHotkeyManager = () => {
  const [selectAll, undo, redo, copySelection, paste] = useStore((s) => [
    s.selectAll,
    s.undo,
    s.redo,
    s.copySelection,
    s.paste,
  ]);

  useHotkeys('meta+a', (e) => {
    e.preventDefault();

    selectAll();
  });
  useHotkeys('meta+z', (e) => {
    e.preventDefault();

    undo();
  });
  useHotkeys('meta+c', (e) => {
    e.preventDefault();

    copySelection();
  });
  useHotkeys('meta+v', (e) => {
    e.preventDefault();

    paste();
  });

  useHotkeys('meta+shift+z', (e) => {
    e.preventDefault();

    redo();
  });

  // 由于 react-flow 的 Backspace 实现逻辑有瑕疵，因此自行实现了一遍
  // refs: https://github.com/wbkd/react-flow/issues/2826
  useHotkeys('backspace', (e) => {
    e.preventDefault();
    // console.log('backspace');
    // beforeActionCallback(handleDelete, HotKeyAction.deleteSelection);
  });
};
