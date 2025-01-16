<h1>CSS 레이아웃 : 위치 지정</h1>

## 자식이 부모가 될 수 있다.

자식이 자라서 부모가 되는 것처럼 CSS에서도 자식이 부모가 될 수 있다.

예를 들어 `div` 태그에 텍스트를 넣으면 `div` 태그가 부모가 된다. 코드를 통해 설명하자면,

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

"자식이 부모가 될 수 있다" 개념은 `HTML` 구조와 `CSS` 스타일링이 결합될 때 발생하는 **컨테이너와 자식 요소의 관계**를 설명할 때 자주 사용된다.

위에서 작성한 코드에서 핵심적인 요소는 `display: flex`인데 자세한 이유는 아래에서 설명한다.

## 1. 부모와 자식의 기본 관계

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

