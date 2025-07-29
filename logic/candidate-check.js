function isQualified(solvedProblemTimeArray, totalTimeToSolve) {
    const qualified = 'qualified';
    const disqualified = 'disqualified';
    const maxInterviewTime = 140;
    const maxEasyTime = 10;
    const maxMediumTime = 15;
    const maxHardTime = 20;
    // I could have set constants for the array slices...
    // e.g. const EASY_PROBLEMS = 3; const MEDIUM_PROBLEMS = 3; const HARD_PROBLEMS = 2;
    // to dictate the array slices allowing for code readability
    const easyProblemsArray = solvedProblemTimeArray.slice(0, 3);
    const mediumProblemsArray = solvedProblemTimeArray.slice(3, 6);
    // either hardcode the array slices e.g. 6, 8 if I know it will always be one size.
    // -2 could be considered a magic number... meaning the code is not self-documenting or not understood easily
    const hardProblemsArray = solvedProblemTimeArray.slice(-2);
    
    if (totalTimeToSolve > maxInterviewTime) return disqualified;
    if (problemTimeCheck(easyProblemsArray, maxEasyTime) > 0) return disqualified;
    if (problemTimeCheck(mediumProblemsArray, maxMediumTime) > 0) return disqualified;
    if (problemTimeCheck(hardProblemsArray, maxHardTime) > 0) return disqualified;
    return qualified;

    // I could have used array.every() to check if the time to solve the problem was exceeded
    // array.every(solveTime => solveTime > maxTimeToSolve) returns a boolean
    function problemTimeCheck(array, maxTimeToSolve) {
        return array.filter(problemSolvedTime => problemSolvedTime > maxTimeToSolve).length;
    }
}

isQualified([8,9,10,13,14,15,18,19], 110) //qualified
isQualified([8,11,10,13,14,15,18,19], 110) //disqualified
isQualified([9,10,8,14,15,13,19,20], 108) //qualified
isQualified([9,10,8,14,15,13,19,20], 141) //disqualified
isQualified([9,11,7,14,15,16,18,19], 109) //disqualified
isQualified([10,10,10,15,15,15,20,20], 140) //qualified
isQualified([8,9,9,14,15,14,19,21], 109) //disqualified
isQualified([8,7,10,14,13,15,18,19], 104) //qualified