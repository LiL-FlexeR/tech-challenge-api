# Tech Challenge

Tech Challenge is an API-based project built with Express.js, utilizing validation mechanisms, Prisma for database interaction, and follows best practices for modular architecture. This project provides a starting point for building robust applications with clean validation logic and strong typing through TypeScript.

## Table of Contents

- [Installation](#installation)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)

## Installation

1. Clone the repository:

   `bash git clone https://github.com/LiL-FlexeR/tech-challenge-api.git`

2. Install dependencies

   `npm ci`

3. Configure env
4. Build API

   `npm run build`

5. Run API

   `npm run start:prod`

## Project structure

api/
├── src/
│ ├── controllers/  
│ ├── decorators/  
│ ├── dtos/  
│ ├── middlewares/  
│ ├── errors/  
│ ├── services/  
│ └── index.ts  
├── dist/  
├── package.json  
├── tsconfig.json  
└── README.md

## Technologies Used

1. Express for API development.
2. Prisma as database orm.
3. Class-transformer/class-validator for requests validation.
4. Winstone for logging.
