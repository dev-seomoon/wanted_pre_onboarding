# 원티드 프리온보딩 프론트엔드 선발 과제

원티드 프리온보딩 프론트엔드 선발 과제입니다.

- [x] Toggle.js
- [x] Modal.js
- [x] Tab.js
- [x] Tag.js
- [x] AutoComplete.js
- [x] ClickToEdit.js

### Demo 
https://dev-seomoon.github.io/wanted_pre_onboarding/

### Reference 

선발 과제 가이드 :  
https://codestates.notion.site/5f83f7a007664f1abcf0cdbcbbbbd521

## 구현한 방법
- 사용 기술 : HTML5, React, Styled-components, CRA(Create-React-App), ESLint 등

### 환경설정

1. `npx create-react-app custom-component` 명령어를 이용해 React 프로젝트를 생성했습니다. 
2. ESLint, Prettier를 적용했습니다. Airbnb 코딩 컨벤션을 적용했습니다. (일부 룰 수정)  

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
모달창 닫기 버튼은 css로 직접 구현했습니다. (이미지 파일을 불러와서 사용하는 것보다 좀더 가볍기 때문)

#### 3. Tab
`tabs` 배열을 생성하고, 배열의 인덱스를 담는 `currentIndex` state를 선언했습니다.  
탭을 선택하면 해당 tab의 인덱스가 `currentIndex`로 설정되도록 해서 탭 기능을 구현했습니다. 
그리고 현재 선택된 탭에만 "active" 클래스를 추가해서  
선택되지 않은 탭과 배경색, 글자색을 다르게 했습니다. (선택된 탭을 구분할 수 있도록)  

#### 4. Tag
input에 값을 입력하고 Enter 키를 누르면(`onKeyPress` 이벤트),  
입력한 값이 `tagList` 배열에 추가됩니다. 
`map` 메소드를 사용해 `tagList` 배열을 렌더링했습니다.  
각 태그에 delete 버튼을 달아서, delete 버튼 클릭 시 해당 태그가 `tagList`에서 삭제되게 했습니다.  
배열에서 특정 태그를 삭제할 때는 불변성 유지를 위해 `filter` 메소드를 사용했습니다.  

#### 5. AutoComplete  
`suggestions`, `filteredSuggestions`, `showSuggestionField` 등을 state로 선언했습니다.  
input에 값을 입력하고 Enter 키를 누르면 입력한 값이 `suggestions` 배열에 추가됩니다.  
배열에 값을 추가할 때는 불변성 유지를 위해 spread 연산자를 사용했습니다.  
input의 값이 변경될 때마다 (`onChange` 이벤트)   
`suggestions` 배열에서 input에 입력된 값을 포함하거나 일치하는 문자열을 찾아 (filter, indexOf 메소드 사용)  
`filteredSuggestions` 배열에 저장해 SuggestionField에서 보여줍니다. (`showSuggestionField : true`)

#### 6. ClickToEdit
`useInput`이라는 커스텀 훅을 만들어 구현했습니다.  
input에 입력 중인 값을 저장하는 state (`value`)와  
input에서 입력이 끝난 값을 저장하는(=input에서 포커스가 아웃되었을 때 입력되어 있는 값) state (`result`)를  
별도로 두어 관리했습니다.  

### +) Container 구현
구현한 컴포넌트들을 감싸줄 Container 컴포넌트를 구현했습니다.  
App.jsx에서 1~6번에서 구현한 컴포넌트들을 각각 Container의 하위 컴포넌트로 두고,  
Container에서 `children` prop을 사용해 하위 컴포넌트를 렌더링하는 방식으로 구현했습니다.  

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
1) `ESlint - Error: Must use import to load ES Module` :  
  Eslint parser로 지정한 `babel-eslint`가 deprecated 되어서 발생한 이슈.  
  `babel-eslint` 대신 `@babel/eslint-parser`를 parser로 지정해서 해결했습니다. 
  
2) `no babel config file detected` :  
  Eslint 설정 파일의 `parserOptions` 부분에 `requireConfigFile: false` 추가로 해결했습니다.  
  
3) `This experimental syntax requires enabling ... parser plugins` :  
  `@babel/preset-react` 설치 후 
  Eslint 설정 파일의 `parserOptions` > `babelOptions`에 `@babel/preset-react`를 추가해 해결했습니다. 

4) `Parsing error: Cannot find module '@babel/preset-react'` :  
  VSCode 문제로 추정. VSCode 창을 새로 열고  
  custom-component 폴더가 프로젝트 루트가 되도록 open 했더니 해결되었습니다. 
 
## 실행 방법

### 프로젝트 실행 방법 :  
1. 저장소 클론 받기 
`git clone https://github.com/dev-seomoon/wanted_pre_onboarding` 

2. custom-component 폴더로 이동  
`cd custom-component` 

3. 필요한 패키지 설치  
`npm install`  

4. 프로젝트 실행  
`npm run start`로 프로젝트 실행 후 localhost:3000으로 접속  
(포트 번호는 여러 프로젝트를 실행하는 경우 달라질 수 있음) 

### Toggle
![toggle](https://user-images.githubusercontent.com/52448114/152529934-1a53281a-0225-469e-824b-b29d7ba655fd.gif)  
토글 버튼(흰색 원모양 버튼)을 눌러 토글 스위치를 ON/OFF할 수 있습니다.  
<br />

### Modal
![modal](https://user-images.githubusercontent.com/52448114/152529951-f2817e06-09ae-4b81-9dc3-c17f3beb794b.gif)  
open modal 버튼을 눌러 모달창을 열고, 닫기 버튼(x 버튼)을 눌러 모달창을 닫을 수 있습니다. 
<br />


### Tab
![tab](https://user-images.githubusercontent.com/52448114/152529973-ad1f1088-9df6-4871-b04e-ff001c578cbd.gif)  
상단의 탭 메뉴를 클릭해 원하는 탭으로 이동할 수 있습니다.  
<br />


### Tag
![tag](https://user-images.githubusercontent.com/52448114/152531437-34a9943c-6603-4f08-89b5-572169ef2e4c.gif)  
태그 입력 후 Enter 키를 눌러 새로운 태그를 추가할 수 있습니다.  
태그 옆의 delete 버튼(x 버튼)을 눌러 태그를 삭제할 수 있습니다.  
<br />


### AutoComplete
![autocomplete](https://user-images.githubusercontent.com/52448114/152530036-6e109798-8f6a-4c04-9138-d27515168ada.gif)  
검색어 자동완성 기능입니다. 이전에 입력한 검색어에 따라 검색어를 제안합니다.  
제안된 검색어 중 하나를 클릭하면 자동으로 검색어가 완성됩니다.  
리셋 버튼(x 버튼)을 눌러 검색창에 입력된 값을 지울 수 있습니다.  
<br />


### ClickToEdit
![ezgif-5-6c9e72f539](https://user-images.githubusercontent.com/52448114/152532057-9ef6daea-a286-4391-bca3-85086c822282.gif)  
이름, 나이를 입력하면  
하단에서 입력된 이름과 나이를 확인할 수 있습니다.  
