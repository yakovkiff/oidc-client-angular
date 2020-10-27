import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutoRedirectService {

  private readonly key = 'auto-redirect-path';

  constructor() { }

  set(path: string): void {
    sessionStorage.setItem(this.key, path);
  }

  get(): string {
    return sessionStorage.getItem(this.key);
  }

  clear(): void {
    sessionStorage.removeItem(this.key);
  }
}
