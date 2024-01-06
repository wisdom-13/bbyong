
**프로젝트 기간**
2023.08 ~ 2023.12

**개발 환경** 
React.js, Next.js, Typescript, NextAuth.js, Sanity, SWR, Storybook, Tailwindcss

<br>

### 🗒️ 프로젝트 소개

---

두더지와 뿅망치 컨셉의 개인 프로필 생성 사이트로,

개인의 페이지에 방문한 유저가 손쉽게 상대방과 교류할 수 있는 서비스를 제공합니다.

### ✏️ 사용 기술

---

- Ful-stack 개발과 **하이브리드 렌더링**을 위하여 **Next.js**를 기반으로 서비스를 구축하였습니다.
- 유저 정보등을 저장하기 위해 **Headless CMS인 Sanity**를 사용하여 데이터베이스를 구축하였습니다.
- 사용자 소셜 회원 가입 및 로그인을 위하여 **NextAuth**를 사용하였습니다.
- 데이터 네트워크 상태 관리를 위해 **SWR 라이브러리**를 사용하였습니다.
- 링크를 등록할 때 잘못된 형식의 데이터가 등록되지 않도록 **react-hook-form** 을 사용하여 폼을 검증하였습니다.
- 사용자가 키보드를 입력할 때마다 지속적으로 데이터를 호출하는 문제를 이벤트가 빈번히 발생하지 않도록 커스텀 hook을 생성하여 **디바운싱** 처리를해주었습니다.

### ⚙️ 주요 기능

---

- **뿅망치 넛지** 
: 클리커 인터랙션을 통해 유저에게 넛지를 제공하며, 간단한 리액션으로 상대방과교류할 수 있습니다.
- **우편함** 
: 상대방에게 전하고 싶은 마음을 적어 우편함을 통해 전송할 수 있습니다. 친구에게만 전하고 싶은 마음이 있다면 공개 여부를 설정할 수 있습니다.
- **두더지 굴 (링크모음)** 
: 본인의 소셜 계정등을 프로필 페이지에 노출시켜 페이지에 방문하는 사람이 쉽게 접근할 수 있습니다.
