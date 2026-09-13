import { Stack, Container } from "@mui/material";
import { NextPage } from "next";
import withLayoutBasic from "@/libs/components/layout/LayoutBasic"; 

const PropertyList = () => {
     return (
     <div style= {{margin: "20px 0"}}>
        <Stack className="container">PROPERTY LIST</Stack>
        </div>
     );
};

export default withLayoutBasic (PropertyList);