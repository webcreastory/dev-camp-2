import * as React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'; // Card 컴포넌트 및 관련 컴포넌트를 가져옵니다.
import { Button } from '@/components/ui/button'; // Button 컴포넌트를 가져옵니다.
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'; // Form 및 관련 컴포넌트를 가져옵니다.
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'; // Select 및 관련 컴포넌트를 가져옵니다.
import { useToast } from '@/components/ui/use-toast'; // useToast 훅을 가져옵니다.
import { motion } from 'framer-motion'; // framer-motion 라이브러리의 motion 모듈을 가져옵니다.
import { Input } from '@/components/ui/input'; // Input 컴포넌트를 가져옵니다.
import { cn } from '@/lib/utils'; // cn 유틸리티 함수를 가져옵니다.
import { useForm } from 'react-hook-form'; // react-hook-form 라이브러리의 useForm 훅을 가져옵니다.
import { zodResolver } from '@hookform/resolvers/zod'; // zodResolver를 사용하여 스키마를 통한 폼 유효성 검사를 설정합니다.
import { registerSchema } from '@/validators/auth'; // 인증 유효성 검사를 위한 스키마를 가져옵니다.
import { z } from 'zod'; // zod 라이브러리를 가져옵니다.
import { useState } from 'react'; // useState 훅을 가져옵니다.
import { ArrowRight } from 'lucide-react'; // lucide-react 라이브러리에서 ArrowRight 아이콘을 가져옵니다.

type RegisterInput = z.infer<typeof registerSchema>; // RegisterInput 유형을 선언하고 유효성 검사 스키마에서 추론합니다.
export const BlankLine = () => <div className="border-b border-gray-300"></div>;

// Home 함수는 앱의 홈 페이지를 렌더링하는 컴포넌트입니다.
export default function Signup() {
    const router = useRouter(); // useRouter 훅을 사용하여 router 객체를 가져옵니다.
    const [step, setStep] = useState<number>(0); // 현재 단계를 상태로 관리합니다.
    const { toast } = useToast(); // 토스트 알림을 사용할 수 있는 useToast 훅을 가져옵니다.
    const form = useForm<RegisterInput>({
        // useForm 훅을 사용하여 폼 상태를 관리하고 zod 스키마를 사용하여 유효성을 검사합니다.
        resolver: zodResolver(registerSchema),
        defaultValues: {
            phone: '',
            email: '',
            role: '',
            username: '',
            password: '',
            confirmPassword: '',
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
                title: 'Passwords do not match.',
                variant: 'destructive',
                duration: 1000,
            });
            return;
        }
        alert(JSON.stringify(data, null, 4)); // 폼 데이터를 경고창으로 표시합니다.
        alert('Sign up is complete.');
        router.push('/'); // 제출 후 Home 페이지로 이동합니다.
    }

    const handleHome = () => {
        router.push('/');
    };

    const handleLogin = () => {
        router.push('/login');
    };

    return (
        // 카드 레이아웃을 생성하고 폼을 렌더링합니다.
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none cursor-pointer">
                    <Image
                        src="/home.png"
                        alt="Home Logo"
                        className="dark:invert"
                        width={150}
                        height={24}
                        priority
                        onClick={handleHome}
                    />
                </div>
                <p
                    className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-200 lg:p-4 lg:dark:bg-zinc-800/30 cursor-pointer"
                    onClick={handleLogin}
                >
                    <code className="font-mono font-bold">Login</code>
                    <ArrowRight className="w-4 h-4 ml-2" />
                </p>
            </div>

            <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
                <a
                    className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                    href="https://webcreastory.tistory.com/302"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        src="/devcamp-logo.png"
                        alt="DevCamp Logo"
                        className="dark:invert"
                        width={400}
                        height={24}
                        priority
                    />
                </a>
            </div>
            
            <Card className={cn('w-[600px]')}>
                <CardHeader>
                    <CardTitle>SIGNUP</CardTitle>
                    <CardDescription>Please enter all membership registration information.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="relative space-y-3 overflow-x-hidden">
                            {/* 트랜지션을 사용하여 스텝에 따라 화면을 전환합니다. */}
                            <motion.div
                                className={cn('space-y-3')}
                                animate={{ translateX: `${step * -100}%` }}
                                transition={{ ease: 'easeInOut' }}
                            >
                                {/* 이름 입력 필드 */}
                                <FormField
                                    control={form.control}
                                    name="username"
                                    render={({ field }) => (
                                        <FormItem>
                                            <label className="w-full max-w-full flex flex-col justify-center items-start rounded-lg border border-gray-300 mb-0 transition duration-300 hover:border-gray-500">
                                                <span className="pt-2 pb-1 pl-2 text-sm text-black-400">
                                                    <FormLabel>Nickname</FormLabel>
                                                </span>
                                                <FormControl>
                                                    <Input
                                                        type="text"
                                                        className="border-none w-full pl-2 pb-2 font-medium text-base text-black rounded-lg focus:outline-none"
                                                        {...field}
                                                    />
                                                </FormControl>
                                            </label>
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
                                            <label className="w-full max-w-full flex flex-col justify-center items-start rounded-lg border border-gray-300 mb-0 transition duration-300 hover:border-gray-500">
                                                <span className="pt-2 pb-1 pl-2 text-sm text-black-400">
                                                    <FormLabel>Email</FormLabel>
                                                </span>
                                                <FormControl>
                                                    <Input
                                                        type="text"
                                                        className="border-none w-full pl-2 pb-2 font-medium text-base text-black rounded-lg focus:outline-none"
                                                        {...field}
                                                    />
                                                </FormControl>
                                            </label>
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
                                            <label className="w-full max-w-full flex flex-col justify-center items-start rounded-lg border border-gray-300 mb-0 transition duration-300 hover:border-gray-500">
                                                <span className="pt-2 pb-1 pl-2 text-sm text-black-400">
                                                    <FormLabel>Phone Number</FormLabel>
                                                </span>
                                                <FormControl>
                                                    <Input
                                                        type="text"
                                                        className="border-none w-full pl-2 pb-2 font-medium text-base text-black rounded-lg focus:outline-none"
                                                        {...field}
                                                    />
                                                </FormControl>
                                            </label>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <BlankLine />
                                {/* 역할 선택 필드 */}
                                <FormField
                                    control={form.control}
                                    name="role"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Homepage satisfaction</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Score" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="select1">Very Good</SelectItem>
                                                    <SelectItem value="select2">Commonly</SelectItem>
                                                    <SelectItem value="select3">So So</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </motion.div>
                            <motion.div
                                className={cn('space-y-3 absolute top-0 left-0 right-0')}
                                animate={{ translateX: `${(1 - step) * 100}%` }}
                                style={{ translateX: `${(1 - step) * 100}%` }}
                                transition={{
                                    ease: 'easeInOut',
                                }}
                            >
                                {/* 비밀번호 입력 필드 */}
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem>
                                            <label className="w-full max-w-full flex flex-col justify-center items-start rounded-lg border border-gray-300 mb-0 transition duration-300 hover:border-gray-500">
                                                <span className="pt-2 pb-1 pl-2 text-sm text-black-400">
                                                    <FormLabel>Password</FormLabel>
                                                </span>
                                                <FormControl>
                                                    <Input
                                                        type={'password'}
                                                        className="border-none w-full pl-2 pb-2 font-medium text-base text-black rounded-lg focus:outline-none"
                                                        {...field}
                                                    />
                                                </FormControl>
                                            </label>
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
                                            <label className="w-full max-w-full flex flex-col justify-center items-start rounded-lg border border-gray-300 mb-0 transition duration-300 hover:border-gray-500">
                                                <span className="pt-2 pb-1 pl-2 text-sm text-black-400">
                                                    <FormLabel>ConfirmPassword</FormLabel>
                                                </span>
                                                <FormControl>
                                                    <Input
                                                        type={'password'}
                                                        className="border-none w-full pl-2 pb-2 font-medium text-base text-black rounded-lg focus:outline-none"
                                                        {...field}
                                                    />
                                                </FormControl>
                                            </label>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </motion.div>
                            {/* 다음 및 이전 단계로 이동하는 버튼 그룹 */}
                            <div className={'flex gap-2'}>
                                {/* 다음 단계로 이동하는 버튼 */}
                                <Button className={cn({ hidden: step === 0 })} type="submit">
                                    Registration
                                </Button>
                                {/* 다음 단계로 이동하는 버튼 */}
                                <Button
                                    type="button"
                                    className={cn({ hidden: step === 1 })}
                                    onClick={() => {
                                        form.trigger(['phone', 'email', 'username', 'role']); // 폼 필드의 유효성을 강제로 확인합니다.
                                        const phoneState = form.getFieldState('phone');
                                        const emailState = form.getFieldState('email');
                                        const usernameState = form.getFieldState('username');
                                        const roleState = form.getFieldState('role');

                                        if (!phoneState.isDirty || phoneState.invalid) return;
                                        if (!emailState.isDirty || emailState.invalid) return;
                                        if (!usernameState.isDirty || usernameState.invalid) return;
                                        if (!roleState.isDirty || roleState.invalid) return;

                                        setStep(1);
                                    }}
                                >
                                    Next
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                                {/* 이전 단계로 버튼 */}
                                <Button
                                    type="button"
                                    variant={'ghost'}
                                    className={cn({ hidden: step === 0 })}
                                    onClick={() => {
                                        setStep(0);
                                    }}
                                >
                                    Previously
                                </Button>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </main>
    );
}
