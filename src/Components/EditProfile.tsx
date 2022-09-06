import "./style.css"
import { Form , Button, Card, Container} from "react-bootstrap";


const EditPrrofile= () => {
    return(
    <>
      <Container style={{ padding: '1em' }}>
    <div className="col-md-6 mb-md-5 offset-md-3">
      <Card className="rounded">
        <Card.Header
          as="h3"
          className="text-center bg-white"
          style={{ color: '#030d51' }}
        >
          Edit Profile
        </Card.Header>
        <Card.Body>
          <Form >
            <Form.Group controlId="name">
              <Form.Label>Full name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter full name e.g John doe"
                name="name"
                
              />
           
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter email"
                name="email"
               
              />
              
            </Form.Group>
           
         
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                name="password"
                data-testid="password"
              />
          
            </Form.Group>
            <Form.Group controlId="confirmPassword">
              <Form.Label>Confirm password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password again"
                name="confirmPassword"
       
              />
              </Form.Group>
             
    
          </Form>
        </Card.Body>
      </Card>
    </div>
  </Container>
    </>
       
    )
}
export default EditPrrofile;