(function($){  
    
	$.fn.gridnik = function(options) {  
  
		var  
			defaults = {  
            unit: 10,  
          	},  
          	settings = $.extend({}, defaults, options);  
			return this.each(function() { 
              
            /* OLAYLAR OLAYLAR*/      	  
            	iColumn=12
            	bDisplayStatus=true
				body=$(this)
				body.append('<div id="grid"><div id="desc"></div></div>')
				grid=$('#grid')
				
				iHeight=body.outerHeight()
				iWidth=body.outerWidth()
				
				if(iColumn==12){
					bgImg='url(https://dl.dropbox.com/u/3724548/Lab/Gridnik/v01/images/cell-10.png)'
				}else{
					bgImg='url(https://dl.dropbox.com/u/3724548/Lab/Gridnik/v01/images/cell-8.png)'
				}
				
				var gridCssObj={
					'background-image':bgImg,
					'height':iHeight,
					'width':'940',
					//'position':'absolute',
					'margin-top':-iHeight,
					'margin-left':'auto',
					'margin-right':'auto',
					'z-index':'9999',
					
				}
				grid.css(gridCssObj)
				
				
				/*
				fnSetKeyboard()
				
				setGrid()
            
				function setGrid(){
					iHeight=targetDiv.outerHeight()
					iWidth=targetDiv.outerWidth()
					iOffset=targetDiv.offset()
					iOffsetLeft=iOffset.left
					iOffsetTop=iOffset.top- $(window).scrollTop()
	 				
	 				if(settings.unit==10){
	 					bgImg='url(https://dl.dropbox.com/u/3724548/Lab/Gridnik/v01/images/cell-10.png)'
	 				}else(
	 					bgImg='url(https://dl.dropbox.com/u/3724548/Lab/Gridnik/v01/images/cell-8.png)'
	 				)
	 				
					var gridCssObj = {
						'background-image' : bgImg,
						'height' : iHeight,
						'width' : iWidth,
						'position': 'absolute',
						'top':iOffsetTop,
						'left':iOffsetLeft,
						'z-index':'9998',
						'opacity':'.5',
						'outline':'1px solid grey',
    				}
					
					grid.css(gridCssObj);
					
    
					var descCSSObj={
						'position': 'fixed',
						
						'top': 0,
						'font-family':'sans-serif',
						'z-index':'9999',
						'fontSize' : 11,
						'color': 'white',
						'background' : 'gray',
						'padding-left' : 5,
						'padding-right' : 5,
						'outline':'1px solid grey'
    				}
    
					tDesc=grid.find('#desc')
					tDesc.text(iWidth+' x '+iHeight)
					tDesc.css(descCSSObj)
					bShowDesc=1
				tDesc.hide()	
				}
				
				
				
				grid.bind({
					click:function(){
						if(bShowDesc==0){
							tDesc.hide()
							bShowDesc=1
							$(this).css({opacity:0.5})
						}else{
							tDesc.show()
							bShowDesc=0
							$(this).css({opacity:1})
						}
						return false
					}
				})
				
				
				function fnDisplayStatus(){
					if(bDisplayStatus){
						
						grid.hide()
						bShowDesc=1
						tDesc.hide()
						bDisplayStatus=false
					}else{
						
						grid.show()
						bDisplayStatus=true
					}
				}

				function fnSetKeyboard(){
					$(window).keyup(function (event) {
						if (event.keyCode == 71) {
							setGrid()
							fnDisplayStatus()
  						}
  					});
				}

				$(window).resize(function() {
					//setGrid()
				});
				
				
				$(window).scroll(function() {
    				
    				//setGrid()
          		})
				
				*/
				
				

  			/* END OF OLAYLAR OLAYLAR*/ 
		})
			
	}
  
})(jQuery);