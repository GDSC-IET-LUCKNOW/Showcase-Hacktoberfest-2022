void setup() {
  // put your setup code here, to run once:
  pinMode(2,INPUT); //pin connected to BOLT
  pinMode(4,INPUT);
  pinMode(7,INPUT);
  pinMode(8,INPUT);

  
  pinMode(11, OUTPUT);

  pinMode(9,OUTPUT);

  pinMode(5, OUTPUT);
  pinMode(6, OUTPUT);
  pinMode(10, OUTPUT);
  pinMode(9, OUTPUT);
}

void loop() {
  int check;
  // put your main code here, to run repeatedly:
  // no need!!  Serial.begin(9600);
  check=digitalRead(4);
//  digitalWrite(11,LOW);
//  digitalWrite(8,LOW);
  if(check == 1)
    {digitalWrite(5,HIGH);
    digitalWrite(6,LOW);
    digitalWrite(10,HIGH);
    digitalWrite(9,LOW);
    }
  
  else
    {digitalWrite(5,LOW);
     digitalWrite(10,LOW);
    }
}
