import { Client, ID, Account, Databases, Storage } from 'appwrite';

console.log('APPWRITE_ENDPOINT', process.env.APPWRITE_ENDPOINT);
console.log('APPWRITE_PROJECT_ID', process.env.APPWRITE_PROJECT_ID);

const client = new Client()
  .setEndpoint(process.env.APPWRITE_ENDPOINT)
  .setProject(process.env.APPWRITE_PROJECT_ID);

const account = new Account(client);
const databases = new Databases(client);
const storage = new Storage(client);

// ********************************************************************************************* //
// ************************************  Appwrite API  ***************************************** //
// ********************************************************************************************* //

/**
 * DB에 Document를 생성합니다.
 * @param data DB에 저장할 데이터
 */
const createDocument = async (data: Record<string, any>) => {
  try {
    return await databases.createDocument(
      process.env.APPWRITE_DATABASE_ID,
      process.env.APPWRITE_SHORT_LINK_COLLECTION_ID,
      ID.unique(),
      data,
    );
  } catch (error) {
    console.log('>>>>> createDocument error : ', error);
    throw error;
  }
};

/**
 * DB에서 Document를 삭제합니다.
 * @param documentId
 */
const deleteDocumentById = async (documentId: string) => {
  try {
    await databases.deleteDocument(
      process.env.APPWRITE_DATABASE_ID,
      process.env.APPWRITE_SHORT_LINK_COLLECTION_ID,
      documentId,
    );

    console.log('>>>>> deleteDocumentById success ~~~~~~~~~~~~');
  } catch (error) {
    console.log('>>>>> deleteDocumentById error : ', error);
  }
};

/**
 * DB에서 Document를 업데이트합니다.
 * @param documentId
 * @param data
 */
const updateDocumentById = async (
  documentId: string,
  data: Record<string, any>,
) => {
  try {
    await databases.updateDocument(
      process.env.APPWRITE_DATABASE_ID,
      process.env.APPWRITE_SHORT_LINK_COLLECTION_ID,
      documentId,
      data,
    );

    console.log('>>>>> updateDocumentById success ~~~~~~~~~~~~');
  } catch (error) {
    console.log('>>>>> updateDocumentById error : ', error);
  }
};

export {
  client,
  account,
  databases,
  storage,
  ID,
  createDocument,
  deleteDocumentById,
  updateDocumentById,
};
