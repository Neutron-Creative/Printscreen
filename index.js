import express from 'express';
import captureWebsite from 'capture-website';

const app = express()
const port = 3000
const sandbox = false;

app.get('/', async (req, res) => {
    console.log('Taking screenshot')
    const screenshot = await captureWebsite.base64('https://www.threesixfive.health', {
        launchOptions: {
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        }
    })
    console.log(screenshot)
    res.send(`
        <img src="uri: ${screenshot}/>
    `)
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})