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

