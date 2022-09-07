--- Проверь содержит ли package.json все нужные тебе зависимости
--- Сделай npm i
--- Проинициализируй eslint npx eslint --init
--- Создай базу данных
--- В файле .env пропиши нужный тебе порт (PORT) для сервера, настройки для database url (postgresUser, postgresUserPass, databaseName) и твой SESSION_SECRET ключ
--- Сделай npx sequelize-cli init
--- В database.json в конфиге dev напиши "use_env_variable": "DATABASE_URL"
--- Проверь путь импорта sequelize на 9 строке в файле app.js (const { sequelize } = require('../db/models')) и раскоментируй эту строчку
--- Запусти сервер npm run dev
--- Используй renderTemplate для рендера реакт модулей (функция универсальная)
--- Готово, создавай модели sequelize, react компоненты, вперед работать!
--- Установим React Babel
   npm i @babel/core @babel/preset-env @babel/preset-react @babel/register react react-dom
   touch .babelrc
--- npm i express-session session-file-store bcrypt

websockets
--- npm i ws
 const color = `#${(`${Math.random().toString(16)}000000`).substring(2, 8).toUpperCase()}`













--- echo "# project_init" >> README.md
--- git init
--- git add README.md
--- git commit -m "first commit"
--- git branch -M main
--- git remote add origin git@github.com:TaismDG/project_init.git
--- git push -u origin main
