import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assests/images/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import navIcon1 from "../assests/images/nav-icon1.svg";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Web Designer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio
                <div className="social-icon">
                  <a href="https://www.linkedin.com/in/souvik-nandy-15b32119a/"><img src={navIcon1} alt="Icon" /></a>
                </div>
                </span>
                <h1>{`Hi! I'm Souvik`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span>
                </h1>
                  <p>Hello, I'm Souvik Nandy, and I'm thrilled to present my portfolio as a front-end developer with two years of experience. I'm deeply passionate about creating exceptional web experiences and have honed my skills in various front-end technologies, including HTML, CSS, JavaScript, React, Angular.js, and Angular. <br />
                  <br />
                  Professional Background: <br />
                  <br />
                  During my journey in front-end development, I've had the opportunity to work on a wide range of projects, each presenting its unique challenges and opportunities. My commitment to creating responsive and visually appealing websites has been a driving force in my career. <br />
                  <br />
                  Key Expertise: <br />
                  <br />
                  My expertise encompasses several critical areas: <br />
                  <br />
                  HTML/CSS: I excel in crafting semantically rich and visually engaging web pages with HTML and CSS, ensuring a seamless user experience. <br />
                  <br />
                  JavaScript: I'm proficient in JavaScript, which allows me to bring interactivity and dynamic functionality to websites. <br />
                  <br />
                  React: I've worked extensively with React, harnessing its power to build robust, modular, and highly performant web applications. <br />
                  <br />
                  Angular.js and Angular: I've also accumulated skills in Angular.js and Angular, giving me the versatility to work with various front-end frameworks.</p>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}