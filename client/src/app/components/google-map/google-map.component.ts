import { Component, OnInit } from "@angular/core";
import { Loader } from "@googlemaps/js-api-loader";

@Component({
  selector: "app-google-map",
  templateUrl: "./google-map.component.html",
  styleUrls: ["./google-map.component.css"],
})
export class GoogleMapComponent implements OnInit {
  private map!: google.maps.Map;
  ngOnInit(): void {
    let loader = new Loader({
      apiKey: "AIzaSyAh4D76puDMyTIHM7k5Lsa9ca5zNsO0KGc",
    });
    loader.load().then(() => {
      const portalDiv = document.getElementById("map")!;
      const location = {
        lat: 40.650002,
        lng: -73.949997,
      };
      this.map = new google.maps.Map(portalDiv, {
        center: location,
        zoom: 6,
      });
    });
  }
}
