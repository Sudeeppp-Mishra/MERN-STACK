let info = ["ram", "hari", 29, true];
console.log(info);
console.log(info[3]);

console.log(info[1]);
info[1] = "sita";
console.log(info[1]);

info.push("a"); // Add to last
info.push("b");
console.log(info);

info.pop(); // Remove from last
console.log(info);

info.unshift("c"); // Add from first
console.log(info);

info.shift(); // Remove from first
console.log(info)
