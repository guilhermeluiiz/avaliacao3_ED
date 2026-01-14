class Set {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  //Adiciona elementos na lista sendo que o valor e o próprio valor e a chave e o valor não pode ser adicionado duas vezes no mesmo conjunto.
  add(element) {
    if (!this.has(element)) {
      this.items[element] = element;
      console.log(`O elemento ${element} foi adicionado na lista.`);
      this.count++;
    } else {
      console.log(`O elemento ${element} já está na lista.`);
    }
  }

  //Remove um elemento pelo elemento e pelo valor.
  delete(element) {
    if (this.has(element)) {
      delete this.items[element];
      console.log(`O elemento ${element} foi excluido com suceso.`);
      this.count--;
    } else {
      console.log(`O elemento não está presente na lista.`);
    }
  }

  //Retorna verdadeiro se o elemento está presente dentro de items
  has(element) {
    if (element in this.items) {
      return true;
    } else {
      return false;
    }
  }

  clear() {
    this.items = [];
    this.count = 0;
  }
  size() {
    return this.count;
  }
  values() {
    return Object.values(this.items);
  }

  union(otherSet) {
    const unionSet = new Set();
    this.values().forEach((value) => unionSet.add(value));
    otherSet.values().forEach((value) => unionSet.add(value));
    console.log(`O conjunto união dos 2 conjuntos são: ${unionSet.values()}`);
    return unionSet;
  }

  intersection(otherSet) {
    const intersectionSet = new Set();
    const values = this.values();
    for (let i = 0; i < values.length; i++) {
      if (otherSet.has(values[i])) {
        intersectionSet.add(values[i]);
      }
    }
    return intersectionSet;
  }

  difference(otherSet) {
    const differenceSet = new Set();
    this.values().forEach((value) => {
      if (!otherSet.has(value)) {
        differenceSet.add(value);
      }
    });
    return differenceSet;
  }

  isSubsetOf(otherSet) {
    if (this.size() > otherSet.size()) { 
      return false;
    }

    let isSubset = true; 
    this.values().every(value => { 
      if (!otherSet.has(value)) { 
        isSubset = false; 
        return false;
      }
      return true; 
    });
    return isSubset;
  }
}
/*
const set = new Set();
set.add(1);
console.log(set.values()); // exibe [1]
console.log(set.has(1)); // exibe true
console.log(set.size()); // exibe 1

set.add(2);
console.log(set.values()); // exibe [1, 2]
console.log(set.has(2)); // true
console.log(set.size()); // 2

set.delete(1);
console.log(set.values()); // exibe [2]

set.delete(2);
console.log(set.values()); // exibe []
*/

//União

/*
const setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);

const setB = new Set();
setB.add(3);
setB.add(4);
setB.add(5);
setB.add(6);

const unionAB = setA.union(setB);
console.log(unionAB.values());
*/

//Intersecção

/*
const setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);

const setB = new Set();
setB.add(2);
setB.add(3);
setB.add(4);
const intersectionAB = setA.intersection(setB);
console.log(intersectionAB.values());
*/

//Diferença

/*
const setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);

const setB = new Set();
setB.add(2);
setB.add(3);
setB.add(4);
const differenceAB = setA.difference(setB);
console.log(differenceAB.values());
*/

//Subconjunto

/*
const setA = new Set();
setA.add(1);
setA.add(2);

const setB = new Set();
setB.add(1);
setB.add(2);
setB.add(3);

const setC = new Set();
setC.add(2);
setC.add(3);
setC.add(4);

console.log(setA.isSubsetOf(setB));
console.log(setA.isSubsetOf(setC));
*/