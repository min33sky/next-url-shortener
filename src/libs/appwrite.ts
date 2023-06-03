import { Client, ID, Account, Databases, Storage } from 'appwrite';

console.log('APPWRITE_ENDPOINT', process.env.APPWRITE_ENDPOINT);
console.log('APPWRITE_PROJECT_ID', process.env.APPWRITE_PROJECT_ID);

const client = new Client()
  .setEndpoint(process.env.APPWRITE_ENDPOINT)
  .setProject(process.env.APPWRITE_PROJECT_ID);

const account = new Account(client);
const databases = new Databases(client);
const storage = new Storage(client);

export { client, account, databases, storage, ID };
