# Desafio FullStack - Loja Virtual
**Foi desenvolvido um protótipo com funçẽos básicas para realizar as operações de CRUD**

### Requisitos
*O desenvolvimento foi realizado em um ambiente linux e docker, não foi possível testar em ambiente windows*

- Sistema Operacional baseado em Linux / Unix
- Banco de Dados Sqlite
- Node >= 16.14.2, Npm >= 8.5.5
- Angular CLI: 14.2.3
- Python >= 3.10.4
- Git

### Instalação
```bash
git clone https://github.com/roberto5g/desafio_django_angular.git
cd desafio_django_angular
```

### Configuração do Front-end
```bash
cd frontend
npm install
ng serve
```
- Após esses comandos, se tudo ocorrer bem, você deverá ver algo como:
```bash
✔ Browser application bundle generation complete.

Initial Chunk Files   | Names         |  Raw Size
vendor.js             | vendor        |   4.11 MB | 
polyfills.js          | polyfills     | 318.01 kB | 
styles.css, styles.js | styles        | 289.43 kB | 
main.js               | main          |  85.70 kB | 
runtime.js            | runtime       |   6.51 kB | 

                      | Initial Total |   4.79 MB

Build at: 2022-09-27T01:31:40.868Z - Hash: 15154efd8551de09 - Time: 12389ms

** Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **


✔ Compiled successfully.
```
- Acessando o endereço http://localhost:4200/ será possível ver a tela inicial da aplicação

### Configuração do Banck-end
```bash
cd backend
```
- Crie um ambiente virtual e o ative
```bash
python3 -m venv venv
source venv/bin/activate
```
- Instale as dependências do projeto e execute a aplicação
```bash
pip install -r requirements.txt
python3 manage.py runserver
```
- Se tudo ocorrer bem, será mostrado uma tela com as seguintes informações:
```bash
Watching for file changes with StatReloader
Performing system checks...

System check identified no issues (0 silenced).
September 27, 2022 - 01:42:16
Django version 4.1.1, using settings 'api.settings'
Starting development server at http://127.0.0.1:8000/
Quit the server with CONTROL-C.
```
### Acessando área restrita do Banck-end
- Para acessar a área restrita acesse http://127.0.0.1:8000/admin
```bash
Username: admin
Password: 123123
```
### Conciderações 
*Ficou para uma próxima etapaa criação de uma politica de autenticação, assim como a utilização de validações no formulário de cadastros.*

##### That's all. Enjoy.

### Change log
##### v 1.0.0
