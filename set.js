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
    console.log(`Existe ${this.count} elmentos no conjunto.`);
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

const setA = new Set();
const setB = new Set();
setA.add(1);
setA.add(2);
setA.add(3);

setB.add(2);
setB.add(1);
setB.add(3);
setB.add(8);

console.log(setA.isSubsetOf(setB))