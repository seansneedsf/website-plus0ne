import * as React from "react";
import { render } from "react-dom";
import { Frame, Scroll } from "framer";

import "./styles.css";

function App() {
  return (
    <Scroll height={"100%"} width={"100%"}>
      <Frame background={""} size={"100%"}>
        <Frame background={"black"} color={"white"} width={"100%"}>
          <Frame
            background={""}
            width={"90%"}
            top={"10%"}
            left={"5%"}
            right={"5%"}
          >
            <div className="brand-name-plus">plus</div>
            <div className="brand-name-one">one</div>
            <p>&nbsp;</p>
          </Frame>
          <Frame
            animate={{ background: ["#fff", "#ff008c", "#000"] }}
            transition={{
              duration: 15,
              yoyo: Infinity
            }}
            width={"100%"}
            top={60}
            height={150}
            background={"#0CF"}
          />
          <Frame background={""} width={"90%"} top={230} left={"5%"} color={"white"}>
            <h1>about</h1>
            <h2>us</h2>
            <p>
              Plus0ne is a platform for creating events and allowing guest
              interactions in a way that doesn’t require sign-ups or being
              attached to a specific platform.
            </p>
            <p>&nbsp;</p>
            <h1>mariya</h1>
            <h2>pak</h2>
            <h3>Co-Founder</h3>
            <p>
              Passionate about technology and entrepreneurship. With background
              in computer science and software engineering, she formerly
              co-founded a startup Simple Matters focused on bluetooth-enabled
              location-based marketing. She runs a blog and a podcast on
              personal development and technology, which is her two biggest
              passions.
            </p>
            <p>&nbsp;</p>
            <h1>sean</h1>
            <h2>sneed</h2>
            <h3>Co-Founder</h3>
            <p>
              Experienced business consultant and full-stack software engineer.
              He became interested in the event space after experiencing the
              lack of innovation in existing products, and has been investing
              new ways to deliver a premium consumer experience ever since. He
              formerly helped establish and manage a bill negotiation service
              which was acquired by a Mark Cuban invested company. Sean is an
              active cryptocurrency investor and technology enthusiest.
            </p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
          </Frame>
        </Frame>
      </Frame>
    </Scroll>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
