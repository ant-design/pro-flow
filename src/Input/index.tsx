import { Input as AntInput, InputProps as AntdInputProps, InputRef } from 'antd';
import { TextAreaProps as AntdTextAreaProps } from 'antd/es/input/TextArea';
import { forwardRef, memo } from 'react';

import { useStyles } from './style';

export interface InputProps extends AntdInputProps {
  ref?: any;
  type?: 'ghost' | 'block';
}

export const Input = forwardRef<InputRef, InputProps>(
  ({ className, type = 'ghost', ...props }, ref) => {
    const { styles, cx } = useStyles();
    return (
      <AntInput
        className={cx(styles.input, type === 'block' && styles.block, className)}
        ref={ref}
        {...props}
      />
    );
  },
);

export interface TextAreaProps extends AntdTextAreaProps {
  ref?: any;
  type?: 'ghost' | 'block';
}

export const TextArea = memo<TextAreaProps>(
  forwardRef(({ className, type = 'ghost', ...props }, ref: any) => {
    const { styles, cx } = useStyles();

    return (
      <AntInput.TextArea
        className={cx(styles.textarea, type === 'block' && styles.block, className)}
        ref={ref}
        {...props}
      />
    );
  }),
);
