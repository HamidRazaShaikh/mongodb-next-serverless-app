import {Button , Card , Container}from 'react-bootstrap';

const Details =({Detail})=> {




    


  return (
  <Container style = {{marginTop: 100}}>
    <Card>
      <Card.Header>{Detail?.status}</Card.Header>
      <Card.Body>
        <Card.Title>{Detail?.name}</Card.Title>
        <Card.Text>
         {Detail?.description}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Container>
  );
}

Details.getInitialProps = async ({ query: { id } }) => {
 
    const res = await fetch(`${process.env.BASE_URL}/api/items/${id}`);
    const { data } = await res.json();

    return { Detail : data }
}


export default Details;