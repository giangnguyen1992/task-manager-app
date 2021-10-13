const mongoose = require("mongoose");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api");
}

main().catch((err) => console.log(err));
