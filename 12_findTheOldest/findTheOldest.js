const findTheOldest = function(persons) {
    persons.forEach( (person) => {
        if (person.yearOfDeath === undefined) {
            person.yearOfDeath = new Date().getFullYear()
        }
    })
    let oldestPerson = persons[0]
    persons.forEach((person) => {
        if((person.yearOfDeath - person.yearOfBirth) > (oldestPerson.yearOfDeath - oldestPerson.yearOfBirth)) oldestPerson = person
    })
    return oldestPerson
};

// Do not edit below this line
module.exports = findTheOldest;
