/*Q2. Build a Rate Limiter (Closure + Timers)
It should:
a. Allow only limit calls per interval
b. Block extra calls
c. Automatically reset after interval
d. Maintain internal counter privately

Q3. Implement setInterval Using setTimeout
function mySetInterval(callback, delay)

It should behave like native setInterval.

Requirements
a. Repeatedly execute callback every delay milliseconds.
b. Return an id that can be used to stop execution.
c. Implement myClearInterval(id) to stop it.
d. Must use setTimeout internally.
e. Maintain timer reference privately. */

function createRateLimiter(limit, interval) {
  let count = 0;        
  let timer = null;   

  return function () {
    if (!timer) {
      timer = setTimeout(() => {
        count = 0;
        timer = null;
      }, interval);
    }

    if (count < limit) {
      count++;
      return "Allowed";
    } else {
      return "Blocked";
    }
  };
}
const limiter = createRateLimiter(2, 3000);

console.log(limiter()); // Allowed
console.log(limiter()); // Allowed
console.log(limiter()); // Blocked

setTimeout(() => {
  console.log(limiter()); // Allowed (reset)
}, 4000);