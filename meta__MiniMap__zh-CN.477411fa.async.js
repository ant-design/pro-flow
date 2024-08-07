"use strict";(self.webpackChunk_ant_design_pro_flow=self.webpackChunk_ant_design_pro_flow||[]).push([[5347],{40636:function(I,o,e){e.r(o),e.d(o,{demos:function(){return p}});var n=e(90228),d=e.n(n),i=e(87999),c=e.n(i),v=e(75271),p={"minimap-demo-flowcontrollerdemo":{component:v.memo(v.lazy(function(){return e.e(4004).then(e.bind(e,77390))})),asset:{type:"BLOCK",id:"minimap-demo-flowcontrollerdemo",refAtomIds:["MiniMap"],dependencies:{"index.tsx":{type:"FILE",value:e(16271).Z},"@ant-design/pro-flow":{type:"NPM",value:"1.3.9"},"antd-style":{type:"NPM",value:"3.6.2"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@ant-design/pro-flow":e(91516),"antd-style":e(15908),react:e(75271)},renderOpts:{compile:function(){var h=c()(d()().mark(function t(){var a,l=arguments;return d()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4268).then(e.bind(e,84268));case 2:return r.abrupt("return",(a=r.sent).default.apply(a,l));case 3:case"end":return r.stop()}},t)}));function s(){return h.apply(this,arguments)}return s}()}}}},52804:function(I,o,e){e.d(o,{F:function(){return c}});var n=e(13289),d=e(53318),i=e(75271),c=function(){var p=d.ZP.useBreakpoint();return(0,i.useMemo)(function(){return(0,n.f)(p)},[p])}},15908:function(I,o,e){e.r(o),e.d(o,{StyleProvider:function(){return n.V9},ThemeProvider:function(){return n.f6},createGlobalStyle:function(){return n.vJ},createInstance:function(){return n.Fs},createStyles:function(){return n.kc},createStylish:function(){return n.Yz},css:function(){return n.iv},cx:function(){return n.cx},extractStaticStyle:function(){return n.Y2},injectGlobal:function(){return n.hi},keyframes:function(){return n.F4},setupStyled:function(){return n.Us},styleManager:function(){return n.Rr},useAntdStylish:function(){return d.n},useAntdTheme:function(){return i.A},useAntdToken:function(){return c.S},useResponsive:function(){return v.F},useTheme:function(){return n.Fg},useThemeMode:function(){return p.r}});var n=e(13830),d=e(41989),i=e(18373),c=e(54915),v=e(52804),p=e(8076)},81979:function(I,o,e){e.d(o,{Z:function(){return d}});var n=e(75271);function d(){const[,i]=n.useReducer(c=>c+1,0);return i}},21475:function(I,o,e){e.d(o,{ZP:function(){return p},c4:function(){return i},m9:function(){return h}});var n=e(75271),d=e(86807);const i=["xxl","xl","lg","md","sm","xs"],c=s=>({xs:`(max-width: ${s.screenXSMax}px)`,sm:`(min-width: ${s.screenSM}px)`,md:`(min-width: ${s.screenMD}px)`,lg:`(min-width: ${s.screenLG}px)`,xl:`(min-width: ${s.screenXL}px)`,xxl:`(min-width: ${s.screenXXL}px)`}),v=s=>{const t=s,a=[].concat(i).reverse();return a.forEach((l,_)=>{const r=l.toUpperCase(),m=`screen${r}Min`,u=`screen${r}`;if(!(t[m]<=t[u]))throw new Error(`${m}<=${u} fails : !(${t[m]}<=${t[u]})`);if(_<a.length-1){const f=`screen${r}Max`;if(!(t[u]<=t[f]))throw new Error(`${u}<=${f} fails : !(${t[u]}<=${t[f]})`);const x=`screen${a[_+1].toUpperCase()}Min`;if(!(t[f]<=t[x]))throw new Error(`${f}<=${x} fails : !(${t[f]}<=${t[x]})`)}}),s};function p(){const[,s]=(0,d.ZP)(),t=c(v(s));return n.useMemo(()=>{const a=new Map;let l=-1,_={};return{matchHandlers:{},dispatch(r){return _=r,a.forEach(m=>m(_)),a.size>=1},subscribe(r){return a.size||this.register(),l+=1,a.set(l,r),r(_),l},unsubscribe(r){a.delete(r),a.size||this.unregister()},unregister(){Object.keys(t).forEach(r=>{const m=t[r],u=this.matchHandlers[m];u==null||u.mql.removeListener(u==null?void 0:u.listener)}),a.clear()},register(){Object.keys(t).forEach(r=>{const m=t[r],u=M=>{let{matches:x}=M;this.dispatch(Object.assign(Object.assign({},_),{[r]:x}))},f=window.matchMedia(m);f.addListener(u),this.matchHandlers[m]={mql:f,listener:u},u(f)})},responsiveMap:t}},[s])}const h=(s,t)=>{if(t&&typeof t=="object")for(let a=0;a<i.length;a++){const l=i[a];if(s[l]&&t[l]!==void 0)return t[l]}}},61406:function(I,o,e){var n=e(75271),d=e(40570),i=e(81979),c=e(21475);function v(){let p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;const h=(0,n.useRef)({}),s=(0,i.Z)(),t=(0,c.ZP)();return(0,d.Z)(()=>{const a=t.subscribe(l=>{h.current=l,p&&s()});return()=>t.unsubscribe(a)},[]),h.current}o.Z=v},53318:function(I,o,e){var n=e(61406);function d(){return(0,n.Z)()}o.ZP={useBreakpoint:d}},70660:function(I,o,e){e.r(o),e.d(o,{texts:function(){return n}});const n=[{value:"\u5C5E\u6027\u540D",paraId:0,tocIndex:1},{value:"\u7C7B\u578B",paraId:0,tocIndex:1},{value:"\u63CF\u8FF0",paraId:0,tocIndex:1},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:1},{value:"\u5FC5\u9009",paraId:0,tocIndex:1},{value:"className",paraId:0,tocIndex:1},{value:"string",paraId:0,tocIndex:1},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"visible",paraId:0,tocIndex:1},{value:"boolean",paraId:0,tocIndex:1},{value:"\u662F\u5426\u5C55\u793A",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"position",paraId:0,tocIndex:1},{value:"MiniMapPosition",paraId:0,tocIndex:1},{value:"\u63A7\u5236\u5668\u5728\u753B\u5E03\u4E2D\u7684\u5750\u6807",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"\u5C5E\u6027\u540D",paraId:1,tocIndex:2},{value:"\u7C7B\u578B",paraId:1,tocIndex:2},{value:"\u63CF\u8FF0",paraId:1,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:2},{value:"\u5FC5\u9009",paraId:1,tocIndex:2},{value:"x",paraId:1,tocIndex:2},{value:"number",paraId:1,tocIndex:2},{value:"x \u5750\u6807\uFF0C\u6B63\u6570\u5411\u5DE6\u504F\u79FB\uFF0C\u8D1F\u6570\u53CD\u4E4B",paraId:1,tocIndex:2},{value:"0",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"y",paraId:1,tocIndex:2},{value:"number",paraId:1,tocIndex:2},{value:"y \u5750\u6807\uFF0C\u6B63\u6570\u5411\u4E0A\u504F\u79FB\uFF0C\u8D1F\u6570\u53CD\u4E4B",paraId:1,tocIndex:2},{value:"0",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2}]},16271:function(I,o){o.Z=`import { FlowView, MiniMap } from '@ant-design/pro-flow';
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
