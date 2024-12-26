CSS 배치 속성과 반응형 웹

반응형 디자인이란, CSS 배치 속성

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

Live Server를 통해 확인하면 아래 사진과 같은 결과물이 나온다.

<img src="css.png">

h1 태그로 제목을 Emotion으로 지정했고, SAD, HAPPY, LOVE 는 span 태그로 줇자꿈을 하지 않고 구문 요소를 의미한다.

코드에서는 Emotion, SAD, HAPPY, LOVE 모두 Enter키를 이용해서 각자 다른 줄에 있는데 왜 사진에서 Emotion은 첫 줄에, SAD, HAPPY, LOVE는 같은 줄에 존재하는 것일까? 라는 의문점이 들어야한다.


<img src="css1.png"> <img src="css3.png"> 

개발자 도구 F12를 이용해서 h1과 span에 마우스 커서를 올리면 위 사진처럼 파란색칸이 보이고, body 본문안에 스타일시트 형식이 display: block 으로 표시된 것을 확인할 수 있다!
이게 무슨 뜻이냐면,

<img src="css5.png"> <img src="css6.png">


Emotion과 SAD에는 어떤 태그를 사용했는지 표시되어있고, 파란색으로 크기가 지정되어있다.

h1 태그는 자동으로 줄바꿈이 되는 이유는, h 태그가 블록 레벨 요소이기 때문이다.
h1 태그와 span 태그 모두 border라는 속성을 사용해서 차이점을 확인해보자

<img src="css4.png">

h1 태그 테두리는 요소 가로 화면 전체를 둘러싸고 있고, 반면 span 태그 테두리는 요소 크기에 맞춰졌다. h1 태그처럼 요소의 가로 줄 전체를 차지하는 요소를 블록 레벨 요소(block-level-element)라 부르고, span 태그와 같이 요소 크기만큼의 너비를 차지하는 요소를 인라인 레벨 요소(inline-level-element)라 부른다. 

## 블록 레벨 요소와 인라인 레벨 요소