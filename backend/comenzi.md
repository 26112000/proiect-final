https://www.linkedin.com/pulse/react-js-naming-convention-kristiyan-velkov/
https://react.dev/reference/react/hooks
https://dev.to/codewithshahan/lets-practice-clean-reusable-components-in-react-5flj

# BackEnd React BLOG

## Git + GitHub

```
git init
git remote add origin https://github.com/USERGITHUB/reactBlog.git
git remote -v
touch .gitignore
```

## MySQL

### reactblog.sql

## NodeJs + TypeScript

```
mkdir backend
cd backend/
node -v , npm -v
tsc -v
npm init --yes
//sau npm init –y  =>package.js

npx tsc --init //=> tsconfig.json
```

### Instalam modulele necesare

```
npm install express dotenv cors body-parser mysql2
npm i -D typescript @types/express @types/node
//npm install --dev typescript @types/express @types/node
npm install --save-dev  @types/body-parser @types/mysql @types/dotenv
npm install --save-dev  @types/cors
npm i --save bcryptjs

npm i --save  @types/bcryptjs
npm i --save jsonwebtoken
npm i --save @types/jsonwebtoken
npm i --save express-session
npm i --save @types/express-session
npm i --save express-validator
npm i --save @types/express-fileupload express-fileupload


npm i -D concurrently nodemon
//npm install --dev concurrently nodemon
```

### In fisierul tsconfig.json

```
"compilerOptions": {
	"outDir": ”./dist"
}
```

### .env

```
PORT=3002
DB_HOST="localhost"
DB_USER="root"
DB_PWD=""
DB_NAME="reactblog"

SECRET_KEY= "reactblog-secret-key"
```

### Facem folderele necesare

```
mkdir models routes types
touch models/post.ts models/user.ts models/contact.ts
touch routes/adminRouter.ts routes/postRouter.ts routes/userRouter.ts routes/contactRouter.ts
touch types/Category.ts types/Post.ts types/User.ts types/Contact.ts
```

### Facem fisierul: server.ts

```
touch server.ts
touech jwt.ts
```

### Modificam fisieul package.json

```
"scripts": {
	"build": "npx tsc",
	"start": "node dist/server.js",
	"dev": "concurrently \"npx tsc --watch\" \"nodemon -q dist/server.js\""
}

npm run dev
npm run build
npm run start
```

# Back-End+MySql

### db.ts conexiunea la baza de date

```
touch db.ts
```

```
import mysql from "mysql2";
import * as dotenv from "dotenv";
dotenv.config();

export const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME
});
```

touch types/Comment.ts
touch models/comment.ts models/category.ts
touch routes/commentRouter.ts
Modificam fisierul server.ts

npm run dev
http://localhost:3002/users

# Frontend React BLOG

```
npm i create-react-app -g
npm view react version
```

```
cd ..
create-react-app frontend
sau
npx create-react-app frontend
cd frontend
npm start
```

### Instalam modulele necesare

```
npm i --save react-bootstrap@next bootstrap@5.3 react-router-dom axios formik yup date-fns
npm i --save env-cmd
npm i --save-dev @babel/plugin-proposal-private-property-in-object

npm i --save @fortawesome/fontawesome-svg-core
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/free-regular-svg-icons
npm i --save @fortawesome/free-brands-svg-icons
npm i --save @fortawesome/react-fontawesome@latest
 // pt editor rich-text
npm i react-quill
```

### Facem un folder components in src si adaugam componentele

```
mkdir components
touch components/Layout.jsx components/NavBar.jsx components/Header.jsx components/Footer.jsx
```

### Facem un folder pages in src si adaugam componentele

```
mkdir pages
touch pages/Home.jsx pages/Login.jsx pages/Register.jsx pages/Posts.jsx pages/SinglePost.jsx pages/NoPage.jsx pages/Contact.jsx
```

### In App.js adaugam rutele

```
<BrowserRouter>
    <Routes>
        <Route  element={<Layout />}>
            <Route index  element={<Home />} />
            <Route path="posts" element={<Posts />} />
            <Route path="contact" element={<Contact />} />
            <Route path="post/:id" element={<SinglePost />} />
            <Route path="mylogin" element={<Login />} />
            <Route path="myregister" element={<Register />} />

            <Route path="*" element={<NoPage />} />
        </Route>
    </Routes>
</BrowserRouter>
```

### facem /src/context/authContext.jsx si modificam index.js

```
 mkdir context
 touch context/authContext.jsx

import { AuthContexProvider } from './context/authContext';
<AuthContexProvider>
    <App />
</AuthContexProvider>

```

```
 touch src/config.json
 touch src/Login.css

```