function reverseArray(arr) {
    let reversedArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
    }
    return reversedArr;
    }
    
    const arr = ["a", "b", "c", "d", "e"];
    const reversedArr = reverseArray(arr);
    
    console.log(reversedArr); 