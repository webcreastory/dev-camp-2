import Image from 'next/image';
import { useRouter } from 'next/router'; // useRouter 훅을 가져옵니다.
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'; // Card 컴포넌트 및 관련 컴포넌트를 가져옵니다.
import { Button } from '@/components/ui/button'; // Button 컴포넌트를 가져옵니다.
import { cn } from '@/lib/utils'; // cn 유틸리티 함수를 가져옵니다.
import { ArrowRight } from 'lucide-react'; // lucide-react 라이브러리에서 ArrowRight 아이콘을 가져옵니다.

export default function Home() {
    const router = useRouter(); // useRouter 훅을 사용하여 router 객체를 가져옵니다.

    const handleSignUp = () => {
        router.push('/signup'); 
    };
    const handleLogin = () => {
        router.push('/login'); 
    };
    const handlePayMent = () => {
        router.push('/payment'); 
    };

    const handlePreviousProject = () => {
        window.open('https://www.giftipie.me/', '_blank');
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
                    <a
                        className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                        href="https://github.com/webcreastory/dev-camp-2.git"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src="/my-github.png"
                            alt="github Logo"
                            className="dark:invert"
                            width={200}
                            height={24}
                            priority
                        />
                    </a>
                </div>
                <p
                    className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-200 lg:p-4 lg:dark:bg-zinc-800/30 cursor-pointer hover:underline"
                    onClick={handlePreviousProject}
                >
                    <code className="font-mono font-bold">PREVIOUS PROJECT_GIFT FUNDING SERVICE</code>
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

            {/* <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left"> */}
            <div className="grid text-center lg:max-w-5xl lg:w-full lg:grid-cols-3 lg:text-left gap-8">
                <Card className={cn('w-[330px]')}>
                    <CardHeader>
                        <CardTitle>SIGN UP</CardTitle>
                        <CardDescription>Utilizes shadcn/ui, a shared UI component, Zod, which is useful for schema validation, React Hook Form, which can be used to create high-quality forms in a short period of time, Next.js, which is optimized for server-side rendering, and TypeScript, an open source programming language developed by Microsoft. You can experience the implementation of membership registration using Tailwind CSS, which supports flexible types and is intuitively configurable.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        {/* 다음 및 이전 단계로 이동하는 버튼 그룹 */}
                        <div className={'flex gap-2'}>
                            {/* 다음 단계로 이동하는 버튼 */}
                            <Button
                                type="button"
                                onClick={handleSignUp} // 회원가입 버튼 클릭 시 handleSignUp 함수 호출
                            >
                                Sign Up
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </div>
                    </CardContent>
                </Card>
                <Card className={cn('w-[330px]')}>
                    <CardHeader>
                        <CardTitle>LOGIN</CardTitle>
                        <CardDescription>
Utilizes shadcn/ui, a shared UI component, Zod, which is useful for schema validation, React Hook Form, which can be used to create high-quality forms in a short period of time, Next.js, which is optimized for server-side rendering, and TypeScript, an open source programming language developed by Microsoft. You can experience login implementation using flexible type support and intuitively configurable Tailwind CSS.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        {/* 다음 및 이전 단계로 이동하는 버튼 그룹 */}
                        <div className={'flex gap-2 mt-5'}>
                            {/* 다음 단계로 이동하는 버튼 */}
                            <Button
                                type="button"
                                onClick={handleLogin} 
                            >
                                Login
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                        </div>
                    </CardContent>
                </Card>
                <Card className={cn('w-[330px]')}>
                    <CardHeader>
                        <CardTitle>PAYMENT</CardTitle>
                        <CardDescription>Build a page UI using shadcn/ui, a shared UI component, and provide coupon functions divided into flat rate and flat rate systems, as well as various payments such as when there are no points, when the coupon is applied first, and when the applied amount of coupons and points exceeds the product price. You can experience the case.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        {/* 다음 및 이전 단계로 이동하는 버튼 그룹 */}
                        <div className={'flex gap-2 mt-14'}>
                            {/* 다음 단계로 이동하는 버튼 */}
                            <Button
                                type="button"
                                onClick={handlePayMent} // 회원가입 버튼 클릭 시 handleSignUp 함수 호출
                            >
                                Payment
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </main>
    );
}
