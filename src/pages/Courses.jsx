import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCourses } from "../redux/slices/CourseSlice";

export const Courses = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    loadAllCourses();
  }, []);

  const loadAllCourses = async () => {
    console.log("Entering coursese");

    await dispatch(getAllCourses());
  };
  return (
    <>
      <h2>Hello World</h2>
    </>
  );
};
