$(function(){
	if($(".selectDiv.one").length){
		$(window).load(function(){ 
			var defaulttext1 = $('.default-text.one').text();
			$('.selectDefault.one').text(defaulttext1);
			$('.selectBox.one').on('change',function(){
			   var defaulttext2 = $('.selectBox.one').find(":selected").text(); 
			    $('.selectDefault.one').text(defaulttext2);
			});
		});
	}
	if($(".selectDiv.two").length){
		$(window).load(function(){ 
			var defaulttext1 = $('.default-text.two').text();
			$('.selectDefault.two').text(defaulttext1);
			$('.selectBox.two').on('change',function(){
			   var defaulttext2 = $('.selectBox.two').find(":selected").text(); 
			    $('.selectDefault.two').text(defaulttext2);
			});
		});
	}
	if($(".selectDiv.three").length){
		$(window).load(function(){ 
			var defaulttext1 = $('.default-text.three').text();
			$('.selectDefault.three').text(defaulttext1);
			$('.selectBox.three').on('change',function(){
			   var defaulttext2 = $('.selectBox.three').find(":selected").text(); 
			    $('.selectDefault.three').text(defaulttext2);
			});
		});
	}
	if($(".selectDiv.four").length){
		$(window).load(function(){ 
			var defaulttext1 = $('.default-text.four').text();
			$('.selectDefault.four').text(defaulttext1);
			$('.selectBox.four').on('change',function(){
			   var defaulttext2 = $('.selectBox.four').find(":selected").text(); 
			    $('.selectDefault.four').text(defaulttext2);
			});
		});
	}
});