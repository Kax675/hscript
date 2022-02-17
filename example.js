const hscript = require("./hscript.js")
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
hscript.servePage(3000)