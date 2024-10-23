import { IsStringArrayLength } from "@app/decorators/is-string-array-length.decorator";
import { IsArray, IsString, Length } from "class-validator";

export class CreateOrderDto {
  @IsStringArrayLength(3, 150)
  orderNames: string[] = [];

  @IsString()
  @Length(3, 100)
  userName: string = "";
}
