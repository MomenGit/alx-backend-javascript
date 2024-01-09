export default function hasValuesFromArray(set, array) {
  let allExist = false;
  array.forEach((element) => {
    allExist = set.has(element);
  });
  return allExist;
}
