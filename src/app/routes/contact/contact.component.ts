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
    
    title = "联系我们";
	
	private _map: any;
    onReady(map: any) {
        this._map = map;
        map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
        map.addControl(new BMap.MapTypeControl());
        map.setCurrentCity("上海");
        map.enableScrollWheelZoom(true);

        this.addCompanyIcon();
    }

    addCompanyIcon(){
        let pt = new BMap.Point(116.404, 39.915);
        let myIcon = new BMap.Icon("http://lbsyun.baidu.com/jsdemo/img/fox.gif", new BMap.Size(300,157));
        let marker2 = new BMap.Marker(pt,{icon:myIcon});  // 创建标注
        
        let label = new BMap.Label("我是文字标注哦",{offset: new BMap.Size(0, 10)});
        marker2.setLabel(label);
        
        this._map.addOverlay(marker2); 
        
    }
	
}
