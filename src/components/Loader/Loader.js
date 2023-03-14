import { LoaderDiv } from "./Loader.styled";
import { Vortex } from "react-loader-spinner";

export const Loader = () => {
    return(
    <LoaderDiv>
        <Vortex height="220"  width="220" />
    </LoaderDiv>
)}

