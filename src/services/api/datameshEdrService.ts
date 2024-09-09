import { EDRData, EDRMetadata } from '../../hooks/useDatamesh';

const API_TOKEN = import.meta.env.VITE_DATAMESH_TOKEN;
const EDR_API_BASE_URL = import.meta.env.VITE_DATAMESH_EDR_API_BASE_URL;

export async function fetchEDRData(coords: string, datetime: string, parameters: string[]): Promise<EDRData> {
  const url = new URL(`${EDR_API_BASE_URL}/collections/oceanum_wave_glob05_era5_v1_grid/position`);
  url.searchParams.append('coords', coords);
  url.searchParams.append('datetime', datetime);
  url.searchParams.append('parameter-name', parameters.join(','));
  url.searchParams.append('f', 'json');

  console.log('Fetching EDR data from:', url.toString());

  try {
    const response = await fetch(url.toString(), {
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`,
        'X-DATAMESH-TOKEN': API_TOKEN,
      },
    });

    console.log('Response status:', response.status);
    console.log('Response headers:', response.headers);

    const responseText = await response.text();
    console.log('EDR API response:', responseText);

    if (!response.ok) {
      console.error('EDR API error response:', responseText);
      throw new Error(`EDR API error: ${response.status} ${response.statusText}\n${responseText}`);
    }

    if (!responseText.trim()) {
      throw new Error('EDR API returned an empty response');
    }

    const jsonResponse = JSON.parse(responseText);
    if (!jsonResponse.data_vars || Object.keys(jsonResponse.data_vars).length === 0) {
      throw new Error('No data available for the given parameters');
    }
    return jsonResponse;
  } catch (error) {
    console.error('Error fetching or parsing EDR API response:', error);
    throw error;
  }
}

export async function fetchEDRMetadata(): Promise<EDRMetadata> {
  const url = `${EDR_API_BASE_URL}/collections/oceanum_wave_glob05_era5_v1_grid?f=json`;
  const response = await fetch(url, {
    headers: {
      'Authorization': `Bearer ${API_TOKEN}`,
      'X-DATAMESH-TOKEN': API_TOKEN,
    },
  });

  if (!response.ok) {
    throw new Error(`EDR API error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}