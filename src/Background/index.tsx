import { CSSProperties } from 'react';
import { Background, BackgroundVariant } from 'reactflow';

interface BackgroundProps {
  variant?: BackgroundVariant;
  gap?: number | [number, number];
  size?: number;
  lineWidth?: number;
  offset?: number;
  color?: string;
  styles?: CSSProperties;
  className?: string;
  id?: string;
}

export default (props: BackgroundProps) => {
  const { gap = 10, color = '#bac3d4' } = props;

  return <Background {...props} gap={gap} color={color} />;
};

export { BackgroundVariant };
