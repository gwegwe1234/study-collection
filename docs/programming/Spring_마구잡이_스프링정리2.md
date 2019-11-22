# 마구잡이 Spring 공부 정리2

## Spring boot
```
참고 : springboottutorial.com
Spring boot 가 나온이유 : 한개의 큰 덩어리 프로젝트보다 작은 여러개의(micro service) 프로젝트를 만드는 추세이다.

스프링 부트는 내 어플리케이션안에 embeded server를 같이 설치해서, tomcat 같은거 설치할 필요가 없다.

스프링 부트는 dev, prd 같은 환경설정을 기본적으로 지원한다.
```

```
Rest Controller
-> Response 왔다갔다

auto configuration 
componentscan => @RestController 를 찾아 빈으로 만들어서 스프링 프레임워크에서 관리한다.

스프링은 어플리케이션 컨텍스트로 돈다. -> (SpringApplication은 ApplicationContext 자료형이다.)
```

```
Spring MVC vs Spring Boot

Spring : IOC가 핵심. di 를 통해 loosely coupled 를 사용. 중복코드 없애는대 좋다(jdbc같은거)

Spring boot : 잡다한 mvc 설정을 자동으로 해준다.(너 귀찮으니까 내가 다해줄께 이런느낌)
```

## Spring MVC

Request - 요청 (이것저것 들어있음, UA , …)

Response - 응답. 서버에서 던지는거. 

```
http://localhost:8080/spring-mvc/login

spring-mvc

DispatcherServlet -> Front Controller
    => DispatcherServlet은 web.xml에 설정 부트는 따로 설정 안한다. @configuration 찾아서 viewresolver 찾는듯

/login 로 들어오면, -> Login Controller (Handler) -> /WEB-INF/views/login.jsp 로 가야한다. -> ViewResolver등록

Hello World

loin.jsp -> view

순서대로 정리하면, localhost로 request가 들어오면, spring-mvc에서 dispatcherServlet으로 들어가서 @Controller(LoginController) 찾아서 return된거에 view resolver 등록된거 잘찾아간다.
```

```
post로 값을 전달받으려면, @RequestParam사용
jsp로 값을 전달하려면? -> model사용한다.
model은 controller랑 view사이에서 값전달
```