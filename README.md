<h1 align="center">Welcome to Pomodoro Watch 👋</h1>
<div align="center">

![Static Badge](https://img.shields.io/badge/10.9.0-f?label=npm)
![Static Badge](https://img.shields.io/badge/MIT-grey?label=licence&labelColor=yellow)
![Static Badge](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white)
![Static Badge](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![Static Badge](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Static Badge](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)
![Static Badge](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![Static Badge](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)



![Static Badge](https://img.shields.io/badge/Markdown-ffffff?style=flat&logo=markdown&logoColor=black)
![Static Badge](https://img.shields.io/badge/Telegram-26A5E4?style=flat&logo=telegram&logoColor=white)
![Static Badge](https://img.shields.io/badge/Twitter-000000?style=flat&logo=x&logoColor=white)
![Static Badge](https://img.shields.io/badge/Instagram-E4405F?style=flat&logo=instagram&logoColor=white)
![Static Badge](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat&logo=linkedin&logoColor=white)

</div>


> El inventor de esta técnica fue Francesco Cirillo, un estudiante italiano que se dio cuenta de lo improductivas que eran no solo sus sesiones de estudio, si no las de todos sus compañeros en general.
>
> La técnica Pomodoro, o método Pomodoro, es una herramienta tanto de estudio como de trabajo. De hecho, como forma más precisa de definición, podemos decir que es una metodología de productividad.

>La base de esta técnica consiste en dividir el tiempo en periodos de 25 minutos. Ni un minuto más, ni un minuto menos. ¿Por qué? Porque lo que se busca con esta técnica es alcanzar lo que se llama el “foco de concentración“: ese estado de focus en el cual solo estás centrado en acabar esa tarea que tienes entre manos, sin distracciones de ningún tipo. 
>
> Fuente: Instituto Europeo de Postgrado
> https://iep.edu.es/que-es-el-metodo-pomodoro/
> 

## ✨ Demo

Se usan dos parámetros, el tiempo de trabajo en flow o concentración y el tiempo de descanso

<p align="center">

![alt text](pomodoro.gif)

</p>

## 🚀 Install
Se usa la herramienta Vite en su ultima versión LTS 5, y con la biblioteca REACT v5 usando, desde el CLI se ejecuta 

$ npm create vite@latest my-react-app -- --template react

$ npm install npx


Posteriormente se instala tailwindcss en sus versiones especificas colocandp --save-dev para que se guarde en las dependencias



$ npm install --save-dev lucide-react
$ npm install --save-dev tailwindcss@3.1.8
$ npm install --save-dev autoprefixer@10.4.8
$ npm install --save-dev postcss@8.4.16

npx tailwindcss init -p
Al ejecutarse crea dos archivos:

Created Tailwind CSS config file: tailwind.config.js
Created PostCSS config file: postcss.config.js

Inicialemente se muestra sin rutas que usaría Tailwindcss
![alt text](image-2.png)

Asignamos las rutas de los archivos que usarán tailwindcss:
content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

Finalmente quedaría de estar forma
![alt text](image-3.png)

El archivo main.jsx apunta a index.css, indicamos que index.css usará tailwinddcss colocando las siguientes rutas:

@tailwind base;
@tailwind components;
@tailwind utilities;

![alt text](image-4.png)

## 🚀 Vite

## 🚀 React

## 🚀 Dependencies

Se utiliza las siguintes versiones las cuales son indispensables por compatibilidad :

- tailwindcss": "^3.1.8"
- postcss": "^8.4.16"
- autoprefixer": "^10.4.8"


![alt text](image-1.png)

![alt text](image.png)



## Code Contributors

This project exists thanks to all the people who contribute. [[Contribute](CONTRIBUTING.md)].
<a href="https://github.com/kefranabg/readme-md-generator/graphs/contributors"><img src="https://opencollective.com/readme-md-generator/contributors.svg?width=890&button=false" /></a>





## Congratulations

Support this project with your organization. Your logo will show up here with a link to your website. [[Contribute](https://opencollective.com/readme-md-generator/contribute)]
<a href="https://opencollective.com/readme-md-generator/organization/0/website"><img src="https://opencollective.com/readme-md-generator/organization/0/avatar.svg"></a>
<a href="https://opencollective.com/readme-md-generator/organization/1/website"><img src="https://opencollective.com/readme-md-generator/organization/1/avatar.svg"></a>
<a href="https://opencollective.com/readme-md-generator/organization/2/website"><img src="https://opencollective.com/readme-md-generator/organization/2/avatar.svg"></a>
<a href="https://opencollective.com/readme-md-generator/organization/3/website"><img src="https://opencollective.com/readme-md-generator/organization/3/avatar.svg"></a>
<a href="https://opencollective.com/readme-md-generator/organization/4/website"><img src="https://opencollective.com/readme-md-generator/organization/4/avatar.svg"></a>
<a href="https://opencollective.com/readme-md-generator/organization/5/website"><img src="https://opencollective.com/readme-md-generator/organization/5/avatar.svg"></a>
<a href="https://opencollective.com/readme-md-generator/organization/6/website"><img src="https://opencollective.com/readme-md-generator/organization/6/avatar.svg"></a>
<a href="https://opencollective.com/readme-md-generator/organization/7/website"><img src="https://opencollective.com/readme-md-generator/organization/7/avatar.svg"></a>
<a href="https://opencollective.com/readme-md-generator/organization/8/website"><img src="https://opencollective.com/readme-md-generator/organization/8/avatar.svg"></a>
<a href="https://opencollective.com/readme-md-generator/organization/9/website"><img src="https://opencollective.com/readme-md-generator/organization/9/avatar.svg"></a>

## 🤝 Contributing

Contributions, issues and feature requests are welcome.<br />
Feel free to check [issues page](https://github.com/kefranabg/readme-md-generator/issues) if you want to contribute.<br />
[Check the contributing guide](./CONTRIBUTING.md).<br />

## Author

👤 **Christian Castro Pazmiño***

- Github: [@kefranabg](https://github.com/kefranabg)
- Instagram: [@FranckAbgrall](https://twitter.com/FranckAbgrall)
## Show your support

Please ⭐️ this repository if this project helped you!

<a href="https://www.patreon.com/FranckAbgrall">
  <img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="160">
</a>

## 📝 License

Copyright © 2025 [Christian Castro Pazmiño](https://github.com/kefranabg).<br />
This project is [MIT](https://github.com/kefranabg/readme-md-generator/blob/master/LICENSE) licensed.

