import React from "react";
import { useState } from "react";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import MDButton from "components/MDButton";

const ProgramModel = ({ handleModal }) => {
  const handleModalChange = () => {
    handleModal();
  };
  return (
    <div>
      <Dialog
        open={true}
        onClose={() => handleModalChange(false)}
        sx={{ "& .MuiDialog-paper": { height: "600px" } }}
      >
        <DialogTitle>Add Program</DialogTitle>

        <form>
          <DialogContent>
            <DialogContentText>
              <Box
                sx={{
                  "& .MuiTextField-root": {
                    m: 1,
                    width: "55ch",
                  },
                }}
              >
                <TextField
                  name="name"
                  id="outlined-required"
                  label="Name"
                  variant="outlined"
                />
                <TextField name="description" label="Description" multiline />

                <TextField
                  id="outlined-required"
                  name="domain"
                  label="Domain name"
                />
                <TextField
                  id="outlined-required"
                  name="phone"
                  label="Contact Number"
                />
                <TextField id="outlined-required" label="Email" name="email" />
                <TextField
                  id="outlined-required"
                  label="Experience"
                  name="experience"
                />
              </Box>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <MDButton type="submit" size="small" color="success" autoFocus>
              Save
            </MDButton>
            <MDButton
              onClick={() => handleModalChange(false)}
              size="small"
              color="error"
            >
              close
            </MDButton>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

export default ProgramModel;
