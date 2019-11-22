# Java Servlet
```
서블릿 서블릿페이지 이런식으로 서블릿이란 단어를 많이 쓰는데
정확히 뭔지 정리해보고 싶은 생각이 들어서 정리해봄
```

- 자바 서블릿은 자바를 사용하여 웹페이지를 동적으로 생성하는 서버측 프로그램, 혹은 그 사양을 말하며, 흔히 '서블릿'이라고 불린다.
- 자바 서블릿은 웹 서버의 성능을 향상하기 위해 사용되는 자바 클래스의 일종
- 자바 서블릿은 자바 EE 사양의 일부분으로, 웹시스템 구현에 쓰이는 기능이라고 보면된다.
- 비슷한 기술로는 펄 등을 이용한 CGI, PHP를 아파치 웹 서버 프로세스에서 동작하게 하는 mod_php, 마이크로소프트사의 IIS에서 동작하는 ASP 등이 있다. 
- CGI는 요청이 있을 때마다 새로운 프로세스가 생성되어 응답하는 데 비해, 자바 서블릿은 외부 요청마다 프로세스보다 가벼운 스레드로써 응답하므로 보다 가볍다. 
또한, 자바 서블릿은 자바로 구현되므로 다양한 플랫폼에서 동작한다.

``` 
출처 : https://ko.wikipedia.org/wiki/%EC%9E%90%EB%B0%94_%EC%84%9C%EB%B8%94%EB%A6%BF
```

- 실제로 톰캣내부 소스를 보면 Servlet을 구현한 추상 클래스 GenericServlet을 상속받아 HttpServlet을 구현했다.
- init / doGet / doPost ... destroy 등을 구현

```java
package javax.servlet.http;

import java.io.IOException;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.io.UnsupportedEncodingException;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.text.MessageFormat;
import java.util.Enumeration;
import java.util.ResourceBundle;

import javax.servlet.DispatcherType;
import javax.servlet.GenericServlet;
import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;

public abstract class HttpServlet extends GenericServlet {

    private static final long serialVersionUID = 1L;

    private static final String METHOD_DELETE = "DELETE";
    private static final String METHOD_HEAD = "HEAD";
    private static final String METHOD_GET = "GET";
    private static final String METHOD_OPTIONS = "OPTIONS";
    private static final String METHOD_POST = "POST";
    private static final String METHOD_PUT = "PUT";
    private static final String METHOD_TRACE = "TRACE";

    private static final String HEADER_IFMODSINCE = "If-Modified-Since";
    private static final String HEADER_LASTMOD = "Last-Modified";

    private static final String LSTRING_FILE =
        "javax.servlet.http.LocalStrings";
    private static final ResourceBundle lStrings =
        ResourceBundle.getBundle(LSTRING_FILE);

    public HttpServlet() {
        // NOOP
    }

    protected void doGet(HttpServletRequest req, HttpServletResponse resp)
        throws ServletException, IOException
    {
        String protocol = req.getProtocol();
        String msg = lStrings.getString("http.method_get_not_supported");
        if (protocol.endsWith("1.1")) {
            resp.sendError(HttpServletResponse.SC_METHOD_NOT_ALLOWED, msg);
        } else {
            resp.sendError(HttpServletResponse.SC_BAD_REQUEST, msg);
        }
    }
    
    ...

    protected void doHead(HttpServletRequest req, HttpServletResponse resp)
        throws ServletException, IOException {

        if (DispatcherType.INCLUDE.equals(req.getDispatcherType())) {
            doGet(req, resp);
        } else {
            NoBodyResponse response = new NoBodyResponse(resp);
            doGet(req, response);
            response.setContentLength();
        }
    }

    protected void doPost(HttpServletRequest req, HttpServletResponse resp)
        throws ServletException, IOException {

        String protocol = req.getProtocol();
        String msg = lStrings.getString("http.method_post_not_supported");
        if (protocol.endsWith("1.1")) {
            resp.sendError(HttpServletResponse.SC_METHOD_NOT_ALLOWED, msg);
        } else {
            resp.sendError(HttpServletResponse.SC_BAD_REQUEST, msg);
        }
    }

    ....
   
}
```

