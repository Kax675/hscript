const fs = require("fs");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const http = require('http');
const filePath = "index.html";
let pageContent = `<!DOCTYPE html>
<html lang="en" id="html">

<head id="head">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title id="title">I Love Hscript!</title>
</head>

<body id="body">
</body>

</html>`

let index;
const presets = [{
        name: "textCenter",
        styleProp: "text-align: center;"
    },
    {
        name: "documentCenter",
        styleProp: "position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);"
    },
]
const colors = [{
        name: "red",
        styleProp: "color: red;"
    },
    {
        name: "green",
        styleProp: "color: green;"
    },
    {
        name: "blue",
        styleProp: "color: blue;"
    },
    {
        name: "yellow",
        styleProp: "color: yellow;"
    },
]


const hscript = {
    title: function(params) {
        const findpreset = presets.find(el => el.name == params.preset)
        const findcolor = colors.find(el => el.name == params.color)

        if (findpreset !== undefined) {
            style = findpreset.styleProp + findcolor.styleProp + params.style

            return `<h1 style="${style}">${params.content}</h1>`
        }

    },
    button: function(params) {
        const findpreset = presets.find(el => el.name == params.preset)
        const findcolor = colors.find(el => el.name == params.color)


        if (findpreset !== undefined) {
            style = findpreset.styleProp + findcolor.styleProp + params.style
            return `<button style="${style}">${params.content}</button>`
        }

    },
    script: function(script) {


        if (script !== undefined) {
            return `<script>${script}</script>`
        } else {
            console.error("No script provided")
        }

    },

    servePage: function(port) {
        if (fs.existsSync(filePath)) {
            index = fs.readFileSync(filePath, 'utf8')
        } else {
            fs.writeFileSync(filePath, pageContent);
            index = fs.readFileSync(filePath, 'utf8')
        }

        http.createServer(function(req, res) {
            res.write(index);
            res.end();
        }).listen(port);

    },

    addBody: function(content) {
        const dom = new JSDOM(pageContent);
        fs.writeFileSync(filePath, pageContent += content)

    }
}
module.exports = hscript