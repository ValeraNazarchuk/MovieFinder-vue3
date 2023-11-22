export function removeEmptyProperties(object) {
  const newObject = {};
  Object.keys(object).forEach((key) => {
    if (object[key]) {
      newObject[key] = object[key];
    }
  });
  return newObject;
}
