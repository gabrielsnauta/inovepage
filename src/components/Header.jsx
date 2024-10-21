import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useLayoutEffect } from "react";
import "./Header.css";
import { Button } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function Header() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".content", {
      width: "100%",
      borderRadius: "0",
      padding: "20px 10px 10px 10px",
      scrollTrigger: {
        trigger: ".header",
        //markers: true,
        start: "top",
        end: "bottom ",
        scrub: true,
      },
    });

    return () => {
      gsap.killTweensOf(".rr2");
    };
  }, []);
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".agendar", {
      position: "relative",
      zIndex: "1",
      scrollTrigger: {
        trigger: ".agendar",
        //markers: true,
        start: "top ",
        end: "bottom",
        scrub: true,
      },
    });

    return () => {
      gsap.killTweensOf(".rr2");
    };
  }, []);
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".content-img", {
      width: "6rem",
      margin: "0 0 0 6px",
      scrollTrigger: {
        trigger: ".header",
        //markers: true,
        start: "top",
        end: "bottom",
        scrub: true,
      },
    });

    return () => {
      gsap.killTweensOf(".rr2");
    };
  }, []);

  return (
    <header
      className="header"
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        zIndex: 2,
        width: "100vw",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div className="content">
        <img className="content-img" src="logo.png" />
        <Button
          className="agendar"
          sx={{
            position: "absolute",
            zIndex: "-1",
            borderRadius: "0 10px 0 10px",
            backgroundColor: "#0d8802",
            fontWeight: "bold",
          }}
          startIcon={<WhatsAppIcon sx={{ color: "white" }} />}
          variant="contained"
        >
          Agendar
        </Button>
      </div>
    </header>
  );
}
