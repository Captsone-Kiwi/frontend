import React from 'react';
import { render, mount } from 'enzyme';

import padStart from 'lodash.padstart'

import TimePicker from '../src/timepicker';

describe("TimePicker component", ()=>{

  describe("initialization", ()=>{
    test("default value is 12", () => {
      const tp = render(<TimePicker />);
      expect(tp.find(".timepicker__display input").prop("value")).toEqual("12:00");
    })

    test("can handle a Date object input", () => {
      const t = new Date(2000,1,1,3,32,0);
      const tp = render(<TimePicker time={t} />);
      expect(tp.find(".timepicker__display input").prop("value")).toEqual("3:32");
    })

    test("can handle a simple object input", () => {
      const t = {hour:4,minute:44};
      const tp = render(<TimePicker time={t} />);
      expect(tp.find(".timepicker__display input").prop("value")).toEqual("4:44");
    })
  })

  describe("selection", ()=>{
    for (let h = 0; h < 24; ++h) {
      let hstr = padStart(h.toString(), 2, "0")
      let hselector = ".timegrid__hour"+hstr+" .timegrid__hourtext"

      test("clicking hour "+hstr+" displays "+hstr+":00", () => {
        const tp = mount(<TimePicker />);
        tp.find(hselector).simulate("click");
        expect(tp.find(".timepicker__display input").prop("value")).toEqual(h.toString()+":00");
      })

      test("clicking hour "+hstr+" calls onChange", () => {
        let mockCallback = jest.fn();
        const tp = mount(<TimePicker onChange={mockCallback} />);
        tp.find(hselector).simulate("click");
        expect(mockCallback.mock.calls.length).toBe(1);
        expect(mockCallback.mock.calls[0][0]).toEqual({
          hour: h,
          minute: 0
        });
      })

      for (let m of [0, 15, 30, 45]) {
        let mstr = padStart(m.toString(), 2, "0")
        let hmstr = h.toString()+":"+mstr;

        test("clicking "+hmstr+" displays that hour:minute", () => {
          const tp = mount(<TimePicker />);
          tp.find(".timegrid__hour"+hstr+" .timegrid__min"+mstr).simulate("click");
          expect(tp.find(".timepicker__display input").prop("value")).toEqual(hmstr);
        })

        test("clicking "+hmstr+" calls onChange", () => {
          let mockCallback = jest.fn();
          const tp = mount(<TimePicker onChange={mockCallback} />);
          tp.find(".timegrid__hour"+hstr+" .timegrid__min"+mstr).simulate("click");
          expect(mockCallback.mock.calls.length).toBe(1);
          expect(mockCallback.mock.calls[0][0]).toEqual({
            hour: h,
            minute: m
          });
        })
      }
    }

  })

  describe("parseTimeString function", () => {
    const testMinutes = [0, 15, 30, 45]
    for (let h = 0; h < 24; ++h) {
      let hstr = padStart(h.toString(), 2, "0")
      for (let m of testMinutes) {
        let mstr = padStart(m.toString(), 2, "0")

        let hmColonSep = hstr+":"+mstr;
        test("parses "+hmColonSep, ()=>{
          let result = TimePicker.parseTimeString(hmColonSep);
          expect(result).toEqual({hour:h,minute:m});
        })
      }
    }

    for (let h = 0; h < 12; ++h) {
      let h12 = h || 12;
      test("parses "+h12.toString()+"am", ()=>{
        let result = TimePicker.parseTimeString(h12.toString()+"am");
        expect(result).toEqual({hour:h,minute:0});
      })

      test("parses "+h12.toString()+" a", ()=>{
        let result = TimePicker.parseTimeString(h12.toString()+" a");
        expect(result).toEqual({hour:h,minute:0});
      })

      test("parses "+h12.toString()+":00am", ()=>{
        let result = TimePicker.parseTimeString(h12.toString()+":00am");
        expect(result).toEqual({hour:h,minute:0});
      })

      test("parses "+h12.toString()+":00a", ()=>{
        let result = TimePicker.parseTimeString(h12.toString()+":00a");
        expect(result).toEqual({hour:h,minute:0});
      })

      test("parses "+h12.toString()+"pm", ()=>{
        let result = TimePicker.parseTimeString(h12.toString()+"pm");
        expect(result).toEqual({hour:h+12,minute:0});
      })

      test("parses "+h12.toString()+" p", ()=>{
        let result = TimePicker.parseTimeString(h12.toString()+" p");
        expect(result).toEqual({hour:h+12,minute:0});
      })

      test("parses "+h12.toString()+":00pm", ()=>{
        let result = TimePicker.parseTimeString(h12.toString()+":00pm");
        expect(result).toEqual({hour:h+12,minute:0});
      })

      test("parses "+h12.toString()+":00p", ()=>{
        let result = TimePicker.parseTimeString(h12.toString()+":00p");
        expect(result).toEqual({hour:h+12,minute:0});
      })
    }

    for (let h = 0; h < 10; ++h) {
      test("rejects single-digit "+h.toString(), ()=> {
        let result = TimePicker.parseTimeString(h.toString());
        expect(result).toBeNull();
      })

      test("rejects partial "+h.toString()+":", ()=> {
        let result = TimePicker.parseTimeString(h.toString()+":");
        expect(result).toBeNull();
      })
    }

    for (let h = 0; h < 24; ++h) {
      let hstr = padStart(h.toString(), 2, "0")

      test("rejects two-digit "+hstr, ()=>{
        let result = TimePicker.parseTimeString(hstr);
        expect(result).toBeNull();
      })

      test("rejects partial "+hstr+":", ()=>{
        let result = TimePicker.parseTimeString(hstr+":");
        expect(result).toBeNull();
      })
    }

    // Bug:
    // 1) Start with 8:00am
    // 2) To change to 8:00pm, type a 'p' before the 'a', resulting in 8:00pam
    // 3) Before you can delete the 'a', the time becomes 8:NaN
    test("rejects extra text between time and am/pm", ()=>{
      let result = TimePicker.parseTimeString("8:00pam");
      expect(result).toBeNull();
    })
  })

  describe("text input", ()=>{

    test("typing a 24-hour time value initiates a change", () => {
      const tp = mount(<TimePicker />);
      tp.find('input').simulate('change', { target: { value: '14:34' } });
      expect(tp.state("time")).toEqual({
        hour: 14,
        minute: 34
      })
    })

    test("calls onChange when time is fully specified", ()=>{
      let mockCallback = jest.fn();
      const tp = mount(<TimePicker onChange={mockCallback} />);
      tp.find('input').simulate('change', { target: { value: '14:34' } });
      expect(mockCallback).toBeCalled();
    })

    test("does not call onChange when time is partially entered", ()=>{
      let mockCallback = jest.fn();
      const tp = mount(<TimePicker onChange={mockCallback} />);
      tp.find('input').simulate('change', { target: { value: '12' } });
      expect(mockCallback).not.toBeCalled();
    })

  })

  describe("display", ()=>{
    test("shows 12-hour format", ()=>{
      const tp = render(<TimePicker time={{hour:22,minute:45}} displayFormat="12-hour" />);
      expect(tp.find(".timepicker__display input").prop("value")).toEqual("10:45pm");
    })

    test("shows midnight in 12-hour format", ()=>{
      const tp = render(<TimePicker time={{hour:0,minute:0}} displayFormat="12-hour" />);
      expect(tp.find(".timepicker__display input").prop("value")).toEqual("12:00am");
    })

    test("shows noon in 12-hour format", ()=>{
      const tp = render(<TimePicker time={{hour:12,minute:0}} displayFormat="12-hour" />);
      expect(tp.find(".timepicker__display input").prop("value")).toEqual("12:00pm");
    })

    test("shows 24-hour format", ()=>{
      const tp = render(<TimePicker time={{hour:22,minute:45}} displayFormat="24-hour" />);
      expect(tp.find(".timepicker__display input").prop("value")).toEqual("22:45");
    })

    test("shows custom format", ()=>{
      let customFormat = (time) => {
        return time.hour + " o'clock"
      }
      const tp = render(<TimePicker time={{hour:6,minute:45}} displayFormat={customFormat} />);
      expect(tp.find(".timepicker__display input").prop("value")).toEqual("6 o'clock");
    })
  })

})
