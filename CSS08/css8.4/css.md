## 가상 선택자와 클래스

선택자는 **'무엇인가를 선택하는 요소'** 이다. `CSS`에서 **선택자**는 스타일링할 특정 요소를
 선택할 때 사용한다. **전체 선택자, 태그 선택자, 클래스 선택자, 아이디 선택자** 외에
선택한 요소가 **특별한 상태**일 때 사용할 수 있는 가상 선택자를 알아보자

## 가상 선택자의 사용

**가상 선택자**를 어디에 사용할 수 있을까? 웹 페이지에서 버튼을 누르면 해당 버튼의 색이나
모양이 변한다. 버튼을 눌러도 아무런 변화가 없다면 버튼이 눌렸는지 안 눌렸는지 알 수 없다.
이와 같이 **상태에 따라 변화**를 주고 싶을 때 **가상 선택자**를 사용한다.

**가상 선택자**(pseudo selectors)는 선택한 요소가 **특별한 상태**여야 만족할 수 있다. 이게 무슨 뜻인지는 두 가지로 분류해 알아보자

- **동적 가상 클래스**
- **구조적 가상 클래스**

## 동적 가상 클래스

**동적 가상 클래스**(dynamic pseudo classes)는 어떤 상태나 조건이 발생할 때,
사용자의 액션에 따라 스타일이 바뀌는 선택자이다.
버튼을 클릭했을 때 색깔이 변하는 것처럼 사용자와 웹 페이지간의 상호작용이 필요할 때
사용한다. 대표적인 동적 가상 클래스는 `active`, `visited`, `disabled`, `hover`, `focus` 이다.

## 액션이 필요해 : active

`active`는 클릭 시 활성화되는 가상 클래스이다. 예를 들어 버튼을 누르면 `active` 가상 클래스가 활성화되어서 선택한 항목에 선언한 CSS 스타일이 적용된다.

```css
<style>
  a:active { /*적용 대상 태그 a와 가상 선택자 active*/
    color : red
  }
</style>
```

`button` 태그를 사용하여 클릭할 때 텍스트 색이 바뀌는 코드를 작성하고, `active` 가상 클래스를 사용해 마우스로 버튼을 누를 때 연두색으로 변경해보자.

```css
<style>
  button:active {
    color: lime;
  }
</style>
<button>클릭버튼</button>
```

클릭 전

<img src="css2.png">



클릭 시

<img src="css1.png">


## 방문 기록을 남기는 : visited

`visited` 가상 클래스는 **사용자가 이미 방문한 링크**를 표시해준다.

이미 `visited` 가상 클래스는 일상에서 많이 보았는데, 검색창에 검색 후 특정 페이지를 들어갔다
나오면 **클릭한 페이지의 텍스트 색깔**이 바뀐다. 이유는 링크를 클릭하거나 방문할 때 `visited`로 표시되기 때문이다.


- 자세한 이유를 알아보았을 때, 웹에서 `visited` 가상 클래스가 자동으로 적용되는 이유는 **브라우저가 사용자의 방문 기록을 저장하고
이를 기반으로 스타일을 적용하기 때문이다.**

- 브라우저는 방문한 링크의 URL을 저장하고, 해당 URL과 동일한 링크가 페이지에 있으면
CSS에서 정의된 `:visited` 스타일을 적용한다. 하지만 보안상의 이유로 `visited` 상태의 요소에는 **생상 및 몇 가지 스타일만 적용 가능**하고,
자바스크립트로 `visited` 여부를 직접 감지하는 것은 제한되어 있다.





방문 전 링크 

<img src="css33.png">


방문 후 링크

<img src="css44.png">





```css
<style>
  a:visited { /*적용 대상 태그 a와 가상 선택자 visited*/
      color: coral;
  }
</style>

<body>
  <a href="https://www.google.com/">Google Website</a>
</body>
```

방문 전

<img src="css5.png">

 방문 후
 
 <img src="css6.png">


## 비활성화 : disabled

`disabled` 가상 클래스는 비활성화된 요소를 나타낸다. 말 그대로 **요소**를 **비활성화** 시킨다.

```css
<style>
  input:disabled { /*적용 대상 태그 input과 가상 선택자 disabled*/
    background: red /*적용하려는 스타일*/
    
  }
</style>
```

활용을 해보자 `input` 태그를 사용하여 입력 폼을 만든 뒤 `disabled`를 사용하여 **폼을 비활성화** 

```css
<style>
  input:disabled {
    background: coral;
  }
</style>

<body>
  <input type="text" placeholder="Name" disabled>
</body>
```

- `input` 태그를 이용하여 텍스트 폼을 작성하였지만 폼을 `disabled` 상태로 바꿔서 입력폼에 아무것도 쓸 수 없다. 

- 보통 `disabled`는 단독으로 쓰이기보단 조건을 추가해 조건에 해당하지 않는 경우 폼에 입력을 할 수 없도록 만드는 용도로 사용된다.


<img src="css7.png">


## 마우스로 상호작용 : hover

`hover` 가상 클래스는 **마우스 커서를 요소에 올려놓았을 때** 선언한 스타일을 실행한다.
 `active`가 클릭할 때 반응하는 거라면 `hover`는 마우스를 올려놓았을 때 반응한다. 
 **마우스의 움직임만으로 동적인 모습**을 표현할 수 있어서 좋다.

 ```css
 <style>
  a:hover {
    color: orange;
  }
 </style>
 ```

 ### 주의점

 `hover` 가상 클래스 특징
  1. 스마트폰 같은 터치스크린에서 작동하지 않거나.
  2. 요소를 터치한 후 잠시 동안만 작용하거나,
  3. 사용자가 터치를 하지 않아도 다른 요소를 터치할 때까지 계속 작동할 수 있다. `hover` 기능을 사용할 때는 유저들이
  사용하는 모든 장치에서 의도한 대로 보이는지 확인해야 한다.


  ```css
  <style>
    span {
      background-color: blue;
    }
    span:hover {
      background-color: gold;
    }
  </style>

  <body>
    <span>마우스를 올려두는 곳</span>
  </body>
  ```

- 마우스 올리기 전 기본 상태

<img src="css8.png">


- 마우스 올린 후

<img src="css9.png">


## 클릭하면 반응하는 focus

`focus`는 `input`으로 만든 폼 등 **집중(focus)을 받은 요소**를 나타낸다. PC에서는 마우스 클릭이나 **tab** 키를 클릭할 때, 스마트폰에서는 탭을 했을 때 발동한다.

```css
<style>
  input:focus {
    color:red;
  }
</style>

```css
<style>
  .red-input:focus {
    background: springgreen;
    color: red;
  }

  .blue-input:focus {
    background: springgreen;
    color: blue;
  }
</style>

<body>
  <input class="red-input" value="클릭하면 빨갛게 변경" />
  <input class="blue-input" value="클릭하면 파랗게 변경" />
</body>
```

클릭했을 때 빨갛게 변경

<img src="css10.png">

클릭했을 때 파랗게 변경

<img src="css11.png">


## 구조적 가상 클래스 

구조적 가상 클래스(structural pseudo classes)는 `CSS`에서 id,class 등의 선택자를 사용하지 않고 요소를 선택할 수 있따.
이렇게 하는 이유는 코드를 효율적으로 작성하기 위함이다. 학교에서 수학 문제를 앞에 나와서 풀 사람을 구할 때 선생님께서 이름을 부를 수도 있지만
번호로 부를 때도 있는 것처럼 태그도 `id`나 `class`같은 이름이 아니라 가상 클래스로 불리는 것이다.

대표적인 구조적 가상 클래스는 `first-child`, `lats-child`, `nth-of-type`, `only-of-type`이다.


## 형제 중 첫 번째 요소 선택하기 : first-child

`first-child`는 형제 요소 중 첫 번째, 즉 맏이 요소를 나타낸다. 형제 요소를 선택하기 때문에 `first-child`로 선택하는 대상은 반드시
부모 요소를 가지고 있어야 한다.


```css
<style>
  p:first-child {
    color: lime;
  }
</style>
```

**주의할 점**

띄어쓰기에 주의해야 한다. CSS에서는 띄어쓰기는 자식 요소를 의미하기 때문에 띄어쓰기 없이 p:first-child를 작성하면
형제 p 태그 중 첫 번째 요소를 가리키지만 띄어쓰기를 사용하여 p :first-child를 쓰면 p 태그의 자식 요소 중 첫 번째 요소를 가리킨다.




## `first-child`는 반드시 부모가 있어야 한다.
- first-child는 부모 안에서 첫 번째 자식 요소를 찾는 선택자이다.
- 만약 부모가 없으면, 비교할 형제 요소도 존재하지 않으므로 first-child 라는 개념이 성립되지 않는다.




`first-child`를 학습할 때 개념에서 혼란이 왔다. 개념 자체는 어렵지 않지만 나는 학습을 할 때 원리와 이해를 바탕으로 하기 때문에 문장을 이해하고 코드를 통해 여러 상황 시나리오들을 통해 학습을 해야 완전한 내 것으로 되었다고 생각하기 때문이다 그래고 2시간 정도 탐구한 것 같다. 


`first-child`의 핵심은 **2가지 조건**이라고 생각한다.  2가지의 개념을 알아야 `first-child`를 이해한거라고 생각한다.


## 첫 번째 개념 : "형제 요소"를 선택한다는 의미

- **"형제 요소"를** 선택한다는 의미는 **같은 부모를 가진 요소**들 중에서 특정한 요소를  선택한다는 뜻이다.
즉, 여러 요소가 하나의 부모 아래에 있을 때 그들 간에는 형제 관계가 성립된다 


```html
<div> 
<p>첫 아들 오준호</p>
<p>둘 째 오치호</p>
<p>막내 오정호</p>
</div>
```

```css
p:first-child {
    color: blue;
}
```

<img src="css14.png">

- **같은 부모를 가진 요소** `div`들 중에서 (특정한=첫 번째) 요소 **오준호**를 선택한다 여러 p요소가 있지만 하나의 부모 아래에 있으므로 **오준호 오치호 오정호**는 `형제 관계`가 성립되고 "형제 요소"를 선택한다는 의미이다.



## 두 번째 개념 : "반드시 부모 요소를 가져야 한다"는 의미

-  **"반드시 부모 요소를 가져야 한다"** 는 의미는 형제 요소들 중 첫 번째 요소를 선택하는 것이기 때문에, 부모 요소가 없으면 형제 관계도 성립되지 않는다. 


- `first-child` 선택자가 작동하기 위해서는 **부모-자식**관계가 있어야 한다는 점이다. 부모 요소 안에서 첫 번째 자식 요소를 선택하는 선택자이기 때문이다.

부모가 없다면 자식이 존재할 수 없고, 따라서 `first-child`가 무엇을 선택할지 **기준점**이 없어진다.

부모가 없으면 형제 관계도 성립되지 않는다. 형제 요소 중 첫 번째 요소를 선택하는 것인데,

 형제 요소란 **같은 부모를 가진 요소**들을 의미한다. 그런데 부모가 없다면?? **형제 요소(오준호,오치호,오정호)**가 존재할 수 없기 때문에 `first-child`가 의미를 갖지 않게 된다.


```html
<p>첫 아들 오준호</p>
<p>둘 째 오치호</p>
```

```css
p:first-child {
    color: blue;
}
```

위 구조에서는 `p`태그들이 부모 요소 없이 독립적으로 존재한다. 하지만 `p:first-child`는 선택자는 동작하지 않는다. 부모 요소가 없기 때문에 자식 요소로 간주 될 수 없고 부모가 없으므로, **"첫 아들 오준호"**를 지정할 수 없고, 비교할 **"형제 요소"**도 존재하지 않는다.


## body는 암묵적인 부모가 된다.

- 브라우저는 모든 HTML 요소를 body 안에서 렌더링하므로, <body>태그가 생략되었더라도 존재하는 것처럼 동작한다.


```html
<body>
  <p>첫 아들 오준호</p>
  <p>둘 째 오치호</p>
</body>
```


<img src="css15.png">

- 여기서 `p`태그들은 `body`의 자식 요소이므로, `first-child`는 `body` 안에서 첫 번째 `p`태그를 선택하게 된다.


한 문장으로 중요하게 강조하자면, `first-child`는 **부모 요소 내에서 첫 번째 자식 요소를** 선택하는 선택자이므로, 부모-자식 관계가 성립하지 않는 독립적인 요소들에서는 `first-child` 선택자가 동작하지 않는다.


# 형제 중 마시막 요소 선택하기 : last-child

`last-child`는 형제 요소 중 마지막, 즉 막내 요소를 나타낸다.

```html
<style>
  p:last-child {
    color: lime;
  }
</style>
```


```html
<style>
  p:last-child {
    color: lime;
    background-color: black;
    padding: 5px;
  }
</style>

<body>
  <div>
    <p>첫 째 오준호가 아닙니다. last-child이다.</p>
    <p>막내 오정호입니다. last-child이다.</p>
  </div>
  <div>
    <p>막내 오정호이지만 last-child가 아님</p>
    <h2>last-child 이지만 p태그가 아님</h2>
  </div>
</body>
```

<img src="css16.png">



# 형제 위치 기반 요소 선택하기 : nth-of-type()

`nth-of-type()`은 형제 그룹 안에서의 위치를 기반으로 형제 요소를 선택한다. 괄호 안을 **1,2,3**과  같이 숫자로 지정할 수도 있지만. **n+1**처럼 규칙으로도 지정할 수 있어 형제 선택에 유용하다.

```html
<style>
 p:nth-of-type(2n+1) {
    color: red;
}
p:nth-of-type(2n) {
    color: blue;
}
p:nth-of-type(1) {
    font-style: italic;
}
</style>

<body>
  <div>
        <div>형제 소개 카운트 첫 div태그 카운트 세는곳 아님</div>
        <p>첫 번째 p태그 첫 자식 오준호</p>
        <P>두 번째 p태그 둘째 오치호</P>
        <div>두 번째 div태그 카운트 세는곳 아님</div>
        <P>세 번째 p태그 막내 오정호</P>
    </div>
</body>
```

<img src="css17.png">

`nth-of-type()`를 이용하여 홀수,짝수, 첫 번째 문단을 지정하였다.
p태그 기준으로 홀수 번째에 위치한 p 태그는 빨간색, 짝수 번째는 파란색으로 바뀐다. 추가로 직접 숫자를 지정한 `nth-of-type(1)`은 `first-child`와 같은 효과를 낸다.


# 자식 중 유일한 요소 선택하기 : only-of-type

`only-of-type`은 자식 요소 중 유일하게 사용된 요소를 가리킨다. **'유일하게'** 즉 딱 한 번만 사용된 요소를 지정한다. -> 부모 요소 안에서 같은 태그 타입이 단 하나만 존재할 때 해당 요소를 선택한다. 즉 형제 요소들 중에서 같은 태그가 나 혼자일 때!

```html
<style>
  p:only-of-type {
    background-color: lime;
  }
  span :only-of-type {
    color: red;
  }
</style>

<body>
    <span>
        <div>div 태그의 첫 번째</div>
        <p>유일한 p태그</p>
        <div>div 태그의 둘 째</div>
        <div>div 태그의 세 번째
            <i>유일한 i태그</i>
            <em>em태그의 첫 번째</em>
            <em>em태그의 두 번째</em>
        </div>
    </span>
</body>
```

코드를 보면 `span` 태그 안에 `div` 태그가 3개 `p`태그가 1개 `i`태그가 1개 `em`태그가 2개 존재한다.

<img src="css18.png">

같은 부모를 가진 자식들 중에서 나랑 같은 태그가 나 하나뿐인지 확인하는거라고 생각하면 편하다
부모가 다르면, 각자 자기 부모 기준으로 형제를 보는것이다.

그래서 코드에서 같은 부모를 가진 `span`태그안에서 `div`태그는 3개라서 해당이 되지 않고, 유일한 `p`태그에 배경색과 글씨색이 적용된거지 그러고 `i`태그도 유일하니까 글씨색이 지정된거지