<h1>CSS 레이아웃 : flex box</h1>

## flex box의 등장

플렉스는 **'유연한'**이란 뜻을 가지고 있다. 화면 레이아웃을 유연하게, 자유자재로 배치할 수 있게 해준다. 기존에 사용했던 블록 레벨 요소, 인라인 레벨 요소 방식보다 훨씬 강력하고 편리한 기능이 많다.

즉 다양한 레이아웃을 만들고자 고안된 기법이 **플렉스 박스(flex box)** 이다.


## flex가 필요한 순간??

`flex`는 언제 필요로 할까??? 아래와 같이 `body`안에 `div`로 정사각형 세 개를 만드는 코드가 있다고 가정하고

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <div></div> <!--1-->
    <div id="second"></div> <!--2-->
    <div></div> <!--2-->
  </body>
</html>
```

```css
div {
  width: 200px; <!--3-->
  height: 200px; <!--4-->
  background-color: tomato;
}
#second {
  background-color: seagreen; <!--5-->
}
```

<img src="css.png">

HTML 코드에서 `1`body를 부모로, `2`3가지 div를 그 자식으로 설정하고 CSS파일에는 div 태그에 `3` width,height 길이를 정해주고 `4` 배경색을 넣어줬다. 또한 div 박스 사이의 구별이 쉽도록 가운데 박스에 id 값을 second로 지정해 `5`초록색으로 설정하였다.


