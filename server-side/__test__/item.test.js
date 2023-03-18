if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const app = require('../app');
const { test, describe, afterAll, beforeAll } = require('@jest/globals');
const { sequelize } = require('../models');
const request = require('supertest');
const { queryInterface } = sequelize;
const { hash } = require('../helpers/bcrypt');
const { sign } = require('../helpers/jwt');

let tokenAdmin;
let tokenUser;

beforeAll(async () => {
  try {
    let users = require('../datas/users.json').map((user) => {
      user.password = hash(user.password);
      user.createdAt = new Date();
      user.updatedAt = new Date();
      return user;
    });
    let items = require('../datas/items.json').map((item) => {
      item.createdAt = new Date();
      item.updatedAt = new Date();
      return item;
    });

    await queryInterface.bulkInsert('Users', users, {});
    await queryInterface.bulkInsert('Items', items, {});

    tokenAdmin = sign(
      {
        id: 1,
        email: 'admin@mail.com',
        role: 'admin',
      },
      process.env.JWT_SECRET_KEY
    );

    tokenUser = sign(
      {
        id: 2,
        email: 'user@mail.com',
        role: 'user',
      },
      process.env.JWT_SECRET_KEY
    );
  } catch (error) {
    console.log(error);
  }
});

afterAll(async () => {
  try {
    await sequelize.queryInterface.bulkDelete('Users', null, {
      truncate: true,
      cascade: true,
      restartIdentity: true,
    });
    await sequelize.queryInterface.bulkDelete('Items', null, {
      truncate: true,
      cascade: true,
      restartIdentity: true,
    });
  } catch (error) {
    console.log(error);
  }
});

describe('GET /items', () => {
  test('should response with status 200 return with data items as an user', async () => {
    let response = await request(app)
      .get('/items')
      .set('access_token', tokenUser);
    const { body, status } = response;

    expect(status).toBe(200);
    expect(body.items.length).toBeGreaterThan(0);
  });

  test('should response with status 200 return with data items as an admin', async () => {
    let response = await request(app)
      .get('/items')
      .set('access_token', tokenAdmin);
    const { body, status } = response;

    expect(status).toBe(200);
    expect(body.items.length).toBeGreaterThan(0);
  });
});

describe('GET /items/:id', () => {
  test('should response with status 200 return with data items as an user', async () => {
    let id = 1;
    let response = await request(app)
      .get(`/items/${id}`)
      .set('access_token', tokenUser);
    const { body, status } = response;
    console.log(body);

    expect(status).toBe(200);
    expect(body.item).toHaveProperty('id', expect.any(Number));
    expect(body.item).toHaveProperty('name', expect.any(String));
    expect(body.item).toHaveProperty('quantity', expect.any(Number));
    expect(body.item).toHaveProperty('description', expect.any(String));
  });

  test('should response with status 200 return with data items as an admin', async () => {
    let id = 1;
    let response = await request(app)
      .get(`/items/${id}`)
      .set('access_token', tokenAdmin);
    const { body, status } = response;

    expect(status).toBe(200);
    expect(body.item).toHaveProperty('id', expect.any(Number));
    expect(body.item).toHaveProperty('name', expect.any(String));
    expect(body.item).toHaveProperty('quantity', expect.any(Number));
    expect(body.item).toHaveProperty('description', expect.any(String));
  });
});

describe('POST /items/add', () => {
  test('should response with status 401 return with error message as an user', async () => {
    let item = {
      name: 'Coffee',
      quantity: 1,
      description: 'Luak coffee not make you bloated',
    };
    let response = await request(app)
      .post('/items/add')
      .set('access_token', tokenUser)
      .send(item);
    const { body, status } = response;

    expect(status).toBe(401);
    expect(body).toEqual({
      message: 'Unauthorized Role',
    });
  });

  test('should response with status 201 return with success message as an admin', async () => {
    let item = {
      name: 'Coffee',
      quantity: 1,
      description: 'Luak coffee not make you bloated',
    };
    let response = await request(app)
      .post('/items/add')
      .set('access_token', tokenAdmin)
      .send(item);
    const { body, status } = response;

    expect(status).toBe(201);
    expect(body).toEqual({
      message: 'Success add item with name Coffee',
    });
  });
});

describe('PUT /items/:id', () => {
  test('should response with status 401 return with error message as an user', async () => {
    let id = 1;
    let item = {
      name: 'Coffee Luak',
      quantity: 1,
      description: 'Luak coffee not make you bloated',
    };
    let response = await request(app)
      .put(`/items/${id}`)
      .set('access_token', tokenUser)
      .send(item);
    const { body, status } = response;

    expect(status).toBe(401);
    expect(body).toEqual({
      message: 'Unauthorized Role',
    });
  });

  test('should response with status 200 return with success message as an admin', async () => {
    let id = 1;
    let item = {
      name: 'Coffee Luak',
      quantity: 1,
      description: 'Luak coffee not make you bloated',
    };
    let response = await request(app)
      .put(`/items/${id}`)
      .set('access_token', tokenAdmin)
      .send(item);
    const { body, status } = response;

    expect(status).toBe(200);
    expect(body).toEqual({
      message: `Success update item with id ${id}`,
    });
  });
});

describe('DELETE /items/:id', () => {
  test('should response with status 401 return with error message as an user', async () => {
    let id = 1;
    let response = await request(app)
      .delete(`/items/${id}`)
      .set('access_token', tokenUser);
    const { body, status } = response;

    expect(status).toBe(401);
    expect(body).toEqual({
      message: 'Unauthorized Role',
    });
  });

  test('should response with status 200 return with success message as an admin', async () => {
    let id = 1;
    let response = await request(app)
      .delete(`/items/${id}`)
      .set('access_token', tokenAdmin);
    const { body, status } = response;

    expect(status).toBe(200);
    expect(body).toEqual({
      message: `Success destory item with id ${id}`,
    });
  });
});
