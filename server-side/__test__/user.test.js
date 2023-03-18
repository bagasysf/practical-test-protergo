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

let access_token;

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

    access_token = sign(
      {
        id: 1,
        role: 'admin',
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

describe('POST /users/login', () => {
  test('should response with status 200 return with access token and role as an user', async () => {
    const admin = {
      email: 'user@mail.com',
      password: 'password',
    };

    let response = await request(app).post('/users/login').send(admin);
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      access_token: expect.any(String),
      role: 'user',
    });
  });

  test('should response with status 400 return with message as an user', async () => {
    const admin = {
      email: 'user-false@mail.com',
      password: 'password',
    };

    let response = await request(app).post('/users/login').send(admin);
    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      message: 'Invalid Email/Password',
    });
  });

  test('should response with status 200 return with access token and role as an admin', async () => {
    const admin = {
      email: 'admin@mail.com',
      password: 'password',
    };

    let response = await request(app).post('/users/login').send(admin);
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      access_token: expect.any(String),
      role: 'admin',
    });
  });

  test('should response with status 400 return with message as an admin', async () => {
    const admin = {
      email: 'admin-false@mail.com',
      password: 'password',
    };

    let response = await request(app).post('/users/login').send(admin);
    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      message: 'Invalid Email/Password',
    });
  });
});
