import * as React from "react"
import { Slot } from "@radix-ui/react-slot" // yarn add @radix-ui/react-slot 명령어 설치 (그러나 문제 해결 안됨)
import { cva, type VariantProps } from "class-variance-authority" // yarn add @radix-ui/react-slot 와 yarn add class-variance-authority 명령어 설치로 오류 해결
import { cn } from "@/lib/utils"
// React, Slot 및 VariantProps를 가져옵니다.
// cva 및 cn 함수를 가져오고 class-variance-authority 및 @/lib/utils 모듈에서 사용합니다.

// cva 함수를 사용하여 버튼의 다양한 변형과 크기를 정의합니다.
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

/*ButtonProps 인터페이스를 정의하여 버튼의 props를 지정합니다. 
이 인터페이스는 HTMLButtonElement 속성과 버튼 변형을 나타내는 VariantProps를 확장합니다.*/
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

// Button 컴포넌트를 정의하고, asChild prop에 따라 Slot 또는 button 요소를 사용합니다. 
// 버튼의 클래스 이름은 cn 함수를 사용하여 동적으로 생성됩니다.
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)

// Button 컴포넌트의 displayName을 설정하고, Button 및 buttonVariants를 내보냅니다.
Button.displayName = "Button"

export { Button, buttonVariants }

/*이 코드는 Button 컴포넌트를 정의하는 TypeScript 파일입니다. 
이 파일은 UI 버튼을 생성하고 스타일을 적용하는 데 사용됩니다.*/
