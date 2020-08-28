// Declaration of Variables
const int ledPin =  4;      // the number of the LED pin
const int builtIn = 13;
const int ThermistorPin = 0; //this is an analog pin
int Vo;
float R1 = 1000; //resistor value 
float logR2, R2, T;
float c1 = 0.001129148, c2 = 0.000234125, c3 = 0.0000000876741;


void setup() {
  
  Serial.begin(9600);

}

void loop() {
  int tempReading = analogRead(ThermistorPin);
  double tempK = log(R1*((1024.0/tempReading -1)));
  tempK = 1/(c1 + (c2+(c3 *tempK*tempK))*tempK);
  float tempC = tempK - 273.15;
  float tempF = (tempC*9.0)/5 +32.0;


  Serial.print("Temperature: "); 
  Serial.print(tempF);
  Serial.println(" F"); 

  if (tempF > 70) {
    // turn LED on:
    digitalWrite(ledPin, HIGH);
    digitalWrite(builtIn, HIGH);
  } else {
    // turn LED off:
    digitalWrite(ledPin, LOW);
    digitalWrite(builtIn, LOW);
  }

  delay(500);
}