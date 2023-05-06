import { Component } from "@angular/core";
import { TranslationService } from "src/app/services/translations.service";

@Component({
  selector: "app-language-selector",
  templateUrl: "./language-selector.component.html",
  styleUrls: ["./language-selector.component.css"],
})
export class LanguageSelectorComponent {
  languages = [
    { code: "en", label: "English" },
    { code: "uk", label: "Українська" },
  ];

  constructor(private translationService: TranslationService) {}

  changeLanguage(event: any): void {
    const value = event.target.value;
    if (value) {
      this.translationService.loadTranslations(value).then(() => {
        document.documentElement.lang = value;
      });
    }
  }
}
