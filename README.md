INSTALAR DEPENDÊNCIAS DO PROJETO:

- npm i

RODAR O PROJETO:

- Startar mock api: 
    - No terminal e na raiz do projeto rode: npx json-server db.json
- Startar front: 
    - Em um segundo terminal, rode: npx expo start


Observações:

- Se faz necessário o uso de um emulador, pois como estará tudo local se você rodar o expo pelo seu celular físico não conseguirá ter acesso a api.

- Caso o ip de seu emulador tenha sido modificado manualmente, se faz necessário voltá-lo ao padrão ou no projeto mudar a BASE_URL da api em src/service/api.