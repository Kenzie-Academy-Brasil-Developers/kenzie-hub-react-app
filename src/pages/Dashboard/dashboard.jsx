import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StyledContainerDashboard } from "../../Styles/Container";
import { StyledHeaderDashboard } from "../../Styles/Header";
import { StyledTitle } from "../../Styles/typography";
import { StyledDivMaintenance } from "./divMaintenance";

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

      <StyledDivMaintenance>
        <div>
          <StyledTitle tag={'h3'}>Olá, {userData?.user.name}</StyledTitle>
          <small>{userData?.user.course_module}</small>
        </div>

        <div>
          <StyledTitle tag={'h3'}>Que pena! Estamos em desenvolvimento :(</StyledTitle>  
          <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
        </div>
      </StyledDivMaintenance>
    </StyledContainerDashboard>
  )
}