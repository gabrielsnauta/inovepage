import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Hook1() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyItems: "center",
        alignItems: "center",
        gap: "20px",
        margin: "24px 0 0 0",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "17px",
            textAlign: "center",
          }}
        >
          Solicite uma proposta de orçamento
        </Typography>
        <Button
          variant="contained"
          startIcon={<WhatsAppIcon sx={{ color: "white" }} />}
          sx={{
            color: "white",
            fontWeight: "bold",
            alignItems: "center",
            background:
              "linear-gradient(to right, #116800d2, #208d0ad2, #116800d2)",
          }}
        >
          Clique aqui
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2px",
        }}
      >
        <Typography sx={{ fontWeight: "500", fontSize: "17px" }}>
          Nossas redes:
        </Typography>
        <ButtonGroup variant="text" aria-label="Basic button group">
          <Button
            style={{
              fontWeight: "bold",
            }}
            endIcon={<InstagramIcon />}
          >
            Instagram
          </Button>
          <Button
            style={{
              fontWeight: "bold",
            }}
            startIcon={<FacebookIcon />}
          >
            Facebook
          </Button>
        </ButtonGroup>
      </Box>
    </div>
  );
}
