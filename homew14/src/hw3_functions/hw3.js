export default function maxNumber (number) {
    let result = String(number);
    result.split('');
    return Math.max(...result);
    }