import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import { useState,useEffect } from "react";

// Billing page components
import ProgramList from "layouts/program/components/ProgramList";
import ProgramAddModal from "layouts/program/components/ProgramAddModel";
function ProgramInformation() {
  const [modal,setModal]=useState(false);
  const [programData, setProgramData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5001/programData`);
        const result = await response.json();
        setProgramData(result);
      } catch (error) {
        console.error("Error fetching test data:", error);
      }
    };
    fetchData();
  }, []);
  const onChangeModal=(val)=>{
    setModal(val);
  }
  return (
<>
    <Card id="delete-account">
      <MDBox pt={3} px={2} display="flex" justifyContent="space-between">
        <MDTypography variant="h6" fontWeight="medium">
          Alumini Interaction Program
        </MDTypography>
        <MDButton color="info" onClick={()=>{setModal(true)}}> + ADD PROGRAM</MDButton>
      </MDBox>
      <MDBox pt={1} pb={2} px={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          {programData.map((data, index) => (
            <ProgramList
              key={index}
              title={data.title}
              alumni_name={data.alumni_name}
              venue={data.venue}
              date={data.date}
              time={data.time}

            />
          ))}
        </MDBox>
      </MDBox>
    </Card>
    {
      modal&&(<ProgramAddModal handleModal={onChangeModal}/>)
    }</>
  );
}

export default ProgramInformation;
