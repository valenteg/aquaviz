const API_BASE_URL = import.meta.env.VITE_DATAMESH_FEATURES_API_URL;
const API_TOKEN = import.meta.env.VITE_DATAMESH_TOKEN;

export async function fetchWithAuth(endpoint: string) {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: {
      'Authorization': `Bearer ${API_TOKEN}`,
      'Content-Type': 'application/json',
      'X-DATAMESH-TOKEN': API_TOKEN,
    },
  });
  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`Datamesh API error: ${response.status} ${response.statusText}\n${errorBody}`);
  }
  return response.json();
}

export async function fetchCollections() {
  return fetchWithAuth('/collections');
}

export async function fetchCollectionItems(collectionId: string) {
  return fetchWithAuth(`/collections/${collectionId}/items`);
}

export async function fetchItemDetails(collectionId: string, featureId: string) {
  return fetchWithAuth(`/collections/${collectionId}/items/${featureId}`);
}
