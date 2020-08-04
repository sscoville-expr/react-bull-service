var Queue =  require('bull');

export const newBull = new Queue('my-first-queue');

