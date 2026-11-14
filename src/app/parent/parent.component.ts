import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

/**
 * PARENT component
 * - Passes data DOWN to the child with property binding: [input]="value"
 * - Listens for events UP from the child with event binding: (output)="handler($event)"
 */
@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent {
  productName = 'Wireless Mouse';
  productPrice = 25;
  cartQuantity = 1;
  lastMessage = '';

  onQuantityChange(newQty: number): void {
    // The parent owns the state and updates it.
    // The new value then flows back down to the child through [qty].
    this.cartQuantity = newQty
  }

  onMessage(message: string): void {
    this.lastMessage = message;
  }
}
