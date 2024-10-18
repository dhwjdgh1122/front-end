### 태그로 웹 페이지 만들기

`태그`를 표시하는 방법은 총 두가지이다.

첫 번째는 시작 태그와 종료 태그가 모두 있는 형태이다. 태그와 태그 사이에 요소가 놓이게 된다.

```html
<태그명> 요소 <태그명>
```
두 번째는 닫는 태그가 없는 형태이다. 이를 자체 `닫기 태그` self closing tag 라고 부른다. img, input, link 등이 있다.

```html
<태그명  요소 > 
```

### 대표적인 태그
- `h` : 제목 태그
- `br`, `p`, `div`, `span` : 순서대로 줄바꿈(br), 문단 지정(p), 영역 지정(div), 범위 지정(span)
- `link` : 현재 문서와 외부 소스를 연결해주는 태그
- `img` : 이미지를 나타내는 태그
- `form` : 폼(입력 양식)을 만드는 태그
- `button` : 버튼을 만드는 태그
- `ol`, `ul`, `li` : 리스트를 만드는 태그

### h 태그
h 태그는 heading의 첫 자를 따서 만들었다. 'heading'은 `제목`을 의미한다. 따라서 h 태그는 HTML의 제목을 나타낸다. h 태그가 중요한 이유는 `검색 엔진`이 h 태그에 기반하여 결과물을 보여주기 때문이다. 따라서 검색되고 싶은 키워드가 있다면 h 태그에 넣으면 좋다.

```html
<h1>heading 1</h1>
<h2>heading 2</h2>
<h3>heading 3</h3>
<h4>heading 4</h4>
<h5>heading 5</h5>
<h6>heading 6</h6>
```
결과는 사진과 같다.

<img src=html-tag.png>

h 태그는 h1 ~ h6 까지 있는데, 특징은 다음과 같다.
- 별도의 줄바꿈 없이 자동으로 줄이 바뀐다.
숫자가 커질수록 글자 크기자 작아짐 (반비례)

주의할 점
- HTML 한 페이지에서 h1 태그는 한 번만 사용하기
- h 태그는 제목을 나타태는 코드이므로 문단 처음에 배치하기
- 검색 엔진에 사용되는 태그이므로 검색어를 고려하기
- h1~h6 순서대로 사용하기(권장 사항)

### br, p 태그

```html
<P>
  Hi My Name is JungHo<br />
  front end developer<br />
  26 years old<br />
  ESFJ<br />
</P>
<p>
  Hi My Name is JungHo2<br />
  front end developer2<br />
  26 years old2<br />
  ESFJ2
</p>
```
<img src=html-p-tag.png>

실행 결과 p 태그를 기준으로 문단이 나뉘었다 마치 `enter`를 두 번 친 것(br 태그를 두 번 사용) 한 것과 같은 결과를 보여준다.

### div, span 태그

```html
text1<div>text2</div>text3
```
<img src=html-divtag.png>

```html
text1<span>text2</span>text3
```
<img src=html-spantag.png>




`div`와 `span` 태그는 앞서 본 `br`, `p` 태그와 별 차이가 없어 보이지만 그렇지 않다. `div`태그는 줄을 바꾼다. `span` 태그는 줄바꿈이 없다. 주로 `p`태그는 문단 형태를 쓸 때 사용하고 `span` 태그는 단어 등 문장의 형태로 보기 어려운 텍스트에 사용한다.

 이 태그의 줄바꿈 요소 등은 스타일링을 도와주는 CSS를 사용해 바꿀 수 있다. 하지만 각 태그마다 가지고 있는 속성을 올바르게 사용하면 내 코드가 제목인지, 단어인지, 문장인지 등을 분명하게 표현할 수 있다.

 ### link 태그

`link` 태그는 현재 파일이 다른 파일과 연결되어 있는 관계 정보를 표현하는데 사용한다. 예를 들어 HTML 구조를 만들고 그 구조를 시각적으로 보기 좋게 디자인할 때 CSS 라는 언어를 사용하는데 CSS는 외부 파일로 만들어 HTML에 연결해줄 수 있다. 이때 `link` 태그를 사용한다. 즉 `link` 태그는 CSS나 PNG 파일 등과 현재 HTML 문서와의 관계를 정의하는 데 사용한다.

`link` 태그의 기본 구조이다.

```html
<link rel = "속성" href ="파일 경로">
```

- link : <link 태그를 시작
- rel : relations를 나타낸다. 대상 파일의 속성을 알려준다.
- href : hyper-references를 나타낸다. 연결 시 참조할 파일 위치를 알려준다.

예를 들어 CSS 파일을 연결하는 코드는 아래와 같다.

```html
<link rel = "stylesheet" href="style.css">
```

rel="stylesheet" 는 stylesheet, 즉 CSS 속성을 가진 파일과 연결(관계) 한다는 의미이다. href="style.css"는 stlye.css 파일을 링크한다. 현재 파일에서 외부에 있는 자원인 style.css 파일을 스타일시트 관계로 연결시켜 사용한다는 뜻이다.

### a 태그

비슷한 태그로 a 태그가 있다. a 태그는 href 속성을 사용해 링크로 이동할 수 있다.

```html
<a href ="https://www.naver.com/">NAVER</a>
```
<img src=html-a-tag.png>

### img 태그
img는 image의 약자로 HTML 문서에 이미지를 삽입하는 태그이다. 주요 속성으로 src, alt, width, height를 제공한다. 기본 형식은 아래와 같다.

```html
<img src="경로"  alt="설명"    width="폭"   height="높이">
```
- src : 이미지 경로
- alt : alternative(대체하다)의 약자로, 이미지를 설명하는 문구
- width : 이미지 가로 크기
- height : 이미지 세로 크기


**alt 속성은 적지 않아도 실행은 되지만 적어주는 게 좋다. src에 지정한 이미지를 제대로 읽어오지 못할 때 alt 속성에 적은 문구가 보이게 된다.**

`alt`는 시각장애인을 위한 스크린리더를 지원한다. 스크린리더란 화면을 읽어주는 프로그램으로 스크린리더가 화면의 글을 읽을 때 `alt`값을 참조한다. 따라서 `img`태그뿐만 아니라 다른 태그에서도 `alt` 속성이 있다면 써주는 것이 좋다.