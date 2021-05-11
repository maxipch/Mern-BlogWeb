import React from 'react';
import MainBanner from "../components/Web/MainBanner";
import HomeCourses from "../components/Web/HomeCourses";
import HowMyCoursesWorks from "../components/Web/HowMyCoursesWorks";
import ReviewCourses from "../components/Web/ReviewsCourses";

export default function Home(){
    return (
        <>
            <MainBanner/>
            <HomeCourses/>
            <HowMyCoursesWorks/>
            <ReviewCourses/>
        </>
    );
} 