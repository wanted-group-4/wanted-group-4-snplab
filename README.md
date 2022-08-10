# 원티드 프리온보딩 4차 과제 - admin 페이지 만들기

## 🚀🚀 [배포](https://wanted-group-4-snplab.vercel.app/)

## 1. 소개

- 원티드 프리온보딩 5기 기업 과제
- admin 페이지 만들기
- 기간 : 2022/07/21 ~ 2022/07/27 (3-2 ~ 4-1주차)

## 2. 역할

| Task |  담당자 | 상세 설명 | 추가 기여사항 |
| --- | --- | --- | --- |
| API 개발 | [박소영](https://github.com/soyoung931014) | @tanstack/react-query를 이용한 api 개발, 개인정보 처리방침 및 정보제공 페이지 데이터 제공 | 보일러 플레이트, 초기 세팅, 절대경로 설정 |
| API 개발 | [박지훈](https://github.com/JiehoonPark) | @tanstack/react-query를 이용한 api 개발 | 글로벌 타입 정의 |
| User 페이지 | [서소희](https://github.com/greenish0902) | user 페이지 유효성 검사, 입력 폼 정보 저장 |  |
| User 페이지 | [성열하](https://github.com/Hotsumm) | user 페이지 UI 구현, 거주지역 선택 모달, 개인정보 처리방침 페이지 |  |
| Admin 페이지 | [이미림](https://github.com/mrlee323) | admin 페이지 레이아웃, 검색 input 필터링, 엑셀 다운로드 | figma를 이용한 목업 디자인, 모바일/앱 기본 레이아웃 구현 |
| Admin 페이지 | [이가람](https://github.com/devmagrfs) | admin 페이지 테이블 레이아웃 및 리스트 구현 | vercel 배포 |

## 3. 실행 방법

```
# with yarn
# install
$ yarn install

# run json-server
$ yarn server

# run
$ yarn start
```

## 4. 기술 스택

- **TypeScript & ReactJS (Create React App with yarn)**
- **[Styles]** styled-components, styled-reset
- **[API] a**xios, json-server
- **[Routing]** react-router-dom
- **[Icons]** react-icons
- **[Date]** date-fns
- **[State]** @tanstack/react-query

## 5. 프로젝트 구조

```
root
├──data
│   └── db.json
│
├──public
│   ├── images
│   │    └── AiFillCaretDown.svg
│   └── index.html
│
├──src
│   ├── api
│   │    ├── index.ts
│   │    ├── adminApi.ts
│   │    └── userApi.ts
│   │
│   ├── assets
│   │    └── privacy_information_consent_form.ts
│       │
│   ├── components
│   │    ├── admin
│   │    │     ├── search
│   │    │     │    ├── Search.tsx
│   │    │     │    ├── Select.tsx
│   │    │     │    └── TransportationInput.tsx
│   │    │     └── Download.tsx
│   │    ├── applicant
│   │    │     ├── Applicantcontainer.tsx
│   │    │     ├── ApplicantList.tsx
│   │    │     ├── ApplicantTableRow.tsx
│   │    │     └── index.ts
│   │    ├── common
│   │    │     └── Modal.tsx
│   │    ├── layout
│   │    │     ├── Header.tsx
│   │    │     ├── MobileLayout.tsx
│   │    │     └── WebLayout.tsx
│   │    ├── region
│   │    │     ├── Picker.tsx
│   │    │     ├── RegionSelect.tsx
│   │    │     └── index.ts
│   │    └── terms
│   │          └── TermsDetail.tsx
│   │
│   ├── constants
│   │     ├── user.ts
│   │     ├── admin.ts
│   │     └── transportation.ts
│   │
│   ├── hooks
│   │     ├── useAdminQueries.ts
│   │     └── useOutsideClick.tsx
│   ├── pages
│   │     ├── Admin.tsx
│   │     ├── Home.tsx
│   │     └── User.tsx
│   ├── routes
│   │     └── Router.tsx
│   ├── styles
│   │     ├── GlobalStyle.ts
│   │     └── theme.ts
│   ├── types
│   │     └── models
│   │           ├── filter.ts
│   │           ├── form.ts
│   │           ├── region.ts
│   │           └── user.ts
│   ├── utils
│   │     ├── changeDateDBFormat.ts
│   │     ├── checkValid.ts
│   │     ├── setDateFormat.ts
│   │     ├── validateDate.ts
│   │     ├── validationException.ts
│   │     ├── validationRegex.ts
│   │     └── validationRules.ts
│   ├── App.tsx
│   └── index.tsx
```

## ✨ 6. Keypoints

### form 페이지

> **사용자와의 즉각적인 인터렉션 구현!**

- onBlur 함수를 이용해 `input` 창의 `focus` 가 해제되면 사용자에게 즉각적인 피드백을 주도록 구현했습니다. 에러가 발생하는 경우, case에 적절한 에러 메시지를 전달해 줍니다.

### admin 페이지

> **사용자의 편의를 고려한 필터링!**

- 입력시에 다중 선택이 가능했던 이용수단의 경우, 다중 검색이 가능하도록 구현했습니다. 여러 이용수단 중 선택한 이용수단 외에 후보가 될 수 있는 이용수단을 제시해 주어, 타이핑 또는 직접 선택을 통해 검색이 가능합니다.

### api 제작

> **react-query 기반의 서버 데이터 흐름을 고려한 구현!**

- CRUD가 자주 이루어지는 데이터 흐름을 고려해 react-query를 이용했습니다.
- api 함수를 호출할 때 어떤 동작을 하는지 **명확한 네이밍에 유의**하여 구현했습니다. 쿼리를 트리거하는 쿼리키와 그에 따른 콜백함수를 분리하여 가독성과 재사용성을 높였습니다.
