import { createVendiaClient } from '@vendia/client';

function ConnectionService() {
    const client = createVendiaClient({
        apiUrl: 'https://x1bd2hufjf.execute-api.us-west-1.amazonaws.com/graphql/',
        webSocketUrl: 'wss://xjom57x8q7.execute-api.us-west-1.amazonaws.com/graphql',
        apiKey: '9e3tWsCCtySg1RmsirMfdQf7mLaYYK7wLqxLEkpjJABN'
    });

    const { entities } = client;
    return entities;
}

export default ConnectionService;