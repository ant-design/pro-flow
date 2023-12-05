import { Handle, Position } from '@ant-design/pro-flow';
import { FC } from 'react';

interface PipeNodeChild {
  title: string;
  logo?: string;
  id: string;
}

interface PipeNode {
  title: string;
  logo: string;
  des?: string;
  children?: PipeNodeChild[];
}

const CustomNode: FC<{
  data: PipeNode;
}> = ({ data }) => {
  const { title, des, logo, children = [] } = data;

  console.log('reload');

  return (
    <div className={'techUIpipeNodeWrap'}>
      <div className="pipeNode">
        <div className="mainBox">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="title">{title}</div>
          <div className="subLogo">
            <img
              src={
                'https://mdn.alipayobjects.com/huamei_d2ejos/afts/img/A*Rg0cQpidn8cAAAAAAAAAAAAADvl6AQ/original'
              }
              alt=""
            />
          </div>
        </div>

        {children.length > 0 && (
          <div className="children">
            {children.map((item, index) => (
              <>
                <div className="childrenBox" key={index}>
                  <Handle
                    id={`${item.id}-target`}
                    type="target"
                    position={Position.Left}
                    style={{
                      opacity: 0,
                    }}
                  />
                  {item.logo && (
                    <div className="logo">
                      <img src={item.logo} alt="" />
                    </div>
                  )}
                  <div className="wrap">
                    <div className="title">{item.title}</div>
                    <div className="des">{item.des}</div>
                  </div>
                  <Handle
                    id={`${item.id}-source`}
                    type="source"
                    position={Position.Right}
                    style={{
                      opacity: 0,
                    }}
                  />
                </div>
              </>
            ))}
          </div>
        )}

        {des && <div className="des">{des}</div>}
      </div>
    </div>
  );
};

export default CustomNode;
