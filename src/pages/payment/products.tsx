import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils'; // cn 유틸리티 함수를 가져옵니다.
import { SlArrowRight } from "react-icons/sl";

// 제품 데이터 형태 정의
interface ProductData {
    img: string;
    condition: string;
    title: string;
    content: string;
    price: string;
}

// 제품 목록
const products: ProductData[] = [
    {
        img: '/iyou.png',
        condition: 'BEST',
        title: '[아이유 PICK] JESTINA 귀걸이',
        content: '주얼리/제이에스티나 아이유 귀걸이',
        price: '108,000원',
    },
    // {
    //     img: "/payment-image.jpg",
    //     condition: "Today",
    //     title: "Daily Facial Soap2",
    //     content: "용량 80ml - 2개",
    //     price: "8,000원"
    // }
];

// 제품 컴포넌트
const ProductComponent = ({ product }: { product: ProductData }) => (
    <Card className={cn('w-[480px] ml-2 mb-2')}>
        <CardHeader>
            <div className="flex w-full justify-start text-left">
                <Image
                    src={product.img}
                    alt="payment image"
                    className="dark:invert"
                    width={150}
                    height={100}
                    priority
                />
                <div className="pl-3">
                    <Badge className="mb-1 font-bold" variant="destructive">
                        {product.condition}
                    </Badge>
                    <CardDescription className="p-1 font-bold">{product.title}</CardDescription>
                    <CardDescription className="p-1">{product.content}</CardDescription>
                    <CardDescription className="p-1 font-bold">{product.price}</CardDescription>
                    <br/>
                    <CardDescription className="p-1 font-bold">자세히 보기</CardDescription>
                    <SlArrowRight className="p-1 font-bold"/>
                </div>
            </div>
        </CardHeader>
    </Card>
);

// 페이지 컴포넌트
const ProductsPage = () => {
    return (
        <div>
            {products.map((product, index) => (
                <ProductComponent key={index} product={product} />
            ))}
        </div>
    );
};

export default ProductsPage;
