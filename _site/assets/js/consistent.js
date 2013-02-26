/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 * MIT license http://www.opensource.org/licenses/mit-license.php/
 * @author Lea Verou http://lea.verou.me
 */(function(){var e=/\blang(?:uage)?-(?!\*)(\w+)\b/i,t=self.Prism={util:{type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},clone:function(e){var n=t.util.type(e);switch(n){case"Object":var r={};for(var i in e)e.hasOwnProperty(i)&&(r[i]=t.util.clone(e[i]));return r;case"Array":return e.slice()}return e}},languages:{extend:function(e,n){var r=t.util.clone(t.languages[e]);for(var i in n)r[i]=n[i];return r},insertBefore:function(e,n,r,i){i=i||t.languages;var s=i[e],o={};for(var u in s)if(s.hasOwnProperty(u)){if(u==n)for(var a in r)r.hasOwnProperty(a)&&(o[a]=r[a]);o[u]=s[u]}return i[e]=o},DFS:function(e,n){for(var r in e){n.call(e,r,e[r]);t.util.type(e)==="Object"&&t.languages.DFS(e[r],n)}}},highlightAll:function(e,n){var r=document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code');for(var i=0,s;s=r[i++];)t.highlightElement(s,e===!0,n)},highlightElement:function(r,i,s){var o,u,a=r;while(a&&!e.test(a.className))a=a.parentNode;if(a){o=(a.className.match(e)||[,""])[1];u=t.languages[o]}if(!u)return;r.className=r.className.replace(e,"").replace(/\s+/g," ")+" language-"+o;a=r.parentNode;/pre/i.test(a.nodeName)&&(a.className=a.className.replace(e,"").replace(/\s+/g," ")+" language-"+o);var f=r.textContent;if(!f)return;f=f.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\u00a0/g," ");var l={element:r,language:o,grammar:u,code:f};t.hooks.run("before-highlight",l);if(i&&self.Worker){var c=new Worker(t.filename);c.onmessage=function(e){l.highlightedCode=n.stringify(JSON.parse(e.data));l.element.innerHTML=l.highlightedCode;s&&s.call(l.element);t.hooks.run("after-highlight",l)};c.postMessage(JSON.stringify({language:l.language,code:l.code}))}else{l.highlightedCode=t.highlight(l.code,l.grammar);l.element.innerHTML=l.highlightedCode;s&&s.call(r);t.hooks.run("after-highlight",l)}},highlight:function(e,r){return n.stringify(t.tokenize(e,r))},tokenize:function(e,n){var r=t.Token,i=[e],s=n.rest;if(s){for(var o in s)n[o]=s[o];delete n.rest}e:for(var o in n){if(!n.hasOwnProperty(o)||!n[o])continue;var u=n[o],a=u.inside,f=!!u.lookbehind||0;u=u.pattern||u;for(var l=0;l<i.length;l++){var c=i[l];if(i.length>e.length)break e;if(c instanceof r)continue;u.lastIndex=0;var h=u.exec(c);if(h){f&&(f=h[1].length);var p=h.index-1+f,h=h[0].slice(f),d=h.length,v=p+d,m=c.slice(0,p+1),g=c.slice(v+1),y=[l,1];m&&y.push(m);var b=new r(o,a?t.tokenize(h,a):h);y.push(b);g&&y.push(g);Array.prototype.splice.apply(i,y)}}}return i},hooks:{all:{},add:function(e,n){var r=t.hooks.all;r[e]=r[e]||[];r[e].push(n)},run:function(e,n){var r=t.hooks.all[e];if(!r||!r.length)return;for(var i=0,s;s=r[i++];)s(n)}}},n=t.Token=function(e,t){this.type=e;this.content=t};n.stringify=function(e){if(typeof e=="string")return e;if(Object.prototype.toString.call(e)=="[object Array]"){for(var r=0;r<e.length;r++)e[r]=n.stringify(e[r]);return e.join("")}var i={type:e.type,content:n.stringify(e.content),tag:"span",classes:["token",e.type],attributes:{}};i.type=="comment"&&(i.attributes.spellcheck="true");t.hooks.run("wrap",i);var s="";for(var o in i.attributes)s+=o+'="'+(i.attributes[o]||"")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'" '+s+">"+i.content+"</"+i.tag+">"};if(!self.document){self.addEventListener("message",function(e){var n=JSON.parse(e.data),r=n.language,i=n.code;self.postMessage(JSON.stringify(t.tokenize(i,t.languages[r])));self.close()},!1);return}var r=document.getElementsByTagName("script");r=r[r.length-1];if(r){t.filename=r.src;document.addEventListener&&!r.hasAttribute("data-manual")&&document.addEventListener("DOMContentLoaded",t.highlightAll)}})();;
Prism.languages.markup={comment:/&lt;!--[\w\W]*?--(&gt;|&gt;)/g,prolog:/&lt;\?.+?\?&gt;/,doctype:/&lt;!DOCTYPE.+?&gt;/,cdata:/&lt;!\[CDATA\[[\w\W]+?]]&gt;/i,tag:{pattern:/&lt;\/?[\w:-]+\s*(?:\s+[\w:-]+(?:=(?:("|')(\\?[\w\W])*?\1|\w+))?\s*)*\/?&gt;/gi,inside:{tag:{pattern:/^&lt;\/?[\w:-]+/i,inside:{punctuation:/^&lt;\/?/,namespace:/^[\w-]+?:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/gi,inside:{punctuation:/=|&gt;|"/g}},punctuation:/\/?&gt;/g,"attr-name":{pattern:/[\w:-]+/g,inside:{namespace:/^[\w-]+?:/}}}},entity:/&amp;#?[\da-z]{1,8};/gi};Prism.hooks.add("wrap",function(e){e.type==="entity"&&(e.attributes.title=e.content.replace(/&amp;/,"&"))});;
Prism.languages.css={comment:/\/\*[\w\W]*?\*\//g,atrule:/@[\w-]+?(\s+[^;{]+)?(?=\s*{|\s*;)/gi,url:/url\((["']?).*?\1\)/gi,selector:/[^\{\}\s][^\{\}]*(?=\s*\{)/g,property:/(\b|\B)[a-z-]+(?=\s*:)/ig,string:/("|')(\\?.)*?\1/g,important:/\B!important\b/gi,ignore:/&(lt|gt|amp);/gi,punctuation:/[\{\};:]/g};Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{style:{pattern:/(&lt;|<)style[\w\W]*?(>|&gt;)[\w\W]*?(&lt;|<)\/style(>|&gt;)/ig,inside:{tag:{pattern:/(&lt;|<)style[\w\W]*?(>|&gt;)|(&lt;|<)\/style(>|&gt;)/ig,inside:Prism.languages.markup.tag.inside},rest:Prism.languages.css}}});;
Prism.languages.clike={comment:{pattern:/(^|[^\\])(\/\*[\w\W]*?\*\/|\/\/.*?(\r?\n|$))/g,lookbehind:!0},string:/("|')(\\?.)*?\1/g,keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|catch|finally|null|break|continue)\b/g,"boolean":/\b(true|false)\b/g,number:/\b-?(0x)?\d*\.?[\da-f]+\b/g,operator:/[-+]{1,2}|!|=?&lt;|=?&gt;|={1,2}|(&amp;){1,2}|\|?\||\?|\*|\//g,ignore:/&(lt|gt|amp);/gi,punctuation:/[{}[\];(),.:]/g};;
Prism.languages.javascript=Prism.languages.extend("clike",{keyword:/\b(var|let|if|else|while|do|for|return|in|instanceof|function|new|with|typeof|try|catch|finally|null|break|continue)\b/g,number:/\b(-?(0x)?\d*\.?[\da-f]+|NaN|-?Infinity)\b/g});Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/g,lookbehind:!0}});Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{script:{pattern:/(&lt;|<)script[\w\W]*?(>|&gt;)[\w\W]*?(&lt;|<)\/script(>|&gt;)/ig,inside:{tag:{pattern:/(&lt;|<)script[\w\W]*?(>|&gt;)|(&lt;|<)\/script(>|&gt;)/ig,inside:Prism.languages.markup.tag.inside},rest:Prism.languages.javascript}}});;
Prism.fn = Prism.fn || {};

// Taken from Dabblet source & renamed
Prism.fn.createRegExp = function(str, replacements, flags) {
	for(var id in replacements) {
		var replacement = replacements[id],
			idRegExp = RegExp('{{' + id + '}}', 'gi');

		if(replacement.source) {
			replacement = replacement.source.replace(/^\^|\$$/g, '');
		}

		// Don't add extra parentheses if they already exist
		str = str.replace(RegExp('\\(' + idRegExp.source + '\\)', 'gi'), '(' + replacement + ')');

		str = str.replace(idRegExp, '(?:' + replacement + ')');
	}

	return RegExp(str, flags);
};

Prism.regExp = Prism.regExp || {};

Prism.regExp.number = /-?\d*\.?\d+/;

Prism.languages.sass = Prism.languages.scss = {
	'comment': {
		pattern: /(^|[^\\])(\/\*[\w\W]*?\*\/|\/\/.*?(\r?\n|$))/g,
		lookbehind: true
	},

	'control': /@(if|else if|else|for|each|while)/i,
	'directive': /@(import|extend|debug|warn)/i,
	'keyword': /&amp;|@(mixin|include|function|return)/i,

	'atrule': /@[\w-]+?(?=(\s+.+)?(\s*{|\s*;))/gi,
	//'url': /url\((["']?).*?\1\)/gi,
	'string': /("|')(\\?.)*?\1/g,
	'url': /([-a-z]+-)*url(?=\()/gi, // compassified

	'placeholder': /%[-_\w]+/i,
	'variable': /\$[-_\w]+/i,

	'property': /(\b|\B)[a-z-]+(?=\s*:)/ig,

	'important': /\B!important\b/gi,
	'statement': /\B!(default|optional)\b/gi,

	'boolean': /\b(true|false)\b/g,
	'null': /\b(null)\b/g,
	'number': /\b-?(0x)?(\d*\.?\d+|([\da-f]{3}){1,2})(?=(ddpx|px|pt|cm|mm|in|em|ex|pc)|\b)/g,

	// sass short mixin declaration
	'mixin': /(^|\\n)\\s*=.*/g,
	'mixin': /(^|\\n)\\s*\\+.*/g,

	// specific css values (taken from dabblet source)
	'gradient': /\b(repeating-)?(linear|radial)-gradient\(((rgb|hsl)a?\(.+?\)|[^\)])+\)/gi,
	'abslength': Prism.fn.createRegExp('(\\b|\\B){{number}}{{unit}}\\b', {
		number: Prism.regExp.number,
		unit: /(cm|mm|in|pt|pc|px)/
	}, 'gi'),
	'easing': Prism.fn.createRegExp('\\b{{bezier}}\\B|\\b{{keyword}}(?=\\s|;|\\}|$)', {
		bezier: Prism.fn.createRegExp('cubic-bezier\\(({{number}},\\s*){3}{{number}}\\)', {
			number: Prism.regExp.number
		}),
		keyword: /linear|ease(-in)?(-out)?/
	}, 'gi'),
	'time': Prism.fn.createRegExp('(\\b|\\B){{number}}m?s\\b', {
		number: Prism.regExp.number
	}, 'gi'),
	'angle': Prism.fn.createRegExp('(\\b|\\B){{number}}(deg|g?rad|turn)\\b', {
		number: Prism.regExp.number
	}, 'gi'),
	'fontfamily': /(("|')[\w\s]+\2,\s*|\w+,\s*)*(sans-serif|serif|monospace|cursive|fantasy)\b/gi,

	'entity': /\\[\da-f]{1,8}/gi,

	//'selector-id': /#(\\w|-|_)+/g,
	//'selector-class': /\\.(\\w|-|_)+/g,
	'selector': /[^;\{\}\(\)\s][^;\{\}\(\)]*(?=\s*\{)/g,

	'operator': /\s+([-+]{1,2}|={1,2}|!=|\|?\||\?|\*|\/|\%)\s+/g,

	'unit': /\b(ddpx|px|pt|cm|mm|in|em|ex|pc)\b|%/i,

	'ignore': /&(lt|gt|amp);/gi,
	'punctuation': /[\{\}\(\);:,\.#]/g
};
/* 
 * Lettering.JS 0.6 by Dave Rupert  - http://daverupert.com 
 */
(function($){var methods={init:function(){return this.each(function(){return injector($(this),'','char','')})},words:function(){return this.each(function(){return injector($(this),' ','word',' ')})},lines:function(){return this.each(function(){var t=$(this),r="eefec303079ad17405c889e092e105b0";t.children("br").replaceWith(r);return injector(t,r,'line','')})}};function injector(t,splitter,klass,after){var a=t.text().split(splitter),inject='';if(a.length>0){$(a).each(function(i,item){inject+='<span class="'+klass+(i+1)+'">'+item+'</span>'+after});t.empty();t.append(inject)}}$.fn.lettering=function(method){if(methods[method]){return methods[method].apply(this,Array.prototype.slice.call(arguments,1))}else if(method=='letters'||!method){return methods.init.apply(this,arguments)}else{$.error('Method '+method+' does not exist on jQuery.lettering')}}})(jQuery);

/*
 * FitText.js 1.0 Copyright 2011, Dave Rupert http://daverupert.com
 */

(function( $ ){
	
	$.fn.fitText = function( kompressor, options ) {
	    
	    var settings = {
        'minFontSize' : Number.NEGATIVE_INFINITY,
        'maxFontSize' : Number.POSITIVE_INFINITY
      };
	
			return this.each(function(){
				var $this = $(this);              // store the object
				var compressor = kompressor || 1; // set the compressor
        
        if ( options ) { 
          $.extend( settings, options );
        }
        
        // Resizer() resizes items based on the object width divided by the compressor * 10
				var resizer = function () {
					$this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
				};

				// Call once to set.
				resizer();
				
				// Call on resize. Opera debounces their resize by default. 
      	$(window).resize(resizer);
      	
			});

	};

})( jQuery );

/*! 
* FitVids 1.0
*
* Copyright 2011, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
* Date: Thu Sept 01 18:00:00 2011 -0500
*/

(function( $ ){

  $.fn.fitVids = function( options ) {
    var settings = {
      customSelector: null
    }
    
    var div = document.createElement('div'),
        ref = document.getElementsByTagName('base')[0] || document.getElementsByTagName('script')[0];
        
  	div.className = 'fit-vids-style';
    div.innerHTML = '&shy;<style>         \
      .fluid-width-video-wrapper {        \
         width: 100%;                     \
         position: relative;              \
         padding: 0;                      \
      }                                   \
                                          \
      .fluid-width-video-wrapper iframe,  \
      .fluid-width-video-wrapper object,  \
      .fluid-width-video-wrapper embed {  \
         position: absolute;              \
         top: 0;                          \
         left: 0;                         \
         width: 100%;                     \
         height: 100%;                    \
      }                                   \
    </style>';
                      
    ref.parentNode.insertBefore(div,ref);
    
    if ( options ) { 
      $.extend( settings, options );
    }
    
    return this.each(function(){
      var selectors = [
        "iframe[src^='http://player.vimeo.com']", 
        "iframe[src^='http://www.youtube.com']", 
        "iframe[src^='http://www.kickstarter.com']", 
        "object", 
        "embed"
      ];
      
      if (settings.customSelector) {
        selectors.push(settings.customSelector);
      }
      
      var $allVideos = $(this).find(selectors.join(','));

      $allVideos.each(function(){
        var $this = $(this);
        if (this.tagName.toLowerCase() == 'embed' && $this.parent('object').length || $this.parent('.fluid-width-video-wrapper').length) { return; } 
        var height = this.tagName.toLowerCase() == 'object' ? $this.attr('height') : $this.height(),
            aspectRatio = height / $this.width();
        $this.wrap('<div class="fluid-width-video-wrapper" />').parent('.fluid-width-video-wrapper').css('padding-top', (aspectRatio * 100)+"%");
        $this.removeAttr('height').removeAttr('width');
      });
    });
  
  }
})( jQuery );

$(function() {
	
	$(".thing").lettering();
	$(".thing").fittext();
	$('[role="main"]').fitVids();
	
	$accordion = $('.accordion'),
	$a_next = $accordion.next();
	
	$a_next.hide();
	$accordion.on('click', function() {
		$(this).next().slideToggle();
	});
	
});