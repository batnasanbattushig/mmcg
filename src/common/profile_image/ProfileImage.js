import {
    React, useState, createRef
} from 'react'
import Dropzone from 'react-dropzone'
import ReactAvatarEditor from 'react-avatar-editor'


const ProfileImage = () => {
    const [image, setImage] = useState(
        'https://intranet.unimedia.mn/images/profile-photos/UMS0001.jpg'
      )
    const [scale, setScale] = useState(1.2)
      

      const handleDrop = (dropped) => {
        setImage(dropped[0])
      }
      const handleScale = e => {
        setScale(parseFloat(e.target.value))
      }



    const dropzoneRef = createRef();
    const openDialog = () => {
      // Note that the ref is set async,
      // so it might be null at some point 
      if (dropzoneRef.current) {
        dropzoneRef.current.open()
      }
    };



    return (
        <div>
        <Dropzone
        ref={dropzoneRef}
        onDrop={handleDrop}
        noClick={openDialog}
        noKeyboard
        style={{ width: '250px', height: '250px' }}
      >
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()}>
            <ReactAvatarEditor width={250} height={250} image={image} borderRadius={150} scale={scale} />
            <input {...getInputProps()} />
          </div>
        )}
      </Dropzone>

      <input
          name="scale"
          type="range"
          class="form-range"
          onChange={handleScale}
          // min={this.state.allowZoomOut ? '0.1' : '1'}
          max="2"
          step="0.01"
          defaultValue="1"
        />
                </div>

    )
}

export default ProfileImage
