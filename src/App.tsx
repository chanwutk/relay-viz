import React from 'react';
import UploadButton from './components/UploadButton';
import './App.css';
import RelayPicker from './components/RelayPicker';

interface AppStates {
  graphData: any[]; // TODO: make type for graph
}

class App extends React.Component<{}, AppStates> {
  constructor(props: {}) {
    super(props);
    this.state = { graphData: [] };
  }

  onUpload = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const content = String(reader.result);
      this.setState({ graphData: JSON.parse(content) });
    };
    reader.readAsText(file);
  };

  render() {
    return (
      <div className="App">
        <h1>Relay Visualizer</h1>
        <UploadButton onUpload={this.onUpload} />
        <RelayPicker graphData={[2, 34, 4]} />
      </div>
    );
  }
}

export default App;
