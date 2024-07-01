// Функция для проверки длины строки. Она принимает строку, которую нужно проверить, и максимальную длину и возвращает

const comparesStringmaxlength = (maxlength, string) => maxlength.length <= string;

comparesStringmaxlength('проверяемая строка', 40);
comparesStringmaxlength('проверяемая строка', 18);
comparesStringmaxlength('проверяемая строка', 10);

console.log('проверяемая строка: ', comparesStringmaxlength('проверяемая строка', 40));
console.log('проверяемая строка: ', comparesStringmaxlength('проверяемая строка', 18));
console.log('проверяемая строка: ', comparesStringmaxlength('проверяемая строка', 10));

// Функция для проверки, является ли строка палиндромом. Палиндром — это слово или фраза, которые одинаково читаются и слева направо и справа налево.

const checksPalindromeString = (string) => {
  string = string.replaceAll(' ', '').toLowerCase();
  let newString = '';
  for(let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }

  return newString === string;
};

checksPalindromeString('топот');

console.log('топот', checksPalindromeString('топот'));
console.log('ДовОд', checksPalindromeString('ДовОд'));
console.log('Кекс', checksPalindromeString('Кекс'));
