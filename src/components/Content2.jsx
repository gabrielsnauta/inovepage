import { Box, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import GroupsIcon from "@mui/icons-material/Groups";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function Content2() {
  const tl = useRef();
  const el = useRef();

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      tl.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: ".i",
            scrub: true,
            start: "top 500px",
            end: "bottom 200px",
          },
        })
        .fromTo(
          "#model-1",
          {
            opacity: 0,
          },
          {
            opacity: 1,
          }
        )
        .fromTo(
          "#model-2",
          {
            opacity: 0,
          },
          {
            opacity: 1,
          }
        )

        .fromTo(
          "#model-3",
          {
            opacity: 0,
          },
          {
            opacity: 1,
          }
        );
    }, el);

    return () => {
      gsap.killTweensOf(".models-item");
    };
  }, []);

  return (
    <div
      style={{
        margin: "30px 0 200px 0",
        backgroundColor: "#eeeeee",
        padding: "16px 0",
      }}
    >
      <section
        style={{ display: "flex", flexDirection: "column", gap: "40px" }}
        ref={el}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <HomeIcon
            sx={{
              fontSize: "80px",
              border: "2px solid #102aa0",
              borderRadius: "50%",
              padding: "8px",
              color: "#102aa0",
            }}
          />
          <Typography
            id="model-1"
            className="i"
            sx={{
              color: "#102aa0",
              fontWeight: "bold",
              fontSize: "18px",
              textDecorationLine: "underline",
            }}
          >
            Atendemos a domicílio
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <GroupsIcon
            sx={{
              fontSize: "80px",
              border: "2px solid #102aa0",
              borderRadius: "50%",
              padding: "8px",
              color: "#102aa0",
            }}
          />
          <Typography
            id="model-2"
            className="i"
            sx={{
              color: "#102aa0",
              fontWeight: "bold",
              fontSize: "18px",
              textDecorationLine: "underline",
            }}
          >
            Equipe especializada
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <HomeRepairServiceIcon
            sx={{
              fontSize: "80px",
              border: "2px solid #102aa0",
              borderRadius: "50%",
              padding: "8px",
              color: "#102aa0",
            }}
          />
          <Typography
            id="model-3"
            className="i"
            sx={{
              color: "#102aa0",
              fontWeight: "bold",
              fontSize: "18px",
              textDecorationLine: "underline",
            }}
          >
            Equipamentos profissionais
          </Typography>
        </Box>
      </section>
    </div>
  );
}
