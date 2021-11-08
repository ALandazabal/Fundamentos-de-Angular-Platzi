const username: string | number = 'nicobytes';

const sum = (a:number, b: number) => {
    return a + b;
}
sum(1,3);

class Person{
    private lastname : string;

    constructor( public age: number, lastname: string){
        this.lastname = lastname;
    }


}

const nico = new Person(15, 'Molina');
nico.age;