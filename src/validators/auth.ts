import { z } from "zod"; // zod 패키지에서 z 객체를 가져옵니다.

// 비밀번호 형식을 정의하는 정규식입니다.
const passwordRegex =
  /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// 휴대전화 번호 형식을 정의하는 정규식입니다.
const phoneRegex = /^010\d{8}$/;

// 사용자 등록을 위한 스키마를 정의합니다.
export const registerSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email." }), // 이메일 필드의 유효성 검사를 설정합니다.
  phone: z
    .string()
    .min(11, "Contact information must be 11 digits long.")
    .max(11, "Contact information must be 11 digits long.")
    .refine(
      (value) => phoneRegex.test(value), // 사용자 정의 조건을 설정하여 휴대전화 번호의 유효성을 검사합니다.
      "Please enter an 11-digit number starting with 010",  // 유효성 검사 실패 시 표시할 메시지입니다.
    ),
  username: z
    .string()
    .min(2, { message: "The name must be at least 2 characters." })
    .max(25, { message: "The name must be less than 25 characters." }),
  role: z.string().min(2, { message: "Please select your level of satisfaction." }),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters long.")
    .max(100, "Password must be less than 100 characters.")
    .refine(
      (value) => passwordRegex.test(value), // 사용자 정의 조건을 설정하여 비밀번호의 유효성을 검사합니다.
      "The password must be at least 6 characters long and contain letters, numbers, and special characters.",
    ),
  confirmPassword: z
    .string()
    .min(6, "Password must be at least 6 characters long.")
    .max(100, "Password must be less than 100 characters.")
    .refine(
      (value) => passwordRegex.test(value), // 사용자 정의 조건을 설정하여 비밀번호 확인의 유효성을 검사합니다.
      "The password must be at least 6 characters long and contain letters, numbers, and special characters.",  // 유효성 검사 실패 시 표시할 메시지입니다.
    ),
});
