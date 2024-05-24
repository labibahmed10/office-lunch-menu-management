/* eslint-disable @typescript-eslint/no-explicit-any */
const zodValidator = (error: Record<string, any>, name: string) => {
  const properties = name.split(".");
  let value = error;

  for (const prop of properties) {
    if (value[prop]) {
      value = value[prop];
    } else {
      return undefined;
    }
  }

  return value.message;
};

export default zodValidator;
