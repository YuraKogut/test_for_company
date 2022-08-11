//1)Make a function that displays the number of times it has been called

// let myFuncCalls = 0;

// function myFunction()
// {
//     myFuncCalls++;
//     console.log( "I have been called " + myFuncCalls + " times" );
// }


// //2)Write a function that replaces all ones with zeros and vice versa for the object

// function overvrite(obj) {
//   for (item in obj) {
//       if (typeof obj[item] == 'object') {
//           overvrite(obj[item])
//       } else {
//           if (obj[item] == 1) {
//               obj[item] = 0;
//           } else {
//               obj[item] = 1;
//           }
//       }
//   }
// }
// overvrite(d);
// console.log(d);

//3)Make a function that takes a number n, and returns a two-dimensional array with length n*n, with 2 on the diagonal and 1 on the top and bottom of the resulting segment

const bar = x => {
  const arr = [];
  arr.length = x - 1;
  let currentArr = [];
  for (let i = 0; i < x; i++) {
      currentArr.unshift(1)
  }

  currentArr[0] = 2;
  currentArr[x - 1] = 2;

  arr[0] = currentArr;
  arr[x - 1] = currentArr;


  // arr
  for (let i = 0; i < x; i++) {
      // for()
      if (x % 2 === 0) {
          console.log('test')
      }
  }
}

bar(4)
//4). Create a similar element, when you click on any of the blocks it should change own color

// arrColors=['lightyellow','red','blue','black','green','purple','#C4A484']
// const classOne = document.querySelector('div');
// classOne.addEventListener('click', (e) => {
//   let color=e.target.style.background
//   newIndex=(arrColors.findIndex(e=>e===color)+1)%arrColors.length
//   e.target.style.background = arrColors[newIndex]
// })
