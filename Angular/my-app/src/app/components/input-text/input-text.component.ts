import {
  Component,
  ElementRef,
  forwardRef,
  signal,
  viewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { distinctUntilChanged } from 'rxjs';
import { toObservable } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-input-text',
  standalone: true,
  imports: [],
  templateUrl: './input-text.component.html',
  styleUrl: './input-text.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputTextComponent),
      multi: true,
    },
  ],
})
export class InputTextComponent implements ControlValueAccessor {
  inputRef = viewChild.required<ElementRef<HTMLInputElement>>('inputRef');
  value = signal<string | null>('');
  value$ = toObservable(this.value);

  constructor() {
    this.value$
      .pipe(distinctUntilChanged())
      .subscribe((value) => this.onChange(value));
  }

  writeValue(value: string | null): void {
    this.value.set(value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onChange = (value: any) => {};
  onTouched = (value: any) => {};
  setDisabledState?(isDisabled: boolean): void {}
}
