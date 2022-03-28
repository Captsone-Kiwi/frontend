# React Drop-down Time Picker
Time picker for ReactJS based on the [Cozi Calendar](https://www.cozi.com/calendar) time picker. [See the demo](https://dpalma.github.io/react-dropdown-timepicker/).

[![Build Status](https://travis-ci.org/dpalma/react-dropdown-timepicker.svg?branch=master)](https://travis-ci.org/dpalma/react-dropdown-timepicker)

## Installation

```shell
$ npm install --save react-dropdown-timepicker
```

## Usage

```javascript
import TimePicker from 'react-dropdown-timepicker';

render() {
	<TimePicker
		time={this.state.time}
		onChange={this.handleTimeChange.bind(this)} />
}
```
