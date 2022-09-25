const {DateTime} = require('luxon');

const now = DateTime.now();
console.log(now);

dt = now.minus({days:7});
console.log(dt);