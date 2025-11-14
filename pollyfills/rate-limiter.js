class RateLimiter {
  constructor(maxRequests, windowMs) {
    this.maxRequests = maxRequests; // e.g. 5
    this.windowMs = windowMs; // e.g. 1000ms = 1 sec
    this.queue = [];
    this.timestamps = [];
  }

  async schedule(fn) {
    return new Promise((resolve, reject) => {
      const execute = async () => {
        try {
          const now = Date.now();
          this.timestamps = this.timestamps.filter(
            (t) => now - t < this.windowMs
          );

          if (this.timestamps.length >= this.maxRequests) {
            // Wait until next slot is free
            const delay = this.windowMs - (now - this.timestamps[0]);
            setTimeout(execute, delay);
            return;
          }

          this.timestamps.push(Date.now());
          const result = await fn();
          resolve(result);
        } catch (err) {
          reject(err);
        }
      };

      execute();
    });
  }
}


const limiter = new RateLimiter(5, 1000);

