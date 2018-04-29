import React from 'react';
import moment from 'moment';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

export default class SingleDateFilter extends React.Component {

  static defaultProps = {
    format: 'DD-MM-YYYY',
    selected: moment()
  };

  render = () => {

    const startDate = moment(this.props.selected).format(this.props.format);
    return (
      <div className="cms-date-picker-wrapper">
        <DayPickerInput
          classNames={{
            container: 'cms-date-picker',
            overlayWrapper: 'cms-overlay-wrapper',
            overlay: 'cms-overlay',
          }}
          formatDate={date => moment(date).format(this.props.format)}
          format={this.props.format}
          placeholder={`format: ${this.props.format}`}
          value={startDate}
          onDayChange={(date) => {
            this.props.callback(date);
          }}
        />
      </div>
    );
  }
}
