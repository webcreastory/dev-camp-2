/* 이 코드는 Next.js 앱의 진입점인 _app.tsx 파일입니다. 
이 파일은 앱 전체에서 사용되는 레이아웃 및 기능을 설정합니다.*/
import "@/styles/globals.css"; // 전역 CSS 스타일을 가져옵니다.
import type { AppProps } from "next/app"; // Next.js 앱 프로퍼티 타입을 가져옵니다.
import { ThemeProvider } from "@/components/theme-provider"; // 테마 공급자 컴포넌트를 가져옵니다.
import { ModeToggle } from "@/components/mode-toggle"; // 테마 전환 컴포넌트를 가져옵니다.
import { Toaster } from "@/components/ui/toaster"; // 토스터 컴포넌트를 가져옵니다.

export default function App({ Component, pageProps }: AppProps) {
  // App 함수는 Next.js 앱의 진입점입니다. Component와 pageProps를 받아서 처리합니다.

  return (
    // ThemeProvider 컴포넌트로 앱 전체를 감싸고, 테마 속성과 기본 테마를 설정합니다.
    <ThemeProvider attribute="class" defaultTheme="light">
      {/* 최상위 컨테이너를 설정하고 앱 내용을 렌더링합니다. */}
      <div className={"min-h-screen"}>
        {/* 현재 페이지 컴포넌트를 렌더링합니다. */}
        <Component {...pageProps} />
        {/* 토스터 컴포넌트를 렌더링하여 토스트 알림을 표시합니다. */}
        <Toaster />
      </div>
      {/* 테마 전환 버튼을 렌더링합니다. */}
      <ModeToggle className={"absolute top-10 right-10"} />
    </ThemeProvider>
  );
}

/*@/styles/globals.css에서 전역 CSS 스타일을 가져와서 앱에 적용합니다.
next/app에서 AppProps 타입을 가져와서 컴포넌트의 props로 사용합니다.
ThemeProvider를 사용하여 앱의 전체 테마를 관리합니다. 
attribute 속성을 통해 클래스로 테마를 설정하고, defaultTheme 속성을 통해 기본 테마를 설정합니다.
최상위 컨테이너를 설정하고, 페이지 컴포넌트를 렌더링합니다. 
추가로 토스터 컴포넌트를 렌더링하여 토스트 알림을 표시합니다.
테마 전환 버튼을 렌더링하여 사용자가 테마를 전환할 수 있도록 합니다. */

