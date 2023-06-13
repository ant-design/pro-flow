import { Button, InputRef } from 'antd';
import { Input, InputProps } from '../Input';

import { memo, useCallback, useEffect, useRef, useState } from 'react';

/**
 * 控制输入框属性
 */
export interface ControlInputProps extends Omit<InputProps, 'onChange' | 'value' | 'onAbort'> {
  /**
   * 输入框变化回调函数
   * @param value - 输入框的值
   */
  onChange?: (value: string) => void;
  /**
   * 输入框值变化前回调函数
   * @param value - 输入框的值
   */
  onValueChanging?: (value: string) => void;
  /**
   * 输入框的值
   */
  value?: string;
  /**
   * 输入框变化结束回调函数
   * @param value - 输入框的值
   */
  onChangeEnd?: (value: string) => void;
}

export const ControlInput = memo<ControlInputProps>(
  ({ value, onChange, onValueChanging, onChangeEnd, ...props }) => {
    const initialValue = value || '';
    const [input, setInput] = useState<string>(initialValue);
    const inputRef = useRef<InputRef>(null);
    const isChineseInput = useRef(false);

    const isFocusing = useRef(false);

    const updateValue = useCallback(() => {
      onChange?.(input);
    }, [input]);

    useEffect(() => {
      if (typeof value !== 'undefined') setInput(value);
    }, [value]);

    return (
      <Input
        ref={inputRef}
        {...props}
        value={input}
        onCompositionStart={() => {
          isChineseInput.current = true;
        }}
        onCompositionEnd={() => {
          isChineseInput.current = false;
        }}
        onFocus={() => {
          isFocusing.current = true;
        }}
        onBlur={() => {
          isFocusing.current = false;
          onChangeEnd?.(input);
        }}
        onChange={(e) => {
          setInput(e.target.value);
          onValueChanging?.(e.target.value);
        }}
        onPressEnter={(e) => {
          if (!e.shiftKey && !isChineseInput.current) {
            e.preventDefault();
            updateValue();
            isFocusing.current = false;
            onChangeEnd?.(input);
          }
        }}
        suffix={
          value === input ? (
            <span />
          ) : (
            <>
              <Button
                type={'link'}
                size={'small'}
                onClick={() => {
                  setInput(value as string);
                }}
                style={{ padding: 0 }}
              >
                重置
              </Button>
              <Button
                type={'link'}
                size={'small'}
                style={{ padding: 0 }}
                onClick={() => {
                  updateValue();
                }}
              >
                保存 ↵
              </Button>
            </>
          )
        }
      />
    );
  },
);
