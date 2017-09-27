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
        map.centerAndZoom(new BMap.Point(121.438219,31.243538), 18);
        map.addControl(new BMap.MapTypeControl());
        map.setCurrentCity("上海");
        map.enableScrollWheelZoom(true);

        this.addCompanyIcon();
    }

    addCompanyIcon(){
        let pt = new BMap.Point(121.438219,31.243538);
        let myIcon = new BMap.Icon("http://lbsyun.baidu.com/jsdemo/img/fox.gif", new BMap.Size(300,157));
        // let marker2 = new BMap.Marker(pt,{icon:myIcon});  // 创建标注
        let marker2 = new BMap.Marker(pt);  // 创建标注
        
        let label = new BMap.Label("上海鼎邦会计师事务所",{offset: new BMap.Size(-50, -20)});
        marker2.setLabel(label);
        
        this._map.addOverlay(marker2); 
        
    }
	
}
