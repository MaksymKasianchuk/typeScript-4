abstract class House {
    protected door = false;
    protected tenants:Person[] = [];
    
    constructor( public key:Key ){}

    public comeIn(this:House, person:Person) {
        if(this.door){
            this.tenants.push(person);
            this.door = false;
        }
    }
    public getTenants(this:House){
        return this.tenants;
    }
    public abstract openDoor(keyTest:Key):void
}

class MyHouse extends House {
    public openDoor(keyTest:Key){
        const testKeySignature = keyTest.getSignature();
        if(testKeySignature === this.key.getSignature()){
            this.door = true;
        }
    }
}

class Key {
    private signature:number;
    constructor(){
        this.signature = Math.floor(Math.random() * 10);
    }

    public getSignature(this:Key){
        return this.signature;
    }
}

class Person {
    constructor(private key:Key, public name:string){}
    public getKey(this:Person){
        return this.key;
    }
}

//initialization
const houseKey = new Key();
const myHouse = new MyHouse(houseKey);
const homieJohn = new Person(houseKey, "John");
const stranger = new Person(new Key(), "scary stranger");

//no tenants yet
console.log(myHouse.getTenants());

//person try to come in
const JohnKey = homieJohn.getKey();
myHouse.openDoor(JohnKey);
myHouse.comeIn(homieJohn);

//stranger try to come in
const strangerKey = stranger.getKey();
myHouse.openDoor(strangerKey);
myHouse.comeIn(stranger);

//John is tenant now, scary stranger - no
console.log(myHouse.getTenants());