
const messages = {
    introduction: [ 'You should: ', 'Never', 'You could: '], 
    fortune: ['purchase a lottery ticket', 'travel internationally', 'eat cheese' ],
    conclusion: ['!', '.', '!!!!']
}

const randomIndex = () => {
   let randomNumber = Math.floor(Math.random() * 3)
   return randomNumber
}

console.log(randomIndex())

const fortuneTeller = (obj) => {
    console.log('Fortune teller')
}

