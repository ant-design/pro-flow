import { ColorPicker, Form, Input, Modal } from 'antd';
import React from 'react';

interface Values {
  name: string;
  color: string;
}

interface SessionFormProps {
  open: boolean;
  onCreate: (values: Values) => void;
  onCancel: () => void;
}

export const SessionForm: React.FC<SessionFormProps> = ({ open, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      open={open}
      title="Join Session"
      okText="Join"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then(({ color, name }) => {
            form.resetFields();
            const colorHex = typeof color === 'string' ? color : color?.toHexString();
            onCreate({ color: colorHex, name });
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form form={form} layout="vertical" name="form_in_modal" initialValues={{ color: '#1677FF' }}>
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: 'Please input your name' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="color"
          label="Color"
          rules={[{ required: true, message: 'Please select your color' }]}
        >
          <ColorPicker format="hex" />
        </Form.Item>
      </Form>
    </Modal>
  );
};
