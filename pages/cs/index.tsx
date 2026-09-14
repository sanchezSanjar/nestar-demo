import { NextPage } from "next";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";
import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { Stack } from "@mui/material";

const CS: NextPage = () => {
    const device = useDeviceDetect();

  if (device == "mobile") {
    return <Stack>CS MOBILE</Stack>;
  } else {
    return (
      <div style={{ margin: "20px 0" }}>
        <Stack className="container">CS</Stack>
      </div>
    );
  }
};

export default withLayoutBasic (CS);