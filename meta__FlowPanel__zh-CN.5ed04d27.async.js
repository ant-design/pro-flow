"use strict";(self.webpackChunk_ant_design_pro_flow=self.webpackChunk_ant_design_pro_flow||[]).push([[9274],{36605:function(v,o,e){var n;e.r(o),e.d(o,{demos:function(){return t}});var c=e(90228),i=e.n(c),f=e(87999),h=e.n(f),p=e(75271),E=e(6365),s=e(34439),t={"flowpanel-demo-demos":{component:p.memo(p.lazy(function(){return e.e(9382).then(e.bind(e,56836))})),asset:{type:"BLOCK",id:"flowpanel-demo-demos",refAtomIds:["FlowPanel"],dependencies:{"index.tsx":{type:"FILE",value:e(54898).Z},"@ant-design/pro-flow":{type:"NPM",value:"1.3.9"},"antd-style":{type:"NPM",value:"3.7.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@ant-design/pro-flow":E,"antd-style":s,react:n||(n=e.t(p,2))},renderOpts:{compile:function(){var r=h()(i()().mark(function _(){var a,m=arguments;return i()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(1021).then(e.bind(e,61021));case 2:return u.abrupt("return",(a=u.sent).default.apply(a,m));case 3:case"end":return u.stop()}},_)}));function d(){return r.apply(this,arguments)}return d}()}}}},2151:function(v,o,e){e.d(o,{F:function(){return f}});var n=e(70508),c=e(75153),i=e(75271),f=function(){var p=c.ZP.useBreakpoint();return(0,i.useMemo)(function(){return(0,n.f)(p)},[p])}},34439:function(v,o,e){e.r(o),e.d(o,{StyleProvider:function(){return n.V9},ThemeProvider:function(){return n.f6},createGlobalStyle:function(){return n.vJ},createInstance:function(){return n.Fs},createStyles:function(){return n.kc},createStylish:function(){return n.Yz},css:function(){return n.iv},cx:function(){return n.cx},extractStaticStyle:function(){return n.Y2},injectGlobal:function(){return n.hi},keyframes:function(){return n.F4},setupStyled:function(){return n.Us},styleManager:function(){return n.Rr},useAntdStylish:function(){return c.n},useAntdTheme:function(){return i.A},useAntdToken:function(){return f.S},useResponsive:function(){return h.F},useTheme:function(){return n.Fg},useThemeMode:function(){return p.r}});var n=e(51307),c=e(94501),i=e(22280),f=e(23193),h=e(2151),p=e(10368)},66521:function(v,o,e){e.d(o,{Z:function(){return c}});var n=e(75271);function c(){const[,i]=n.useReducer(f=>f+1,0);return i}},54013:function(v,o,e){e.d(o,{ZP:function(){return p},c4:function(){return i},m9:function(){return E}});var n=e(75271),c=e(26873);const i=["xxl","xl","lg","md","sm","xs"],f=s=>({xs:`(max-width: ${s.screenXSMax}px)`,sm:`(min-width: ${s.screenSM}px)`,md:`(min-width: ${s.screenMD}px)`,lg:`(min-width: ${s.screenLG}px)`,xl:`(min-width: ${s.screenXL}px)`,xxl:`(min-width: ${s.screenXXL}px)`}),h=s=>{const t=s,r=[].concat(i).reverse();return r.forEach((d,_)=>{const a=d.toUpperCase(),m=`screen${a}Min`,l=`screen${a}`;if(!(t[m]<=t[l]))throw new Error(`${m}<=${l} fails : !(${t[m]}<=${t[l]})`);if(_<r.length-1){const u=`screen${a}Max`;if(!(t[l]<=t[u]))throw new Error(`${l}<=${u} fails : !(${t[l]}<=${t[u]})`);const P=`screen${r[_+1].toUpperCase()}Min`;if(!(t[u]<=t[P]))throw new Error(`${u}<=${P} fails : !(${t[u]}<=${t[P]})`)}}),s};function p(){const[,s]=(0,c.ZP)(),t=f(h(s));return n.useMemo(()=>{const r=new Map;let d=-1,_={};return{matchHandlers:{},dispatch(a){return _=a,r.forEach(m=>m(_)),r.size>=1},subscribe(a){return r.size||this.register(),d+=1,r.set(d,a),a(_),d},unsubscribe(a){r.delete(a),r.size||this.unregister()},unregister(){Object.keys(t).forEach(a=>{const m=t[a],l=this.matchHandlers[m];l==null||l.mql.removeListener(l==null?void 0:l.listener)}),r.clear()},register(){Object.keys(t).forEach(a=>{const m=t[a],l=I=>{let{matches:P}=I;this.dispatch(Object.assign(Object.assign({},_),{[a]:P}))},u=window.matchMedia(m);u.addListener(l),this.matchHandlers[m]={mql:u,listener:l},l(u)})},responsiveMap:t}},[s])}const E=(s,t)=>{if(t&&typeof t=="object")for(let r=0;r<i.length;r++){const d=i[r];if(s[d]&&t[d]!==void 0)return t[d]}}},95042:function(v,o,e){var n=e(75271),c=e(78237),i=e(66521),f=e(54013);function h(){let p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;const E=(0,n.useRef)({}),s=(0,i.Z)(),t=(0,f.ZP)();return(0,c.Z)(()=>{const r=t.subscribe(d=>{E.current=d,p&&s()});return()=>t.unsubscribe(r)},[]),E.current}o.Z=h},75153:function(v,o,e){var n=e(95042);function c(){return(0,n.Z)()}o.ZP={useBreakpoint:c}},5351:function(v,o,e){e.r(o),e.d(o,{texts:function(){return n}});const n=[{value:"\u5C5E\u6027\u540D",paraId:0,tocIndex:1},{value:"\u7C7B\u578B",paraId:0,tocIndex:1},{value:"\u63CF\u8FF0",paraId:0,tocIndex:1},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:1},{value:"\u5FC5\u9009",paraId:0,tocIndex:1},{value:"className",paraId:0,tocIndex:1},{value:"string",paraId:0,tocIndex:1},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"visible",paraId:0,tocIndex:1},{value:"boolean",paraId:0,tocIndex:1},{value:"\u662F\u5426\u5C55\u793A",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"position",paraId:0,tocIndex:1},{value:"PanelPosition",paraId:0,tocIndex:1},{value:"\u9762\u677F\u5728\u753B\u5E03\u4E2D\u7684\u4F4D\u7F6E",paraId:0,tocIndex:1},{value:"'top-center'",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:`type PanelPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';
`,paraId:1,tocIndex:2}]},54898:function(v,o){o.Z=`import { FlowPanel, FlowView } from '@ant-design/pro-flow';
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
