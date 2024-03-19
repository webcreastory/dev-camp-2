// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// Next.js API 라우트 지원: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // 요청에 대한 핸들러 함수
  // 요청(req)과 응답(res) 객체를 매개변수로 받음
  // 200 상태 코드와 JSON 형식의 데이터를 응답으로 전송
  res.status(200).json({ name: 'John Doe' })
}
