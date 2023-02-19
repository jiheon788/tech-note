# Trie

<img src='https://user-images.githubusercontent.com/90181028/219942462-182442f7-e2f6-456a-8455-a7adc38ef5fa.png' width='30%' />

- 문자열을 저장하고 효율적으로 탐색하기 위한 트리형태의 자료구조
- 검색어 자동완성, 사전 찾기 등에 응용
- L이 문자열의 길이일 때, 삽입은 O(L)만큼 걸린다.
- 대신 각 정점이 자식에 대한 링크를 전부 가지고 있기에 저장 공간을 더 많이 사용한다.
- 루트는 비어 있다.
- 각 간선은 추가될 문자를 키로 가진다
- 각 정점은 이전 정점의 값 + 간선의 키를 값으로 가진다.
- 해시 테이블과 연결리스트를 이용하여 구현할 수 있다.

## 소스 코드

```javascript
class Node {
  constructor(value = "") {
    this.value = value;
    this.children = new Map();
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(string) {
    let currentNode = this.root;

    for (const char of string) {
      if (!currentNode.children.has(char)) {
        currentNode.children.set(char, new Node(currentNode.value + char));
      }

      currentNode = currentNode.children.get(char);
    }
  }

  has(string) {
    let currentNode = this.root;

    for (const char of string) {
      if (!currentNode.children.has(char)) {
        return false;
      }
      currentNode = currentNode.children.get(char);
    }

    return true;
  }
}

// usage
const trie = new Trie();
trie.insert("bee");
trie.insert("tea");
trie.insert("ted");
trie.insert("ten");
trie.has("bee"); // true
trie.has("can"); //false
```

---

[Back](../README.md)
