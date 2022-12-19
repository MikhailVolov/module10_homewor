//Дана строка. Необходимо вывести в консоль перевёрнутый вариант.

function reverse (str) {
var letters = str.split('');
  letters.reverse();
  return letters.join('');
}

alert(reverse('как дела!?'));
