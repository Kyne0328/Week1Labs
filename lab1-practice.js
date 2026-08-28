const appName = 'Week1Labs';
let taskCount = 0;
taskCount = taskCount + 1;
console.log(`${appName} has ${taskCount} task.`);

const double = (n) => n * 2;
console.log(`Double of 5 is ${double(5)}`);

const student = 'Ana';
const streak = 3;
console.log(`${student} is on a ${streak}-day streak!`);

const subjects = ['Math', 'Programming', 'PE', 'Networking'];
const shouting = subjects.map((s) => s.toUpperCase());
const longNames = subjects.filter((s) => s.length > 4);
console.log(shouting);
console.log(longNames);

const task = { title: 'Finish Lab 1', done: false };
const { title, done } = task;
console.log(`Task: ${title} — Done: ${done}`);
