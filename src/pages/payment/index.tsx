import * as React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Button } from '@/components/ui/button'; // Button 컴포넌트를 가져옵니다.
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'; // Form 및 관련 컴포넌트를 가져옵니다.
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'; // Select 및 관련 컴포넌트를 가져옵니다.
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
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
import ProductsPage from './products';

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

    const product = {
        img: '/payment-image.jpg',
        condition: '필수',
        title: 'Daily Facial Soap',
        content: '용량 80ml - 1개',
        price: '7,000원',
    };

    // Mock 데이터 형태 정의
    interface CouponData {
        title: string;
        price: string;
    }

    // Mock 데이터
    const coupon: CouponData = {
        title: '신규',
        price: '5,000원',
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

            <div className="z-10 max-w-5xl w-full items-center justify-between lg:flex">
                <div className="z-10 max-w-5xl w-full items-center justify-between">
                    <Card className={cn('w-[500px] mb-5 mt-5')}>
                        <CardHeader>
                            <CardTitle>주문 상품 정보</CardTitle>
                        </CardHeader>
                        <ProductsPage />
                    </Card>
                    <Card className={cn('w-[500px] mb-5')}>
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

                    <Card className={cn('w-[500px] mb-5 mt-5')}>
                        <CardHeader>
                            <CardTitle>배송 정보</CardTitle>
                        </CardHeader>
                        <Tabs defaultValue="account" className="ml-3 w-[470px] mb-5">
                            <TabsList className="grid w-full grid-cols-2">
                                <TabsTrigger value="account">배송지 선택</TabsTrigger>
                                <TabsTrigger value="password">신규입력</TabsTrigger>
                            </TabsList>
                            <TabsContent value="account">
                                <Card>
                                    <RadioGroup
                                        className="flex justify-start items-start pt-6"
                                        defaultValue="option-one"
                                    >
                                        <div className="colum">
                                            <div className="pl-11">
                                                <CardDescription className="flex items-center space-x-2">
                                                    <RadioGroupItem value="option-one" id="option-one" />
                                                    <Label className="font-bold" htmlFor="option-one">
                                                        홍길동
                                                    </Label>
                                                    <Badge variant="outline">기본</Badge>
                                                    <Badge variant="secondary">최근</Badge>
                                                    <ToggleGroup size={'sm'} type="multiple">
                                                        <ToggleGroupItem
                                                            className="ml-28"
                                                            value="underline"
                                                            aria-label="Toggle underline"
                                                        >
                                                            수정
                                                        </ToggleGroupItem>
                                                        <ToggleGroupItem
                                                            value="underline"
                                                            aria-label="Toggle underline"
                                                        >
                                                            삭제
                                                        </ToggleGroupItem>
                                                    </ToggleGroup>
                                                </CardDescription>
                                                <CardDescription className="ml-7">
                                                    010-1234-5678
                                                    <br />
                                                    서울특별시 강남구 수서동 89-8
                                                    <br />
                                                    주식회사 아름다움
                                                    <br />
                                                    (035895)
                                                </CardDescription>
                                            </div>
                                            <br />
                                            <div className="pl-11 mb-7">
                                                <CardDescription className="flex items-center space-x-2">
                                                    <RadioGroupItem value="option-two" id="option-two" />
                                                    <Label className="font-bold" htmlFor="option-two">
                                                        홍길순
                                                    </Label>
                                                    <ToggleGroup size={'sm'} type="multiple">
                                                        <ToggleGroupItem
                                                            className="ml-56"
                                                            value="underline"
                                                            aria-label="Toggle underline"
                                                        >
                                                            수정
                                                        </ToggleGroupItem>
                                                        <ToggleGroupItem
                                                            value="underline"
                                                            aria-label="Toggle underline"
                                                        >
                                                            삭제
                                                        </ToggleGroupItem>
                                                    </ToggleGroup>
                                                </CardDescription>
                                                <CardDescription className="ml-7">
                                                    010-9876-5432
                                                    <br />
                                                    서울특별시 강남구 논현동 10-88
                                                    <br />
                                                    주식회사 아름아름
                                                    <br />
                                                    (035854)
                                                </CardDescription>
                                            </div>
                                        </div>
                                    </RadioGroup>
                                </Card>
                            </TabsContent>
                            <TabsContent value="password">
                                <Card>
                                    <CardDescription className="flex items-center space-x-2 pl-6 pb-4 pt-8">
                                        <Checkbox id="terms" />
                                        <label
                                            htmlFor="terms"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            주문자 정보와 동일
                                        </label>
                                    </CardDescription>
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
                                                </motion.div>
                                            </form>
                                        </Form>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        </Tabs>

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
                                                    <CardDescription className="font-bold">배송 메모</CardDescription>
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
                                                </FormItem>
                                            )}
                                        />
                                    </motion.div>
                                </form>
                            </Form>
                        </CardContent>
                    </Card>
                    <Card className={cn('w-[500px] mb-5 mt-5')}>
                        <CardHeader>
                            <CardTitle>쿠폰/포인트</CardTitle>
                        </CardHeader>
                        <Tabs defaultValue="account" className="ml-3 mb-3 w-[470px]">
                            <TabsList className="grid w-full grid-cols-2">
                                <TabsTrigger value="account">쿠폰</TabsTrigger>
                                <TabsTrigger value="password">포인트</TabsTrigger>
                            </TabsList>
                            <TabsContent value="account">
                                <Card>
                                    <RadioGroup
                                        className="flex justify-start items-start pt-6"
                                        defaultValue="option-one"
                                    >
                                        <div className="colum">
                                            <div className="pl-11">
                                                <CardDescription className="flex items-center space-x-2">
                                                    <RadioGroupItem value="option-one" id="option-one" />
                                                    <Label className="font-bold" htmlFor="option-one">
                                                        {coupon.price}
                                                    </Label>
                                                    <Badge variant="secondary">{coupon.title}</Badge>
                                                </CardDescription>
                                                <CardDescription className="ml-7">
                                                    회원가입을 축하드립니다!
                                                    <br />
                                                    모든 상품에 적용 가능합니다.
                                                </CardDescription>
                                            </div>
                                            <br />
                                            <div className="pl-11 mb-7">
                                                <CardDescription className="flex items-center space-x-2">
                                                    <RadioGroupItem value="option-two" id="option-two" />
                                                    <Label className="font-bold" htmlFor="option-two">
                                                        10,000원
                                                    </Label>
                                                    <Badge variant="secondary">10만원 이상 구매시</Badge>
                                                </CardDescription>
                                                <CardDescription className="ml-7">
                                                    10만원 이상 구매시
                                                    <br />
                                                    1만원 쿠폰 적용 가능합니다.
                                                </CardDescription>
                                            </div>
                                        </div>
                                    </RadioGroup>
                                </Card>
                            </TabsContent>
                            <TabsContent value="password">
                                <Card>
                                    <CardDescription className="flex items-center space-x-2 pl-6 pb-4 pt-6">
                                        <Checkbox id="terms" />
                                        <label
                                            htmlFor="terms"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            보유 포인트 전액 사용
                                        </label>
                                    </CardDescription>
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
                                                    <FormItem>
                                                        <label className="w-full max-w-full flex flex-col justify-center items-start rounded-lg border border-gray-300 mb-0 transition duration-300 hover:border-gray-500">
                                                            <FormControl>
                                                                <Input
                                                                    type="text"
                                                                    className="border-none w-full pl-3 pb-2 font-medium text-base text-black rounded-lg focus:outline-none"
                                                                    placeholder=""
                                                                />
                                                            </FormControl>
                                                        </label>
                                                    </FormItem>
                                                    <BlankLine />
                                                    <CardDescription className="font-bold">
                                                        보유 포인트 2,300원
                                                    </CardDescription>
                                                    <CardDescription>
                                                        5,000 포인트 이상 보유시 10,000원 이상 구매시 사용 가능
                                                    </CardDescription>
                                                </motion.div>
                                            </form>
                                        </Form>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </Card>
                </div>
                <div>
                    <Card className={cn('w-[500px] mb-5')}>
                        <CardHeader>
                            <CardTitle>최종 결제금액</CardTitle>
                        </CardHeader>
                        <CardHeader>
                            <div className="flex justify-between items-start">
                                <CardDescription>상품가격</CardDescription>
                                <CardDescription className="font-bold">{product.price}</CardDescription>
                            </div>
                            <div className="flex justify-between items-start">
                                <CardDescription>쿠폰 할인</CardDescription>
                                <CardDescription className="font-bold">-{coupon.price}</CardDescription>
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
                                <CardDescription className="font-bold">{product.price}-{coupon.price}</CardDescription>
                            </div>
                            <br />
                            <div className="flex justify-start items-start">
                                <CardDescription className="font-bold">700</CardDescription>
                                <CardDescription className="font-bold">포인트 적립예정</CardDescription>
                            </div>
                        </CardHeader>
                    </Card>
                    <Card className={cn('w-[500px] mb-5 mt-5')}>
                        <CardHeader>
                            <CardTitle>결제 방법</CardTitle>
                        </CardHeader>
                        <RadioGroup className="flex justify-start items-start" defaultValue="option-one">
                            <div className="pl-11 pb-5">
                                <CardDescription className="flex items-center space-x-2 pb-2">
                                    <RadioGroupItem value="option-one" id="option-one" />
                                    <Label htmlFor="option-one">신용카드</Label>
                                </CardDescription>
                                <CardDescription className="flex items-center space-x-2 pb-2">
                                    <RadioGroupItem value="option-three" id="option-three" />
                                    <Label htmlFor="option-three">무통장 입금</Label>
                                </CardDescription>
                                <CardDescription className="flex items-center space-x-2">
                                    <RadioGroupItem value="option-five" id="option-five" />
                                    <Label htmlFor="option-five">카카오 페이</Label>
                                </CardDescription>
                            </div>
                            <div className="pl-14 pb-5">
                                <CardDescription className="flex items-center space-x-2 pb-2">
                                    <RadioGroupItem value="option-two" id="option-two" />
                                    <Label htmlFor="option-two">가상계좌</Label>
                                </CardDescription>
                                <CardDescription className="flex items-center space-x-2 pb-2">
                                    <RadioGroupItem value="option-four" id="option-four" />
                                    <Label htmlFor="option-four">핸드폰 결제</Label>
                                </CardDescription>
                                <CardDescription className="flex items-center space-x-2">
                                    <RadioGroupItem value="option-six" id="option-six" />
                                    <Label htmlFor="option-six">쿠폰/포인트 결제</Label>
                                </CardDescription>
                            </div>
                        </RadioGroup>
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
                                                                <SelectValue placeholder="○○은행: 0000-00-0000 입금자명" />
                                                            </SelectTrigger>
                                                        </FormControl>
                                                        <SelectContent>
                                                            <SelectItem value="select1">
                                                                □□은행: 0000-00-0000 입금자명
                                                            </SelectItem>
                                                            <SelectItem value="select2">
                                                                △△은행: 0000-00-0000 입금자명
                                                            </SelectItem>
                                                            <SelectItem value="select3">
                                                                ◇◇은행: 0000-00-0000 입금자명
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
                                                        <br />
                                                        <CardDescription className="flex items-center space-x-2 pb-4">
                                                            <Checkbox id="terms1" />
                                                            <label
                                                                htmlFor="terms1"
                                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                            >
                                                                현금영수증 신청
                                                            </label>
                                                        </CardDescription>
                                                    </Select>
                                                </FormItem>
                                            )}
                                        />
                                    </motion.div>
                                </form>
                            </Form>
                        </CardContent>
                    </Card>
                    <Card className={cn('w-[500px]')}>
                        <CardHeader>
                            <CardDescription className="flex items-center space-x-2 pb-4">
                                <Checkbox id="terms2" />
                                <label
                                    htmlFor="terms2"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    전체동의
                                </label>
                            </CardDescription>
                            <CardDescription className="flex items-center space-x-2 pl-6 pb-4">
                                <Checkbox id="terms3" />
                                <label
                                    htmlFor="terms3"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    구매조건 확인 및 결제진행 동의 [필수]
                                </label>
                            </CardDescription>
                            <CardDescription className="flex items-center space-x-2 pl-6 pb-4">
                                <Checkbox id="terms4" />
                                <label
                                    htmlFor="terms4"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    구매조건 확인 및 결제진행에 동의 [필수]
                                </label>
                            </CardDescription>
                            <CardDescription className="flex items-center space-x-2 pl-6 pb-4">
                                <Checkbox id="terms5" />
                                <label
                                    htmlFor="terms5"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    구매조건 확인 및 결제진행에 동의 [선택]
                                </label>
                            </CardDescription>
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button variant="outline">약관보기</Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-md">
                                    <DialogHeader>
                                        <DialogTitle>약관보기</DialogTitle>
                                        <DialogDescription>
                                            약관Anyone who has this link will be able to view this.
                                        </DialogDescription>
                                    </DialogHeader>
                                    <div className="flex items-center space-x-2">
                                        <div className="grid flex-1 gap-2"></div>
                                    </div>
                                </DialogContent>
                            </Dialog>
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
