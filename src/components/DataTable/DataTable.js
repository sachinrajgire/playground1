import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Url from "../Url/Url";
import { formattedDate } from "../../helpers/timeanddateHelpers";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import moment from "moment";

import { Badge } from "reactstrap";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#ffd51e",
    color: "black",
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 900,
  },
});

export default function CustomizedTables({ data }) {
  console.log(data, "data");
  const classes = useStyles();
  const history = useHistory();

  return (
    <>
      <div
        style={{
          height: "40px",
          marginTop: "10px",
          marginLeft: "5px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <InsertDriveFileIcon />
        <span style={{ margin: "5px", fontWeight: "600" }}>
          {" "}
          {`Found ${data.length} records`}
        </span>
      </div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Employer</StyledTableCell>
              <StyledTableCell align="right">Job Title</StyledTableCell>
              <StyledTableCell align="right">Job Start Date</StyledTableCell>
              <StyledTableCell align="right">University Name</StyledTableCell>
              <StyledTableCell align="right">Graduation Date</StyledTableCell>
              <StyledTableCell align="right">Specialization</StyledTableCell>
              <StyledTableCell align="right">Career Link</StyledTableCell>
              <StyledTableCell align="right">Edit</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data &&
              data.map((row) => (
                <StyledTableRow key={row._id}>
                  <StyledTableCell component="th" scope="row">
                    {row.company.companyName}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.jobTitle}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {formattedDate(row.jobStartDate).format1}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.universityName}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {formattedDate(row.graduationDate).format1}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.specialization}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <a href={`${row.company.careerUrl}`} target="_blank">
                      Apply
                    </a>
                  </StyledTableCell>
                  <StyledTableCell
                    align="right"
                    onClick={() => history.push(`/editrecord/${row._id}`)}
                  >
                    <Url>Edit</Url>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div
        style={{
          height: "40px",
          marginLeft: "5px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <InsertDriveFileIcon />
        <span style={{ margin: "5px", fontWeight: "600" }}>
          {" "}
          {`Found ${data.length} records`}
        </span>
      </div>
    </>
  );
}
