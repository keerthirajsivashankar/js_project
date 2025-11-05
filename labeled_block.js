let groups = [
  ["tiya", "rame", "jane"],
  ["jane", "rant", "tiya"],
  ["ram", "jane", "joe"],
  ["joe", "Rassol", "jane"],
];

for (let group of groups) {
  inner: for (let name of group) {
    if (name[0] === "R" || name[0] === "r") {
      console.log("names thar start with R : " + name);
      break inner;
    }
  }
}
