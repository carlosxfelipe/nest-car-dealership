<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

## Descrição

API de concessionária de carros construída com NestJS durante o [bootcamp de NestJS da DevTalles](https://cursos.devtalles.com/courses/nest?coupon=JUNIO-2026).

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

