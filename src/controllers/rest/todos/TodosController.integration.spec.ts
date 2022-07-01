import { PlatformTest } from "@tsed/common";
import SuperTest from "supertest";
import { TodosController } from "./TodosController";
import { Server } from "../../../Server";

describe("TodosController", () => {
  let request: SuperTest.SuperTest<SuperTest.Test>;

  beforeEach(PlatformTest.bootstrap(Server, {
    mount: {
      "/": [TodosController]
    }
  }));
  beforeEach(() => {
    request = SuperTest(PlatformTest.callback());
  });

  afterEach(PlatformTest.reset);

  it("should call GET /todos", async () => {
     const response = await request.get("/todos").expect(200);

     expect(response.text).toEqual("hello");
  });
});
