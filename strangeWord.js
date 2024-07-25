function strangeWord(word) {
  let a = ""

  for(let i=0;i<word.length;i++)
  {
    if(i % 2 ==0)
    {
        a += word[i]
    }
  }

  for(let x in word)
  {
    if(x % 2 == 0)
    {
        a += word[x]
    }
  }

return a
}

strangeWord('JSCodebox')
