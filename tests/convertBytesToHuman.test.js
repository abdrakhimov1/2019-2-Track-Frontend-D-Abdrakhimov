import convertBytesToHuman from "../convertBytesToHuman.js"

/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== 1,
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === 5
 */


test('Возвращает false для неправильного типа данных', () => {
    expect(convertBytesToHuman(-1)).toBe("false")
    expect(convertBytesToHuman("asd")).toBe("false")
    expect(convertBytesToHuman(-123123)).toBe("false")
    expect(convertBytesToHuman("12345")).toBe("false")
    expect(convertBytesToHuman("0")).toBe("false")
        // ...
});

test('Возвращает корректное значение для чисел', () => {
    expect(convertBytesToHuman(1024)).toBe("1.00 KB")
    expect(convertBytesToHuman(123123123)).toBe("117.42 MB")
    expect(convertBytesToHuman(10000)).toBe("9.77 KB")
    expect(convertBytesToHuman(45231)).toBe("44.17 KB")
    expect(convertBytesToHuman(45231123)).toBe("43.14 MB")
    expect(convertBytesToHuman(45231123123)).toBe("42.12 GB")


    // ...
});

// другая группа проверок