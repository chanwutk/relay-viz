import React from 'react';
import { vizEnter, vizUpdate } from './Visualizer';

interface RelayVizProps {
  graphData: any[];
}

class RelayViz extends React.Component<RelayVizProps> {
  componentDidMount = () => vizEnter("viz", this.props.graphData);
  componentDidUpdate = () => vizUpdate("viz", this.props.graphData);
  render = () => <div className="viz" />;
}

export default RelayViz;
