"use strict";(self.webpackChunk_ant_design_pro_flow=self.webpackChunk_ant_design_pro_flow||[]).push([[7716],{37851:function(x,t,e){var n;e.r(t),e.d(t,{demos:function(){return r}});var s=e(90228),l=e.n(s),p=e(87999),_=e.n(p),i=e(75271),h=e(56439),o=e(67424),a=e(68642),r={"src-flow-editor-demo-demos":{component:i.memo(i.lazy(function(){return Promise.all([e.e(3034),e.e(3569),e.e(8869),e.e(2433)]).then(e.bind(e,14353))})),asset:{type:"BLOCK",id:"src-flow-editor-demo-demos",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(29040).Z},"@ant-design/pro-flow":{type:"NPM",value:"1.3.9"},react:{type:"NPM",value:"18.3.1"},"./index.ts":{type:"FILE",value:e(53579).Z},"antd-style":{type:"NPM",value:"3.7.1"}},entry:"index.tsx"},context:{"./index.ts":o,"@ant-design/pro-flow":h,react:n||(n=e.t(i,2)),"/home/runner/work/pro-flow/pro-flow/src/FlowEditor/demos/index.style.ts":o,"antd-style":a},renderOpts:{compile:function(){var c=_()(l()().mark(function u(){var I,d=arguments;return l()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,e.e(4693).then(e.bind(e,54693));case 2:return m.abrupt("return",(I=m.sent).default.apply(I,d));case 3:case"end":return m.stop()}},u)}));function f(){return c.apply(this,arguments)}return f}()}}}},67424:function(x,t,e){e.r(t);var n=e(56753),s=(0,n.kc)(function(){return{container:{width:"100%",height:"600px",".ant-progress-text":{textAlign:"center"}},stringNode:{width:"150px",height:"30px",textAlign:"center",backgroundColor:"white",border:"1px solid aqua",borderRadius:"4px",lineHeight:"30px"}}});t.default=s},69554:function(x,t,e){e.d(t,{F:function(){return p}});var n=e(1482),s=e(24324),l=e(75271),p=function(){var i=s.ZP.useBreakpoint();return(0,l.useMemo)(function(){return(0,n.f)(i)},[i])}},68642:function(x,t,e){e.r(t),e.d(t,{StyleProvider:function(){return n.V9},ThemeProvider:function(){return n.f6},createGlobalStyle:function(){return n.vJ},createInstance:function(){return n.Fs},createStyles:function(){return n.kc},createStylish:function(){return n.Yz},css:function(){return n.iv},cx:function(){return n.cx},extractStaticStyle:function(){return n.Y2},injectGlobal:function(){return n.hi},keyframes:function(){return n.F4},setupStyled:function(){return n.Us},styleManager:function(){return n.Rr},useAntdStylish:function(){return s.n},useAntdTheme:function(){return l.A},useAntdToken:function(){return p.S},useResponsive:function(){return _.F},useTheme:function(){return n.Fg},useThemeMode:function(){return i.r}});var n=e(56753),s=e(47495),l=e(59165),p=e(98984),_=e(69554),i=e(13828)},9888:function(x,t,e){e.d(t,{Z:function(){return s}});var n=e(75271);function s(){const[,l]=n.useReducer(p=>p+1,0);return l}},52214:function(x,t,e){e.d(t,{ZP:function(){return i},c4:function(){return l},m9:function(){return h}});var n=e(75271),s=e(55699);const l=["xxl","xl","lg","md","sm","xs"],p=o=>({xs:`(max-width: ${o.screenXSMax}px)`,sm:`(min-width: ${o.screenSM}px)`,md:`(min-width: ${o.screenMD}px)`,lg:`(min-width: ${o.screenLG}px)`,xl:`(min-width: ${o.screenXL}px)`,xxl:`(min-width: ${o.screenXXL}px)`}),_=o=>{const a=o,r=[].concat(l).reverse();return r.forEach((c,f)=>{const u=c.toUpperCase(),I=`screen${u}Min`,d=`screen${u}`;if(!(a[I]<=a[d]))throw new Error(`${I}<=${d} fails : !(${a[I]}<=${a[d]})`);if(f<r.length-1){const v=`screen${u}Max`;if(!(a[d]<=a[v]))throw new Error(`${d}<=${v} fails : !(${a[d]}<=${a[v]})`);const E=`screen${r[f+1].toUpperCase()}Min`;if(!(a[v]<=a[E]))throw new Error(`${v}<=${E} fails : !(${a[v]}<=${a[E]})`)}}),o};function i(){const[,o]=(0,s.ZP)(),a=p(_(o));return n.useMemo(()=>{const r=new Map;let c=-1,f={};return{matchHandlers:{},dispatch(u){return f=u,r.forEach(I=>I(f)),r.size>=1},subscribe(u){return r.size||this.register(),c+=1,r.set(c,u),u(f),c},unsubscribe(u){r.delete(u),r.size||this.unregister()},unregister(){Object.keys(a).forEach(u=>{const I=a[u],d=this.matchHandlers[I];d==null||d.mql.removeListener(d==null?void 0:d.listener)}),r.clear()},register(){Object.keys(a).forEach(u=>{const I=a[u],d=m=>{let{matches:E}=m;this.dispatch(Object.assign(Object.assign({},f),{[u]:E}))},v=window.matchMedia(I);v.addListener(d),this.matchHandlers[I]={mql:v,listener:d},d(v)})},responsiveMap:a}},[o])}const h=(o,a)=>{if(a&&typeof a=="object")for(let r=0;r<l.length;r++){const c=l[r];if(o[c]&&a[c]!==void 0)return a[c]}}},99722:function(x,t,e){var n=e(75271),s=e(78237),l=e(9888),p=e(52214);function _(){let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;const h=(0,n.useRef)({}),o=(0,l.Z)(),a=(0,p.ZP)();return(0,s.Z)(()=>{const r=a.subscribe(c=>{h.current=c,i&&o()});return()=>a.unsubscribe(r)},[]),h.current}t.Z=_},24324:function(x,t,e){var n=e(99722);function s(){return(0,n.Z)()}t.ZP={useBreakpoint:s}},96345:function(x,t,e){e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"FlowEditor \u4E3A\u6570\u636E\u9A71\u52A8\u89E3\u51B3\u65B9\u6848\uFF0C\u9700\u642D\u914D ",paraId:0},{value:"useFlowEditor",paraId:1},{value:" \u4F7F\u7528\u3002",paraId:0},{value:"\u7528\u6237\u64CD\u4F5C",paraId:2,tocIndex:1},{value:"\u753B\u5E03\u4EA4\u4E92",paraId:2,tocIndex:1},{value:"\u89E6\u63A7\u677F",paraId:2,tocIndex:1},{value:"\u9F20\u6807",paraId:2,tocIndex:1},{value:"\u76EE\u6807\u884C\u4E3A",paraId:2,tocIndex:1},{value:"\u70B9\u51FB\u4EA4\u4E92",paraId:2,tocIndex:1},{value:"\u70B9\u51FB",paraId:2,tocIndex:1},{value:"\u9009\u4E2D\u5143\u7D20",paraId:2,tocIndex:1},{value:"\u70B9\u51FB\u62D6\u62FD",paraId:2,tocIndex:1},{value:"\u65E0\u64CD\u4F5C/",paraId:2,tocIndex:1},{value:"\u521B\u5EFA\u9009\u533A",paraId:2,tocIndex:1},{value:"shift+\u70B9\u51FB\u62D6\u62FD",paraId:2,tocIndex:1},{value:"\u65E0\u64CD\u4F5C/",paraId:2,tocIndex:1},{value:"\u6269\u5C55\u9009\u533A\uFF08\u5728\u9009\u4E2D\u5176\u4ED6\u5143\u7D20\u7684\u57FA\u7840\u4E0A\uFF09",paraId:2,tocIndex:1},{value:"\u7A7A\u683C+\u70B9\u51FB\u62D6\u62FD",paraId:2,tocIndex:1},{value:"\u6EDA\u52A8\u753B\u5E03\uFF08\u7A7A\u683C\u7B49\u4E8E\u5207\u6362\u4E3A\u62D6\u52A8\u5DE5\u5177\uFF09",paraId:2,tocIndex:1},{value:"\u6EDA\u52A8\u4EA4\u4E92",paraId:2,tocIndex:1},{value:"\u6EDA\u8F6E\u6EDA\u52A8",paraId:2,tocIndex:1},{value:"\u4E0A\u4E0B\u6EDA\u52A8\u753B\u5E03",paraId:2,tocIndex:1},{value:"shift+\u6EDA\u8F6E\u6EDA\u52A8",paraId:2,tocIndex:1},{value:"\u6C34\u5E73\u6EDA\u52A8\u753B\u5E03",paraId:2,tocIndex:1},{value:"ctrl+\u6EDA\u8F6E\u6EDA\u52A8",paraId:2,tocIndex:1},{value:"\u56F4\u7ED5\u6307\u9488\u7F29\u653E",paraId:2,tocIndex:1},{value:"\u5E73\u79FB\uFF08pan\uFF09",paraId:2,tocIndex:1},{value:"\u6EDA\u52A8\u753B\u5E03\uFF08\u6B64\u65F6\u9F20\u6807\u6307\u9488\u4E0D\u53D8\uFF09",paraId:2,tocIndex:1},{value:"\u7F29\u653E\uFF08zoom\uFF09",paraId:2,tocIndex:1},{value:"\u56F4\u7ED5\u6307\u9488\u7F29\u653E",paraId:2,tocIndex:1},{value:"\u952E\u76D8\u4EA4\u4E92",paraId:2,tocIndex:1},{value:"mac",paraId:2,tocIndex:1},{value:"win",paraId:2,tocIndex:1},{value:"\u2318+a",paraId:2,tocIndex:1},{value:"ctrl+a",paraId:2,tocIndex:1},{value:"\u9009\u4E2D\u5168\u90E8\u8282\u70B9",paraId:2,tocIndex:1},{value:"\u2318+z",paraId:2,tocIndex:1},{value:"ctrl+z",paraId:2,tocIndex:1},{value:"\u64A4\u9500\u4E0A\u4E00\u6B65\u64CD\u4F5C",paraId:2,tocIndex:1},{value:"\u2318+c",paraId:2,tocIndex:1},{value:"ctrl+c",paraId:2,tocIndex:1},{value:"\u590D\u5236\u9009\u4E2D\u7684\u90E8\u5206",paraId:2,tocIndex:1},{value:"\u2318+v",paraId:2,tocIndex:1},{value:"ctrl+v",paraId:2,tocIndex:1},{value:"\u7C98\u8D34\u9009\u4E2D\u7684\u90E8\u5206",paraId:2,tocIndex:1},{value:"\u2318+shift+z",paraId:2,tocIndex:1},{value:"ctrl+Y",paraId:2,tocIndex:1},{value:"\u91CD\u505A\u4E0A\u4E00\u6B65\u64CD\u4F5C",paraId:2,tocIndex:1},{value:"backspace",paraId:2,tocIndex:1},{value:"backspace",paraId:2,tocIndex:1},{value:"\u5220\u9664\u9009\u4E2D\u533A\u57DF",paraId:2,tocIndex:1},{value:"\u5C5E\u6027\u540D",paraId:3,tocIndex:3},{value:"\u7C7B\u578B",paraId:3,tocIndex:3},{value:"\u63CF\u8FF0",paraId:3,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:3},{value:"\u5FC5\u9009",paraId:3,tocIndex:3},{value:"defaultViewport",paraId:3,tocIndex:3},{value:"Viewport",paraId:3,tocIndex:3},{value:"\u753B\u5E03\u7684\u521D\u59CB\u7A97\u53E3\u4F4D\u7F6E",paraId:3,tocIndex:3},{value:"-",paraId:3,tocIndex:3},{value:"-",paraId:3,tocIndex:3},{value:"flowProps",paraId:3,tocIndex:3},{value:"ComponentProps<typeof ReactFlow>",paraId:3,tocIndex:3},{value:"reactflow props",paraId:3,tocIndex:3},{value:"-",paraId:3,tocIndex:3},{value:"-",paraId:3,tocIndex:3},{value:"onNodesInit",paraId:3,tocIndex:3},{value:"(editor: FlowEditorInstance) => void",paraId:3,tocIndex:3},{value:"\u8282\u70B9\u52A0\u8F7D\u5B8C\u6210\u56DE\u8C03",paraId:3,tocIndex:3},{value:"-",paraId:3,tocIndex:3},{value:"-",paraId:3,tocIndex:3},{value:"className",paraId:3,tocIndex:3},{value:"string",paraId:3,tocIndex:3},{value:"\u8FB9\u6570\u636E",paraId:3,tocIndex:3},{value:"-",paraId:3,tocIndex:3},{value:"-",paraId:3,tocIndex:3},{value:"style",paraId:3,tocIndex:3},{value:"CSSProperties",paraId:3,tocIndex:3},{value:"\u8282\u70B9\u6570\u636E",paraId:3,tocIndex:3},{value:"-",paraId:3,tocIndex:3},{value:"-",paraId:3,tocIndex:3},{value:"children",paraId:3,tocIndex:3},{value:"React.ReactNode",paraId:3,tocIndex:3},{value:"\u8FB9\u6570\u636E",paraId:3,tocIndex:3},{value:"-",paraId:3,tocIndex:3},{value:"-",paraId:3,tocIndex:3},{value:"nodeTypes",paraId:3,tocIndex:3},{value:"NodeTypes`",paraId:3,tocIndex:3},{value:"\u8282\u70B9\u7C7B\u578B",paraId:3,tocIndex:3},{value:"-",paraId:3,tocIndex:3},{value:"-",paraId:3,tocIndex:3},{value:"miniMap",paraId:3,tocIndex:3},{value:"boolean",paraId:3,tocIndex:3},{value:"\u8FB9\u6570\u636E",paraId:3,tocIndex:3},{value:"-",paraId:3,tocIndex:3},{value:"-",paraId:3,tocIndex:3},{value:"background",paraId:3,tocIndex:3},{value:"boolean",paraId:3,tocIndex:3},{value:"\u8282\u70B9\u6570\u636E",paraId:3,tocIndex:3},{value:"-",paraId:3,tocIndex:3},{value:"-",paraId:3,tocIndex:3},{value:"\u5C5E\u6027\u540D",paraId:4,tocIndex:4},{value:"\u7C7B\u578B",paraId:4,tocIndex:4},{value:"\u63CF\u8FF0",paraId:4,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:4},{value:"\u5FC5\u9009",paraId:4,tocIndex:4},{value:"x",paraId:4,tocIndex:4},{value:"number",paraId:4,tocIndex:4},{value:"x \u5750\u6807",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"y",paraId:4,tocIndex:4},{value:"number",paraId:4,tocIndex:4},{value:"y \u5750\u6807",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"zoom",paraId:4,tocIndex:4},{value:"number",paraId:4,tocIndex:4},{value:"\u7F29\u653E\u6BD4\u4F8B",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"\u89C1",paraId:5,tocIndex:5},{value:"ReactFlow Props",paraId:5,tocIndex:5},{value:`type NodeTypes = {
  [key: string]: ComponentType<NodeProps>;
};
`,paraId:6,tocIndex:6}]},53579:function(x,t){t.Z=`import { createStyles } from 'antd-style';

const useStyles = createStyles(() => {
  return {
    container: {
      width: '100%',
      height: '600px',
      '.ant-progress-text': { textAlign: 'center' },
    },
    stringNode: {
      width: '150px',
      height: '30px',
      textAlign: 'center',
      backgroundColor: 'white',
      border: '1px solid aqua',
      borderRadius: '4px',
      lineHeight: '30px',
    },
  };
});
export default useStyles;
`},29040:function(x,t){t.Z=`import {
  FlowEditor,
  FlowEditorProvider,
  Handle,
  Position,
  useFlowEditor,
} from '@ant-design/pro-flow';
import { FC, useEffect } from 'react';
import useStyles from './index.style';

const StringRender: FC = (node: any) => {
  const { styles } = useStyles();
  const { handles, id } = node;

  return (
    <div className={styles.stringNode}>
      <Handle
        id={typeof handles?.source === 'string' ? handles?.source : id}
        type={'target'}
        position={Position.Left}
      />
      {node.data.title}
      <Handle
        id={typeof handles?.source === 'string' ? handles?.source : id}
        type={'source'}
        position={Position.Right}
      />
    </div>
  );
};

const nodeTypes = { StringNode: StringRender };

const ProFlowDemo = () => {
  const editor = useFlowEditor();
  const { styles } = useStyles();

  useEffect(() => {
    editor.addNode({
      id: 'a1',
      type: 'StringNode',
      position: { x: 0, y: 100 },
      data: {
        title: 'String Node',
        handles: {},
      },
    });
    editor.addNode({
      id: 'a2',
      type: 'StringNode',
      position: { x: 0, y: 300 },
      data: {
        title: 'String Node',
        handles: {},
      },
    });
    editor.addEdges({
      'a1-a2': {
        id: 'a1-a2',
        source: 'a1',
        target: 'a2',
        data: {
          source: 'a1',
          target: 'a2',
          label: '123',
        },
      },
    });
  }, [editor]);

  return (
    <div className={styles.container}>
      <FlowEditor nodeTypes={nodeTypes}></FlowEditor>
    </div>
  );
};

const FlowDemo = () => {
  return (
    <FlowEditorProvider>
      <ProFlowDemo />
    </FlowEditorProvider>
  );
};

export default FlowDemo;
`}}]);
