const wait = ms => new Promise((r, j) => setTimeout(r, ms));

module.exports = {
  content(req, timeout) {
    return {
      main: `<h2 class="blog-post-title"><b>Post 1</b> - PuzzleJs Is Fast!</h2>
                    <p class="blog-post-meta">May 11, 2018 by <a href="#">Ahmet Can</a></p>

                    <p>PuzzleJs doesn't wait for fragment contents to respond. It makes PuzzleJs fast!</p>
                    <hr />

                    <p>And it is <b>not</b> using AJAX!</p>
            <p>Content streamed after ${timeout}ms</p>`
    }
  },
  placeholder() {
    return `<h2 class="blog-post-title"><b>Post 1</b> - <small>Loading</small></h2>
                    <p class="blog-post-meta">May 11, 2018 by <a href="#">Ahmet Can</a></p>


                    <p><small>Loading...</small></p>`;
  },
  async data(req) {
    const timeout = req.query.post1 || 1;
    await wait(+timeout);
    return {
      data: timeout
    }
  }
};
