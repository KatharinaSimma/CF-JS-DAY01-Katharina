#!/usr/bin/python3

# Errate eine natürliche Zahl

import random
number = random.randint(1,100)  # vorerst 7, später zufällig
counter = 1                     # erster versuch
guessed = -1                    # Trick um in die Schleife zu gelangen ... 

while number != guessed:
    guessed = int(input("Bitte Zahl eingeben\n"))
    if guessed < number:
        print("Leider zu klein...\n")
        counter += 1
    elif guessed > number:
        print("Leider zu gross...\n")
        counter += 1
    else:
        print("Glückwunsch")
        meldung = "Sie haben " + str(counter) + " Versuch(e) benötigt"
        print(meldung)
        break
