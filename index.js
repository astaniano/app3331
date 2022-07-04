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
        const port = process.env.PORT || 1337;
        await fastify.listen({ port })
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()
