// react-router-dom components
import { Link } from "react-router-dom";
import { useState } from "react";
// @mui material components
import { Card, Grid, AppBar, Tabs, Tab, Icon } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/bg-sign-up-cover.jpeg";

function Cover() {
  const [tabValue, setTabValue] = useState(0);
  const handleSetTabValue = (event, newValue) => setTabValue(newValue);

  return (
    <CoverLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          p={3}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Login
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={4} px={4}>
          <MDBox component="form" role="form">
            <AppBar position="static">
              <Tabs
                textColor="info"
                orientation={"horizontal"}
                value={tabValue}
                onChange={handleSetTabValue}
              >
                <Tab
                  label="STUDENT"
                  icon={
                    <Icon
                      fontSize="small"
                      style={{ fontSize: "100px" }}
                      sx={{ mt: -0.25 }}
                    >
                      school_icon
                    </Icon>
                  }
                  sx={{
                    fontSize: "10px",
                    fontWeight: "bold",
                  }}
                />
                <Tab
                  label="ALUMNI"
                  icon={
                    <Icon fontSize="small" sx={{ mt: -0.25 }}>
                      engineering_icon
                    </Icon>
                  }
                  sx={{
                    fontSize: "10px",
                    fontWeight: "bold",
                  }}
                />
                <Tab
                  label="STAFF"
                  icon={
                    <Icon fontSize="small" sx={{ mt: -0.25 }}>
                      psychology_outlined_icon
                    </Icon>
                  }
                  sx={{
                    fontSize: "10px",
                    fontWeight: "bold",
                    padding: "5px",
                  }}
                />
              </Tabs>
            </AppBar>

            <MDBox mt={2} mb={2}>
              <MDInput
                type="email"
                label="Email"
                variant="standard"
                fullWidth
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="password"
                label="Password"
                variant="standard"
                fullWidth
              />
            </MDBox>

            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" fullWidth>
                sign in
              </MDButton>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </CoverLayout>
  );
}

export default Cover;
