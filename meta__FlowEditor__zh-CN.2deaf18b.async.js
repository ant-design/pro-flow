"use strict";(self.webpackChunk_ant_design_pro_flow=self.webpackChunk_ant_design_pro_flow||[]).push([[7716],{18635:function(i,t,e){e.r(t),e.d(t,{demos:function(){return p}});var n=e(90228),s=e.n(n),l=e(87999),I=e.n(l),f=e(75271),p={"src-flow-editor-demo-demos":{component:f.memo(f.lazy(function(){return Promise.all([e.e(3954),e.e(3811),e.e(673),e.e(2433)]).then(e.bind(e,49238))})),asset:{type:"BLOCK",id:"src-flow-editor-demo-demos",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(11209).Z},"@ant-design/pro-flow":{type:"NPM",value:"1.3.9"},react:{type:"NPM",value:"18.3.1"},"./index.ts":{type:"FILE",value:e(95707).Z},"antd-style":{type:"NPM",value:"3.6.2"}},entry:"index.tsx"},context:{"@ant-design/pro-flow":e(66880),react:e(75271),"./index.ts":e(43036),"antd-style":e(26164)},renderOpts:{compile:function(){var h=I()(s()().mark(function a(){var r,c=arguments;return s()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(9425).then(e.bind(e,59425));case 2:return o.abrupt("return",(r=o.sent).default.apply(r,c));case 3:case"end":return o.stop()}},a)}));function d(){return h.apply(this,arguments)}return d}()}}}},43036:function(i,t,e){e.r(t);var n=e(85833),s=(0,n.kc)(function(){return{container:{width:"100%",height:"600px",".ant-progress-text":{textAlign:"center"}},stringNode:{width:"150px",height:"30px",textAlign:"center",backgroundColor:"white",border:"1px solid aqua",borderRadius:"4px",lineHeight:"30px"}}});t.default=s},99578:function(i,t,e){e.d(t,{F:function(){return I}});var n=e(86470),s=e(10394),l=e(75271),I=function(){var p=s.ZP.useBreakpoint();return(0,l.useMemo)(function(){return(0,n.f)(p)},[p])}},26164:function(i,t,e){e.r(t),e.d(t,{StyleProvider:function(){return n.V9},ThemeProvider:function(){return n.f6},createGlobalStyle:function(){return n.vJ},createInstance:function(){return n.Fs},createStyles:function(){return n.kc},createStylish:function(){return n.Yz},css:function(){return n.iv},cx:function(){return n.cx},extractStaticStyle:function(){return n.Y2},injectGlobal:function(){return n.hi},keyframes:function(){return n.F4},setupStyled:function(){return n.Us},styleManager:function(){return n.Rr},useAntdStylish:function(){return s.n},useAntdTheme:function(){return l.A},useAntdToken:function(){return I.S},useResponsive:function(){return f.F},useTheme:function(){return n.Fg},useThemeMode:function(){return p.r}});var n=e(85833),s=e(6493),l=e(66225),I=e(51395),f=e(99578),p=e(74259)},98114:function(i,t,e){e.d(t,{Z:function(){return s}});var n=e(75271);function s(){const[,l]=n.useReducer(I=>I+1,0);return l}},60488:function(i,t,e){e.d(t,{ZP:function(){return p},c4:function(){return l},m9:function(){return h}});var n=e(75271),s=e(79759);const l=["xxl","xl","lg","md","sm","xs"],I=d=>({xs:`(max-width: ${d.screenXSMax}px)`,sm:`(min-width: ${d.screenSM}px)`,md:`(min-width: ${d.screenMD}px)`,lg:`(min-width: ${d.screenLG}px)`,xl:`(min-width: ${d.screenXL}px)`,xxl:`(min-width: ${d.screenXXL}px)`}),f=d=>{const a=d,r=[].concat(l).reverse();return r.forEach((c,m)=>{const o=c.toUpperCase(),v=`screen${o}Min`,u=`screen${o}`;if(!(a[v]<=a[u]))throw new Error(`${v}<=${u} fails : !(${a[v]}<=${a[u]})`);if(m<r.length-1){const x=`screen${o}Max`;if(!(a[u]<=a[x]))throw new Error(`${u}<=${x} fails : !(${a[u]}<=${a[x]})`);const E=`screen${r[m+1].toUpperCase()}Min`;if(!(a[x]<=a[E]))throw new Error(`${x}<=${E} fails : !(${a[x]}<=${a[E]})`)}}),d};function p(){const[,d]=(0,s.ZP)(),a=I(f(d));return n.useMemo(()=>{const r=new Map;let c=-1,m={};return{matchHandlers:{},dispatch(o){return m=o,r.forEach(v=>v(m)),r.size>=1},subscribe(o){return r.size||this.register(),c+=1,r.set(c,o),o(m),c},unsubscribe(o){r.delete(o),r.size||this.unregister()},unregister(){Object.keys(a).forEach(o=>{const v=a[o],u=this.matchHandlers[v];u==null||u.mql.removeListener(u==null?void 0:u.listener)}),r.clear()},register(){Object.keys(a).forEach(o=>{const v=a[o],u=y=>{let{matches:E}=y;this.dispatch(Object.assign(Object.assign({},m),{[o]:E}))},x=window.matchMedia(v);x.addListener(u),this.matchHandlers[v]={mql:x,listener:u},u(x)})},responsiveMap:a}},[d])}const h=(d,a)=>{if(a&&typeof a=="object")for(let r=0;r<l.length;r++){const c=l[r];if(d[c]&&a[c]!==void 0)return a[c]}}},69390:function(i,t,e){var n=e(75271),s=e(2062),l=e(98114),I=e(60488);function f(){let p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;const h=(0,n.useRef)({}),d=(0,l.Z)(),a=(0,I.ZP)();return(0,s.Z)(()=>{const r=a.subscribe(c=>{h.current=c,p&&d()});return()=>a.unsubscribe(r)},[]),h.current}t.Z=f},10394:function(i,t,e){var n=e(69390);function s(){return(0,n.Z)()}t.ZP={useBreakpoint:s}},46970:function(i,t,e){e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"FlowEditor \u4E3A\u6570\u636E\u9A71\u52A8\u89E3\u51B3\u65B9\u6848\uFF0C\u9700\u642D\u914D ",paraId:0},{value:"useFlowEditor",paraId:1},{value:" \u4F7F\u7528\u3002",paraId:0},{value:"\u7528\u6237\u64CD\u4F5C",paraId:2,tocIndex:1},{value:"\u753B\u5E03\u4EA4\u4E92",paraId:2,tocIndex:1},{value:"\u89E6\u63A7\u677F",paraId:2,tocIndex:1},{value:"\u9F20\u6807",paraId:2,tocIndex:1},{value:"\u76EE\u6807\u884C\u4E3A",paraId:2,tocIndex:1},{value:"\u70B9\u51FB\u4EA4\u4E92",paraId:2,tocIndex:1},{value:"\u70B9\u51FB",paraId:2,tocIndex:1},{value:"\u9009\u4E2D\u5143\u7D20",paraId:2,tocIndex:1},{value:"\u70B9\u51FB\u62D6\u62FD",paraId:2,tocIndex:1},{value:"\u65E0\u64CD\u4F5C/",paraId:2,tocIndex:1},{value:"\u521B\u5EFA\u9009\u533A",paraId:2,tocIndex:1},{value:"shift+\u70B9\u51FB\u62D6\u62FD",paraId:2,tocIndex:1},{value:"\u65E0\u64CD\u4F5C/",paraId:2,tocIndex:1},{value:"\u6269\u5C55\u9009\u533A\uFF08\u5728\u9009\u4E2D\u5176\u4ED6\u5143\u7D20\u7684\u57FA\u7840\u4E0A\uFF09",paraId:2,tocIndex:1},{value:"\u7A7A\u683C+\u70B9\u51FB\u62D6\u62FD",paraId:2,tocIndex:1},{value:"\u6EDA\u52A8\u753B\u5E03\uFF08\u7A7A\u683C\u7B49\u4E8E\u5207\u6362\u4E3A\u62D6\u52A8\u5DE5\u5177\uFF09",paraId:2,tocIndex:1},{value:"\u6EDA\u52A8\u4EA4\u4E92",paraId:2,tocIndex:1},{value:"\u6EDA\u8F6E\u6EDA\u52A8",paraId:2,tocIndex:1},{value:"\u4E0A\u4E0B\u6EDA\u52A8\u753B\u5E03",paraId:2,tocIndex:1},{value:"shift+\u6EDA\u8F6E\u6EDA\u52A8",paraId:2,tocIndex:1},{value:"\u6C34\u5E73\u6EDA\u52A8\u753B\u5E03",paraId:2,tocIndex:1},{value:"ctrl+\u6EDA\u8F6E\u6EDA\u52A8",paraId:2,tocIndex:1},{value:"\u56F4\u7ED5\u6307\u9488\u7F29\u653E",paraId:2,tocIndex:1},{value:"\u5E73\u79FB\uFF08pan\uFF09",paraId:2,tocIndex:1},{value:"\u6EDA\u52A8\u753B\u5E03\uFF08\u6B64\u65F6\u9F20\u6807\u6307\u9488\u4E0D\u53D8\uFF09",paraId:2,tocIndex:1},{value:"\u7F29\u653E\uFF08zoom\uFF09",paraId:2,tocIndex:1},{value:"\u56F4\u7ED5\u6307\u9488\u7F29\u653E",paraId:2,tocIndex:1},{value:"\u952E\u76D8\u4EA4\u4E92",paraId:2,tocIndex:1},{value:"mac",paraId:2,tocIndex:1},{value:"win",paraId:2,tocIndex:1},{value:"\u2318+a",paraId:2,tocIndex:1},{value:"ctrl+a",paraId:2,tocIndex:1},{value:"\u9009\u4E2D\u5168\u90E8\u8282\u70B9",paraId:2,tocIndex:1},{value:"\u2318+z",paraId:2,tocIndex:1},{value:"ctrl+z",paraId:2,tocIndex:1},{value:"\u64A4\u9500\u4E0A\u4E00\u6B65\u64CD\u4F5C",paraId:2,tocIndex:1},{value:"\u2318+c",paraId:2,tocIndex:1},{value:"ctrl+c",paraId:2,tocIndex:1},{value:"\u590D\u5236\u9009\u4E2D\u7684\u90E8\u5206",paraId:2,tocIndex:1},{value:"\u2318+v",paraId:2,tocIndex:1},{value:"ctrl+v",paraId:2,tocIndex:1},{value:"\u7C98\u8D34\u9009\u4E2D\u7684\u90E8\u5206",paraId:2,tocIndex:1},{value:"\u2318+shift+z",paraId:2,tocIndex:1},{value:"ctrl+Y",paraId:2,tocIndex:1},{value:"\u91CD\u505A\u4E0A\u4E00\u6B65\u64CD\u4F5C",paraId:2,tocIndex:1},{value:"backspace",paraId:2,tocIndex:1},{value:"backspace",paraId:2,tocIndex:1},{value:"\u5220\u9664\u9009\u4E2D\u533A\u57DF",paraId:2,tocIndex:1},{value:"\u5C5E\u6027\u540D",paraId:3,tocIndex:3},{value:"\u7C7B\u578B",paraId:3,tocIndex:3},{value:"\u63CF\u8FF0",paraId:3,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:3},{value:"\u5FC5\u9009",paraId:3,tocIndex:3},{value:"defaultViewport",paraId:3,tocIndex:3},{value:"Viewport",paraId:3,tocIndex:3},{value:"\u753B\u5E03\u7684\u521D\u59CB\u7A97\u53E3\u4F4D\u7F6E",paraId:3,tocIndex:3},{value:"-",paraId:3,tocIndex:3},{value:"-",paraId:3,tocIndex:3},{value:"flowProps",paraId:3,tocIndex:3},{value:"ComponentProps<typeof ReactFlow>",paraId:3,tocIndex:3},{value:"reactflow props",paraId:3,tocIndex:3},{value:"-",paraId:3,tocIndex:3},{value:"-",paraId:3,tocIndex:3},{value:"onNodesInit",paraId:3,tocIndex:3},{value:"(editor: FlowEditorInstance) => void",paraId:3,tocIndex:3},{value:"\u8282\u70B9\u52A0\u8F7D\u5B8C\u6210\u56DE\u8C03",paraId:3,tocIndex:3},{value:"-",paraId:3,tocIndex:3},{value:"-",paraId:3,tocIndex:3},{value:"className",paraId:3,tocIndex:3},{value:"string",paraId:3,tocIndex:3},{value:"\u8FB9\u6570\u636E",paraId:3,tocIndex:3},{value:"-",paraId:3,tocIndex:3},{value:"-",paraId:3,tocIndex:3},{value:"style",paraId:3,tocIndex:3},{value:"CSSProperties",paraId:3,tocIndex:3},{value:"\u8282\u70B9\u6570\u636E",paraId:3,tocIndex:3},{value:"-",paraId:3,tocIndex:3},{value:"-",paraId:3,tocIndex:3},{value:"children",paraId:3,tocIndex:3},{value:"React.ReactNode",paraId:3,tocIndex:3},{value:"\u8FB9\u6570\u636E",paraId:3,tocIndex:3},{value:"-",paraId:3,tocIndex:3},{value:"-",paraId:3,tocIndex:3},{value:"nodeTypes",paraId:3,tocIndex:3},{value:"NodeTypes`",paraId:3,tocIndex:3},{value:"\u8282\u70B9\u7C7B\u578B",paraId:3,tocIndex:3},{value:"-",paraId:3,tocIndex:3},{value:"-",paraId:3,tocIndex:3},{value:"miniMap",paraId:3,tocIndex:3},{value:"boolean",paraId:3,tocIndex:3},{value:"\u8FB9\u6570\u636E",paraId:3,tocIndex:3},{value:"-",paraId:3,tocIndex:3},{value:"-",paraId:3,tocIndex:3},{value:"background",paraId:3,tocIndex:3},{value:"boolean",paraId:3,tocIndex:3},{value:"\u8282\u70B9\u6570\u636E",paraId:3,tocIndex:3},{value:"-",paraId:3,tocIndex:3},{value:"-",paraId:3,tocIndex:3},{value:"\u5C5E\u6027\u540D",paraId:4,tocIndex:4},{value:"\u7C7B\u578B",paraId:4,tocIndex:4},{value:"\u63CF\u8FF0",paraId:4,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:4},{value:"\u5FC5\u9009",paraId:4,tocIndex:4},{value:"x",paraId:4,tocIndex:4},{value:"number",paraId:4,tocIndex:4},{value:"x \u5750\u6807",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"y",paraId:4,tocIndex:4},{value:"number",paraId:4,tocIndex:4},{value:"y \u5750\u6807",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"zoom",paraId:4,tocIndex:4},{value:"number",paraId:4,tocIndex:4},{value:"\u7F29\u653E\u6BD4\u4F8B",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"\u89C1",paraId:5,tocIndex:5},{value:"ReactFlow Props",paraId:5,tocIndex:5},{value:`type NodeTypes = {
  [key: string]: ComponentType<NodeProps>;
};
`,paraId:6,tocIndex:6}]},95707:function(i,t){t.Z=`import { createStyles } from 'antd-style';

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
`},11209:function(i,t){t.Z=`import {
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
