//int left, right, forward, backward;
const int motorPin1  = 5;  
const int motorPin2  = 6;  
//Motor B
const int motorPin3  = 10; 
const int motorPin4  = 9; 
// For distance
int trigPin = 12;
int echoPin = 11; 
void setup() {
  Serial.begin(9600);
  // pin 0 and 1 == Rx and Tx resp, are connected with Tx and Rx of Bolt.
  pinMode(2,INPUT); //pin connected to BOLT   frwd -> P1
  pinMode(4,INPUT); //pin connected to BOLT   bkwd -> P2
  pinMode(7,INPUT); //pin connected to BOLT   lft -> P3
  pinMode(8,INPUT); //pin connected to BOLT   ryt -> P4
  pinMode(3,INPUT); // to stop Bolt!
  pinMode(motorPin1, OUTPUT);
  pinMode(motorPin2, OUTPUT);
  pinMode(motorPin3, OUTPUT);
  pinMode(motorPin4, OUTPUT);

  pinMode(trigPin, OUTPUT);  //for dist
  pinMode(echoPin, INPUT);
}

float calcdist()
{
  float duration, distance;
  digitalWrite(12, LOW);
  delayMicroseconds(2);
  digitalWrite(12, HIGH);
  delayMicroseconds(10);
  digitalWrite(12, LOW);
  duration = pulseIn(11, HIGH);
  distance = (duration*.0343)/2;
  Serial.print("Distance: ");
  Serial.println(distance);
  delay(100);  
//  if(distance < 20)
//    {
//    digitalWrite(motorPin1, LOW);
//    digitalWrite(motorPin2, LOW);
//    digitalWrite(motorPin3, LOW);
//    digitalWrite(motorPin4, LOW);
//    }
return distance;
}

void loop() {
  int left, right, forward, backward,Stop;
  float dist;
  dist = calcdist();
  if(dist>20)
  {
  forward = digitalRead(2); //p1
  backward = digitalRead(4);  //p2
  left = digitalRead(7);  //p3
  right = digitalRead(8);  //p4
  Stop = digitalRead(3);  //p0
  Serial.print("\t forward:");
  Serial.print(forward);
  Serial.print("\t backward:");
  Serial.print(backward);
  Serial.print("\t left:");
  Serial.print(left);
  Serial.print("\t right:");
  Serial.print(right);
  Serial.print("\t Stop:");
  Serial.print(Stop);
  
 //Serial.print("hello");
  
  if(forward == 1)   //p1
  {
    backward = digitalRead(4);  
    left = digitalRead(7);  
    right = digitalRead(8);
    Stop = digitalRead(3);
    digitalWrite(motorPin1, HIGH); //5
    digitalWrite(motorPin2, LOW);
    digitalWrite(motorPin3, HIGH);  //10
    digitalWrite(motorPin4, LOW);
  }
  
  if(backward == 1)  //p2
  {
    forward = digitalRead(2); 
    left = digitalRead(7);  
    right = digitalRead(8);
    Stop = digitalRead(3);
    digitalWrite(motorPin1, LOW);
    digitalWrite(motorPin2, HIGH);
    digitalWrite(motorPin3, LOW);
    digitalWrite(motorPin4, HIGH);
  }
  if(left == 1)  //p3
  { 
    backward = digitalRead(4); 
    forward = digitalRead(2); 
    right = digitalRead(8);
    Stop = digitalRead(3);
    digitalWrite(motorPin1, HIGH);
    digitalWrite(motorPin2, LOW);
    digitalWrite(motorPin3, LOW);
    digitalWrite(motorPin4, LOW);
  }
  if(right == 1)   //p4
  {   
    backward = digitalRead(4); 
    forward = digitalRead(2); 
    left = digitalRead(7);
    Stop = digitalRead(3);
    digitalWrite(motorPin1, LOW);
    digitalWrite(motorPin2, LOW);
    digitalWrite(motorPin3, HIGH);
    digitalWrite(motorPin4, LOW);
  }

  if(Stop == 1)
  {
    forward = digitalRead(2); 
    backward = digitalRead(4);
    left = digitalRead(7);  
    right = digitalRead(8); 
    digitalWrite(motorPin1, LOW);
    digitalWrite(motorPin2, LOW);
    digitalWrite(motorPin3, LOW);
    digitalWrite(motorPin4, LOW);
  }
}

else
{   digitalWrite(motorPin1, LOW);
    digitalWrite(motorPin2, LOW);
    digitalWrite(motorPin3, LOW);
    digitalWrite(motorPin4, LOW);
}
  
}
