const fastify = require('fastify')({ logger: true })

fastify.get('/', async (request, reply) => {
    return { hello: 'world' }
})

fastify.get('/second', async (request, reply) => {
    return { hi: 'second' }
})

// Run the server!
const start = async () => {
    try {
        const PORT = process.env.PORT || 1337;
        await fastify.listen(PORT,'0.0.0.0', () => console.log('SERVER LISTENING AT PORT: '+ PORT))
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()
