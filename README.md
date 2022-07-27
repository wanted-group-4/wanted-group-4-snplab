# 원티드 프리온보딩 5차 과제 - admin 페이지 만들기

## 1. 소개

- 원티드 프리온보딩 5기 3-2~4-1 기업 과제
- admin 페이지 만들기
- 기간 : 2022/07/21 ~ 2022/07/27

<br>

## 2. 역할
|이름|역할|github|
|---|---|---|
|이가람|--|https://github.com/devmagrfs|
|박소영|--|https://github.com/soyoung931014|
|이미림|--|https://github.com/mrlee323|
|서소희|--|https://github.com/greenish0902|
|성열하|--|https://github.com/Hotsumm|
|박지훈|--|https://github.com/JiehoonPark|

<br>

## 3. 기술 스택
- React
- Typescript
- react-query
- axios
- styled-components
- date-fns
- json-server
- react-icons

<br>

## 4. 프로젝트 구조

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
│		│
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
