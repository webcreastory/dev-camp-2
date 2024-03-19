import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"; // Card 컴포넌트 및 관련 컴포넌트를 가져옵니다.
import { Button } from "@/components/ui/button"; // Button 컴포넌트를 가져옵니다.
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"; // Form 및 관련 컴포넌트를 가져옵니다.
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"; // Select 및 관련 컴포넌트를 가져옵니다.
import { useToast } from "@/components/ui/use-toast"; // useToast 훅을 가져옵니다.

import { motion } from "framer-motion"; // framer-motion 라이브러리의 motion 모듈을 가져옵니다.
import { Input } from "@/components/ui/input"; // Input 컴포넌트를 가져옵니다.
import { cn } from "@/lib/utils"; // cn 유틸리티 함수를 가져옵니다.
import { useForm } from "react-hook-form"; // react-hook-form 라이브러리의 useForm 훅을 가져옵니다.
import { zodResolver } from "@hookform/resolvers/zod"; // zodResolver를 사용하여 스키마를 통한 폼 유효성 검사를 설정합니다.
import { registerSchema } from "@/validators/auth"; // 인증 유효성 검사를 위한 스키마를 가져옵니다.
import { z } from "zod"; // zod 라이브러리를 가져옵니다.
import { useState } from "react"; // useState 훅을 가져옵니다.
import { ArrowRight } from "lucide-react"; // lucide-react 라이브러리에서 ArrowRight 아이콘을 가져옵니다.

type RegisterInput = z.infer<typeof registerSchema>; // RegisterInput 유형을 선언하고 유효성 검사 스키마에서 추론합니다.

// Home 함수는 앱의 홈 페이지를 렌더링하는 컴포넌트입니다.
export default function Home() {
  const [step, setStep] = useState<number>(0); // 현재 단계를 상태로 관리합니다.

  const { toast } = useToast(); // 토스트 알림을 사용할 수 있는 useToast 훅을 가져옵니다.
  const form = useForm<RegisterInput>({
    // useForm 훅을 사용하여 폼 상태를 관리하고 zod 스키마를 사용하여 유효성을 검사합니다.
    resolver: zodResolver(registerSchema),
    defaultValues: {
      phone: "",
      email: "",
      role: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
  });

  // 폼 데이터가 변경될 때마다 데이터를 로그에 출력합니다.
  console.log(form.watch());

  // 폼 제출 핸들러를 정의합니다.
  function onSubmit(data: RegisterInput) {
    const { password, confirmPassword } = data;
    if (password !== confirmPassword) {
       // 비밀번호와 확인 비밀번호가 일치하지 않으면 경고 메시지를 표시합니다.
      toast({
        title: "비밀번호가 일치하지 않습니다.",
        variant: "destructive",
        duration: 1000,
      });
      return;
    }
    alert(JSON.stringify(data, null, 4)); // 폼 데이터를 경고창으로 표시합니다.
  }

  return (
    // 카드 레이아웃을 생성하고 폼을 렌더링합니다.
    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      <Card className={cn("w-[380px]")}>
        <CardHeader>
          <CardTitle>계정을 생성합니다</CardTitle>
          <CardDescription>필수 정보를 입력헤볼게요.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="relative space-y-3 overflow-x-hidden"
            >
              {/* 트랜지션을 사용하여 스텝에 따라 화면을 전환합니다. */}
              <motion.div
                className={cn("space-y-3")}
                animate={{ translateX: `${step * -100}%` }}
                transition={{ ease: "easeInOut" }}
              >
                {/* 이름 입력 필드 */}
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      {/* 라벨을 표시합니다. */}
                      <FormLabel>이름</FormLabel>
                      <FormControl>
                        {/* 이름 입력 필드를 렌더링합니다. */}
                        <Input placeholder="홍길동" {...field} />
                      </FormControl>
                      {/* 폼 메시지 컴포넌트를 표시합니다. */}
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* 이메일 입력 필드 */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>이메일</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="hello@sparta-devcamp.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* 연락처 입력 필드 */}
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>연락처</FormLabel>
                      <FormControl>
                        <Input placeholder="01000000000" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* 역할 선택 필드 */}
                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>역할</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="역할을 선택해주세요" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="admin">관리자</SelectItem>
                          <SelectItem value="user">일반사용자</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>
              <motion.div
                className={cn("space-y-3 absolute top-0 left-0 right-0")}
                animate={{ translateX: `${(1 - step) * 100}%` }}
                style={{ translateX: `${(1 - step) * 100}%` }}
                transition={{
                  ease: "easeInOut",
                }}
              >
                {/* 비밀번호 입력 필드 */}
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>비밀번호</FormLabel>
                      <FormControl>
                        <Input type={"password"} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* 비밀번호 확인 입력 필드 */}
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>비밀번호 확인</FormLabel>
                      <FormControl>
                        <Input type={"password"} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>
              {/* 다음 및 이전 단계로 이동하는 버튼 그룹 */}
              <div className={"flex gap-2"}>
                {/* 다음 단계로 이동하는 버튼 */}
                <Button className={cn({ hidden: step === 0 })} type="submit">
                  계정 등록하기
                </Button>
                {/* 다음 단계로 이동하는 버튼 */}
                <Button
                  type="button"
                  className={cn({ hidden: step === 1 })}
                  onClick={() => {
                    form.trigger(["phone", "email", "username", "role"]);// 폼 필드의 유효성을 강제로 확인합니다.
                    const phoneState = form.getFieldState("phone");
                    const emailState = form.getFieldState("email");
                    const usernameState = form.getFieldState("username");
                    const roleState = form.getFieldState("role");

                    if (!phoneState.isDirty || phoneState.invalid) return;
                    if (!emailState.isDirty || emailState.invalid) return;
                    if (!usernameState.isDirty || usernameState.invalid) return;
                    if (!roleState.isDirty || roleState.invalid) return;

                    setStep(1);
                  }}
                >
                  다음 단계로
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                {/* 이전 단계로 버튼 */}
                <Button
                  type="button"
                  variant={"ghost"}
                  className={cn({ hidden: step === 0 })}
                  onClick={() => {
                    setStep(0);
                  }}
                >
                  이전 단계로
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
