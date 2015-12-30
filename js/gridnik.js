(function($){  
    
	$.fn.gridnik = function(options) {  
  
		var  
			defaults = {  
            unit: 10,  
          	},  
          	settings = $.extend({}, defaults, options);  
			return this.each(function() { 
                iScreenWidth=$(window).width()   	  
            	bForceC60=false
            	activeColumn=null
				body=$(this)
				body.prepend('<div id="grid"></div>')
				body.prepend('<div id="grid-panel"><h1>Gridnik</h1><a id="c60" href="#">60px columns</a><a id="c40" href="#">40px columns</a></div>')
				grid=$('#grid')
				dGridPanel=$('#grid-panel')
				dC60=dGridPanel.find('#c60')
				dC40=dGridPanel.find('#c40')
				bDisplayStatus=false
				dGridPanel.hide()
				grid.hide()
				fnSetGridPanel()
				
				iWidth=body.outerWidth()
				
				fnSetKeyboard()
				
						
		})		
	}


function fnSetGridPanel(){
	
	var gridPanelCssObj={
		'background-color':'white',
		'height':'30px',
		'width':'100%',
		'position':'relative',
		'top':'0',
		'left':'0',
		'z-index':'9999',
		'font-size':'12',
		'line-height':'30px',
		'opacity':'.95',	
	}
	dGridPanel.css(gridPanelCssObj)
	dGridPanel.find('h1').css('font-weight','bold').css('margin-left',10).css('margin-right',20).css('float','left').css('font-size',16)
	dGridPanel.find('a').css('color','#cccccc').css('text-decoration','none').css('margin-right',20).css('float','left').css('font-size',12)
	
	function fnResetColumn(column){	
		fnSetLinks()
		column.trigger('mouseout')
	}
	
	fnSetLinks()
	
	function fnSetLinks(){
		dGridPanel.find('a').bind({
			click:function(e){
				e.preventDefault()
				
				if(activeColumn!=null){
					fnResetColumn(activeColumn)
				}
				$(this).trigger('mouseover')
				$(this).unbind()
					
				activeColumn=$(this)
				if(this.id=='c60'){
					bgImg='url(column-60.png)'
				}else{
					bgImg='url(column-40.png)'
				}
				fnCheckBreakPoint()		
			},
			mouseover:function(){
				$(this).css('color','black')
			},
			mouseout:function(){
				$(this).css('color','#ccc')
			}
		})
		if(activeColumn==null){
			dGridPanel.find('#c60').trigger('click')	
		}
	}
}

function fnAdjustGrid(iNewWidth,iNewHeight){
	iHeight=$(document).height()
	iNewX=(iScreenWidth-iNewWidth)/2
	var gridCssObj={
		'background-image':bgImg,
		'height':iHeight,
		'width':iNewWidth,
		'position':'absolute',
		'top':'0',
		'margin-left':iNewX,
		'z-index':'9998',	
	}
	grid.css(gridCssObj)

}

function fnCheckBreakPoint(){
	iScreenWidth=$(window).width()
	if(bForceC60 && iScreenWidth>480){
		dC40.trigger('click')	
		bForceC60=false
	}
	if(iScreenWidth>940){
		iWidth=960
		iC60='12'
		iC40='16'
	}else if(iScreenWidth>700  && iScreenWidth<940){
		iWidth=720
		iC60='9'
		iC40='12'
	}else if(iScreenWidth>480  && iScreenWidth<700){
		iWidth=480
		iC60='6'
		iC40='8'
	}else if(iScreenWidth>100  && iScreenWidth<480){
		iWidth=320
		iC60='4'
		iC40='useless'
		
		if(activeColumn.attr('id')=='c40'){
			dC60.trigger('click')
			bForceC60=true
		}
	}
	fnAdjustGrid(iWidth)
	dGridPanel.find('h1').text('Gridnik • '+iWidth)
	dC60.text( iC60+' x 60px')
	dC40.text( iC40+' x 40px')
}	

$(window).resize(function() {
	fnCheckBreakPoint()
})

function fnDisplayStatus(){
	if(bDisplayStatus){			
		grid.hide()
		dGridPanel.hide()
		bShowDesc=1

		bDisplayStatus=false
	}else{
		dGridPanel.show()				
		grid.show()
		bDisplayStatus=true
	}
}

function fnSetKeyboard(){
	$(window).keyup(function (event) {
		if (event.keyCode == 71) {
			fnDisplayStatus()
  		}
  	});
}	
	
  
})(jQuery);