export default function divideByThree (string) {
    const arr = string.split(' ')
    const result = [];
    arr.map(el => {
      for (let i = 0; i < el.length; i+=3) {
        result.push(el.slice(i, i + 3));
      }
    })
    return result
  } 