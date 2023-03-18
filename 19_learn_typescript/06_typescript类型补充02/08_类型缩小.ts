// typeof
type IDType = number | string;
function printID(id: IDType) {
  if (typeof id === "string") {
    console.log(id.toLocaleLowerCase());
  } else {
    console.log(id);
  }
}
