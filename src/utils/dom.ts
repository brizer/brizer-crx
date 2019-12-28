export function parseStr2Dom(str: string): Document {
  const doc:Document= new DOMParser().parseFromString(str, "text/html");
  return doc;
}
