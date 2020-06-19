function RandomListNode(x){
    this.label = x;
    this.next = null;
    this.random = null;
}
function Clone(pHead) {
  if (!pHead) return null;
  const head = new RandomListNode(pHead.label);

  const hash = new Map();
  hash.set(pHead, head);  

  let cur = head;
  while (pHead) {
    const pRandom = pHead.random;
    pHead = pHead.next;

    if (hash.has(pHead)) {
      cur.next = hash.get(pHead);
    } else {
      if (pHead) {
        const next = new RandomListNode(pHead.label);
        hash.set(pHead, next);
        cur.next = next;
      } else {
        cur.next = null;
      }
    }

    if (hash.has(pRandom)) {
      cur.random = hash.get(pRandom);
    } else {
      if (pRandom) {
        const random = new RandomListNode(pRandom.label);
        hash.set(pRandom, random);
        cur.random = random;
      } else {
        cur.random = null;
      }
    }
    cur = cur.next;
  }
  return head;
}