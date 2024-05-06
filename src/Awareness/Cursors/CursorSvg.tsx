import { memo } from 'react';

interface CursorProps {
  color: string;
}

const Cursor = memo<CursorProps>(({ color }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="24">
      <g fill="none" fillRule="evenodd">
        <path
          fill={color}
          d="M19.208 10.282 2.007 2.269l4.068 18.916.066-.1a29.368 29.368 0 0 1 13.067-10.803Z"
        />
        <path
          stroke="#FFF"
          strokeWidth="1.5"
          d="m19.483 10.954.758-.32a.365.365 0 0 0 .013-.666l-.747-.347-18.246-8.5a.143.143 0 0 0-.2.16L5.375 21.34l.18.833a.357.357 0 0 0 .645.123l.469-.704 2.458-3.694a14.326 14.326 0 0 1 6.374-5.27l3.982-1.674Z"
        />
      </g>
    </svg>
  );
});

export default Cursor;
