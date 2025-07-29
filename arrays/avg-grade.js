function calculateAverageGrade(scores) {
  const sum = scores.reduce((acc, currentVal) => acc + currentVal, 0);
  const length = scores.length;
  const avg = sum / length;
  return Number(avg.toFixed(2))
}

calculateAverageGrade([85,90,92,88,76]);
calculateAverageGrade([88.5,92.3,76.8,89.1,95.7])
calculateAverageGrade([70,65,80,75,88,92,78,85])