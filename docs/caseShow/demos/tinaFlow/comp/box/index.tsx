import React, { FC, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.less';

export const Box: FC<{
  style?: React.CSSProperties;
  className?: string;
  direction: 'top' | 'bottom' | 'left' | 'right';
  // 是否展示收起展开
  showExpand?: boolean;
  children?: React.ReactNode;
  onResizeEnd?: () => void;
}> = ({ className, direction, showExpand, style: _style, children }) => {
  const mouseDownState = useState(false);
  const isExpandState = useState(false);

  const mouseDownRef = useRef({
    isMouseDown: false,
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  const boxRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (event: React.MouseEvent) => {
    mouseDownState[1](true);
    mouseDownRef.current = {
      isMouseDown: true,
      x: event.clientX,
      y: event.clientY,
      width: boxRef.current!.offsetWidth,
      height: boxRef.current!.offsetHeight,
    };
    document.documentElement.style.cursor =
      direction === 'bottom' || direction === 'top' ? 'row-resize' : 'col-resize';
  };

  useEffect(() => {
    const handleMouseup = () => {
      mouseDownState[1](false);
      mouseDownRef.current.isMouseDown = false;
      document.documentElement.style.cursor = 'auto';
    };

    const handleMousemove = ({ clientX, clientY }: React.MouseEvent) => {
      requestAnimationFrame(() => {
        if (!mouseDownRef.current.isMouseDown || !boxRef.current) return;
        const moveHorizontalDistance = clientX - mouseDownRef.current.x;
        const moveVerticalDistance = clientY - mouseDownRef.current.y;
        if (direction === 'right') {
          boxRef.current.style.width = mouseDownRef.current.width + moveHorizontalDistance + 'px';
        }
        if (direction === 'left') {
          boxRef.current.style.width = mouseDownRef.current.width - moveHorizontalDistance + 'px';
        }
        if (direction === 'top') {
          boxRef.current.style.height = mouseDownRef.current.height - moveVerticalDistance + 'px';
        }
        if (direction === 'bottom') {
          boxRef.current.style.height = mouseDownRef.current.height + moveVerticalDistance + 'px';
        }
      });
    };

    window.addEventListener('mouseup', handleMouseup);
    window.addEventListener('mousemove', handleMousemove as any, false);

    return () => {
      window.removeEventListener('mouseup', handleMouseup);
      window.removeEventListener('mousemove', handleMousemove as any, false);
    };
  }, []);

  const handleExpandToggle = () => {
    const isHorizontal = direction === 'right' || direction === 'left';
    if (!isExpandState[0]) {
      mouseDownRef.current.width = boxRef.current!.offsetWidth;
      mouseDownRef.current.height = boxRef.current!.offsetHeight;
      boxRef.current!.style[isHorizontal ? 'width' : 'height'] = '0px';
    } else {
      boxRef.current!.style[isHorizontal ? 'width' : 'height'] =
        mouseDownRef.current[isHorizontal ? 'width' : 'height'] + 'px';
    }
    isExpandState[1](!isExpandState[0]);
  };

  return (
    <div
      style={_style}
      className={`box box-${direction} ${mouseDownState[0] ? 'box-move' : ''} ${className}`}
      ref={boxRef}
    >
      {!isExpandState[0] && (
        <div
          className={`box-holder box-holder-${direction} ${
            mouseDownState[0] ? 'box-holder-mousedown' : ''
          }`}
          onMouseDown={handleMouseDown}
        />
      )}
      <div style={isExpandState[0] ? { display: 'none' } : {}}>{children}</div>
      {showExpand && (
        <div className={`expander expander-${direction}`} onClick={handleExpandToggle}>
          <div className="expander-button">
            <span className="anticon">
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                data-icon="right"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
              >
                {isExpandState[0] ? (
                  <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z" />
                ) : (
                  <path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z" />
                )}
              </svg>
            </span>
          </div>
        </div>
      )}
      {mouseDownState[0] &&
        ReactDOM.createPortal(
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              zIndex: 10000,
            }}
          />,
          document.body,
        )}
    </div>
  );
};
