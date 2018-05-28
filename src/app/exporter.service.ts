import { Injectable } from '@angular/core';
import { Character } from './home/models';

@Injectable({
  providedIn: 'root'
})
export class ExporterService {
  private PAD = 20;

  constructor() { }

  public exportAsJSON(char: Character) {
    const content = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(char, null, 4));
    this.exportFile(char.name + '.json', content);
  }

  public exportAsFormatted(char: Character) {
    const eol = this.eol();
    let content = 'Name: ' + char.name + eol;
    content += 'Race: ' + char.race.name + eol;
    content += 'Profession: ' + char.profession.name + eol;
    content += ''.padEnd(this.PAD * 2, '_') + eol;
    for (const cat of char.statCategories) {
      content += cat.name + eol;
      for (const stat of cat.stats) {
        content += (stat.name + ':').padEnd(this.PAD, '.') + stat.value.toString().padStart(this.PAD, '.') + eol;
      }
      content += ''.padEnd(this.PAD * 2, '_') + eol;
    }
    content = 'data:text/plain;charset=utf-8,' + encodeURIComponent(content);
    this.exportFile(char.name + '.txt', content);
  }

  private eol(): string {
    const plat = navigator.platform.toLowerCase();
    if (plat.indexOf('win') !== -1) {
      return '\r\n';
    } else if (plat.indexOf('mac') !== -1) {
      return '\r';
    } else {
      return '\n';
    }
  }

  private exportFile(name: string, content: string) {
    const element = document.createElement('a');
    document.body.appendChild(element);
    element.setAttribute('href', content);
    element.setAttribute('download', name);
    element.click();
    element.remove();
  }
}
