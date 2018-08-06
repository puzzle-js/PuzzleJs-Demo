const wait = ms => new Promise((r, j) => setTimeout(r, ms));

module.exports = {
  content(req, timeout) {
    return {
      main: `<p>This section is coming from Browsing Gateway.</p>
            <h1 class="blog-title"><b>Blog Header</b> - PuzzleJs Blog</h1>
            <p class="lead blog-description"><h4>Use the settings panel to change fragment loading times</h4></p>
            <p>Content streamed after ${timeout}ms</p>`
    }
  },
  placeholder() {
    return `<p><small>Loading</small></p>
            <h1 class="blog-title"><b>Blog Header</b> - <small>Loading</small></h1>
            <p class="lead blog-description"><h4><small>Loading</small></h4></p>`;
  },
  async data(req) {
    const timeout = req.query.header || 1;
    await wait(+timeout);
    return {
      data: timeout
    }
  }
};
