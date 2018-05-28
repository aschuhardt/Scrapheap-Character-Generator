import { Component, OnInit } from '@angular/core';
import { RaceService } from '../race.service';
import { StatService } from '../stat.service';
import { ProfessionService } from '../profession.service';
import { ExporterService } from '../exporter.service';
import * as model from './models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  races: model.Race[];
  professions: model.Profession[];
  character: model.Character;

  constructor(private raceService: RaceService,
    private statService: StatService,
    private professionService: ProfessionService,
    private exporterService: ExporterService) { }

  public async ngOnInit() {
    this.character = new model.Character();
    this.character.name = 'John Marston';
    this.getProfessions();
    this.getRaces();

    // sleep for a second first
    await new Promise((resolve) => setTimeout(resolve, 200));
    this.updateStats();
  }

  public async exportJSON() {
    await new Promise(() => {
      this.exporterService.exportAsJSON(this.character);
    });
  }

  public async exportFormatted() {
    await new Promise(() => {
      this.exporterService.exportAsFormatted(this.character);
    });
  }

  public updateStats() {
    this.statService.getStatCategories().subscribe((cats) => {
      this.character.statCategories = cats;
      if (this.character.profession) {
        this.applyModifiers(this.character.profession.modifiers);
      }
      if (this.character.race) {
        this.applyModifiers(this.character.race.modifiers);
      }
    });
  }

  private applyModifiers(mods: model.Modifier[]) {
    if (!mods) {
      return;
    }
    for (const mod of mods) {
      const statParts = mod.stat.split('.');
      // TODO: modify amount with dice roll
      this.modifyStat(statParts[0], statParts[1], mod.amount);
    }
  }

  private modifyStat(category: string, name: string, value: number) {
    for (const cat of this.character.statCategories) {
      if (cat.name !== category) {
        continue;
      }
      for (const stat of cat.stats) {
        if (stat.name !== name) {
          continue;
        }
        stat.value += value;
        break;
      }
      break;
    }
  }

  private getProfessions() {
    this.professionService.getProfessions().subscribe((professions) => {
      this.professions = professions;
      if (this.professions.length > 0) {
        this.character.profession = this.professions[0];
      }
    });
  }

  private getRaces() {
    this.raceService.getRaces().subscribe((races) => {
      this.races = races;
      if (this.races.length > 0) {
        this.character.race = this.races[0];
      }
    });
  }
}
