/*
 * Функция `convertBytesToHuman` должна принимать
 * аргумент `bytes` только числового типа.
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа)
 */


export default function convertBytesToHuman(bytes) {

    if (typeof bytes !== "number") {
        return "false";
    }

    if (bytes < 0) {
        return "false";
        /// bytes = bytes * -1
    }

    if (bytes < 1024) {
        return bytes.toFixed(2).toString() + " Bytes";
    }

    bytes = bytes / 1024;

    if (bytes < 1024) {
        return bytes.toFixed(2).toString() + " KB";
    }

    bytes = bytes / 1024;

    if (bytes < 1024) {
        return bytes.toFixed(2).toString() + " MB";
    }

    bytes = bytes / 1024;

    if (bytes < 1024) {
        return bytes.toFixed(2).toString() + " GB";
    }

    bytes = bytes / 1024;

    if (bytes < 1024) {
        return bytes.toFixed(2).toString() + " TB";
    }

    return "false NUMB is too big.";

}