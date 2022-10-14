const needle = require('needle')

const url = 'https://emojihub.herokuapp.com/api/all'
needle('get', url )

async function f(){
    try {
        let responsive = await needle('get', url)
        responsive.body.forEach(emoji => {
            console.log(`Emoji: ${emoji.name}`)
            console.log('*****************')
            });
    } catch (error) {
        console.log(error)
    }
}
f()