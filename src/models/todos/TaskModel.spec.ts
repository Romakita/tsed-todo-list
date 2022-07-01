import { PlatformTest } from "@tsed/common";
import { TaskModel } from "./TaskModel";

describe("TaskModel", () => {
  beforeEach(PlatformTest.create);
  afterEach(PlatformTest.reset);

  it("should do something", () => {
    const instance = PlatformTest.get<TaskModel>(TaskModel);
    // const instance = PlatformTest.invoke<TaskModel>(TaskModel); // get fresh instance

    expect(instance).toBeInstanceOf(TaskModel);
  });
});
