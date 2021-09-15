import { expect, haveResource } from "@aws-cdk/assert";
import * as sst from "@serverless-stack/resources";
import MyStack from "../MyStack";

test("Test Stack", () => {
  const app = new sst.App();

  const stack = new MyStack(app, "test-stack");

  expect(stack).to(haveResource("AWS::Lambda::Function"));
});
