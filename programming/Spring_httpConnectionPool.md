# HttpConnectionPool

<pre>
private final String HTTP_CONNECTION_MANAGER_KEY = “Specific-SIte-Server-HttpClient";
</pre>
<pre>
private final int DEFAULT_MAX_TOTAL_CONNECTIONS = 100;
</pre>
- 컨넥션 풀에 최대로 생성이 가능한 갯수
<pre>
private final int DEFAULT_MAX_CONNECTIONS_PER_ROUTE = 5;
</pre>
- 하나의 라우트당 붙을수있는 최대 커넥션 갯수
<pre>
private final int MAX_CONNECTION_PER_ROUTE_TO_SITE = 30;
</pre>
- SITE 로 붙는라우트당 최대 컨넥션 갯수
<pre>
private final int DEFAULT_HTTP_CONNECTION_TIMEOUT = 3 * 1000;
</pre>
- 컨넥션(tcp통신같은거.. )연결하는데 최대 타임아웃 . 내부망의 경우엔 보통 1초면 되고 , 외부망 통신이 좀더 오래걸려서 3초정도로 잡느다.
<pre>
private final int DEFAULT_HTTP_READ_TIMEOUT = 5 * 1000;
</pre>
- 이건 리스폰스가 오는데 걸리는 타임아웃. 이것도 상황따라 시간조정 필요


idle 설정 : 두 연결중 한곳이 끊기면 다른곳도끊고 다시해주는 그런설정..인거같았는데..기억이 안나..
