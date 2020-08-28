// Declaration of Variables
const int ledPin =  3;      // the number of the LED pin
const int potPin = A0; //this is an analog pin
int input_val = 0;


void setup() {
  
  Serial.begin(9600);
  Serial.println("--- start ---");
  pinMode(ledPin, OUTPUT);

}

void loop() {
  input_val = analogRead(potPin);

  Serial.print("Potentiometer Value is: "); 
  Serial.println(input_val); 
  analogWrite(ledPin, input_val/4);
  delay(100);
}