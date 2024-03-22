![devcamp](https://github.com/webcreastory/dev-camp-2/assets/137463073/604300ec-9263-4cca-bea4-ccb85aadf5cd)

## HOME

![Home_Page-001](https://github.com/webcreastory/dev-camp-2/assets/137463073/86df0515-8ccf-4bfd-81f0-78601c37fe72)

- `SINGUP, LOGIN, PAYMENT 기능 연동`: [페이지 하단] 각 페이지마다 사용된 기능들을 확인할 수 있습니다.
- `My GitHub 연동`: [상단 좌측 로고] 페이지의 자세한 기능들을 코드로 확인해보실 수 있습니다.
- `이전 Project 연동`: [상단 우측 버튼] 이전 프로젝트로 다양한 서비스를 경험해보실 수 있습니다.
- `이력서&포트폴리오 연동`: [중앙 로고] 개발을 진행한 이의 이력서와 포트폴리오를 확인해보실 수 있습니다.
- `dark, Light, System모드`: [상단 우측 아이콘] 원하는 모드로 화면을 편안하게 확인하실 수 있습니다.

---

## SINGUP & LOGIN

![Signup_Page-002](https://github.com/webcreastory/dev-camp-2/assets/137463073/761a534c-f16b-4a7d-b29d-6f6ec2cadd16)
![유효성-검사-003](https://github.com/webcreastory/dev-camp-2/assets/137463073/1e5a25cf-b9fc-4357-ad23-10e4dd15a0fc)

### Tech Stacks

- `shadcn/ui`: 완성된 UI 컴포넌트를 활용하여 button, card, input 등의 기능을 구현하였습니다.
- `Tailwind CSS`: shadcn/ui과 접목하여 ui를 완성하는데 활용되었습니다.
- `Next.js`:  useRouter 등 클라이언트 사이드 네비게이션을 간편하게 하며 next/image로 이미지 최적화에 사용되었습니다.
- `TypeScript`:  코드의 안정성을 높이고 유지 보수를 용이하게 하도록 사용되었습니다.
- `React-hook-form`: zod와 함께 상태관리 및 유효성 검사를 설정하기 위해 사용되었습니다.
- `zod`:TypeScript의 보완점으로 스키마 선언 및 유효성 검사를 시행하기 위해 사용되었습니다.
- `framer-motion`: 입력한 내용이 애니메이션으로 전환되는 효과를 위해 사용되었습니다.
- `lucide-react`: 화살표 아이콘을 표시하기 위한 라이브러리로 사용되었습니다.
- `react-icons`: 직선 아이콘을 표시하기 위한 라이브러리로 사용되었습니다.

---

![LOGIN-003](https://github.com/webcreastory/dev-camp-2/assets/137463073/65b4f95f-f9cb-40c3-a45e-bb74f688068b)
![유효성-검사_LOGIN-004](https://github.com/webcreastory/dev-camp-2/assets/137463073/2e38381f-da21-4e2d-9d8c-070e6f894ef9)

---

### Main Function

- `폼 필드의 유효성 검사`: react-hook-form의 form.trigger를 사용하여 유효성을 확인하고, 해당 조건이 충족되지 않으면 다음 단계로 이동하지 않도록 구현되었습니다. 또한 zod를 활용한 문자와 숫자 수 제한, 이메일, 비밀번호 일치 등 형식에 맞추어 간편하게 활용되었습니다.
- `트랜지션을 통한 버튼 스텝 전환`: framer-motion을 사용하여 스텝에 따라 화면을 전환하는 효과를 구현하였습니다.
- `Select 및 Toast`: shadcn/ui 컴포넌트로 select 및 toast 기능등을 간편하게 구현하였습니다.
- `화면 이동 버튼 및 기능`: useRouter를 사용하여 다른 페이지로 이동하는 기능을 구현하였습니다.