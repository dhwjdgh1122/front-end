<h1>CSS 배치 속성과 반응형 웹</h1>


CSS 배치 속성과, 반응형 디자인에 대해 알아보자. 우선 `h1`태그와 `span`태그로 텍스트를 작성한 코드는 아래와 같다.

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" herf="style.css" />
  </head>
  <body>
    <h1>Emotion</h1>
    <span>SAD</span>
    <span>HAPPY</span>
    <span>LOVE</span>
  </body>
</html>
```

`Live Server`를 통해 확인하면 아래 사진과 같은 결과물이 나온다. `Live Server`는 확장 프로그램으로, 웹 개발자들이 HTML, CSS, JavaScript 등의 파일을 브라우저에서 **실시간으로 미리보기** 할 수 있게 해주는 도구이다.

<img src="css.png">

`h1` 태그로 제목을 **Emotion**으로 지정했고, **SAD, HAPPY, LOVE** 는 `span` 태그로 줄바꿈을 하지 않고 구문 요소를 의미한다.

코드에서는 **Emotion, SAD, HAPPY, LOVE** 모두 Enter키를 이용해서 각자 다른 줄에 있는데 왜 사진에서 **Emotion**은 첫 줄에, **SAD, HAPPY, LOVE**는 같은 줄에 존재하는 것일까? 라는 **의문점**이 들어야한다.


<img src="css1.png"> <img src="css3.png"> 

Emotion과 SAD에는 어떤 태그를 사용했는지 표시되어있고, 파란색으로 크기가 지정되어있다.
개발자 도구(F12)를 이용해서 `h1`과 `span`에 마우스 커서를 올리면 위 사진처럼 파란색칸이 보이고,
body 본문안에 스타일 형식이 `display: block` 으로 표시된 것을 확인할 수 있다.

1. Emotion은 왜 파란색 칸이 길까?
2. SAD는 왜 파란색칸이 글자크기에 맞게끔 되어있을까?


<img src="css5.png"> <img src="css6.png">

이유는 `display: block` 으로 설정되어있기 때문이다.


`h1` 태그는 자동으로 줄바꿈이 되는 이유는, h 태그가 **블록 레벨 요소**이기 때문이다.
`h1` 태그와 `span` 태그 모두 `border`라는 속성을 사용해서 차이점을 확인해보자

<img src="css4.png">

`h1` 태그 테두리는 **요소 가로 화면 전체**를 둘러싸고 있고, 반면 `span` 태그 테두리는 **요소 크기**에 맞춰졌다. `h1` 태그처럼 요소의 가로 줄 전체를 차지하는 요소를 **블록 레벨 요소**(block-level-element)라 부르고, `span` 태그와 같이 요소 크기만큼의 너비를 차지하는 요소를 **인라인 레벨 요소**(inline-level-element)라 부른다. 

## 블록 레벨 요소와 인라인 레벨 요소

모든 HTML 요소에는 `display`라는 속성이 있고, 그 기본값이 **블록** 또는 **인라인**으로 설정되어 있다. **블록 레벨 요소**는 요소가 있는 **가로 줄 전체**를 차지하고, **인라인 레벨 요소**는 **요소가 있는 공간만**을 차지한다. 

그래서 위에서 h 태그는 **블록 레벨 요소**이기 때문에 **파란색이 뜻하는 건 가로 줄 전체**를 의미하고,
`span` 태그는 **인라인 레벨 요소**이기 때문에 **SAD 요소 크기만큼 파란색으로 공간**을 차지한다.

태그마다 이 두 특성은 **변하지 않는 걸까**?? 라는 의문점이 들어야 한다. `display`라는 `CSS` 속성으로 바꿔줄 수 있다. 

<img src=css7.png>