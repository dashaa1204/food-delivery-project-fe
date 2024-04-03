import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Input,
  Stack,
  Typography,
} from "@mui/material";
import PasswordIcon from "../icons/PasswordIcon";
import { useRouter } from "next/router";
// import { useState } from "react";
const formdata = [
  { title: "Нэр", placeholder: "Нэрээ оруулна уу", id: "name", name: "name" },
  {
    title: "И-мэйл",
    placeholder: "И-мэйл хаягаа оруулна уу",
    id: "email",
    name: "email",
  },
  {
    title: "Хаяг",
    placeholder: "Та хаягаа оруулна уу",
    id: "adress",
    name: "adress",
  },
  {
    title: "Нууц үг",
    placeholder: "Нууц үгээ оруулна уу",
    id: "password",
    icon: <PasswordIcon />,
    name: "password",
  },
  {
    title: "Нууц үг давтах",
    placeholder: "Нууц үгээ оруулна уу",
    id: "repassword",
    name: "repassword",
    icon: <PasswordIcon />,
  },
];

const SignUpForum = () => {
  const router = useRouter();
  const handler = (e: any) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      adress: e.target.adress.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    fetch("http://localhost:3001/api/register", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
    router.push("/");
  };
  // [check, setCheck] = useState("");
  // [button, setButton] = useState("");
  // function buttonHandler() {
  //   setButton("enable");
  // }
  return (
    <Stack
      width={"1440px"}
      height={"1505px"}
      justifyContent={"center"}
      alignItems={"center"}
      maxWidth={"1440px"}
    >
      <Stack width={"448px"} p={8} gap={"48px"}>
        <Typography>Бүртгүүлэх</Typography>
        <form onSubmit={handler}>
          {formdata.map((e, key) => {
            return (
              <FormControl key={key} fullWidth>
                <Stack gap={"4px"} alignItems={"stretch"}>
                  <Typography fontSize={"8px"}>{e.title}</Typography>
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Input
                      id={e.id}
                      name={e.title}
                      required
                      type={e.id}
                      placeholder={e.placeholder}
                    />
                    <Stack>{e.icon}</Stack>
                  </Stack>
                </Stack>
              </FormControl>
            );
          })}
          <FormControlLabel
            control={<Checkbox />}
            label="Үйлчилгээний нөхцөл зөвшөөрөх"
          />
          <Button variant="contained" type="submit">
            Бүртгүүлэх
          </Button>
        </form>
      </Stack>
    </Stack>
  );
};

export default SignUpForum;
