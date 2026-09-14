import { Stack, Container } from "@mui/material";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";
import withLayoutBasic from "@/libs/components/layout/LayoutBasic";

const PropertyDetail = () => {
     const device = useDeviceDetect();

  if (device == "mobile") {
    return <Stack>PROPERTY DETAIL MOBILE</Stack>;
  } else {
    return <Container>PROPERTY DETAIL</Container>;
  }
};

export default withLayoutBasic(PropertyDetail);