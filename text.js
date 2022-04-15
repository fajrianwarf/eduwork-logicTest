// TASK 1
// Buatlah fungsi sebagai berikut :
// Apabila terdapat int = 4, maka outputnya 24 (prosesnya : 4*3*2*1)
// Apabila terdapat int = 8, maka outputnya 40320 (prosesnya : 8*7*6*5*4*3*2*1)

function task1(value){
    if(value < 0 || value === undefined) {
      return undefined //factorial cant be negative
    } else if(value == 0) {
      return 1 //factorial 0 is 1
    } else {
      return value * task1(value -1) //using recursive to calling again the function until the value reach = 0
    }
  }
  
  console.log('Task 1 :', task1());
  
  // TASK 2
  // Buatlah fungsi untuk reverse sebuah string
  // Apabila input = “abcde”, maka outputnya = “edcba”
  // Dilarang menggunakan function reverse, buatlah logika sendiri
  
  function task2(value) {
    if(value === undefined){
      return 'please insert the parameter'
    }
    let reverseString = ''
    for( let i = value.length - 1; i >= 0; i-- ){ //looping for the reverse index value using maximum length-1, the length should be -1 because the index is started from 0
      reverseString += value[i]
    }
    return reverseString
  }
  
  console.log('Task 2 :',task2('abcde'))
  
  // TASK 3
  // Buatlah fungsi untuk menampilkan jumlah digit angka tergantung dimana posisi atau
  // tempat dari angka dalam sebuah string “9.86-A5.321”!
  // Contoh: printDigitValue(‘9.86-A5.321’);
  // Hasil :
  // 9865321
  // 9000000
  // 800000
  // 60000
  // 5000
  // 300
  // 20
  // 1
  
  function task3(value) {
    let newValue = value.split('')
    for( let i = 0; i < newValue.length; i++){
      if(!isNaN(newValue[i])){
        console.log(newValue[i])
      }
    }
  }
  
  task3('9.86-A5.321')
  
  // TASK 4
  // Ketik kode untuk swap 2 integer variables tanpa VARIABLE TAMBAHAN
  // Contoh : let a = 3, let b = 7 => hasilnya a = 7, b = 3
  
  let a = 3;
  let b = 7;
  [a, b] = [b, a]; //directly swap the value by the index
  
  console.log('Task 4 :', a, b)
  