![devcamp](https://github.com/webcreastory/dev-camp-2/assets/137463073/604300ec-9263-4cca-bea4-ccb85aadf5cd)

## HOME

![Home_Page-001](https://github.com/webcreastory/dev-camp-2/assets/137463073/86df0515-8ccf-4bfd-81f0-78601c37fe72)

### Main Function

-   `[하단] SINGUP, LOGIN, PAYMENT 페이지 연동`: useRouter를 통해 각 페이지로 이동할 수 있습니다.
-   `[상단 좌측 로고] My GitHub 연동`: 페이지의 자세한 기능들을 코드로 확인해보실 수 있습니다.
-   `[상단 우측 버튼] 이전 Project 연동`: 이전 프로젝트 확인으로 다양한 서비스를 경험해보실 수 있습니다.
-   `[중앙 로고] 이력서&포트폴리오 연동`: 개발자의 이력서와 포트폴리오를 확인해보실 수 있습니다.
-   `[상단 우측 아이콘] dark, Light, System모드 설정`: 원하는 모드로 화면을 감상할 수 있습니다.

---

## SINGUP & LOGIN

![signup-003](https://github.com/webcreastory/dev-camp-2/assets/137463073/14922d9e-910f-4808-934d-c8d6c562356f)
![유효성-검사-003](https://github.com/webcreastory/dev-camp-2/assets/137463073/1e5a25cf-b9fc-4357-ad23-10e4dd15a0fc)

### Main Function

-   `폼 필드의 유효성 검사`: react-hook-form의 form.trigger를 사용하여 유효성을 확인하고, 해당 조건이 충족되지 않으면 다음 단계로 이동하지 않도록 구현하였습니다. 또한 스키마 기반 유효성 검사 zod를 활용해 문자/숫자 수 제한, 이메일, 비밀번호 일치 등 형식에 맞추어 간편하게 활용하였습니다.
-   `트랜지션을 통한 버튼 스텝 전환`: framer-motion을 사용하여 스텝에 따라 화면을 전환할 수 있습니다.
-   `Select`: shadcn/ui로 간편하게 구현된 select 기능을 통해 선택한 값을 유지할 수 있습니다.
-   `페이지 이동`: useRouter를 사용하여 다른 페이지로 간편하게 이동할 수 있습니다.
-   `다른 웹페이지 이동`: <a> 태그를 사용해 하이퍼링크를 생성하여 다른 페이지로 간편하게 이동할 수 있습니다.

---

## PAYMENT

![payment-white](https://github.com/webcreastory/dev-camp-2/assets/137463073/6a44ab97-a3e4-4ef9-aa8b-dc910cd1cc1a)
![payment-black](https://github.com/webcreastory/dev-camp-2/assets/137463073/9e09918e-3502-417e-b20f-203f74983c22)

### Main Function

-   `폼 필드의 유효성 검사`: react-hook-form의 form.trigger를 사용하여 유효성을 확인하고, 해당 조건이 충족되지 않으면 다음 단계로 이동하지 않도록 구현하였습니다. 또한 스키마 기반 유효성 검사 zod를 활용해 문자/숫자 수 제한, 이메일 등 형식에 맞추어 간편하게 활용하였습니다.
-   `배송정보 가져오기`: 주문자 정보와 동일한 경우 배송 정보에 값을 가져옵니다.
-   `쿠폰 적용`: 쿠폰을 정액제로 적용하여 상품 결제 금액을 명확히 파악할 수 있도록 합니다. 
-   `포인트 적용`: 포인트가 없는 경우, 쿠폰을 먼저 적용한 경우, 쿠폰과 포인트 적용 금액이 상품 금액을 넘어가는 경우 등 다양한 케이스를 상정합니다. 
-   `우편번호/주소 찾기`: Daum 우편번호 서비스(통합 로딩 방식 : postcode.v2.js)를 연동해 우편번호, 도로명 주소 입력 기능을 연결합니다.
-   `약관보기`: 약관보기 기능을 모달창으로 띄워줍니다.
-   `전체/선택동의`: 전체 동의 혹은 선택적으로 동의할 수 있도록 체크박스를 활성화합니다.
-   `결제 버튼 활성화`: 모든 조건이 충족되었을 때 결제 버튼이 활성화되며 조건 불충족시 alert로 충족 조건을 알립니다.
-   `PG사 연결하기`: Payment 개발자센터를 이용해 결제 기능을 연동합니다.
-   `Check-Box`: shadcn/ui로 check-box 기능을 간편하게 구현할 수 있습니다.
-   `Select`: shadcn/ui로 select 기능을 간편하게 구현할 수 있습니다.
-   `페이지 이동`: useRouter를 사용하여 다른 페이지로 간편하게 이동할 수 있습니다.
-   `다른 웹페이지 이동`: <a> 태그를 사용해 하이퍼링크를 생성하여 다른 페이지로 간편하게 이동할 수 있습니다.

---

![login-002](https://github.com/webcreastory/dev-camp-2/assets/137463073/67df3970-5a30-4f0d-a76b-8e33d5688afa)
![유효성-검사_LOGIN-004](https://github.com/webcreastory/dev-camp-2/assets/137463073/2e38381f-da21-4e2d-9d8c-070e6f894ef9)

### Tech Stacks

-   `shadcn/ui`: 완성된 UI 컴포넌트를 활용하여 button, card, input 등의 기능을 간편하게 구현하였습니다.
-   `Tailwind CSS`: shadcn/ui와 접목이 가능하며 ui를 빠르고 확장성 있게 적용이 가능하며 재사용성이 뛰어납니다.
-   `Next.js`: SSR 및 SSG 지원하여 로딩 속도 향상과 HMR 지원으로 페이지 로딩 속도가 빠르게 전환됩니다.
-   `TypeScript`: Next.js와 연동 및 정적 타입 검사를 통해 하드코딩의 실수를 줄일 수 있습니다.
-   `React-hook-form`: zod와 함께 강력한 유효성 검사가 가능하며 필드의 값을 직접 관리하여 상태관리의 부담을 줄여줍니다.
-   `zod`:러닝 커브가 낮고 TypeScript 보완 강화로 스키마 기반 유효성 검사를 시행해 데이터 변형을 방지합니다.
-   `framer-motion`: 입력한 input 내용이 애니메이션으로 전환되는 효과를 위해 사용되었습니다.
-   `lucide-react`: 화살표 아이콘을 표시하기 위해 사용되었습니다.
-   `react-icons`: 직선 아이콘을 표시하기 위해 사용되었습니다.

---