# 목차

- [배포 링크](#배포-링크)
- [프로젝트 설치 및 실행](#프로젝트-설치-및-실행)

<br>

# 배포 링크

### [바로가기 링크](https://wanted-pre-onboarding-frontend-e7me38fp6-cham-min.vercel.app/)

<br>

# 디렉토리 구조

```shell
.
├── docs
├── public
└── src
    ├── api
    ├── components
    │   ├── Auth
    │   ├── HOC
    │   └── Todo
    ├── data
    ├── hooks
    ├── lib
    ├── pages
    │   ├── Auth
    │   └── Todo
    ├── styles
    ├── types
    └── utils
```

<br>

# 구현 내용

### Assignment 1

- 회원가입, 로그인 페이지의 이메일과 비밀번호 유효성 검사
  - 이메일에 `@` 포함
  - 비밀번호 8자 이상

<br>

### Assignment 2

- 회원가입 성공 시 완료되면 `/signin`으로 리다이렉트

<br>

### Assignment 3

- 로그인 페이지에서 버튼 클릭시 로그인을 진행하며, 정상적으로 완료됐을 경우 `/todo`으로 리다이렉트
- 응답받은 JWT는 로컬 스토리지에 저장

<br>

### Assignment 4

- 로그인 여부에 따른 리다이렉트 처리
  - 로컬 스토리지에 토큰이 있는 경우 `/signin`, `/signup` 페이지 진입 시 `/todo`로 리다이렉트
  - 로컬 스토리지에 토큰이 없는 경우 `/todo` 페이지 진입 시 `/signin`로 리다이렉트

<br>

### Assignment 5

- `/todo` 페이지 진입 시 TODO 리스트 목록 렌더링

<br>

### Assignment 6

- 새로운 TODO를 입력하는 `input`, TODO 리스트에 내용을 추가하는 `button` 구현

<br>

### Assignment 7

- 체크박스를 통해 완료 여부를 수정

<br>

### Assignment 8 ~ 10

- TODO 리스트의 수정, 삭제 버튼 생성 및 기능 구현
- 수정버튼 클릭 시 TODO의 내용이 `input`창 내에 입력된 형태로 변경
- 수정버튼 클릭 시 수정, 삭제 버튼을 취소, 제출 버튼으로 변경

<br>

# 프로젝트 설치 및 실행

```shell
$ git clone https://github.com/cham-min/wanted-pre-onboarding-frontend.git
$ npm install
$ npm start
```
