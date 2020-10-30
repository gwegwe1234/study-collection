# 개발 관련 이것저것 정리
[[toc]]

## Java 개념 정리
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

## 테스트 

## 배포

## 카프카

## Reactive Programming

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