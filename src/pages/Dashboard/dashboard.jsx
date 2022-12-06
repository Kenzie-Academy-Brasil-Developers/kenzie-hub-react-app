import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StyledContainerDashboard } from "../../Styles/Container";
import { StyledHeaderDashboard } from "../../Styles/Header";
import { StyledTitle } from "../../Styles/typography";
import { StyledDivProfileInfo } from "./StyledDivProfileInfo";
import { SectionTechnologies } from "./Technologies/Technologies";

export function Dashboard() {
  const navigate = useNavigate()

  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('userData')))

  useEffect(() => {
    if (!localStorage.getItem('userData')) {
      navigate('/')
    }

  }, [])
  

  return (
    <StyledContainerDashboard>
      <StyledHeaderDashboard flex={true}>
        <StyledTitle tag={'h1'}>Kenzie Hub</StyledTitle>
        <Link to={'/'} onClick={() => {localStorage.removeItem('userData')}}>Sair</Link>
      </StyledHeaderDashboard>

      <StyledDivProfileInfo>
        <StyledTitle tag={'h2'}>Olá, {userData?.user.name}</StyledTitle>
        <small>{userData?.user.course_module}</small>
      </StyledDivProfileInfo>

      <SectionTechnologies/>
    </StyledContainerDashboard>
  )
}