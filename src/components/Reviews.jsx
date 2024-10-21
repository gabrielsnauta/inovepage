import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
import InstagramIcon from "@mui/icons-material/Instagram";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import { Box, Paper, Typography } from "@mui/material";

const datas = [
  {
    img: "/r1.jpg",
    name: "@kellmys_mccoy",
    comment: "Serviço de primeira, altamente profissional",
  },
  {
    img: "/r2.jpg",
    name: "@cs_cortinasambientacoes",
    comment: "Super indicamos, são pontuais, detalhista e caprichosos👍🏽😉",
  },
  {
    img: "/r3.jpg",
    name: "@robertamagda",
    comment: "Adorei o resultado do seu serviço, empresa de ótima qualidade",
  },
];

export default function Reviews() {
  return (
    <div style={{ margin: "26px 0 0 0", padding: "0 5%" }}>
      <Typography
        sx={{
          fontWeight: "bold",
          fontSize: "20px",
          margin: "0 0 10px 0",
          color: "#102aa0",
        }}
      >
        Opiniões dos nossos clientes
      </Typography>
      <Swiper
        // install Swiper modules
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          EffectFade,
          Autoplay,
        ]}
        slidesPerView={1}
        autoplay
        spaceBetween="40px"
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        loop
      >
        {datas.map((iten, index) => (
          <SwiperSlide key={index} style={{ overflow: "hidden" }}>
            <Box
              sx={{
                transform: "translateY(4px)",
                background: "#3d5ce9",
                border: "1px solid #0c27a0",
                padding: "10px",
                borderRadius: "18px",
                gap: "8px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <section
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <img
                  style={{ width: "32px", borderRadius: "50%" }}
                  src={iten["img"]}
                />
                <Typography style={{ fontWeight: "bold", color: "white" }}>
                  {iten["name"]}
                </Typography>
              </section>
              <Typography sx={{ fontSize: "18px", color: "white" }}>
                {iten["comment"]}
              </Typography>
              <section
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <InstagramIcon sx={{ color: "white" }} />
                <Typography sx={{ color: "white" }}>
                  Comentado no Instagram
                </Typography>
              </section>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
