import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { exerciseOptions, fetchData, youtubeOptions } from "../utils/fetchData";
import { SimilarExercises, ExerciseVideos, Detail } from "../components";

const ExcerciseDetail = () => {
  const { id } = useParams();
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideo, setExerciseVideo] = useState([]);
  const [exerciseTarget, setExerciseTarget] = useState([]);
  const [exerciseEquipment, setExerciseEquipment] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youTubeUrl = "https://youtube-search-and-download.p.rapidapi.com";

      //Get single id
      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );
      setExerciseDetail(exerciseDetailData);

      //Search youtube video
      const exerciseVideoData = await fetchData(
        `${youTubeUrl}/search?query=${exerciseDetailData.name}`,
        youtubeOptions
      );
      setExerciseVideo(exerciseVideoData);

      //filter by target
      const targetMuscleExerciseData = await fetchData(
        `${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,
        exerciseOptions
      );
      setExerciseTarget(targetMuscleExerciseData);

      //filter by equipment
      const equipmentExerciseData = await fetchData(
        `${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
        exerciseOptions
      );

      setExerciseEquipment(equipmentExerciseData);
    };
    fetchExercisesData();
  }, [id]);

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos
        exerciseVideo={exerciseVideo}
        name={exerciseDetail.name}
      />
      <SimilarExercises
        exerciseTarget={exerciseTarget}
        exerciseEquipment={exerciseEquipment}
      />
    </Box>
  );
};

export default ExcerciseDetail;
