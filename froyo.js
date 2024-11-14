const flavorInput = prompt("vanilla, chocolate, strawberry, coffee");

const flavorArray = flavorInput.split(",");
for (let i = 0; i < flavorArray.length; i++) {
  flavorArray[i] = flavorArray[i].trim().toLowerCase();
}

function countFlavors(flavors) {
  const flavorCount = {};
  for (const flavor of flavors) {
    flavorCount[flavor] = (flavorCount[flavor] || 0) + 1;
  }
  return flavorCount;
}

const flavorCounts = countFlavors(flavorArray);
console.table(flavorCounts);
