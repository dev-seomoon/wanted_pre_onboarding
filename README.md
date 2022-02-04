# wanted_pre_onboarding

원티드 프리온보딩 프론트엔드 선발 과제입니다.

- [x] Toggle.js
- [x] Modal.js
- [x] Tab.js
- [x] Tag.js
- [x] AutoComplete.js
- [x] ClickToEdit.js

### Reference 

선발 과제 가이드 :  
https://codestates.notion.site/5f83f7a007664f1abcf0cdbcbbbbd521


## 구현한 방법
- 사용 기술 : HTML5, React, Styled-components, CRA(Create-React-App), ESLint 등

### 환경설정

1. `npx create-react-app custom-component` 명령어를 이용해 React 프로젝트 생성

2. ESLint, Prettier 적용

### 컴포넌트 구현
#### 1. Toggle
토글컨테이너, 토글버튼, 토글백그라운드 세 가지 요소로 구성했으며 
다음과 같은 방식으로 구현했습니다. 

토글 스위치가 OFF 상태일 때, 
1) 토글 버튼은 왼쪽에 위치합니다. 
2) 토글 백그라운드는 토글 컨테이너 왼쪽에 위치하며 화면에 보이지 않습니다. 

토글 스위치가 ON 상태가 되면, 
1) 토글 버튼은 오른쪽으로 이동합니다.  
2) 토글 백그라운드를 토글 컨테이너와 같은 위치로 이동시켜 화면에 보이게 합니다. 

토글버튼과 토글백그라운드의 이동은  
토글 스위치 상태를 props로 전달해, 스타일드 컴포넌트에서 해당 prop 값에 따라  
css position - left 값을 변경하는 방식으로 구현했습니다.  

이 때 left 속성에 transition을 주어 움직임이 매끄럽게 했습니다. 

#### 2. Modal
#### 3. Tab
#### 4. Tag
#### 5. AutoComplete
#### 6. ClickToEdit

#### +) Container 구현
구현한 컴포넌트들을 감싸줄 Container 컴포넌트를 구현했습니다.  
App.jsx에서 


## 구현하면서 어려웠던 점과 해결 방법 (Error Handling Log)
### 1. CRA 버전 에러
```
You are running `create-react-app` 4.0.3, which is behind the latest release (5.0.0).
We no longer support global installation of Create React App.
```
=> `npx create-react-app@latest custom-component` 명령어로 해결.  
확인해보니 CRA가 글로벌이나 로컬에 설치되어 있지 않은데도 위와 같은 에러가 발생해서  
CRA 버전을 latest로 지정해서 설치하는 방법으로 해결했습니다. 

### 2. ESLint & Prettier 초기 설정 과정에서의 에러

## 실행 방법

