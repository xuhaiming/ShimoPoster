'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

class UserPageContainer extends React.Component {
  render() {
    return (
      <div>
        <section id="sidebar">
          <div className="inner">
            <nav>
              <ul>
                <li><a href="#intro">Welcome</a></li>
                <li><a href="#one">Who we are</a></li>
                <li><a href="#two">What we do</a></li>
                <li><a href="#three">Get in touch</a></li>
              </ul>
            </nav>
          </div>
        </section>

        <div id="wrapper">

          <section id="intro" className="wrapper style1 fullscreen fade-up">
            <div className="inner">
              <h1>Hyperspace</h1>
              <p>Just another fine responsive site template designed by <a href="http://html5up.net">HTML5 UP</a><br/>
                and released for free under. </p>
              <ul className="actions">
                <li><a href="#one" className="button scrolly">Learn more</a></li>
              </ul>
            </div>
          </section>

          <section id="one" className="wrapper style2 spotlights">
            <section>
              <a href="#" className="image"><img src="images/pic01.jpg" alt="" data-position="center center"/></a>
              <div className="content">
                <div className="inner">
                  <h2>Sed ipsum dolor</h2>
                  <p>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada
                    quis. Aliquam dapibus.</p>
                  <ul className="actions">
                    <li><a href="#" className="button">Learn more</a></li>
                  </ul>
                </div>
              </div>
            </section>
            <section>
              <a href="#" className="image"><img src="images/pic02.jpg" alt="" data-position="top center"/></a>
              <div className="content">
                <div className="inner">
                  <h2>Feugiat consequat</h2>
                  <p>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada
                    quis. Aliquam dapibus.</p>
                  <ul className="actions">
                    <li><a href="#" className="button">Learn more</a></li>
                  </ul>
                </div>
              </div>
            </section>
            <section>
              <a href="#" className="image"><img src="images/pic03.jpg" alt="" data-position="25% 25%"/></a>
              <div className="content">
                <div className="inner">
                  <h2>Ultricies aliquam</h2>
                  <p>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada
                    quis. Aliquam dapibus.</p>
                  <ul className="actions">
                    <li><a href="#" className="button">Learn more</a></li>
                  </ul>
                </div>
              </div>
            </section>
          </section>

          <section id="two" className="wrapper style3 fade-up">
            <div className="inner">
              <h2>What we do</h2>
              <p>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis.
                Aliquam dapibus, lacus eget hendrerit bibendum, urna est aliquam sem, sit amet imperdiet est velit quis
                lorem.</p>
              <div className="features">
                <section>
                  <span className="icon major fa-code"></span>
                  <h3>Lorem ipsum amet</h3>
                  <p>Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat
                    dapibus.</p>
                </section>
                <section>
                  <span className="icon major fa-lock"></span>
                  <h3>Aliquam sed nullam</h3>
                  <p>Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat
                    dapibus.</p>
                </section>
                <section>
                  <span className="icon major fa-cog"></span>
                  <h3>Sed erat ullam corper</h3>
                  <p>Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat
                    dapibus.</p>
                </section>
                <section>
                  <span className="icon major fa-desktop"></span>
                  <h3>Veroeros quis lorem</h3>
                  <p>Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat
                    dapibus.</p>
                </section>
                <section>
                  <span className="icon major fa-chain"></span>
                  <h3>Urna quis bibendum</h3>
                  <p>Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat
                    dapibus.</p>
                </section>
                <section>
                  <span className="icon major fa-diamond"></span>
                  <h3>Aliquam urna dapibus</h3>
                  <p>Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat
                    dapibus.</p>
                </section>
              </div>
              <ul className="actions">
                <li><a href="#" className="button">Learn more</a></li>
              </ul>
            </div>
          </section>

          <section id="three" className="wrapper style1 fade-up">
            <div className="inner">
              <h2>Get in touch</h2>
              <p>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis.
                Aliquam dapibus, lacus eget hendrerit bibendum, urna est aliquam sem, sit amet imperdiet est velit quis
                lorem.</p>
              <div className="split style1">
                <section>
                  <form method="post" action="#">
                    <div className="field half first">
                      <label for="name">Name</label>
                      <input type="text" name="name" id="name"/>
                    </div>
                    <div className="field half">
                      <label for="email">Email</label>
                      <input type="text" name="email" id="email"/>
                    </div>
                    <div className="field">
                      <label for="message">Message</label>
                      <textarea name="message" id="message" rows="5"></textarea>
                    </div>
                    <ul className="actions">
                      <li><a href="" className="button submit">Send Message</a></li>
                    </ul>
                  </form>
                </section>
                <section>
                  <ul className="contact">
                    <li>
                      <h3>Address</h3>
											<span>12345 Somewhere Road #654<br/>
											Nashville, TN 00000-0000<br/>
											USA</span>
                    </li>
                    <li>
                      <h3>Email</h3>
                      <a href="#">user@untitled.tld</a>
                    </li>
                    <li>
                      <h3>Phone</h3>
                      <span>(000) 000-0000</span>
                    </li>
                    <li>
                      <h3>Social</h3>
                      <ul className="icons">
                        <li><a href="#" className="fa-twitter"><span className="label">Twitter</span></a></li>
                        <li><a href="#" className="fa-facebook"><span className="label">Facebook</span></a></li>
                        <li><a href="#" className="fa-github"><span className="label">GitHub</span></a></li>
                        <li><a href="#" className="fa-instagram"><span className="label">Instagram</span></a></li>
                        <li><a href="#" className="fa-linkedin"><span className="label">LinkedIn</span></a></li>
                      </ul>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </section>

        </div>

        <footer id="footer" className="wrapper style1-alt">
          <div className="inner">
            <ul className="menu">
              <li>&copy; Untitled. All rights reserved.</li>
              <li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
            </ul>
          </div>
        </footer>
      </div>
    );
  }
}

ReactDOM.render(
  <UserPageContainer />,
  document.getElementById('userPageContainer')
);
