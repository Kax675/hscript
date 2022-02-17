# hscript
It's A Basic Libary To Easily Create HTML Files via. NodeJS

# Installing and Using
First: Download Code And Then Import hscript.js Like `const hscript = require("./hscript.js")`

# How To Use It?
Well... At The Start You Must Use `hscript.addBody()` at Your Code. If You Want To Create Element You Have To Use It Inside This Function

## Functions
`hscript.servePage()`
You Serve the Page from a Specific Port
 > Usage: `hscript.servePage(portNumber)`
 >
 > NOTE: Always Put This Function At The Bottom Of Your Code!
 > 
 > Example: `hscript.servePage(3000)`


`hscript.addBody()`
Add Elements To Your Code
 > Usage: `hscript.addElement(elements)`
 >
 > NOTE: When Using Elements, Separate Them With +
 > 
 > Example: `hscript.addBody(
    hscript.script("alert("Hello World")") + hscript.title({content: "Test"})
    )`


`hscript.title()`
Add Title
 > Usage: `hscript.title()`
 >
 > NOTE: When Using Options, Separate Them With ,
 > 
 > Example: `hscript.title({
        content: "Test Title",
        preset: "textCenter",
        color: "red",
        style: "bacground-color: black;"
    })` 
    
`hscript.button()`
Add Button
 > Usage: `hscript.button()`
 >
 > NOTE: When Using Options, Separate Them With ,
 > 
 > Example: `hscript.button({
        content: "Test Button",
        preset: "documentCenter",
        color: "red",
        style: "bacground-color: black;"
    })`
    
    
`hscript.script()`
Adds Custom Script
 > Usage: `hscript.script("Your Script")`
 >
 > 
 > Example: `hscript.script("alert("Hello World!")")` 

## Colors
For Now We Have Only 4 Colors:
`red, green, blue, yellow`

## Presets
For Now We Have Only 2 Presets:
`documentCenter, textCenter`

## Full Example

`const hscript = require("./hscript.js")
const testScript = 'alert("Hello World!")'
hscript.addBody(
    hscript.script(testScript) +

    hscript.title({
        content: "Hello World!",
        preset: "textCenter",
        color: "red",
        style: "font-size: 50px;"
    }) +
    hscript.button({

        content: "Click Me",
        preset: "documentCenter",
        color: "red",
        style: "font-size: 100px;"
    })

)
hscript.servePage(3000)`

# THIS IS A VERY EARLY PROTOTYPE! PLEASE REMEMBER THIS APPLICATION IS TO BE IMPROVED!
