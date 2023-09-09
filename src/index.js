module.exports = function towelSort(matrix) {

  if (matrix === undefined) {
    return[]
  }

  let sortedArr = []

  for (let i = 0; i<matrix.length; i++) {
    console.log(i)
    if (i===0) {
      console.log(matrix[0].join(','))
    //   console.log(matrix[0].join(','))
      sortedArr.push(matrix[0].join(','))
      console.log(`array now ${sortedArr}`)
      console.log(sortedArr)
    }     else if (i%2 !== 0) {
      sortedArr.push(matrix[i].reverse().join(','))
      console.log(`Reversed=${matrix[i].reverse().join(',')}, array now ${sortedArr}`)
      console.log(sortedArr)
    } else if (i%2 === 0) {
      sortedArr.push(matrix[i].join(','))
      console.log(sortedArr)
    } else {

    }
    
    if (i === matrix.length-1 && matrix.length-1 !== -1) {
      console.log(sortedArr.join(',').split(''))
      sortedArr = sortedArr.join(',').split(',')
      for (let elem of sortedArr) {
        console.log(elem === ',')
        if (elem === ',') {
         sortedArr.splice(sortedArr.indexOf(elem), 1)
        //   console.log(sortedArr)
        }
      }
      console.log(sortedArr)
      return sortedArr
    } 
}
  return [];
}
