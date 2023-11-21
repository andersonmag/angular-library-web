import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'message-error-form',
  templateUrl: './message-error-form.component.html',
  styleUrls: ['./message-error-form.component.css']
})
export class MessageErrorFormComponent implements OnInit {

  @Input() mensagem: string

  ngOnInit(): void {
  }

}
