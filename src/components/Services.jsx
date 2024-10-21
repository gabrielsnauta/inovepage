import { useLayoutEffect, useRef, useState } from "react";
import "./Services.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Button, Paper, Typography } from "@mui/material";
import ModalD from "./ModalD";

export default function Services() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(1);
  const tl = useRef();
  const el = useRef();

  const details = [
    {
      name: "Lavagem a seco",
      infos:
        "Usamos equipamentos e produtos profissionais para limpar o item, removendo sujeiras e manchas. A secagem leva de 1 a 2 horas dependendo das condições do tempo",
    },
    {
      name: "Higienização",
      infos:
        "Aplicamos os melhores produtos do mercado para eliminação de bactérias, fungos, virús e acáros",
    },
    {
      name: "Impermeabilização",
      infos:
        "Aplicamos produtos que criam uma camada resistente sob o tecido tornando-o impermeabilizado, esse processo protege de líquidos e aumenta a vida útil do estofado",
    },
  ];

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      tl.current = gsap
        .timeline({
          scrollTrigger: {
            //markers: true,
            trigger: ".services-item",
            scrub: true,
            start: "top 500px",
            end: "bottom 200px",
          },
        })
        .fromTo(
          "#model-1",
          {
            x: "-40%",
          },
          {
            x: "0",
            rotate: 0,
          }
        )
        .fromTo(
          "#model-2",
          {
            x: "42%",
          },
          {
            x: "0",
            rotate: 0,
          }
        )

        .fromTo(
          "#model-3",
          {
            x: "-46%",
          },
          {
            x: "0",
            rotate: 0,
          }
        );
    }, el);

    return () => {
      gsap.killTweensOf(".models-item");
    };
  }, []);

  function OnModal(id) {
    setOpen(true);
    setData(details[id]);
  }

  return (
    <div
      style={{
        margin: "22px 0 0 0",

        backgroundColor: "#eeeeee",
        padding: "26px 0 46px 0",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <ModalD data={data} open={open} setopen={(e) => setOpen(e)} />
      <div style={{ overflow: "hidden", margin: "0 5%", maxWidth: "100vw" }}>
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "20px",
            margin: "0 0 10px 0",
            color: "#102aa0",
          }}
        >
          Nossos serviços:
        </Typography>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            width: "95%",
          }}
          className="services-content"
          ref={el}
        >
          <Paper
            style={{
              transform: "translateX(-100px)",
              padding: "10px",
            }}
            className="services-item"
            id="model-1"
          >
            <section className="services-img">
              <img src="/lava.png" alt="lava" />
            </section>
            <section
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "start",
                height: "8rem",
              }}
            >
              <section>
                <Typography style={{ fontWeight: "bold" }}>
                  Lavagem a seco
                </Typography>
                <Typography style={{ lineHeight: 1.2 }}>
                  Remoção de sujidade e manchas
                </Typography>
              </section>
              <Button onClick={() => OnModal(0)}>Ver mais</Button>
            </section>
          </Paper>
          <Paper
            style={{ transform: "translateX(-100px)", padding: "10px" }}
            className="services-item"
            id="model-2"
          >
            <section
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "start",
                height: "8rem",
              }}
            >
              <section>
                <Typography style={{ fontWeight: "bold" }}>
                  Higienização
                </Typography>
                <Typography style={{ lineHeight: 1.2 }}>
                  Eliminação de fungos, bactérias e virús
                </Typography>
              </section>
              <Button onClick={() => OnModal(1)}>Ver mais</Button>
            </section>
            <section className="services-img">
              <img
                style={{ transform: "translateX(-50px)" }}
                src="/hig.png"
                alt="lava"
              />
            </section>
          </Paper>
          <Paper
            style={{ transform: "translateX(-100px)", padding: "10px" }}
            className="services-item"
            id="model-3"
          >
            <section className="services-img">
              <img src="/imper.png" alt="lava" />
            </section>
            <section
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "start",
                height: "8rem",
              }}
            >
              <section>
                <Typography style={{ fontWeight: "bold" }}>
                  Impermeabilização
                </Typography>
                <Typography style={{ lineHeight: 1.2 }}>
                  Proteção contra liquidos
                </Typography>
              </section>
              <Button onClick={() => OnModal(2)}>Ver mais</Button>
            </section>
          </Paper>
        </div>
      </div>
    </div>
  );
}
