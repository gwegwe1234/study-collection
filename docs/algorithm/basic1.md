# 알고리즘 기초 1

[[toc]]

## 알고리즘 시작

### 시간 복잡도
- Big O - 가장 오래걸리는 케이스에 대한 계산
- 시간 복잡도는 소스를 보고 계산할 수도 있고, 소스를 작성하기 전에 먼저 계산해 볼 수 있다.
- 실제 돌리는거보다 계산한 시간복잡도가 적은 경우에만 코드를 작성한다
- 시간 = 대충 5억에 1초라고 보면 된다
- 시간 복잡도에 대한건 단순 알고리즘 풀때만이 아니라, 웹사이트 만들거나 이런 경우에도 당연히 고려해야 할 부분.

### 시간 복잡도 계산
- Big O Notation에서 상수는 버린다.
- 두 가지 항이 있을 때, 변수가 같으면 큰 것만 빼고 다 버림
- 변수가 다른 두 항은 걍 냅둔다.

### 사용한 메모리
- 보통 많은 공간을 사용하는건 배열
- 배열이 사용한 공간: 배열의 크기 X 자료형의 크기
- 보통 1억에 380메가 (대략) 
- 문제에선 공간은 크게 신경 안써도 되지만, 메모리 제한이 있는 문제는 고려가 필요
- 불필요한 공간이 없다면, 대부분 메모리 제한은 알아서 지켜진다.

### 입출력
- Java : Scanner, System.out
- 입력이 많으면 BufferedReader 사용
- 출력이 많을 경우 BufferedWriter 사용
- 또는 출력이 많은 경우 StringBuilder로 한 문자열로 만들어 출력을 한 번만


## 자료구조

### 스택
- 한쪽 끝에서만 자료를 넣고 뺄 수 있는 자료구조
- 넣는거 push, 빼는건 pop
- [구현 소스](https://github.com/gwegwe1234/AlgorithmStudy/blob/master/CodePlusAlgo/src/StackMain.java)

#### 스택의 구현
- 일차원 배열 하나로 구현할 수 있다.

```java
int stack[10000];
int size = 0;

void push(int data) {
    stack[size] = data;
    size += 1;
}

int pop() {
    stack[size-1] = 0;
    size -= 1;
}

...
```

- Stack = Last in First Out

#### 단어 뒤집기
- 문장의 단어를 모두 뒤집는 문제
- Stack을 써줄 경우 제일 좋다
- BigO = O(N) - 하나의 통 문자 일 때, 스택에 죄다 넣는 시간인 N이 걸린다.
- [구현 소스](https://github.com/gwegwe1234/AlgorithmStudy/blob/master/CodePlusAlgo/src/WordReverseMain.java)

#### 괄호
- () / (()) / (())() 이런게 올바른거
- 모든 괄호를 다찾으면 O(N*N) 
- 스택을 이용하면 좋다.
- 스택에는 여는 괄호만 넣는다. (정답의 후보를 담음)
- ( 가 나오면 스택에 넣고, ) 가 나오면 스택에서 하나 빼서 ( 인지 확인한다.
- 또는 하나를 뺄 수 있는지 확인한다.
- [구현 소스](https://github.com/gwegwe1234/AlgorithmStudy/blob/master/CodePlusAlgo/src/ParenthesisMain.java)

#### 스택 수열
- 1~N 까지의 수를 오름차순으로 넣고 빼면서 하나의 수열을 만들 수 있는가?
- 임의의 수열 A가 있을 때 스택을 이용해 이 수열을 만들수 있는지 확인
- 예를 들어 4,3,6,8,7,5,2,1 이면, ++++--++-++-----로 가능
- [구현 소스](https://github.com/gwegwe1234/AlgorithmStudy/blob/master/CodePlusAlgo/src/StackListMain.java)

### 큐
- First In First Out
- 한쪽 끝에서만 자료를넣고 다른 한쪽 끝에서만 뺄 수 있는 자료구조
- `BFS`에서 많이 쓰임
- 1차원 배열로 구현 가능

```java
int[] queue = new int[10000];
int begin = 0;
int end = 0;

void push(int data) {
    queue[end] = data;
    end += 1;
}

int pop() {
    queue[begin] = 0;
    begin += 1;
}

boolean empty() {
    if (begin == end) {
        return true
    } else {
        return false;
    }
}

int size() {
    return end-begin;
}
```

#### 조세퍼스 문제
- 1번부터 N번까지 N명의 사람이 원을 이루면서 앉아 있고, 양의 정수 M이 주어진다.
- 순서대로 M번째 사람을 제거한다.
- 남은 사람들중에 M번째 또 제거
- 모두 제거 될 때 까지
- 제거되는 순서를 조세퍼스 순열이라고 한다.

### 덱(Deque)
- 양 끝에서만 자료를 넣고 뺄 수 있는 자료구조
- Double-ended queue의 약자
- 큐도 되고 스택도 되고..
- BFS에서 볼 수 있다

## 수학 1

### 나머지 연산
- modular arithmetic
- 컴퓨터의 정수는 저장할 수 있는 범위가 저장되어 있기 때문에, 답을 M으로 나눈 나머지를 출력하라는 문제가 많다.
- (A+B) mod M = ((A mod M) + (B mod M)) mod M => 곱셈, 뺄셈도 적용됨
- 뺄셈은 (A % M - B % M + M) % M

### 최대 공약수
- GCD
- 공통된 약수중 가장 큰 정수
- 제일 쉬운 방버븐 2부터 min(A,B) 까지 계속 나눠본다

```java
int g = 1;
for (int i = 2; i <= min(A,B) i++) {
    if (A % i == 0 && B % i == 0) {
        g = i;
    }
}
```

- 더 좋은 방법은 유클리드 호제법
- r = a%b
- GCD(a,b) = GCD(b,r) 
- 재귀로 짜면 된다.

```java
int gcd(int a, int b) {
    if (b == 0) {
        return a;
    } else {
        return gcd(b, a%b);
    }
}
```

- 재귀가 아닌 경우

```java
int gcd(int a, int b) {
    while (b != 0) {
        int r = a % b;
        a = b;
        b = r;
    }

    return a;
}
```

### 최소 공배수
- LCM
- A X B = GCD X LCM
- LCM = A X B / GCD

### 소수
- 소수 : 약수가 1과 자기 자신 밖에 없는 수
```java
1. 어떤 수 N이 소수인지 아닌지 판별하는 방법
2. N보다 작거나 같은 모든 자연수 중에서 소수를 찾아내는 방법
```

#### 1번 구현
- 그냥 다 찾는다.
- O(N)
```java
boolean isPrime(int n) {
    if (n < 2) {
        return false;
    }

    for (int i = 2; i < n; i++) {
        if (n % i == 0) {
            return false;
        }
    }

    return true;
}
```

- 다른 좋은 방법은 N이 소수가 되려면, 2보다 크거나 같고, N/2보다 작거나 같은 자연수로 나누어 떨어지면 안된다.
- O(N/2)

```java
boolean isPrime(int n) {
    if (n < 2) {
        return false;
    }

    for (int i = 2; i <= n/2; i++) {
        if (n % i == 0) {
            return false;
        }
    }

    return true;
}
```

- 제일 좋은 경우엔 N이 소수가 되려면, 2보다 크거나 같고, 루트 N보다 작거나 같은 자연수로 나누어 떨어지면 안된다.
- O(root N)

```java
boolean isPrime(int n) {
    if (n < 2) {
        return false;
    }

    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0) {
            return false;
        }
    }

    return true;
}
```

#### 2번 구현
- NrootN 이라 시간이 오래걸린다.
- `에라토스테네스의 체`를 사용
- 지워지지 않은 수중에서 가장 작은 수는 2
- 2는 소수이고 2의 배수는 모두 지운다.
- 지워지지 않은 수 중 가장 작은 수인 3의 배수를 모두 지운다.
- 그다음 5의배수 ...
- 이렇게 다 구하고 남은 것들이 소수이다.

```java
int prime[100]; // 소수 저장
int pn=0; // 소수의 개수
boolean check[101]; // 지워졌으면 true;
int n = 100; // 100까지 소수
for (int i = 2; i <= n; i++) {
    if(check[i] == false) { // 지워지지 않았으면
        prime[pn++] = i;
        for (int j = i * i; j <= n; j+=i) {
            check[j] = true;
        }
    }
}
```

### 골드바흐의 추측
- 2보다 큰 모든 짝수는 두 소수의 합으로 표현 가능하다.
- 위의 문장에 3을 더하면
- 5보다 큰 모든 홀수는 세 소수의 합으로 표현 가능하다. 로 바뀐다.
- 증명 안됨
- 10의 18승까진 증명이 됨
- 백만 이하의 짝수에 대해 골드 바흐의 추측을 검증하는 문제
- N = a + b;
- check[N-b] == false

### 팩토리얼
- N!은 매우크다
- 팩토리얼 0의 개수 구하는 문제
- 그냥 다 곱해서 구하려고 하면 너무 오래걸리거나, 정수형 크기보다 커서 구하기 어렵다
- 10! = 36288`00` => 0이 2개
- 10!이 0이 2개인 이유는 10!을 소인수분해 해서 2와 5의배수 개수를 구하면 된다.
- 근데 2보다 5가 더 적으니까 5의 개수만 구하면 된다.
- N! 0의 개수 = [N/5] + [N/5*5] + [N/5*5*5]... 

### 조합 0의 개수
- nCm 
- n! / (n-m)! * m!
- 이건 2, 5 둘다 구해서 둘 중 작은거로 해야된다.