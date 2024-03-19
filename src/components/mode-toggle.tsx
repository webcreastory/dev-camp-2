import React from 'react';
import { Moon, Sun } from "lucide-react"; // lucide-react 패키지에서 Moon 및 Sun 아이콘을 가져옵니다.// yarn add lucide-react 라이브러리 설치 명령어
import { useTheme } from "next-themes"; // next-themes 패키지에서 useTheme 훅을 가져옵니다.
import { Button } from "@/components/ui/button"; // Button 컴포넌트를 가져옵니다. 경로 별칭을 사용하여 상대 경로로 지정됩니다.
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"; // DropdownMenu 관련 컴포넌트를 가져옵니다. 경로 별칭을 사용하여 상대 경로로 지정됩니다.

// ModeToggle 컴포넌트 정의
export function ModeToggle({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) { // ModeToggle 컴포넌트의 props를 정의합니다. HTMLDivElement 요소에 대한 속성을 받습니다.
  const { setTheme } = useTheme(); // useTheme 훅을 사용하여 테마 관련 함수를 가져옵니다.

  return ( 
    // 주어진 className 및 props를 가진 div 요소를 반환합니다.
    // DropdownMenu 컴포넌트를 렌더링합니다.
    // DropdownMenuTrigger 컴포넌트를 렌더링하고 자식 요소로 사용합니다.
    // Button 컴포넌트를 렌더링합니다. 아이콘 모양의 작은 버튼입니다.
    // Sun 아이콘을 렌더링하며 클래스를 추가하여 테마에 따라 회전 및 크기를 조절합니다.
    // Moon 아이콘을 렌더링하며 클래스를 추가하여 테마에 따라 회전 및 크기를 조절합니다.
    // 스크린 리더용으로 테마 전환을 설명하는 텍스트입니다.
    // DropdownMenuContent 컴포넌트를 렌더링하고 오른쪽으로 정렬합니다.
    // 클릭 시 setTheme 함수를 사용하여 라이트 테마로 변경하는 DropdownMenuItem 컴포넌트를 렌더링합니다.
    // 클릭 시 setTheme 함수를 사용하여 다크 테마로 변경하는 DropdownMenuItem 컴포넌트를 렌더링합니다.
    // 클릭 시 setTheme 함수를 사용하여 시스템 테마로 변경하는 DropdownMenuItem 컴포넌트를 렌더링합니다.
    <div className={className} {...props}> 
        <DropdownMenu> 
        <DropdownMenuTrigger asChild> 
          <Button variant="outline" size="icon">
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end"> 
          <DropdownMenuItem onClick={() => setTheme("light")}>
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")}>
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
