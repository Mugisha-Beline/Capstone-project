// src/components/Courses/CourseDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCourseDetail } from './utils/api';
import './CourseDetail.css';

const CourseDetail = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    getCourseDetail(courseId).then(data => setCourse(data.course));
  }, [courseId]);

  if (!course) return <p>Loading course details...</p>;

  return (
    <div className="course-detail-page">
      <img src={course.image} alt={course.title} className="course-image" />
      <h1>{course.title}</h1>
      <p>{course.description}</p>
      {/* Optionally display course lessons, progress, etc. */}
    </div>
  );
};

export default CourseDetail;
