const wait = ms => new Promise((r, j) => setTimeout(r, ms));

module.exports = {
  content(req, timeout) {
    return {
      main: `<h2 class="blog-post-title"><b>Post 2</b> - Seo Friendly</h2>
                    <p class="blog-post-meta">May 11, 2018 by <a href="#">Ahmet Can</a></p>
                    <p>Because PuzzleJs streams html contents, all async content will be available in page source.</p>
            <p>Content streamed after ${timeout}ms</p>
            <p>This post has no placeholder to display!</p>`
    }
  },
  placeholder() {
    return ``;
  },
  async data(req) {
    const timeout = req.query.post2 || 1;
    await wait(+timeout);
    return {
      data: timeout
    }
  }
};
