# Spring ErrorPageFilter

별거 아니었는데 삽질을 좀 해서 정리해둠.

###  Bean 등록
```java
@Configuration
public class ErrorPageConfig {
    ErrorPage error401Page = new ErrorPage(HttpStatus.UNAUTHORIZED, "/error_401");
    ErrorPage error404Page = new ErrorPage(HttpStatus.FORBIDDEN, "/error_404");
    ErrorPage error500Page = new ErrorPage(HttpStatus.INTERNAL_SERVER_ERROR, "/error_500");
    ErrorPage errorGlobalPage = new ErrorPage("/error_500");

    @Bean
    public ErrorPageFilter errorPageFilter() {
        return new ErrorPageFilter();
    }

    @Bean
    public FilterRegistrationBean springBootErrorFilter(ErrorPageFilter filter) {
        filter.addErrorPages(error401Page, error404Page, error500Page, errorGlobalPage);
        FilterRegistrationBean filterRegistrationBean = new FilterRegistrationBean();
        filterRegistrationBean.setFilter(filter);
        filterRegistrationBean.setEnabled(true);
        filterRegistrationBean.setOrder(-1_000);
        return filterRegistrationBean;
    }
}
```

- 명시적 설정으로 ErrorPage를 빈으로 등록시켜준다.
- 위에처럼 설정하면 스프링에다가 난 ErrorPageFilter를 사용할 건데, 그 설정은 아래처럼 할거야, 라고 알려준다.

### Filter 확인
```java
@Override
public void addErrorPages(ErrorPage... errorPages) {
    for (ErrorPage errorPage : errorPages) {
	    if (errorPage.isGlobal()) {
		    this.global = errorPage.getPath();
	    }
	    else if (errorPage.getStatus() != null) {
		    this.statuses.put(errorPage.getStatus().value(), errorPage.getPath());
	    }
	    else {
		    this.exceptions.put(errorPage.getException(), errorPage.getPath());
	    }
    }	
}
```

- 이런식으로 에러페이지와 redirect 될 url도 등록해준다.
- 이후에 특정 에러 (401, 404 등)이 발생하면, 필터에서 handleErrorStatus쪽을 타게되고, 거기서 responseStatus 확인해서 위에서 등록해준 redirect url로 포워딩을 해준다.

```java
private void handleErrorStatus(HttpServletRequest request,
		HttpServletResponse response, int status, String message)
				throws ServletException, IOException {
	if (response.isCommitted()) {
		handleCommittedResponse(request, null);
		return;
	}
	String errorPath = getErrorPath(this.statuses, status);
        // 위에서 등록해준 에러 상태값에 매칭되는 redirect url을 찾아준다.
	if (errorPath == null) {
		response.sendError(status, message);
		return;
	}
	response.setStatus(status);
	setErrorAttributes(request, status, message);
	request.getRequestDispatcher(errorPath).forward(request, response);
    // 찾은 url로 redirect
}
```

### Controller 생성

- 여기까지 해주면 이제 저 redirect될 url에 맞는 requestMapping controller만 생성해주면 에러페이지로 매칭이 끝!

```java
@Value("${melon.errorpages.error_401:errors/error_401}")
private String errorPath401;

@RequestMapping(
    value = {"/error_401"},
    produces = "text/html"
)
public ModelAndView error401HtmlPage(HttpServletRequest request, HttpServletResponse response) {
    response.setStatus(getStatus(request).value());
    return new ModelAndView(errorPath401);
}
```

- 요런식으로 위에 등록된 url에 맞춰서 컨트롤러를 만들어주면 에러페이지를 잘 찾아가게 된다.
