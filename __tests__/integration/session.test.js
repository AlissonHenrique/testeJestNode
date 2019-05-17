const request = require("supertest");
const app = require("../../src/app");
const truncate = require("../utils/truncate");
const { User } = require("../../src/app/models");

describe("Authentication", () => {
  beforeEach(async () => {
    await truncate();
  });

  it("should be able to autenticate witch valid credentials", async () => {
    const user = await User.create({
      name: "Alisson",
      email: "alissons@fce.edu.br",
      password: "123456"
    });
    const response = await request(app)
      .post("/sessions")
      .send({
        email: user.email,
        password: "123456"
      });
    expect(response.status).toBe(200);
  });

  it("shold not be able to authenticate  with invalid credentials", async () => {
    const user = await User.create({
      name: "Alisson",
      email: "alissons@fce.edu.br",
      password_hash: "123456"
    });
    const response = await request(app)
      .post("/sessions")
      .send({
        email: user.email,
        password: "123456"
      });
    expect(response.status).toBe(401);
  });
});
