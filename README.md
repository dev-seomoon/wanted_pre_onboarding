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
토글 스위치 상태를 props로 전달해, prop 값에 따라  
css position - left 값을 변경하는 방식으로 구현했습니다. (스타일드 컴포넌트 활용)  

이 때 left 속성에 transition을 주어 움직임이 매끄럽게 했습니다. 

#### 2. Modal
오버레이, 모달창(+모달창 닫기 버튼), 모달버튼 크게 세가지로 구성했습니다. 

모달버튼을 통해 모달창 열림/닫힘 상태를 변경할 수 있습니다.  

모달창이 닫힌 상태일 때는 (초기 상태)  
오버레이와 모달창이 화면에 보이지 않습니다. (`display: none`) 

모달버튼을 누르면 모달창이 열린 상태가 됩니다.  
모달창이 열린 상태에서는  
오버레이와 모달창이 화면에 나타납니다. (`display: block`)  
*오버레이는 보통 화면 전체크기로 구현하지만 이번에는 모달 컴포넌트만 덮는 크기로 구현했습니다.  

모달창에는 간단한 텍스트와 모달창 닫기 버튼이 들어갑니다.  
모달창 닫기 버튼은 조금이라도 더 빠른 렌더링을 위해 이미지 파일을 사용하지 않고 css로 직접 만들었습니다. 

#### 3. Tab


#### 4. Tag
state : `value`, `tags`  


#### 5. AutoComplete  
state : `value`, `suggestions`, `filteredSuggestions`, `showSuggestionField` 

1) 검색창(Search Bar, input)
- 사용자가 검색창에 텍스트를 입력하고 Enter 키를 누르면   
  `suggestions` 배열에 입력한 텍스트가 추가됩니다.  
- 사용자가 검색창에 텍스트를 입력하면  
  `suggestions` 배열에서 검색창에 입력한 텍스트를 포함하는 문자열만 찾아 (`filter`, `indexOf` 메소드 사용)  
  `filteredSuggestions`에 저장합니다. (이 때, 빈 문자열은 제외합니다. )  
  
2) 제안영역(Suggestion Field)
- `filteredSuggestions` 배열의 길이가 1 이상일 경우 (검색어를 포함/검색어와 일치하는 문자열이 있는 경우)  
  제안영역에 `filteredSuggestions` 배열의 내용을 보여줍니다. (`showSuggestion` state : `false` -> `true`로 변경)
- 제안영역에서 특정 문자열을 클릭하면, 검색창의 텍스트가 해당 문자열로 대치됩니다. 

3) 리셋버튼 : 입력된 텍스트를 지울 수 있는 버튼. 
- 리셋버튼을 클릭 시 input창에 입력되어 있는 값이 비워지고, 
- 사용자가 값을 다시 입력할 수 있도록 input창으로 포커싱이 되도록 했습니다. (React `useRef` 훅 사용)  


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

