import { Component, ElementRef, ViewChild } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  selected_images: any = [];
  @ViewChild('messageInput')
  messageInput!: ElementRef;

  constructor(private _userService: UserService) {}

  removeImage(index: any) {
    let file = this.selected_images;
    file.splice(index, 1);
  }
  selectFile(event: any) {
    this.selected_images = Array.from(event.target.files);
  }

  onKeyDown(event: KeyboardEvent): void {
    if (event.shiftKey && event.keyCode === 13) {
      event.preventDefault();
      const textarea = event.target as HTMLTextAreaElement;
      const cursorPosition = textarea.selectionStart;
      const newValue =
        textarea.value.substring(0, cursorPosition) +
        '\n' +
        textarea.value.substring(textarea.selectionEnd);
      textarea.value = newValue;
      textarea.selectionStart = cursorPosition + 1;
      textarea.selectionEnd = cursorPosition + 1;
      textarea.dispatchEvent(new Event('input'));
    }
  }

  sendMessage() {}

  createUser() {
    this._userService.creteUser({}).subscribe();
  }
}
