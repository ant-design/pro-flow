import { useHotkeys } from 'react-hotkeys-hook';

import { useStore } from '../store';

export const useHotkeyManager = (open = true) => {
  const [selectAll, undo, redo, copySelection, paste] = useStore((s) => [
    s.selectAll,
    s.undo,
    s.redo,
    s.copySelection,
    s.paste,
  ]);

  useHotkeys('meta+a', (e) => {
    if (!open) return;
    e.preventDefault();

    selectAll();
  });
  useHotkeys('meta+z', (e) => {
    if (!open) return;
    e.preventDefault();

    undo();
  });
  useHotkeys('meta+c', (e) => {
    if (!open) return;
    e.preventDefault();

    copySelection();
  });
  useHotkeys('meta+v', (e) => {
    if (!open) return;
    e.preventDefault();

    paste();
  });

  useHotkeys('meta+shift+z', (e) => {
    if (!open) return;
    e.preventDefault();

    redo();
  });

  // 由于 react-flow 的 Backspace 实现逻辑有瑕疵，因此自行实现了一遍
  // refs: https://github.com/wbkd/react-flow/issues/2826
  useHotkeys('backspace', (e) => {
    if (!open) return;
    e.preventDefault();

    // beforeActionCallback(handleDelete, HotKeyAction.deleteSelection);
  });
};
