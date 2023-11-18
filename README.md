#### dependencies
-  [Node.js]([https://www.mongodb.com/](https://nodejs.org/en/download/))

#### commands
1. `npm install`
2. `npm run devStart`

### optional: install "Thunder Client" extension in VSCode

### mongoDB setup
Go to [mongo DB](https://www.mongodb.com/), click `Try Free`, proceed with registration. Create new free database cluster deployment.
![image](https://github.com/jakubedzior/wsb-backend-sem-2/assets/63008584/d5b21ae5-01bd-41bc-aaf8-37297708c332)

Next to the cluster name click `Connect` button, choose `Device` and view the following URL details that you will need in the `.env` file.
![image](https://github.com/jakubedzior/wsb-backend-sem-2/assets/63008584/cb94ce57-c72f-4936-aa1f-1fda54cfa978)

On the left panel choose `Network Access`, `Add IP Address`, `Allow Access From Anywhere`.

On the left panel choose `Database Access`, `Add New Database User`, fill user name and password, click `Add Built In role` button with `Read and write to any database` access, `Add User`.

### file `.env` should look contain constants
- DB_USER=\<user name in mongoDB\>
- DB_PASSWORD=\<user password in mongoDB\>
- DB_NAME="cars"
- DB_URL="\<cluser name\>.\<cluster id\>.mongodb.net"
