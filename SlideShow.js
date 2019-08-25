$(function(){
	$('#images').css({'position':'absolute','left':'0px','top':'0px'});
	$("#youtube-player-container").hide();
	$("#2nd-youtube-player-container").hide();

		right_img = new Image();
		right_img.src = 'right.gif';
		left_img = new Image();
		left_img.src='left.gif';
		
		document.getElementById('right_icon').src = right_img.src;
		document.getElementById('left_icon').src = left_img.src;
		
		img_slides=document.getElementById('images');
		
		height_images=$('#images').height();
		width_images=$('#images').width();
		$('#best').css({'position':'relative','left':'0px','top': height_images +'px'});
		height_right_icon=($('#right_icon').height())/2;
		right_pos_of_top=Math.floor((height_images/2)-height_right_icon);
		
		width_right_icon=$('#right_icon').width();
		width_left_icon=$('#left_icon').width();
		
		height_left_icon=($('#left_icon').height())/2;
		
		left_pos_of_top=Math.floor((height_images/2)- height_left_icon);
		
		$('#left_icon').css({'position':'absolute','top': 121 + 'px'}); //107
		
		right_pos_of_left=Math.floor(width_images-15);
		$('#right_icon').css({'position':'absolute','left': right_pos_of_left + 'px','top': 121 + 'px'});//107
		
		//***********************************************************************************************
		slides = new Array ("image24.jpg", "image25.jpg", "image26.jpg", "image27.jpg", "image28.jpg", "image29.jpg", "image30.jpg"); 
		//***********************************************************************************************
		max_slides = slides.length;
		position=Math.floor((Math.random()*max_slides)+0);
		seconds=7000;
		interval=4;
		other_interval=8;
		second_video_placement = interval + other_interval;
		next=interval+1;
		last_slides = max_slides + next + 2;
		unique_numbers = new Array();
		index=0;
		linked_image=new Image();
		linked_image.src = "image30.jpg";

		preload_slide_images();
		random_no_repeat_array();
		clicked_on=0;
		$('#images').wrap('<a border="0" id="image_link" target="_self" href="https://wordpress.worcester.edu/alumnus-brian-skerry-brings-beauty-of-our-oceans-to-wsu/"></a>');
		slide_show();
		
		inter=setInterval("slide_show();",seconds);
});
function preload_slide_images(){

		images = new Array();
	for(var k=0; k<max_slides; k++){
		images[k] = new Image();
		images[k].src = slides[k];
	}
}
function random_no_repeat_array(){
	for(var i=0; i<max_slides; i++){
		count=0;
		possible=Math.floor((Math.random()*max_slides)+0);
		for(var j=0; j<unique_numbers.length; j++)
			if(unique_numbers[j]!=possible)
				count++;	
		if(count==j)
			unique_numbers[index++]=possible;
		else
			i=index-1;
	}
}
function slide_show(){
if(clicked_on==0)
	++position; //if left or right images have not been clicked increment to next slide/image

	if(position==max_slides)
		position=0; //reset to slide/image zero
	else if(position<0)
		position=max_slides-1; //show was decremented beyond slide zero so goto the end of the slides/images

number=unique_numbers[position]; //get next integer/number from the random no-repeat array

if(linked_image.src==images[number].src)
	$('#image_link').attr("href", "https://wordpress.worcester.edu/alumnus-brian-skerry-brings-beauty-of-our-oceans-to-wsu/");
else
	$('#image_link').removeAttr("href");	

if(next>=last_slides)
	next=interval+1; //reset to one place beyond the next interval

if(next%interval==0 && next%second_video_placement!=0){
		$("#youtube-player-container").show();
		--position;
 
		jQuery("#youtube-player-container").tubeplayer({
        width: 656, // the width of the player
		height: 267, // the height of the player
		start: 0,
		allowFullScreen: "true", // true by default, allow user to go full screen
	    initialVideo: "QjUk5ppoPcI", // the video that is loaded into the player
        preferredQuality: "default",// preferred quality: default, small, medium, large, hd720
        showRelated: 0, // show the related videos when the player ends, 0 or 1
        showinfo: false, // if you want the player to include details about the video
        modestbranding: false, // specify to include/exclude the YouTube watermark
        theme: "light", // possible options: "dark" or "light"
        color: "white", // possible options: "red" or "white"
        onPlayerUnstarted: function(){ 
        							setTimeout("",seconds);
           							},
        onPlayerPlaying: function(){
        							clearInterval(inter);
        							},
        onPlayerPaused : function(){
        							clearInterval(inter);
        							},
        onPlayerEnded: function(){				
        							$("#youtube-player-container").hide();
									jQuery("#youtube-player-container").tubeplayer("destroy");
        							inter=setInterval("slide_show();",seconds);
        						}
		
		});
  	} else if(next%second_video_placement==0){
  		$("#2nd-youtube-player-container").show();
		--position;
 		
		jQuery("#2nd-youtube-player-container").tubeplayer({
        width: 656, // the width of the player
		height: 267, // the height of the player
		start: 0,
		allowFullScreen: "true", // true by default, allow user to go full screen
	    initialVideo: "pIbjpiVMn5k", // the video that is loaded into the player
        preferredQuality: "default",// preferred quality: default, small, medium, large, hd720
        showRelated: 0, // show the related videos when the player ends, 0 or 1
        showinfo: false, // if you want the player to include details about the video
        modestbranding: false, // specify to include/exclude the YouTube watermark
        theme: "light", // possible options: "dark" or "light"
        color: "white", // possible options: "red" or "white"
        onPlayerUnstarted: function(){ 
        							setTimeout("",seconds);
           							},
        onPlayerPlaying: function(){
        							clearInterval(inter);
        							},
        onPlayerPaused : function(){
        							clearInterval(inter);
        							},
        onPlayerEnded: function(){	
        							$("#2nd-youtube-player-container").hide();
									jQuery("#2nd-youtube-player-container").tubeplayer("destroy");
        							inter=setInterval("slide_show();",seconds);
        							}
		});
  	}else {
  			$("#youtube-player-container").hide();
			jQuery("#youtube-player-container").tubeplayer("destroy");
			$("#2nd-youtube-player-container").hide();
			jQuery("#2nd-youtube-player-container").tubeplayer("destroy");
			img_slides.src = images[number].src;
	}
		++next;		
}
$(function(){
	$('#right_icon').dblclick(function(){
		if(clicked_on==1)
			inter=setInterval("slide_show();",seconds);
		clicked_on=0;
	});
});
$(function(){
	$('#left_icon').dblclick(function(){
		if(clicked_on==1)
			inter=setInterval("slide_show();",seconds);
		clicked_on=0;	
	});
});

$(function(){
	$("#images").click(function(){
		if(clicked_on==1)
			inter=setInterval("slide_show();",seconds);
		clicked_on=0;	
	});
});
$(function(){
	$('#right_icon').click(function(){
		clicked_on=1;
		++position;
		clearInterval(inter);
		slide_show();
	});
});
$(function(){
	$('#left_icon').click(function(){
		clicked_on=1;
		--position;
		clearInterval(inter);
		slide_show();
	});
});
$(function(){
	$('#right_icon').hover(function(){
			$(this).css({'cursor':'pointer'});
	});
});
$(function(){
	$('#left_icon').hover(function(){
			$(this).css({'cursor':'pointer'});
	});
});