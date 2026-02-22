/**Q4. Implement a Sequential Task Runner (Using Timers + Promises)
function runSequential(tasks, delay)

Where tasks is an array of async functions.

Requirements
a. Execute tasks one by one.
b. Wait delay milliseconds between tasks.
c. Stop execution if any task fails.
d. Return array of results.
e. Must not use forEach with async. */

function runSequential(tasks, delay) {
  let results = [];

  return new Promise(async (resolve, reject) => {
    try {
      for (let i = 0; i < tasks.length; i++) {
        // run task
        const result = await tasks[i]();
        results.push(result);

        
        if (i < tasks.length - 1) {
          await new Promise(r => setTimeout(r, delay));
        }
      }
      resolve(results);
    } catch (error) {
      reject(error); 
    }
  });
}
const task1 = async () => {
  return "Task 1 done";
};

const task2 = async () => {
  return "Task 2 done";
};

const task3 = async () => {
  throw "Task 3 failed"; 
};

runSequential([task1, task2, task3], 1000)
  .then(res => console.log(res))
  .catch(err => console.log("Error:", err));