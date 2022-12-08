import { useContext } from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { AddTechModal } from "../../modals/AddTech/AddTech";
import { StyledContainerDashboard } from "../../Styles/Container";
import { StyledHeaderDashboard } from "../../Styles/Header";
import { StyledTitle } from "../../Styles/typography";
import { StyledDivProfileInfo } from "./StyledDivProfileInfo";
import { SectionTechnologies } from "./Technologies/Technologies";

export function Dashboard() {
  const { userData, getUserProfile } = useContext(UserContext)
  const navigate = useNavigate()
  
  useEffect(() => {
    
    if (!localStorage.getItem('userData')) {
      navigate('/')
    }

  }, [])

  return (
    <>
      <StyledContainerDashboard>
        <StyledHeaderDashboard flex={true}>
          <StyledTitle tag={'h1'}>Kenzie Hub</StyledTitle>
          <Link to={'/'} onClick={() => {localStorage.removeItem('userData')}}>Sair</Link>
        </StyledHeaderDashboard>

        <StyledDivProfileInfo>
          <StyledTitle tag={'h2'}>Olá, {userData?.name}</StyledTitle>
          <small>{userData?.course_module}</small>
        </StyledDivProfileInfo>

        <SectionTechnologies/>
      </StyledContainerDashboard>
    </>
  )
}