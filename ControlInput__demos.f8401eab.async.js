(self.webpackChunk_ant_design_pro_flow_editor=self.webpackChunk_ant_design_pro_flow_editor||[]).push([[829],{36458:function(i,C,e){"use strict";e.r(C);var f=e(22068),l=e(11527);C.default=function(){return(0,l.jsx)(f.F,{placeholder:"\u8BF7\u8F93\u5165"})}},22068:function(i,C,e){"use strict";e.d(C,{F:function(){return Q}});var f=e(57213),l=e.n(f),t=e(54306),u=e.n(t),v=e(12342),x=e.n(v),j=e(34124),M=e(91336),g=e(50959),E=e(11527),V=["value","onChange","onValueChanging","onChangeEnd"],Q=(0,g.memo)(function(y){var O=y.value,Z=y.onChange,F=y.onValueChanging,I=y.onChangeEnd,ee=x()(y,V),p=O||"",b=(0,g.useState)(p),m=u()(b,2),_=m[0],D=m[1],K=(0,g.useRef)(null),P=(0,g.useRef)(!1),S=(0,g.useRef)(!1),B=(0,g.useCallback)(function(){Z==null||Z(_)},[_]);return(0,g.useEffect)(function(){typeof O!="undefined"&&D(O)},[O]),(0,E.jsx)(M.I,l()(l()({ref:K},ee),{},{value:_,onCompositionStart:function(){P.current=!0},onCompositionEnd:function(){P.current=!1},onFocus:function(){S.current=!0},onBlur:function(){S.current=!1,I==null||I(_)},onChange:function(L){D(L.target.value),F==null||F(L.target.value)},onPressEnter:function(L){!L.shiftKey&&!P.current&&(L.preventDefault(),B(),S.current=!1,I==null||I(_))},suffix:O===_?(0,E.jsx)("span",{}):(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(j.ZP,{type:"link",size:"small",onClick:function(){D(O)},style:{padding:0},children:"\u91CD\u7F6E"}),(0,E.jsx)(j.ZP,{type:"link",size:"small",style:{padding:0},onClick:function(){B()},children:"\u4FDD\u5B58 \u21B5"})]})}))})},91336:function(i,C,e){"use strict";e.d(C,{I:function(){return I},K:function(){return ee}});var f=e(57213),l=e.n(f),t=e(12342),u=e.n(t),v=e(95842),x=e(50959),j=e(92935),M=e.n(j),g=e(22745),E,V,Q,y=(0,g.kc)(function(p){var b=p.css,m=p.token;return{input:b(E||(E=M()([`
    position: relative;

    max-width: 100%;
    height: 36px;
    padding: 0 12px;

    transition: background-color 100ms `,`;

    input {
      background: transparent;
    }
  `])),m.motionEaseOut),block:b(V||(V=M()([`
    background-color: `,`;
    border: 1px solid transparent;

    &:hover {
      background-color: `,`;
    }
  `])),m.colorFillTertiary,m.colorFillQuaternary),textarea:b(Q||(Q=M()([`
    position: relative;

    max-width: 100%;
    padding: 8px 12px;

    transition: background-color 100ms `,`;

    textarea {
      background: transparent;
    }
  `])),m.motionEaseOut)}}),O=e(11527),Z=["className","type"],F=["className","type"],I=(0,x.forwardRef)(function(p,b){var m=p.className,_=p.type,D=_===void 0?"ghost":_,K=u()(p,Z),P=y(),S=P.styles,B=P.cx;return(0,O.jsx)(v.Z,l()({className:B(S.input,D==="block"&&S.block,m),ref:b},K))}),ee=(0,x.memo)((0,x.forwardRef)(function(p,b){var m=p.className,_=p.type,D=_===void 0?"ghost":_,K=u()(p,F),P=y(),S=P.styles,B=P.cx;return(0,O.jsx)(v.Z.TextArea,l()({className:B(S.textarea,D==="block"&&S.block,m),ref:b},K))}))},95842:function(i,C,e){"use strict";e.d(C,{Z:function(){return Ee}});var f=e(84875),l=e.n(f),t=e(50959),u=e(36062),v=e(1927),x=e(59168),M=n=>{const{getPrefixCls:c,direction:s}=(0,t.useContext)(u.E_),{prefixCls:o,className:r}=n,h=c("input-group",o),G=c("input"),[z,H]=(0,x.ZP)(G),J=l()(h,{[`${h}-lg`]:n.size==="large",[`${h}-sm`]:n.size==="small",[`${h}-compact`]:n.compact,[`${h}-rtl`]:s==="rtl"},H,r),U=(0,t.useContext)(v.aM),N=(0,t.useMemo)(()=>Object.assign(Object.assign({},U),{isFormItemInput:!1}),[U]);return z(t.createElement("span",{className:J,style:n.style,onMouseEnter:n.onMouseEnter,onMouseLeave:n.onMouseLeave,onFocus:n.onFocus,onBlur:n.onBlur},t.createElement(v.aM.Provider,{value:N},n.children)))},g=e(58291),E=e(87366),V={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"}},{tag:"path",attrs:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"}}]},name:"eye-invisible",theme:"outlined"},Q=V,y=e(86793),O=function(c,s){return t.createElement(y.Z,(0,E.Z)({},c,{ref:s,icon:Q}))},Z=t.forwardRef(O),F={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"}}]},name:"eye",theme:"outlined"},I=F,ee=function(c,s){return t.createElement(y.Z,(0,E.Z)({},c,{ref:s,icon:I}))},p=t.forwardRef(ee),b=e(47740),m=e(91211),_=e(210),D=function(n,c){var s={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&c.indexOf(o)<0&&(s[o]=n[o]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(n);r<o.length;r++)c.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(n,o[r])&&(s[o[r]]=n[o[r]]);return s};const K=n=>n?t.createElement(p,null):t.createElement(Z,null),P={click:"onClick",hover:"onMouseOver"};var B=t.forwardRef((n,c)=>{const{visibilityToggle:s=!0}=n,o=typeof s=="object"&&s.visible!==void 0,[r,h]=(0,t.useState)(()=>o?s.visible:!1),G=(0,t.useRef)(null);t.useEffect(()=>{o&&h(s.visible)},[o,s]);const z=(0,_.Z)(G),H=()=>{const{disabled:se}=n;se||(r&&z(),h(T=>{var A;const Y=!T;return typeof s=="object"&&((A=s.onVisibleChange)===null||A===void 0||A.call(s,Y)),Y}))},J=se=>{const{action:T="click",iconRender:A=K}=n,Y=P[T]||"",q=A(r),re={[Y]:H,className:`${se}-icon`,key:"passwordIcon",onMouseDown:ae=>{ae.preventDefault()},onMouseUp:ae=>{ae.preventDefault()}};return t.cloneElement(t.isValidElement(q)?q:t.createElement("span",null,q),re)},{className:U,prefixCls:N,inputPrefixCls:le,size:w}=n,ne=D(n,["className","prefixCls","inputPrefixCls","size"]),{getPrefixCls:ue}=t.useContext(u.E_),ce=ue("input",le),X=ue("input-password",N),oe=s&&J(X),W=l()(X,U,{[`${X}-${w}`]:!!w}),de=Object.assign(Object.assign({},(0,b.Z)(ne,["suffix","iconRender","visibilityToggle"])),{type:r?"text":"password",className:W,prefixCls:ce,suffix:oe});return w&&(de.size=w),t.createElement(g.Z,Object.assign({ref:(0,m.sQ)(c,G)},de))}),R=e(90369),L=e(17373),pe=e(34124),me=e(40343),_e=e(72705),Ce=function(n,c){var s={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&c.indexOf(o)<0&&(s[o]=n[o]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(n);r<o.length;r++)c.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(n,o[r])&&(s[o[r]]=n[o[r]]);return s},xe=t.forwardRef((n,c)=>{const{prefixCls:s,inputPrefixCls:o,className:r,size:h,suffix:G,enterButton:z=!1,addonAfter:H,loading:J,disabled:U,onSearch:N,onChange:le,onCompositionStart:w,onCompositionEnd:ne}=n,ue=Ce(n,["prefixCls","inputPrefixCls","className","size","suffix","enterButton","addonAfter","loading","disabled","onSearch","onChange","onCompositionStart","onCompositionEnd"]),{getPrefixCls:ce,direction:X}=t.useContext(u.E_),oe=t.useRef(!1),W=ce("input-search",s),de=ce("input",o),{compactSize:se}=(0,_e.ri)(W,X),T=(0,me.Z)(a=>{var d;return(d=h!=null?h:se)!==null&&d!==void 0?d:a}),A=t.useRef(null),Y=a=>{a&&a.target&&a.type==="click"&&N&&N(a.target.value,a),le&&le(a)},q=a=>{var d;document.activeElement===((d=A.current)===null||d===void 0?void 0:d.input)&&a.preventDefault()},re=a=>{var d,k;N&&N((k=(d=A.current)===null||d===void 0?void 0:d.input)===null||k===void 0?void 0:k.value,a)},ae=a=>{oe.current||J||re(a)},he=typeof z=="boolean"?t.createElement(R.Z,null):null,fe=`${W}-button`;let ie;const $=z||{},ve=$.type&&$.type.__ANT_BUTTON===!0;ve||$.type==="button"?ie=(0,L.Tm)($,Object.assign({onMouseDown:q,onClick:a=>{var d,k;(k=(d=$==null?void 0:$.props)===null||d===void 0?void 0:d.onClick)===null||k===void 0||k.call(d,a),re(a)},key:"enterButton"},ve?{className:fe,size:T}:{})):ie=t.createElement(pe.ZP,{className:fe,type:z?"primary":void 0,size:T,disabled:U,key:"enterButton",onMouseDown:q,onClick:re,loading:J,icon:he},z),H&&(ie=[ie,(0,L.Tm)(H,{key:"addonAfter"})]);const ye=l()(W,{[`${W}-rtl`]:X==="rtl",[`${W}-${T}`]:!!T,[`${W}-with-button`]:!!z},r),Oe=a=>{oe.current=!0,w==null||w(a)},be=a=>{oe.current=!1,ne==null||ne(a)};return t.createElement(g.Z,Object.assign({ref:(0,m.sQ)(A,c),onPressEnter:ae},ue,{size:T,onCompositionStart:Oe,onCompositionEnd:be,prefixCls:de,addonAfter:ie,suffix:G,onChange:Y,className:ye,disabled:U}))}),ge=e(80489);const te=g.Z;te.Group=M,te.Search=xe,te.TextArea=ge.Z,te.Password=B;var Ee=te},12342:function(i,C,e){var f=e(20006);function l(t,u){if(t==null)return{};var v=f(t,u),x,j;if(Object.getOwnPropertySymbols){var M=Object.getOwnPropertySymbols(t);for(j=0;j<M.length;j++)x=M[j],!(u.indexOf(x)>=0)&&Object.prototype.propertyIsEnumerable.call(t,x)&&(v[x]=t[x])}return v}i.exports=l,i.exports.__esModule=!0,i.exports.default=i.exports},20006:function(i){function C(e,f){if(e==null)return{};var l={},t=Object.keys(e),u,v;for(v=0;v<t.length;v++)u=t[v],!(f.indexOf(u)>=0)&&(l[u]=e[u]);return l}i.exports=C,i.exports.__esModule=!0,i.exports.default=i.exports},92935:function(i){function C(e,f){return f||(f=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(f)}}))}i.exports=C,i.exports.__esModule=!0,i.exports.default=i.exports}}]);
