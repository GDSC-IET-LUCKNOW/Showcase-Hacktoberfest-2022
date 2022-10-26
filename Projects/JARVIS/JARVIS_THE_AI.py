import pyttsx3
import datetime
import speech_recognition as sr
import wikipedia
import webbrowser
import os

engine = pyttsx3.init('sapi5')
voices = engine.getProperty('voices')
# print (voices[1].id)
engine.setProperty('voice' , voices[1].id)


def speak(audio):
    engine.say(audio)
    engine.runAndWait()

def wish():
    hour = int(datetime.datetime.now().hour)
    if(hour>0 and hour<12):
        speak("Good Morning")
    elif(hour>=12 and hour<18):
        speak("Good Afternoon")
    elif(hour>18):
        speak("Good Evening")
    speak("I'm JARVIS, Please tell me, how may I help you")

def takeCommand():

    r = sr.Recognizer()
    with sr.Microphone() as source:
        print("Listening...")
        r.pause_threshold = 0.5
        audio = r.listen(source)

    try:
        print("Recognising...")
        query = r.recognize_google(audio,language="en-in")
        print (f"User said : {query}\n")

    except Exception as e:
        # print(e)
        print("Say that again please...")
        return "None"
    return query


if __name__ == "__main__":
    wish()
    # takeCommand()
    while True:
        query = takeCommand().lower()
        if 'wikipedia' in query:
            speak("Searching Wikipedia")
            query = query.replace("wikipedia","")
            results = wikipedia.summary(query, sentences=2)
            speak("According to Wikipedia")
            print(results)
            speak(results)

        elif 'open youtube' in query:
            webbrowser.open("www.youtube.com")

        elif 'open google' in query:
            webbrowser.open("www.goggle.com")

        elif 'open linkedin' in query:
            webbrowser.open("linkedIn.com")

        elif 'open instagram' in query:
            webbrowser.open("instagram.com")

        elif 'the time' in query:
            time = datetime.datetime.now().strftime("%H,%M,%S")
            speak(f"Sir!, the time is {time}")
        
        elif 'open code' in query:
            codepath = "C:\\Users\\Aryan\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe"
            os.startfile(codepath)



            