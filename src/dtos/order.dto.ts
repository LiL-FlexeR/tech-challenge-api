import { IsString, Length } from "class-validator";

import { IsStringArrayLength } from "@app/decorators/is-string-array-length.decorator";

export class CreateOrderDto {
  @IsStringArrayLength(3, 150)
  orderNames!: string[];

  @IsString()
  @Length(3, 100)
  userName!: string;
}
