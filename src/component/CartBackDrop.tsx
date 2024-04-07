import { Stack, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import HomeModal from "./HomeModal";
import cartFood from "@/utils/cart-foods";

const CartBackDrop = ({ handleClose }: { handleClose: () => void }) => {
  return (
    <Stack width={"586px"} bgcolor={"white"} height={"1439px"} px={"24px"}>
      <Stack
        mt={40}
        color={"black"}
        width={"538px"}
        gap={"171px"}
        direction={"row"}
      >
        <Stack
          width={"48px"}
          height={"48px"}
          p={"2px, 6px"}
          justifyContent={"center"}
          component={"button"}
          onClick={handleClose}
          sx={{ backgroundColor: "white", border: "none" }}
        >
          <ArrowBackIosIcon />
        </Stack>
        <Typography>Таны сагс</Typography>
      </Stack>
      {/* <HomeModal /> */}
    </Stack>
  );
};

export default CartBackDrop;
