import React from "react";

const Home = () => {
  return (
    <div className="home">
      <container className="row">
        <div className="card col-sm-3 welcome">
          <div className="card-body">
            <h5 className="card-title">Welcome</h5>
            <p className="card-text">
              I am a software engineer who is always looking for an interesting
              project when not lost in one of my own. Please contact me if you
              have something for me and thanks.
            </p>
          </div>
        </div>
        <article className="card col-sm-5 welcome">
          <div className="card-body">
            <br />
            <br />
            <br />
            <a
              className="btn btn-secondary btn-lg btn-block"
              href="https://www.linkedin.com/in/jonathan-peach-3356a212a/"
            >
              LinkedIn
            </a>
            <br />
            <br />
            <a
              className="btn btn-secondary btn-lg btn-block"
              href="https://github.com/jonmakesitbetter"
            >
              Github
            </a>
            <br />
            <br />
            <a
              className="btn btn-secondary btn-lg btn-block"
              href="https://drive.google.com/file/d/16NzMJH1hTcnhZO4LUb47pVpcZpV3pUNb/view?ths=true"
            >
              Resume
            </a>
          </div>
        </article>
      </container>
    </div>
  );
};

export default Home;
