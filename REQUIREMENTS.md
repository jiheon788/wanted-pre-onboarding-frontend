# Requirements
> [과제 가이드라인](https://github.com/walking-sunset/selection-task)

## Assignment 1
- [x] 회원가입과 로그인 페이지 (`/signup`, `/signin` 경로)
- [x] 이메일 조건: @ 포함
- [x] 비밀번호 조건: 8자 이상
- [x] 입력된 이메일과 비밀번호가 유효성 검사를 통과하지 못한다면 button에 `disabled` 속성을 부여
- [x] 테스트 아이디
```html
<input data-testid="email-input" />
<input data-testid="password-input" />
<button data-testid="signup-button">회원가입</button>
<button data-testid="signin-button">로그인</button>
```

## Assignment 2
- [x] 회원가입 페이지에서 버튼을 클릭 시 회원가입을 진행
- [x] 회원가입이 정상적으로 완료되었을 시 `/signin` 경로로 이동

## Assignment 3
- [x] 로그인 페이지에서 버튼을 클릭 시, 로그인을 진행
- [x] 로그인이 정상적으로 완료되었을 시 `/todo` 경로로 이동
- [x] 응답받은 JWT는 로컬 스토리지에 저장

## Assignment 4
- [x] 로그인 여부에 따른 리다이렉트 처리를 구현
- [x] 로컬 스토리지에 토큰이 있는 상태로 `/signin` 또는 `/signup` 페이지에 접속한다면 `/todo` 경로로 리다이렉트
- [x] 로컬 스토리지에 토큰이 없는 상태로 `/todo`페이지에 접속한다면 `/signin` 경로로 리다이렉트

## Assignment 5
- [x] `/todo`경로에 접속하면 투두 리스트의 목록
- [x] 목록에서는 TODO의 내용과 완료 여부가 표시
- [x] TODO의 완료 여부는 `<input type="checkbox" />` 를 통해 표현
- [x] TODO는 `<li>` tag를 이용

```html
<li>
  <label>
    <input type="checkbox" />
    <span>TODO 1</span>
  </label>
</li>
<li>
  <label>
    <input type="checkbox" />
    <span>TODO 2</span>
  </label>
</li>
```

## Assignment 6
- [ ] 리스트 페이지에 새로운 TODO를 입력할 수 있는 input과 추가 button
- [ ] TODO 입력 input에는 data-testid="new-todo-input" 속성을 부여
- [ ] TODO 추가 button에는 data-testid="new-todo-add-button" 속성을 부여

```html
<input data-testid="new-todo-input" />
<button data-testid="new-todo-add-button">추가</button>
```
- [ ] 추가 button을 클릭하면 입력 input의 내용이 새로운 TODO로 추가

## Assignment 7
- [ ] TODO의 체크박스를 통해 완료 여부를 수정

## Assignment 8
- [ ] TODO 우측에 수정버튼과 삭제 버튼
- [ ] 수정 버튼에는 data-testid="modify-button" 속성을 부여해주세요
- [ ] 삭제 버튼에는 data-testid="delete-button" 속성을 부여해주세요

```html
<li>
  <label>
    <input type="checkbox" />
    <span>TODO 1</span>
  </label>
  <button data-testid="modify-button">수정</button>
  <button data-testid="delete-button">삭제</button>
</li>
```

## Assignment 9
- [ ] 투두 리스트의 삭제 기능을 구현
- [ ] 투두 리스트의 TODO 우측의 삭제버튼을 누르면 해당 아이템이 삭제

## Assignment 10
- [ ] 투두 리스트의 수정 기능을 구현
- [ ] TODO 우측의 수정 버튼을 누르면 수정모드가 활성화 되도록 해주세요
- [ ] 수정모드에서는 TODO의 내용을 변경할 수 있어야 합니다.
- [ ] 수정모드에서는 TODO의 내용이 input창 안에 입력된 형태로 변경해주세요
- [ ] 수정 input창에는 data-testid="modify-input" 속성을 부여해주세요
- [ ] 수정모드에서는 TODO의 우측에 제출버튼과 취소버튼이 표시되게 해주세요
- [ ] 제출버튼에는 data-testid="submit-button" 속성을 부여해주세요
- [ ] 취소버튼에는 data-testid="cancel-button" 속성을 부여해주세요
- [ ] 제출버튼을 누르면 수정한 내용을 제출해서 내용이 업데이트 될 수 있도록 해주세요
- [ ] 취소버튼을 누르면 수정한 내용을 초기화 하고, 수정모드를 비활성화 해주세요

```html
<input data-testid="modify-input" />
<button data-testid="submit-button">제출</button>
<button data-testid="cancel-button">취소</button>
```

## 최종 결과물 예시

![최종 결과물 예시](https://user-images.githubusercontent.com/110355087/214471527-bd8037b9-f2dd-4db0-ade0-3d5ce27a6c0c.gif)