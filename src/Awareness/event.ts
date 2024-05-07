import { useEffect } from 'react';
import { distinctUntilChanged, fromEvent, merge, startWith } from 'rxjs';
import { map } from 'rxjs/operators';

interface AwarenessEventParams {
  onMouseMove: (p: { x: number; y: number }) => void;
  onBlur: (e: DocumentVisibilityState) => void;
}

// 鼠标移动事件
const mouse$ = fromEvent<MouseEvent>(document, 'mousemove').pipe(
  distinctUntilChanged(),
  map((e) => ({ x: e.clientX, y: e.clientY })),
  startWith({ x: -100, y: -100 }),
);

const visibility$ = merge(
  fromEvent(document, 'visibilitychange').pipe(map(() => document.visibilityState)),
  fromEvent(window, 'focus').pipe(map(() => document.visibilityState)),
  fromEvent(window, 'blur').pipe(map(() => 'hidden')),
);

export const useAwarenessEvent = ({ onMouseMove, onBlur }: AwarenessEventParams) => {
  useEffect(() => {
    const x = mouse$.subscribe(onMouseMove);
    const y = visibility$.subscribe(onBlur);

    return () => {
      x.unsubscribe();
      y.unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
