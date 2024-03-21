import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import Header from "layouts/profile/components/Header";

function Overview() {
  const [staffData, setStaffData] = useState([]);
  let [state, setState] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5001/staffData/54`);
        const result = await response.json();
        setStaffData(result);
      } catch (error) {
        console.error("Error fetching test data:", error);
      }
    };

    fetchData();
  }, [state]);

  function Renderprofile() {
    setState(!state);
  }

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={2} />
      <Header name={staffData[0]?.name} department={staffData[0]?.department}>
        <MDBox mt={5} mb={3}>
          <Grid container spacing={1}>
            <Grid item sx={{ display: "flex" }}>
              <Divider orientation="vertical" sx={{ ml: -2, mr: 1 }} />
              {staffData.length > 0 && (
                <ProfileInfoCard
                  renderProfile={Renderprofile}
                  title="profile information"
                  description={`${staffData[0].description}`}
                  info={{
                    fullName: `${staffData[0].name}`,
                    mobile: `${staffData[0].phone}`,
                    email: `${staffData[0].email}`,
                    Domain: `${staffData[0].domain}`,
                    Experience: `${staffData[0].experience}`,
                  }}
                  action={{
                    tooltip: "Edit Profile",
                  }}
                  shadow={false}
                />
              )}
            </Grid>
          </Grid>
        </MDBox>
      </Header>
      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
