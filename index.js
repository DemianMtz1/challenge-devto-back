const app = require('./src/server');
const connect = require('./src/lib/db')

connect()
    .then(() => {
        app.listen(8080, () => {
            console.log('DB connected')
            console.log(`Server listening on port ${8080}`)
        })
    })
    .catch(err => {
        console.error(err)
    })

