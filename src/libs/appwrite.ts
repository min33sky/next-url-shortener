import { Client, ID, Account, Databases, Storage, Query } from 'appwrite';

const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID);

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
const createDocument = async (
  data: Record<string, any>,
): Promise<ShortLink> => {
  try {
    return await databases.createDocument(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
      process.env.NEXT_PUBLIC_APPWRITE_SHORT_LINK_COLLECTION_ID,
      ID.unique(),
      data,
    );
  } catch (error) {
    console.log('>>>>> createDocument error : ', error);
    throw error;
  }
};

/**
 * 이미 존재하는 Slug인지 확인하는 함수
 * @param slug
 */
const existsBySlug = async (slug: string) => {
  try {
    //? AppWrite의 collection index 설정에 slug를 추가해줘야 작동한다.
    const result = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
      process.env.NEXT_PUBLIC_APPWRITE_SHORT_LINK_COLLECTION_ID,
      [Query.equal('slug', slug)],
    );
    return result.documents[0];
  } catch (error) {
    console.log('>>>>> getDocumentBySlug error : ', error);
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
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
      process.env.NEXT_PUBLIC_APPWRITE_SHORT_LINK_COLLECTION_ID,
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
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
      process.env.NEXT_PUBLIC_APPWRITE_SHORT_LINK_COLLECTION_ID,
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
  existsBySlug,
  deleteDocumentById,
  updateDocumentById,
  Query,
};
