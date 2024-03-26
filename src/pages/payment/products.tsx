import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils'; // cn 유틸리티 함수를 가져옵니다.
import { Checkbox } from '@/components/ui/checkbox';

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
        img: "/payment-image.jpg",
        condition: "Best",
        title: "Daily Facial Soap",
        content: "용량 80ml - 1개",
        price: "7,000원"
    },
    // {
    //     img: "/payment-image.jpg",
    //     condition: "Today",
    //     title: "Daily Facial Soap2",
    //     content: "용량 80ml - 2개",
    //     price: "8,000원"
    // },
    // {
    //     img: "/payment-image.jpg",
    //     condition: "New",
    //     title: "Daily Facial Soap3",
    //     content: "용량 80ml - 3개",
    //     price: "9,000원"
    // }
];

// 제품 컴포넌트
const ProductComponent = ({ product }: { product: ProductData }) => (
    <Card className={cn('w-[480px] ml-2 mb-5')}>
        <CardHeader>
        <Checkbox id="terms2" />
            <div className="flex w-full justify-start">
                <Image
                    src={product.img}
                    alt="payment image"
                    className="dark:invert mt-3"
                    width={100}
                    height={100}
                    priority
                />
                
                <div className="pl-3 mt-3">
                    <Badge className="mb-1" variant="destructive">
                        {product.condition}
                    </Badge>
                    <CardDescription className="p-1 font-bold">{product.title}</CardDescription>
                    <CardDescription className="p-1">{product.content}</CardDescription>
                    <CardDescription className="p-1">{product.price}</CardDescription>
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