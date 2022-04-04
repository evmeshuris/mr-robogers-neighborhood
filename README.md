# _Programming Language Suggester_

#### By _**Evgeniya Meshuris**_

#### _This is programming language suggester will give a result of what language you should learn based on your answers._

## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_
* _jQuery_

## Description

_This is programming language suggester will give a result of what language you should learn based on your experience, age and occupation._

## Setup/Installation Requirements

* _Copy the repository URL named "mr-robogers-neighborhood"_
* _Clone the copied repository to your computer_
* _Open the cloned directory named "mr-robogers-neighborhood"_
* _From the top of this directory, open index.html_
* _Fill out the From_
* _Click Submit to see the result_
* _Click Submit again if you want to repeat a request_

## Known Bugs

* _Logic in IF statement is not correct_
* _Alert do not work_


## License

Licensed under the [MIT License](LICENSE)

Copyright (c) _2022_ _Evgeniya Meshuris_

// *********************************************************************************************** \\

Specs

Return an Alert("Enter the number") if no number was given
Count up to entered number
Check entered numbers if they end with 3, if true return "Won't you be my neighbor?"
Check entered numbers if they end with 2, if true return "Boop!"
Check entered numbers if they end with 1, of true return "Beep!"
Return string mixString

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
