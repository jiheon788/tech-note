# Graph

그래프는 정점과 정점 사이를 연결하는 간선으로 이루어진 비선형 자료구조 이다. 정점 집합과 간선 집합으로 표현할 수 있다.

- 정점은 여러 개의 간선을 가질 수 있다.
- 크게 방향 그래프와 무방향 그래프로 나눌 수 있다.
- 간선은 가중치를 가질 수 있다.
- 사이클이 발생할 수 있다

## 간성의 방향성에 따른 분류

- 무방향 그래프: 간선으로 이어진 정점끼리는 양방향으로 이동이 가능, (A, B)와 (B, A)는 같은 간선
- 방향 그래프: 간선에 방향성이 존재, <A, B>와 <B, A>는 다른 간선

## 그래프의 연결 상태에 따른 분류

- 연결 그래프: 모든 정점이 서로 이동 가능한 상태
- 비연결 그래프: 특정 정점쌍 사이에 간선이 존재하지 않는 그래프
- 완전 그래프: 연결그래프를 넘어 모든 정점끼리 연결된 상태

## 구현방법

![image](https://user-images.githubusercontent.com/90181028/217747334-f5ef3b9f-9113-4f26-a8e4-a0d7262316d8.png)

- 인접행렬, 인접리스트로 표현 가능

### 인접 행렬

![image](https://user-images.githubusercontent.com/90181028/217747381-a98461cc-3e25-42c3-8b43-893b8ea2d6f0.png)

```javascript
const graph = Array.from(Array(5), () => Array(5).fill(false));

graph[0][1] = true; // 0 -> 1
graph[0][3] = true; // 0 -> 3
graph[1][2] = true; // 1 -> 2
graph[2][0] = true; // 2 -> 0
graph[2][4] = true; // 2 -> 4
graph[3][2] = true; // 3 -> 2
graph[4][0] = true; // 4 -> 0
```

### 인접 리스트

## ![image](https://user-images.githubusercontent.com/90181028/217748082-56589cd1-527a-4923-a59d-afdb7783c875.png)

```javascript
const graph = Array.from(Array(5), () => []);

graph[0].push(1);
graph[0].push(3);
graph[1].push(2);
graph[2].push(0);
graph[2].push(4);
graph[3].push(2);
graph[4].push(0);
```

---

[Back](../README.md)
