import {CHARS, commonWords} from "$lib/constants";

export function generatePasswords(count: number, options: { length: number; memorable?: boolean; hex?: boolean }): string[] {
    const chars = options.hex
        ? CHARS.HEX
        : options.memorable
            ? CHARS.MEMORABLE
            : CHARS.COMPLEX

    const generatePassword = (): string => {
        let result = "";
        const randomValues = new Uint8Array(options.length * 2);
        crypto.getRandomValues(randomValues);

        let i = 0;
        while (result.length < options.length && i < randomValues.length) {
            const randomValue = randomValues[i];
            i++;

            const maxValidValue = Math.floor(256 / chars.length) * chars.length;

            if (randomValue < maxValidValue) {
                result += chars.charAt(randomValue % chars.length);
            }
        }

        if (result.length < options.length) {
            return generatePassword();
        }

        return result;
    };

    return Array(count).fill(0).map(() => generatePassword());
}

export const defaultPasswordSettings = () => ({
    memorable: generatePasswords(10, { length: 10, memorable: true }),
    strong: generatePasswords(10, { length: 16, memorable: false }),
    fortKnox: generatePasswords(10, { length: 24, memorable: false }),
    codeIgniter: generatePasswords(10, { length: 32, memorable: false }),
    wpa160: generatePasswords(10, { length: 20, memorable: false }),
    wpa504: generatePasswords(6, { length: 63, memorable: false }),
    wep64: generatePasswords(10, { length: 5, hex: true }),
    wep128: generatePasswords(10, { length: 13, hex: true }),
    wep152: generatePasswords(10, { length: 16, hex: true }),
    wep256: generatePasswords(10, { length: 29, hex: true }),
})

export const generateCustomPassword = (
    { useUppercase, useLowercase, useNumbers, useSymbols, customLength }:
    { useUppercase: boolean; useLowercase: boolean; useNumbers: boolean; useSymbols: boolean; customLength: number }
): string => {
    let charset = ""
    if (useUppercase) charset += CHARS.ALPHABET_UPPER
    if (useLowercase) charset += CHARS.ALPHABET_LOWER
    if (useNumbers) charset += CHARS.NUMERIC
    if (useSymbols) charset += CHARS.SYMBOLS

    if (charset === "") {
        return "Please select at least one character type";
    }

    try {
        const randomValues = new Uint8Array(customLength * 2);
        crypto.getRandomValues(randomValues);

        const maxValidValue = Math.floor(256 / charset.length) * charset.length;

        let result = "";
        let i = 0;

        while (result.length < customLength && i < randomValues.length) {
            if (randomValues[i] < maxValidValue) {
                result += charset.charAt(randomValues[i] % charset.length);
            }
            i++;
        }

        if (result.length < customLength) {
            return generateCustomPassword({ useUppercase, useLowercase, useNumbers, useSymbols, customLength });
        }

        return result;
    } catch (error) {
        console.error("Error generating secure password:", error);
        return "Failed to generate secure password";
    }
}

export const generatePassphrase = (
    { passphraseWordCount }:
    { passphraseWordCount: number }
) => {
    try {
        const wordIndices = new Uint32Array(passphraseWordCount);
        crypto.getRandomValues(wordIndices);

        const capitalizationChoices = new Uint8Array(passphraseWordCount);
        crypto.getRandomValues(capitalizationChoices);

        const words = [];
        for (let i = 0; i < passphraseWordCount; i++) {
            const wordIndex = wordIndices[i] % commonWords.length;
            const word = commonWords[wordIndex];

            if (capitalizationChoices[i] % 2 === 0) {
                words.push(word.charAt(0).toUpperCase() + word.slice(1));
            } else {
                words.push(word);
            }
        }

        return words.join(' ');
    } catch (error) {
        console.error("Error generating secure passphrase:", error);
        return "Failed to generate secure passphrase";
    }
}


export const generatePin = (
    { pinLength }:
    { pinLength: number }
) => {
    try {
        const randomBytes = new Uint8Array(pinLength);
        crypto.getRandomValues(randomBytes);

        let result = "";
        for (let i = 0; i < pinLength; i++) {
            const digit = randomBytes[i] % 10;
            result += digit.toString();
        }

        return result
    } catch (error) {
        console.error("Error generating secure PIN:", error);
        return "Failed to generate secure PIN";
    }
}

export const generatePronounceablePassword = (
    { pronounceableLength }:
    { pronounceableLength: number}
) => {
    try {
        const consonants = "bcdfghjklmnpqrstvwxyz";
        const vowels = "aeiou";
        const specials = "!@#$%^&*";
        const numbers = "0123456789";

        const randomValues = new Uint8Array(pronounceableLength * 2 + 4); // Extra bytes for special chars and pattern choice
        crypto.getRandomValues(randomValues);

        const startWithConsonant = randomValues[0] % 2 === 1;

        let result = "";
        let byteIndex = 1;

        for (let i = 0; i < pronounceableLength; i++) {
            const charSet = ((i % 2 === 0 && startWithConsonant) || (i % 2 === 1 && !startWithConsonant))
                ? consonants : vowels;

            const maxValidValue = Math.floor(256 / charSet.length) * charSet.length;

            while (byteIndex < randomValues.length) {
                if (randomValues[byteIndex] < maxValidValue) {
                    result += charSet.charAt(randomValues[byteIndex] % charSet.length);
                    byteIndex++;
                    break;
                }
                byteIndex++;
            }
        }

        result = result.charAt(0).toUpperCase() + result.slice(1);

        if (pronounceableLength > 4) {
            const pos = (randomValues[byteIndex] % (result.length - 2)) + 1;
            byteIndex++;

            const numChar = numbers.charAt(randomValues[byteIndex] % numbers.length);
            byteIndex++;

            const specialChar = specials.charAt(randomValues[byteIndex] % specials.length);

            result = result.slice(0, pos) + numChar + specialChar + result.slice(pos);
        }

        return result;
    } catch (error) {
        console.error("Error generating pronounceable password:", error);
        return "Failed to generate pronounceable password";
    }
}