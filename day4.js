// ! Complejidad cognitiva: 2
function decode(message) {
  const regex = /\(([^()]+)\)/;
  let match = message.match(regex);
  while (match) {
    const reversed = match[1].split('').reverse().join('');
    message = message.replace(match[0], reversed);
    match = message.match(regex);
  }
  return message;
}

const c = decode('sa(u(cla)atn)s')
console.log(c)