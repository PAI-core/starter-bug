import { Client, Databases, ID } from 'node-appwrite';

// This is your Appwrite function
// It's executed each time we get a request
export default async ({ req, res, log, error }) => {
    // Why not try the Appwrite SDK?
    //
    log(req);
    const client = new Client()
        .setEndpoint('https://cloud.appwrite.io/v1')
        .setProject('65bd40b798ddf71d550d')
        .setKey(process.env.APPWRITE_API_KEY);

    const database = new Databases(client);

    try {
        log('fetching branch');
        const branch = await this.databases.getDocument('65532fcadc03be880396', 'branches', '6592a5aacea01097e372');
        log('fetched branch');
        return res.json({ success: true, data: branch });
    } catch (e) {
        log(e);
        return res.json({ success: false, error: e });
    }
};
