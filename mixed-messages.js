// where different fortune options will be stored
const messages = {
    introduction: [ 'You should: ', 'Never ', 'You could: '], 
    fortune: ['purchase a lottery ticket', 'travel internationally', 'eat cheese' ],
    conclusion: ['!', '.', '!!!!']
}
// create a random number generator to pull differnt messages 
const randomIndex = () => {
   let randomNumber = Math.floor(Math.random() * 3)
   return randomNumber
}

const fortune = () => {
    let sentence = messages.introduction[randomIndex()] + messages.fortune[randomIndex()] + messages.conclusion[randomIndex()]
    console.log(sentence)


}

fortune();