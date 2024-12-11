function findHighestMarks(marks) {
    let highest = marks[0];
    for (let i = 1; i < marks.length; i++) {
        highest = marks[i] > highest ? marks[i] : highest;
    }
    console.log("Highest Marks:", highest);
}

// Example usage
findHighestMarks([45, 78, 89, 92, 67]);
