(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{660:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"spring-exception-처리"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#spring-exception-처리"}},[t._v("#")]),t._v(" Spring Exception 처리")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#_1-controller-레벨에서-처리"}},[t._v("1. Controller 레벨에서 처리")])]),s("li",[s("a",{attrs:{href:"#_2-global-레벨에서-처리"}},[t._v("2. Global 레벨에서 처리")])]),s("li",[s("a",{attrs:{href:"#_3-handlerexceptionresolver를-이용한-처리"}},[t._v("3. HandlerExceptionResolver를 이용한 처리")]),s("ul",[s("li",[s("a",{attrs:{href:"#_3-1-exceptionhandlerexceptionresolver-deprecated"}},[t._v("3-1 ExceptionHandlerExceptionResolver : deprecated")])]),s("li",[s("a",{attrs:{href:"#_3-2-responsestatusexceptionresolver"}},[t._v("3-2 ResponseStatusExceptionResolver")])]),s("li",[s("a",{attrs:{href:"#_3-3-defaulthandlerexceptionresolver"}},[t._v("3-3 DefaultHandlerExceptionResolver")])]),s("li",[s("a",{attrs:{href:"#_3-4-simplemappingexceptionresolver"}},[t._v("3-4 SimpleMappingExceptionResolver")])])])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"_1-controller-레벨에서-처리"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-controller-레벨에서-처리"}},[t._v("#")]),t._v(" 1. Controller 레벨에서 처리")]),t._v(" "),s("p",[t._v("Spring 에서 Controller에서 발생한 예외에 대해서 Common 하게 처리할 수 있는 기능 제공.")]),t._v(" "),s("p",[t._v("@ExceptionHandler 어노테이션을 통해 Controller의 메소드에서 throw 된 Exception 처리 가능")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Controller")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ExampleController")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@GetMapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/exception/example"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("occurExampleException")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ExampleException")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@GetMapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/exception/example2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("occurExampleException2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ExampleException")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ExceptionHandler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ExampleException")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("handleExampleException")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ExampleException")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n        log"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getMessage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/error/404"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("해당 컨트롤러에서 발생한 ExampleException에 관해서는 모두 handleExampleException에서 처리를 해준다.")]),t._v(" "),s("ul",[s("li",[t._v("Controller 메소드 내의 하위 서비스에서 에러 exceptiond이 발생해도, Controller 메소드 상위까지 예외를 throw 시키게 되면 @ExceptionHandler 어노테이션을 사용하여 Controller 전역적으로 예외처리 가능")]),t._v(" "),s("li",[t._v("Controller 메소드 내의 하위 서비스에서 Runtime Exception이 발생하면, 서비스를 호출한 최상위 Controller에서 해당 예외를 처리해준다.")])]),t._v(" "),s("p",[t._v("Spring MVC 모델에서 예외처리를 미루고 미루면 이런식으로 Controller 레벨에서 예외처리를 Common하게 가능하다.")]),t._v(" "),s("h2",{attrs:{id:"_2-global-레벨에서-처리"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-global-레벨에서-처리"}},[t._v("#")]),t._v(" 2. Global 레벨에서 처리")]),t._v(" "),s("p",[t._v("여러 Controller에서 동일한 에러처리를 하고싶을 경우엔, 위의 Controller 레벨로 에러 처리시에 중복코드가 많아짐.")]),t._v(" "),s("p",[t._v("이러한 경우를 위해 Spring 에선 전역적으로 @ExceptionHandler를 사용하도록 지원.")]),t._v(" "),s("ul",[s("li",[t._v("@ControllerAdvice : Exception 처리 후 Error Page등을 통해서 처리가 가능")]),t._v(" "),s("li",[t._v("@RestControlleAdvice\n"),s("ul",[s("li",[t._v("Rest Api에 대한 Exception 처리 등에 좋다.")]),t._v(" "),s("li",[t._v("@RestControllerAdvice = @ControllerAdvice + @ResponseBody")])])])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ControllerAdvice")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ExampleControllerAdvisor")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//모든 Controller에서 일어나는 ExampleException에 대해 전역적으로 예외처리")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ExceptionHandler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ExampleException")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("handleExampleExceptionForGlobal")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ExampleException")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n        log"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getMessage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/error/404"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Controller level > Global level")]),t._v(" "),s("p",[t._v("둘다 설정할 경우 컨트롤러 레벨에서 설정한 Exception 처리가 우선된다.")]),t._v(" "),s("h2",{attrs:{id:"_3-handlerexceptionresolver를-이용한-처리"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-handlerexceptionresolver를-이용한-처리"}},[t._v("#")]),t._v(" 3. HandlerExceptionResolver를 이용한 처리")]),t._v(" "),s("p",[t._v("HandlerExceptionResolver는 Controller의 작업중에 발생한 예외를 어떻게 처리할 지에 대한 전략.")]),t._v(" "),s("p",[t._v("DispatcherServlet이외의 영역에서 발생한 에러는 Servlet Container 내부에서 처리 될 것이다. 만약 error-page라도 잘 정의 했다면은 다행이겠지만, 그렇지 않다면 브라우져 화면에서 404, 500과 같은 에러 메세지를 표현 할 것이다. (Spring boot의 경우 default로 white label page가 에러페이지로 설정 되어있다.)")]),t._v(" "),s("p",[s("em",[t._v("HandlerExceptionResolver 인터페이스")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("web"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("servlet")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("javax"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("servlet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("http")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpServletRequest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("javax"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("servlet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("http")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpServletResponse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lang")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Nullable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HandlerExceptionResolver")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Nullable")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ModelAndView")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolveException")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpServletRequest")]),t._v(" var1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpServletResponse")]),t._v(" var2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Nullable")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" var3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" var4"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("DispatcherServlet 내에서 예외 발생 시, resolveException 메소드를 구현한 HandlerExceptionResolver들이 실행 계획에 따라 예외를 처리하게 된다.")]),t._v(" "),s("p",[t._v("DispatcherServlet에 기본적으로 3개의 HandlerExceptionResolver가 등록되어있다.")]),t._v(" "),s("ul",[s("li",[t._v("ExceptionHandlerExceptionResolver")]),t._v(" "),s("li",[t._v("ResponseStatusExceptionResolver")]),t._v(" "),s("li",[t._v("DefaultHandlerExceptionResolver")])]),t._v(" "),s("p",[t._v("순으로 Resolver가 실행 된다.")]),t._v(" "),s("h3",{attrs:{id:"_3-1-exceptionhandlerexceptionresolver-deprecated"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-exceptionhandlerexceptionresolver-deprecated"}},[t._v("#")]),t._v(" 3-1 ExceptionHandlerExceptionResolver : deprecated")]),t._v(" "),s("h3",{attrs:{id:"_3-2-responsestatusexceptionresolver"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-responsestatusexceptionresolver"}},[t._v("#")]),t._v(" 3-2 ResponseStatusExceptionResolver")]),t._v(" "),s("p",[t._v("ResponseStatusExceptionResolver는 예외에 대한 Http 응답을 설정해 줄 수 있다.")]),t._v(" "),s("p",[t._v("특정 예외가 발생했을 때, 단순 500 에러 대신 더 구체적인 상태값을 전달이 가능하다.")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//@ExceptionHandler 어노테이션과 함께 사용할 수 있다.")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//구체적인 응답 코드를 줄 뿐 아니라, 간단한 사유도 전달 할 수 있다.")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ResponseStatus")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpStatus")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("FORBIDDEN"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reason "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Permission Denied"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ExceptionHandler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ExampleException")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("handleExampleException")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ExampleException")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    log"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getMessage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/error/403"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("실행시 403 에러와 Permission Denied 메세지가 전달된다.")]),t._v(" "),s("h3",{attrs:{id:"_3-3-defaulthandlerexceptionresolver"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-defaulthandlerexceptionresolver"}},[t._v("#")]),t._v(" 3-3 DefaultHandlerExceptionResolver")]),t._v(" "),s("p",[t._v("DispatcherServlet에 디폴트로 등록 된 3가지 HandlerExceptionResolver에서 예외 처리를 하지 못하는경우, 마지막으로 DefaultHandlerException에서 예외처리를 해준다.")]),t._v(" "),s("h3",{attrs:{id:"_3-4-simplemappingexceptionresolver"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-simplemappingexceptionresolver"}},[t._v("#")]),t._v(" 3-4 SimpleMappingExceptionResolver")]),t._v(" "),s("p",[t._v("SimpleMappingExceptionResolver는 web.xml에 error-page 지정하는 것 과 비슷한 처리를 하게 해준다.")]),t._v(" "),s("p",[t._v("exception 별로 error-page를 매핑할 수 있는 기능을 제공")]),t._v(" "),s("p",[t._v("참고 : https://jaehun2841.github.io/2018/08/30/2018-08-25-spring-mvc-handle-exception/")])])}),[],!1,null,null,null);a.default=e.exports}}]);