Daniel Johnstone

# Listas - Sistema para Drogaria Garutti

## 1) Integração com o sistema

As funcionalidades do sistema estão integradas com o layout. Para arrumar os detalhes pode-se editar apenas o arquivo de estilos (*styles.css*) utilizado classe e id dos elementos ainda não configurados.

Para acessar as classes ou ids desses elementos, abra a página no browser e clique com o botão direito sobre o elemento que deseja editar, selecionando a opção **Inspecionar**. O browser abrirá a aba **Ferramentas do desenvolvedor** e lá pode-se encontrar qual a classe ou id do elemento específico. Caso algum elemento não disponha de uma classe ou id para edição, anote qual o elemento e entre em contato. 

## 2) Inserção de dados

No arquivo *index.html* estão os dados iniciais a serem inseridos no sistema.

        gravadorMod("estoque", ["AS01", "Aspirina", "500", "12.20", registro_entrada++]);
        gravadorMod("clientes", ["Jose Antonio Amorim Fonseca", "Rua Max de Souza, 445, Kobrasol, Sao Jose, SC CEP: 90000-000", "+55 (48) 999998765", "joseafonseca@gmail.com", registro_entrada++]);
        gravadorMod("vendedores", ["Adriana", "AD01", "22/08/2017", "Gerente de Vendas", registro_entrada++]);
        gravadorMod("filiais", ["Afonsinho Pena", "", "af@garuttinho.com.br", "http://www.garutti.com.br", registro_entrada++]);

A função para inserção de novos dados solicita dois argumentos, como mostrado abaixo:

        gravadorMod(arg1, arg2);

O primeiro argumento pede a sessão onde serão inseridos os dados. Pode-se editar estas informações ou inserir novos dados para inicialização do sistema.

- Exemplo *arg1*:

        "estoque", "clientes", etc..

O segundo argumento é uma array com as informações de registro para cada um dos campos da sessão especificada no argumento 1 e mais o comando de registro de entrada.

- Exemplo *arg2*:

        ["Adriana", "AD01", "22/08/2017", "Gerente de Vendas", registro_entrada++]

Qualquer dúvida, é só entrar em contato.

Abraço e sucesso!

---

*Aviso: Mesmo que o sistema esteja público, todos os direitos são reservados. Para autorização de uso deste código em outros projetos, entrar em contato comigo (github.com/danjobr).*