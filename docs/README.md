# 회원가입, 로그인

- [ ] `/signup` 경로에 회원가입 기능 개발
- [ ] `/signin` 경로에 로그인 기능 개발
- [ ] 페이지 내 이메일 `input`, 비밀번호 `input`, 제출 `button`이 포함된 형태로 구성
  - [ ] 이메일 `input`에 `data-testid="email-input"` 속성 부여
  - [ ] 패스워드 `input`에 `data-testid="password-input"` 속성 부여
  - [ ] 회원가입 페이지 회원가입 `button`에 `data-testid="signup-button"` 속성 부여
  - [ ] 로그인 페이지 로그인 `button`에 `data-testid="signin-button"` 속성 부여

<br>

### Assignment 1

- [x] 회원가입, 로그인 페이지에 이메일과 비밀번호의 유효성 검사기능 구현
  - [x] 이메일에 `@` 포함
  - [x] 비밀번호 8자 이상
- [x] 입력된 이메일, 비밀번호가 유효성 검사를 통과하지 못한다면 `button`에 `disabled` 속성 부여

<br>

### Assignment 2

- [x] 회원가입 페이지에서 버튼 클릭 시 회원가입을 진행하고, 회원가입이 정상적으로 완료되면 `/signin` 경로로 이동

<br>

### Assignment 3

- [x] 로그인 페이지에서 버튼 클릭 시 로그인을 진행하고, 로그인이 정상적으로 완료되면 `/todo` 경로로 이동
- [x] 응답받은 JWT는 로컬 스토리지에 저장

<br>

### Assignment 4

- [x] 로그인 여부에 따른 리다이렉트 처리 구현
  - [x] 로컬 스토리지에 토큰이 있는 상태로 `/signin` 또는 `/signup` 페이지에 접속하면 `/todo` 경로로 리다이렉트
  - [x] 로컬 스토리지에 토큰이 없는 상태로 `/todo` 페이지에 접속시 `/signin` 경로로 리다이렉트

<br>

# TODO 리스트

### Assignment 5

- [x] `/todo` 경로에 접속하면 TODO 리스트 목록을 보여줌
- [x] 목록에서 TODO의 내용과 완료 여부를 표시
- [x] TODO의 완료 여부는 `<input type="checkbox" />`를 통해 표현
- [x] TODO는 `<li>`로 감싸기

<br>

### Assignment 6

- [x] 리스트 페이지에 새로운 TODO를 입력할 수 있는 `input`, `button` 생성
  - [x] TODO 입력 `input`에는 `data-testid="new-todo-input"` 속성 부여
  - [x] TODO 추가 `button`에는 `data-testid="new-todo-add-button"` 속성 부여
  - [x] 추가 `button` 클릭 시 입력 `input`의 내용이 새로운 `TODO`로 추가
  - [x] TODO를 추가한 후 새로고침을 해도 추가된 TODO가 목록에 있도록 구현

<br>

### Assignment 7

- [x] TODO 체크박스를 통해 완료 여부를 수정할 수 있도록 구현

<br>

### Assignment 8

- [x] TODO 우측에 수정버튼, 삭제버튼을 생성
  - [x] 수정 버튼에는 `data-testid="modify-button"` 속성 부여
  - [x] 삭제 버튼에는 `data-testid="delete-button"` 속성 부여

<br>

### Assignment 9

- [x] TODO 리스트 삭제 기능 구현
  - [x] TODO 리스트의 TODO 우측에 삭제 버튼을 누르면 해당 아이템을 삭제하도록 구현

<br>

### Assignment 10

- [x] TODO 리스트의 수정 기능 구현
  - [x] TODO 우측의 수정 버튼을 클릭하면 수정 모드가 활성화 되도록 구현
  - [x] 수정모드에서는 TODO의 내용 변경이 가능하며, TODO의 내용이 `input`창 내에 입력된 형태로 변경
  - [x] 수정 `input` 창에는 `data-testid="modify-input"` 속성 부여
  - [x] 수정모드에서는 TODO의 우측에 제출 버튼과 취소 버튼을 구현
  - [x] 제출 `button`에는 `data-testid="submit-button"` 속성 부여
  - [x] 취소 `button`에는 `data-testid="cancel-button"` 속성 부여
  - [x] 제출 버튼을 누르면 수정한 내용을 제출하여 내용이 업데이트 되도록 구현
  - [x] 취소 버튼을 누르면 수정한 내용을 초기화하고, 수정모드를 비활성화
