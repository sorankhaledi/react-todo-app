import Button from 'react-bootstrap/Button'

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Page Not Found</p>
      <Button variant='primary'>Go Home</Button>
    </div>
  );
}
 
export default NotFound;