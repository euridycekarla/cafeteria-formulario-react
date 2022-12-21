import { useState, useEffect } from 'react';
import {
  Container,
  Button,
  Form,
  Table,
  Modal,
  Col,
  FormControl,
} from 'react-bootstrap';

function Clientes() {
  const [Nome, setNome] = useState('');
  const [clientes, setClientes] = useState([]);
  const [pesquisar, setPesquisar] = useState('');
  const [cadastrar, setCadastrar] = useState([]);

  const [email, setEmail] = useState('');
  const [Nascimento, setNascimento] = useState('');
  const [cep, setCep] = useState('');

  const URL = 'http://localhost:3001';
  const handleConsultar = (event) => {
    const search = event.target.value;
    setPesquisar(search);
    console.log(search);

    if (search !== '') {
      const filterdata = clientes.filter((item) => {
        return Object.values(item).join('').includes(search);
      });
      setCadastrar(filterdata);
      console.log(filterdata);
    } else {
      setCadastrar(clientes);
      console.log(clientes);
    }
  };

  useEffect(() => {
    const getcountry = async () => {
      const getres = await fetch(URL + '/clientes');
      const setcountry = await getres.json();
      setClientes(await setcountry);
    };
    getcountry();
  }, []);

  const handleReset = () => {
    Array.from(document.querySelectorAll('input')).forEach(
      (input) => (input.value = ''),
    );
    this.setState({
      itemvalues: [{}],
    });
  };

  const handleCadastrar = (e) => {
    e.preventDefault();
    const emp = { Nome, email, Nascimento, cep };

    // método POST
    fetch(URL + '/Clientes', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(emp),
    })
      .then((data) => {
        console.log(data.message);
      })
      .then((response) => {
        window.location.reload();
        window.alert('Cliente cadastrado com sucesso!');
      })
      .catch((error) => {
        window.alert('Erro ao cadastrar o novo cliente.');
        console.log(error.message);
      });
  };
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  console.log(cadastrar);

  return (
    <>
      <Container>
        <h1 className="text-center">Cafeteria Buarque-se Café</h1>
        <Button variant="dark" onClick={handleShow}>
          +
        </Button>

        <Form inline="true">
          <Form.Group>
            <Form.Label column sm="2">
              <strong>Pesquisar os clientes</strong>
            </Form.Label>

            <Col sm="5">
              <Form.Control
                className="mb-3"
                onChange={(e) => {
                  handleConsultar(e);
                }}
              />
            </Col>
          </Form.Group>
        </Form>

        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Nascimento</th>
              <th>CEP</th>
            </tr>
          </thead>
          <tbody>
            {pesquisar.length > 0
              ? cadastrar.map((cliente, index) => (
                  <tr key={index}>
                    <td>{cliente.Nome}</td>
                    <td>{cliente.email}</td>
                    <td>{cliente.Nascimento}</td>
                    <td>{cliente.cep}</td>
                  </tr>
                ))
              : clientes.map((cliente, index) => (
                  <tr key={index}>
                    <td>{cliente.Nome}</td>
                    <td>{cliente.email}</td>
                    <td>{cliente.Nascimento}</td>
                    <td>{cliente.cep}</td>
                  </tr>
                ))}
          </tbody>
        </Table>

        {/* inicio do Modal com o formulário */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Cadastro de Clientes</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleCadastrar}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  placeholder="João da Silva"
                  type="text"
                  name="Nome"
                  value={Nome}
                  onChange={(e) => setNome(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3"> </Form.Group>
              <Form.Label>E-mail</Form.Label>
              <FormControl
                placeholder="exemplo@gmail.com"
                type="email"
                name="email"
                className="mb-3"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <Form.Label>Data de Nascimento</Form.Label>
              <Form.Control
                type="date"
                className="form-control"
                name="Nascimento"
                value={Nascimento}
                onChange={(e) => setNascimento(e.target.value)}
              />

              <Form.Label>CEP</Form.Label>
              <Form.Control
                placeholder="00000-000"
                type=""
                name="cep"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
              />
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="danger" onClick={handleReset}>
              Limpar
            </Button>

            <Button variant="primary" onClick={handleCadastrar}>
              Cadastrar
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
}

export default Clientes;
