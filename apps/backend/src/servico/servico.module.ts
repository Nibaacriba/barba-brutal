import { Module } from '@nestjs/common';
import { ServicoController } from './servico.controller';
import { DbModule } from 'src/db/db.module';
import { AgendamentoModule } from 'src/agendamento/agendamento.module';

@Module({
  imports: [DbModule, ServicoModule, AgendamentoModule],
  controllers: [ServicoController],
})
export class ServicoModule {}
