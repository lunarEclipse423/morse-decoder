const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let letters = [];
    for (let i = 0; i < Math.ceil(expr.length/10); i++){
      letters[i] = expr.slice((i*10), (i*10) + 10);
    }

    letters.map((letter, index, arr) => {
        if (letter.includes('*')) {
            return arr[index] = ' ';
        }
        let str = letter.slice(letter.indexOf('1'));
        let res = '';
        for (let i = 0; i < str.length; i += 2) {
            let sign = str.slice(i, i + 2);
            res += (sign == '10' ? '.' : sign == '00' ? '' : '-');
        }
        return arr[index] = res;
    });
  
    return letters.map(letter => {
        if (letter === ' ') {
            return ' ';
        }
        for (let key in MORSE_TABLE) {
            if (key === letter) {
                return MORSE_TABLE[key];
            }
        }
    }).join('');
}

module.exports = {
    decode
}