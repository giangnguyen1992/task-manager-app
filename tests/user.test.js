const request = require("supertest");
const app = require("../src/app");
const User = require("../src/models/user");

const userOne = {
  name: "Thomas",
  email: "gnjksg@ecam.de",
  password: "12345gbvbsh2",
};

beforeEach(async () => {
  await User.deleteMany();
  await new User(userOne).save();
});

test("Should singup a new user", async () => {
  await request(app)
    .post("/users")
    .send({
      name: "Giang",
      email: "tgn199gfgd2@hotmail.de",
      password: "Hehehehe!",
    })
    .expect(201);
});

test("Should login a user", async () => {
  await request(app).post("/users/login").send(userOne).expect(200);
});
