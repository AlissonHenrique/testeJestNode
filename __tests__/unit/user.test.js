const bcrypt = require("bcryptjs");

const { User } = require("../../src/app/models");

const truncate = require("../utils/truncate");

describe("User", () => {
  beforeEach(async () => {
    await truncate();
  });
  it("shoul encypt user password", async () => {
    const user = await User.create({
      name: "Alisson",
      email: "alissons@fce.edu.br",
      password: "123456"
    });

    const compareHash = await bcrypt.compare("123456", user.password_hash);

    expect(compareHash).toBe(true);
  });
});
