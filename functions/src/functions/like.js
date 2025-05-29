const { app } = require('@azure/functions');
const { CosmosClient } = require('@azure/cosmos');

// Cosmos DB konfigurācija no vidiem
const endpoint = process.env.COSMOS_ENDPOINT;
const key = process.env.COSMOS_KEY;
const client = new CosmosClient({ endpoint, key });
const database = client.database("puteklisdb");
const container = database.container("likes");

app.http('like', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    route: 'like/{id}',  // svarīgi!
    handler: async (request, context) => {
        const songId = context.bindingData.id;
        context.log(`like handler for ID: ${songId}, method: ${request.method}`);

        try {
            if (request.method === 'POST') {
                const body = await request.json();
                const like = body.like;
                const change = like ? 1 : -1;

                const { resource: item } = await container.item(songId, songId).read().catch(() => ({ resource: null }));
                const currentCount = item?.count ?? 0;
                const newCount = Math.max(0, currentCount + change);

                await container.items.upsert({ id: songId, count: newCount });

                return {
                    status: 200,
                    headers: { 'Content-Type': 'application/json' },
                    jsonBody: { count: newCount }
                };
            }

            if (request.method === 'GET') {
                const { resource: item } = await container.item(songId, songId).read().catch(() => ({ resource: null }));
                const count = item?.count ?? 0;

                return {
                    status: 200,
                    headers: { 'Content-Type': 'application/json' },
                    jsonBody: { count }
                };
            }

            return {
                status: 405,
                headers: { 'Content-Type': 'application/json' },
                jsonBody: { error: 'Method not allowed' }
            };
        } catch (err) {
            context.log.error("Cosmos DB error:", err.message);
            return {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
                jsonBody: { error: err.message }
            };
        }
    }
});

