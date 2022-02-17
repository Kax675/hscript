# hscript
It's A Basic Libary To Easily Create HTML Files via. NodeJS

# Installing
`npm i hscript`

# Introduction
`const hscript = require("hscript.js")`

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
