import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import { useRouter } from 'next/router';

const MainNav = () => {
  const router = useRouter();
  const handleSubmit = (event) => {
    event.preventDefault();
    const searchField = event.target.elements.search.value;
    router.push(`/artwork?title=true&q=${searchField}`);
  };

  return (
    <Navbar className="fixed-top navbar-dark bg-primary">
      <Navbar.Brand>Frank Fu</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/search">Advanced Search</Nav.Link>
      </Nav>
      <Form inline onSubmit={handleSubmit} className="d-flex">
        <Form.Control type="text" placeholder="Search" name="search" />
        <button type="submit">Search</button>
      </Form>
    </Navbar>
  );
};

export default MainNav;
