const express = require('express');
const path = require('path')
const hbs = require("hbs");
// hbs.registerPartials()
hbs.registerPartials(path.join(__dirname, "../views/partials"))



class Server {

    constructor() {
        this.app = express();

        this.port = process.env.PORT;
        // this.hbs.registerPartials(path.join(__dirname,"../views/partials"))
        this.app.set('view engine', 'hbs');
        //Middlewares
        this.middlewares();
        //Rutas
        this.routes();
    }

    middlewares() {
        // Carpeta Pública
        this.app.use(express.static(path.join(__dirname, "../public")))
    }



    routes() {
        this.app.get('/', (req, res) => {
            res.render("index.hbs")
            // res.sendFile(path.join(__dirname,"../views/index.hbs"))
        })

        this.app.get('/home', (req, res) => {
            res.render("index.hbs")
            // res.sendFile(path.join(__dirname,"../views/index.hbs"))
        })


        this.app.get('/todolist', (req, res) => {
            res.render("todolist.hbs")
        })

        this.app.get('/calculadora', (req, res) => {
            res.render("calculadora.hbs")
        })
        this.app.get('/reloj', (req, res) => {
            res.render("reloj.hbs")
        })

        // envio de json
        this.app.get('/nosotros', (req, res) => {
            res.render("nosotros.hbs", dev)
        })


        this.app.get('*', (req, res) => {
            res.render("err/404.hbs")
        })








        this.app.get('/api', (req, res) => {
            res.json({
                mensaje: 'GET'
            });
        });
        this.app.post('/api', (req, res) => {
            res.json({
                mensaje: 'POST'
            });
        });
        this.app.put('/api', (req, res) => {
            res.json({
                mensaje: 'PUT'
            });
        });
        this.app.delete('/api', (req, res) => {
            res.json({
                mensaje: 'DELETE'
            });
        });

    }

    start() {
        this.app.listen(this.port, () => {

            console.log("===============================");
            console.log("===============================");
            console.log("");

            let msg = `Servidor iniciado en el puerto: ${this.port}\nPresione Ctrl + C para detener :)`
            console.log(msg);
            console.log("");
            console.log("===============================");
            console.log("===============================");

        });
    }

};




const dev = {

    "jeremy":
    {
        "descripcion": `Desarrollo FrontEnd y Backend\nHTML, CSS, JS y NodeJS.`,
        "foto": "https://i.ibb.co/c6Z7ZkY/A.jpg",
        "nombreCompleto": "Jeremy Ayza",
        "gh": "https://github.com/JeremyAyza",
        "tw": "https://twitter.com",
        "in": "https://www.linkedin.com/in/JeremyAyzaMatias/"
    },
    "arianno":
    {
        "descripcion": "Desarrollo FrontEnd y Backend\nNodeJS y Spring Boot.",
        "foto": "https://i.ibb.co/51JtyLs/B.jpg",
        "nombreCompleto": "Arianno Sanchez",
        "gh": "https://github.com",
        "tw": "https://twitter.com/",
        "in": "https://www.linkedin.com"
    },
    "wilmer":
    {
        "descripcion": "Desarrollo app Reloj\nHTML, CSS Y JQuery",
        "foto": "https://i.ibb.co/0GCCvPV/V.jpg",
        "nombreCompleto": "Wilmer Chancafe",
        "gh": "https://github.com/",
        "tw": "https://twitter.com",
        "in": "https://www.linkedin.com/in/whilmer-c-n-142952248/"
    },
    "bryan":
    {
        "descripcion": "Desarrollo app Calculadora\nHTML y CSS",
        "foto": "https://i.ibb.co/C2dw32G/Whats-App-Image-2022-08-13-at-6-56-01-PM.jpg",
        "nombreCompleto": "Bryan Delgado",
        "gh": "https://github.com/",
        "tw": "https://twitter.com/Bryan02702?t=gV9OywNjXlXUpoUiirX3Rg&s=09",
        "in": "https://www.linkedin.com"
    }

}















module.exports = Server;

