

(function(jQuery){  

	jQuery.fn.fscreen = function(options) {  
  
		var  
			defaults = {  
            unit: 10,
            opacityVal: .25  
          	},  
          	settings = $.extend({}, defaults, options);  
			return this.each(function() { 
              
            /* OLAYLAR OLAYLAR*/      	  
            
            targetDiv=$(this)
            image=targetDiv.find('img')
            
            image.hide()
            
            	
    		function fnLoadImg(image){
  
					image.bind('load',
					function(){
						image.fadeIn()
						fnResizeImg(image)
							
					}
					)
    		}
    		
    		targetDiv.each(
    			function(){
    				fnLoadImg($(this).find('img'))	
    			}
    		)
    		
    		
    		
    		function fnResizeImg(img){
    			
    			iWindowWidth=Math.round($(window).width())
				iWindowHeight=Math.round($(window).height())
	
				iImageWidth=Math.round(img.width())
				iImageHeight=Math.round(img.height())
				
				if (iWindowHeight/iWindowWidth>iImageHeight/iImageWidth) {
					img_prop = iImageWidth/iImageHeight;
					iImageHeight = iWindowHeight;
					iImageWidth = iWindowHeight*img_prop;
				} else {
					img_prop = iImageHeight/iImageWidth;
					iImageWidth = iWindowWidth;
					iImageHeight = iWindowWidth*img_prop;
				}
	
				iNewLeft=(iWindowWidth-iImageWidth)/2
				iNewTop=(iWindowHeight-iImageHeight)/2
				
				
				var divCssObj = {
					'height' : iWindowWidth,
					'width' : iWindowHeight,
    			}
				
				img.parent().css(divCssObj)
				
				
				
				var imgCssObj = {
					'height' : iImageHeight,
					'width' : iImageWidth,
					'position': 'absolute',
					'top':iNewTop,
					'left':iNewLeft,
					'z-index':'2',
    			}

   				img.css(imgCssObj)
				
    		}
    		
    		$(window).resize(
				function(){		
					if($(window).width()>=900){
						$('#image_area div').each(	
    						function(){
    							img=$(this).find('img')
    							fnResizeImg(img)	
    						}
    					)
					}
				}
			)	
    		
    		
    		/*
    		function fnResizeImg(img) {

			
				
				
				

  			/* END OF OLAYLAR OLAYLAR*/ 
		})
			
	}
  
})(jQuery);