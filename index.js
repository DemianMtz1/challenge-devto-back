const app = require('./src/server');
const connect = require('./src/lib/db')

const PORT = process.env.PORT || 8080;

connect()
    .then(() => {
        app.listen(PORT, () => {
            console.log('DB connected')
            console.log(`Server listening on port ${PORT}`);
        })
    })
    .catch(err => {
        console.error(err)
    })

