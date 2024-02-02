import { Client, Databases, ID } from 'node-appwrite';

// This is your Appwrite function
// It's executed each time we get a request
export default async ({ req, res, log, error }) => {
  // Why not try the Appwrite SDK?
  //
  const client = new Client()
     .setEndpoint('https://cloud.appwrite.io/v1')
     .setProject('65bc9440a1dc894315ea')
     .setKey(process.env.APPWRITE_API_KEY);

  const database = new Databases(client);
  
  await database.createDocument('65532fcadc03be880396', '65bca37ff23142ac5902', ID.unique(), {time: (+new Date()).toString()});

   return res.json({'success': true});
};
