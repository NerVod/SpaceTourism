const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const userRoutes = require('./routes/user.routes');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use("/warm", userRoutes)
app.use("/destination", userRoutes);
app.use("/crew", userRoutes);
app.use("/technology", userRoutes);

require("./database/db")(app)

app.get('/', (req, res) => {
    console.log("Bien sur les routes backend !")
});

app.listen(PORT, () => {
    console.log(`le serveur écoute sur le port ${PORT}`)
})