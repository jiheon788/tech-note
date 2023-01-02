# BFS & DFS

- 데이터는 `선형 구조`(배열, 연결리스트, 스택, 큐) 또는 `비선형 구조`(트리, 그래프)로 이루어져 있다.
- 비선형 구조의 대표적인 탐색 방법인 `BFS`, `DFS`를 사용하면 탐색이 가능
- V : 정점, E : 간선

## BFS (Breadth-First Search)

- BFS(너비 우선 탐색)는 트리 또는 그래프 데이터 구조를 순회하거나 검색하기 위한 알고리즘
- 루트 노드 || 임의 노드에서 시작해 `인접한 노드를 먼저 탐색`하는 방법
- 시작 정점으로부터 가까운 정점을 먼저 방문, 멀리 떨어진 정점은 나중에 방문하는 순회방법이다.
- 깊게 탐색하기 전에 `넓게 탐색`
- `큐`를 사용(해당 노드의 주변부터 탐색해야하기 때문)
- 모든 곳을 탐색하기 보다 `최소비용`이 우선일 때 적합하다.
- 최단 거리를 구하는 문제에서 사용
- 시간 복잡도

  - 인접 행렬 : O(V^2)
  - 인접 리스트 : O(V+E)

![img](https://camo.githubusercontent.com/b8073f26dfdf1644e8a92312fff100341987a8f5/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f352f35642f427265616474682d46697273742d5365617263682d416c676f726974686d2e676966)

### 소스 코드

```javascript
const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "E"],
  D: ["B", "F"],
  E: ["C", "G"],
  F: ["D", "H", "I"],
  G: ["E", "J", "K"],
  H: ["F", "L"],
  I: ["F", "M"],
  J: ["G", "N"],
  K: ["G", "O"],
  L: ["H"],
  M: ["I", "P"],
  N: ["J"],
  O: ["K"],
  P: ["M"],
};

const bfs = (graph, startNode) => {
  const visited = []; // 탐색을 마친 노드들
  const needVisit = []; // 탐색해야할 노드들

  needVisit.push(startNode);

  while (needVisit.length !== 0) {
    const node = needVisit.shift(); // 큐(First In First Out)
    if (!visited.includes(node)) {
      visited.push(node);
      needVisit.push(...graph[node]);
    }
  }
  return visited;
};

console.log(bfs(graph, "A"));
// ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P']
```

## DFS (Depth-First Search)

- DFS(깊이 우선 탐색)는 트리 또는 그래프 데이터 구조를 순회하거나 검색하기 위한 알고리즘
- 루트 노드에서 시작해서 다음 분기로 넘어가기전에 해당 분기를 `완벽하게 탐색`
- 넓게 탐색 하기 전에 `깊게 탐색`
- 예시 - 미로탐색: 한 방향으로 갈 수 있을 때까지 가다 막히면 다시 가장 가까운 갈림길로 와서 끝까지 탐색
- `스택`이나 `재귀함수`를 통해 구현
- `모든 경로를 방문`해야 할 경우 적합하다.
- 경로의 특징이 필요한 문제를 풀 때 DFS를 사용
- 시간 복잡도
  - 인접 행렬 : O(V^2)
  - 인접 리스트 : O(V+E)

![img](https://camo.githubusercontent.com/aaad9e39961daf34d967c616edeb50abf3bf1235/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f372f37662f44657074682d46697273742d5365617263682e676966)

### 소스 코드

```javascript
const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "E"],
  D: ["B", "F"],
  E: ["C", "G"],
  F: ["D", "H", "I"],
  G: ["E", "J", "K"],
  H: ["F", "L"],
  I: ["F", "M"],
  J: ["G", "N"],
  K: ["G", "O"],
  L: ["H"],
  M: ["I", "P"],
  N: ["J"],
  O: ["K"],
  P: ["M"],
};

const dfs = (graph, startNode) => {
  const visited = []; // 탐색 완료 데이터
  const needVisit = []; // 탐색 예정 데이터

  needVisit.push(startNode);

  while (needVisit.length !== 0) {
    const node = needVisit.pop(); // 스택(Last In First Out)
    if (!visited.includes(node)) {
      visited.push(node);
      //reverse() 제거 시 그림의 4,3,2,1 순서로 탐색
      needVisit.push(...graph[node].reverse());
    }
  }
  return visited;
};

console.log(dfs(graph, "A"));
// ['A', 'B', 'D', 'F', 'H', 'L', 'I', 'M', 'P', 'C', 'E', 'G', 'J', 'N', 'K', 'O']
```

#### Reference

- [https://github.com/WooVictory/Ready-For-Tech-Interview](https://github.com/WooVictory/Ready-For-Tech-Interview/blob/master/Algorithm/BFS%20%26%20DFS.md)
- [https://choonse.com/2022/02/16/945/](https://choonse.com/2022/02/16/945/)

<div align="right">- CreatedAt 2023.01.02</div>

---

[Back](../README.md)
