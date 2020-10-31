# 개발 관련 이것저것 정리
[[toc]]

## Java 개념 정리
### 자바 컴파일
- 자바 파일을 클래스 파일로 변경해줌

### Immutable Class
- 불변 객체란 재할당은 가능하지만, 한번 할당하면 내부 데이터를 변경할 수 없는 객체
- 에를들어 String 클래스는 불변 객체이다.
- 객체로 보자면 아래는 불변이 아닌 클래스

```java
class MutablePerson {
   public int age;
   public int name;
    
   public MutablePerson(int age, int name) {
    	this.age = age;
        this.name = name;
    }
}
```

- 위의 코드는 생성자를 통해 갑의 변경이 가능하다.

```java
class ImmutablePerson {
    private final int age;
    private final int name;
    
    public ImmutablePerson(int age, int name) {
    	this.age = age;
        this.name = name;
    }
}
```

- 요롷게 final 로 설정하면 불변 객체가 된다.
- 장점 : 객체에 대한 신뢰도가 높아지고, 믿고 쓸 수 있다. 생성자나 세터의 방어 복사가 필요 없다. 멀티스레드에서 동기화 처리 없이 객체 공유가 가능
- 단점 : 객체가 가지는 값마다 새로운 객체가 필요해, 메모리 누수가 심할 수 있다.

```java
public class Animal {
    
    private final Age age;

    public Animal(final Age age) {
        this.age = age;
    }
    
    public Age getAge() {
    	return age;
    }
}

class Age {
    
    private int value;

    public Age(final int value) {
        this.value = value;
    }

    public void setValue(final int value) {
        this.value = value;
    }
    
    public int getValue() {
    	return value;
    }
}
```

- 추가로, Animal 클래스는 멤버변수가 final로 선언되어 있지만, 실제 Age 참조 타입은 불변객체가 아니므로, ANimal도 불변 객체가 아니다.
- 참조하고 있는 클래스도 불변 객체여야 상위 객체도 불변 객체가 된다.

### String vs String Builder vs String Buffer
#### String
- String 클래스는 불변(immutable) 클래스이다.

```java
public final class String
    implements java.io.Serializable, Comparable<String>, CharSequence {
    /** The value is used for character storage. **/
    private final char value[];
    ...
}
```

- 실제 스트링을 들어가보면, final char로 선언 되어 있다.
- 그로 인해 한번 할당한 문자열을 변경하는 것은 불가능하고, 더하기 연산을 해서 붙일 경우 새로운 객체가 생성되어 재할당 된다.
- 반복적으로 문자열을 이어 붙이면 Heap 영역에 참조를 잃은 문자열 객체가 계속해서 쌓이게 된다.
- 이런 String의 성능 이슈 개선을 위해 JDK 1.5 이상에서는 컴파일 단계에서 내부적으로 StringBuilder로 변경되어 동작한다.

#### String Builder
- String Builder는 가변적이다.

```java
abstract class AbstractStringBuilder implements Appendable, CharSequence {
    /** The value is used for character storage **/
    char[] value;
    ...
}
```

- append() 메소드를 호출하면, char[] 배열의 길이를 늘리고 같은 객체에 문자열을 더한다.

#### String Buffer
- String Buffer는 synchronized가 적용되어 멀티 스레드 환경에서 Thread Safe하게 동작한다.
- 즉 동기화를 지원하는 String Builder라고 생각하면 된다.

### 자바 직렬화 & 역직렬화
- 자바 직렬화란 자바 시스템 내부에서 사용되는 객체 또는 데이터를 외부의 자바 시스템에서도 사용할 수 있도록 바이트 형태로 데이터 변환하는 기술. 
- 역직렬화는 반대로 바이트로 변환된 데이터를 자바 객체로 바꾸는 것.
- 자바 직렬화 조건 : java.io.Serializable 인터페이스를 상속받은 객체는 직렬화 할 수 있는 기본 조건을 가진다.
- 자바 직렬화는 방법은 java.io.ObjectOutputStream 객체를 이용
- 자바 역직렬화 조건 : 직렬화 대상이 된 객체의 클래스가 클래스 패스에 존재해야 하며 import 되어 있어야 한다.
- 자바 직렬화 대상 객체는 동일한 serialVersionUID를 가지고 있어야 한다. (필수로 적어줄 필요는 없다.)
- 즉 직렬화는 자바내 객체를 json으로 보내는거고 역직렬화는 json 스트링으로 온 데이터를 자바 객체로 바꾸는 이런 방식

### 자료구조
- List - 순서가 있는 자료구조로 배열과 비슷한 구조. 내용이 순서대로 있는 arrayList와 주소값으로 연결되어 있는 linkedlist가 있다.
- Stack - 마지막에 넣은 데이터를 가장 먼저 꺼낼 수 있는 자료구조(LIFO).
- Queue: 데이터를 선입선출(FIFO)하는 자료구조.
- Map: 순서가 없는 자료구조. 키와 밸류가 한 세트가 되어 키를 통해 값을 찾을 수 있다.
- set: 순서가 없는 자료구조이며 중복을 허용하지 않는다.
- tree : 탐색에 용이한 구조. 이진트리 같은게 있다.

### 접근 제어자
접근제어자의 종류는 public, protected, default, private 가 있다.

- public은 모든 클래스에서 접근이 가능함을 의미한다.
- protected는 같은 패키지 + 상속 클래스까지 사용 가능.
- default 는 같은 패키지 안에서만 사용 가능.
- private 클래스 내에서만 접근이 가능하다. 접근하려면 객체 생성 이후 set 메소드로 접근 가능하다.

### 자바 데이터 타입
- 기본형 (primitive type) : stack 메모리 영역에 실제 값을 저장하는 데이터 타입이며, boolean, char, int 등 8가지 종류가 있다.
- 참조형 (Non-primitive) : 기본형 외의 모든 타입. String, 클래스, 인터페이스, 어레이 등 모든 변수는 참조형 변수. 새로 만들때는 heap 메모리에 저장공간을 확보하며 항상 new로 정의. 실제 값은 heap 영역에 저장되고, stack 에는 메모리 주소만 저장. (참고로 자바는 변수를 복사하는 경우가 없고 무조건 참조)

### 인터페이스
- 객체의 사용법을 정리해놓은 틀
- 인터페이스는 여러 클래스의 사용 방법이 같음을 보장
- 그렇기 때문에 자신을 implement 하는 클래스들에게 메서드 구현을 강제
- 예를들어 List 인터페이스 를 implement 하는 클래스 들인 ArrayList, LinkedList는 공통적으로 add(), clear(), indexOf(), get() 등의 메서드를 가지고 있다.

### 자바 8 이후 추가된 기술들
- 스트림 처리 가능 (java.util.stream 추가) -> filter, map, reduce 같은 기능들 추가로 가독성이 좋아지고, 병렬처리도 쉬워졌다. (추가로 내부 로직들을 숨겨서 사용자가 내부 로직을 알 필요가 없게 된 부분들.. 이 있다. 동적파라미터화 인가?)
- 동적 파라미터화로 메소드에 코드 전달 가능 -> predicate 같은거로 개발에 좀 (기능 자체를 변수로 넘겨줄 수 있다. 즉 매번 코드를 재작성이 가능. 람다사용)
- 람다(익명함수)가 추가됨. (가독성이 좋아짐)
- 메소드 참조 사용 가능 (역시 가독성 좋음)
- 디폴트 메소드 : 인터페이스에 코드 추가 가능
- Optional 추가로 null safe하게 처리 가능
- date time 추가 (LocalDate, LocalTime, Instant, Duration, Period)
- httpClient 추가 (자바 11)
- var 키워드도 추가..

### 객체
- 자바에서 객체란 원시타입을 제외한 모든 변수들은 참조타입 (객체) 이다.
- null이 들어갈 수 있다.
- 객체는 값이 들어가는게 아닌, 값이 담겨있는 메모리의 주소값을 갖고 있다.
- 즉 다른 변수에 객체를 넣으면 그냥 통쨰로 바껴버림
- 객체를 final로 선언하면, 객체의 주소값은 불변이 되지만, 내부 값은 final로 설정되어 있지 않으면 값 변경이 가능하다.

### 제네릭 타입
- 매개변수화된 타입
- 대표적으로 List 같은 컬렉션에서 사용된다.

### 자바의 메모리 영역
- 메소드 영역 : static 변수, 전역변수, 코드에서 사용되는 class 정보 등이 올라감.
- 스택 : 지역변수, 함수(메소드), 
- 힙 : new 연산자를 통한 동작할당된 객체들이 저장되며, 가비지 컬렉션에 의해 메모리가 관리되어 진다.

### Call By Ref vs Call By Value
- 간단하게 자바 원시타입 vs 참조타입
- 원시타입은 직접 값을 변경하는 거고, 참조타입은 주소를 참조하는것, 즉 참조값은 메소드로 넘겨받아 값을 바꾸면, 기존 호출한곳의 값도 바뀐다 (주소값 통째로 옮겨지는거)

## 스프링
### 인터셉터 vs 필터
- Filter와 Interceptor는 실행되는 시점이 다르다. 
- Filter는 Web Application에 등록을 하고, Interceptor는 Spring의 Context에 등록을 한다.
- 컨트롤러에 들어가기 전에 작업을 처리하기 위해 사용할 수 있다는 공통점이 있지만 호출되는 시점이 다르다.

```java
1. Filter는 Dispatcher servlet의 앞단에서 정보를 처리하고, Interceptor는 Dispatcher servlet에서 Handler(Controller)로 가기 전에 정보를 처리한다.
2. 또한 필터는 J2EE 표준 스펙에 정의 되어 있는 기능이며, 인터셉터의 경우는 Spring Framework에서 자체적으로 제공하는 기능이라고 한다.
```

### 스프링 MVC의 처리 과정
```java
1. DispatcherServlet : 어플리케이션으로 들어오는 모든 Request를 받는 관문이다. 
         Request를 실제로 처리할 Controller 에게 전달하고 그 결과값을 받아서 View에게 전달하여 적절한 응답등 생성할 수 있도록 흐름을 제어한다.
2. HandlerMapping : Request URL 각각을 어떤 Controller 가 실제로 처리할 것인지 찾아주는 역할을 한다.
3. Controller : Request를 직접 처리한 후 그 결과를 다시 DispatcherServlet 에게 돌려준다.
4. ModelAndView : Controller가 처리한 결과와 그 결과를 보여줄 View에 관한 정보를 담고 있는 객체이다.
5. ViewResolver : View 관련 정보를 갖고 실제 View를 찾아주는 역할을 한다.
6. View : Controller가 처리한 결과값을 보여줄 View를 생성한다.
```

### 스프링 오토 컨피규레이션
- configuration으로 빈들 정의해주고, spring.factories 파일에 autoconfiguration 설정으로 넣어준다.
- 그리고 maven으로 해당 라이브러리 추가해주면, 오토 configuration을 스프링 부트 enableAutoConfiguration에서 설정해서 진행한다.

### Spring AOP
- 횡단 관심사
- 공통적인 로그처리 같은거 할 때 좋다.
- 에러처리도 좋다.

## OOP
### OOP의 4가지 특징
- 추상화 : 구체적인 사물들의 공통적인 특징을 파악해서 이를 하나의 개념으로 다루는 것
- 캡슐화 : 정보 은닉으로 필요가 없는 정부는 외부에서 적ㅂ근하지 못하도록 제한한느 것
- 일반화 관계 : 여러 개체들이 가진 공통된 특성을 부각시켜 하나의 개념이나 법칙으로 성립시키는 과정
- 다형성 : 서로 다른 클래스의 객체가 같은 메세지를 받았을 때 각자의 방식으로 동작하는 능력

### OOP의 5대 원칙 (SOLID)
- S: 단일 책임 원칙(SRP, Single Responsibility Principle)
    - 객체는 단 하나의 책임만 가져야 한다.
- O: 개방-폐쇄 원칙(OCP, Open Closed Principle)
    - 기존의 코드를 변경하지 않으면서 기능을 추가할 수 있도록 설계가 되어야 한다.
- L: 리스코프 치환 원칙(LSP, Liskov Substitution Principle)
    - 일반화 관계에 대한 이야기며, 자식 클래스는 최소한 자신의 부모 클래스에서 가능한 행위는 수행할 수 있어야 한다.
- I: 의존 역전 원칙(DIP, Dependency Inversion Principle)
    - 의존 관계를 맺을 때 변화하기 쉬운 것 또는 자주 변화하는 것보다는 변화하기 어려운 것, 거의 변화가 없는 것에 의존하라는 것이다.
- D: 인터페이스 분리 원칙(ISP, Interface Segregation Principle)
    - 인터페이스를 클라이언트에 특화되도록 분리시키라는 설계 원칙이다.

## CS
### 컴파일 언어 vs 스크립트 언어
- 컴파일 언어 : c나 c++, go같은애들은 빌드(컴파일)를 하게되면 실행파일 (binary파일)이 나온다. 즉 빌드되는 환경에 따라서 실행파일이 될수도, 안될수도있다. 
예를들어 맥환경에서 go를 빌드하면, 같은 맥환경에서는 실행이 되지만, 리눅스에서는 실행이안된다.
- 스크립트 언어 : 스크립트 언어는 빌드시 특정 vm위에서 돌게되서 environment safe 하다. 즉 어느환경에서 돌리건 상관없이 다 vm위에서 돌아가서 맥에서 돌리건, 리눅스에서 돌리건 상관없다. (python, ruby)
- 예외 케이스 : 자바같은 경우는 약간 짬뽕된 언어로, compile을 하긴 하는데, 컴파일 실행 시 바이너리 파일이 나오는게 아니라 .class파일(byte code)이 나온다. 그 .class파일을 jvm환경에서 돌려 역시 아무대서나 돌려도 된다.
- 도커 적용 : 이걸 docker 환경에서 적용해 보면, dockerfile 생성시  environment safe 한 언어들은 로컬환경에서 빌드하고, 빌드한 파일을 docker image로 옮길 수 있지만, go나 c같은 언어들은 도커파일 내부에서 빌드를 진행해야한다.
여기에 추가적으로 특이한 케이스가 node 인데, node는 그자체는 precompile언어이지만, 라이브러리중에 c++로 구현된게 있어서 도커파일 내부에서 빌드를 보통 진행한다. (npm)

### 개발 시 가장 중요한 점
1. 테스트코드 작성
2. 가독성 좋은 코드
3. 재활용 가능한 코드
4. 중복이 없는 코드
5. 분석이 쉬운 & 변경이 쉬운 코드

## 애자일 & 스크럼
- 폭포수 vs 애자일 : 많은 요구사항이 나오는 상황에서 충분한 요구사항이 완벽하게 나오지 않는 이상 폭포수는 어렵다. TDD처럼 애자일에 맞는 방법을 사용하면, 요구사항이 변경돼도 계속 테스트코드를 수정하면서 메인 로직을 조금씩 수정하면 시간이 단축. 이걸 실행하려면 객체지향적인 수정이 쉬운 코드를 작성해야 한다.
- 폭포수 방식은 위에서 명령하달이 내려오므로, 수동적으로 일하게 된다. (커뮤니 케이션 부족)
## 테스트 

## 배포

## 카프카
### 카프카 구성
- 파티션, 레플리카, 오프셋 등등..
- 리더가 있고, 죽으면 새로운게 리더가 되는등..
- 서로간에 데이터를 참고하고 있다.

### 카프카를 사용할때 생길 수 있는 문제
- 중복 처리를 해 주어야 한다.
- 순서 보장이 어렵다 (할 순 있음. 키줘서)

### 카프카를 사용했을 때 장점
- 두 개의 시스템 사이에서 비동기로 데이터를 주고받는 창구가 된다.
- 만약 api의 경우, 한쪽이 죽으면 다른쪽에선 에러가 나지만, 카프카를 사용하면 보내는쪽은 카프카로 보내고, 받는쪽이 죽어도 아무런 문제가 안됨.
- 이게 여러개의 시스템이 얽혀있으면, 하나만 죽어도 여러 시스템이 죽을 수 있다.
- 이런 경우 가운데에 카프카를 통해 데이터를 전달하고 받고 하면, 깔끔한 구조가 된다
- 결국 메세지 브로커

### 주키퍼
- 간단하게는 카프카 설정을 해주는 거라고 보면 될듯

### 카프카 스트림즈
- 카프카 데이터를 정제해서 쓸 수 있는 라이브러리
- 컨슘해서 바로 처리하는거보다 더 다양한 기능들을 제공해주고, DB화 시킬 수도 있고..
- KTable 처럼 테이블같은 데이터 형태로도 나타내 줄 수 있다.
- KTable은 중복 없이, 단순 데이터 distinct가 가능하다.
- 예를들어 KStream은 총 9번의 레코드를 출력하지만, KTable은 이전 레코드를 덮어써서 3건의 레코드만 출력한다.
- 윈도 작업을 통해, 시간별로 묶는거도 가능
- 즉 데이터 정제를 엄청나게 세세하게 해줄 수 있다.

## msa
- 카프카 스트림즈를 통한 msa를 해봄
- 이벤트 드리븐 방식
- 데이터 저장소 역할을 카프카 스트림즈로 한다.
- functional endpoint 사용
- CUD는 카프카로 데이터를 프로듀스 해준다.
- 이벤트 동작은, 특정 이벤트가 왔을때, 그 이벤트를 캐치(컨슘) 해서 새로운 이벤트를 만들어 준다.
- Read는 카프카 스트림즈로 데이터를 정제한다. 여러 팟이 뜨는데 각각의 팟에 다른 데이터들이 있고, 없는 데이터는 락스 디비 fetch 해줘서 데이터를 가져온다.
- 만약 로컬이 죽으면, 카프카 스트림즈를 통해 데이터를 다시 갖고와 락스 디비에 세팅해준다.

## Reactive Programming
### 리액티브
- “리액티브”라는 단어는 I/O 이벤트에 반응하는 네트워크 컴포넌트, 마우스 이벤트에 반응하는 UI 컨트롤러 등 어떤 변화에 반응하는 것을 아우르는 프로그래밍 모델을 뜻한다. 

### 함수형 프로그래밍이란?
- 함수형 프로그래밍이란 어떤 문제를 해결하기 위한 과정이나 공식에 치중하는게 아닌 이미 만들어진 함수를 활용하는 방법

### 스프링 웹플럭스
- Mono, Flux 개념 -> Produce 개념인듯.. 이거로 리턴하면 스프링은 Observing 하면서 보고 처리를 진행
- 다수 리퀘스트를 처리할 때 좋다
- 만약 내부에 하나라도 블록킹 방식이 있으면 효율성이 떨어진다
- 네티를 많이쓴다.

## 디자인 패턴
### 빌더 패턴
- 필드의 수가 많을때 사용하는 패턴
- 오류 체크도 가능

### 스트레티지 패턴
- 지정된 알고리즘의 세부 구현을 변경할 필요 없이 쉽게 교환할 수 있게 해주는 디자인 패턴
- DI라고 보면될듯

### 템플릿 메소드 패턴
- 공통 기능은 상위 클래스에서 구현하고, 나머지는 다 하위 클래스에 위임하는 패턴
- JDBC Template 같은거

### 데코레이터 패턴
- 기 구현된 구조에서 새로운 기능을 추가할 때, 중복적으로 추가하기 싫은 경우에 쓰기 좋음

### 플라이웨이트 패턴
- Integer.valueOf 같은거.
- 캐싱해서 쓰는거다

### 싱글톤
- 하나의 인스턴스만 생성하는 것을 보장하는 패턴