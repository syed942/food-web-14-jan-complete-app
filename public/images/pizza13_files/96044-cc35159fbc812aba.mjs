(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[96044,46984],{477412:e=>{e.exports=function(e,t){for(var i=-1,s=null==e?0:e.length;++i<s&&!1!==t(e[i],i,e););return e}},744037:(e,t,i)=>{var s=i(698363),r=i(3674);e.exports=function(e,t){return e&&s(t,r(t),e)}},163886:(e,t,i)=>{var s=i(698363),r=i(481704);e.exports=function(e,t){return e&&s(t,r(t),e)}},285990:(e,t,i)=>{var s=i(646384),r=i(477412),n=i(234865),o=i(744037),a=i(163886),l=i(364626),d=i(200278),c=i(318805),u=i(201911),p=i(458234),h=i(946904),m=i(664160),b=i(43824),_=i(529148),y=i(738517),g=i(701469),v=i(644144),f=i(356688),x=i(513218),w=i(472928),T=i(3674),E=i(481704),I="[object Arguments]",O="[object Function]",j="[object Object]",P={};P[I]=P["[object Array]"]=P["[object ArrayBuffer]"]=P["[object DataView]"]=P["[object Boolean]"]=P["[object Date]"]=P["[object Float32Array]"]=P["[object Float64Array]"]=P["[object Int8Array]"]=P["[object Int16Array]"]=P["[object Int32Array]"]=P["[object Map]"]=P["[object Number]"]=P[j]=P["[object RegExp]"]=P["[object Set]"]=P["[object String]"]=P["[object Symbol]"]=P["[object Uint8Array]"]=P["[object Uint8ClampedArray]"]=P["[object Uint16Array]"]=P["[object Uint32Array]"]=!0,P["[object Error]"]=P[O]=P["[object WeakMap]"]=!1,e.exports=function e(t,i,A,S,C,k){var R,L=1&i,D=2&i,M=4&i;if(A&&(R=C?A(t,S,C,k):A(t)),void 0!==R)return R;if(!x(t))return t;var z=g(t);if(z){if(R=b(t),!L)return d(t,R)}else{var V=m(t),H=V==O||"[object GeneratorFunction]"==V;if(v(t))return l(t,L);if(V==j||V==I||H&&!C){if(R=D||H?{}:y(t),!L)return D?u(t,a(R,t)):c(t,o(R,t))}else{if(!P[V])return C?t:{};R=_(t,V,L)}}k||(k=new s);var F=k.get(t);if(F)return F;k.set(t,R),w(t)?t.forEach((function(s){R.add(e(s,i,A,s,t,k))})):f(t)&&t.forEach((function(s,r){R.set(r,e(s,i,A,r,t,k))}));var U=z?void 0:(M?D?h:p:D?E:T)(t);return r(U||t,(function(s,r){U&&(s=t[r=s]),n(R,r,e(s,i,A,r,t,k))})),R}},225588:(e,t,i)=>{var s=i(664160),r=i(637005);e.exports=function(e){return r(e)&&"[object Map]"==s(e)}},829221:(e,t,i)=>{var s=i(664160),r=i(637005);e.exports=function(e){return r(e)&&"[object Set]"==s(e)}},257157:(e,t,i)=>{var s=i(274318);e.exports=function(e,t){var i=t?s(e.buffer):e.buffer;return new e.constructor(i,e.byteOffset,e.byteLength)}},593147:e=>{var t=/\w*$/;e.exports=function(e){var i=new e.constructor(e.source,t.exec(e));return i.lastIndex=e.lastIndex,i}},540419:(e,t,i)=>{var s=i(562705),r=s?s.prototype:void 0,n=r?r.valueOf:void 0;e.exports=function(e){return n?Object(n.call(e)):{}}},318805:(e,t,i)=>{var s=i(698363),r=i(799551);e.exports=function(e,t){return s(e,r(e),t)}},201911:(e,t,i)=>{var s=i(698363),r=i(151442);e.exports=function(e,t){return s(e,r(e),t)}},946904:(e,t,i)=>{var s=i(868866),r=i(151442),n=i(481704);e.exports=function(e){return s(e,n,r)}},151442:(e,t,i)=>{var s=i(862488),r=i(385924),n=i(799551),o=i(770479),a=Object.getOwnPropertySymbols?function(e){for(var t=[];e;)s(t,n(e)),e=r(e);return t}:o;e.exports=a},43824:e=>{var t=Object.prototype.hasOwnProperty;e.exports=function(e){var i=e.length,s=new e.constructor(i);return i&&"string"==typeof e[0]&&t.call(e,"index")&&(s.index=e.index,s.input=e.input),s}},529148:(e,t,i)=>{var s=i(274318),r=i(257157),n=i(593147),o=i(540419),a=i(477133);e.exports=function(e,t,i){var l=e.constructor;switch(t){case"[object ArrayBuffer]":return s(e);case"[object Boolean]":case"[object Date]":return new l(+e);case"[object DataView]":return r(e,i);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return a(e,i);case"[object Map]":return new l;case"[object Number]":case"[object String]":return new l(e);case"[object RegExp]":return n(e);case"[object Set]":return new l;case"[object Symbol]":return o(e)}}},150361:(e,t,i)=>{var s=i(285990);e.exports=function(e){return s(e,5)}},356688:(e,t,i)=>{var s=i(225588),r=i(307518),n=i(531167),o=n&&n.isMap,a=o?r(o):s;e.exports=a},472928:(e,t,i)=>{var s=i(829221),r=i(307518),n=i(531167),o=n&&n.isSet,a=o?r(o):s;e.exports=a},366284:(e,t,i)=>{i.d(t,{G6:()=>n,i7:()=>o,oi:()=>s,u$:()=>r,un:()=>l,vU:()=>a});const s=Object.freeze({OTHER:0,CHROME:1,SAFARI:2,IE:3,FIREFOX:4,OPERA:5,EDGE:6}),r=e=>{switch(!0){case e.includes("Chrome"):return s.CHROME;case e.includes("Safari"):return s.SAFARI;case e.includes("Firefox"):return s.FIREFOX;case e.includes("Opera"):return s.OPERA;case e.includes("IE"):return s.IE;case e.includes("Edge"):return s.EDGE;default:return s.OTHER}};function n(e){return r(e)===s.SAFARI}function o(e){return r(e)===s.CHROME}function a(e){return r(e)===s.FIREFOX}function l(e){return r(e)===s.EDGE}},834911:(e,t,i)=>{i.d(t,{Z:()=>n});var s=i(835209),r=i(341732);function n({carouselData:e,images:t,richMetadata:i,richSummary:n,shouldUnifyImageSizes:o,additionalImages:a}){const l=(0,s.Z)({richPinData:i||n});return l&&a&&a.length>0?(0,r.Z)(null,a,e&&e.index,o,l.id):l&&l.additional_images&&l.additional_images.length>0?(0,r.Z)(t,l.additional_images,e&&e.index,o,l.id):e||void 0}},341732:(e,t,i)=>{i.d(t,{Z:()=>n});const s=["236x","474x","564x","736x"];function r(e){function t(e,{imageKey:t,height:i,width:s}){return e.images&&e.images[t]&&(e={...e,images:{...e.images,[t]:{...e.images[t],height:i,width:s}}}),e}const i=s.map((function(t){const i=Math.min(...e.map((e=>e.images&&e.images[t]&&e.images[t].height||1/0))),s=Math.min(...e.map((e=>e.images&&e.images[t]&&e.images[t].width||1/0)));return{imageKey:t,height:i,width:s}}));return e.map((e=>i.reduce(t,e)))}function n(e,t,i,s,n){const o=(null==t?void 0:t.map((({canonical_images:e,image_signature:t})=>({images:e||void 0,image_signature:t||void 0}))))||[],a=e?[{images:e},...o]:o;return{carousel_slots:s?r(a):a,index:i||0,id:n}}},11363:(e,t,i)=>{i.d(t,{Bx:()=>r,N4:()=>o,is:()=>a,lt:()=>s,oM:()=>n});const s=e=>e._('You\'re almost there! Log in to access all of Pinterest', 'loginModal.limitedLogin.subheader', 'Subheader text on personalized login modal/flyout to remind users to log in'),r=e=>e._('Log in to save this Pin', 'limitedLogin.modalHeader.repin', 'Title on mobile web limited login modal to prompt users to login after they clicked save button.'),n=e=>e._('Log in to edit this Pin', 'limitedLogin.modalHeader.editPin', 'Title on mobile web limited login modal to prompt users to login after they clicked edit button.'),o=({i18n:e,toFollow:t})=>t?e._('Log in to follow', 'limitedLogin.modalHeader.follow', 'Title on mobile web limited login modal to prompt users to login to follow a user or board.'):e._('Log in to unfollow', 'limitedLogin.modalHeader.unfollow', 'Title on mobile web limited login modal to prompt users to login to unfollow a user or board.'),a=e=>e._('Log in to create a Pin or board', 'limitedLogin.modalHeader.create', 'Title on mobile web limited login modal to prompt users to login to create a Pin or board.')},946984:(e,t,i)=>{i.d(t,{Z:()=>o});var s=i(898781),r=i(11363),n=i(154391);const o=()=>{const{loginForMore:e,viewer:t,limitedLoginModalSubheader:i}=(0,n.H)(),o=(0,s.ZP)();return"AUTH"===t.type?null:t=>{null==e||e.setVisible(!0),null==i||i.setText((null==t?void 0:t.loginModalHeader)||(0,r.lt)(o))}}},121093:(e,t,i)=>{i.d(t,{Z:()=>d});var s=i(667294),r=i(702664),n=i(332611),o=i(242923);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class l extends s.Component{constructor(...e){super(...e),a(this,"state",{hasCompleted:[],hasDismissed:[]}),a(this,"view",(()=>{const{experience:e,isBackendExperience:t,targeting:i,viewExperience:s,viewExperienceObject:r}=this.props;e&&"viewed"!==e.status&&(t?(e.status="viewed",r(e)):i?s(e.placement_id,e.experience_id,i):s(e.placement_id,e.experience_id))})),a(this,"complete",(e=>{const{completeExperience:t,completeExperienceObject:i,experience:s,isBackendExperience:r,preventRemoval:n,targeting:o}=this.props,a=e||1;if(s&&!this.state.hasCompleted.includes(s.experience_id)){const{placement_id:e,experience_id:l}=s||{},d=n||2===a;(1===a||d)&&e&&l&&(r?i(s,d):o?t(e,l,d,o):t(e,l,d),this.setState((e=>({hasCompleted:[...e.hasCompleted,l]}))))}})),a(this,"dismiss",(()=>{const{dismissExperience:e,dismissExperienceObject:t,experience:i,isBackendExperience:s,preventRemoval:r,targeting:n}=this.props,{placement_id:o,experience_id:a}=i||{};i&&!this.state.hasDismissed.includes(a)&&(s?t(i):n?e(o,a,!!r,n):e(o,a,!!r),this.setState((e=>({hasDismissed:[...e.hasDismissed,a]}))))})),a(this,"shouldRenderExperience",(()=>{const{experience:e}=this.props;if(e){const{eligibleIds:t,eligibleTypes:i,predicate:s,transitionType:r}=this.props,{experience_id:n,type:o}=e;if(t&&t.includes(n))return!0;if(null==t||!t.length){if(s&&s(e))return!0;if(i&&i.includes(o))return!0;if(r&&r===o)return!0}}return!1}))}componentDidMount(){if(this.props.disableAutoView)return;const{experience:e}=this.props;e&&this.shouldRenderExperience()&&this.view()}componentDidUpdate(e){if(this.props.disableAutoView)return;const t=e.experience,i=this.props.experience;i&&this.shouldRenderExperience()&&(t&&t.experience_id===i.experience_id||this.view())}render(){const{children:e,experience:t,disableAutoView:i}=this.props;return t&&this.shouldRenderExperience()?"function"==typeof e?e({experience:t,complete:this.complete,dismiss:this.dismiss,...i?{view:this.view}:Object.freeze({})}):s.Children.only(e):null}}a(l,"defaultProps",{eligibleIds:[],eligibleTypes:[]});const d=(0,r.connect)((({experiences:e},t)=>({experience:t.experience||(t.placementId?e[t.placementId]:void 0)})),(e=>({completeExperience:(t,i,s,r)=>e((0,n.CK)(t,i,s,!1,{},r)),completeExperienceObject:(t,i)=>e((0,o.Tl)(t,i)),dismissExperience:(t,i,s,r)=>e((0,n.Qu)(t,i,s,void 0,r)),dismissExperienceObject:t=>e((0,o.CF)(t)),viewExperience:(t,i,s)=>e((0,n.UT)(t,i,!1,!1,void 0,s)),viewExperienceObject:t=>e((0,o.dy)(t))})))(l)},333312:(e,t,i)=>{i.r(t),i.d(t,{default:()=>u});var s=i(667294),r=i(121093),n=i(570470),o=i(883119),a=i(785893);function l(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class d extends s.PureComponent{constructor(...e){super(...e),l(this,"onScroll",(()=>{const{dismiss:e}=this.props;this.dismissed||this.timer||(this.timer=setTimeout((()=>{e(),this.dismissed=!0,this.timer=void 0}),3e3))})),l(this,"dismissed",!1)}componentDidMount(){window.addEventListener("scroll",this.onScroll)}componentWillUnmount(){this.timer&&clearTimeout(this.timer)}render(){const{anchor:e,text:t,thumbnails:i,idealDirection:s}=this.props,r=i.slice(-3);return(0,a.jsx)(o.J2,{anchor:e,color:"white",idealDirection:s,onDismiss:this.onScroll,shouldFocus:!1,size:"md",children:(0,a.jsxs)(o.xu,{display:"flex",alignContent:"center",justifyContent:"between",padding:3,width:"100%",children:[(0,a.jsx)(o.xu,{alignItems:"center",display:"flex",flex:"grow",justifyContent:"center",marginStart:-3,paddingX:3,children:(0,a.jsx)(o.xv,{color:"default",weight:"bold",children:t})}),(0,a.jsx)(o.xu,{display:"flex",marginEnd:-2,paddingX:2,children:r.map((e=>(0,a.jsx)(o.xu,{height:60,width:50,paddingX:1,children:(0,a.jsx)(o.zd,{rounding:2,height:60,children:(0,a.jsx)(o.Ee,{alt:"More Ideas Thumbnail",color:"rgb(86, 152, 239)",fit:"cover",naturalHeight:60,naturalWidth:60,src:e})})},e)))})]})})}}function c(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class u extends s.Component{constructor(...e){super(...e),c(this,"state",{paused:!1}),c(this,"handlePulsarClick",((e,t)=>{e?this.setState({paused:!0}):t()}))}componentWillUnmount(){clearTimeout(this.timer)}setDefaultPulsarTooltip(e){const t=e=>!(null==e);e.has_pulsar=!t(e.has_pulsar)||e.has_pulsar,e.has_tooltip=!t(e.has_tooltip)||e.has_tooltip}getText(e,t,i){return t&&e.text.replace("{boardName}",t),i?i(e):e.text}render(){const{anchor:e,customWrapper:t,experienceIds:i,boardTextOverride:l,flyoutSize:c,fontSize:u,hasFullWidthButton:p=!0,idealDirection:h,useMasonryFlyout:m,noClickToDismiss:b,onClickComplete:_,onClickDismiss:y,placementId:g,positionRelativeToAnchor:v,shouldTimeoutDismiss:f,showCaret:x,textAlign:w,textOverflow:T,textOverrideFn:E,textWeight:I,customizedComplete:O,pulsarZIndex:j}=this.props,P=t||(({children:e})=>m?(0,a.jsx)(o.mh,{children:e}):e),A="blue";return(0,a.jsx)(r.Z,{eligibleIds:i,placementId:g,eligibleTypes:[8],children:({complete:t,dismiss:i,experience:r})=>{const{display_data:g}=r;if(this.setDefaultPulsarTooltip(g),!g.has_pulsar&&!g.has_tooltip)return t(),null;f&&g.disappearTime&&g.disappearTime>0&&(this.timer=setTimeout((()=>(i(),null)),g.disappearTime));const S=501041===r.experience_id||505086===r.experience_id;return(0,a.jsxs)(s.Fragment,{children:[g.has_pulsar&&(0,a.jsx)(n.Z,{anchor:e,leftOverride:S?342:void 0,onTouch:()=>this.handlePulsarClick(g.has_tooltip,t),paused:this.state.paused,topOverride:S?-5:void 0,zIndex:j&&j.index()}),g.has_tooltip&&(!g.has_pulsar||this.state.paused)&&(g.thumbnail_urls?(0,a.jsx)(d,{anchor:e,dismiss:i,idealDirection:h||"down",text:g.text,thumbnails:g.thumbnail_urls}):(0,a.jsx)(P,{children:(0,a.jsx)(o.J2,{anchor:e,color:A,idealDirection:h||"down",onDismiss:b?()=>{}:i,positionRelativeToAnchor:!m&&v,shouldFocus:!1,showCaret:x,size:c,children:(0,a.jsxs)(o.xu,{column:12,padding:3,children:[(0,a.jsxs)(o.xv,{align:"right"===w?"end":w,color:"inverse",overflow:T,size:u,weight:I||"bold",children:[this.getText(g,l,E),g.secondary_cta_link&&(0,a.jsx)(o.xu,{display:"inlineBlock",marginStart:1,children:(0,a.jsx)(o.xv,{size:u,weight:"bold",color:"inverse",children:(0,a.jsx)(o.rU,{inline:!0,target:"blank",href:g.secondary_cta_link.url,underline:"hover",children:g.secondary_cta_link.text})})})]}),g.sub_text&&(0,a.jsx)(o.xu,{paddingY:2,children:(0,a.jsx)(o.xv,{color:"inverse",size:u,children:g.sub_text})}),(g.dismiss_button_text||g.complete_button_text)&&(0,a.jsxs)(o.xu,{display:"flex",alignItems:"center",marginTop:2,children:[g.dismiss_button_text&&(0,a.jsx)(o.xu,{marginEnd:1,column:6,children:(0,a.jsx)(o.zx,{fullWidth:p,color:A,onClick:()=>{y&&y(),i()},size:"md",text:g.dismiss_button_text})}),g.complete_button_text&&(0,a.jsx)(o.xu,{column:g.dismiss_button_text?6:12,children:O?(0,a.jsx)(o.iP,{fullHeight:!0,onTap:()=>{t(),_&&_()},rounding:2,children:(0,a.jsx)(o.xu,{display:"flex",color:"default",padding:2,rounding:2,justifyContent:"center",dangerouslySetInlineStyle:{__style:{padding:"10px"}},children:(0,a.jsx)(o.xv,{color:"shopping",weight:"bold",children:g.complete_button_text})})}):(0,a.jsx)(o.kC,{justifyContent:"center",children:(0,a.jsx)(o.zx,{fullWidth:p,color:"white",href:g.complete_button_cta_url,role:g.complete_button_cta_url?"link":"button",size:"md",target:g.complete_button_cta_url?"blank":null,text:g.complete_button_text,onClick:({event:e})=>{e.preventDefault(),e.stopPropagation(),t(),_&&_()}})})})]})]})})}))]})}})}}c(u,"defaultProps",{fontSize:"300",positionRelativeToAnchor:!0})},242923:(e,t,i)=>{i.d(t,{CF:()=>a,Tl:()=>o,dy:()=>l});var s=i(6637),r=i(332611);const n=(e,t)=>(i,n)=>o=>{if(i&&i.id){const a=s.Z.create(e,{placed_experience_id:i.id,extra_context:{}});switch(t){case"dismissed":a.callDelete().then((()=>{o((0,r.fO)())}));break;case"completed":a.callUpdate().then((()=>{n||o((0,r.fO)())}));break;case"viewed":a.callUpdate()}}},o=n("UserExperienceCompletedResource","completed"),a=n("UserExperienceResource","dismissed"),l=n("UserExperienceViewedResource","viewed")},570470:(e,t,i)=>{i.d(t,{Z:()=>a});var s=i(667294),r=i(883119),n=i(785893);function o({anchor:e,children:t,zIndex:i,leftOverride:o,topOverride:a}){const l=(0,s.useRef)(null),[d,c]=(0,s.useState)(0),[u,p]=(0,s.useState)(0),{height:h,width:m}=e.getBoundingClientRect();(0,s.useEffect)((()=>{const{current:t}=l;if(e&&t){const{height:e,width:i}=t.getBoundingClientRect(),{horizontalOffset:s,verticalOffset:r}=((e,t,i,s)=>({horizontalOffset:-(s/2-t/2),verticalOffset:-(i/2-e/2)}))(h,m,e,i);c(s),p(r)}}));const b=o||d,_=a||u;return(0,n.jsx)(r.xu,{position:"absolute",zIndex:i?new r.Ry(i):void 0,dangerouslySetInlineStyle:{__style:{left:b,top:_}},ref:l,children:t})}const a=function(e){const{anchor:t,leftOverride:i,onTouch:s,onMouseEnter:a,paused:l,size:d,topOverride:c,zIndex:u}=e;return t?(0,n.jsx)(o,{anchor:t,leftOverride:i,topOverride:c,zIndex:u,children:(0,n.jsx)(r.iP,{fullWidth:!1,onTap:({event:e})=>s(e),onMouseEnter:a,rounding:"circle",children:(0,n.jsx)(r.o3,{paused:l,size:d})})}):null}},12610:(e,t,i)=>{function s(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}i.d(t,{Z3:()=>p,LU:()=>h,ZP:()=>m});const r=1e6,n=window.location.search.includes("debug_impressions=1")||document.cookie&&document.cookie.indexOf("debug_impressions=1")>-1,o={paused:"Pause",resumed:"Resume",stopped:"Flush",enter:"Enter viewport",exit:"Exit viewport"},a={},l={background:"#FF8A8A",transform:"scale(.98)"},d={init:e=>({transform:`scale(${a[e]?.8:.99})`,transition:"transform .2s ease-in-out",background:"#8E8E8E"}),[o.enter]:{background:"#A0DCC8",transform:"scale(.99)"},[o.exit]:l,[o.stopped]:l,[o.paused]:l,[o.resumed]:{background:"#0FA573",transform:"scale(.99)"}};class c{constructor(e){s(this,"setMutationObserver",(e=>(this.mutationObserver=e,this))),s(this,"startMutationObserver",(e=>{this.mutationObserver&&this.mutationObserver.observe(this.node,e)})),s(this,"stopMutationObserver",(()=>{this.mutationObserver&&this.mutationObserver.disconnect()})),s(this,"handleIntersectionChange",(e=>{const t=e.intersectionRatio>0||e.isIntersecting;if(t&&!this.inViewport){const e=Date.now();this.startTime=e,this._debug(o.enter,{startTime:e,node:this.node}),this.enterCallbacks.forEach((e=>e()))}else!t&&this.inViewport&&(this._debug(o.exit,!0),this.exitCallbacks.forEach((e=>e(this.toJSON()))));this.inViewport=t})),this.enterCallbacks=[],this.exitCallbacks=[],this.inViewport=!1,this.node=e,this.startTime=0,this.debugId=""}onEnterViewport(e){return this.enterCallbacks.push(e),this}onExitViewport(e){return this.exitCallbacks.push(e),this}setDebugId(e){return this.debugId=e,n&&Object.assign(this.node.style,d.init(e)),this}pause(){return this.inViewport&&(this._debug(o.paused,!0),this.exitCallbacks.forEach((e=>e(this.toJSON())))),this}resume(){if(this.inViewport){const e=Date.now();this._debug(o.resumed,{startTime:e}),this.startTime=e}return this}stop(e){return this.inViewport&&(this._debug(o.stopped,!0),this.exitCallbacks.forEach((t=>t(this.toJSON(e))))),this}toJSON(e=""){return{startTime:this.startTime*r,endTime:Date.now()*r,forcedExit:e}}toDebugJSON(){return{pinID:this.debugId,startTime:this.startTime,endTime:Date.now(),duration:(Date.now()-this.startTime)/1e3+" seconds"}}_debug(e,t){if(n)switch(window.console.log(`📌 ${e} -- ${this.debugId}`),!0===t&&window.console.log(this.toDebugJSON()),"object"==typeof t&&window.console.log(t),d[e]&&Object.assign(this.node.style,d[e]),e){case o.flushed:case o.paused:case o.exit:a[this.debugId]=!0}}}function u(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}const p=!0,h=!1;class m{constructor(){u(this,"_delegateChange",(e=>{e.forEach((e=>{const t=this.activeImpressions.get(e.target);t&&t.handleIntersectionChange(e)}))})),u(this,"_handleMutations",((e,t)=>{const i=this.mutationObservers.get(t);i&&i.offsetHeight<1&&i&&this.stop(i,"removed")})),this.activeImpressions=new Map,this.mutationObservers=new Map,this.bottomHeight=0,this.bottomObstructions=new Set,this.pausePriority=h,this.observer=new window.IntersectionObserver(this._delegateChange),this.paused=!1,this.topHeight=0,this.topObstructions=new Set,this.inExperiment=!1}setExperimentStatus(e){this.inExperiment!==e&&(this.inExperiment=e)}stop(e,t=""){const i=this.activeImpressions.get(e);i&&(i.stop(t),this.mutationObservers.delete(i.mutationObserver),i.stopMutationObserver(),this.activeImpressions.delete(e),this.observer.unobserve(e))}start(e){let t=this.activeImpressions.get(e);if(!t){t=new c(e),this.activeImpressions.set(e,t),this.observer.observe(e);const i=(e,t)=>this._handleMutations(e,t);t.setMutationObserver(new window.MutationObserver(i)),this.mutationObservers.set(t.mutationObserver,e),t.startMutationObserver({subtree:!0,attributes:!0,attributeFilter:["style"]})}return t}pause(e=p){this.paused||(Array.from(this.activeImpressions.values()).forEach((e=>e.pause())),this.paused=!0,this.pausePriority===h&&(this.pausePriority=e))}resume(e=p){e===h&&this.pausePriority===p||this.paused&&(Array.from(this.activeImpressions.values()).forEach((e=>e.resume())),this.paused=!1,this.pausePriority=h)}addObstruction(e,t){"top"===e?this.topObstructions.add(t):"bottom"===e&&this.bottomObstructions.add(t),this._calculateRootMargins()}removeObstruction(e,t){"top"===e?this.topObstructions.delete(t):"bottom"===e&&this.bottomObstructions.delete(t),this._calculateRootMargins()}updateObstructions(){this._calculateRootMargins()}_calculateRootMargins(){const e=Array.from(this.topObstructions).reduce(((e,t)=>{const{bottom:i}=t.getBoundingClientRect();return i>e?i:e}),0),t=window.innerHeight-Array.from(this.bottomObstructions).reduce(((e,t)=>{const{top:i}=t.getBoundingClientRect();return i<e?i:e}),window.innerHeight);if(e!==this.topHeight||t!==this.bottomHeight){const i={rootMargin:`${-e}px 0px ${-t}px`};this.observer.disconnect(),this.observer=new window.IntersectionObserver(this._delegateChange,i),Array.from(this.activeImpressions.values()).forEach((e=>this.observer.observe(e.node))),this.topHeight=e,this.bottomHeight=t}}}},564194:(e,t,i)=>{i.d(t,{Z:()=>m});var s=i(667294),r=i(973935),n=i(983722),o=i(834911),a=i(124580),l=i(407043),d=i(802201),c=i(785893);function u(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}const p={Article:{impressionType:"articleImpressions",idType:"articleIdStr",eventType:3829},Pin:{impressionType:"pinImpressions",idType:"pinIdStr",eventType:18},Board:{impressionType:"boardImpressions",idType:"boardIdStr",eventType:3700},BoardMoreIdeasRep:{impressionType:"boardMoreIdeasImpressions",idType:"boardIdStr",eventType:10054},Interest:{impressionType:"topicImpressions",idType:"topicIdStr",eventType:3703},Search:{impressionType:"searchImpressions",idType:"term",eventType:3803},Story:{impressionType:"storyImpressions",idType:"storyIdStr",eventType:170},ActivationCard:{impressionType:"activationCardImpressions",idType:"experienceIdStr",eventType:8547},User:{impressionType:"userImpressions",idType:"userIdStr",eventType:3704},News:{impressionType:"newsHubData",idType:"newsIdStr",eventType:4110},Guide:{impressionType:"guideImpressions",idType:"term",eventType:7573},TodayArticle:{impressionType:"todayArticleImpressions",idType:"todayArticleIdStr",eventType:8569},Banner:{impressionType:"bannerImpressions",idType:"userIdStr",eventType:9061},Comment:{impressionType:"commentImpressions",idType:"commentIdStr",eventType:9127}};class h extends s.Component{constructor(e){super(e),u(this,"trackImpression",(()=>{try{this.node=(0,r.findDOMNode)(this),this.node instanceof HTMLElement&&this.impressionsFramework.start(this.node).onExitViewport(this.logImpression).setDebugId(this.props.loggingId||"unknown")}catch(e){window.console.error('Can only track impressions for type "HTMLElement"')}})),u(this,"logImpression",(e=>{const{carousel_data:t,closeupImpressionType:i,closeupNavigationType:s,componentType:r,contextLogData:o,elementType:a,impressionAuxFields:l,impressionType:d,loggingId:c,objectIdStr:u,slotIndex:h,trackCarousel:m,viewData:b,viewParameter:_,viewType:y,logContextEvent:g}=this.props,v=p[d],f=v.idType,x=e.forcedExit&&"removed"===e.forcedExit?0:void 0,w={endTime:e.endTime,[f]:c,slotIndex:h,time:e.startTime,renderDuration:e.endTime-e.startTime,type:i,...l,forcedExit:x},T=(0,n.Z)(),{checkExperiment:E}=(T||{}).experimentsClient||{},I="function"==typeof E&&E("web_mweb_story_impression_fix").anyEnabled;if(I&&(p.Story={impressionType:"storyImpression",idType:"idStr",eventType:170}),m||g({event_type:v.eventType,component:r,element:a,event_data:{[v.impressionType]:"Story"===d&&I?w:[w]},object_id_str:u,view_type:y,view_data:b||{},view_parameter:_,aux_data:{...o,closeup_navigation_type:s}}),t&&m){const{carousel_slots:e,index:i=0,id:s}=t;g({event_type:7352,component:r,event_data:{pinCarouselSlotImpressions:[{...w,carouselDataId:Number(s),carouselSlotId:(null==e?void 0:e[i])&&Number(e[i].id),slotIndex:i}]},object_id_str:u,view_type:y,view_data:b||{},view_parameter:_,aux_data:{...o}})}})),this.impressionsFramework=e.impressionsFramework||a.Z}componentDidMount(){this.props.inImpressionExp&&!this.impressionsFramework.inExperiment&&this.impressionsFramework.setExperimentStatus(!0),this.props.isPaused||this.trackImpression()}componentDidUpdate(e){e.isPaused&&!this.props.isPaused&&this.trackImpression()}componentWillUnmount(){this.node instanceof HTMLElement&&this.impressionsFramework.stop(this.node)}render(){return s.Children.only(this.props.children)}}function m(e){const{logContextEvent:t}=(0,l.v)(),{loggingId:i}=e,s=(0,d.AF)(),r=i?s[i]:{};return(0,c.jsx)(h,{...e,logContextEvent:t,carousel_data:r&&(0,o.Z)({carouselData:r.carousel_data,images:r.images,richMetadata:r.rich_metadata,richSummary:r.rich_summary})})}},124580:(e,t,i)=>{i.d(t,{Z:()=>s});const s=new(i(12610).ZP)},567450:(e,t,i)=>{function s(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}i.d(t,{Z:()=>o});const r=new class{constructor(){s(this,"onResumeListeners",[]),s(this,"onPauseListeners",[]),s(this,"inExp",!1),s(this,"windowInFocus",!0),s(this,"isAppStateEnabled",!1)}setExperiment(e=!1){this.inExp=e}onSessionResume(e){return this.onResumeListeners.push(e),this}onSessionPause(e){return this.onPauseListeners.push(e),this}removeResumeListener(e){this.onResumeListeners.filter((t=>t!==e))}removePauseListener(e){this.onPauseListeners=this.onPauseListeners.filter((t=>t!==e))}getAppState(){return this.isAppStateEnabled&&this.windowInFocus?0:void 0}setIsAppStateEnabled(e){this.isAppStateEnabled=e}},n=e=>{if(e.isHidden){const{reason:t}=e;r.windowInFocus=!1,r.onPauseListeners.forEach((e=>e(t)))}else r.windowInFocus=!0,r.onResumeListeners.forEach((e=>e()))};setTimeout((()=>{window.addEventListener("beforeunload",(()=>n({isHidden:!0,reason:"beforeunload"}))),window.addEventListener("focus",(()=>n({isHidden:!1}))),window.addEventListener("blur",(()=>n({isHidden:!0,reason:"blur"}))),window.addEventListener("pageshow",(()=>n({isHidden:!1}))),window.addEventListener("pagehide",(()=>n({isHidden:!0,reason:"pagehide"}))),void 0!==document.hidden?document.addEventListener("visibilitychange",(()=>n(document.hidden?{isHidden:!0,reason:"visibilitychange"}:{isHidden:!1})),!1):void 0!==document.webkitHidden&&document.addEventListener("webkitvisibilitychange",(()=>n(document.webkitHidden?{isHidden:!0,reason:"visibilitychange"}:{isHidden:!1})),!1)}),0);const o=r},623568:(e,t,i)=>{i.d(t,{Js:()=>a,NK:()=>g,Nc:()=>v,VX:()=>l,Zt:()=>_,_J:()=>u,_Q:()=>o,_S:()=>f,cL:()=>m,dZ:()=>T,hb:()=>y,hy:()=>c,iR:()=>n,jL:()=>d,o:()=>x,oN:()=>s,pU:()=>w,rM:()=>b,sV:()=>p,sY:()=>h});const s=5e3,r=["Uploaded by user"],n=e=>!!e&&!!e.video_list,o=e=>!!e.promoted_is_lead_ad,a=(e,t)=>{let i=e&&e.url?e.url.split("/")[1]:"";return t&&t.full_name&&(i=t.full_name),i},l=e=>{var t;return e.rich_summary&&e.rich_summary.products&&e.rich_summary.products.length>0||(null===(t=e.rich_metadata)||void 0===t?void 0:t.products)&&e.rich_metadata.products.length>0||!1},d=e=>!!e.promoter&&!e.is_downstream_promotion,c=e=>!!e,u=e=>!!e.video_status&&5!==e.video_status,p=e=>["email","messages","deep_linking"].includes(e),h=e=>!!e&&"gif"===e,m=({embedSrc:e,embedSubtype:t,embedType:i})=>!!e&&!h(i)&&!(e=>"pinstory"===e)(t),b=({link:e,mobileLink:t,trackedLink:i})=>!t&&!i&&!e,_=({link:e,mobileLink:t,origImageUrl:i,trackedLink:s})=>t||s||e||i||"",y=({isStoryPin:e,isVideoPin:t})=>e?"storyPin":t?"video":"image",g=(e,t)=>({deeplinkUri:{android:`pin/${e}/repin`,iOS:`repin/${e}`},mwebUri:{pathname:`/pin/${e}/repin/`,state:{trackingParams:t.state?t.state.trackingParams:""}}});function v(e){var t,i;return!n(e.videos)&&!c(e.story_pin_data_id)&&0!==Object.keys((null===(t=e.aggregated_pin_data)||void 0===t||null===(i=t.creator_analytics)||void 0===i?void 0:i["30d_realtime"])||{}).length}function f(e){for(const t of r)if(e===t)return!1;return!0}function x(e){var t;return 0!==Object.keys((null===(t=e.creator_analytics)||void 0===t?void 0:t["30d_realtime"])||{}).length}function w(e){var t;return 0!==Object.keys((null===(t=e.public_creator_analytics)||void 0===t?void 0:t.all_time_realtime)||{}).length}function T(e){var t,i;return!(null===(t=e.creator_analytics)||void 0===t||null===(i=t["30d_realtime"])||void 0===i||!i.is_realtime)}},505920:(e,t,i)=>{i.d(t,{UZ:()=>u,Z8:()=>p,my:()=>h});var s=i(667294),r=(i(702664),i(6637)),n=i(425288),o=i(785893);function a(e,t,i){var s;const r=[...null!==(s=t[e][i.payload.name])&&void 0!==s?s:[],i.payload.handler],n={...t};return n[e]={...t[e],[i.payload.name]:r},n}function l(e,t,i){if(!t[e][i.payload.name])return t;const s=t[e][i.payload.name].filter((e=>e!==i.payload.handler)),r={...t};return r[e]={...t[e],[i.payload.name]:s},r}const{Provider:d,useHook:c}=(0,n.Z)("ResourceContext");function u({children:e}){const[{listeners:t,moreListeners:i},n]=(0,s.useReducer)(((e,t)=>{switch(t.type){case"addListener":return a("listeners",e,t);case"addMoreListener":return a("moreListeners",e,t);case"removeListener":return l("listeners",e,t);case"removeMoreListener":return l("moreListeners",e,t);default:return e}}),{listeners:{},moreListeners:{}});r.Z.fetchCompleteCallback=({resource:e,options:i,response:s,normalizedResponse:r,refresh:n,resourceSchema:o})=>{t[e]&&t[e].forEach((t=>t({isRefresh:n,normalizedResponse:r,options:i,schema:o,resource:e,response:s})))},r.Z.fetchMoreCompleteCallback=({resource:e,options:t,response:s,normalizedResponse:r,refresh:n,resourceSchema:o})=>{i[e]&&i[e].forEach((i=>i({isRefresh:n,normalizedResponse:r,options:t,schema:o,resource:e,response:s})))};const c=(0,s.useMemo)((()=>({listenerDispatch:n})),[]);return(0,o.jsx)(d,{value:c,children:e})}function p(e,t){const{listenerDispatch:i}=c();(0,s.useEffect)((()=>(i({type:"addListener",payload:{name:e,handler:t}}),()=>{i({type:"removeListener",payload:{name:e,handler:t}})})))}function h(e,t){const{listenerDispatch:i}=c();(0,s.useEffect)((()=>(i({type:"addMoreListener",payload:{name:e,handler:t}}),()=>{i({type:"removeMoreListener",payload:{name:e,handler:t}})})))}},835209:(e,t,i)=>{function s({richPinData:e={}}){return((null==e?void 0:e.products)||[])[0]}i.d(t,{Z:()=>s})},494349:(e,t,i)=>{i.d(t,{g:()=>h,I:()=>p});var s=i(667294),r=i(567450),n=i(150361),o=i.n(n);const a={appInFocus:!0,footerPlusButtonVisible:!0,isAutoplay:!1,showTypeaheadOverlay:!1,videosAutoplaying:{currentlyPlayingOrganicVideoId:null,organicVideosAutoplaying:{},promotedVideosAutoplaying:{}},viewportSize:"lg"},l=(e=a,t)=>{if("TOGGLE_TYPEAHEAD_OVERLAY"===t.type)return{...e,showTypeaheadOverlay:t.payload};if("SET_CURRENT_VIDEO"===t.type){const{payload:i}=t,{pinId:s,isPromoted:r,currentTime:n,inVideoGridAutoplayExp:a}=i,{videosAutoplaying:l}=e,{currentlyPlayingOrganicVideoId:d,promotedVideosAutoplaying:c,organicVideosAutoplaying:u}=l,p=o()(c),h=o()(u);return!r&&d&&a?e:(r?p[s]={pinId:s,currentTime:n,paused:!1}:h[s]={pinId:s,currentTime:n,paused:!1},{...e,videosAutoplaying:{currentlyPlayingOrganicVideoId:r?d:s,promotedVideosAutoplaying:p,organicVideosAutoplaying:h}})}if("SET_IS_AUTOPLAY"===t.type)return{...e,isAutoplay:t.payload};if("PAUSE_CURRENT_VIDEO"===t.type){const{payload:i}=t,{pinId:s,isPromoted:r,currentTime:n}=i,{videosAutoplaying:a}=e,{promotedVideosAutoplaying:l,organicVideosAutoplaying:d}=a,c=o()(l),u=o()(d);return r?c[s]={...c[s],paused:!0,currentTime:n}:u[s]={...u[s],paused:!0,currentTime:n},{...e,videosAutoplaying:{currentlyPlayingOrganicVideoId:null,promotedVideosAutoplaying:c,organicVideosAutoplaying:u}}}return"SET_APP_FOCUS_STATE"===t.type?{...e,appInFocus:t.payload}:"SET_VIEWPORT_SIZE"===t.type?{...e,viewportSize:t.payload}:"SET_FOOTER_VISIBILITY_STATE"===t.type?{...e,footerPlusButtonVisible:t.payload}:e};var d=i(425288),c=i(785893);const{Provider:u,useHook:p}=(0,d.Z)("AppUI");function h({children:e}){const[t,i]=(0,s.useReducer)(l,a),n=(0,s.useCallback)((e=>i({type:"PAUSE_CURRENT_VIDEO",payload:e})),[]),o=(0,s.useCallback)((e=>i({type:"SET_APP_FOCUS_STATE",payload:e})),[]),d=(0,s.useCallback)((e=>i({type:"SET_CURRENT_VIDEO",payload:e})),[]),p=(0,s.useCallback)((e=>i({type:"SET_FOOTER_VISIBILITY_STATE",payload:e})),[]),h=(0,s.useCallback)((e=>i({type:"SET_IS_AUTOPLAY",payload:e})),[]),m=(0,s.useCallback)((e=>i({type:"SET_VIEWPORT_SIZE",payload:e})),[]),b=(0,s.useCallback)((e=>i({type:"TOGGLE_TYPEAHEAD_OVERLAY",payload:e})),[]),_=(0,s.useMemo)((()=>({pauseAutoplay:n,setCurrentVideo:d,setFooterPlusButtonVisible:p,setIsAutoplay:h,setViewportSize:m,toggleTypeaheadOverlay:b,setAppFocusState:o,appUI:t})),[n,d,p,h,m,b,o,t]);return(0,s.useEffect)((()=>{r.Z.onSessionResume((()=>{o(!0)})).onSessionPause((()=>{o(!1)}))}),[o]),(0,c.jsx)(u,{value:_,children:e})}},281180:(e,t,i)=>{i.d(t,{Tt:()=>c,kW:()=>l,kY:()=>u,mN:()=>d});var s=i(702664),r=i(19121),n=i(425288),o=i(785893);const{Provider:a,useHook:l}=(0,n.Z)("Users");function d(){const e=l();return t=>e[t]}function c(){const{id:e}=(0,r.Z)();return l()[null!=e?e:""]}function u({children:e}){const t=(0,s.useSelector)((({users:e})=>e),s.shallowEqual);return(0,o.jsx)(a,{value:t,children:e})}},993786:(e,t,i)=>{i.d(t,{O:()=>d,Z:()=>c});var s=i(667294),r=i(898781),n=i(966113),o=i(883119),a=i(785893);const l={xs:12,sm:16,md:20,lg:24};function d({children:e}){const t=(0,r.ZP)();return(0,a.jsx)(o.u,{link:(0,a.jsx)(o.rU,{href:n.vT,target:"blank",children:(0,a.jsx)(o.xv,{color:"inverse",size:"100",weight:"bold",children:t._('Learn more', 'verifiedBadge.tooltip.link', 'Learn more about Pinterest\'s Merchant Guidelines')})}),text:t._('This retailer meets Pinterest\'s Merchant Guidelines', 'merchantVerification.badge.tooltip', 'Badge indicating that a merchant or user is verified'),children:e})}function c({hasVerifiedIdentity:e,iconOnly:t,isVerifiedMerchant:i,showText:n,size:c}){const u=(0,r.ZP)(),p=(0,a.jsxs)(o.kC,{alignItems:"center",justifyContent:"start",children:[(0,a.jsx)(o.JO,{accessibilityLabel:u._('Merchant verification badge icon', 'merchantVerification.badge.icon', 'Badge indicating that a merchant or user is verified'),color:"shopping",icon:"workflow-status-ok",inline:!0,size:l[c]}),n&&(0,a.jsx)(o.xu,{marginStart:2,children:(0,a.jsx)(o.xv,{color:"shopping",inline:!0,weight:"bold",children:u._('Verified merchant', 'creator.header.verifiedMerchant', 'this merchant is a verified merchant')})})]});return(0,a.jsxs)(s.Fragment,{children:[i&&!t&&(0,a.jsx)(d,{children:p}),i&&t&&p,e&&!i&&(0,a.jsx)(o.JO,{accessibilityLabel:u._('Domain verification icon', 'domainVerification.badge.icon', 'Badge indicating that a merchant or user is verified'),color:"error",icon:"check-circle",size:l[c]})]})}},154391:(e,t,i)=>{i.d(t,{H:()=>n,o:()=>r});var s=i(425288);const{Provider:r,useHook:n}=(0,s.Z)("LimitedLogin")},844949:(e,t,i)=>{i.d(t,{X:()=>c,f:()=>d});var s=i(667294);function r(e=null,t){switch(t.type){case"REPORT_CONTENT_SHOW":return{id:t.payload.id,isProduct:t.payload.isProduct,isPromoted:t.payload.isPromoted,videoDuration:t.payload.videoDuration,viewParameter:t.payload.viewParameter,viewType:t.payload.viewType,type:t.payload.type};case"REPORT_CONTENT_DISMISS":return null;default:return e}}var n=i(425288),o=i(623568),a=i(785893);const{Provider:l,useHook:d}=(0,n.Z)("ReportData");function c({children:e}){const[t,i]=(0,s.useReducer)(r,null),n=(0,s.useCallback)((()=>i({type:"REPORT_CONTENT_DISMISS"})),[]),d=(0,s.useCallback)(((e,t,s)=>i({type:"REPORT_CONTENT_SHOW",payload:{id:e,isProduct:!1,isPromoted:!1,videoDuration:null,viewParameter:t,viewType:s,type:"aggregatedComment"}})),[]),c=(0,s.useCallback)(((e,t,s)=>i({type:"REPORT_CONTENT_SHOW",payload:{id:e,isProduct:!1,isPromoted:!1,videoDuration:null,viewParameter:t,viewType:s,type:"pin"}})),[]),u=(0,s.useCallback)(((e,t,s)=>{const{id:r,videos:n}=e,a=(0,o.VX)(e),l=(0,o.jL)(e);let d;if((0,o.iR)(n)&&n){const{video_list:e={}}=n,t=e[Object.keys(e)[0]];d=t&&t.duration}i({type:"REPORT_CONTENT_SHOW",payload:{id:r,isProduct:a,isPromoted:l,videoDuration:d,viewParameter:t,viewType:s,type:"pin"}})}),[]),p=(0,s.useMemo)((()=>({reportData:t,dismiss:n,reportComment:d,reportImage:c,reportPin:u})),[t,n,d,c,u]);return(0,a.jsx)(l,{value:p,children:e})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/96044-cc35159fbc812aba.mjs.map