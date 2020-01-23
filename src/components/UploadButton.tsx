import React from 'react';
import Button from '@material-ui/core/Button';

interface UploadButtonProps {
  onUpload: (file: any) => void;
}

const UploadButton: React.FC<UploadButtonProps> = ({ onUpload }) => {
  return (
    <div>
      <input
        style={{ display: 'None' }}
        id="contained-button-file"
        type="file"
        onChange={(event: any) => onUpload(event.target.files[0])}
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span">
          Upload Relay Spec
        </Button>
      </label>
    </div>
  );
};

export default UploadButton;
