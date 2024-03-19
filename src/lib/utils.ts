/*cn 함수를 정의하는 TypeScript 파일입니다. 
이 파일은 CSS 클래스를 조합하고 처리하기 위해 clsx와 tailwind-merge 라이브러리를 사용 */
import { type ClassValue, clsx } from "clsx"  // clsx 모듈에서 ClassValue와 clsx 함수를 가져옵니다.
import { twMerge } from "tailwind-merge" // tailwind-merge 모듈에서 twMerge 함수를 가져옵니다.

export function cn(...inputs: ClassValue[]) {
  // cn 함수는 임의의 수의 클래스 값을 입력으로 받아서 처리합니다.

  // clsx 함수는 입력된 모든 클래스 값을 조합하여 하나의 문자열로 반환합니다.
  /* twMerge 함수는 Tailwind CSS의 클래스를 병합하여 중복되는 클래스를 제거하고 
  최적화된 클래스를 반환합니다.*/
  return twMerge(clsx(inputs))
}

/*이 코드는 cn 함수를 정의하는 TypeScript 파일입니다.
CSS 클래스를 조합하고 처리하기 위해 clsx와 tailwind-merge 라이브러리를 사용합니다.*/

/*최종적으로 cn 함수는 clsx 함수를 사용하여 모든 입력된 클래스를 조합하고, 
그 결과를 twMerge 함수로 처리하여 최적화된 Tailwind CSS 클래스를 반환합니다.*/
