# wanted_pre_onboarding

원티드 프리온보딩 프론트엔드 선발 과제입니다.

- [ ] Toggle.js
- [ ] Modal.js
- [ ] Tab.js
- [ ] Tag.js
- [ ] AutoComplete.js
- [ ] ClickToEdit.js

### Reference 

선발 과제 가이드 :  
https://codestates.notion.site/5f83f7a007664f1abcf0cdbcbbbbd521


## 구현한 방법
- 사용 기술 : HTML5, React, styled-components, CRA(Create-React-App) 

1. `npx create-react-app custom-component` 명령어를 이용해 React 프로젝트 생성

## 구현하면서 어려웠던 점과 해결 방법 (Error Handling Log)
### 1. CRA 버전 에러
```
You are running `create-react-app` 4.0.3, which is behind the latest release (5.0.0).
We no longer support global installation of Create React App.
```
=> `npx create-react-app@latest custom-component` 명령어로 해결.  
확인해보니 CRA가 글로벌이나 로컬에 설치되어 있지 않은데도 위와 같은 에러가 발생해서  
CRA 버전을 latest로 지정해서 설치하는 방법으로 해결했습니다. 


## 실행 방법

