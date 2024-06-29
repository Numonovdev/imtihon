     // 1-masala

     // function sonlar(str){
     //      let arr = [];
     //      for(let i = 0; i < str.length; i++){
     //          arr.unshift(str[i])
     //      }
     //      return arr;
     // }
     // console.log(sonlar('1234567'))

// 2-masala

// == ikkisiham birxil vazifani bajaradi ===


// 3-masala
// let n = prompt('son kiriting');

// let arr = [];
//  for (let i = 1; i <= n; i++){
//      arr.push(i);
//  }
//  console.log(arr);


// 4-masala

// function masala4(arr){
//      let yangiarr = [];


//      let juft = [];
//      let toq = [];
// arr.forEach(function(value){
//      if(value % 2 == 0){
//          juft.push(value);
//      } else{
//          toq.push(value)
//      }
// })
// let juftyigindi = 0;
// juft.forEach(function(value){
//        juftyigindi = juftyigindi + value;
// })
// let toqyigindi = 0;
// toq.forEach(function(value){
//      toqyigindi = toqyigindi + value
// })

// yangiarr.push(toqyigindi);
// yangiarr.push(juftyigindi);
// return yangiarr
// }
// console.log(masala4([12, 5, 16, 3, 81]))

// 5-masala

// function olibtashlash(str){
//      let string = ''
//      for(let inter of str){
//           if(inter != '!'){
//                 string += inter
//           }
//      }
//      return string;
// }
// console.log(olibtashlash('asa!dj!  jon!ik1!d'))

// 6-masala

// function ikkiarryigindisi(arr1, arr2){
//      let arr1yigindi = 0;
//      arr1.forEach(function (value) {
//             arr1yigindi = arr1yigindi + value;
//      })
//      let arr2yigindi = 0;
//      arr2.forEach(function (value) {
//             arr2yigindi = arr2yigindi + value;
//      })
//      let result = arr1yigindi + arr2yigindi;
//      return result;
     
// }

// console.log(ikkiarryigindisi([2, 5, 7], [74, 6, 10, 5]))


// 7-masala

// function birvaoxirgi(str){
//      let string = ''
//      for(let i = 0; i < str.length; i++){
//            if(i != 0 && i != str.length - 1){
//                string += str[i];
//            }
//      }
//      return string;
// }
// console.log(birvaoxirgi('salom dunyo'))

// 8-masala

// function sonlar(arr){
//      let  rray = [];
//      arr.forEach(function(value){
//           rray.unshift(value);
//      })
//      return rray;
// } console.log(sonlar(['sonlar', 12, true, 34]))


// 9-masala
//  let str = prompt('son kiriting')

// function qabul(str){
//      let result = ''
//        let songi = str[str.length - 1]
//        for (let i of str){
//           if(songi != 0){
//              result += i;
//           }
//        }
//        return result;
// }
// console.log(qabul(str))



// 10-masala

// function topuvchi(arr){
//      let son = arr[0]
//      arr.forEach(function(value){
//           if( son > value){
//                son = value;
//           }
//      })
//      return son ** 4;
// }
// console.log(topuvchi([2, 45, 31, 5, 11]))