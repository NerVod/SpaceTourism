const mongoose = require("mongoose");

module.exports = function (app) {
  mongoose
    .connect(
      "mongodb+srv://NerVod:MotDePasseMongo@cluster0.aykvr.mongodb.net/spacetour?retryWrites=true&w=majority",
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    )
    .then((connection) => console.log("backend connecté à mongoDB !"))
    .catch((err) => console.log(err));
  mongoose.Promise = global.Promise;
  process.on("SIGINT", cleanup);
  process.on("SIGTERM", cleanup);
  process.on("SIGHUP", cleanup);
  if (app) {
    app.set("mongoose", mongoose);
  }
};

function cleanup() {
  mongoose.connection.close(function () {
    process.exit(0);
  });
}
