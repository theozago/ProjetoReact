# ProjetoReact

*Objetivo geral*

Este projeto visa desenvolver um aplicativo que permite aos fãs da NBA explorarem informações sobre times e jogadores, além de permitir a criação de jogadores personalizados. Plataforma onde os usuários possam interagir com conteúdo relacionado à NBA, além de experimentar funcionalidades como cadastro e login.

*Objetivo do projeto*

O objetivo principal do app é criar uma plataforma onde os usuários possam navegar por informações da NBA e simular a criação de jogadores. Os objetivos:

-Implementação de um sistema de cadastro e login.

-Exibição de uma lista de times da NBA.

-Permitir a criação de jogadores com características personalizadas.

-Visualização de detalhes dos jogadores e times.

*Funções utilizadas*

-React Native: Descrever que a base do app é desenvolvida em React Native.

-Expo: Para testes e desenvolvimento rápido em múltiplas plataformas.

-AsyncStorage: Utilizado para armazenamento local de dados de cadastro e preferências do usuário.

-React Navigation: Para navegação entre telas.

-Expo-av: Para reprodução de som na confirmação de criação de jogador.

*Funcionalidades*

O aplicativo oferece um sistema de cadastro e login onde os dados são armazenados localmente usando AsyncStorage. Após o login, o usuário pode navegar para várias telas, incluindo uma lista de times da NBA e uma tela para criação de jogadores personalizados. Cada jogador pode ser visualizado em detalhes e excluído da lista se desejado.

*Desenvolvimento*

Durante o desenvolvimento, o primeiro passo foi configurar o ambiente e instalar as dependências. Em seguida, foram criadas as telas de cadastro e login usando AsyncStorage para armazenar dados localmente. A tela de lista de times foi implementada para permitir que o usuário veja os times da NBA. A criação de jogadores foi configurada com inputs para atributos específicos, e um som de confirmação foi adicionado ao finalizar a criação. Por fim, as telas de detalhes e gerenciamento de jogadores foram desenvolvidas, permitindo visualizar e excluir jogadores.

*Dificuldades*

Testamos as funcionalidades de cadastro, login, criação e exclusão de jogadores, além da navegação entre telas. Enfrentamos um problema de sobreposição do Picker com o botão de criação, que foi resolvido ao substituir o Picker por botões de opção.
