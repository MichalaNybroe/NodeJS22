import express from "express"
//server gives videre til socket.io gennem http
import http from "http" //kan bare ændres til https
import { Server } from "socket.io"

const app = express()
app.use(express.static("public"))

const server = http.createServer(app)
const io = new Server(server) //her sockets forbinder til global namespace

io.on("connection", (socket) => {
    console.log(`A socket connected on id ${socket.id}`)

    socket.on("client chose a color", (data) => {
        //broadcasts to all sockets but itself
        //socket.broadcast.emit("This is the new color", data)

        //Emits to all sockets in io namespace
        //io.emit("This is the new color", data)

        //emits only to the socket itself
        socket.emit("This is the new color", data)
    })

    io.on("disconnect", () => {
        console.log(`Socket ${socket.id} left.`)
    })
})


server.listen(8080, () => console.log("Server is running on port ", 8080))

