import React from 'react';
import { CDBFooter, CDBBox, CDBIcon } from 'cdbreact';
import Button from 'react-bootstrap/Button';
import footer from '../services/main.css';

import { MDBFooter, MDBContainer, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter
      className="text-center text-white"
      style={{ backgroundColor: '#f1f1f1' }}
    >
      <MDBContainer className="pt-4">
        <section className="mb-4">
          <MDBBtn
            rippleColor="dark"
            color="link"
            floating
            size="lg"
            className="text-dark m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab className="fab fa-facebook-f" />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color="link"
            floating
            size="lg"
            className="text-dark m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab className="fa-google" />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color="link"
            floating
            size="lg"
            className="text-dark m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab className="fa-instagram" />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color="link"
            floating
            size="lg"
            className="text-dark m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab className="fa-linkedin" />
          </MDBBtn>
        </section>
      </MDBContainer>
      <div
        className="text-center text-dark p-3"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
      >
        {' '}
        Unidade Joao Pessoa : Av. Mar Negro, 267 - Intermares, Cabedelo - PB,
        58310-000{' '}
      </div>
    </MDBFooter>
  );
}
