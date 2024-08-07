"use strict";(self.webpackChunk_ant_design_pro_flow=self.webpackChunk_ant_design_pro_flow||[]).push([[9274],{15087:function(_,r,e){e.r(r),e.d(r,{demos:function(){return p}});var n=e(90228),l=e.n(n),i=e(87999),d=e.n(i),v=e(75271),p={"flowpanel-demo-demos":{component:v.memo(v.lazy(function(){return e.e(9382).then(e.bind(e,99119))})),asset:{type:"BLOCK",id:"flowpanel-demo-demos",refAtomIds:["FlowPanel"],dependencies:{"index.tsx":{type:"FILE",value:e(7120).Z},"@ant-design/pro-flow":{type:"NPM",value:"1.3.9"},"antd-style":{type:"NPM",value:"3.6.2"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@ant-design/pro-flow":e(91516),"antd-style":e(15908),react:e(75271)},renderOpts:{compile:function(){var I=d()(l()().mark(function t(){var s,c=arguments;return l()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(4268).then(e.bind(e,84268));case 2:return o.abrupt("return",(s=o.sent).default.apply(s,c));case 3:case"end":return o.stop()}},t)}));function a(){return I.apply(this,arguments)}return a}()}}}},52804:function(_,r,e){e.d(r,{F:function(){return d}});var n=e(13289),l=e(53318),i=e(75271),d=function(){var p=l.ZP.useBreakpoint();return(0,i.useMemo)(function(){return(0,n.f)(p)},[p])}},15908:function(_,r,e){e.r(r),e.d(r,{StyleProvider:function(){return n.V9},ThemeProvider:function(){return n.f6},createGlobalStyle:function(){return n.vJ},createInstance:function(){return n.Fs},createStyles:function(){return n.kc},createStylish:function(){return n.Yz},css:function(){return n.iv},cx:function(){return n.cx},extractStaticStyle:function(){return n.Y2},injectGlobal:function(){return n.hi},keyframes:function(){return n.F4},setupStyled:function(){return n.Us},styleManager:function(){return n.Rr},useAntdStylish:function(){return l.n},useAntdTheme:function(){return i.A},useAntdToken:function(){return d.S},useResponsive:function(){return v.F},useTheme:function(){return n.Fg},useThemeMode:function(){return p.r}});var n=e(13830),l=e(41989),i=e(18373),d=e(54915),v=e(52804),p=e(8076)},81979:function(_,r,e){e.d(r,{Z:function(){return l}});var n=e(75271);function l(){const[,i]=n.useReducer(d=>d+1,0);return i}},21475:function(_,r,e){e.d(r,{ZP:function(){return p},c4:function(){return i},m9:function(){return I}});var n=e(75271),l=e(86807);const i=["xxl","xl","lg","md","sm","xs"],d=a=>({xs:`(max-width: ${a.screenXSMax}px)`,sm:`(min-width: ${a.screenSM}px)`,md:`(min-width: ${a.screenMD}px)`,lg:`(min-width: ${a.screenLG}px)`,xl:`(min-width: ${a.screenXL}px)`,xxl:`(min-width: ${a.screenXXL}px)`}),v=a=>{const t=a,s=[].concat(i).reverse();return s.forEach((c,h)=>{const o=c.toUpperCase(),m=`screen${o}Min`,u=`screen${o}`;if(!(t[m]<=t[u]))throw new Error(`${m}<=${u} fails : !(${t[m]}<=${t[u]})`);if(h<s.length-1){const f=`screen${o}Max`;if(!(t[u]<=t[f]))throw new Error(`${u}<=${f} fails : !(${t[u]}<=${t[f]})`);const P=`screen${s[h+1].toUpperCase()}Min`;if(!(t[f]<=t[P]))throw new Error(`${f}<=${P} fails : !(${t[f]}<=${t[P]})`)}}),a};function p(){const[,a]=(0,l.ZP)(),t=d(v(a));return n.useMemo(()=>{const s=new Map;let c=-1,h={};return{matchHandlers:{},dispatch(o){return h=o,s.forEach(m=>m(h)),s.size>=1},subscribe(o){return s.size||this.register(),c+=1,s.set(c,o),o(h),c},unsubscribe(o){s.delete(o),s.size||this.unregister()},unregister(){Object.keys(t).forEach(o=>{const m=t[o],u=this.matchHandlers[m];u==null||u.mql.removeListener(u==null?void 0:u.listener)}),s.clear()},register(){Object.keys(t).forEach(o=>{const m=t[o],u=M=>{let{matches:P}=M;this.dispatch(Object.assign(Object.assign({},h),{[o]:P}))},f=window.matchMedia(m);f.addListener(u),this.matchHandlers[m]={mql:f,listener:u},u(f)})},responsiveMap:t}},[a])}const I=(a,t)=>{if(t&&typeof t=="object")for(let s=0;s<i.length;s++){const c=i[s];if(a[c]&&t[c]!==void 0)return t[c]}}},61406:function(_,r,e){var n=e(75271),l=e(40570),i=e(81979),d=e(21475);function v(){let p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;const I=(0,n.useRef)({}),a=(0,i.Z)(),t=(0,d.ZP)();return(0,l.Z)(()=>{const s=t.subscribe(c=>{I.current=c,p&&a()});return()=>t.unsubscribe(s)},[]),I.current}r.Z=v},53318:function(_,r,e){var n=e(61406);function l(){return(0,n.Z)()}r.ZP={useBreakpoint:l}},1785:function(_,r,e){e.r(r),e.d(r,{texts:function(){return n}});const n=[{value:"\u5C5E\u6027\u540D",paraId:0,tocIndex:1},{value:"\u7C7B\u578B",paraId:0,tocIndex:1},{value:"\u63CF\u8FF0",paraId:0,tocIndex:1},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:1},{value:"\u5FC5\u9009",paraId:0,tocIndex:1},{value:"className",paraId:0,tocIndex:1},{value:"string",paraId:0,tocIndex:1},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"visible",paraId:0,tocIndex:1},{value:"boolean",paraId:0,tocIndex:1},{value:"\u662F\u5426\u5C55\u793A",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"position",paraId:0,tocIndex:1},{value:"PanelPosition",paraId:0,tocIndex:1},{value:"\u9762\u677F\u5728\u753B\u5E03\u4E2D\u7684\u4F4D\u7F6E",paraId:0,tocIndex:1},{value:"'top-center'",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:`type PanelPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';
`,paraId:1,tocIndex:2}]},7120:function(_,r){r.Z=`import { FlowPanel, FlowView } from '@ant-design/pro-flow';
import { createStyles } from 'antd-style';
import { memo } from 'react';

const useStyles = createStyles(({ css }) => ({
  container: css\`
    width: 100%;
    height: 600px;
  \`,
}));

const FlowControllerDemo = memo(() => {
  const { styles } = useStyles();
  return (
    <div className={styles.container}>
      <FlowView nodes={[]} edges={[]} miniMap={false}>
        <FlowPanel position="top-left">top-left</FlowPanel>
        <FlowPanel position="top-center">top-center</FlowPanel>
        <FlowPanel position="top-right">top-right</FlowPanel>
        <FlowPanel position="bottom-left">bottom-left</FlowPanel>
        <FlowPanel position="bottom-center">bottom-center</FlowPanel>
        <FlowPanel position="bottom-right">bottom-right</FlowPanel>
      </FlowView>
    </div>
  );
});

export default FlowControllerDemo;
`}}]);
