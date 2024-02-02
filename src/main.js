import { Client } from 'node-appwrite';

// This is your Appwrite function
// It's executed each time we get a request
export default async ({ req, res, log, error }) => {
  // Why not try the Appwrite SDK?
  //
  const client = new Client()
     .setEndpoint('https://cloud.appwrite.io/v1')
     .setProject(process.env.APPWRITE_FUNCTION_PROJECT_ID)
     .setKey(process.env.APPWRITE_API_KEY);
const database = new sdk.Databases(client);
  await database.createDocument('65532fcadc03be880396', '65bca37ff23142ac5902', sdk.ID.unique(), {time: (+new Date()).toString()});

    res.json({'success': true});
};
