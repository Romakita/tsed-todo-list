import {BodyParams, Req} from "@tsed/common";
import {OnVerify, Protocol} from "@tsed/passport";
import {IStrategyOptions, Strategy} from "passport-local";

@Protocol<IStrategyOptions>({
  name: "login",
  useStrategy: Strategy,
  settings: {
    usernameField: "email",
    passwordField: "password"
  }
})
export class LoginProtocol implements OnVerify {
  async $onVerify(@Req() request: Req, @BodyParams() credentials: any) {
    const {email, password} = credentials;

  }
}
