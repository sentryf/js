function more4than0(n) {
 
    let count = n.filter((x) => x == 4)
    let cero = n.filter((c) => c == 0)
    
    
    if(count.length > cero.length)
    {
        return true
    }
    return false
}

more4than0([4,0,4,0])
