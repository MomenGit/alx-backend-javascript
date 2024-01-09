export default function cleanSet(set, startString) {
  if (startString.length === 0) return '';
  const strings = [];

  set.forEach((element) => {
    if (element.startsWith(startString)) strings.push(element.slice(3));
  });
  return strings.join('-');
}
