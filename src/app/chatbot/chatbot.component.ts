import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Asegúrate de que esto esté aquí



@Component({
  selector: 'app-chatbot',
  imports: [ CommonModule,  FormsModule ],
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.css'
})
export class ChatbotComponent {

  userMessage: string = '';
  messages: string[] = ['¡Hola! ¿En qué puedo ayudarte hoy?'];

  sendMessage(): void {
    if (this.userMessage.trim()) {
      this.messages.push(this.userMessage);
      this.userMessage = ''; // Limpiar el input

      // Respuesta básica del bot (aquí podrías agregar lógica más avanzada si lo deseas)
      setTimeout(() => {
        this.messages.push('¡Gracias por tu mensaje! ¿Puedo ayudarte con algo más?');
      }, 1000);
    }
  }

}
