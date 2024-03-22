//实现链式延迟调用 - person.eat().sleep(2).eat()
function Person() {
  this.queue = [];
  this.excuteLock = false;
}
Person.prototype.eat = function() {
  this.queue.push(
    () =>
      new Promise(res => {
        console.log("eat");
        res();
      })
  );
  this.run();
  return this;
};

Person.prototype.sleep = function(time) {
  this.queue.push(
    () =>
      new Promise(res => {
        setTimeout(() => {
          console.log("sleep");
          res();
          this.run();
        }, time * 1000);
      })
  );
  this.run();
  return this;
};

// 核心
Person.prototype.run = async function() {
  if (this.queue.length > 0 && !this.excuteLock) {
    this.excuteLock = true;
    const task = this.queue.shift();
    await task();
    this.excuteLock = false;
    this.run();
  }
};

const a = new Person();
a.eat()
  .sleep(1)
  .eat()
  .sleep(3)
  .eat();
