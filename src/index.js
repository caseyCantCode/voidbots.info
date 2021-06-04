const app = require("express")()
app.set("views", "./src/views")
app.get("/", (req, res) => res.render("home.ejs"))
app.listen(3002, () => console.log("voidbots.info is online'"))
