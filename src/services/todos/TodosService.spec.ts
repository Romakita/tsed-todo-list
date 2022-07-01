import { PlatformTest } from "@tsed/common";
import { TodosService } from "./TodosService";

describe("TodosService", () => {
  beforeEach(PlatformTest.create);
  afterEach(PlatformTest.reset);

  it("should do something", () => {
    const instance = PlatformTest.get<TodosService>(TodosService);
    // const instance = PlatformTest.invoke<TodosService>(TodosService); // get fresh instance

    expect(instance).toBeInstanceOf(TodosService);
  });
});
