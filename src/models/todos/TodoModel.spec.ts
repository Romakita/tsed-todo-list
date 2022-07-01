import { PlatformTest } from "@tsed/common";
import { TodoModel } from "./TodoModel";

describe("TodoModel", () => {
  beforeEach(PlatformTest.create);
  afterEach(PlatformTest.reset);

  it("should do something", () => {
    const instance = PlatformTest.get<TodoModel>(TodoModel);
    // const instance = PlatformTest.invoke<TodoModel>(TodoModel); // get fresh instance

    expect(instance).toBeInstanceOf(TodoModel);
  });
});
