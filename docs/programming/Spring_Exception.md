# Spring Exception 처리

[[toc]]

## 1. Controller 레벨에서 처리
Spring 에서 Controller에서 발생한 예외에 대해서 Common 하게 처리할 수 있는 기능 제공.

@ExceptionHandler 어노테이션을 통해 Controller의 메소드에서 throw 된 Exception 처리 가능

```java
@Controller
public class ExampleController {

    @GetMapping(path="/exception/example")
    public String occurExampleException() {

        throw new ExampleException(); 

    }

    @GetMapping(path="/exception/example2")
    public String occurExampleException2() {

        throw new ExampleException();

    }

    @ExceptionHandler(value=ExampleException.class)
    public String handleExampleException(ExampleException e) {

        log.error(e.getMessage());

        return "/error/404";

    }
}
```
해당 컨트롤러에서 발생한 ExampleException에 관해서는 모두 handleExampleException에서 처리를 해준다.
* Controller 메소드 내의 하위 서비스에서 에러 exceptiond이 발생해도, Controller 메소드 상위까지 예외를 throw 시키게 되면 @ExceptionHandler 어노테이션을 사용하여 Controller 전역적으로 예외처리 가능
* Controller 메소드 내의 하위 서비스에서 Runtime Exception이 발생하면, 서비스를 호출한 최상위 Controller에서 해당 예외를 처리해준다.

Spring MVC 모델에서 예외처리를 미루고 미루면 이런식으로 Controller 레벨에서 예외처리를 Common하게 가능하다.

## 2. Global 레벨에서 처리
여러 Controller에서 동일한 에러처리를 하고싶을 경우엔, 위의 Controller 레벨로 에러 처리시에 중복코드가 많아짐.

이러한 경우를 위해 Spring 에선 전역적으로 @ExceptionHandler를 사용하도록 지원.

* @ControllerAdvice : Exception 처리 후 Error Page등을 통해서 처리가 가능
* @RestControlleAdvice 
    * Rest Api에 대한 Exception 처리 등에 좋다. 
    * @RestControllerAdvice = @ControllerAdvice + @ResponseBody

```java
@ControllerAdvice

public class ExampleControllerAdvisor {

    //모든 Controller에서 일어나는 ExampleException에 대해 전역적으로 예외처리

    @ExceptionHandler(value = ExampleException.class)
    public String handleExampleExceptionForGlobal(ExampleException e) {

        log.error(e.getMessage());

        return "/error/404";

    }

}
```

Controller level > Global level

둘다 설정할 경우 컨트롤러 레벨에서 설정한 Exception 처리가 우선된다.

## 3. HandlerExceptionResolver를 이용한 처리
HandlerExceptionResolver는 Controller의 작업중에 발생한 예외를 어떻게 처리할 지에 대한 전략.

DispatcherServlet이외의 영역에서 발생한 에러는 Servlet Container 내부에서 처리 될 것이다. 만약 error-page라도 잘 정의 했다면은 다행이겠지만, 그렇지 않다면 브라우져 화면에서 404, 500과 같은 에러 메세지를 표현 할 것이다. (Spring boot의 경우 default로 white label page가 에러페이지로 설정 되어있다.)

*HandlerExceptionResolver 인터페이스*
```java
package org.springframework.web.servlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.lang.Nullable;

public interface HandlerExceptionResolver {
    @Nullable
    ModelAndView resolveException(HttpServletRequest var1, HttpServletResponse var2, @Nullable Object var3, Exception var4);

}
```

DispatcherServlet 내에서 예외 발생 시, resolveException 메소드를 구현한 HandlerExceptionResolver들이 실행 계획에 따라 예외를 처리하게 된다. 

DispatcherServlet에 기본적으로 3개의 HandlerExceptionResolver가 등록되어있다.
* ExceptionHandlerExceptionResolver
* ResponseStatusExceptionResolver
* DefaultHandlerExceptionResolver

순으로 Resolver가 실행 된다.

### 3-1 ExceptionHandlerExceptionResolver : deprecated

### 3-2 ResponseStatusExceptionResolver
ResponseStatusExceptionResolver는 예외에 대한 Http 응답을 설정해 줄 수 있다. 

특정 예외가 발생했을 때, 단순 500 에러 대신 더 구체적인 상태값을 전달이 가능하다.

```java
//@ExceptionHandler 어노테이션과 함께 사용할 수 있다.

//구체적인 응답 코드를 줄 뿐 아니라, 간단한 사유도 전달 할 수 있다.

@ResponseStatus(value = HttpStatus.FORBIDDEN, reason = "Permission Denied")
@ExceptionHandler(value=ExampleException.class)
public String handleExampleException(ExampleException e) {
    log.error(e.getMessage());
    return "/error/403";
}
```

실행시 403 에러와 Permission Denied 메세지가 전달된다.

### 3-3 DefaultHandlerExceptionResolver
DispatcherServlet에 디폴트로 등록 된 3가지 HandlerExceptionResolver에서 예외 처리를 하지 못하는경우, 마지막으로 DefaultHandlerException에서 예외처리를 해준다.

### 3-4 SimpleMappingExceptionResolver
SimpleMappingExceptionResolver는 web.xml에 error-page 지정하는 것 과 비슷한 처리를 하게 해준다. 

exception 별로 error-page를 매핑할 수 있는 기능을 제공


참고 : https://jaehun2841.github.io/2018/08/30/2018-08-25-spring-mvc-handle-exception/