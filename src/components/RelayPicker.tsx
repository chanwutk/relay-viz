import React from 'react';
import { Fab } from '@material-ui/core';
import { ArrowLeft, ArrowRight } from '@material-ui/icons';
import RelayViz from './RelayViz';

const pickerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
};

const buttonStyle = { margin: 20 };

interface RelayPickerProps {
  graphData: any[];
}

interface RelayPickerState {
  idx: number;
}

class RelayPicker extends React.Component<RelayPickerProps, RelayPickerState> {
  constructor(props: RelayPickerProps) {
    super(props);
    this.state = { idx: 0 };
  }

  updateIdxFactory = (update: number) => {
    return () => {
      const idx = this.state.idx + update;
      if (0 <= idx && idx < this.props.graphData.length) {
        this.setState({ idx });
      }
    };
  };

  render() {
    return (
      <div style={pickerStyle}>
        <Fab
          disabled={this.state.idx <= 0}
          onClick={this.updateIdxFactory(-1)}
          style={buttonStyle}
        >
          <ArrowLeft />
        </Fab>
        <div>{this.state.idx}</div>
        <RelayViz graphData={this.props.graphData[this.state.idx]} />
        <Fab
          disabled={this.state.idx >= this.props.graphData.length - 1}
          onClick={this.updateIdxFactory(1)}
          style={buttonStyle}
        >
          <ArrowRight />
        </Fab>
      </div>
    );
  }
}

export default RelayPicker;
