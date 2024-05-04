// // //1-MASALA
// let text = prompt("So'z kiriting");
// function spelling() {
//      let answer = [];
//      for(let i = 0; i <= text.length; i++) {
//      answer.push(text.slice( i))
//      }
//      return answer 
// }
// document.write(spelling());

//2-MASALA
// function findIndexes(word, character) {
//     let birinchiIndex = word.indexOf(character);
//     let lastIndex = word.lastIndexOf(character);
    
//     return [birinchiIndex, lastIndex];
// }

// let word = prompt("So'z kiriting");
// let character = prompt("qaysi harfni indeksni qidirmoqdasiz");
// let indexes = findIndexes(word, character);
// document.write("First index:", indexes[0]); 

//3-MASALA
// let numbers = ["The", "big", "cat"];
// function removeDuplicates(arr) {
//     const kiritilganraqam = [];
//     arr.forEach(function(item) {
//if (!kiritilganraqam.includes(item)) {
//    kiritilganraqam.push(item);
//}
//     });
//     return kiritilganraqam;
// }
// const newArray = removeDuplicates(numbers);
// document.write(newArray);
            
// 3-masala 2-variant
// function removeDuplicatesFromArray(arr) {               
//     let set = new Set(arr);
//     let uniqueArray = Array.from(set);               
//     return uniqueArray;               
// }                
// let arr = [1, 3, 4, 1, 3, 4];               
// let uniqueArray = removeDuplicatesFromArray(arr);      
// document.write(uniqueArray);

//4-MASALA
// let arr = [7, 3, 6, 2, 5, 1, 4, 3]
// let newArr = arr.sort((a,b) => a - b)
// document.write(newArr.reverse())
                
//5-MASALA
// // let arr = [9, 3, 23, 456,]
// let newArr = arr.sort((a,b) => a - b)
// document.write(newArr.reverse())

//6-MASALA
// function capitalizeFirstLetter(names) {
//     return names.map(name => {
//         return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
//     });
// }
// let names = ["dovronbek", "avazbek", "sindor"];
// let capitalizedNames = capitalizeFirstLetter(names);
// document.write(capitalizedNames);

//7-MASALA
// function transformUpvoteCounts(upvoteString) {
//     return upvoteString.split(' ').map(count => {
//         if (count.includes('k')) {
//             return parseFloat(count) * 1000;
//         } else {
//             return parseInt(count);
//         }
//     });
// }
// let upvoteString = "78.2k 33.5k 7";
// let upvoteCounts = transformUpvoteCounts(upvoteString);
// document.write(upvoteCounts);

//8-MASALA
// function reverseImage(image) {
//     for (let i = 0; i < image.length; i++) {
//         for (let j = 0; j < image[i].length; j++) {
//             image[i][j] = image[i][j] === 0 ? 1 : 0;
//         }
//     }
//     return image;
// } 
// let image = [
//     [0, 1, 0],
//     [1, 0, 1],
//     [0, 1, 0]
// ];
// let reversedImage = reverseImage(image);
// document.write(reversedImage); 

//9-MASALA
// let arraysonlar = [4, 8, 3, 9, 2, 5];
// function massivYigindisi(array) {
//     let sum = 0;
//     for (let i = 0; i < arraysonlar.length; i++) {
//       sum += arraysonlar[i];
//     }
//     return sum;
//   }
//   document.write(massivYigindisi(arraysonlar));
  
//10-MASALA
// function onlyUniqueCharacters(strings) {
//     let uniqueStrings = [];

//     strings.forEach(function(string) {
//         let lowercaseString = string.toLowerCase();
//         let uniqueChars = new Set(lowercaseString);
//         if (uniqueChars.size === lowercaseString.length) {
//             uniqueStrings.push(string);
//         }
//     });
//     return uniqueStrings;
// }
// let strings = ["hello", "world", "javascript", "unique", "characters"];
// document.write(onlyUniqueCharacters(strings));

                        // IXTIYORIY
//1-MISOL
// let x = +prompt("Son kiriting");
// let y = +prompt("Son kiriting");

// function calculator() {
//      if(x > y) {
//           document.write("win")
//      }
//      else if (x < y) {
//           document.write("loss");
//      }
//      else if(x == y) {
//           document.write("tie")
//      }
//      else {
//           document.write("error")
//      }
// }
// calculator()

//2-MISOL
// function countOccurrences(str, char) {
//     let count = 0;

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//             count++;
//         }
//     }
//     return count;
// }
// const str = "hello";
// const char = "l";
// document.write(countOccurrences(str, char));

//3-MISOL
// function satrniRaqamgaAylantirish(satr) {
//     let raqam = parseInt(satr);
//     if (!isNaN(raqam)) {
//         return raqam;
//     } else {
//         return "Siz raqam emas, matn kiritdingiz.";
//     }
// }
// console.log(satrniRaqamgaAylantirish("123")); 
// console.log(satrniRaqamgaAylantirish("12.3"));

//4-MISOL
// function findMissingCows(cows) {
//     const sortedCows = cows.sort((a, b) => a - b);
//     const firstCow = sortedCows[0];
//     const lastCow = sortedCows[sortedCows.length - 1];
//     const existingCows = new Set(sortedCows);
//     const missingCows = [];
//     for (let i = firstCow; i <= lastCow; i++) {
//         if (!existingCows.has(i)) {
//             missingCows.push(i);
//         }
//     }
//     return {
//         missingCount: missingCows.length,
//         missingList: missingCows
//     };
// }
// const cows = [1, 3, 4, 6, 7, 9, 10];
// const result = findMissingCows(cows);
// document.write("Yo'qolgan qo'ylar soni:", result.missingCount);
// document.write("Yo'qolgan qo'ylar ro'yxati:", result.missingList);

//5-MISOL
// function qadrlash(n) {
//     const monkeys = [];
//     for (let i = 1; i <= 10; i++) {
//         document.write(" ", i, " ")
//     }
//     return monkeys;
// }
// qadrlash();
