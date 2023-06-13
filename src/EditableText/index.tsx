import { EditOutlined } from '@ant-design/icons';
import { ActionIcon } from '@ant-design/pro-editor';
import { memo, useState } from 'react';
import { Flexbox } from 'react-layout-kit';

import { ControlInput, ControlInputProps } from '@/ControlInput';

export type EditableTextProps = ControlInputProps;

const EditableText = memo<EditableTextProps>(({ value, onChange }: ControlInputProps) => {
  const [edited, setEdited] = useState(false);
  return edited ? (
    <ControlInput
      onChange={onChange}
      onChangeEnd={() => {
        setEdited(false);
      }}
      value={value as string}
    />
  ) : (
    <Flexbox gap={8} horizontal>
      {value}
      <ActionIcon
        icon={<EditOutlined />}
        onClick={() => {
          setEdited(!edited);
        }}
        placement="right"
        title={'Edit'}
      />
    </Flexbox>
  );
});

export default EditableText;
