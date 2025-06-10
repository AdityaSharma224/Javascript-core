class RateLimiter {
  constructor({ maxRequests, perMilliseconds }) {
    this.maxRequests = maxRequests;
    this.perMilliseconds = perMilliseconds;
    this.tokens = maxRequests;
    this.queue = [];

    setInterval(() => {
      this.tokens = this.maxRequests;
      this._processQueue();
    }, this.perMilliseconds);
  }

  _processQueue() {
    while (this.tokens > 0 && this.queue.length > 0) {
      const { resolve } = this.queue.shift();
      this.tokens--;
      resolve();
    }
  }

  async acquireToken() {
    if (this.tokens > 0) {
      this.tokens--;
      return Promise.resolve();
    }

    return new Promise((resolve) => {
      this.queue.push({ resolve });
    });
  }

  /**
   * Wrap any async function, like fetch or axios.
   */
  async schedule(fn, ...args) {
    await this.acquireToken();
    return fn(...args);
  }
}
