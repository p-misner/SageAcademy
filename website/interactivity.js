 var controller = new ScrollMagic.Controller({
 	globalSceneOptions: {duration: 3300}
 }); 

new ScrollMagic.Scene({
	triggerElement: "#head1",
	triggerHook: 1,
	})
	.setClassToggle("body","one")
	.addTo(controller)
	.on('progress', function(event){
		if (event.progress > 0.05){
			setHeaderMode(lightOrDark(window.getComputedStyle(document.body).backgroundColor))
		}
	});

new ScrollMagic.Scene({
	triggerElement: "#head2",
	triggerHook: 0.8,
	})
	.setClassToggle("body","two")
	.addTo(controller)
	.on('progress', function(event){
		if (event.progress > 0.05){
			setHeaderMode(lightOrDark(window.getComputedStyle(document.body).backgroundColor))
			
		}
	});

new ScrollMagic.Scene({
	triggerElement: "#head3",
	triggerHook: 0.8,
	})
	.setClassToggle("body","three")
	.addTo(controller)
	.on('progress', function(event){
		if (event.progress > 0.05){
			setHeaderMode(lightOrDark(window.getComputedStyle(document.body).backgroundColor))
			
		}
	});

new ScrollMagic.Scene({
	triggerElement: "#head5",
	triggerHook: 0.8,
	})
	.setClassToggle("body","five")
	.addTo(controller)
	.on('progress', function(event){
		if (event.progress > 0.05){
			setHeaderMode(lightOrDark(window.getComputedStyle(document.body).backgroundColor))
			
		}
	});
	
new ScrollMagic.Scene({
	triggerElement: "#head7",
	triggerHook: 0.8,
	})
	.setClassToggle("body","seven")
	.addTo(controller)
	.on('progress', function(event){
		if (event.progress > 0.05){
			setHeaderMode(lightOrDark(window.getComputedStyle(document.body).backgroundColor))
			
		}
	});

new ScrollMagic.Scene({
	triggerElement: "#head8",
	triggerHook: 0.8,
	})
	.setClassToggle("body","eight")
	.addTo(controller)
	.on('progress', function(event){
		if (event.progress > 0.05){
			setHeaderMode(lightOrDark(window.getComputedStyle(document.body).backgroundColor))
			
		}
	});
new ScrollMagic.Scene({
	triggerElement: "#head9",
	triggerHook: 0.8,
	})
	.setClassToggle("body","nine")
	.addTo(controller)
	.on('progress', function(event){
		if (event.progress > 0.05){
			setHeaderMode(lightOrDark(window.getComputedStyle(document.body).backgroundColor))
			
		}
	});
new ScrollMagic.Scene({
	triggerElement: "#head10",
	triggerHook: 0.8,
	})
	.setClassToggle("body","ten")
	.addTo(controller)
	.on('progress', function(event){
		if (event.progress > 0.05){
			setHeaderMode(lightOrDark(window.getComputedStyle(document.body).backgroundColor))
			
		}
	});
new ScrollMagic.Scene({
	triggerElement: "#head11",
	triggerHook: 0.8,
	})
	.setClassToggle("body","eleven")
	.addTo(controller)
	.on('progress', function(event){
		if (event.progress > 0.05){
			setHeaderMode(lightOrDark(window.getComputedStyle(document.body).backgroundColor))
			
		}
	});



function lightOrDark(color) {
    var r, g, b, hsp;

    if (color.match(/^rgb/)) {
      color = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);

      r = color[1];
      g = color[2];
      b = color[3];
    } else {
      color = +('0x' + color.slice(1).replace(color.length < 5 && /./g, '$&$&'));

      r = color >> 16;
      g = color >> 8 & 255;
      b = color & 255;
    }

    hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));

    return hsp > 127.5 ? 'light' : 'dark';
}

function clickHam(){
	// console.log("ham clicked");
	mode = document.getElementById("navcircle").style.visibility;
	// console.log(mode);
	if (mode == 'visible'){
		document.getElementById("navcircle").style.visibility = 'hidden';
	}
	else {
	document.getElementById("navcircle").style.visibility = 'visible';	
	}
	
	
}

function setHeaderMode(mode) {
	if (mode == "dark"){
		for (var i=0; i < (document.querySelectorAll('.menu').length); i++){
			(document.querySelectorAll('.menu')[i]).style.backgroundColor = "rgb(235, 223, 188)";
			document.getElementById("ham").style.background = "#333447";
			document.getElementById("sage").style.color = "rgb(235, 223, 188)";

		}
		 
	} else if (mode =="light"){
		for (var i=0; i < (document.querySelectorAll('.menu').length); i++){
			(document.querySelectorAll('.menu')[i]).style.backgroundColor = "#333447";
			document.getElementById("ham").style.background = "rgb(235, 223, 188)";
			document.getElementById("sage").style.color = "#333447";

		}
	}
}


