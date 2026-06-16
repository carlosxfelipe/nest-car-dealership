# Notas de Estudo - NestJS

## Providers vs Services

Todo serviço (service) é um provider, mas nem todo provider é um serviço.

**Explicação:**
No NestJS, um **Provider** é um conceito fundamental. Ele é qualquer classe que pode ser injetada como dependência (anotada com `@Injectable()`). Isso inclui serviços, repositórios, factories, helpers, etc. 

Um **Service** é apenas um tipo específico de provider, geralmente criado para separar a lógica de negócios complexa e ser consumido por um Controller.

**Exemplo Prático:**

```typescript
// 1. Provider que NÃO é um Service (ex: valor de configuração)
const configProvider = {
  provide: 'API_URL',
  useValue: 'http://localhost:3000',
};

// 2. Provider que É um Service (anotado com @Injectable)
@Injectable()
export class UsersService {
  findAll() { return []; }
}
```
