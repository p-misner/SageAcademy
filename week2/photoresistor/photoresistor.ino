// Declaration of Variables
const int ledPin =  4;      // the number of the LED pin
const int LDR = A0; //this is an analog pin
int input_val = 0;
int lightOn = 10;//CHANGE THIS to change the cut off value for LED


void setup() {
  Serial.begin(9600);
  Serial.println("--- start ---");
  pinMode(ledPin, OUTPUT);
}

void loop() {
  input_val = analogRead(LDR);

  Serial.print("LDR Value is: "); 
  Serial.println(input_val);

  if (input_val < lightOn) {
    // turn LED on:
    digitalWrite(ledPin, HIGH);
  } else {
    // turn LED off:
    digitalWrite(ledPin, LOW);
  }

  delay(500);
}