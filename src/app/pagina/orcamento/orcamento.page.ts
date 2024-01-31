import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-orcamento',
  templateUrl: './orcamento.page.html',
  styleUrls: ['./orcamento.page.scss'],
})
export class OrcamentoPage {
  gasto: string = '';
  orcamento: string='';

  constructor(private alertController: AlertController) {}

  async salvar() {
    if (this.gasto && this.orcamento) {
      this.mostrarAlerta('Salvo', 'Os dados foram salvos com sucesso.');
    } else {
      this.mostrarAlerta('Campos Vazios', 'Por favor, preencha os campos de gasto e orçamento.');
    }
  }

  async mostrarAlerta(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }
}