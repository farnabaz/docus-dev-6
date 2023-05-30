import{a as Z,y as J,ap as G,H as M,X as T,ai as E,aq as Q,ar as x,q as nn,as as ln}from"./entry.138ef2fe.js";class S{constructor(e,t,o){this.property=e,this.normal=t,o&&(this.space=o)}}S.prototype.property={};S.prototype.normal={};S.prototype.space=null;function U(n,e){const t={},o={};let r=-1;for(;++r<n.length;)Object.assign(t,n[r].property),Object.assign(o,n[r].normal);return new S(t,o,e)}function P(n){return n.toLowerCase()}class m{constructor(e,t){this.property=e,this.attribute=t}}m.prototype.space=null;m.prototype.boolean=!1;m.prototype.booleanish=!1;m.prototype.overloadedBoolean=!1;m.prototype.number=!1;m.prototype.commaSeparated=!1;m.prototype.spaceSeparated=!1;m.prototype.commaOrSpaceSeparated=!1;m.prototype.mustUseProperty=!1;m.prototype.defined=!1;let en=0;const u=v(),g=v(),z=v(),l=v(),p=v(),b=v(),f=v();function v(){return 2**++en}const O=Object.freeze(Object.defineProperty({__proto__:null,boolean:u,booleanish:g,commaOrSpaceSeparated:f,commaSeparated:b,number:l,overloadedBoolean:z,spaceSeparated:p},Symbol.toStringTag,{value:"Module"})),w=Object.keys(O);class L extends m{constructor(e,t,o,r){let a=-1;if(super(e,t),R(this,"space",r),typeof o=="number")for(;++a<w.length;){const i=w[a];R(this,w[a],(o&O[i])===O[i])}}}L.prototype.defined=!0;function R(n,e,t){t&&(n[e]=t)}const on={}.hasOwnProperty;function k(n){const e={},t={};let o;for(o in n.properties)if(on.call(n.properties,o)){const r=n.properties[o],a=new L(o,n.transform(n.attributes||{},o),r,n.space);n.mustUseProperty&&n.mustUseProperty.includes(o)&&(a.mustUseProperty=!0),e[o]=a,t[P(o)]=o,t[P(a.attribute)]=o}return new S(e,t,n.space)}const B=k({space:"xlink",transform(n,e){return"xlink:"+e.slice(5).toLowerCase()},properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}}),I=k({space:"xml",transform(n,e){return"xml:"+e.slice(3).toLowerCase()},properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function j(n,e){return e in n?n[e]:e}function H(n,e){return j(n,e.toLowerCase())}const _=k({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:H,properties:{xmlns:null,xmlnsXLink:null}}),F=k({transform(n,e){return e==="role"?e:"aria-"+e.slice(4).toLowerCase()},properties:{ariaActiveDescendant:null,ariaAtomic:g,ariaAutoComplete:null,ariaBusy:g,ariaChecked:g,ariaColCount:l,ariaColIndex:l,ariaColSpan:l,ariaControls:p,ariaCurrent:null,ariaDescribedBy:p,ariaDetails:null,ariaDisabled:g,ariaDropEffect:p,ariaErrorMessage:null,ariaExpanded:g,ariaFlowTo:p,ariaGrabbed:g,ariaHasPopup:null,ariaHidden:g,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:p,ariaLevel:l,ariaLive:null,ariaModal:g,ariaMultiLine:g,ariaMultiSelectable:g,ariaOrientation:null,ariaOwns:p,ariaPlaceholder:null,ariaPosInSet:l,ariaPressed:g,ariaReadOnly:g,ariaRelevant:null,ariaRequired:g,ariaRoleDescription:p,ariaRowCount:l,ariaRowIndex:l,ariaRowSpan:l,ariaSelected:g,ariaSetSize:l,ariaSort:null,ariaValueMax:l,ariaValueMin:l,ariaValueNow:l,ariaValueText:null,role:null}}),tn=k({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:H,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:b,acceptCharset:p,accessKey:p,action:null,allow:null,allowFullScreen:u,allowPaymentRequest:u,allowUserMedia:u,alt:null,as:null,async:u,autoCapitalize:null,autoComplete:p,autoFocus:u,autoPlay:u,capture:u,charSet:null,checked:u,cite:null,className:p,cols:l,colSpan:null,content:null,contentEditable:g,controls:u,controlsList:p,coords:l|b,crossOrigin:null,data:null,dateTime:null,decoding:null,default:u,defer:u,dir:null,dirName:null,disabled:u,download:z,draggable:g,encType:null,enterKeyHint:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:u,formTarget:null,headers:p,height:l,hidden:u,high:l,href:null,hrefLang:null,htmlFor:p,httpEquiv:p,id:null,imageSizes:null,imageSrcSet:null,inputMode:null,integrity:null,is:null,isMap:u,itemId:null,itemProp:p,itemRef:p,itemScope:u,itemType:p,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:u,low:l,manifest:null,max:null,maxLength:l,media:null,method:null,min:null,minLength:l,multiple:u,muted:u,name:null,nonce:null,noModule:u,noValidate:u,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:u,optimum:l,pattern:null,ping:p,placeholder:null,playsInline:u,poster:null,preload:null,readOnly:u,referrerPolicy:null,rel:p,required:u,reversed:u,rows:l,rowSpan:l,sandbox:p,scope:null,scoped:u,seamless:u,selected:u,shape:null,size:l,sizes:null,slot:null,span:l,spellCheck:g,src:null,srcDoc:null,srcLang:null,srcSet:null,start:l,step:null,style:null,tabIndex:l,target:null,title:null,translate:null,type:null,typeMustMatch:u,useMap:null,value:g,width:l,wrap:null,align:null,aLink:null,archive:p,axis:null,background:null,bgColor:null,border:l,borderColor:null,bottomMargin:l,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:u,declare:u,event:null,face:null,frame:null,frameBorder:null,hSpace:l,leftMargin:l,link:null,longDesc:null,lowSrc:null,marginHeight:l,marginWidth:l,noResize:u,noHref:u,noShade:u,noWrap:u,object:null,profile:null,prompt:null,rev:null,rightMargin:l,rules:null,scheme:null,scrolling:g,standby:null,summary:null,text:null,topMargin:l,valueType:null,version:null,vAlign:null,vLink:null,vSpace:l,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:u,disableRemotePlayback:u,prefix:null,property:null,results:l,security:null,unselectable:null}}),rn=k({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:j,properties:{about:f,accentHeight:l,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:l,amplitude:l,arabicForm:null,ascent:l,attributeName:null,attributeType:null,azimuth:l,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:l,by:null,calcMode:null,capHeight:l,className:p,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:l,diffuseConstant:l,direction:null,display:null,dur:null,divisor:l,dominantBaseline:null,download:u,dx:null,dy:null,edgeMode:null,editable:null,elevation:l,enableBackground:null,end:null,event:null,exponent:l,externalResourcesRequired:null,fill:null,fillOpacity:l,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:b,g2:b,glyphName:b,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:l,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:l,horizOriginX:l,horizOriginY:l,id:null,ideographic:l,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:l,k:l,k1:l,k2:l,k3:l,k4:l,kernelMatrix:f,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:l,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:l,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:l,overlineThickness:l,paintOrder:null,panose1:null,path:null,pathLength:l,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:p,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:l,pointsAtY:l,pointsAtZ:l,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:f,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:f,rev:f,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:f,requiredFeatures:f,requiredFonts:f,requiredFormats:f,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:l,specularExponent:l,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:l,strikethroughThickness:l,string:null,stroke:null,strokeDashArray:f,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:l,strokeOpacity:l,strokeWidth:null,style:null,surfaceScale:l,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:f,tabIndex:l,tableValues:null,target:null,targetX:l,targetY:l,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:f,to:null,transform:null,u1:null,u2:null,underlinePosition:l,underlineThickness:l,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:l,values:null,vAlphabetic:l,vMathematical:l,vectorEffect:null,vHanging:l,vIdeographic:l,version:null,vertAdvY:l,vertOriginX:l,vertOriginY:l,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:l,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}}),an=/^data[-\w.:]+$/i,A=/-[a-z]/g,un=/[A-Z]/g;function sn(n,e){const t=P(e);let o=e,r=m;if(t in n.normal)return n.property[n.normal[t]];if(t.length>4&&t.slice(0,4)==="data"&&an.test(e)){if(e.charAt(4)==="-"){const a=e.slice(5).replace(A,pn);o="data"+a.charAt(0).toUpperCase()+a.slice(1)}else{const a=e.slice(4);if(!A.test(a)){let i=a.replace(un,cn);i.charAt(0)!=="-"&&(i="-"+i),e="data"+i}}r=L}return new r(o,e)}function cn(n){return"-"+n.toLowerCase()}function pn(n){return n.charAt(1).toUpperCase()}const dn=U([I,B,_,F,tn],"html");U([I,B,_,F,rn],"svg");const N=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","link","main","map","mark","math","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rb","rp","rt","rtc","ruby","s","samp","script","section","select","slot","small","source","span","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr"],D="default",V=/^@|^v-on:/,q=/^:|^v-bind:/,W=/^v-model/,gn=["select","textarea","input"],On=Z({name:"ContentRendererMarkdown",props:{value:{type:Object,required:!0},excerpt:{type:Boolean,default:!1},tag:{type:String,default:"div"},components:{type:Object,default:()=>({})}},async setup(n){var r,a,i;const{content:{tags:e={}}}=J().public,t=G().isEnabled();let o=((r=n.value)==null?void 0:r.body)||n.value;return n.excerpt&&((a=n.value)!=null&&a.excerpt)&&(o=n.value.excerpt),o&&await wn(o,{tags:{...e,...M(((i=n.value)==null?void 0:i._components)||{}),...n.components}}),{debug:t,tags:e}},render(n){var y;const{tags:e,tag:t,value:o,excerpt:r,components:a,debug:i}=n;if(!o)return null;let s=(o==null?void 0:o.body)||o;r&&(o!=null&&o.excerpt)&&(s=o.excerpt);const c={...o,tags:{...e,...M((o==null?void 0:o._components)||{}),...a}};let d=c.component||t;return typeof c.component=="object"&&(d=c.component.name),d=$(d),T(d,{...(y=c.component)==null?void 0:y.props,...this.$attrs,"data-content-id":i?o._id:void 0},X(s,T,c,c))}});function hn(n,e,t,o={}){var c;if(n.type==="text")return e(x,n.value);if(n.tag==="script")return e(x,K(n));const r=n.tag,a=typeof((c=n.props)==null?void 0:c.__ignoreMap)>"u"&&t.tags[r]||r;if(n.tag==="binding")return fn(n,e,t,o);const i=$(a);typeof i=="object"&&(i.tag=r);const s=mn(n,t);return e(i,s,X(n,e,t,{...o,...s}))}function K(n){var e,t;return n.type==="text"?n.value:(e=n.children)!=null&&e.length?`<${n.tag}>${((t=n.children)==null?void 0:t.map(K).join(""))||""}</${n.tag}>`:`<${n.tag}>`}function fn(n,e,t,o={}){var c;const r={...o,$route:()=>nn(),$document:t,$doc:t},a=/\.|\[(\d+)\]/,s=((c=n.props)==null?void 0:c.value.trim().split(a).filter(Boolean)).reduce((d,y)=>y in d?typeof d[y]=="function"?d[y]():d[y]:{},r);return e(x,s)}function X(n,e,t,o){const a=(n.children||[]).reduce((s,c)=>{if(!Sn(c))return s[D].push(c),s;const d=xn(c);return s[d]=s[d]||[],s[d].push(...c.children||[]),s},{[D]:[]});return Object.entries(a).reduce((s,[c,d])=>(d.length&&(s[c]=()=>{const y=d.map(h=>hn(h,e,t,o));return Cn(y)}),s),{})}function mn(n,e){const{tag:t="",props:o={}}=n;return Object.keys(o).reduce(function(r,a){if(a==="__ignoreMap")return r;const i=o[a];if(W.test(a)&&!gn.includes(t))return yn(a,i,r,e);if(a==="v-bind")return vn(a,i,r,e);if(V.test(a))return bn(a,i,r,e);if(q.test(a))return kn(a,i,r,e);const{attribute:s}=sn(dn,a);return Array.isArray(i)&&i.every(c=>typeof c=="string")?(r[s]=i.join(" "),r):(r[s]=i,r)},{})}function yn(n,e,t,o){const r=h=>+h,a=h=>h.trim(),i=h=>h,s=n.replace(W,"").split(".").filter(h=>h).reduce((h,Y)=>(h[Y]=!0,h),{}),c="value",d=s.lazy?"change":"input",y=s.number?r:s.trim?a:i;return t[c]=C(e,o),t.on=t.on||{},t.on[d]=h=>o[e]=y(h),t}function vn(n,e,t,o){const r=C(e,o);return t=Object.assign(t,r),t}function bn(n,e,t,o){return n=n.replace(V,""),t.on=t.on||{},t.on[n]=()=>C(e,o),t}function kn(n,e,t,o){return n=n.replace(q,""),t[n]=C(e,o),t}const $=n=>{if(!N.includes(n)&&!(n!=null&&n.render)){const e=E(Q(n),!1);if(typeof e=="object")return e}return n};function C(n,e){const t=n.split(".").reduce((o,r)=>typeof o=="object"?o[r]:void 0,e);return typeof t>"u"?ln(n):t}function xn(n){let e="";for(const t of Object.keys(n.props||{}))if(!(!t.startsWith("#")&&!t.startsWith("v-slot:"))){e=t.split(/[:#]/,2)[1];break}return e||D}function Sn(n){return n.tag==="template"}function Cn(n){const e=[];for(const t of n){const o=e[e.length-1];t.type===x&&(o==null?void 0:o.type)===x?o.children=o.children+t.children:e.push(t)}return e}async function wn(n,e){const t=Array.from(new Set(o(n,e)));await Promise.all(t.map(async r=>{if(r!=null&&r.render)return;const a=E(r);a!=null&&a.__asyncLoader&&!a.__asyncResolved&&await a.__asyncLoader()}));function o(r,a){var c;if(r.type==="text"||r.tag==="binding")return[];const i=typeof((c=r.props)==null?void 0:c.__ignoreMap)>"u"&&a.tags[r.tag]||r.tag,s=[];r.type!=="root"&&!N.includes(i)&&s.push(i);for(const d of r.children||[])s.push(...o(d,a));return s}}export{On as default};
