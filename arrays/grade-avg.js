function calculateAverageGrade(scores) {
    const average = scores.reduce((acc, cur) => acc + cur, 0) / scores.length;
    return Math.round(average * 100) / 100;
}

calculateAverageGrade([85,90,92,88,76]); // 86.20
calculateAverageGrade([50,100,0]); // 50.00
calculateAverageGrade([100]); // 100.00
calculateAverageGrade([70.5,85.25,90.75]); // 82.17
calculateAverageGrade([10,40,34,76,2]); // 32.40
calculateAverageGrade([70,65,80,75,88,92,78,85]); // 79.13
calculateAverageGrade([60,70,80,90,100]); // 80.00
calculateAverageGrade([88.5,92.3,76.8,89.1,95.7]); // 88.48