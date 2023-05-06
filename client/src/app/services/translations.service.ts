import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class TranslationService {
  private translations: any;

  constructor(private http: HttpClient) {}

  loadTranslations(lang: string): Promise<any> {
    const file = `./assets/i18n/${lang}.json`;

    return new Promise<void>((resolve, reject) => {
      this.http
        .get<any>(file)
        .toPromise()
        .then(
          (translations) => {
            this.translations = translations;
            resolve();
          },
          (error) => {
            console.error(error);
            reject(error);
          }
        );
    });
  }

  translate(key: string): string {
    if (!this.translations) {
      return "";
    }

    return this.translations[key] || "";
  }
}
