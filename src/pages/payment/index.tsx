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
export default function Payment() {
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
            <div className="z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex">
                <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none cursor-pointer">
                    <Image
                        src="/home.png"
                        alt="Home Logo"
                        className="dark:invert"
                        width={130}
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
            <Card className={cn('w-[1025px] mb-5 mt-5')}>
                <CardHeader>
                    <CardTitle>주문 상품 정보</CardTitle>
                    <div className="flex w-full justify-start">
                        <Image
                            src="/payment-image.jpg"
                            alt="payment image"
                            className="dark:invert mt-3"
                            width={100}
                            height={100}
                            priority
                        />
                        <div className="pl-3 mt-3">
                            <CardDescription>Daily Facial Soap</CardDescription>
                            <CardDescription>[필수] 용량 80ml - 1개</CardDescription>
                            <CardDescription>18,000</CardDescription>
                        </div>
                    </div>
                </CardHeader>
            </Card>
            <div className="z-10 max-w-5xl w-full items-center justify-between lg:flex">
                <div className="z-10 max-w-5xl w-full items-center justify-between">
                    <Card className={cn('w-[550px] mb-5')}>
                        <CardHeader>
                            <CardTitle>주문자 정보</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Form {...form}>
                                <form
                                    onSubmit={form.handleSubmit(onSubmit)}
                                    className="relative space-y-3 overflow-x-hidden"
                                >
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
                                                            <FormLabel>이름</FormLabel>
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
                                                            <FormLabel>연락처</FormLabel>
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
                                                            <FormLabel>이메일</FormLabel>
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
                                    </motion.div>
                                </form>
                            </Form>
                        </CardContent>
                    </Card>
                    <Card className={cn('w-[550px] mb-5 mt-5')}>
                        <CardHeader>
                            <CardTitle>배송 정보</CardTitle>
                            <CardDescription>[체크박스] 주문자 정보와 동일</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Form {...form}>
                                <form
                                    onSubmit={form.handleSubmit(onSubmit)}
                                    className="relative space-y-3 overflow-x-hidden"
                                >
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
                                                            <FormLabel>수령인</FormLabel>
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
                                                            <FormLabel>연락처</FormLabel>
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
                                        {/* 주소 입력 필드 */}
                                        <FormField
                                            control={form.control}
                                            name="email"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <label className="w-full max-w-full flex flex-col justify-center items-start rounded-lg border border-gray-300 mb-0 transition duration-300 hover:border-gray-500">
                                                        <span className="pt-2 pb-1 pl-2 text-sm text-black-400">
                                                            <FormLabel>주소</FormLabel>
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
                                                    <FormLabel>배송 메모</FormLabel>
                                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                        <FormControl>
                                                            <SelectTrigger>
                                                                <SelectValue placeholder="배송 메모를 선택해 주세요." />
                                                            </SelectTrigger>
                                                        </FormControl>
                                                        <SelectContent>
                                                            <SelectItem value="select1">
                                                                배송 전에 미리 연락 바랍니다.
                                                            </SelectItem>
                                                            <SelectItem value="select2">
                                                                부재시 경비실에 맡겨주세요.
                                                            </SelectItem>
                                                            <SelectItem value="select3">
                                                                부재시 전화나 문자를 남겨주세요.
                                                            </SelectItem>
                                                            <SelectItem value="select4">직접입력</SelectItem>
                                                        </SelectContent>
                                                        <FormItem>
                                                            <label className="w-full max-w-full flex flex-col justify-center items-start rounded-lg border border-gray-300 mb-0 transition duration-300 hover:border-gray-500">
                                                                <FormControl>
                                                                    <Input
                                                                        type="text"
                                                                        className="border-none w-full pl-3 pb-2 font-medium text-base text-black rounded-lg focus:outline-none"
                                                                        placeholder="배송 메모를 입력해주세요"
                                                                    />
                                                                </FormControl>
                                                            </label>
                                                        </FormItem>
                                                    </Select>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </motion.div>
                                </form>
                            </Form>
                        </CardContent>
                    </Card>
                    <Card className={cn('w-[550px] mb-5 mt-5')}>
                        <CardHeader>
                            <CardTitle>쿠폰/포인트</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Form {...form}>
                                <form
                                    onSubmit={form.handleSubmit(onSubmit)}
                                    className="relative space-y-3 overflow-x-hidden"
                                >
                                    {/* 트랜지션을 사용하여 스텝에 따라 화면을 전환합니다. */}
                                    <motion.div
                                        className={cn('space-y-3')}
                                        animate={{ translateX: `${step * -100}%` }}
                                        transition={{ ease: 'easeInOut' }}
                                    >
                                        {/* 쿠폰 적용 필드 */}
                                        <FormField
                                            control={form.control}
                                            name="username"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <label className="w-full max-w-full flex flex-col justify-center items-start rounded-lg border border-gray-300 mb-0 transition duration-300 hover:border-gray-500">
                                                        <span className="pt-2 pb-1 pl-2 text-sm text-black-400">
                                                            <FormLabel>쿠폰</FormLabel>
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
                                        <Button>쿠폰적용</Button>

                                        {/* 쿠폰 번호 입력 필드 */}
                                        <FormField
                                            control={form.control}
                                            name="email"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <label className="w-full max-w-full flex flex-col justify-center items-start rounded-lg border border-gray-300 mb-0 transition duration-300 hover:border-gray-500">
                                                        <span className="pt-2 pb-1 pl-2 text-sm text-black-400">
                                                            <FormLabel>쿠폰 번호</FormLabel>
                                                        </span>
                                                        <FormControl>
                                                            <Input
                                                                type="text"
                                                                className="border-none w-full pl-2 pb-2 font-medium text-base text-black rounded-lg focus:outline-none"
                                                                placeholder="쿠폰 번호를 입력해주세요"
                                                                {...field}
                                                            />
                                                        </FormControl>
                                                    </label>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <Button>번호확인</Button>
                                        {/* 포인트 필드 */}
                                        <FormField
                                            control={form.control}
                                            name="phone"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <label className="w-full max-w-full flex flex-col justify-center items-start rounded-lg border border-gray-300 mb-0 transition duration-300 hover:border-gray-500">
                                                        <span className="pt-2 pb-1 pl-2 text-sm text-black-400">
                                                            <FormLabel>포인트</FormLabel>
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
                                        <Button>전액사용</Button>
                                        <BlankLine />
                                        <CardDescription className="font-bold">보유 포인트 2,300원</CardDescription>
                                        <CardDescription>
                                            5,000 포인트 이상 보유 및 10,000원 이상 구매시 사용 가능
                                        </CardDescription>
                                    </motion.div>
                                </form>
                            </Form>
                        </CardContent>
                    </Card>
                </div>
                <div>
                    <Card className={cn('w-[400px] mb-5')}>
                        <CardHeader>
                            <CardTitle>최종 결제금액</CardTitle>
                        </CardHeader>
                        <CardHeader>
                            <div className="flex justify-between items-start">
                                <CardDescription>상품가격</CardDescription>
                                <CardDescription className="font-bold">18,000원</CardDescription>
                            </div>
                            <div className="flex justify-between items-start">
                                <CardDescription>쿠폰 할인</CardDescription>
                                <CardDescription className="font-bold">-1,000원</CardDescription>
                            </div>
                            <div className="flex justify-between items-start">
                                <CardDescription>포인트 사용</CardDescription>
                                <CardDescription className="font-bold">0원</CardDescription>
                            </div>
                            <div className="flex justify-between items-start">
                                <CardDescription>배송비</CardDescription>
                                <CardDescription className="font-bold">+2,000원</CardDescription>
                            </div>
                            <BlankLine />
                            <div className="flex justify-between items-start">
                                <CardDescription>총 결제금액</CardDescription>
                                <CardDescription className="font-bold">19,500원</CardDescription>
                            </div>
                            <br />
                            <div className="flex justify-start items-start">
                                <CardDescription className="font-bold">700</CardDescription>
                                <CardDescription className="font-bold">포인트 적립예정</CardDescription>
                            </div>
                        </CardHeader>
                    </Card>
                    <Card className={cn('w-[400px] mb-5 mt-5')}>
                        <CardHeader>
                            <CardTitle>결제 방법</CardTitle>
                        </CardHeader>
                        <CardHeader>
                            <CardDescription>신용카드</CardDescription>
                            <CardDescription>가상계좌</CardDescription>
                            <CardDescription>무통장 입금</CardDescription>
                            <CardDescription>핸드폰 결제</CardDescription>
                            <CardDescription>카카오페이</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Form {...form}>
                                <form
                                    onSubmit={form.handleSubmit(onSubmit)}
                                    className="relative space-y-3 overflow-x-hidden"
                                >
                                    {/* 트랜지션을 사용하여 스텝에 따라 화면을 전환합니다. */}
                                    <motion.div
                                        className={cn('space-y-3')}
                                        animate={{ translateX: `${step * -100}%` }}
                                        transition={{ ease: 'easeInOut' }}
                                    >
                                        {/* 역할 선택 필드 */}
                                        <FormField
                                            control={form.control}
                                            name="role"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                        <FormControl>
                                                            <SelectTrigger>
                                                                <SelectValue placeholder="아임은행: 0000-00-7891 홍길동" />
                                                            </SelectTrigger>
                                                        </FormControl>
                                                        <SelectContent>
                                                            <SelectItem value="select1">
                                                                배송 전에 미리 연락 바랍니다.
                                                            </SelectItem>
                                                            <SelectItem value="select2">
                                                                부재시 경비실에 맡겨주세요.
                                                            </SelectItem>
                                                            <SelectItem value="select3">
                                                                부재시 전화나 문자를 남겨주세요.
                                                            </SelectItem>
                                                            <SelectItem value="select4">직접입력</SelectItem>
                                                        </SelectContent>
                                                        <FormItem>
                                                            <label className="w-full max-w-full flex flex-col justify-center items-start rounded-lg border border-gray-300 mb-0 transition duration-300 hover:border-gray-500">
                                                                <FormControl>
                                                                    <Input
                                                                        type="text"
                                                                        className="border-none w-full pl-3 pb-2 font-medium text-base text-black rounded-lg focus:outline-none"
                                                                        placeholder="입금자명 (미입력시 주문자명)"
                                                                    />
                                                                </FormControl>
                                                            </label>
                                                            <CardDescription>
                                                                주문 후 24시간 동안 미입금시 자동 취소됩니다.
                                                            </CardDescription>
                                                        </FormItem>
                                                        <CardDescription>[체크박스] 현금영수증 신청</CardDescription>
                                                    </Select>
                                                </FormItem>
                                            )}
                                        />
                                    </motion.div>
                                </form>
                            </Form>
                        </CardContent>
                    </Card>
                    <Card className={cn('w-[400px]mb-5')}>
                        <CardHeader>
                            <CardDescription>[체크박스] 전체동의</CardDescription>
                            <CardDescription>[체크박스] 구매조건 확인 및 결제진행에 동의</CardDescription>
                        </CardHeader>
                        <CardContent className="w-full max-w-full flex flex-col justify-center">
                            <Button>결제하기</Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </main>
    );
}
