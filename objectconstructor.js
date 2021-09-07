/* The constructor method is a special method of a class for creating and initializing an object of that class.
A constructor enables you to provide any custom initialization that must be done before any other methods can be called on an instantiated object.*/

class School {
    constructor(name, location, principal){
        this.name = name,
        this.location = location,
        this.principal = principal
    }
}
const primary1 = new School ( 'taibah', 'entebbe', 'Ms Annet Nakigozi')
const secondary1 = new School ( 'SMASK', 'entebbe', 'Mr Lawrence Mulindwa')

console.log(primary1);
console.log(secondary1);
