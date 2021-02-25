
exports.min =  (array=0) =>{
    if (array.length ) {
        return Math.min(...array)
    } else  return 0
}

exports.max = (array=0) =>{
    if (array.length ) {
        return Math.max(...array)
    } else  return 0
}

exports.avg = (array=0) =>{
    if (array.length ) {
        return array.reduce((a, b) => a + b)/array.length
    } else  return 0
}

