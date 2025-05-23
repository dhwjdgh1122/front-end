# CSS 애니메이션

`CSS`에서 애니메이션이란 움직이는(변화하는) 효과를 의미한다. 예를 들어 CSS 애니메이션으로 요소의 스타일(글자 색, 이미지 위치 등)에 변화를 줄 수 있다. `CSS`에서는 전환, 변형, 키프레임으로 애니메이션을 구현한다. 즉, 내가 만드는 웹, 앱 페이지에 움직임을 줄 수 있다.



# 전환

**전환(transition)**  은 시간에 따른 상태를 지정하는 애니메이션이다. 대표적인 장점은 형태의 변형을 부드럽게 만들어준다는 점이다. 즉, 부드럽고 점진적인 애니메이션을 만들려면 움직임을 줄 때 전환을 사용해야 한다.

 예를 들어서 `hover` 상태에서 배경색을 바꿀 때 아무 설정이 없다면 색이 갑자기 바뀐다. 하지만 전환을 사용하면 색이 서서히 바뀌면서 사용자에게 더 좋은 경험을 줄 수 있다.


전환에는 2가지의 필수 속성과 2가지의 선택 속성이 있다.

- `필수 속성`
   - **전환 속성값(transition-property)**
   - **전환 시간(transition-duration)**

- `선택 속성`
  - **전환 타이밍(tran\ition-timing-function)**
  - **전환 지연(transition-delay)**


# 전환 속성값

**전환 속성값(transition-property)** 은 전환될 속성을 지정한다. 전환 속성값에는 `border-color`와 같은 개별 속성 또는 **all(전체 속성)** 이 있다. 전체를 지정하면 모든 속성에, 개별 속성을 지정하면 지정한 개별 속성에 애니메이션이 적용된다.


```css
element {
  transition-property: border-color;
  transition-property: all;
}
```

# 전환 시간

전환 시간(transition-duration)은 전환을 시작해서 끝날 때까지의 시간을 지정한다. 초(s) 또는 밀리초(ms)로 지정한다. 기본값은 0초이고 어떠한 애니메이션도 일어나지 않는다는 의미이다. 따라서 부드러운 애니메이션을 주려면 전환 시간을 반드시 입력해야 한다.

```css
element {
  transition-duration: 0.5s;
}
```


# 전환 타이밍
전환 타이밍(transition-timing-function)은 전환이 이루어지는 시점을 지정한다. 다른 말로는 변화하는 속도의 곡선을 조절한다.

```css
element {
  transition-timing-function: ease-in;
}
```

전환 타이밍 속성값으로는 `linear`, `ease-in`, `ease-out`, `ease-in-out`, `step-start`, `step-end`등이 있는데, 기본값은 `ease`이다.

<img src="css2.png">

자세한 건 구글에 **css animation transition-timing-function**으로 검색하자

# 전환 지연

전환 지연(transition-delay)은 전환을 지연시켜서 전환이 시작되는 시기를 지정한다. 전환은 조건이 충족되는 즉시 진행된다. 하지만 전환 지연을 사용해서 전환을 지연시킬 수 있다. 
쉽게 얘기하면 언제부터 애니메이션을 시작할지 지연 시간을 설정하는것이다.

```css
element {
  transition-delay: 1s;
}
```


# 테스트 코드

마우스를 사각형 위에 올려두면 색이 변하는 코드를 작성해보자

```html
<style>
  div {
    background: blueviolet;
    width: 300px;
    height: 150px;
    transition-timing-function: linear; /* 1 */
    transition-duration: 300ms; /* 2 */
}
div:hover {
    background: green;
}
</style>

<body>
  <div></div>
</body>
```

각 속성을 개별적으로 작성할 수 있지만 더 빠르고 깔끔한 코드를 작성한다면 코드 1번,2번을 합쳐서 
`transition: background 500ms linear;` 로 작성할 수 있다.


<img src="test.gif">


# 변형

**변형(transform)** CSS 속성을 사용하면 외적인 형태의 변형을 줄 수 있다. 또한 전환과 함께 사용하면 부드러운 애니메이션을 만들 수 있는데, **회전(rotate), 기울이기(skew), 크기(scale), 이동(translate)** 등이 있다.

<img src="css1.png">

공간에 대한 이해가 필요한데, 모든 변형은 세 축(X, Y, Z)을 중심으로 이루어진다. 어느 방향으로 움직이는지 파악하면서 변형을 사용해야 한다.

- X축은 왼쪽에서 오른쪽으로 이동/변형되며 값은 오른쪽으로 증가한다.
- Y축은 아래에서 위쪽으로 이동/변형되며 값은 위쪽으로 증가한다.
- Z축은 화면에서 튀어 나와 더 큰 값이 화면에 더 가깝다.

아래는 세 축을 표현한 그림이다.

<img src="css3.png">


# 회전

**회전(rotate)** 은 지정된 각도(단위는 deg)만큼 요소를 시계 방향 or 반시계 방향으로 회전시킨다. 양수는 시계방향으로, 음수는 시계 반대 방향으로 회전한다.


```css
div {
    width: 200px;
    height: 200px;
}

.container {
    border: 5px solid red;
    margin: 50px;
}

.transformed {
    background-color: greenyellow;
    transition: transform 1s ease-in-out;
}

.transformed:hover {
    transform: rotate(45deg);
}
```
```html
<body>
    <div class="container">
        <div class="transformed">마우스 올릴 시 회전</div>
        </div>
</body>
```

<img src="test2.gif">




# rotate에 따른 변화

- **rotate(-45deg);**

<img src="test3.gif" width=200>

- **rotateX(45deg);**

<img src="test4.gif" width=200>


- **rotateY(45deg);**

 <img src="test6.gif" width=200>

- **rotateZ(45deg);**

 <img src="test7.gif" width=200>



 # 기울이기

 **기울이기(skew)** 는 요소의 X축과 Y축을 제공된 값에 따라 기울인다. 각도가 양수이면 양의 방향으로, 음수이면 음의 방향으로 기울인다. X와 Y값을 따로 사용할 수도, 모두 사용하여 기울일 수도 있다.

```css
div {
    width: 200px;
    height: 200px;
}

.container {
    border: 5px solid red;
    margin: 50px;
}

.transformed {
    background-color: greenyellow;
    
    transition: transform 1s ease-in-out;
}

.transformed:hover {
    transform: skew(20deg)
}
```

```html
 <body>
    <div class="container">
        <div class="transformed">마우스 올릴 시 기울이기</div>
        </div>
</body>
```

<img src="test8.gif">


# skew에 따른 변화

- **skewX(40deg);**

<img src="test9.gif">

- **skewY(20deg);**

<img src="test10.gif">

- **skew(20deg, 20deg);**

<img src="test11.gif">

- **skew(-0.06turn, 20deg);**

<img src="test12.gif">


**turn** 단위는 `CSS`에서 각도를 표현하는 단위 중 하나로, 전체 회전(360°)을 1로 표현한다.

- 반복 회전이나 동적 제어때 가독성을 위해 사용하는 듯하다.

```css
transform: rotate(0.25turn); /* 90도 */
transform: skew(-0.06turn, 20deg); /* -21.6도, 20도 */
```


# 크기

**크기(scale)** 는 요소 크기를 늘리거나 줄인다. 1보다 큰 숫자는 요소 크기를 늘리고 1보다 작으면 줄인다. 

- 숫자 2는 요소를 원래 크기보다 2배 크게 만든다.
- 숫자 0.5는 절반 크기로 만든다.

요소의 크기는 X축과 Y축으로 조정할 수 있다. X or Y 값을 지정하지 않으면 기본적으로 두 축에 영향을 준다.

```css
div {
    width: 200px;
    height: 200px;
}

.container {
    border: 5px solid red;
    margin: 50px;
}

.transformed {
    background-color: greenyellow;
    
    transition: transform 1s ease-in-out;
}

/* X축만 2배, Y축은 절반 크기 */
.transformed:hover {
    transform: scale(2, 0.5)
}
```


```html
<body>
    <div class="container">
        <div class="transformed">마우스 올릴 시 크기 변화</div>
        </div>
</body>
```

<img src="test13.gif">

# scale에 따른 변화

- **scaleX(0.5);**

<img src="test14.gif" width=200>

- **scaleY(2);**

<img src="test15.gif" width=200>


- **scaleY(0.5);**

<img src="test16.gif" width=200>

- **scale(0.5, 1.5);**

<img src="test17.gif" width=200>


# 이동

**이동(translate)** 은 요소를 상하좌우로 이동한다. 주어진 값이 양수이면 양의 방향으로, 음수이면 음의 방향으로 이동한다.

```css
div {
    width: 200px;
    height: 200px;
}

.container {
    border: 5px solid red;
    margin: 50px;
}

.transformed {
    background-color: yellowgreen;
    transition: transform 1s ease-in-out;
}
.transformed:hover {
    transform: translate(50px);
}
```

```html
<body>
    <div class="container">
        <div class="transformed">마우스 올릴 시 이동</div>
        </div>
</body>
```

<img src="test18.gif" width=200>

# translate에 따른 변화

- **translateX(50px);**

<img src="test18.gif" width=200>

- **translateY(50px);**

<img src="test19.gif" width=200>

- **translate(15px,-40px);**

<img src="test20.gif" width=200>

- **translate(12px, 50%);**

<img src="test21.gif" width=200>


# 애니메이션을 동시에 적용하기

웹 페이지가 움직이는 효과를 받았다면, 적용해보자

- 여러 효과를 동시에 적용할 수 있다.
- 애니메이션이 지정된 요소만 변경된다. 다른 형제 요소에는 영향을 미치지 않는다.

```css
div {
    width: 200px;
    height: 200px;
}

.container {
    border: 5px solid red;
    margin: 50px;
}

.transformed {
    background-color: yellowgreen;
    transition: transform 1s ease-in-out;
}
.transformed:hover {
    transform: rotate(90deg) scale(0.5) translate(50px);
}
```

```html
<body>
    <div class="container">
        <div class="transformed">애니메이션 동시에 적용</div>
        </div>
</body>
```

<img src="test22.gif" width=200>


# 애니메이션이 미치는 범위

애니메이션은 지정한 요소의 형제 요소에 영향을 미치지 않는다를 확인해보자. 일부 코드를 수정해서 확인해보자

```css
div {
    background-color: yellowgreen;
    height: 200px;
    width: 200px;
    margin: 50px;
    transition: trasnform 1s ease-in-out;
}

div:hover {
    transform: rotate(90deg) scale(2) translateX(50px);
}
```


```html
<body>
    <div></div>
    <p>p태그</p>
</body>
```

<img src="test23.gif">

초록색 배경이 p태그 요소를 가렸다. 애니메이션은 다른 태그에 영향을 미치지 않기 때문이다. 이 개념을 알아야 애니메이션과 함께 다른 요소를 같이 놓았을 때도 요소를 가리지 않고 적절한 간격으로 배치할 수 있다.


# 키프레임

`hover`를 사용한 애니메이션을 했다면, 마우스를 올리지 않고도 애니메이션이 동작할 수는 없을까??

바로 `@keyframes`를 이용하면 애니메이션을 반복적으로 보여줄 수 있다.

키프레임 단위로 애니메이션을 지정하면 애니메이션이 일어나고 있는 중간에 `CSS` 스타일을 변경할 수 있다.

예를 들어 크기가 커졌다 회전하고 다시 작아지는 등 내가 원하는 애니메이션을 자유롭게 만들 수 있다.

키프레임 사용은 스타일의 변화가 발생하는 시기를 백분율(0%~100%)로 지정하거나 `from/to`를 사용하여 지정한다. `0%와 from`은 애니메이션의 시작이고 `100%와 to`는 애니메이션 끝을 의미한다.

# 백분율(0~100%) 지정 방식

```css
@keyframes animationname {keyframes-selector {css-styles;}}
```
- **animationname** : 애니메이션 이름
- **keyframes-selector** : 애니메이션 키프레임의 비율
- **css-styles** : 적용하려는 스타일


```css
div {
    background-color: rgb(146, 146, 146);
    height: 200px;
    width: 200px;
    margin: 50px;
    animation: move 3s infinite;
}

@keyframes move {
    0% {
        transform: rotate(90deg);
    }
    25% {
        transform: rotate(180deg);
    }
    75% {
        transform: rotate(270deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
```

```html
<body>
    <div></div>
    
</body>
```

<img src="test24.gif">


**핵심 포인트**는 `백분율%`은 애니메이션의 시작 위치를 지정하는 것이기 때문에
**0%에서 90도 회전된 상태로 시작한다는 뜻이다.**


# from to 지정 방식

위에 말한 **백분율 방식**과 **from, to** 방식의 차이점은 **특징**에 있다.

- **백분율 방식(%)** : 정교하고 세밀한 제어가 가능하고, 중간 단계를 자유롭게 지정할 수 있다.

- **from, to 방식** : 간결하고 기본적인 애니메이션, 중간 단계 없이 시작과 끝만을 지정한다.

```css
div {
    background-color: rgb(146, 146, 146);
    height: 200px;
    width: 200px;
    margin: 50px;
    animation: move 3s infinite;
}

@keyframes move {
    from {
        transform: rotate(90deg);
    }
    to {
        transform: rotate(360deg);
    }
}
```

<img src="test25.gif">

**270도**씩 회전한다.

