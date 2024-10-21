import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 3,
};

export default function ModalD(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => props.setopen(true);
  const handleClose = () => props.setopen(false);

  return (
    <div>
      <Modal
        open={props.open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {props.data["name"]}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {props.data["infos"]}
          </Typography>
          <Button onClick={handleClose} sx={{ mt: 2 }} variant="outlined">
            Ok
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
