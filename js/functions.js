const checkLength = (line, maxLenght) => line.length <= maxLenght;

const isPalindrome = (line) => {
  let normalizedLine = line.replaceAll(' ', '').toLowerCase();
  let reversedLine = normalizedLine.split('').reverse().join('');;
  return reversedLine === normalizedLine;
}

checkLength('проверяемая строка', 20);
checkLength('проверяемая строка', 18);
checkLength('проверяемая строка', 10);

isPalindrome('топот');
isPalindrome('ДовОд');
isPalindrome('Кекс');
