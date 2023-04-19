//Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.

function verificaCaracteresIguais (str1, str2) {
  const str1LowerCase = str1.toLowerCase();
  const str2LowerCase = str2.toLowerCase();

  for (let i = 0; i < str1LowerCase.length; i++) {
    if (str2LowerCase.indexOf(str1LowerCase[i])=== -1) {
      return false;
    }
  }

  for (let i = 0; i < str2LowerCase.length; i++) {
    if (str1LowerCase.indexOf(str2LowerCase[i]) === -1) {
      return false;
    }
  }

  return true;
}

console.log(verificaCaracteresIguais('casa', 'saca'));
console.log(verificaCaracteresIguais('orlando', 'macaco'));