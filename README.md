# 웹퍼블리셔 포트폴리오

<img width="100%" height="auto" alt="project-thumbnail" src="https://github.com/user-attachments/assets/6ed9f047-c613-4e19-a6de-c500acb9d98c" />

- URL : https://hayeon-portfolio.vercel.app

<br>

## 포트폴리오 소개

- 중고 신입으로 이직을 준비하면서 만든 두 번째 포트폴리오입니다.
- 자기소개, 프로젝트, 경력, 스킬, 외부활동, 블로그 순으로 구성하였습니다.
- 프로젝트를 클릭하면 상세페이지로 연결되어 구현기능, 트러블 슈팅 기록 등의 정보를 자세히 볼 수 있습니다.

<br>

## 1. 개발 환경

- 사용 스킬 : HTML5, SCSS, JavaScript
- 버전 관리 : Github
- 서비스 배포 환경 : Vercel
- 디자인 : <a href='https://www.figma.com/design/Iydohs8Jm0lCshOjaZVvZ8/2025-%EC%9B%B9%ED%8D%BC%EB%B8%94%EB%A6%AC%EC%85%94-%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4?node-id=0-1&t=ANr119fXpMYH6JAC-1'>Figma</a>

<br>

## 2. 채택한 개발 기술

### SCSS

- 재사용성이 높고 유지보수가 쉬운 스타일 작성을 고려하였습니다.
- 자주 사용되는 동일한 스타일을 %placeholder로 컴포넌트화해서 조금씩 변형을 주면서 재사용했습니다
- flexbox, 미디어 쿼리와 같이 자주 쓰이면서 길이가 긴 스타일을 mixin으로 간편하게 적용했습니다.

### EsLint, Prettier

- 코드 품질을 높이고 일관된 형식을 유지하기 위해 사용하였습니다.
- EsLint는 코드 품질 관리, Prettier는 일관된 코드 스타일을 담당합니다.

<br>

## 3. 프로젝트 구조

```
📦portfolio_v2
 ┣ 📂.vscode
 ┃ ┗ 📜settings.json
 ┣ 📂assets
 ┃ ┣ 📂images
 ┃ ┃ ┣ 📂icon
 ┃ ┃ ┃ ┣ 📜icon-hand.svg
 ┃ ┃ ┃ ┣ 📜icon-profile.svg
 ┃ ┃ ┃ ┣ 📜icon-project-arrow.svg
 ┃ ┃ ┃    .
 ┃ ┃ ┃    .
 ┃ ┃ ┃    .
 ┃ ┃ ┣ 📜career-thumbnail.png
 ┃ ┃ ┣ 📜certificate-01.png
 ┃ ┃ ┣ 📜certificate-02.jpg
 ┃ ┃    .
 ┃ ┃    .
 ┃ ┃    .
 ┣ 📂data
 ┃ ┗ 📜blog-data.json
 ┣ 📂js
 ┃ ┣ 📜accordion.js
 ┃ ┣ 📜blog-slide.js
 ┃ ┣ 📜certificate-modal.js
 ┃ ┣ 📜detail.js
 ┃ ┣ 📜project-slide.js
 ┃ ┣ 📜section-tab.js
 ┃ ┗ 📜top-button.js
 ┣ 📂node_modules
 ┣ 📂project
 ┃ ┣ 📜project01.html
 ┃ ┣ 📜project02.html
 ┃ ┗ 📜project03.html
 ┣ 📂styles
 ┃ ┣ 📂base
 ┃ ┃ ┣ 📜_fonts.scss
 ┃ ┃ ┣ 📜_globals.scss
 ┃ ┃ ┣ 📜_normalize.scss
 ┃ ┃ ┗ 📜_reset.scss
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📜_about.scss
 ┃ ┃ ┣ 📜_activity.scss
 ┃ ┃ ┣ 📜_blog.scss
 ┃ ┃ ┣ 📜_career.scss
 ┃ ┃ ┣ 📜_detail.scss
 ┃ ┃ ┣ 📜_project.scss
 ┃ ┃ ┣ 📜_section.scss
 ┃ ┃ ┣ 📜_skill.scss
 ┃ ┃ ┗ 📜_title.scss
 ┃ ┣ 📂constants
 ┃ ┃ ┣ 📜_breakpoints.scss
 ┃ ┃ ┣ 📜_colors.scss
 ┃ ┃ ┣ 📜_dimensions.scss
 ┃ ┃ ┣ 📜_grids.scss
 ┃ ┃ ┣ 📜_typography.scss
 ┃ ┃ ┗ 📜_z-indexes.scss
 ┃ ┣ 📂layouts
 ┃ ┃ ┣ 📜_certificate-modal.scss
 ┃ ┃ ┣ 📜_footer.scss
 ┃ ┃ ┣ 📜_gnb.scss
 ┃ ┃ ┣ 📜_grids.scss
 ┃ ┃ ┣ 📜_overlay.scss
 ┃ ┃ ┗ 📜_top-button.scss
 ┃ ┣ 📂mixins
 ┃ ┃ ┣ 📜_flexbox.scss
 ┃ ┃ ┣ 📜_positions.scss
 ┃ ┃ ┗ 📜_responsive.scss
 ┃ ┣ 📂modules
 ┃ ┃ ┗ 📜_tags.scss
 ┃ ┗ 📜main.scss
 ┣ 📜.gitignore
 ┣ 📜.prettierignore
 ┣ 📜.prettierrc
 ┣ 📜apple-touch-icon.png
 ┣ 📜eslint.config.js
 ┣ 📜favicon-96x96.png
 ┣ 📜favicon.ico
 ┣ 📜favicon.svg
 ┣ 📜icon-waving-hand.png
 ┣ 📜index.html
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┣ 📜README.md
 ┣ 📜site.webmanifest
 ┣ 📜style.css
 ┣ 📜style.css.map
 ┣ 📜web-app-manifest-192x192.png
 ┗ 📜web-app-manifest-512x512.png
```

<br>

## 4. 개발 기간 및 작업 관리

### 개발 기간

- 전체 작업 기간 : 2025.11.15 ~ 2026.01.08
- 디자인 및 기획 : 2025.11.15 ~ 2025.11.25
- 개발 : 2025.11.26 ~ 2026.01.08

### 작업 관리

- Notion을 사용하여 매일 작업 일지를 작성하고 트러블 슈팅, 신경 쓴 부분에 대해 추가로 정리하였습니다.

<br>

## 5. 신경 쓴 부분

- <a href="https://clever-boot-479.notion.site/blog-2ce97743ec4980cba51cc49b7504806f?source=copy_link">무한 롤링 배너 애니메이션 기능 구현</a>

<br>

## 6. 구현 목록
### [About 섹션]
- 홈페이지 접속 시 나오는 초기 화면으로 간단한 자기소개를 볼 수 있는 파트입니다.
- 이름을 클릭하면 깃허브 링크로 이어집니다.
- SNS(깃허브, 벨로그, 이메일, 이력서) 아이콘 클릭 시 각 링크로 이동합니다. 

About 섹션|
---|
![portfolio-readme-about](https://github.com/user-attachments/assets/f13566e4-6073-4dfe-91b3-cf33d3ea2675)|

<br>

### [Project 섹션]
- 사이드로 작업한 개인, 팀 프로젝트 목록을 볼 수 있는 파트입니다.
- 각 프로젝트를 클릭하면 상세 페이지로 넘어갈 수 있도록 링크를 연결했습니다.
- (PC) 각 프로젝트에 마우스 호버 시 너비를 100% 꽉 차지하면서 크게 볼 수 있는 애니메이션을 적용했습니다.
- (MO) Swiper 라이브러리를 사용하여 슬라이드를 넘기는 방식으로 구현했습니다.

(PC) Project 섹션| (MO) Project 섹션
---|---|
![portfolio-readme-project-pc](https://github.com/user-attachments/assets/251ccd66-7220-4852-b2d0-1d7526e915aa)|![portfolio-readme-project-mo](https://github.com/user-attachments/assets/263b1355-d039-4774-8b79-23d94e21fea8)|

<br>

### [Career 섹션]
- 근무 경력을 볼 수 있는 파트입니다.
- 버튼을 클릭하여 자세한 업무 내용을 펼쳤다가 숨길 수 있는 아코디언 방식으로 구현했습니다.

Career 섹션|
---|
<img width="100%" height="auto" alt="portfolio-readme-career" src="https://github.com/user-attachments/assets/03363059-d117-4f8f-b89b-cec200acee94" />|

<br>

### [Skill 섹션]
- 사용할 줄 아는 기술 스택을 나열하고, 해당 기술에 대한 경험을 작성하였습니다.
- grid 속성의 레이아웃으로 구성하여 모든 아이템이 동일한 사이즈를 유지하고, grid-template-columns 속성을 사용해서 모바일과 PC의 열의 배치를 다르게 적용했습니다.

(PC) Skill 섹션| (MO) Skill 섹션
---|---|
<img width="100%" height="auto" alt="portfolio-readme-skill-pc" src="https://github.com/user-attachments/assets/e25fdc69-f8ea-4959-bc95-9819bed237d2" />|<img width="100%" height="auto" alt="portfolio-readme-skill-mo" src="https://github.com/user-attachments/assets/679ae136-e8a3-4f0b-9726-fea7375b4617" />|

<br>

### [Activity 섹션]
- IT 동아리 활동, 자격증 이력을 작성하였습니다.
- 링크 버튼을 클릭하면 동아리 홈페이지로 이동됩니다.
- View 버튼을 클릭하면 실물 자격증 모달을 볼 수 있고, X 버튼이나 바깥 화면을 클릭하여 닫을 수 있는 기능을 구현했습니다.

Activity 섹션|
---|
![portfolio-readme-activity](https://github.com/user-attachments/assets/c40cff23-a5d2-4a5f-b4f4-d22f0e00ee6b)|

<br>

### [Blog 섹션]

- 프로젝트을 진행하면서 배운 내용 혹은 회고글을 무한 롤링 배너 형식으로 나열했습니다.
- @keyframes를 사용하여 무한 롤링 배너 애니메이션을 구현했습니다.

Blog 섹션|
---|
![portfolio-readme-blog](https://github.com/user-attachments/assets/8ac5797f-18cc-4dcc-a88e-419bcd3b31d6)|

<br>

### [탭 클릭 시 스크롤 이동 & 스크롤에 따라 탭 메뉴 활성화]

- 탭 클릭 시 해당 섹션 위치로 스크롤되는 기능을 구현했습니다.
- 스크롤 위치에 따라 해당되는 탭 메뉴가 활성화되는 기능을 구현했습니다.
- throttle을 사용하여 scroll, resize 이벤트에 걸려 있는 함수의 실행 빈도를 조절하여 성능을 개선했습니다.

탭 클릭 시 스크롤 이동 & 스크롤에 따라 탭 메뉴 활성화|
---|
![portfolio-readme-scroll](https://github.com/user-attachments/assets/4b70444c-88e3-48e9-8b70-b472cde3ffb9)|

<br>

### [프로젝트 상세 페이지]

- 프로젝트 클릭 시 연결되는 상세 페이지로 구현 기능, 트러블 슈팅 등의 다양한 정보를 작성했습니다.
- 상세보기 버튼을 클릭하여 더 자세한 설명과 코드를 볼 수 있도록 링크를 연결하거나 아코디언 기능을 구현했습니다.
- (MO) 캡쳐 이미지는 Swiper 라이브러리를 사용하여 슬라이드를 넘기는 방식으로 구현했습니다.

(PC) 프로젝트 상세 페이지|(MO) 프로젝트 상세 페이지
---|---|
![portfolio-readme-detailpage-pc](https://github.com/user-attachments/assets/4659a9a1-3fa9-4838-9c16-ddc4d219666a)|![portfolio-readme-detailpage-mo](https://github.com/user-attachments/assets/59bc37ec-bbec-4054-aaec-fdc817db4dd4)|

<br>

## 7. 트러블 슈팅
- <a href="https://clever-boot-479.notion.site/Blog-2e797743ec49807395b2eb8582b2b10f?source=copy_link">화면 최하단으로 스크롤해도 마지막 탭이 활성화되지 않는 이슈</a>

- <a href="https://clever-boot-479.notion.site/2e797743ec4980b4a714da7e6c399bcc?source=copy_link">컨텐츠가 짧은 경우 푸터가 위로 올라오는 이슈</a>
