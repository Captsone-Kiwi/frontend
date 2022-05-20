import styled from "styled-components";
import { Slider as Slider1 } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import MuiInput from "@mui/material/Input";

export const SliderBox = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const SizeSlider = withStyles({
  root: {
    color: "#3CB371",
    height: 8,
    width: "200px",
  },
  thumb: {
    height: 19,
    width: 19,
    backgroundColor: "white",
    border: "3px solid",
    marginTop: -7,
    marginLeft: -8,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
    "@media.wide": {
      backgroundColor: "rgba(12, 112, 12)",
    },
  },
  active: {},
  valueLabel: {
    left: "-50%",
  },
  track: {
    height: 7,
    borderRadius: 4,
  },
  rail: {
    height: 7,
    borderRadius: 4,
    color: "#d4d4d4",
    opacity: 1,
  },
  mark: {
    marginTop: 2,
    marginLeft: -1,
    height: 3,
    width: 1,
  },
})(Slider1);

export const Input = styled(MuiInput)`
  width: 40px;
  font-weight: semi-bold;
  padding-left: 5px;
  margin-right: -12px;
`;
