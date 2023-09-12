# Heart_API_Rest_MongoDB

![Captura de tela de 2023-09-12 18-40-13](https://github.com/SrBorges/Heart_API_Rest_MongoDB/assets/96485637/19790673-a9cc-4030-a5ef-1886b197eb6a)

Essa API tem como objetivo o cadastramento de CID's dos pacientes. A regra de negócio se trata do médico ter um código de acesso
onde ele pode usar esse código para manipular todas as operações CRUD's dos pacientes, desde ver seus dados, cadastrar, atualizar e 
também excluír determinadas fichas. Esse projeto é feito utilizando o banco de dados NoSql MongoDB.

# Cadastrar médicos

![Captura de tela de 2023-09-12 18-32-49](https://github.com/SrBorges/Heart_API_Rest_MongoDB/assets/96485637/66bda2d7-736d-4686-960e-ce81bc123761)

logo acima podemos ver o código sendo encriptado. 

# Retornando token (JWT) 

![Captura de tela de 2023-09-12 18-33-07](https://github.com/SrBorges/Heart_API_Rest_MongoDB/assets/96485637/09ca1013-dbe8-4c6c-bc65-b3837f2dfaf5)

Caso você tente forçar ou inserir informações erradas, o sistema irá barrar seu acesso. 

![Captura de tela de 2023-09-12 18-33-22](https://github.com/SrBorges/Heart_API_Rest_MongoDB/assets/96485637/8f3a9712-44bb-4b28-8863-f73b664c33aa)

# Autenticação 

![Captura de tela de 2023-09-12 18-35-46](https://github.com/SrBorges/Heart_API_Rest_MongoDB/assets/96485637/38560aa9-eeb3-4b63-b84b-7cdac82c70db)

Caso não seja autenticado, o sistema irá retornar 401.

![Captura de tela de 2023-09-12 18-36-42](https://github.com/SrBorges/Heart_API_Rest_MongoDB/assets/96485637/fee9bdab-bc7d-4bef-a45b-74ae90aa547d)


# MongoDB Atlas

![Captura de tela de 2023-09-12 18-37-33](https://github.com/SrBorges/Heart_API_Rest_MongoDB/assets/96485637/f3506959-0bbf-430c-854a-830f73bc9622)


# Endpoints

* /medicos
* /pacientes


# Requisitos

* "bcrypt": "^5.1.1"
* "dotenv": "16.3.1"
* "express": "4.18.2"
* "jsonwebtoken": "^9.0.2"
* "mongoose": "7.5.0"
* "nodemon": "3.0.1"
