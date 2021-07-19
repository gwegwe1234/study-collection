# Interceptor
- HandlerMethod : RequestMapping으로 매핑된 하나의 메소드로 스프링에 의해 HandlerMethod라는 클래스로 바인드 되어 전달되는인자
- getMethod를 하면 실제 Java Reflection의 Method형 객체를 얻을 수 있다
- 해당 handlerMethod를 통해, 특정 메소드나 특정 어노테이션만 찾아서 Interceptor 처리가 가능하다
- getBean, getMethod, getMethodAnnotation..