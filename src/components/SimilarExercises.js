import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { HorizontalScrollbar, Loader } from "./index";

const SimilarExercises = ({ exerciseTarget, exerciseEquipment }) => {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0" } }} p="20px">
      <Typography
        variant="h3"
        mb={5}
        sx={{
          fontSize: { lg: "45px", xs: "25px" },
          textTransform: "capitalize",
          fontWeight: "500px",
        }}
      >
        Exercises that target the same muscle group
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }} mb={3}>
        {exerciseTarget.length ? (
          <HorizontalScrollbar data={exerciseTarget} />
        ) : (
          <Loader />
        )}
      </Stack>
      <Typography
        variant="h3"
        mb={5}
        sx={{
          fontSize: { lg: "45px", xs: "25px" },
          textTransform: "capitalize",
          fontWeight: "500px",
        }}
      >
        Exercises that use the same equipment
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {exerciseEquipment.length ? (
          <HorizontalScrollbar data={exerciseEquipment} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
