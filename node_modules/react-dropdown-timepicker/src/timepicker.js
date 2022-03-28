import React, { Component } from 'react'
import PropTypes from 'prop-types'

import css from './timepicker.css'

import padStart from 'lodash.padstart'

function TimeGridCell(props) {
  let minstr = padStart(props.minute.toString(), 2, "0");
  return (
    <div className={"timegrid__min timegrid__min"+minstr+(props.selected?" timegrid__min-selected":" timegrid__min-unselected")}
      onClick={props.onClick}>{":"+minstr}</div>
  )
}

function formatTime12(time) {
  let meridiem = time.hour < 12 ? "am" : "pm"
  let hour = time.hour > 12 ? time.hour - 12 : time.hour
  hour = hour || 12;
  return hour.toString() + ":" + padStart(time.minute.toString(), 2, "0") + meridiem;
}

function formatTime24(time) {
  return time.hour.toString() + ":" + padStart(time.minute.toString(), 2, "0");
}

class TimeGrid extends Component {
    render() {
      return(
        <div className="timegrid__container">
          {this.renderTimeGridColumn("am")}
          {this.renderTimeGridColumn("pm")}
        </div>
      )
    }

    // meridiem argument should be "am" or "pm"
    renderTimeGridColumn(meridiem) {
      return (
        <div className={"timegrid__"+meridiem+"col"}>
          <div className="timegrid__colheader">{meridiem.toUpperCase()}</div>
          {this.renderTimeGridHours(meridiem)}
        </div>
      )
    }

    handleClickTimeCell(t, src, event) {
      this.props.onChange(t);
    }

    renderTimeGridHours(meridiem) {
      const selHour = this.props.selectedTime && this.props.selectedTime.hour;
      const selMin = this.props.selectedTime && this.props.selectedTime.minute;
      let hours = [];
      const hourBase = meridiem === "pm" ? 12 : 0;
      for (let i = 0; i < 12; ++i) {
          let h = i || 12;
          let h24 = i + hourBase;
          let hstr = padStart(h24.toString(), 2, "0");
          hours.push(
            <div key={h} className={"timegrid__hour timegrid__hour"+hstr}>
              <div className={"timegrid__hourtext" + (selHour===h24?" timegrid__hourtext-selected":" timegrid__hourtext-unselected")}
                onClick={this.handleClickTimeCell.bind(this,{h24,m:0})}>{h}:00</div>
              <div className="timegrid__minutes">
                <TimeGridCell hour={h} minute={0} selected={selHour===h24&&selMin===0} onClick={this.handleClickTimeCell.bind(this,{h24,m:0})} />
                <TimeGridCell hour={h} minute={15} selected={selHour===h24&&selMin===15} onClick={this.handleClickTimeCell.bind(this,{h24,m:15})} />
                <TimeGridCell hour={h} minute={30} selected={selHour===h24&&selMin===30} onClick={this.handleClickTimeCell.bind(this,{h24,m:30})} />
                <TimeGridCell hour={h} minute={45} selected={selHour===h24&&selMin===45} onClick={this.handleClickTimeCell.bind(this,{h24,m:45})} />
              </div>
            </div>
          )
      }
      return hours;
    }
}

TimeGrid.PropTypes = {
    selectedTime: PropTypes.any,
    onChange: PropTypes.func
}

export default class TimePicker extends Component {
    constructor(props) {
        super(props)
        if (props.time instanceof Date) {
          var t = {
            hour: props.time.getHours(),
            minute: props.time.getMinutes()
          };
        } else if (props.time instanceof Object) {
          var t = props.time;
        } else {
          var t = {
            hour: 12,
            minute: 0
          }
        }
        this.state = {
          isOpen: false,
          time: t,
          raw: ""
        }
        this.showDropdown = this.showDropdown.bind(this);
        this.hideDropdown = this.hideDropdown.bind(this);
        this.toggleDropdown = this.toggleDropdown.bind(this);
    }

    showDropdown() {
        this.setState({ isOpen: true });
        document.addEventListener("click", this.hideDropdown);
    }

    hideDropdown() {
        this.setState({ isOpen: false });
        document.removeEventListener("click", this.hideDropdown);
    }

    toggleDropdown() {
        if (this.state.isOpen) {
            this.hideDropdown();
        } else {
            this.showDropdown();
        }
    }

    handleTimeGridChange(t) {
      this.setState({time:{hour:t.h24,minute:t.m}})
      if (this.props.onChange) {
          this.props.onChange({hour:t.h24,minute:t.m});
      }
    }

    handleInputChange(e) {
      let parsed = TimePicker.parseTimeString(e.target.value)
      this.setState({
        raw: e.target.value,
        time: parsed
      })
      if (parsed && this.props.onChange) {
        this.props.onChange(parsed);
      }
    }

    render() {
        if (typeof this.props.displayFormat === "function") {
          var formatter = this.props.displayFormat;
        } else {
          var formatter = this.props.displayFormat === "12-hour" ? formatTime12 : formatTime24;
        }
        let timeStr = this.state.time ? formatter(this.state.time) : this.state.raw;
        return (
            <div className={"timepicker__container" + (this.state.isOpen ? " timepicker__container__open" : " timepicker__container__closed")}>
                <div className="timepicker__display" onClick={this.toggleDropdown}>
                    <input type="text" value={timeStr} onChange={this.handleInputChange.bind(this)}></input>
                    <i className="fa fa-clock-o"></i>
                </div>
                <div className="timepicker__droplist">
                  <TimeGrid selectedTime={this.state.time} onChange={this.handleTimeGridChange.bind(this)} />
                </div>
            </div>
        )
    }
}

function hour24(hour12, meridiem) {
  if (meridiem === 'pm' && hour12 !== 12) {
    return hour12 + 12
  } else if (meridiem === 'am' && hour12 === 12) {
    return 0
  } else {
    return hour12
  }
}

TimePicker.parseTimeString = function(ts) {
  let m = ts.match(/^(\d{1,2})(?::(\d{2}))?\s*(a|am|p|pm)?$/)
  if (m) {
    let hstr = m[1]
    let mstr = m[2]
    let meridiem = m[3]
    if (meridiem === 'a') meridiem = 'am';
    if (meridiem === 'p') meridiem = 'pm';
    if (hstr && (mstr || meridiem)) {
      let hour = hour24(Number(hstr), meridiem)
      let minute = typeof mstr !== 'undefined' ? Number(mstr) : 0
      return {
        hour,
        minute
      }
    }
  }
  return null
}

TimePicker.PropTypes = {
    time: PropTypes.any,
    displayFormat: PropTypes.any,
    onChange: PropTypes.func
}
