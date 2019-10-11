import { Component, OnInit, OnDestroy } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { Subscription } from 'rxjs';

interface FolderNode {
  entityName: string;
  id?: number;
  children?: FolderNode[];
}

enum ContentType { Graphic, Chart, Layout, Header }

interface IContentInfo {
  data: any;
  contentType: ContentType;
}

class GraphicInfo implements IContentInfo {
  data: string;
  contentType: ContentType;

  constructor(data: string) {
    this.data = data;

    this.contentType = ContentType.Graphic;
  }
}

@Component({
  selector: 'graphictoolbox',
  templateUrl: './graphictoolbox.component.html',
  styleUrls: ['./graphictoolbox.component.scss']
})

export class GraphictoolboxComponent implements OnInit, OnDestroy {
  treeControl = new NestedTreeControl<FolderNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FolderNode>();
  activeNode: any;
  private subscription: Subscription;
  graphics: any;

  constructor() {
  }

  ngOnInit() {
    this.dataSource.data = [{ "children": [{ "children": [{ "children": [{ "children": [], "id": 0, "entityName": "_Single Screen" }, { "children": [], "id": 0, "entityName": "Multi Screen" }], "id": 0, "entityName": "1. Screen Profiles" }, { "children": [{ "children": [], "id": 0, "entityName": "AppWrappers" }, { "children": [], "id": 0, "entityName": "Single Screen" }], "id": 0, "entityName": "2. Layouts" }, { "children": [{ "children": [{ "children": [{ "children": [], "id": 0, "entityName": "Black&Chrome" }], "id": 0, "entityName": "Analog Meters" }, { "children": [{ "children": [], "id": 0, "entityName": "ApplicationRunners" }, { "children": [], "id": 0, "entityName": "Black&Chrome" }, { "children": [], "id": 0, "entityName": "GlossyShapes" }, { "children": [], "id": 0, "entityName": "IlluminatedGlass" }, { "children": [], "id": 0, "entityName": "KeyboardKeys" }, { "children": [], "id": 0, "entityName": "Navigation" }, { "children": [], "id": 0, "entityName": "PillShapedText" }, { "children": [], "id": 0, "entityName": "WindowForms" }], "id": 0, "entityName": "Buttons" }, { "children": [], "id": 0, "entityName": "Clocks" }, { "children": [], "id": 0, "entityName": "Compressors" }, { "children": [], "id": 0, "entityName": "Counters" }, { "children": [{ "children": [], "id": 0, "entityName": "Black&Chrome" }], "id": 0, "entityName": "Digital Meters" }, { "children": [{ "children": [], "id": 0, "entityName": "Groups" }], "id": 0, "entityName": "Displays" }, { "children": [], "id": 0, "entityName": "Fans" }, { "children": [], "id": 0, "entityName": "Fun Stuff" }, { "children": [{ "children": [], "id": 0, "entityName": "Actuators" }, { "children": [], "id": 0, "entityName": "Control Valve Body and Dampers" }, { "children": [], "id": 0, "entityName": "General Instrument or Function" }, { "children": [], "id": 0, "entityName": "Inline Devices" }, { "children": [], "id": 0, "entityName": "Instrument Lines" }, { "children": [], "id": 0, "entityName": "Miscellaneous Devices" }, { "children": [], "id": 0, "entityName": "Process Control" }, { "children": [], "id": 0, "entityName": "Regulators, Valves and Other Devices" }, { "children": [], "id": 0, "entityName": "Sensors" }, { "children": [], "id": 0, "entityName": "Time Symbols for Logic Diagrams" }], "id": 0, "entityName": "ISA Symbols" }, { "children": [{ "children": [], "id": 0, "entityName": "Black&Chrome" }, { "children": [], "id": 0, "entityName": "Rectangular & Triangular Lights" }, { "children": [], "id": 0, "entityName": "StackLights" }, { "children": [], "id": 0, "entityName": "WarningLights" }], "id": 0, "entityName": "Lights & Indicators" }, { "children": [], "id": 0, "entityName": "Panels" }, { "children": [{ "children": [], "id": 0, "entityName": "SoftShadow" }], "id": 0, "entityName": "Pipes" }, { "children": [], "id": 0, "entityName": "Pumps" }, { "children": [{ "children": [], "id": 0, "entityName": "Black&Chrome" }], "id": 0, "entityName": "Sliders" }, { "children": [{ "children": [], "id": 0, "entityName": "ComputerHardware" }, { "children": [], "id": 0, "entityName": "Generators" }, { "children": [], "id": 0, "entityName": "LabEquipment" }, { "children": [], "id": 0, "entityName": "PackagingContainer" }, { "children": [], "id": 0, "entityName": "Vehicles" }], "id": 0, "entityName": "Static Symbols" }, { "children": [], "id": 0, "entityName": "Switches" }, { "children": [{ "children": [], "id": 0, "entityName": "SoftShadow" }], "id": 0, "entityName": "Valves" }, { "children": [{ "children": [], "id": 0, "entityName": "StainlessSteel" }], "id": 0, "entityName": "Vessels" }, { "children": [], "id": 0, "entityName": "Widgets" }], "id": 0, "entityName": "ArchestrA Symbol Library" }, { "children": [{ "children": [{ "children": [], "id": 0, "entityName": "SE_Domain_Pictograms" }, { "children": [], "id": 0, "entityName": "SE_Markets" }, { "children": [], "id": 0, "entityName": "SE_Picto_1" }, { "children": [], "id": 0, "entityName": "SE_Picto_2" }, { "children": [], "id": 0, "entityName": "SE_Picto_3" }, { "children": [], "id": 0, "entityName": "SE_Symbols_Pictos" }], "id": 0, "entityName": "SE_Branding" }, { "children": [], "id": 0, "entityName": "WW_Icons" }], "id": 0, "entityName": "Icon Library" }, { "children": [{ "children": [], "id": 0, "entityName": "Alarms" }, { "children": [], "id": 0, "entityName": "Dashboard Tools" }, { "children": [], "id": 0, "entityName": "Electrical" }, { "children": [], "id": 0, "entityName": "Equipment" }, { "children": [], "id": 0, "entityName": "Input" }, { "children": [], "id": 0, "entityName": "Meters" }, { "children": [], "id": 0, "entityName": "Others" }, { "children": [], "id": 0, "entityName": "Polar Star" }, { "children": [], "id": 0, "entityName": "Support" }, { "children": [], "id": 0, "entityName": "Trends" }, { "children": [], "id": 0, "entityName": "Unitizers" }], "id": 0, "entityName": "Situational Awareness Library" }, { "children": [{ "children": [{ "children": [], "id": 0, "entityName": "Desktop" }, { "children": [{ "children": [], "id": 0, "entityName": "IPhone6" }], "id": 0, "entityName": "Phone" }, { "children": [], "id": 0, "entityName": "Shared Canvases" }], "id": 0, "entityName": "Canvas" }, { "children": [{ "children": [], "id": 0, "entityName": "Buttons" }, { "children": [], "id": 0, "entityName": "Multi Touch" }], "id": 0, "entityName": "Shared Primitives" }, { "children": [], "id": 0, "entityName": "Widgets" }], "id": 0, "entityName": "ViewApp UI  Library" }], "id": 0, "entityName": "3. Graphics" }, { "children": [{ "children": [], "id": 0, "entityName": "InTouch OMI Apps" }, { "children": [{ "children": [], "id": 0, "entityName": "SQLGrid" }], "id": 0, "entityName": "NET Controls" }], "id": 0, "entityName": "4. Apps" }, { "children": [], "id": 0, "entityName": "5. ViewApp Namespaces" }], "id": 0, "entityName": "_Default Content" }, { "children": [{ "children": [], "id": 0, "entityName": "1. Screen Profiles" }, { "children": [], "id": 0, "entityName": "2. Layouts" }, { "children": [], "id": 0, "entityName": "3. Graphics" }, { "children": [], "id": 0, "entityName": "4. Apps" }, { "children": [], "id": 0, "entityName": "5. ViewApp Namespaces" }, { "children": [], "id": 0, "entityName": "6. External Content" }], "id": 0, "entityName": "My Content" }], "id": 0, "entityName": "Visual ToolBox" }, { "children": [{ "children": [{ "children": [{ "children": [{ "children": [], "id": 0, "entityName": "Plant_Area" }], "id": 0, "entityName": "Plant" }], "id": 0, "entityName": "Site" }, { "children": [{ "children": [], "id": 0, "entityName": "AppEngine" }, { "children": [], "id": 0, "entityName": "Platform" }, { "children": [], "id": 0, "entityName": "Simulator" }, { "children": [], "id": 0, "entityName": "ViewEngine" }], "id": 0, "entityName": "Sys" }], "id": 0, "entityName": "Enterprise" }], "id": 0, "entityName": "Model" }]
    // this.subscription = this.toolboxService.getAllFolders().subscribe( data => {
    //   this.dataSource.data = data;
    //   console.log('alex', data)
    // });
  }

  ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.
    // this.subscription.unsubscribe();
  }

  hasChild = (_: number, node: FolderNode) => !!node.children && node.children.length > 0;

  onClickNode(event, node) {
    event.stopPropagation();
    this.activeNode = node;
    console.log('alex',node) 
    // this.graphics = this.toolboxService.getSymbolsFromFolder(this.activeNode.entityName);
    // console.log(this.graphics);
    this.graphics = [{ "data": null, "contentType": 0, "entityName": "Plant_Area.AlarmState" }, { "data": null, "contentType": 0, "entityName": "Plant_Area.MapPin" }];
  }

  onDragStart(event) {

    const img = new Image();
    img.src = './image.svg';
    event.dataTransfer.setDragImage(img, 10, 10);
    event.dataTransfer.dropEffect = 'copy';
    event.target.style.opacity = '0.4';
    event.dataTransfer.setData('cdata', JSON.stringify(new GraphicInfo(event.target.id)));
  }

  onDragEnd(event) {
    event.target.style.opacity = '1';
  }
}
