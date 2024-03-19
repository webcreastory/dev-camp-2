import { z } from "zod"; // zod 패키지에서 z 객체를 가져옵니다.

// 비밀번호 형식을 정의하는 정규식입니다.
const passwordRegex =
  /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// 휴대전화 번호 형식을 정의하는 정규식입니다.
const phoneRegex = /^010\d{8}$/;

// 사용자 등록을 위한 스키마를 정의합니다.
export const registerSchema = z.object({
  email: z.string().email({ message: "올바른 이메일을 입력해주세요." }), // 이메일 필드의 유효성 검사를 설정합니다.
  phone: z
    .string()
    .min(11, "연락처는 11자리여야 합니다.")
    .max(11, "연락처는 11자리여야 합니다.")
    .refine(
      (value) => phoneRegex.test(value), // 사용자 정의 조건을 설정하여 휴대전화 번호의 유효성을 검사합니다.
      "010으로 시작하는 11자리 숫자를 입력해주세요",  // 유효성 검사 실패 시 표시할 메시지입니다.
    ),
  username: z
    .string()
    .min(2, { message: "이름은 2글자 이상이어야 합니다." })
    .max(100, { message: "이름은 100글자 이하이어야 합니다." }),
  role: z.string().min(2, { message: "역할을 선택해주세요." }),
  password: z
    .string()
    .min(6, "비밀번호는 최소 6자리 이상이어야 합니다.")
    .max(100, "비밀번호는 100자리 이하이어야 합니다.")
    .refine(
      (value) => passwordRegex.test(value), // 사용자 정의 조건을 설정하여 비밀번호의 유효성을 검사합니다.
      "비밀번호는 최소 6자리 이상, 영문, 숫자, 특수문자를 포함해야 합니다.",
    ),
  confirmPassword: z
    .string()
    .min(6, "비밀번호는 최소 6자리 이상이어야 합니다.")
    .max(100, "비밀번호는 100자리 이하이어야 합니다.")
    .refine(
      (value) => passwordRegex.test(value), // 사용자 정의 조건을 설정하여 비밀번호 확인의 유효성을 검사합니다.
      "비밀번호는 최소 6자리 이상, 영문, 숫자, 특수문자를 포함해야 합니다.",  // 유효성 검사 실패 시 표시할 메시지입니다.
    ),
});
