//.filter() method


var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var classRoom = {
    grade: '3rd Grade',
    students: [
        { name: 'John', score: 100 },
        { name: 'Jane', score: 90 },
        { name: 'Jack', score: 60 },
        { name: 'Jill', score: 85 },
    ]
}

var startStudents = classRoom.students
    .filter(function(student) {
        return student.score >= 80;
    })
    .map(function(value) {
        value.score += 5;
        return value;
    })
    .reduce(function(accumulator, value, index, arr) {
        const total = accumulator.sum + value.score;
        return  {
            sum: total,
            array: arr,
        };
    }, {sum: 0, arr: []});

var studentAverage = startStudents.sum / startStudents.array.length;

console.log(startStudents, studentAverage);

var helloStudents = classRoom.students.map(function(student, i, array) {
    console.log(array);
    return 'Index${i}:Hello ${student.name} your score is ${student.score}';
});

console.log(helloStudents);

var gradeAStudents = classRoom.students.filter(function(student) {
    return student.score >= 90;
});

console.log(gradeAStudents);

var filtered = numbers.filter(function(n, i) {
    console.log(i);
    return n <= 5;
});

console.log(filtered);


//.reduce() method

var scoreTotal = classRoom.students.reduce(function(total, student) {
    return total + student.score;
}, 0);

console.log(scoreTotal);

classRoom.studentAverage = scoreTotal / classRoom.students.length;

console.log(classRoom.studentAverage);


var studentNames = classRoom.students.reduce(function(names, student) {
    names.push(student.name);
    return names;
}, []); 

console.log(studentNames);

// .filter() vs .find()

const people = [
    { name: 'John', id: 1 },
    { name: 'Jane', id: 2 },
    { name: 'Jack', id: 3 },
    { name: 'Jill', id: 4 },
];

const doesIdExist = (people, id) => {
    const foundPerson = people.find(person => person.id === id);
    if (foundPerson) {
        return true;
    } else {
        return false;
    }
}


console.log(people.filter(person => person.name === 'Jack'));


const originalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];    

// map always transforms each element in the array into a new value

// filter always returns a subset of the original array

// find always returns a single element from the array, if not found, returns undefined

let doubledNumbers = originalNumbers.map(number => number * 2);
