import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AlertMessage (props) {

 let  {message:{errorRes, submitted}} = props;


 console.log(errorRes, submitted)


 
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {submitted? 'Success: 200' :  'Error:400 bad request'}
     
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      {submitted? 'Data submitted successfully.' :  'Probably product name is repeated. It must be unique.'}
     
     
      </Modal.Body>
     
    </Modal>
  );
}


export default AlertMessage;