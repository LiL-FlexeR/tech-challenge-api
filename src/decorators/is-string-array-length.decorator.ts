import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from "class-validator";

export function IsStringArrayLength(
  min: number,
  max: number,
  validationOptions?: ValidationOptions
) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: "isStringArrayLength",
      target: object.constructor,
      propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, _args: ValidationArguments) {
          if (!Array.isArray(value)) {
            return false;
          }
          return value.every(
            (item) =>
              typeof item === "string" &&
              item.length >= min &&
              item.length <= max
          );
        },
        defaultMessage(args: ValidationArguments) {
          return `All elements in ${args.property} must be strings with a length between ${min} and ${max}.`;
        },
      },
    });
  };
}
