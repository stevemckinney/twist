// Hide URL Bar for iOS
// http://remysharp.com/2010/08/05/doing-it-right-skipping-the-iphone-url-bar/
window.MBP=window.MBP||{};MBP.hideUrlBar=function(){/mobile/i.test(navigator.userAgent)&&!pageYOffset&&!location.hash&&setTimeout(function(){window.scrollTo(0,1);},1000);}
// Fast Buttons
// http://code.google.com/mobile/articles/fast_buttons.html 
MBP.fastButton=function(element,handler){this.element=element;this.handler=handler;element.addEventListener('touchstart',this,false);element.addEventListener('click',this,false);};MBP.fastButton.prototype.handleEvent=function(event){switch(event.type){case'touchstart':this.onTouchStart(event);break;case'touchmove':this.onTouchMove(event);break;case'touchend':this.onClick(event);break;case'click':this.onClick(event);break;}};MBP.fastButton.prototype.onTouchStart=function(event){event.stopPropagation();this.element.addEventListener('touchend',this,false);document.body.addEventListener('touchmove',this,false);this.startX=event.touches[0].clientX;this.startY=event.touches[0].clientY;this.element.style.backgroundColor="rgba(0,0,0,.7)";};MBP.fastButton.prototype.onTouchMove=function(event){if(Math.abs(event.touches[0].clientX-this.startX)>10||Math.abs(event.touches[0].clientY-this.startY)>10){this.reset();}};MBP.fastButton.prototype.onClick=function(event){event.stopPropagation();this.reset();this.handler(event);if(event.type=='touchend'){MBP.preventGhostClick(this.startX,this.startY);}
this.element.style.backgroundColor="";};MBP.fastButton.prototype.reset=function(){this.element.removeEventListener('touchend',this,false);document.body.removeEventListener('touchmove',this,false);this.element.style.backgroundColor="";};MBP.preventGhostClick=function(x,y){MBP.coords.push(x,y);window.setTimeout(function(){MBP.coords.splice(0,2);},2500);};;MBP.ghostClickHandler=function(event){for(var i=0,len=MBP.coords.length;i<len;i+=2){var x=MBP.coords[i];var y=MBP.coords[i+1];if(Math.abs(event.clientX-x)<25&&Math.abs(event.clientY-y)<25){event.stopPropagation();event.preventDefault();}}};document.addEventListener('click',MBP.ghostClickHandler,true);MBP.coords=[];MBP.splash=function(){var filename=navigator.platform==='iPad'?'h/':'l/';document.write('<link rel="apple-touch-startup-image" href="/img/'+filename+'splash.png" />');}
MBP.autogrow=function(element,lh){function handler(e){var newHeight=this.scrollHeight,currentHeight=this.clientHeight;if(newHeight>currentHeight){this.style.height=newHeight+3*textLineHeight+"px";}}
var setLineHeight=(lh)?lh:12,textLineHeight=element.currentStyle?element.currentStyle.lineHeight:getComputedStyle(element,null).lineHeight;textLineHeight=(textLineHeight.indexOf("px")==-1)?setLineHeight:parseInt(textLineHeight,10);element.style.overflow="hidden";element.addEventListener?element.addEventListener('keyup',handler,false):element.attachEvent('onkeyup',handler);}
/* modernizr */
window.Modernizr=function(B,g,n){function x(b,a){var c=b.charAt(0).toUpperCase()+b.substr(1),i;a:{c=(b+" "+I.join(c+" ")+c).split(" ");for(var d in c)if(s[c[d]]!==n&&(!a||a(c[d],y))){i=true;break a}}return!!i}var e={},p=g.documentElement,J=g.head||g.getElementsByTagName("head")[0],y=g.createElement("modernizr"),s=y.style;g.createElement("input");var K=" -webkit- -moz- -o- -ms- -khtml- ".split(" "),I="Webkit Moz O ms Khtml".split(" "),j={},C=[],t;(function(){var b={select:"input",change:"input",submit:"form",
reset:"form",error:"img",load:"img",abort:"img"};return function(a,c){c=c||g.createElement(b[a]||"div");a="on"+a;var i=a in c;if(!i){c.setAttribute||(c=g.createElement("div"));if(c.setAttribute&&c.removeAttribute){c.setAttribute(a,"");i=typeof c[a]==="function";typeof c[a]===n||(c[a]=n);c.removeAttribute(a)}}return i}})();var z={}.hasOwnProperty,D;D=typeof z!==n&&typeof z.call!==n?function(b,a){return z.call(b,a)}:function(b,a){return a in b&&typeof b.constructor.prototype[a]===n};j.backgroundsize=
function(){return x("backgroundSize")};j.borderradius=function(){return x("borderRadius","",function(b){return(""+b).indexOf("orderRadius")!==-1})};j.boxshadow=function(){return x("boxShadow")};j.textshadow=function(){return g.createElement("div").style.textShadow===""};j.opacity=function(){var b=K.join("opacity:.55;")+"";s.cssText=b;return/^0.55$/.test(s.opacity)};j.fontface=function(){var b,a=J||p,c=g.createElement("style"),i=g.implementation||{hasFeature:function(){return false}};c.type="text/css";
a.insertBefore(c,a.firstChild);b=c.sheet||c.styleSheet;a=i.hasFeature("CSS2","")?function(d){if(!(b&&d))return false;var q=false;try{b.insertRule(d,0);q=!/unknown/i.test(b.cssRules[0].cssText);b.deleteRule(b.cssRules.length-1)}catch(E){}return q}:function(d){if(!(b&&d))return false;b.cssText=d;return b.cssText.length!==0&&!/unknown/i.test(b.cssText)&&b.cssText.replace(/\r+|\n+/g,"").indexOf(d.split(" ")[0])===0};e._fontfaceready=function(d){d(e.fontface)};return a('@font-face { font-family: "font"; src: "font.ttf"; }')};
j.video=function(){var b=g.createElement("video"),a=!!b.canPlayType;if(a){a=new Boolean(a);a.ogg=b.canPlayType('video/ogg; codecs="theora"');a.h264=b.canPlayType('video/mp4; codecs="avc1.42E01E"')||b.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"');a.webm=b.canPlayType('video/webm; codecs="vp8, vorbis"')}return a};j.audio=function(){var b=g.createElement("audio"),a=!!b.canPlayType;if(a){a=new Boolean(a);a.ogg=b.canPlayType('audio/ogg; codecs="vorbis"');a.mp3=b.canPlayType("audio/mpeg;");
a.wav=b.canPlayType('audio/wav; codecs="1"');a.m4a=b.canPlayType("audio/x-m4a;")||b.canPlayType("audio/aac;")}return a};for(var A in j)if(D(j,A)){t=A.toLowerCase();e[t]=j[A]();C.push((e[t]?"":"no-")+t)}e.crosswindowmessaging=e.postmessage;e.historymanagement=e.history;e.addTest=function(b,a){b=b.toLowerCase();if(!e[b]){a=!!a();p.className+=" "+(a?"":"no-")+b;e[b]=a;return e}};s.cssText="";y=f=null;B.attachEvent&&function(){var b=g.createElement("div");b.innerHTML="<elem></elem>";return b.childNodes.length!==
1}()&&function(b,a){function c(l){for(var h=-1;++h<q;)l.createElement(d[h])}function i(l,h){for(var m=-1,k=l.length,u,F=[];++m<k;){u=l[m];if((h=u.media||h)!="screen")F.push(i(u.imports,h),u.cssText)}return F.join("")}var d="abbr|article|aside|audio|canvas|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video".split("|"),q=d.length,E=RegExp("(^|\\s)(abbr|article|aside|audio|canvas|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video)",
"gi"),L=RegExp("<(/*)(abbr|article|aside|audio|canvas|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video)","gi"),M=RegExp("(^|[^\\n]*?\\s)(abbr|article|aside|audio|canvas|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video)([^\\n]*)({[\\n\\w\\W]*?})","gi"),G=a.createDocumentFragment(),v=a.documentElement,H=v.firstChild,r=a.createElement("body"),w=a.createElement("style"),o;c(a);c(G);H.insertBefore(w,
H.firstChild);w.media="print";b.attachEvent("onbeforeprint",function(){var l=-1,h=i(a.styleSheets,"all"),m=[],k;for(o=o||a.body;(k=M.exec(h))!=null;)m.push((k[1]+k[2]+k[3]).replace(E,"$1.iepp_$2")+k[4]);for(w.styleSheet.cssText=m.join("\n");++l<q;){h=a.getElementsByTagName(d[l]);m=h.length;for(k=-1;++k<m;)if(h[k].className.indexOf("iepp_")<0)h[k].className+=" iepp_"+d[l]}G.appendChild(o);v.appendChild(r);r.className=o.className;r.innerHTML=o.innerHTML.replace(L,"<$1font")});b.attachEvent("onafterprint",
function(){r.innerHTML="";v.removeChild(r);v.appendChild(o);w.styleSheet.cssText=""})}(B,g);e._enableHTML5=true;e._version="1.6";p.className=p.className.replace(/\bno-js\b/,"")+" js";p.className+=" "+C.join(" ");return e}(this,this.document);

/* prettify */
window['PR_SHOULD_USE_CONTINUATION']=true;window['PR_TAB_WIDTH']=8;window['PR_normalizedHtml']
=window['PR']
=window['prettyPrintOne']
=window['prettyPrint']=void 0;window['_pr_isIE6']=function(){var ieVersion=navigator&&navigator.userAgent&&navigator.userAgent.match(/\bMSIE ([678])\./);ieVersion=ieVersion?+ieVersion[1]:false;window['_pr_isIE6']=function(){return ieVersion;};return ieVersion;};(function(){var FLOW_CONTROL_KEYWORDS="break continue do else for if return while ";var C_KEYWORDS=FLOW_CONTROL_KEYWORDS+"auto case char const default "+
"double enum extern float goto int long register short signed sizeof "+
"static struct switch typedef union unsigned void volatile ";var COMMON_KEYWORDS=C_KEYWORDS+"catch class delete false import "+
"new operator private protected public this throw true try typeof ";var CPP_KEYWORDS=COMMON_KEYWORDS+"alignof align_union asm axiom bool "+
"concept concept_map const_cast constexpr decltype "+
"dynamic_cast explicit export friend inline late_check "+
"mutable namespace nullptr reinterpret_cast static_assert static_cast "+
"template typeid typename using virtual wchar_t where ";var JAVA_KEYWORDS=COMMON_KEYWORDS+
"abstract boolean byte extends final finally implements import "+
"instanceof null native package strictfp super synchronized throws "+
"transient ";var CSHARP_KEYWORDS=JAVA_KEYWORDS+
"as base by checked decimal delegate descending event "+
"fixed foreach from group implicit in interface internal into is lock "+
"object out override orderby params partial readonly ref sbyte sealed "+
"stackalloc string select uint ulong unchecked unsafe ushort var ";var JSCRIPT_KEYWORDS=COMMON_KEYWORDS+
"debugger eval export function get null set undefined var with "+
"Infinity NaN ";var PERL_KEYWORDS="caller delete die do dump elsif eval exit foreach for "+
"goto if import last local my next no our print package redo require "+
"sub undef unless until use wantarray while BEGIN END ";var PYTHON_KEYWORDS=FLOW_CONTROL_KEYWORDS+"and as assert class def del "+
"elif except exec finally from global import in is lambda "+
"nonlocal not or pass print raise try with yield "+
"False True None ";var RUBY_KEYWORDS=FLOW_CONTROL_KEYWORDS+"alias and begin case class def"+
" defined elsif end ensure false in module next nil not or redo rescue "+
"retry self super then true undef unless until when yield BEGIN END ";var SH_KEYWORDS=FLOW_CONTROL_KEYWORDS+"case done elif esac eval fi "+
"function in local set then until ";var ALL_KEYWORDS=(CPP_KEYWORDS+CSHARP_KEYWORDS+JSCRIPT_KEYWORDS+PERL_KEYWORDS+
PYTHON_KEYWORDS+RUBY_KEYWORDS+SH_KEYWORDS);var PR_STRING='str';var PR_KEYWORD='kwd';var PR_COMMENT='com';var PR_TYPE='typ';var PR_LITERAL='lit';var PR_PUNCTUATION='pun';var PR_PLAIN='pln';var PR_TAG='tag';var PR_DECLARATION='dec';var PR_SOURCE='src';var PR_ATTRIB_NAME='atn';var PR_ATTRIB_VALUE='atv';var PR_NOCODE='nocode';var REGEXP_PRECEDER_PATTERN=function(){var preceders=["!","!=","!==","#","%","%=","&","&&","&&=","&=","(","*","*=","+=",",","-=","->","/","/=",":","::",";","<","<<","<<=","<=","=","==","===",">",">=",">>",">>=",">>>",">>>=","?","@","[","^","^=","^^","^^=","{","|","|=","||","||=","~","break","case","continue","delete","do","else","finally","instanceof","return","throw","try","typeof"];var pattern='(?:^^|[+-]';for(var i=0;i<preceders.length;++i){pattern+='|'+preceders[i].replace(/([^=<>:&a-z])/g,'\\$1');}
pattern+=')\\s*';return pattern;}();var pr_amp=/&/g;var pr_lt=/</g;var pr_gt=/>/g;var pr_quot=/\"/g;function attribToHtml(str){return str.replace(pr_amp,'&amp;')
.replace(pr_lt,'&lt;')
.replace(pr_gt,'&gt;')
.replace(pr_quot,'&quot;');}
function textToHtml(str){return str.replace(pr_amp,'&amp;')
.replace(pr_lt,'&lt;')
.replace(pr_gt,'&gt;');}
var pr_ltEnt=/&lt;/g;var pr_gtEnt=/&gt;/g;var pr_aposEnt=/&apos;/g;var pr_quotEnt=/&quot;/g;var pr_ampEnt=/&amp;/g;var pr_nbspEnt=/&nbsp;/g;function htmlToText(html){var pos=html.indexOf('&');if(pos<0){return html;}
for(--pos;(pos=html.indexOf('&#',pos+1))>=0;){var end=html.indexOf(';',pos);if(end>=0){var num=html.substring(pos+3,end);var radix=10;if(num&&num.charAt(0)==='x'){num=num.substring(1);radix=16;}
var codePoint=parseInt(num,radix);if(!isNaN(codePoint)){html=(html.substring(0,pos)+String.fromCharCode(codePoint)+
html.substring(end+1));}}}
return html.replace(pr_ltEnt,'<')
.replace(pr_gtEnt,'>')
.replace(pr_aposEnt,"'")
.replace(pr_quotEnt,'"')
.replace(pr_nbspEnt,' ')
.replace(pr_ampEnt,'&');}
function isRawContent(node){return'XMP'===node.tagName;}
var newlineRe=/[\r\n]/g;function isPreformatted(node,content){if('PRE'===node.tagName){return true;}
if(!newlineRe.test(content)){return true;}
var whitespace='';if(node.currentStyle){whitespace=node.currentStyle.whiteSpace;}else if(window.getComputedStyle){whitespace=window.getComputedStyle(node,null).whiteSpace;}
return!whitespace||whitespace==='pre';}
function normalizedHtml(node,out,opt_sortAttrs){switch(node.nodeType){case 1:var name=node.tagName.toLowerCase();out.push('<',name);var attrs=node.attributes;var n=attrs.length;if(n){if(opt_sortAttrs){var sortedAttrs=[];for(var i=n;--i>=0;){sortedAttrs[i]=attrs[i];}
sortedAttrs.sort(function(a,b){return(a.name<b.name)?-1:a.name===b.name?0:1;});attrs=sortedAttrs;}
for(var i=0;i<n;++i){var attr=attrs[i];if(!attr.specified){continue;}
out.push(' ',attr.name.toLowerCase(),'="',attribToHtml(attr.value),'"');}}
out.push('>');for(var child=node.firstChild;child;child=child.nextSibling){normalizedHtml(child,out,opt_sortAttrs);}
if(node.firstChild||!/^(?:br|link|img)$/.test(name)){out.push('<\/',name,'>');}
break;case 3:case 4:out.push(textToHtml(node.nodeValue));break;}}
function combinePrefixPatterns(regexs){var capturedGroupIndex=0;var needToFoldCase=false;var ignoreCase=false;for(var i=0,n=regexs.length;i<n;++i){var regex=regexs[i];if(regex.ignoreCase){ignoreCase=true;}else if(/[a-z]/i.test(regex.source.replace(/\\u[0-9a-f]{4}|\\x[0-9a-f]{2}|\\[^ux]/gi,''))){needToFoldCase=true;ignoreCase=false;break;}}
function decodeEscape(charsetPart){if(charsetPart.charAt(0)!=='\\'){return charsetPart.charCodeAt(0);}
switch(charsetPart.charAt(1)){case'b':return 8;case't':return 9;case'n':return 0xa;case'v':return 0xb;case'f':return 0xc;case'r':return 0xd;case'u':case'x':return parseInt(charsetPart.substring(2),16)
||charsetPart.charCodeAt(1);case'0':case'1':case'2':case'3':case'4':case'5':case'6':case'7':return parseInt(charsetPart.substring(1),8);default:return charsetPart.charCodeAt(1);}}
function encodeEscape(charCode){if(charCode<0x20){return(charCode<0x10?'\\x0':'\\x')+charCode.toString(16);}
var ch=String.fromCharCode(charCode);if(ch==='\\'||ch==='-'||ch==='['||ch===']'){ch='\\'+ch;}
return ch;}
function caseFoldCharset(charSet){var charsetParts=charSet.substring(1,charSet.length-1).match(new RegExp('\\\\u[0-9A-Fa-f]{4}'
+'|\\\\x[0-9A-Fa-f]{2}'
+'|\\\\[0-3][0-7]{0,2}'
+'|\\\\[0-7]{1,2}'
+'|\\\\[\\s\\S]'
+'|-'
+'|[^-\\\\]','g'));var groups=[];var ranges=[];var inverse=charsetParts[0]==='^';for(var i=inverse?1:0,n=charsetParts.length;i<n;++i){var p=charsetParts[i];switch(p){case'\\B':case'\\b':case'\\D':case'\\d':case'\\S':case'\\s':case'\\W':case'\\w':groups.push(p);continue;}
var start=decodeEscape(p);var end;if(i+2<n&&'-'===charsetParts[i+1]){end=decodeEscape(charsetParts[i+2]);i+=2;}else{end=start;}
ranges.push([start,end]);if(!(end<65||start>122)){if(!(end<65||start>90)){ranges.push([Math.max(65,start)|32,Math.min(end,90)|32]);}
if(!(end<97||start>122)){ranges.push([Math.max(97,start)&~32,Math.min(end,122)&~32]);}}}
ranges.sort(function(a,b){return(a[0]-b[0])||(b[1]-a[1]);});var consolidatedRanges=[];var lastRange=[NaN,NaN];for(var i=0;i<ranges.length;++i){var range=ranges[i];if(range[0]<=lastRange[1]+1){lastRange[1]=Math.max(lastRange[1],range[1]);}else{consolidatedRanges.push(lastRange=range);}}
var out=['['];if(inverse){out.push('^');}
out.push.apply(out,groups);for(var i=0;i<consolidatedRanges.length;++i){var range=consolidatedRanges[i];out.push(encodeEscape(range[0]));if(range[1]>range[0]){if(range[1]+1>range[0]){out.push('-');}
out.push(encodeEscape(range[1]));}}
out.push(']');return out.join('');}
function allowAnywhereFoldCaseAndRenumberGroups(regex){var parts=regex.source.match(new RegExp('(?:'
+'\\[(?:[^\\x5C\\x5D]|\\\\[\\s\\S])*\\]'
+'|\\\\u[A-Fa-f0-9]{4}'
+'|\\\\x[A-Fa-f0-9]{2}'
+'|\\\\[0-9]+'
+'|\\\\[^ux0-9]'
+'|\\(\\?[:!=]'
+'|[\\(\\)\\^]'
+'|[^\\x5B\\x5C\\(\\)\\^]+'
+')','g'));var n=parts.length;var capturedGroups=[];for(var i=0,groupIndex=0;i<n;++i){var p=parts[i];if(p==='('){++groupIndex;}else if('\\'===p.charAt(0)){var decimalValue=+p.substring(1);if(decimalValue&&decimalValue<=groupIndex){capturedGroups[decimalValue]=-1;}}}
for(var i=1;i<capturedGroups.length;++i){if(-1===capturedGroups[i]){capturedGroups[i]=++capturedGroupIndex;}}
for(var i=0,groupIndex=0;i<n;++i){var p=parts[i];if(p==='('){++groupIndex;if(capturedGroups[groupIndex]===undefined){parts[i]='(?:';}}else if('\\'===p.charAt(0)){var decimalValue=+p.substring(1);if(decimalValue&&decimalValue<=groupIndex){parts[i]='\\'+capturedGroups[groupIndex];}}}
for(var i=0,groupIndex=0;i<n;++i){if('^'===parts[i]&&'^'!==parts[i+1]){parts[i]='';}}
if(regex.ignoreCase&&needToFoldCase){for(var i=0;i<n;++i){var p=parts[i];var ch0=p.charAt(0);if(p.length>=2&&ch0==='['){parts[i]=caseFoldCharset(p);}else if(ch0!=='\\'){parts[i]=p.replace(/[a-zA-Z]/g,function(ch){var cc=ch.charCodeAt(0);return'['+String.fromCharCode(cc&~32,cc|32)+']';});}}}
return parts.join('');}
var rewritten=[];for(var i=0,n=regexs.length;i<n;++i){var regex=regexs[i];if(regex.global||regex.multiline){throw new Error(''+regex);}
rewritten.push('(?:'+allowAnywhereFoldCaseAndRenumberGroups(regex)+')');}
return new RegExp(rewritten.join('|'),ignoreCase?'gi':'g');}
var PR_innerHtmlWorks=null;function getInnerHtml(node){if(null===PR_innerHtmlWorks){var testNode=document.createElement('PRE');testNode.appendChild(document.createTextNode('<!DOCTYPE foo PUBLIC "foo bar">\n<foo />'));PR_innerHtmlWorks=!/</.test(testNode.innerHTML);}
if(PR_innerHtmlWorks){var content=node.innerHTML;if(isRawContent(node)){content=textToHtml(content);}else if(!isPreformatted(node,content)){content=content.replace(/(<br\s*\/?>)[\r\n]+/g,'$1')
.replace(/(?:[\r\n]+[ \t]*)+/g,' ');}
return content;}
var out=[];for(var child=node.firstChild;child;child=child.nextSibling){normalizedHtml(child,out);}
return out.join('');}
function makeTabExpander(tabWidth){var SPACES='                ';var charInLine=0;return function(plainText){var out=null;var pos=0;for(var i=0,n=plainText.length;i<n;++i){var ch=plainText.charAt(i);switch(ch){case'\t':if(!out){out=[];}
out.push(plainText.substring(pos,i));var nSpaces=tabWidth-(charInLine%tabWidth);charInLine+=nSpaces;for(;nSpaces>=0;nSpaces-=SPACES.length){out.push(SPACES.substring(0,nSpaces));}
pos=i+1;break;case'\n':charInLine=0;break;default:++charInLine;}}
if(!out){return plainText;}
out.push(plainText.substring(pos));return out.join('');};}
var pr_chunkPattern=new RegExp('[^<]+'
+'|<\!--[\\s\\S]*?--\>'
+'|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>'
+'|<\/?[a-zA-Z](?:[^>\"\']|\'[^\']*\'|\"[^\"]*\")*>'
+'|<','g');var pr_commentPrefix=/^<\!--/;var pr_cdataPrefix=/^<!\[CDATA\[/;var pr_brPrefix=/^<br\b/i;var pr_tagNameRe=/^<(\/?)([a-zA-Z][a-zA-Z0-9]*)/;function extractTags(s){var matches=s.match(pr_chunkPattern);var sourceBuf=[];var sourceBufLen=0;var extractedTags=[];if(matches){for(var i=0,n=matches.length;i<n;++i){var match=matches[i];if(match.length>1&&match.charAt(0)==='<'){if(pr_commentPrefix.test(match)){continue;}
if(pr_cdataPrefix.test(match)){sourceBuf.push(match.substring(9,match.length-3));sourceBufLen+=match.length-12;}else if(pr_brPrefix.test(match)){sourceBuf.push('\n');++sourceBufLen;}else{if(match.indexOf(PR_NOCODE)>=0&&isNoCodeTag(match)){var name=match.match(pr_tagNameRe)[2];var depth=1;var j;end_tag_loop:for(j=i+1;j<n;++j){var name2=matches[j].match(pr_tagNameRe);if(name2&&name2[2]===name){if(name2[1]==='/'){if(--depth===0){break end_tag_loop;}}else{++depth;}}}
if(j<n){extractedTags.push(sourceBufLen,matches.slice(i,j+1).join(''));i=j;}else{extractedTags.push(sourceBufLen,match);}}else{extractedTags.push(sourceBufLen,match);}}}else{var literalText=htmlToText(match);sourceBuf.push(literalText);sourceBufLen+=literalText.length;}}}
return{source:sourceBuf.join(''),tags:extractedTags};}
function isNoCodeTag(tag){return!!tag
.replace(/\s(\w+)\s*=\s*(?:\"([^\"]*)\"|'([^\']*)'|(\S+))/g,' $1="$2$3$4"')
.match(/[cC][lL][aA][sS][sS]=\"[^\"]*\bnocode\b/);}
function appendDecorations(basePos,sourceCode,langHandler,out){if(!sourceCode){return;}
var job={source:sourceCode,basePos:basePos};langHandler(job);out.push.apply(out,job.decorations);}
function createSimpleLexer(shortcutStylePatterns,fallthroughStylePatterns){var shortcuts={};var tokenizer;(function(){var allPatterns=shortcutStylePatterns.concat(fallthroughStylePatterns);var allRegexs=[];var regexKeys={};for(var i=0,n=allPatterns.length;i<n;++i){var patternParts=allPatterns[i];var shortcutChars=patternParts[3];if(shortcutChars){for(var c=shortcutChars.length;--c>=0;){shortcuts[shortcutChars.charAt(c)]=patternParts;}}
var regex=patternParts[1];var k=''+regex;if(!regexKeys.hasOwnProperty(k)){allRegexs.push(regex);regexKeys[k]=null;}}
allRegexs.push(/[\0-\uffff]/);tokenizer=combinePrefixPatterns(allRegexs);})();var nPatterns=fallthroughStylePatterns.length;var notWs=/\S/;var decorate=function(job){var sourceCode=job.source,basePos=job.basePos;var decorations=[basePos,PR_PLAIN];var pos=0;var tokens=sourceCode.match(tokenizer)||[];var styleCache={};for(var ti=0,nTokens=tokens.length;ti<nTokens;++ti){var token=tokens[ti];var style=styleCache[token];var match=void 0;var isEmbedded;if(typeof style==='string'){isEmbedded=false;}else{var patternParts=shortcuts[token.charAt(0)];if(patternParts){match=token.match(patternParts[1]);style=patternParts[0];}else{for(var i=0;i<nPatterns;++i){patternParts=fallthroughStylePatterns[i];match=token.match(patternParts[1]);if(match){style=patternParts[0];break;}}
if(!match){style=PR_PLAIN;}}
isEmbedded=style.length>=5&&'lang-'===style.substring(0,5);if(isEmbedded&&!(match&&typeof match[1]==='string')){isEmbedded=false;style=PR_SOURCE;}
if(!isEmbedded){styleCache[token]=style;}}
var tokenStart=pos;pos+=token.length;if(!isEmbedded){decorations.push(basePos+tokenStart,style);}else{var embeddedSource=match[1];var embeddedSourceStart=token.indexOf(embeddedSource);var embeddedSourceEnd=embeddedSourceStart+embeddedSource.length;if(match[2]){embeddedSourceEnd=token.length-match[2].length;embeddedSourceStart=embeddedSourceEnd-embeddedSource.length;}
var lang=style.substring(5);appendDecorations(basePos+tokenStart,token.substring(0,embeddedSourceStart),decorate,decorations);appendDecorations(basePos+tokenStart+embeddedSourceStart,embeddedSource,langHandlerForExtension(lang,embeddedSource),decorations);appendDecorations(basePos+tokenStart+embeddedSourceEnd,token.substring(embeddedSourceEnd),decorate,decorations);}}
job.decorations=decorations;};return decorate;}
function sourceDecorator(options){var shortcutStylePatterns=[],fallthroughStylePatterns=[];if(options['tripleQuotedStrings']){shortcutStylePatterns.push([PR_STRING,/^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/,null,'\'"']);}else if(options['multiLineStrings']){shortcutStylePatterns.push([PR_STRING,/^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/,null,'\'"`']);}else{shortcutStylePatterns.push([PR_STRING,/^(?:\'(?:[^\\\'\r\n]|\\.)*(?:\'|$)|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/,null,'"\'']);}
if(options['verbatimStrings']){fallthroughStylePatterns.push([PR_STRING,/^@\"(?:[^\"]|\"\")*(?:\"|$)/,null]);}
if(options['hashComments']){if(options['cStyleComments']){shortcutStylePatterns.push([PR_COMMENT,/^#(?:(?:define|elif|else|endif|error|ifdef|include|ifndef|line|pragma|undef|warning)\b|[^\r\n]*)/,null,'#']);fallthroughStylePatterns.push([PR_STRING,/^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h|[a-z]\w*)>/,null]);}else{shortcutStylePatterns.push([PR_COMMENT,/^#[^\r\n]*/,null,'#']);}}
if(options['cStyleComments']){fallthroughStylePatterns.push([PR_COMMENT,/^\/\/[^\r\n]*/,null]);fallthroughStylePatterns.push([PR_COMMENT,/^\/\*[\s\S]*?(?:\*\/|$)/,null]);}
if(options['regexLiterals']){var REGEX_LITERAL=('/(?=[^/*])'
+'(?:[^/\\x5B\\x5C]'
+'|\\x5C[\\s\\S]'
+'|\\x5B(?:[^\\x5C\\x5D]|\\x5C[\\s\\S])*(?:\\x5D|$))+'
+'/');fallthroughStylePatterns.push(['lang-regex',new RegExp('^'+REGEXP_PRECEDER_PATTERN+'('+REGEX_LITERAL+')')]);}
var keywords=options['keywords'].replace(/^\s+|\s+$/g,'');if(keywords.length){fallthroughStylePatterns.push([PR_KEYWORD,new RegExp('^(?:'+keywords.replace(/\s+/g,'|')+')\\b'),null]);}
shortcutStylePatterns.push([PR_PLAIN,/^\s+/,null,' \r\n\t\xA0']);fallthroughStylePatterns.push([PR_LITERAL,/^@[a-z_$][a-z_$@0-9]*/i,null],[PR_TYPE,/^@?[A-Z]+[a-z][A-Za-z_$@0-9]*/,null],[PR_PLAIN,/^[a-z_$][a-z_$@0-9]*/i,null],[PR_LITERAL,new RegExp('^(?:'
+'0x[a-f0-9]+'
+'|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)'
+'(?:e[+\\-]?\\d+)?'
+')'
+'[a-z]*','i'),null,'0123456789'],[PR_PUNCTUATION,/^.[^\s\w\.$@\'\"\`\/\#]*/,null]);return createSimpleLexer(shortcutStylePatterns,fallthroughStylePatterns);}
var decorateSource=sourceDecorator({'keywords':ALL_KEYWORDS,'hashComments':true,'cStyleComments':true,'multiLineStrings':true,'regexLiterals':true});function recombineTagsAndDecorations(job){var sourceText=job.source;var extractedTags=job.extractedTags;var decorations=job.decorations;var html=[];var outputIdx=0;var openDecoration=null;var currentDecoration=null;var tagPos=0;var decPos=0;var tabExpander=makeTabExpander(window['PR_TAB_WIDTH']);var adjacentSpaceRe=/([\r\n ]) /g;var startOrSpaceRe=/(^| ) /gm;var newlineRe=/\r\n?|\n/g;var trailingSpaceRe=/[ \r\n]$/;var lastWasSpace=true;var isIE678=window['_pr_isIE6']();var lineBreakHtml=(isIE678
?(job.sourceNode.tagName==='PRE'
?(isIE678===6?'&#160;\r\n':isIE678===7?'&#160;<br>\r':'&#160;\r')
:'&#160;<br />')
:'<br />');var numberLines=job.sourceNode.className.match(/\blinenums\b(?::(\d+))?/);var lineBreaker;if(numberLines){var lineBreaks=[];for(var i=0;i<10;++i){lineBreaks[i]=lineBreakHtml+'</li><li class="L'+i+'">';}
var lineNum=numberLines[1]&&numberLines[1].length
?numberLines[1]-1:0;html.push('<ol class="linenums"><li class="L',(lineNum)%10,'"');if(lineNum){html.push(' value="',lineNum+1,'"');}
html.push('>');lineBreaker=function(){var lb=lineBreaks[++lineNum%10];return openDecoration
?('</span>'+lb+'<span class="'+openDecoration+'">'):lb;};}else{lineBreaker=lineBreakHtml;}
function emitTextUpTo(sourceIdx){if(sourceIdx>outputIdx){if(openDecoration&&openDecoration!==currentDecoration){html.push('</span>');openDecoration=null;}
if(!openDecoration&&currentDecoration){openDecoration=currentDecoration;html.push('<span class="',openDecoration,'">');}
var htmlChunk=textToHtml(tabExpander(sourceText.substring(outputIdx,sourceIdx)))
.replace(lastWasSpace
?startOrSpaceRe
:adjacentSpaceRe,'$1&#160;');lastWasSpace=trailingSpaceRe.test(htmlChunk);html.push(htmlChunk.replace(newlineRe,lineBreaker));outputIdx=sourceIdx;}}
while(true){var outputTag;if(tagPos<extractedTags.length){if(decPos<decorations.length){outputTag=extractedTags[tagPos]<=decorations[decPos];}else{outputTag=true;}}else{outputTag=false;}
if(outputTag){emitTextUpTo(extractedTags[tagPos]);if(openDecoration){html.push('</span>');openDecoration=null;}
html.push(extractedTags[tagPos+1]);tagPos+=2;}else if(decPos<decorations.length){emitTextUpTo(decorations[decPos]);currentDecoration=decorations[decPos+1];decPos+=2;}else{break;}}
emitTextUpTo(sourceText.length);if(openDecoration){html.push('</span>');}
if(numberLines){html.push('</li></ol>');}
job.prettyPrintedHtml=html.join('');}
var langHandlerRegistry={};function registerLangHandler(handler,fileExtensions){for(var i=fileExtensions.length;--i>=0;){var ext=fileExtensions[i];if(!langHandlerRegistry.hasOwnProperty(ext)){langHandlerRegistry[ext]=handler;}else if('console'in window){console['warn']('cannot override language handler %s',ext);}}}
function langHandlerForExtension(extension,source){if(!(extension&&langHandlerRegistry.hasOwnProperty(extension))){extension=/^\s*</.test(source)
?'default-markup'
:'default-code';}
return langHandlerRegistry[extension];}
registerLangHandler(decorateSource,['default-code']);registerLangHandler(createSimpleLexer([],[[PR_PLAIN,/^[^<?]+/],[PR_DECLARATION,/^<!\w[^>]*(?:>|$)/],[PR_COMMENT,/^<\!--[\s\S]*?(?:-\->|$)/],['lang-',/^<\?([\s\S]+?)(?:\?>|$)/],['lang-',/^<%([\s\S]+?)(?:%>|$)/],[PR_PUNCTUATION,/^(?:<[%?]|[%?]>)/],['lang-',/^<xmp\b[^>]*>([\s\S]+?)<\/xmp\b[^>]*>/i],['lang-js',/^<script\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i],['lang-css',/^<style\b[^>]*>([\s\S]*?)(<\/style\b[^>]*>)/i],['lang-in.tag',/^(<\/?[a-z][^<>]*>)/i]]),['default-markup','htm','html','mxml','xhtml','xml','xsl']);registerLangHandler(createSimpleLexer([[PR_PLAIN,/^[\s]+/,null,' \t\r\n'],[PR_ATTRIB_VALUE,/^(?:\"[^\"]*\"?|\'[^\']*\'?)/,null,'\"\'']],[[PR_TAG,/^^<\/?[a-z](?:[\w.:-]*\w)?|\/?>$/i],[PR_ATTRIB_NAME,/^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],['lang-uq.val',/^=\s*([^>\'\"\s]*(?:[^>\'\"\s\/]|\/(?=\s)))/],[PR_PUNCTUATION,/^[=<>\/]+/],['lang-js',/^on\w+\s*=\s*\"([^\"]+)\"/i],['lang-js',/^on\w+\s*=\s*\'([^\']+)\'/i],['lang-js',/^on\w+\s*=\s*([^\"\'>\s]+)/i],['lang-css',/^style\s*=\s*\"([^\"]+)\"/i],['lang-css',/^style\s*=\s*\'([^\']+)\'/i],['lang-css',/^style\s*=\s*([^\"\'>\s]+)/i]]),['in.tag']);registerLangHandler(createSimpleLexer([],[[PR_ATTRIB_VALUE,/^[\s\S]+/]]),['uq.val']);registerLangHandler(sourceDecorator({'keywords':CPP_KEYWORDS,'hashComments':true,'cStyleComments':true}),['c','cc','cpp','cxx','cyc','m']);registerLangHandler(sourceDecorator({'keywords':'null true false'}),['json']);registerLangHandler(sourceDecorator({'keywords':CSHARP_KEYWORDS,'hashComments':true,'cStyleComments':true,'verbatimStrings':true}),['cs']);registerLangHandler(sourceDecorator({'keywords':JAVA_KEYWORDS,'cStyleComments':true}),['java']);registerLangHandler(sourceDecorator({'keywords':SH_KEYWORDS,'hashComments':true,'multiLineStrings':true}),['bsh','csh','sh']);registerLangHandler(sourceDecorator({'keywords':PYTHON_KEYWORDS,'hashComments':true,'multiLineStrings':true,'tripleQuotedStrings':true}),['cv','py']);registerLangHandler(sourceDecorator({'keywords':PERL_KEYWORDS,'hashComments':true,'multiLineStrings':true,'regexLiterals':true}),['perl','pl','pm']);registerLangHandler(sourceDecorator({'keywords':RUBY_KEYWORDS,'hashComments':true,'multiLineStrings':true,'regexLiterals':true}),['rb']);registerLangHandler(sourceDecorator({'keywords':JSCRIPT_KEYWORDS,'cStyleComments':true,'regexLiterals':true}),['js']);registerLangHandler(createSimpleLexer([],[[PR_STRING,/^[\s\S]+/]]),['regex']);function applyDecorator(job){var sourceCodeHtml=job.sourceCodeHtml;var opt_langExtension=job.langExtension;job.prettyPrintedHtml=sourceCodeHtml;try{var sourceAndExtractedTags=extractTags(sourceCodeHtml);var source=sourceAndExtractedTags.source;job.source=source;job.basePos=0;job.extractedTags=sourceAndExtractedTags.tags;langHandlerForExtension(opt_langExtension,source)(job);recombineTagsAndDecorations(job);}catch(e){if('console'in window){console['log'](e&&e['stack']?e['stack']:e);}}}
function prettyPrintOne(sourceCodeHtml,opt_langExtension){var job={sourceCodeHtml:sourceCodeHtml,langExtension:opt_langExtension};applyDecorator(job);return job.prettyPrintedHtml;}
function prettyPrint(opt_whenDone){function byTagName(tn){return document.getElementsByTagName(tn);}
var codeSegments=[byTagName('pre'),byTagName('code'),byTagName('xmp')];var elements=[];for(var i=0;i<codeSegments.length;++i){for(var j=0,n=codeSegments[i].length;j<n;++j){elements.push(codeSegments[i][j]);}}
codeSegments=null;var clock=Date;if(!clock['now']){clock={'now':function(){return(new Date).getTime();}};}
var k=0;var prettyPrintingJob;function doWork(){var endTime=(window['PR_SHOULD_USE_CONTINUATION']?clock.now()+250:Infinity);for(;k<elements.length&&clock.now()<endTime;k++){var cs=elements[k];if(cs.className&&cs.className.indexOf('prettyprint')>=0){var langExtension=cs.className.match(/\blang-(\w+)\b/);if(langExtension){langExtension=langExtension[1];}
var nested=false;for(var p=cs.parentNode;p;p=p.parentNode){if((p.tagName==='pre'||p.tagName==='code'||p.tagName==='xmp')&&p.className&&p.className.indexOf('prettyprint')>=0){nested=true;break;}}
if(!nested){var content=getInnerHtml(cs);content=content.replace(/(?:\r\n?|\n)$/,'');prettyPrintingJob={sourceCodeHtml:content,langExtension:langExtension,sourceNode:cs};applyDecorator(prettyPrintingJob);replaceWithPrettyPrintedHtml();}}}
if(k<elements.length){setTimeout(doWork,250);}else if(opt_whenDone){opt_whenDone();}}
function replaceWithPrettyPrintedHtml(){var newContent=prettyPrintingJob.prettyPrintedHtml;if(!newContent){return;}
var cs=prettyPrintingJob.sourceNode;if(!isRawContent(cs)){cs.innerHTML=newContent;}else{var pre=document.createElement('PRE');for(var i=0;i<cs.attributes.length;++i){var a=cs.attributes[i];if(a.specified){var aname=a.name.toLowerCase();if(aname==='class'){pre.className=a.value;}else{pre.setAttribute(a.name,a.value);}}}
pre.innerHTML=newContent;cs.parentNode.replaceChild(pre,cs);cs=pre;}}
doWork();}
window['PR_normalizedHtml']=normalizedHtml;window['prettyPrintOne']=prettyPrintOne;window['prettyPrint']=prettyPrint;window['PR']={'combinePrefixPatterns':combinePrefixPatterns,'createSimpleLexer':createSimpleLexer,'registerLangHandler':registerLangHandler,'sourceDecorator':sourceDecorator,'PR_ATTRIB_NAME':PR_ATTRIB_NAME,'PR_ATTRIB_VALUE':PR_ATTRIB_VALUE,'PR_COMMENT':PR_COMMENT,'PR_DECLARATION':PR_DECLARATION,'PR_KEYWORD':PR_KEYWORD,'PR_LITERAL':PR_LITERAL,'PR_NOCODE':PR_NOCODE,'PR_PLAIN':PR_PLAIN,'PR_PUNCTUATION':PR_PUNCTUATION,'PR_SOURCE':PR_SOURCE,'PR_STRING':PR_STRING,'PR_TAG':PR_TAG,'PR_TYPE':PR_TYPE};})();

/* Lettering.JS 0.6 by Dave Rupert  - http://daverupert.com */
(function($){var methods={init:function(){return this.each(function(){return injector($(this),'','char','')})},words:function(){return this.each(function(){return injector($(this),' ','word',' ')})},lines:function(){return this.each(function(){var t=$(this),r="eefec303079ad17405c889e092e105b0";t.children("br").replaceWith(r);return injector(t,r,'line','')})}};function injector(t,splitter,klass,after){var a=t.text().split(splitter),inject='';if(a.length>0){$(a).each(function(i,item){inject+='<span class="'+klass+(i+1)+'">'+item+'</span>'+after});t.empty();t.append(inject)}}$.fn.lettering=function(method){if(methods[method]){return methods[method].apply(this,Array.prototype.slice.call(arguments,1))}else if(method=='letters'||!method){return methods.init.apply(this,arguments)}else{$.error('Method '+method+' does not exist on jQuery.lettering')}}})(jQuery);

/**
 * jQuery Plugin "jribbble" 0.11.0
 * Author: Tyler Gaw - http://tylergaw.com
 * LastChanged: 09/06/2010
 * 
 * A jQuery plugin to fetch data from the Dribbble API - http://dribbble.com/api
 *
 */
(function(a){a.fn.jribbble=function(){this.makeRequest=function(b,c,d){b=b.replace("//","/");a.ajax({data:d,dataType:"jsonp",success:function(e){a.isFunction(c)&&c(e)},type:"GET",url:a.jribbble.baseUrl+b})};return this};a.jribbble={};a.jribbble.baseUrl="http://api.dribbble.com";a.jribbble.paths={shots:"/shots/",rebounds:"/rebounds/",following:"/following/",players:"/players/",followers:"/followers/",draftees:"/draftees/",comments:"/comments/"};a.jribbble.getShotById=function(b,c){var d=a.jribbble.paths.shots+
b;a.fn.jribbble().makeRequest(d,c)};a.jribbble.getReboundsOfShot=function(b,c,d){b=a.jribbble.paths.shots+b+a.jribbble.paths.rebounds;a.fn.jribbble().makeRequest(b,c,d)};a.jribbble.getShotsByList=function(b,c,d){b=a.jribbble.paths.shots+b;a.fn.jribbble().makeRequest(b,c,d)};a.jribbble.getShotsByPlayerId=function(b,c,d){b=a.jribbble.paths.players+b+a.jribbble.paths.shots;a.fn.jribbble().makeRequest(b,c,d)};a.jribbble.getShotsThatPlayerFollows=function(b,c,d){b=a.jribbble.paths.players+b+a.jribbble.paths.shots+
a.jribbble.paths.following;a.fn.jribbble().makeRequest(b,c,d)};a.jribbble.getPlayerById=function(b,c){var d=a.jribbble.paths.players+b;a.fn.jribbble().makeRequest(d,c)};a.jribbble.getPlayerFollowers=function(b,c,d){b=a.jribbble.paths.players+b+a.jribbble.paths.followers;a.fn.jribbble().makeRequest(b,c,d)};a.jribbble.getPlayerFollowing=function(b,c,d){b=a.jribbble.paths.players+b+a.jribbble.paths.following;a.fn.jribbble().makeRequest(b,c,d)};a.jribbble.getPlayerDraftees=function(b,c,d){b=a.jribbble.paths.players+
b+a.jribbble.paths.draftees;a.fn.jribbble().makeRequest(b,c,d)};a.jribbble.getCommentsOfShot=function(b,c,d){b=a.jribbble.paths.shots+b+a.jribbble.paths.comments;a.fn.jribbble().makeRequest(b,c,d)}})(jQuery);

/* jribbble output */

$.jribbble.getShotsByPlayerId('stevemckinney',
function (playerShots) {
var html = '';

$.each(playerShots.shots, function (i, shot) {

html += '<li><figure><a href="' + shot.url + '" title="' + shot.title + '">';
html += '<img src="' + shot.image_url + '" ';
html += 'alt="' + shot.title + '"></a>';
html += '<figcaption><a href="' + shot.url + '" title="Click to view ' + shot.title + ' in full.">' + shot.title + '</a><span>' + shot.likes_count + '&nbsp;&hearts;</span></figcaption></figure></li>';
});

$(".dribbble").html(html);
},
{page: 1, per_page: 4}
);

/* additions for the page */
Modernizr.addTest('backgroundclip',function(){var div = document.createElement('div'); if ('backgroundClip' in div.style) return true; 'Webkit Moz O ms Khtml'.replace(/([A-Za-z]*)/g,function(val){ if (val+'BackgroundClip' in div.style) return true; });});

// $(window).load(function() {$('a[data-image]').html(function(index){var image = $(this).attr('data-image');var alt = $(this).text();var img = '<img src="' + image + '" alt="A small version of ' + alt + '">';$(this).replaceWith(img);});});

var disqus_iframe_css = "assets/css/disqus.css";

$(document).ready(function() {
	//$("pre").addClass("prettyprint");
	//$(".dsq-comment-message pre").addClass("prettyprint");
  //$("h1").lettering();
  
	//var page = window.location.pathname;
	//var name = page.split('/')
	
	//if(name[2] == "entry") {
		prettyPrint();
	//}
});