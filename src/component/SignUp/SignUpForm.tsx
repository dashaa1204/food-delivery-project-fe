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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useState, Dispatch } from "react";
import { formdata } from "@/utils/dummy-data";

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
  const [visible, setVisible] = useState<boolean>(false);

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
                      type={
                        e.id === "password"
                          ? visible
                            ? "text"
                            : "password"
                          : "text"
                      }
                      placeholder={e.placeholder}
                    />
                    {e.id === "password" ? (
                      <FontAwesomeIcon
                        icon={visible ? "eye" : "eye-slash"}
                        onClick={() => setVisible(!visible)}
                      />
                    ) : null}
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
