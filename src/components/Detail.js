import React from "react";
import { Typography, Stack, Button } from "@mui/material";
import BodyPart from "../assets/icons/body-part.png";
import Target from "../assets/icons/target.png";
import Equipment from "../assets/icons/equipment.png";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment, id } = exerciseDetail;
  const extraDetail = [
    {
      icon: BodyPart,
      name: bodyPart,
    },
    {
      icon: Target,
      name: target,
    },
    {
      icon: Equipment,
      name: equipment,
    },
  ];

  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
      key={id}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography
          variant="h3"
          sx={{
            fontSize: { lg: "45px", xs: "25px" },
            textTransform: "capitalize",
            fontWeight: "500px",
          }}
        >
          {name}
        </Typography>
        <Typography variant="h6">
          Exercises keep you strong. {name} is one of the best exercises to
          target your {target}. It will help you improve your mood and gain
          energy.
        </Typography>
        {extraDetail.map((item, index) => {
          return (
            <Stack key={index} direction="row" gap="24px" alignItems="center">
              <Button
                sx={{
                  background: "fff2db",
                  borderRadius: "50%",
                  width: "100px",
                  height: "100px",
                }}
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  style={{ width: "50px", height: "50px" }}
                />
              </Button>
              <Typography variant="h5" textTransform="capitalize">
                {item.name}
              </Typography>
            </Stack>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default Detail;
