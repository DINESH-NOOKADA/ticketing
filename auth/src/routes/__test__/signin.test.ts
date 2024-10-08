import request from 'supertest';
import { app } from '../../app';

it('fails when a email that does not exist is suppplied', async () => {
  await request(app)
    .post('/api/user/signin')
    .send({
      email: 'test@test.com',
      password: 'password',
    })
    .expect(400);
});

it('fails when an incorrect password is suppplied', async () => {
  await request(app)
    .post('/api/user/signup')
    .send({
      email: 'test@test.com',
      password: 'password',
    })
    .expect(201);

  await request(app)
    .post('/api/user/signin')
    .send({
      email: 'test@test.com',
      password: 'adfdaf',
    })
    .expect(400);
});

it('responds with a cookie when given valid credentials', async () => {
  await request(app)
    .post('/api/user/signup')
    .send({
      email: 'test@test.com',
      password: 'password',
    })
    .expect(201);

  const response = await request(app)
    .post('/api/user/signin')
    .send({
      email: 'test@test.com',
      password: 'password',
    })
    .expect(200);
  expect(response.get('Set-Cookie')).toBeDefined();
});
