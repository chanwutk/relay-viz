import React from 'react';

interface RelayVizProps {
  graphData: any[];
}

class RelayViz extends React.Component<RelayVizProps> {
  componentDidMount() {}
  componentDidUpdate(prevProps: RelayVizProps) {}
  render() {
    return <div className="viz" />;
  }
}

export default RelayViz;
