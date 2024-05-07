/**
 * title: 实时协同
 * description: 打开多个窗口，点击 "Join" 加入协作
 */

import { Button, Divider, Input } from 'antd';
import { memo, useContext, useMemo, useState } from 'react';
import { WebrtcProvider } from 'y-webrtc';
// import { SessionForm } from './SessionForm';
import Awareness from '../Awareness';
import { SessionForm } from './SessionForm';
import { StoreContext, doc } from './store';

const App = memo(() => {
  // const store = useStore((state) => ({
  //   count: state.count,
  //   increment: state.increment,
  //   updateText: state.updateText,
  //   text: state.text,
  // }));
  const { count, increment, updateText, text } = useContext(StoreContext)!;

  return (
    <>
      <Divider />
      <Input
        value={text}
        onChange={(e) => {
          updateText(e.target.value);
        }}
      />
      <Divider />
      <p>Count: {count}</p>
      <Button onClick={increment}>To the Moon!</Button>
    </>
  );
});

const Container = () => {
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const p = useMemo(() => {
    console.log(doc);
    return new WebrtcProvider('test1-room', doc);
  }, []);

  const onCreate = (values) => {
    setUser(values);
    setOpen(false);
  };

  return (
    <StoreContext.Provider
      value={{
        count,
        text,
        increment: () => setCount(count + 1),
        updateText: (text) => setText(text),
      }}
    >
      {user ? null : (
        <Button
          type="primary"
          onClick={() => {
            setOpen(true);
          }}
        >
          Join
        </Button>
      )}
      <SessionForm
        open={open}
        onCreate={onCreate}
        onCancel={() => {
          setOpen(false);
        }}
      />
      {user ? <Awareness provider={p} user={user} /> : null}
      <App />
    </StoreContext.Provider>
  );
};

export default memo(Container);
