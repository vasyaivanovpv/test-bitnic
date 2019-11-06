## Реализовать приложение на React, которое умеет показывать следующие страницы:

/login - страница ввода логина и пароля
/ - главная страница с новостями https://newsapi.org/

Если неавторизованный пользователь попадает на главную страницу, то его перекидывает на страницу /login

## Форма входа (/login) принимает авторизационные данные:

username: admin
password: 12345

Если введены неверные данные, то показывается сообщение: “Имя пользователя или пароль введены неверно”
Если введены корректные данные, то происходит редирект на главную страницу
Информацию об авторизации пользователя можно хранить в localStorage, простым параметром true/false. Базу данных реализовать не нужно.

/ - главная страница, при заходе на которую мы получаем 5 произвольных новостей с сайта https://newsapi.org/(Документация по работе с API находится по ссылке)
Все необходимое прокинуть через Redux.

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
