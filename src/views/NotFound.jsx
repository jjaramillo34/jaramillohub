import React, { useState, CSSProperties, useEffect } from "react";
import { Link } from "react-router-dom";
import image404 from "../assets/img/404.jpg";
import { useTranslation } from "react-i18next";
import useMeasure from "react-use-measure";
import { useSpring, animated, useTrail, a } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import { useLocation } from "react-router-dom";

const NotFound = () => {
  const { t } = useTranslation();
  const [ref, { width, height }] = useMeasure();
  const [{ x, y }, set] = useState({ x: 0, y: 0 });
  const [{ xDelta, yDelta }, setDelta] = useState({ xDelta: 0, yDelta: 0 });
  const [{ xDir, yDir }, setDir] = useState({ xDir: 0, yDir: 0 });
  const [open, setOpen] = useState(true);

  const text1 = [
    "The requested URL was not found on this server.",
    "That’s all we know.",
    "404",
  ];

  const items = React.Children.toArray(text1);
  const trail = useTrail(items.length, {
    // set the trail animation for the text items to move in a certain way when the page is loaded left to right
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 80 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });

  const bind = useDrag(
    ({
      offset: [x, y],
      delta: [xDelta, yDelta],
      direction: [xDir, yDir],
      velocity,
      down,
    }) => {
      set({ x, y });
      setDelta({ xDelta, yDelta });
      setDir({ xDir, yDir });
    }
  );

  const styles = useSpring({
    x: x,
    y: y,
    xDelta: xDelta,
    yDelta: yDelta,
    xDir: xDir,
    yDir: yDir,
    xSize: width,
    ySize: height,
    xScale: 1,
    yScale: 1,
    xRotate: 0,
    yRotate: 0,
    xOpacity: 1,
    yOpacity: 1,
    xShadow: 0,
    yShadow: 0,
    xBorder: 0,
    yBorder: 0,
    xColor: 0,
    yColor: 0,
    config: { mass: 1, tension: 170, friction: 26 },
  });

  useEffect(() => {
    const handleResize = () => {
      styles.xSize.set(width);
      styles.ySize.set(height);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width, height, styles.xSize, styles.ySize]);

  useEffect(() => {
    styles.xScale.set(width / 100);
    styles.yScale.set(height / 100);
  }, [width, height, styles.xScale, styles.yScale]);

  useMeasure(() => {
    styles.xRotate.set(360);
    styles.yRotate.set(360);
  });

  return (
    // add the background image to the 404 page
    <div
      className="not-found"
      style={{
        backgroundImage: `url(${image404})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <div
        className="container"
        ref={ref}
        {...bind()}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="row">
          <div className="col-12">
            <div className="not-found-content text-center">
              <animated.h1
                style={{
                  fontSize: "100px",
                  fontWeight: "700",
                  color: "#000",
                  //textShadow: "2px 2px 0 #000",
                }}
                rotate={styles.xRotate}
                scale={styles.xScale}
                // add extra properties to the animated component
                // to make the text spin
                transform={styles.xRotate.interpolate(
                  (rotate) => `rotate(${rotate}deg)`
                )}
                transform-origin="center"
                //text-shadow="2px 2px 0 #000"
                opacity={styles.xOpacity}
                shadow={styles.xShadow}
              >
                {t("404Error")}
              </animated.h1>
              <animated.p
                style={{
                  fontSize: "20px",
                  fontWeight: "400",
                  color: "#000",
                  //textShadow: "2px 2px 0 #000",
                }}
              >
                {t("notFoundMessage")}
              </animated.p>
              <animated.div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "40px",
                }}
              >
                <animated.div
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    background: "#000",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    //boxShadow: "2px 2px 0 #000",
                  }}
                >
                  <animated.span
                    style={{
                      fontSize: "20px",
                      fontWeight: "400",
                      color: "#fff",
                      fontFamily: "Poppins, sans-serif",
                      //textShadow: "2px 2px 0 #fff",
                    }}
                  >
                    {t("404")}
                  </animated.span>
                </animated.div>
              </animated.div>
            </div>
            <div style={{ height: "50px" }}></div>
            <div className="not-found-button text-center">
              <Link to="/" className="button">
                <span
                  className="button-text"
                  style={{
                    fontSize: "20px",
                    color: "#000",
                    fontWeight: "600",
                  }}
                >
                  {t("notFoundButton")}
                </span>
                <span className="button-icon fa fa-home"></span>
              </Link>
            </div>
          </div>
        </div>
        <div style={{ height: "50px" }}></div>
        // on click of the button, the text will be animated
        <div className="row">
          // on click of the button, the text will be animated
          {trail.map(({ x, height, ...rest }, index) => (
            <a.div
              key={index}
              className="trails-text"
              style={{
                ...rest,
                transform: x.to((x) => `translate3d(0,${x}px,0)`),
                color: "#000",
                fontSize: "26px",
                fontWeight: "400",
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
                // display the items horizontally
                flexDirection: "row",
                // uppercase the text
                textTransform: "uppercase",
              }}
              transform={styles.xRotate.interpolate(
                (rotate) => `rotate(${rotate}deg)`
              )}
              transform-origin="center"
            >
              <a.div style={{ height }}>{items[index]}</a.div>
            </a.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotFound;
