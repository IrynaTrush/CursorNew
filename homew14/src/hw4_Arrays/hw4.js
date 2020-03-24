export const students = ["Саша", "Игорь", "Лена", "Ира", "Алексей", "Светлана"];

export const newArr = [...students];
newArr[1] = "Лена";
newArr[2] = "Игорь";

export function pairs (arr) {
    let result = [];
    for (let i = 0; i < arr.length; i += 2) {
        let partsOfArray = arr.slice(i, (i + 2));
        result.push(partsOfArray);
   }
    return result;
}