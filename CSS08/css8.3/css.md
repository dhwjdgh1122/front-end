<h1>CSS 레이아웃 : 위치 지정</h1>

## 자식이 부모가 될 수 있다.

자식이 자라서 부모가 되는 것처럼 CSS에서도 자식이 부모가 될 수 있다.

예를 들어 `div` 태그에 텍스트를 넣으면 `div` 태그가 부모가 된다. 

"자식이 부모가 될 수 있다" 개념은 `HTML` 구조와 `CSS` 스타일링이 결합될 때 발생하는 **컨테이너와 자식 요소의 관계**를 설명할 때 자주 사용된다.


## 부모와 자식의 기본 관계

`HTML` 구조에서는 기본적으로 **부모-자식 관계**가 태그를 중첩하여 생성된다.

```html
<div>
  <span>Hello</span>
</div>
```

- `div` : 부모 요소
- `span` : 자식 요소

부모는 자식의 배치와 스타일링에 영향을 줄 수 있고, 반대로 자식도 부모의 레이아웃 계산에 기여할 수 있다.

## flexbox가 부모-자식 관계를 변화시키는 이유

`CSS`에서 `display: flex;`는 **부모 요소**가 **플렉스 컨테이너**가 되도록 만든다. 이로 인해 자식 요소들은 **플렉스 아이템**으로 동작하며, 부모의 레이아웃 규칙에 따라 정렬 및 배치가 이루어진다.

```html
<DOCTYPE html>
  <html>
    <head>
      <link rel="stylesheet" href="style.css">
    </head>
    <body>
      <div>1</div>
      <div id="second">2</div>
      <div>3</div>
    </body>
  </html>
  ```

```css
body {
  display : flex;
}
div {
  width: 200px;
  height: 200px;
  background-color: tomato;
}
#second {
  background-color: seagreen;
}
```

1. `body`에 `display: flex;`가 적용됨 => `body`가 **플렉스 컨테이너** 역할을 함.
2. `<div>`는 `body`의 **플렉스 아이템**이 된다.
3. 각 `<div>`요소는 기본적으로 가로로 배치되며, 플렉스 컨테이너(`body`)가 배치 규격을 지시한다.


## "자식이 부모가 된다"의 의미

부모 컨테이너(`body`)의 역할을 플렉스 컨테이너가 되어 자식 요소들(`<div>`)의 배치를 정의한다. 그러나 자식 요소들(`<div>`)역시 각각의 콘텐츠를 포함하는 컨테이너로 동작한다.

**이중적인 역할**
- `<div>`는 자식으로서 부모의 배치 규칙을 따른다.
- 동시에 `<div>` 내부의 콘텐츠(텍스트 "1", "2", "3")를 포함하는 **부모 역할**을 한다.

즉, **텍스트가 `<div>`의 자식이 되고, `<div>`는 부모로서 자식 콘텐츠를 감싸는 역할을 한다.**

### 정리하면

`CSS`에서 "자식이 부모가 된다"는 표현은 특정 요소가 **부모의 배치 규칙에 따라 동작하면서도 동시에 자신의 자식 콘텐츠를 관리하는 역할을 수행**한다는 의미이다.

위 코드에서는
- `body`가 `<div>`들의 부모로 작용
- `<div>`가 자신의 텍스트(자식 콘텐츠)를 감싸는 부모로 작용


```css
div {
    display: flex;
    justify-content: center;
    align-items: center;
}
```
을 `CSS`에 추가하고 확인하면,

<img src="css.png">

숫자가 가운데 정렬되어 있는 것을 확인할 수 있다.

## 위치 지정하기

position 속성은 웹 페이지의 요소를 어떻게 배치할지 정한다. 웹 페이지는 수많은 요소들과의 위치 관계로 이루어져있다. 

예를 들어
<img src="css1.png">

구글 로고 아래 검색창이 있고. 그 아래 버튼들이 있다. 이렇게 각 요소를 배치할 때 `position`이 결정적인 역할을 한다. 아래와 같이 사용한다.

```html
<style>
  div {
    positon <!--속성--> : static; <!--값-->
  }
</style>
```

네 가지 위칫값의 특징
- `static`(기본값) : 기본 위치
- `fixed` : 웹 브라우저 화면 기준 고정 위치
- `relative` : 기본 위치(static)기준 상대적인 위치
- `absolute` : `static`이 아닌 가장 가까운 조상 기준 상대적 위치


## static(기본값) : 기본 위치

`static`은 '변화나 움직임이 없는'이라는 뜻으로, `position`값을 따로 지정해주지 않으면 모든 태그는 `static` 상태이다. 즉 `static`이 기본값이다. `div` 태그로 정사각형 2개를 만들고 위칫값을 `static`으로 지정하는 코드는 아래와 같다.

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div></div>
    <div id="second"></div> <!--1-->
  </body>
</html>
```

```css
div {
    width: 200px;
    height: 200px;
    background-color: tomato;
    position: static;  <!--2-->
}

#second {
    background-color: teal;
}
```

`div` 태그 두 개를 만들고 `1` 두 번째 `div` 태그 `id`값으로 `second`로 지정한다. style.css에 `div`태그 크기와 색상을 지정하고 `2` `div` 태그의 `position` 값을 `static`으로 지정한다.

`div`태그의 `position`값으로 `static`을 지정한 결과와 그렇지 않은 결과는 같다.  `static`이 기본값이기 때문이지. 주목할 점은 `position`은 항상 태그 속성으로 존재한다는 것이다.

<img src="css2.png">


## fixed : 웹 브라우저 화면 기준 고정 위치

`fixed`는 '고정된' 이라는 뜻이다. `fixed`가 적용된 요소는 페이지를 스크롤해도 항상 같은 위치에 있는다. 일반적으로 웹 페이지 상단에 있는 **메뉴바** 혹은 **네비게이션바**에 `fixed`를 적용한다.

