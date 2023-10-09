import { useState } from "react";
import Stack from "@mui/material/stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { Typography } from "@mui/material";

function BasicButtons() {
  const [inputValue, setInputValue] = useState("");
  const [title, setTitle] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const handleButtonClick = () => {
    setTitle(inputValue);
  };

  return (
    <div>
      <Typography component="h1" variant="h2">
        {title}
      </Typography>
      <Stack spacing={2} direction="row">
        <TextField
          label="Enter text"
          variant="outlined"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={{ backgroundColor: "lightblue" }}
        />
        <Button variant="contained" color="primary" onClick={handleButtonClick}>
          the Title
        </Button>
      </Stack>

      <div>
        <Typography component="h3" variant="h4">
          Checkbox
        </Typography>
        <Checkbox
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
          sx={{ color: "green" }}
        />
        <label>Checkbox</label>
      </div>

      <div>
        <Typography component="h3" variant="h4">
          Radio
        </Typography>
        <RadioGroup
          value={radioValue}
          onChange={(e) => setRadioValue(e.target.value)}
        >
          <FormControlLabel
            value="option1"
            control={<Radio sx={{ width: "45px", height: "45px" }} />}
            label="Option 1"
          />
          <FormControlLabel
            value="option2"
            control={<Radio sx={{ width: "45px", height: "45px" }} />}
            label="Option 2"
          />
        </RadioGroup>
      </div>

      <div>
        <Typography component="h3" variant="h4">
          Select
        </Typography>
        <FormControl
          variant="outlined"
          style={{ backgroundColor: "lightyellow" }}
        >
          <InputLabel>Select option</InputLabel>
          <Select
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            style={{ backgroundColor: "lightyellow" }}
            label="Select an option"
          >
            <MenuItem value="option1">Option 1</MenuItem>
            <MenuItem value="option2">Option 2</MenuItem>
            <MenuItem value="option3">Option 3</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default BasicButtons;
