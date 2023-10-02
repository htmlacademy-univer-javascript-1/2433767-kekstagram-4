function checkLength(line, maxLenght) {
  if (line.length <= maxLenght){
    return true;
}

return false;
}

function isPalindrome(line) {
  let normalizedLine = line.replaceAll(' ', '').toLowerCase();
  let reversedLine = '';

  for (let i = normalizedLine.length - 1; i >= 0; i--) {
    reversedLine += normalizedLine[i];
  }

  if (reversedLine === normalizedLine){
    return true
  }

  return false;
}

let maxLenght = 5;
let line = 'топот';

checkLength(line, maxLenght);
isPalindrome(line);
