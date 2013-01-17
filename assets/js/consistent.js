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

/*
 * Swipe 1.0
 *
 * Brad Birdsall, Prime
 * Copyright 2011, Licensed GPL & MIT
 *
*/
;window.Swipe=function(b,a){if(!b){return null}var c=this;this.options=a||{};this.index=this.options.startSlide||0;this.speed=this.options.speed||300;this.callback=this.options.callback||function(){};this.delay=this.options.auto||0;this.container=b;this.element=this.container.children[0];this.container.style.overflow="hidden";this.element.style.listStyle="none";this.element.style.margin=0;this.setup();this.begin();if(this.element.addEventListener){this.element.addEventListener("touchstart",this,false);this.element.addEventListener("touchmove",this,false);this.element.addEventListener("touchend",this,false);this.element.addEventListener("touchcancel",this,false);this.element.addEventListener("webkitTransitionEnd",this,false);this.element.addEventListener("msTransitionEnd",this,false);this.element.addEventListener("oTransitionEnd",this,false);this.element.addEventListener("transitionend",this,false);window.addEventListener("resize",this,false)}};Swipe.prototype={setup:function(){this.slides=this.element.children;this.length=this.slides.length;if(this.length<2){return null}this.width=Math.ceil(("getBoundingClientRect" in this.container)?this.container.getBoundingClientRect().width:this.container.offsetWidth);if(!this.width){return null}this.container.style.visibility="hidden";this.element.style.width=Math.ceil(this.slides.length*this.width)+"px";var a=this.slides.length;while(a--){var b=this.slides[a];b.style.width=this.width+"px";b.style.display="table-cell";b.style.verticalAlign="top"}this.slide(this.index,0);this.container.style.visibility="visible"},slide:function(a,c){var b=this.element.style;if(c==undefined){c=this.speed}b.webkitTransitionDuration=b.MozTransitionDuration=b.msTransitionDuration=b.OTransitionDuration=b.transitionDuration=c+"ms";b.MozTransform=b.webkitTransform="translate3d("+-(a*this.width)+"px,0,0)";b.msTransform=b.OTransform="translateX("+-(a*this.width)+"px)";this.index=a},getPos:function(){return this.index},prev:function(a){this.delay=a||0;clearTimeout(this.interval);if(this.index){this.slide(this.index-1,this.speed)}else{this.slide(this.length-1,this.speed)}},next:function(a){this.delay=a||0;clearTimeout(this.interval);if(this.index<this.length-1){this.slide(this.index+1,this.speed)}else{this.slide(0,this.speed)}},begin:function(){var a=this;this.interval=(this.delay)?setTimeout(function(){a.next(a.delay)},this.delay):0},stop:function(){this.delay=0;clearTimeout(this.interval)},resume:function(){this.delay=this.options.auto||0;this.begin()},handleEvent:function(a){switch(a.type){case"touchstart":this.onTouchStart(a);break;case"touchmove":this.onTouchMove(a);break;case"touchcancel":case"touchend":this.onTouchEnd(a);break;case"webkitTransitionEnd":case"msTransitionEnd":case"oTransitionEnd":case"transitionend":this.transitionEnd(a);break;case"resize":this.setup();break}},transitionEnd:function(a){if(this.delay){this.begin()}this.callback(a,this.index,this.slides[this.index])},onTouchStart:function(a){this.start={pageX:a.touches[0].pageX,pageY:a.touches[0].pageY,time:Number(new Date())};this.isScrolling=undefined;this.deltaX=0;this.element.style.MozTransitionDuration=this.element.style.webkitTransitionDuration=0;a.stopPropagation()},onTouchMove:function(a){if(a.touches.length>1||a.scale&&a.scale!==1){return}this.deltaX=a.touches[0].pageX-this.start.pageX;if(typeof this.isScrolling=="undefined"){this.isScrolling=!!(this.isScrolling||Math.abs(this.deltaX)<Math.abs(a.touches[0].pageY-this.start.pageY))}if(!this.isScrolling){a.preventDefault();clearTimeout(this.interval);this.deltaX=this.deltaX/((!this.index&&this.deltaX>0||this.index==this.length-1&&this.deltaX<0)?(Math.abs(this.deltaX)/this.width+1):1);this.element.style.MozTransform=this.element.style.webkitTransform="translate3d("+(this.deltaX-this.index*this.width)+"px,0,0)";a.stopPropagation()}},onTouchEnd:function(c){var b=Number(new Date())-this.start.time<250&&Math.abs(this.deltaX)>20||Math.abs(this.deltaX)>this.width/2,a=!this.index&&this.deltaX>0||this.index==this.length-1&&this.deltaX<0;if(!this.isScrolling){this.slide(this.index+(b&&!a?(this.deltaX<0?1:-1):0),this.speed)}c.stopPropagation()}};

$(function() {
	//$(".thing").lettering();
	//$(".thing").fittext();
	$('[role="main"]').fitVids();
});