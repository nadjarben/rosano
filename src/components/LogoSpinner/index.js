import React from "react";
import logo from "../../assets/logo-white.jpeg"
import { Wrapper, LogoStyled} from "./style"

const LogoSpinner = (props) => {
    return (
        <Wrapper>
           <LogoStyled src={logo} alt="rosano market" />
        </Wrapper>
    )
}

export default LogoSpinner
