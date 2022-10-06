import { createVendiaClient } from '@vendia/client';

function ConnectionService() {
    const client = createVendiaClient({
        apiUrl: 'https://x1bd2hufjf.execute-api.us-west-1.amazonaws.com/graphql/',
        webSocketUrl: 'wss://xjom57x8q7.execute-api.us-west-1.amazonaws.com/graphql',
        apiKey: '83y4dnWRhjawz2ubnZY2dCWhqHVLNREP7n1XnMoccyGb'
    });

    const { entities } = client;
    return entities;
}

export default ConnectionService;