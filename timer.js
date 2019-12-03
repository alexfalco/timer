


let arr = process.argv.slice(2,).map(Number).filter(num => num > 0)

console.log(arr)


count = 0

let beep = function(data) {

  for (const index of data) {
  count = count + 1
  setTimeout(() => process.stdout.write('\x07'),count*3000) 
}

}

beep(arr)