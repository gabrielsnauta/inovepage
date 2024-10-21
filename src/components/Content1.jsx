import { Box, Typography } from "@mui/material";

export default function Content1() {
  return (
    <Box
      sx={{
        justifyContent: "center",
        display: "flex",
        margin: "100px 5% 16px 5%",
      }}
    >
      <Typography sx={{ fontSize: "18px", textAlign: "center" }}>
        Especialistas em <strong>higienização de estofados</strong> em{" "}
        <strong>Fortaleza</strong>
      </Typography>
    </Box>
  );
}
