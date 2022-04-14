# _Mr. Robogers-Neirborhood_

#### By _**Evgeniya Meshuris**_

#### _A counting programm switches number to words based on logic._

## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_
* _jQuery_

## Description

_This website has a single input field. When a user enters a number, it will begin counting. Starting from 0, it will count up to your number, with a few exceptions. When it encounters a 3, it will say "Won't you be my neighbor?", with a 2 it will "Boop!", and with a 1 it will "Beep!"_

## Setup/Installation Requirements

* _Copy the repository URL named "mr-robogers-neighborhood"_
* _Clone the copied repository to your computer_
* _Open the cloned directory named "mr-robogers-neighborhood"_
* _From the top of this directory, open index.html_
* _Fill out the From_
* _Click Submit to see the result_
* _Click Submit again if you want to repeat a request_

## Known Bugs

* _No known bugs_

## License

Licensed under the [MIT License](LICENSE)

Copyright (c) _2022_ _Evgeniya Meshuris_

// *********************************************************************************************** \\

Specs

1. Return an Alert("Enter the number") if no number was given
1. Count up to entered number
1. Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
1. Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
1. Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor?"
1. Return string array

Tests: 

* Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
* Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
* Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor?"

Code: `arrayOfNumbers("7")`; 
Expected output: [`"0", "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7`];

Tests: 

  * Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
  * Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
  * Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor?"

Code: `arrayOfNumbers("23")`; 
Expected output: [`"0", "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Boop!", "Boop!", "Boop!", "Won't you be my neighbor?"`]
