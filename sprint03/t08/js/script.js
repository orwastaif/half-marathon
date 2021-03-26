import {createLinkedList} from './module.js'


const ll = createLinkedList([100, 1, 2, 3, 100, 4, 5, 100]);
ll.add(10);
ll.remove(100);
ll.remove(100);
ll.remove(100);
console.log(ll.contains(100));
ll.log();
ll.add(888);
ll.add(2);
ll.log();

for (const n of ll) {
    console.log(n);
  }