/*이 코드는 Next.js의 _document.tsx 파일입니다. 
이 파일은 앱의 페이지들에 대한 HTML 문서의 기본 구조를 정의합니다. */
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  // Document 함수는 앱의 HTML 문서의 기본 구조를 정의합니다.
  return (
    // Html 컴포넌트는 HTML의 루트 요소를 정의합니다. lang 속성으로 언어를 설정합니다.
    <Html lang="en">
      {/* Head 컴포넌트는 HTML 문서의 head 섹션을 정의합니다. */}
      <Head />
      {/* body 요소에는 앱의 내용이 포함됩니다. */}
      <body>
        {/* Main 컴포넌트는 앱의 실제 내용을 렌더링합니다. */}
        <Main />
        {/* NextScript 컴포넌트는 Next.js의 자동으로 생성된 스크립트를 포함합니다. */}
        <NextScript />
      </body>
    </Html>
  )
}
/*Html, Head, Main, NextScript는 Next.js에서 제공하는 특별한 컴포넌트로, 
각각 HTML의 루트 요소, head 섹션, 앱의 실제 내용, Next.js의 자동으로 생성된 스크립트를 나타냅니다.
Html 컴포넌트에서는 HTML 문서의 루트 요소를 정의하며, 
여기서는 lang 속성으로 언어를 영어로 설정합니다.
Head 컴포넌트는 HTML 문서의 head 섹션을 정의합니다. 
여기에는 <title>, <meta>, <link> 등의 메타데이터가 포함될 수 있습니다.
body 요소에는 앱의 내용이 포함되며, 여기에는 Main 컴포넌트로 앱의 실제 내용을 렌더링하고, 
NextScript로 Next.js의 자동으로 생성된 스크립트를 포함합니다. */
