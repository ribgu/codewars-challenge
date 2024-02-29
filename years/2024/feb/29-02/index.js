function warnTheSheep(queue) {
    const wolfIndex = queue.indexOf("wolf")
    let position = 0
    for (let i = queue.length - 1; i >= 0; i--) {
        position += 1
        const animal = queue[i]
        if(queue.length === 1 && wolfIndex === 0){
            return "Pls go away and stop eating my sheep"
        }else if(i === (wolfIndex + 1)){
            return `Oi! Sheep number ${position}! You are about to be eaten by a wolf!`
        }else if((wolfIndex + 1) === queue.length){
            return "Pls go away and stop eating my sheep"
        }
        
    }
}