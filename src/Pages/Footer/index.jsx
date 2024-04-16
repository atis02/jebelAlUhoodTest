import React from "react";
import {
  MenuItem,
  Box,
  Button,
  Divider,
  Container,
  Select,
  Stack,
  InputLabel,
  FormControl,
  Typography,
  TextField,
} from "@mui/material";
import Aos from "aos";

const Footer = () => {
  Aos.init({
    duration: 1500,
    offset: 0,
  });
  return (
    <Box
      sx={{
        background: "#2F2F2F",
        height: { lg: "250px", md: "100%", xs: "100%" },
        backgroundImage: "url('/images/AboutHorizontal.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        color: "#fff",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          // xs: { flexDirection: "column" },
          justifyContent: "space-between",
          // height: "100%",
        }}
      >
        <Stack
          direction="row"
          flexWrap="wrap"
          spacing={{ lg: 7, xs: 0 }}
          mt={2}
        >
          <Stack spacing={3}>
            <Stack
              direction="row"
              data-aos="fade-down"
              data-aos-delay="300"
              width={{ lg: 420, md: 400, xs: 320 }}
              alignItems="center"
              spacing={1}
            >
              <img
                src="/images/Location.png"
                style={{ width: 25, height: 25 }}
                alt=""
              />
              <Typography>
                Центральный офис пр. Нурмухаммета Андалиба №: 70/2, Па: 747017 .
              </Typography>
            </Stack>
            <Stack
              data-aos="fade-down"
              data-aos-delay="400"
              direction="row"
              width={{ lg: 420, md: 400, xs: 320 }}
              alignItems="center"
              spacing={1}
            >
              <img
                src="/images/Call.png"
                style={{ width: 25, height: 25 }}
                alt=""
              />
              <a
                style={{ color: "#fff", textDecoration: "none" }}
                href="tel: +993 12 473577"
              >
                +993 12 473577
              </a>
            </Stack>
            <Stack
              data-aos="fade-down"
              data-aos-delay="500"
              direction="row"
              width={{ lg: 420, md: 400, xs: 320 }}
              alignItems="center"
              spacing={1}
              pb={{ lg: 0, xs: 3 }}
            >
              <img
                src="/images/Fax.png"
                style={{ width: 25, height: 25 }}
                alt=""
              />
              <Typography>+993 12 471577</Typography>
            </Stack>
          </Stack>
          <Stack spacing={3}>
            <Stack
              direction="row"
              data-aos="fade-down"
              data-aos-delay="600"
              width={220}
              alignItems="center"
              spacing={1}
            >
              <img
                src="/images/Mail.png"
                style={{ width: 25, height: 25 }}
                alt=""
              />
              <Typography>info@altynmiras.com</Typography>
            </Stack>
            <Stack
              data-aos="fade-down"
              data-aos-delay="700"
              direction="row"
              width={220}
              alignItems="center"
              spacing={1}
            >
              <img
                src="/images/Info.png"
                style={{ width: 25, height: 25 }}
                alt=""
              />
              <Typography>www.altynmiras.com</Typography>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          direction="row"
          mt={{ xs: 4, lg: 0 }}
          flexWrap="wrap"
          spacing={7}
          alignItems="center"
        >
          <Stack
            sx={{
              width: { lg: 180, md: 160, xs: 150 },
              height: { lg: 160, md: 150, xs: 140 },
            }}
          >
            <img
              src="/images/image 68.png"
              alt=""
              data-aos="fade-down"
              data-aos-delay="800"
            />
          </Stack>
          <Stack
            sx={{
              width: { lg: 137, md: 127, xs: 117 },
              height: { lg: 126, md: 116, xs: 106 },
            }}
          >
            <img
              src="/images/image 51.png"
              data-aos="fade-down"
              data-aos-delay="900"
              alt=""
            />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
