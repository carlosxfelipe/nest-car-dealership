<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">Um framework <a href="http://nodejs.org" target="_blank">Node.js</a> progressivo para a construção de aplicativos eficientes e escaláveis do lado do servidor.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Descrição

Repositório inicial em TypeScript do framework [Nest](https://github.com/nestjs/nest).

## Configuração do projeto

```bash
$ pnpm install
```

## Compilar e rodar o projeto

> [!NOTE]
> **Aviso sobre Segurança (pnpm v11+):** Este projeto possui regras rígidas no `pnpm-workspace.yaml` para impedir a execução e instalação automática de pacotes recém-lançados (prevenção contra supply chain attacks). 
> Se o comando `pnpm run start:dev` travar acusando que os pacotes violam a regra dos 7 dias, você pode inicializar o servidor pulando a checagem usando o npm nativo:

```bash
# desenvolvimento
$ npm run start

# modo watch (observação)
$ npm run start:dev

# modo de produção
$ npm run start:prod
```

## Rodar os testes

```bash
# testes unitários
$ pnpm run test

# testes e2e (ponta a ponta)
$ pnpm run test:e2e

# cobertura de testes
$ pnpm run test:cov
```

## Implantação (Deployment)

Quando você estiver pronto para implantar (deploy) seu aplicativo NestJS em produção, há alguns passos importantes que você pode seguir para garantir que ele rode o mais eficientemente possível. Confira a [documentação de implantação](https://docs.nestjs.com/deployment) para obter mais informações.



## Licença

O Nest é [licenciado pelo MIT](https://github.com/nestjs/nest/blob/master/LICENSE).
