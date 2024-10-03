/**
 *  - ECMAScript 5 (ES5)  - It added new features to the language and modified some of the existing ones. 
 *  - To keep the old code working, most such modifications are off by default. 
 *  - You need to explicitly enable them with a special directive: "use strict".
 */

'use strict'

var demo = "Hi Use strict";

function printVarMessage(){
    console.log(demo)
    //console.log will print the message in the terminal 
}

printVarMessage()