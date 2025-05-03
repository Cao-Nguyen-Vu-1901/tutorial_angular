// src/app/pages/contact/contact.component.ts
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
// Xóa RouterLink vì không sử dụng trong template
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: true,
  imports: [FormsModule, NgIf] // Xóa RouterLink
})
export class ContactComponent {
  contactData = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };

  onSubmit() {
    // In a real application, you would send this data to a server
    console.log('Form submitted:', this.contactData);
    alert('Cảm ơn bạn đã liên hệ với chúng tôi! Chúng tôi sẽ phản hồi sớm nhất có thể.');
    
    // Reset form
    this.contactData = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    };
  }
}