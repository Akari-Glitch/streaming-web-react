import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const styles = (theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(14),
    fontWeight: "bold",
  },
});
const summaryStyles = {
  root: {
    minHeight: 12 * 4,
    "&$expanded": {
      minHeight: 12 * 4,
      borderRadius: "2px 2px 0 0",
    },
    backgroundColor: "#3f69ff",
    color: "#ffffff",
    borderRadius: "2px 2px 0 0",
  },
  content: {
    margin: "0",
    "&$expanded": {
      margin: "0",
    },
  },
  expandIcon: {
    padding: 3,
    color: "#ffffff",
  },
  expanded: {},
};
const CompactAccordionSummary = withStyles(summaryStyles)(AccordionSummary);
CompactAccordionSummary.muiName = "AccordionSummary";

function SimpleExpansionPanel(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Accordion>
        <CompactAccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>
            INTRODUCCIÓN AL CURSO
          </Typography>
        </CompactAccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <CompactAccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>PRIMEROS PASOS</Typography>
        </CompactAccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <CompactAccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>PRÓXIMAMENTE</Typography>
        </CompactAccordionSummary>
      </Accordion>
    </div>
  );
}

SimpleExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleExpansionPanel);
