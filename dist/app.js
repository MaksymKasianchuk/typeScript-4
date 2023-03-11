"use strict";
class House {
    constructor(key) {
        this.key = key;
        this.door = false;
        this.tenants = [];
    }
    comeIn(person) {
        if (this.door) {
            this.tenants.push(person);
            this.door = false;
        }
    }
    getTenants() {
        return this.tenants;
    }
}
class MyHouse extends House {
    openDoor(keyTest) {
        const testKeySignature = keyTest.getSignature();
        if (testKeySignature === this.key.getSignature()) {
            this.door = true;
        }
    }
}
class Key {
    constructor() {
        this.signature = Math.floor(Math.random() * 10);
    }
    getSignature() {
        return this.signature;
    }
}
class Person {
    constructor(key, name) {
        this.key = key;
        this.name = name;
    }
    getKey() {
        return this.key;
    }
}
const houseKey = new Key();
const myHouse = new MyHouse(houseKey);
const homieJohn = new Person(houseKey, "John");
const stranger = new Person(new Key(), "scary stranger");
console.log(myHouse.getTenants());
const JohnKey = homieJohn.getKey();
myHouse.openDoor(JohnKey);
myHouse.comeIn(homieJohn);
const strangerKey = stranger.getKey();
myHouse.openDoor(strangerKey);
myHouse.comeIn(stranger);
console.log(myHouse.getTenants());
//# sourceMappingURL=app.js.map