import { type NextRequest } from 'next/server';
import { getItems } from '@/lib/tokopedia';

export const config = {
  runtime: 'edge'
};

export default async function handler(req: NextRequest) {
  const sid = req.nextUrl.searchParams.get('sid') || ''
  const etalaseId = req.nextUrl.searchParams.get('etalaseId') || ''
  if(sid === '' || etalaseId === ''){
    return new Response(JSON.stringify({error: "Missing parameter"}),{
      status: 400,
      headers: {
        'content-type': 'application/json'
      }
    })

  }
  //
  const response = await getItems(sid,etalaseId);
  const items = await response.json();
  if(items[0].data == null){
    return new Response(JSON.stringify({error: "sid or etalaseId doesn't match the server"}),{
      status: 400,
      headers: {
        'content-type': 'application/json'
      }
    })
  }
  return new Response(JSON.stringify({result: items[0]['data']['GetShopProduct']['data']}), {
    status: 200,
    headers: {
      'content-type': 'application/json'
    }
  });
}