/*
    * Ultrasonic Sensor HC-SR04 and Arduino Tutorial
    *
    * Modified version from Dejan Nedelkovski,
    * www.HowToMechatronics.com
    *
    * By Priya Misner
    
    Wiring:

    1. Arduino Ground to Ultrasonic Ground
    2. Pin 11 to Ultrasonic Echo
    3. Pin 12 to Ultrasonic Trigger
    4. Arduino 5V to Ultrasonic VCC




  */

// defines pins numbers
const int trigPin = 12;
const int echoPin = 11;
const int led = 3;


// defines variables
long duration;
int distance;

void setup() {
  pinMode(trigPin, OUTPUT); // Sets the trigPin as an Output
  pinMode(echoPin, INPUT); // Sets the echoPin as an Input
  pinMode(led, OUTPUT); 
  Serial.begin(9600); // Starts the serial communication
  Serial.println("----- start -----");
}
void loop() {
  // Clears the trigPin
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
 
  // Sets the trigPin on HIGH state for 10 micro seconds
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
 
  // Reads the echoPin, returns the sound wave travel time in microseconds
  duration = pulseIn(echoPin, HIGH);
  
  // Calculating the distance in cm
  distance= duration*0.034/2;
  
  // Prints the distance on the Serial Monitor
  Serial.print("Distance: ");
  if (distance/2.54 < 12){
    Serial.print(distance/2.54);
    Serial.println(" inches");
     tone(led, 1000);
     
  }
  else {
    Serial.print(distance/(2.54*12));
    Serial.println(" ft");
    noTone(led);
  }
  
 
  delay(500);
}
