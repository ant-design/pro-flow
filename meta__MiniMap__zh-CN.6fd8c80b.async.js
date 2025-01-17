"use strict";(self.webpackChunk_ant_design_pro_flow=self.webpackChunk_ant_design_pro_flow||[]).push([[5347],{97605:function(v,r,e){var n;e.r(r),e.d(r,{demos:function(){return t}});var l=e(90228),i=e.n(l),m=e(87999),I=e.n(m),p=e(75271),M=e(56439),a=e(68642),t={"minimap-demo-flowcontrollerdemo":{component:p.memo(p.lazy(function(){return e.e(4004).then(e.bind(e,36106))})),asset:{type:"BLOCK",id:"minimap-demo-flowcontrollerdemo",refAtomIds:["MiniMap"],dependencies:{"index.tsx":{type:"FILE",value:e(85284).Z},"@ant-design/pro-flow":{type:"NPM",value:"1.3.9"},"antd-style":{type:"NPM",value:"3.7.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@ant-design/pro-flow":M,"antd-style":a,react:n||(n=e.t(p,2))},renderOpts:{compile:function(){var o=I()(i()().mark(function f(){var s,_=arguments;return i()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(4693).then(e.bind(e,54693));case 2:return d.abrupt("return",(s=d.sent).default.apply(s,_));case 3:case"end":return d.stop()}},f)}));function c(){return o.apply(this,arguments)}return c}()}}}},69554:function(v,r,e){e.d(r,{F:function(){return m}});var n=e(1482),l=e(24324),i=e(75271),m=function(){var p=l.ZP.useBreakpoint();return(0,i.useMemo)(function(){return(0,n.f)(p)},[p])}},68642:function(v,r,e){e.r(r),e.d(r,{StyleProvider:function(){return n.V9},ThemeProvider:function(){return n.f6},createGlobalStyle:function(){return n.vJ},createInstance:function(){return n.Fs},createStyles:function(){return n.kc},createStylish:function(){return n.Yz},css:function(){return n.iv},cx:function(){return n.cx},extractStaticStyle:function(){return n.Y2},injectGlobal:function(){return n.hi},keyframes:function(){return n.F4},setupStyled:function(){return n.Us},styleManager:function(){return n.Rr},useAntdStylish:function(){return l.n},useAntdTheme:function(){return i.A},useAntdToken:function(){return m.S},useResponsive:function(){return I.F},useTheme:function(){return n.Fg},useThemeMode:function(){return p.r}});var n=e(56753),l=e(47495),i=e(59165),m=e(98984),I=e(69554),p=e(13828)},9888:function(v,r,e){e.d(r,{Z:function(){return l}});var n=e(75271);function l(){const[,i]=n.useReducer(m=>m+1,0);return i}},52214:function(v,r,e){e.d(r,{ZP:function(){return p},c4:function(){return i},m9:function(){return M}});var n=e(75271),l=e(55699);const i=["xxl","xl","lg","md","sm","xs"],m=a=>({xs:`(max-width: ${a.screenXSMax}px)`,sm:`(min-width: ${a.screenSM}px)`,md:`(min-width: ${a.screenMD}px)`,lg:`(min-width: ${a.screenLG}px)`,xl:`(min-width: ${a.screenXL}px)`,xxl:`(min-width: ${a.screenXXL}px)`}),I=a=>{const t=a,o=[].concat(i).reverse();return o.forEach((c,f)=>{const s=c.toUpperCase(),_=`screen${s}Min`,u=`screen${s}`;if(!(t[_]<=t[u]))throw new Error(`${_}<=${u} fails : !(${t[_]}<=${t[u]})`);if(f<o.length-1){const d=`screen${s}Max`;if(!(t[u]<=t[d]))throw new Error(`${u}<=${d} fails : !(${t[u]}<=${t[d]})`);const h=`screen${o[f+1].toUpperCase()}Min`;if(!(t[d]<=t[h]))throw new Error(`${d}<=${h} fails : !(${t[d]}<=${t[h]})`)}}),a};function p(){const[,a]=(0,l.ZP)(),t=m(I(a));return n.useMemo(()=>{const o=new Map;let c=-1,f={};return{matchHandlers:{},dispatch(s){return f=s,o.forEach(_=>_(f)),o.size>=1},subscribe(s){return o.size||this.register(),c+=1,o.set(c,s),s(f),c},unsubscribe(s){o.delete(s),o.size||this.unregister()},unregister(){Object.keys(t).forEach(s=>{const _=t[s],u=this.matchHandlers[_];u==null||u.mql.removeListener(u==null?void 0:u.listener)}),o.clear()},register(){Object.keys(t).forEach(s=>{const _=t[s],u=x=>{let{matches:h}=x;this.dispatch(Object.assign(Object.assign({},f),{[s]:h}))},d=window.matchMedia(_);d.addListener(u),this.matchHandlers[_]={mql:d,listener:u},u(d)})},responsiveMap:t}},[a])}const M=(a,t)=>{if(t&&typeof t=="object")for(let o=0;o<i.length;o++){const c=i[o];if(a[c]&&t[c]!==void 0)return t[c]}}},99722:function(v,r,e){var n=e(75271),l=e(78237),i=e(9888),m=e(52214);function I(){let p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;const M=(0,n.useRef)({}),a=(0,i.Z)(),t=(0,m.ZP)();return(0,l.Z)(()=>{const o=t.subscribe(c=>{M.current=c,p&&a()});return()=>t.unsubscribe(o)},[]),M.current}r.Z=I},24324:function(v,r,e){var n=e(99722);function l(){return(0,n.Z)()}r.ZP={useBreakpoint:l}},4049:function(v,r,e){e.r(r),e.d(r,{texts:function(){return n}});const n=[{value:"\u5C5E\u6027\u540D",paraId:0,tocIndex:1},{value:"\u7C7B\u578B",paraId:0,tocIndex:1},{value:"\u63CF\u8FF0",paraId:0,tocIndex:1},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:1},{value:"\u5FC5\u9009",paraId:0,tocIndex:1},{value:"className",paraId:0,tocIndex:1},{value:"string",paraId:0,tocIndex:1},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"visible",paraId:0,tocIndex:1},{value:"boolean",paraId:0,tocIndex:1},{value:"\u662F\u5426\u5C55\u793A",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"position",paraId:0,tocIndex:1},{value:"MiniMapPosition",paraId:0,tocIndex:1},{value:"\u63A7\u5236\u5668\u5728\u753B\u5E03\u4E2D\u7684\u5750\u6807",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"\u5C5E\u6027\u540D",paraId:1,tocIndex:2},{value:"\u7C7B\u578B",paraId:1,tocIndex:2},{value:"\u63CF\u8FF0",paraId:1,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:2},{value:"\u5FC5\u9009",paraId:1,tocIndex:2},{value:"x",paraId:1,tocIndex:2},{value:"number",paraId:1,tocIndex:2},{value:"x \u5750\u6807\uFF0C\u6B63\u6570\u5411\u5DE6\u504F\u79FB\uFF0C\u8D1F\u6570\u53CD\u4E4B",paraId:1,tocIndex:2},{value:"0",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"y",paraId:1,tocIndex:2},{value:"number",paraId:1,tocIndex:2},{value:"y \u5750\u6807\uFF0C\u6B63\u6570\u5411\u4E0A\u504F\u79FB\uFF0C\u8D1F\u6570\u53CD\u4E4B",paraId:1,tocIndex:2},{value:"0",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2}]},85284:function(v,r){r.Z=`import { FlowView, MiniMap } from '@ant-design/pro-flow';
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
      <FlowView
        nodes={[
          {
            id: 'a1',
            label: 'default',
            data: {
              title: 'XXX_API_b3',
              logo: 'https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*kgyiRKi04eUAAAAAAAAAAAAADvuvAQ/original',
              describe: 'XXX_XXX_XXX_API',
            },
          },
        ]}
        edges={[]}
        miniMap={false}
      >
        <MiniMap position={{ x: 0, y: 0 }} />
      </FlowView>
    </div>
  );
});

export default FlowControllerDemo;
`}}]);
