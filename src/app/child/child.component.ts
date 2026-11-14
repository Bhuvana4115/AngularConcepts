import { Component, EventEmitter, Input, Output } from '@angular/core';

/**
 * CHILD component
 * - Receives data FROM the parent via @Input()
 * - Sends events TO the parent via @Output() + EventEmitter
 */
@Component({
  selector: 'app-child',
  standalone: true,
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  // ---------- @Input: parent -> child ----------

  // Required input: Angular reports a compile error if the parent doesn't bind it
  @Input({ required: true }) productName!: string;

  // Optional input with a default value
  @Input() price = 0;

  // Alias: the parent binds [qty], but inside the child it's called "quantity"
  @Input('qty') quantity = 0;

  // ---------- @Output: child -> parent ----------

  // Emits the new quantity number
  @Output() quantityChange = new EventEmitter<number>();

  // Emits a string message
  @Output() messageSent = new EventEmitter<string>();

  increase(): void {
    // The child does NOT change the parent's data directly.
    // It emits an event and lets the parent decide what to do.
    this.quantityChange.emit(this.quantity + 1);
  }

  decrease(): void {
    this.quantityChange.emit(this.quantity - 1);
  }

  sendMessage(text: string): void {
    if (text.trim()) {
      this.messageSent.emit(text.trim());
    }
  }
}
