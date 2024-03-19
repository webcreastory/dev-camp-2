import { ThemeProvider as NextThemesProvider } from "next-themes"; // Next.js의 ThemeProvider를 가져옵니다.
import { type ThemeProviderProps } from "next-themes/dist/types"; // Next.js의 ThemeProviderProps를 가져옵니다.


export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // ThemeProvider 함수는 ThemeProviderProps와 함께 children을 받아서 처리합니다.
  // children은 ThemeProvider를 사용할 때 포함되는 자식 요소입니다.
  // props는 NextThemesProvider로 전달될 속성들입니다.

  // NextThemesProvider로 children과 props를 전달하여 ThemeProvider를 생성합니다.
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
/*이 코드는 기본적으로 ThemeProvider 컴포넌트를 만들고, 
이 컴포넌트는 Next.js의 ThemeProvider를 래핑합니다. 

이를 통해 Next.js에서 제공하는 테마 기능을 사용할 수 있습니다. 
ThemeProvider는 주어진 children과 props를 NextThemesProvider로 전달하여 
모든 테마 관련 동작을 처리합니다. 이것은 테마 관련 설정을 전역으로 제어하는 컴포넌트입니다.*/