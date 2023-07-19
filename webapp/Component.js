jQuery.sap.declare("s2p.mm.im.goodsreceipt.purchaseorder.GR4POS1Extension.Component");

// use the load function for getting the optimized preload file if present
sap.ui.component.load({
	name: "s2p.mm.im.goodsreceipt.purchaseorder",
	// Use the below URL to run the extended application when SAP-delivered application is deployed on SAPUI5 ABAP Repository
	url: "/sap/bc/ui5_ui5/sap/GR4POS1"
		// we use a URL relative to our own component
		// extension application is deployed with customer namespace
});

this.s2p.mm.im.goodsreceipt.purchaseorder.Component.extend("s2p.mm.im.goodsreceipt.purchaseorder.GR4POS1Extension.Component", {
	metadata: {
		manifest: "json"
	}
});