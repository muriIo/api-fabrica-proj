import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '<h3>Olá, seja bem-vindo á API do Treinela. Contate o administrador para o acesso á documentação da API!</h3>';
  }
}
