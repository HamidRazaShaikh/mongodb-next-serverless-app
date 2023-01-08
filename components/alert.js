import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AlertMessage (props) {
  let {error} = props;
 
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         {error === 'true' ? 'Error' : 'Success'}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      {error === 'true' ? <p>
         error occured, check input fields.
        </p> : <p>
         Data successfully saved.
        </p>}
       
      </Modal.Body>
     
    </Modal>
  );
}


export default AlertMessage;