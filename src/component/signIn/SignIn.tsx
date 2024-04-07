import { Box, Button, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useState, Dispatch } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BorderAll, SelectAllOutlined } from "@mui/icons-material";

const SignIn = () => {
  const router = useRouter();
  const [visible, setVisible] = useState<boolean>(false);
  const handler = async (e: any) => {
    e.preventDefault();
    const login = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    const res = await fetch("http://localhost:3001/api/login", {
      method: "POST",
      body: JSON.stringify(login),
      headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (data.token) {
      localStorage.setItem("userToken", data.token);
      router.push("/");
    } else {
    }
  };

  return (
    <form onSubmit={handler}>
      <Stack gap={"48px"} p={8} mt={20}>
        <Typography>Нэвтрэх</Typography>
        <Stack width={"384px"} gap={"8px"}>
          <Stack gap={"8px"}>
            <Stack>
              <Typography>Имэйл</Typography>
              <Box
                component={"input"}
                id="email"
                name="email"
                placeholder="Имэйл хаягаа оруулна уу"
                bgcolor={"#ECF4F3"}
                px={"16px"}
                py={"8px"}
                borderRadius={"4px"}
                type="email"
                border={"none"}
              ></Box>
            </Stack>
            <Stack>
              <Typography>Нууц үг</Typography>
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                bgcolor={"#ECF4F3"}
                color={"#3F4145"}
                px={"16px"}
                py={"8px"}
                borderRadius={"4px"}
              >
                <Box
                  id="password"
                  name="password"
                  component={"input"}
                  placeholder="Нууц үг"
                  bgcolor={"#ECF4F3"}
                  width={"90%"}
                  type={visible ? "text" : "password"}
                  border={"none"}
                  boxShadow={"none"}
                ></Box>
                <Box component={"span"}>
                  <FontAwesomeIcon
                    icon={visible ? "eye" : "eye-slash"}
                    onClick={() => setVisible(!visible)}
                  />
                </Box>
              </Stack>
            </Stack>
          </Stack>

          <Box>
            <Typography>Нууц үг сэргээх</Typography>
          </Box>
        </Stack>
        <Stack alignItems={"center"} gap={"32px"}>
          <Button fullWidth type="submit">
            Нэвтрэх
          </Button>
          <Typography>Эсвэл</Typography>
          <Button fullWidth>Бүртгүүлэх</Button>
        </Stack>
      </Stack>
    </form>
  );
};

export default SignIn;
