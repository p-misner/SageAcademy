 var controller = new ScrollMagic.Controller({
 	globalSceneOptions: {duration: 1600}
 }); 
 setTimeout(()=>{updateAlert();}, 1500);
new ScrollMagic.Scene({
	triggerElement: "#head1",
	triggerHook: 1,
	})
	.setClassToggle("body","floralwhite")
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
	.setClassToggle("body","blue")
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
	.setClassToggle("body","cream")
	.addTo(controller);




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

function setHeaderMode(mode) {
	if (mode == "dark"){
		for (var i=0; i < (document.querySelectorAll('a').length); i++){
			(document.querySelectorAll('a')[i]).style.color = "rgb(235, 223, 188)";
		}
		 
	} else if (mode =="light"){
		for (var i=0; i < (document.querySelectorAll('a').length); i++){
			(document.querySelectorAll('a')[i]).style.color = "#333447";
		}
	}
}

function updateAlert(){
	alert("Reminder: This information is NOT up to date. The website will be up to date on Tuesday (an email reminder will be sent out then)!");
}
