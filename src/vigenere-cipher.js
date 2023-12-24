const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    return this._crypt(message, key, 'encrypt');
  }
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }
    return this._crypt(encryptedMessage, key, 'decrypt');
  }

  _crypt(input, key, method) {
    const keyLength = key.length;
    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < input.length; i++) {
      const currentChar = input[i];
      const isUpperCase = currentChar >= 'A' && currentChar <= 'Z';
      const isLowerCase = currentChar >= 'a' && currentChar <= 'z';

      if (isUpperCase || isLowerCase) {
        const charCodeOffset = isUpperCase ? 65 : 97;
        const keyCode = key[keyIndex % keyLength].toLowerCase().charCodeAt() - 97;

        let offset = method === 'encrypt'
          ? ((currentChar.charCodeAt() - charCodeOffset) + keyCode) % 26
          : ((currentChar.charCodeAt() - charCodeOffset) + 26 - keyCode) % 26;

        result += String.fromCharCode(offset + charCodeOffset);
        keyIndex++;
      } else {
        result += currentChar;
      }
    }

    if (!this.direct) {
      result = result.split('').reverse().join('');
    }

    return result.toUpperCase();
  }
}

module.exports = {
  VigenereCipheringMachine
};
