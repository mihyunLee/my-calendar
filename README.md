# 🗓️my-calendar

> 라이브러리를 연습하기 위해 만드는 나만의 캘린더

![ezgif com-gif-maker (5)](https://user-images.githubusercontent.com/51310674/201864727-f730f08f-4f33-410b-a8b3-36ba77f006aa.gif)

<br />

## 🗣️ Description
리액트로 구현한 캘린더입니다. 스타일 라이브러리인 `emotion`과 날짜 라이브러리인 `date-fns`를 사용하여 구현하였습니다.

<br />

## 🚀 Getting Started
- application install (with yarn) 
```
yarn install
```
- application start (with yarn)
```
yarn start
```

## ✅ Feature
- [x] 오늘의 날짜 강조 표시
- [x] 이번달과 이번달에 속하지 않는 날짜 구분
- [x] 토글 버튼으로 다크모드 적용
- [x] Context API와 Custom hook으로 테마 관리
- [x] 로컬 스토리지를 사용하여 테마 유지

<br />

## 🗂️ Project Structure
```
my-calendar
src
├─ components ─────────────── 컴포넌트 
│  ├─ common ──────────────── 공통 컴포넌트
│  │  └─ Button
│  ├─ Calendar
│  ├─ Calendar.styles
│  ├─ CalendarDate.
│  ├─ CalendarDate.styles
│  ├─ CalendarTemplate
│  ├─ Footer
│  └─ ToggleButton
│ 
├─ styles ─────────────────── 전역 스타일, 커스텀 테마
│  ├─ GlobalStyle
│  └─ theme
│ 
├─ utils ──────────────────── 유틸 함수
│  └─ date ────────────────── 월별 날짜를 가져오는 함수
│ 
├─ constants ──────────────── 상수
│  └─ date ────────────────── 요일을 담고 있는 상수
│ 
├─ context ────────────────── 다크모드 context api
│  └─ themeProvider
│ 
├─ App.js ─────────────────── Theme Context 적용 및 컴포넌트 렌더링
└─  index.js
```
