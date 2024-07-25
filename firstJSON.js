function firstJSON(key, value) {
 let f = JSON.stringify({[key]: value})

 return f
}

firstJSON(
    'nombre',
    'JSCodebox'
  )