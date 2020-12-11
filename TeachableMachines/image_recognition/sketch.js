  // **********

  let portName = '/dev/tty.usbmodem14201 '; // serial port
  let imageModelURL = 'https://teachablemachine.withgoogle.com/models/lVi5vI_g5/';


  // **********

  let serial;
  let classifier;
  let video;
  let flippedVideo;
  let label = "";
  function preload() {
    classifier = ml5.imageClassifier(imageModelURL + 'model.json');
  }

  function setup() {
    serial = new p5.SerialPort();
    serial.list();
    serial.open(portName);
    serial.on('list', gotList);
    createCanvas(320, 260);
    video = createCapture(VIDEO);
    video.size(320, 240);
    video.hide();
    flippedVideo = ml5.flipImage(video)
    classifyVideo();
  }

  function draw() {
    background(0);
    image(flippedVideo, 0, 0);
    fill(255);
    textSize(16);
    textAlign(CENTER);
    text("Result: " + label, width / 2, height - 4);
  }

  function classifyVideo() {
    flippedVideo = ml5.flipImage(video)
    classifier.classify(flippedVideo, gotResult);
  }

  function gotResult(error, results) {
    if (error) {
      console.error(error);
      return;
    }
    label = results[0].label;
    print("Result:", String(results[0].label))
    serial.write(String(results[0].label));
    classifyVideo();
    if ( String(results[0].label) == "Class 1"){
      serial.write("o");
    }
    else if ( String(results[0].label) == "Class 2"){
      serial.write("t")
    }
    else {
      serial.write("n")
    }
    
  }

  function gotList(thelist) {
    console.log("List of Serial Ports:");
    for (let i = 0; i < thelist.length; i++) {
      console.log(i + " " + thelist[i]);
    }
  }