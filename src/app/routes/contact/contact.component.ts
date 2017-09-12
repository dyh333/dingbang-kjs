import { Component, ViewChild } from "@angular/core";
import { AbmComponent } from 'angular-baidu-maps';

declare const BMap: any;

@Component({
	selector: "contact-component",
	templateUrl: "./contact.component.html",
	styleUrls: ["./contact.component.css"]
})
export class ContactComponent {
	@ViewChild('map') mapComp: AbmComponent;
	
	private _map: any;
    onReady(map: any) {
        this._map = map;
        map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
        map.addControl(new BMap.MapTypeControl());
        map.setCurrentCity("上海");
        map.enableScrollWheelZoom(true);
    }
	
}
