// RegistrationPage.js
import React, { useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const apiUrl = 'http://localhost:8082';

const RegistrationPage = () => {
  const [registerData, setRegisterData] = useState({ firstName: '', lastName: '', username: '', email: '', password: '' });

  const handleRegisterChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${apiUrl}/register`, registerData);
      console.log('Kayıt Başarılı', response.data);
      // Kayıt başarılı olduktan sonra isterseniz başka bir sayfaya yönlendirebilirsiniz.
    } catch (error) {
      console.error('Kayıt sırasında hata oluştu', error);
    }
  };

  return (
    <Container fluid className="py-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <div className="text-center mb-4">
            <h2>Kayıt Ol</h2>
          </div>
          <Form onSubmit={handleRegisterSubmit}>
            <Form.Group>
              <Form.Control type="text" name="firstName" value={registerData.firstName} onChange={handleRegisterChange} placeholder="Ad" required />
            </Form.Group>
            <Form.Group>
              <Form.Control type="text" name="lastName" value={registerData.lastName} onChange={handleRegisterChange} placeholder="Soyad" required />
            </Form.Group>
            <Form.Group>
              <Form.Control type="text" name="username" value={registerData.username} onChange={handleRegisterChange} placeholder="Kullanıcı Adı" required />
            </Form.Group>
            <Form.Group>
              <Form.Control type="text" name="email" value={registerData.email} onChange={handleRegisterChange} placeholder="e-mail" required />
            </Form.Group>
            <Form.Group>
              <Form.Control type="password" name="password" value={registerData.password} onChange={handleRegisterChange} placeholder="Şifre" required />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">Kayıt Ol</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default RegistrationPage;
