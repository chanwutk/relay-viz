import React from 'react';
import visualize from './Visualizer';

interface RelayVizProps {
  graphData: any[];
}

class RelayViz extends React.Component<RelayVizProps> {
  componentDidMount = () => visualize(this.props.graphData);
  componentDidUpdate = () => visualize(this.props.graphData);
  render = () => <div className="viz" />;
}

export default RelayViz;
