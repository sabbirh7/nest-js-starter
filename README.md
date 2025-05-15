<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest


## NestJS Starter Kit

A comprehensive NestJS starter kit designed for building scalable, secure, and modern applications. This repository provides a fully functional boilerplate with essential features for rapid development, including authentication, authorization, caching, role based access control and real-time capabilities.

## Key Features:

- **NestJS Framework**: A TypeScript-based, extensible backend framework for building efficient and modular applications.
- **OAuth & Google Authentication**: Easy-to-integrate OAuth 2.0 support with Passport, including Google Sign-In, for seamless third-party authentication.
- **JWT Authentication**: Secure authentication using Passport JSON Web Tokens (JWT) with support for access and refresh tokens.
- **Role-Based Access Control (RBAC)**: Implement fine-grained security with user roles and permissions to control access to resources and routes.
- **Swagger**: Auto-generated API documentation with Swagger for easy testing and exploring your API endpoints.
- **Prisma ORM**: Simplified database management and interactions with PostgreSQL using Prisma ORM.
- **Redis Integration**: For caching, session storage, and message brokering to improve performance and scalability.
- **Mysql**: A robust relational database setup with Prisma, ready for production-grade applications.


## Tech Stack

- **Backend**: NestJS (TypeScript), Prisma, Passport, JWT
- **Database**: Mysql
- **Redis** (Caching, Session Storage, Message Brokering)
- **API Documentation**: Swagger

## Get started

```bash
# Clone the Repository
$ git clone ""
$ cd nest-js-starter

#Install node modules
$ npm install
```


<p>Copy .env.example and create a new .env file.</p>


## Prepare database

```bash
# Generate prisma models
$ npx prisma generate

# Migrate database
$ npx prisma migrate dev

# Seed database with seed data
$ npm run db:seed
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
<p>
The app will start on port 8080
</p>

## Swagger API Documentation
<p>Visit <span><a href="http://localhost:8080/docs">http://localhost:8080/docs</a></span> to access the swagger API Documentation</p>
![image](https://github.com/user-attachments/assets/d5f8545f-def3-4794-b465-303d9e4a9875)

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.


