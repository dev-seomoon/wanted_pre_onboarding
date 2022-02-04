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
토글컨테이너, 토글버튼, 토글백그라운드로 구성했습니다.  
토글버튼을 누르면 토글의 ON/OFF 상태가 변경되고,  
상태 변경에 따라 토글버튼과 토글백그라운드가 좌우로 이동하게 구현했습니다.  
이 때 css transition을 주어 움직임이 매끄럽게 했습니다.

#### 2. Modal
오버레이, 모달창(+모달창 닫기 버튼), 모달버튼으로 구성했습니다.  
모달버튼을 통해 모달창 열림/닫힘 상태를 변경할 수 있습니다.  
모달창이 열리면 모달 오버레이, 모달창이 화면에 나타납니다.  
모달창 닫기 버튼은 css로 직접 구현했습니다. 

#### 3. Tab
`tabs` 배열을 생성하고, 배열의 인덱스를 담는 `currentIndex` state를 선언했습니다.  
탭을 선택하면 해당 tab의 인덱스가 `currentIndex`로 설정되도록 해서 탭 기능을 구현했습니다. 
그리고 현재 선택된 탭에만 "active" 클래스를 추가해서  
선택되지 않은 탭과 배경색, 글자색을 다르게 했습니다.  

#### 4. Tag
input에 값을 입력하고 Enter 키를 누르면(`onKeyPress` 이벤트),  
입력한 값이 `tagList` 배열에 추가됩니다. 
`map` 메소드를 사용해 `tagList` 배열을 렌더링했습니다.  
각 태그에 delete 버튼을 달아서, delete 버튼 클릭 시 해당 태그가 `tagList`에서 삭제되게 했습니다.  
배열에서 특정 태그를 삭제할 때는 `filter` 메소드를 사용했습니다.  



#### 5. AutoComplete  
state : `value`, `suggestions`, `filteredSuggestions`, `showSuggestionField` 



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

