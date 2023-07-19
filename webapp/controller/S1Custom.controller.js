sap.ui.define([
	"s2p/mm/im/goodsreceipt/purchaseorder/controller/BaseController",
	"sap/ui/model/json/JSONModel",
	"s2p/mm/im/goodsreceipt/purchaseorder/model/formatter",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"ui/s2p/mm/im/lib/materialmaster/controller/ValueHelpController",
	"sap/m/MessageToast",
	"sap/ui/generic/app/navigation/service/NavigationHandler",
	"sap/ui/Device",
	"sap/m/MessageBox",
	"sap/ui/core/MessageType",
	"sap/ui/core/message/Message",
	"sap/ui/model/BindingMode",
	"sap/ui/core/IconColor",
	"s2p/mm/im/goodsreceipt/purchaseorder/controller/utils/SubItemController"
], function (B, J, f, F, b, V, M, N, D, c, d, e, g, I, S) {
	"use strict";
	return sap.ui.controller("s2p.mm.im.goodsreceipt.purchaseorder.GR4POS1Extension.controller.S1Custom", {

		//    formatter: f,
		onInit: function () {
				if (this._SourceOfGR !== "NOREF") {
					this.getOwnerComponent().oComponentData.startupParameters.SourceOfGR = ["NOREF"];
					this.onInit();
				}
			}
			//    _handleOdataError: function (E, t) {
			//        if (!t) {
			//            t = this;
			//        }
			//        t._toggleBusy(false);
			//        if (t.getView().getModel("message")) {
			//            t.getView().getModel("message").fireMessageChange();
			//        }
			//    },
			//    _toggleBusy: function (i) {
			//        if (this.getView().byId("idProductsTable")) {
			//            this.getView().byId("idProductsTable").setBusy(i);
			//            this.getView().byId("idProductsTable").setBusyIndicatorDelay(0);
			//        }
			//    },
			//    onExit: function () {
			//        if (this._oValueHelpController) {
			//            this._oValueHelpController.exit();
			//        }
			//        if (sap.m.InstanceManager.hasOpenPopover()) {
			//            sap.m.InstanceManager.closeAllPopovers();
			//        }
			//        if (sap.m.InstanceManager.hasOpenDialog()) {
			//            sap.m.InstanceManager.closeAllDialogs();
			//        }
			//        this.getView().getModel("message").detachMessageChange(this._onMessageChange, this);
			//    },
			//    onMessagesButtonPress: function (E) {
			//        var m = E.getSource();
			//        this._oMessagePopover.toggle(m);
			//    },
			//    onAfterRendering: function () {
			//        if (this._MessageShown !== undefined && this._MessageShown === false) {
			//            this._oMessagePopover.openBy(this.getView().byId("idMessageIndicator"));
			//            this._MessageShown = true;
			//        }
			//        if (this._SourceOfGR === this._SourceOfGRIsNoReference) {
			//            if (sap.cp && sap.cp.ui.services && sap.cp.ui.services.CopilotApi) {
			//                sap.cp.ui.services.CopilotApi.getChats().then(function (C) {
			//                    this._aCopilotChats = C;
			//                }.bind(this));
			//                this._oCopilotActive = true;
			//                this.getView().getModel("oFrontend").setProperty("/CopilotActive", this._oCopilotActive);
			//            }
			//        }
			//    },
			//    _onMessageChange: function (C) {
			//        if (this.getView().sViewName === "s2p.mm.im.goodsreceipt.purchaseorder.view.S1" && this.getView().byId("idPage").getMessagesIndicator().getDomRef() !== null) {
			//            this._oMessagePopover.openBy(this.getView().byId("idMessageIndicator"));
			//        } else {
			//            this._MessageShown = false;
			//        }
			//    },
			//    _devicehandling: function (m) {
			//        if (this.getView().sViewName === "s2p.mm.im.goodsreceipt.purchaseorder.view.S1") {
			//            if (D.resize.width >= 1900) {
			//                this.getView().addStyleClass("sapUiSizeCompact");
			//            } else if (D.resize.width >= 450) {
			//                this.getView().byId("POInput").setWidth("100%");
			//            } else {
			//                this.getView().byId("POInput").setWidth("100%");
			//                this.getView().byId("idPOItemsCountTableHeader").setWidth("4rem");
			//            }
			//        }
			//    },
			//    _loadAttachmentComponent: function (k) {
			//        try {
			//            var m = this.getView().getModel("oFrontend");
			//            var P = m.getProperty("/Ebeln");
			//            if (P) {
			//                var t = this.getUniqueKey();
			//                var a = "I";
			//                var o = "BUS2017";
			//                var h = this;
			//                if (k) {
			//                    this.temp_objectKey = k;
			//                } else {
			//                    this.temp_objectKey = P + "GR" + t;
			//                }
			//                if (!this.oCompAttachProj) {
			//                    if (this.getOwnerComponent().getModel("oDataHelp").getServiceMetadata().dataServices.schema[0].entityType.length >= 15) {
			//                        this.oCompAttachProj = this.getOwnerComponent().createComponent({
			//                            usage: "attachmentReuseComponent",
			//                            settings: {
			//                                mode: a,
			//                                objectKey: this.temp_objectKey,
			//                                objectType: o
			//                            }
			//                        });
			//                        this.oCompAttachProj.then(function (s) {
			//                            h.byId("idastestcompContainer").setComponent(s);
			//                        });
			//                    } else {
			//                        m.setProperty("/AttachmentVisible", false);
			//                    }
			//                }
			//            }
			//        } catch (i) {
			//            m.setProperty("/AttachmentVisible", false);
			//        }
			//    },
			//    getUniqueKey: function () {
			//        var o = sap.ui.core.format.DateFormat.getDateTimeInstance({ pattern: "ddMMYYYYHHmmss" });
			//        var a = new Date();
			//        return o.format(a);
			//    },
			//    _getInitFrontend: function () {
			//        var m = "50%";
			//        if (!jQuery.support.touch) {
			//            m = "35%";
			//        }
			//        var i = {
			//            saveAsTileTitle: "",
			//            saveAsTileSubtitle: "",
			//            saveAsTileURL: "",
			//            shareOnJamTitle: "",
			//            searchPlaceholderText: "",
			//            fullscreenTitle: "",
			//            searchFieldLabel: "",
			//            visible: false,
			//            DocumentInputVisible: true,
			//            BillOfLadingVisible: true,
			//            HeaderContentVisible: true,
			//            ColumnOpenQuantityVisible: true,
			//            Objectheader: "",
			//            Objectheadertext: "",
			//            CopyButtonVisible: false,
			//            DeleteButtonVisible: false,
			//            PostButtonEnabled: false,
			//            PostButtonVisible: false,
			//            ScanButtonVisible: false,
			//            DocumentDate: this._oDateFormat.format(new Date()),
			//            PostingDate: this._oDateFormat.format(new Date()),
			//            DocumentDate_valueState: sap.ui.core.ValueState.None,
			//            PostingDate_valueState: sap.ui.core.ValueState.None,
			//            ColumnBatchVisible: false,
			//            ColumnManufactureDateVisible: false,
			//            ColumnShelfLifeExpirationDateVisible: false,
			//            ColumnStorageBinVisible: false,
			//            DeliveredQuantityEditable: true,
			//            StockTypeNOREFEnabled: true,
			//            DeliveredUnitEditable: true,
			//            ManufactureDateMandatory_valueState: sap.ui.core.ValueState.None,
			//            ShelfLifeExpirationDateMandatory_valueState: sap.ui.core.ValueState.None,
			//            Items: [],
			//            VersionForPrintingSlipAppSetting: this._aVersionForPrintingSlipAppSetting,
			//            VersionForPrintingSlip: this._aVersionForPrintingSlip,
			//            VersionForPrintingSlip_selectedKey: "0",
			//            SourceOfGR: this._SourceOfGR,
			//            ExtensionSectionVisible: false,
			//            maxSuggestionWidth: m,
			//            CopilotActive: this._oCopilotActive
			//        };
			//        if (this._SourceOfGR === this._SourceOfGRIsPurchaseOrder) {
			//            i.fullscreenTitle = this.getResourceBundle().getText("FULLSCREEN_TITLE_PO");
			//            i.shareOnJamTitle = this.getResourceBundle().getText("FULLSCREEN_TITLE_PO");
			//            i.searchFieldLabel = this.getResourceBundle().getText("SEARCH_FIELD_LABEL_PO");
			//            i.Ebeln_label = this.getResourceBundle().getText("SEARCH_FIELD_LABEL_PO");
			//            i.Ebeln_maxLength = 10;
			//            i.Ebeln_possibleLength = [10];
			//        } else if (this._SourceOfGR === this._SourceOfGRIsProductionOrder) {
			//            i.fullscreenTitle = this.getResourceBundle().getText("FULLSCREEN_TITLE_PROD");
			//            i.shareOnJamTitle = this.getResourceBundle().getText("FULLSCREEN_TITLE_PROD");
			//            i.searchFieldLabel = this.getResourceBundle().getText("SEARCH_FIELD_LABEL_PROD");
			//            i.Ebeln_label = this.getResourceBundle().getText("SEARCH_FIELD_LABEL_PROD");
			//            i.Ebeln_maxLength = 12;
			//            i.Ebeln_possibleLength = [12];
			//            i.BillOfLadingVisible = false;
			//        } else if (this._SourceOfGR === this._SourceOfGRIsNoReference) {
			//            i.fullscreenTitle = this.getResourceBundle().getText("FULLSCREEN_TITLE_NOREF");
			//            i.shareOnJamTitle = this.getResourceBundle().getText("FULLSCREEN_TITLE_NOREF");
			//            i.Objectheader = this.getResourceBundle().getText("OBJECT_HEADER_NOREF");
			//            i.DocumentInputVisible = false;
			//            i.visible = true;
			//            i.BillOfLadingVisible = false;
			//            i.PostButtonVisible = true;
			//            i.ColumnNonVltdGRBlockedStockQty = false;
			//            i.ColumnOpenQuantityVisible = false;
			//            i.ColumnSplitVisible = false;
			//            i.ColumnIsReturnsItemVisible = false;
			//            i.ColumnAccountAssignmentVisible = false;
			//            i.CopyButtonVisible = true;
			//            i.DeleteButtonVisible = true;
			//            i.saveShareEmailActive = false;
			//            i.shareTileActive = false;
			//        } else {
			//            i.fullscreenTitle = this.getResourceBundle().getText("FULLSCREEN_TITLE_DL");
			//            i.shareOnJamTitle = this.getResourceBundle().getText("FULLSCREEN_TITLE_DL");
			//            i.searchFieldLabel = this.getResourceBundle().getText("SEARCH_FIELD_LABEL_DL");
			//            i.Ebeln_label = this.getResourceBundle().getText("SEARCH_FIELD_LABEL_DL");
			//            i.Ebeln_maxLength = 10;
			//            i.Ebeln_possibleLength = [
			//                9,
			//                10
			//            ];
			//        }
			//        return i;
			//    },
			//    _initController: function () {
			//        this._aVersionForPrintingSlip = [];
			//        this._aVersionForPrintingSlip.push({
			//            key: "0",
			//            text: this.getResourceBundle().getText("SELECT_ITEM_OUTPUT_NO")
			//        });
			//        this._aVersionForPrintingSlip.push({
			//            key: "1",
			//            text: this.getResourceBundle().getText("SELECT_ITEM_OUTPUT_IS")
			//        });
			//        this._aVersionForPrintingSlip.push({
			//            key: "2",
			//            text: this.getResourceBundle().getText("SELECT_ITEM_OUTPUT_ISIT")
			//        });
			//        this._aVersionForPrintingSlip.push({
			//            key: "3",
			//            text: this.getResourceBundle().getText("SELECT_ITEM_OUTPUT_CS")
			//        });
			//        this._aVersionForPrintingSlipAppSetting = [
			//            {
			//                key: "0",
			//                text: this.getResourceBundle().getText("SELECT_ITEM_OUTPUT_NO")
			//            },
			//            {
			//                key: "1",
			//                text: this.getResourceBundle().getText("SELECT_ITEM_OUTPUT_IS")
			//            },
			//            {
			//                key: "2",
			//                text: this.getResourceBundle().getText("SELECT_ITEM_OUTPUT_ISIT")
			//            },
			//            {
			//                key: "3",
			//                text: this.getResourceBundle().getText("SELECT_ITEM_OUTPUT_CS")
			//            },
			//            {
			//                key: "none",
			//                text: this.getResourceBundle().getText("SELECT_ITEM_OUTPUT_NONE")
			//            }
			//        ];
			//        this._oPersonalizedDataContainer = {
			//            deliveredQuantityDefault2open: true,
			//            deliveredQuantityDefault20: false,
			//            PresetDocumentItemTextFromPO: false,
			//            SelectPROD: true,
			//            EnableBarcodeScanning: false,
			//            VersionForPrintingSlip: "0"
			//        };
			//        if (this._SourceOfGR !== this._SourceOfGRIsNoReference) {
			//            this._oNavigationServiceFields = {
			//                aHeaderFields: [
			//                    "DocumentDate",
			//                    "PostingDate",
			//                    "Ebeln",
			//                    "DeliveryDocumentByVendor",
			//                    "MaterialDocumentHeaderText",
			//                    "BillOfLading",
			//                    "VersionForPrintingSlip_selectedKey"
			//                ],
			//                aItemFields: [
			//                    "DocumentItem",
			//                    "ItemCounter",
			//                    "DocumentItemText",
			//                    "DeliveredQuantity_input",
			//                    "DeliveredUnit_input",
			//                    "OpenQuantity",
			//                    "Unit",
			//                    "Plant",
			//                    "StorageLocation",
			//                    "StockType_selectedKey",
			//                    "DeliveryCompleted",
			//                    "NonVltdGRBlockedStockQty",
			//                    "StorageLocation_input",
			//                    "ReasonCode",
			//                    "ShelfLifeExpirationDate",
			//                    "ManufactureDate",
			//                    "Selected"
			//                ]
			//            };
			//        } else {
			//            this._oNavigationServiceFields = {
			//                aHeaderFields: [
			//                    "DocumentDate",
			//                    "PostingDate",
			//                    "VersionForPrintingSlip_selectedKey"
			//                ],
			//                aItemFields: [
			//                    "DocumentItem",
			//                    "ItemCounter",
			//                    "Material_Input",
			//                    "MaterialText",
			//                    "Material_Name",
			//                    "POItemsCountTableHeader",
			//                    "OpenQuantity",
			//                    "Unit",
			//                    "Plant",
			//                    "Plant_Input",
			//                    "StorageLocation",
			//                    "StockType_selectedKey",
			//                    "InventorySpecialStockTypeName",
			//                    "StorageLocation_input",
			//                    "ReasonCode",
			//                    "ShelfLifeExpirationDate",
			//                    "ManufactureDate",
			//                    "Selected"
			//                ]
			//            };
			//        }
			//        this._isIntentSupported = {
			//            MaterialMovementDisplay: false,
			//            SupplierDisplay: false,
			//            MaterialDisplay: false,
			//            PurchaseOrderDisplay: false,
			//            BatchCreate: false,
			//            ProductionOrderDisplay: false,
			//            OutboundDeliveryDisplay: false,
			//            InboundDeliveryDisplay: false
			//        };
			//        this._aCopilotChats = [];
			//    },
			//    concatenateNameIdFormatter: function (v, i) {
			//        if (v) {
			//            if (i !== "") {
			//                v = v + " (" + i + ")";
			//            }
			//            return v;
			//        } else {
			//            if (i) {
			//                return i;
			//            } else {
			//                return null;
			//            }
			//        }
			//    },
			//    concatenateDocumentNumberYear: function (s, a) {
			//        if (a && a !== "0000") {
			//            return s + "/" + a;
			//        }
			//        return s;
			//    },
			//    concatenateNumberOfComponents: function (t, n) {
			//        return t + " (" + n + ")";
			//    },
			//    onNavBack: function () {
			//        var C = sap.ushell.Container.getService("CrossApplicationNavigation");
			//        var t = this;
			//        var r = t.getResourceBundle();
			//        var a = true;
			//        var s = JSON.stringify(this._getInnerAppState());
			//        if (s && this._initialDataLoaded && this._initialDataLoaded != null) {
			//            var o = JSON.stringify(this._getInnerAppState(this._initialDataLoaded));
			//            if (o !== s) {
			//                var a = false;
			//                sap.m.MessageBox.confirm(r.getText("MESSAGE_DATA_LOSS"), {
			//                    icon: sap.m.MessageBox.Icon.QUESTION,
			//                    title: r.getText("MESSAGE_DATA_LOSS_TITLE"),
			//                    onClose: h,
			//                    styleClass: "sapUiSizeCompact",
			//                    initialFocus: sap.m.MessageBox.Action.CANCEL
			//                });
			//            }
			//        }
			//        if (a === true) {
			//            C.backToPreviousApp();
			//        }
			//        function h(R) {
			//            if (R === "OK") {
			//                C.backToPreviousApp();
			//            }
			//        }
			//    },
			//    onShareInJamPress: function () {
			//        var a;
			//        var u = new URI().toString().split("#");
			//        if (u[0]) {
			//            a = u[0] + this._generateAppStateExternalUrl();
			//        }
			//        var v = this.getModel("oFrontend");
			//        var s = sap.ui.getCore().createComponent({
			//            name: "sap.collaboration.components.fiori.sharing.dialog",
			//            settings: {
			//                object: {
			//                    id: a,
			//                    share: v.getProperty("/shareOnJamTitle")
			//                }
			//            }
			//        });
			//        s.open();
			//    },
			//    handleSuggest: function (E) {
			//        var t = E.getParameter("suggestValue").trim();
			//        if (t) {
			//            var o = {};
			//            var a = [];
			//            var h = [];
			//            var i = {};
			//            if (t.length > 3) {
			//                a.push(new sap.ui.model.Filter("InboundDelivery", sap.ui.model.FilterOperator.Contains, t));
			//            }
			//            if (this._SourceOfGR === this._SourceOfGRIsPurchaseOrder || this._SourceOfGR === this._SourceOfGRIsInboundDelivery) {
			//                a.push(new sap.ui.model.Filter("VendorName", sap.ui.model.FilterOperator.Contains, t));
			//            }
			//            if (this._SourceOfGR === this._SourceOfGRIsPurchaseOrder) {
			//                a.push(new sap.ui.model.Filter("SupplyingPlant", sap.ui.model.FilterOperator.Contains, t));
			//                a.push(new sap.ui.model.Filter("SupplyingPlantName", sap.ui.model.FilterOperator.Contains, t));
			//            }
			//            o = new sap.ui.model.Filter(a, false);
			//            h.push(o);
			//            h.push(new sap.ui.model.Filter("SourceOfGR", sap.ui.model.FilterOperator.EQ, this._SourceOfGR));
			//            i = new sap.ui.model.Filter(h, true);
			//            this.getView().byId("POInput").removeAllSuggestionColumns();
			//            var T = new sap.m.ColumnListItem({ cells: [new sap.m.Label({ text: "{oData>InboundDelivery}" })] });
			//            if (this._SourceOfGR === this._SourceOfGRIsPurchaseOrder) {
			//                this.getView().byId("POInput").addSuggestionColumn(new sap.m.Column({ header: new sap.m.Label({ text: this.getResourceBundle().getText("PO_SEARCH_FIELD_LABEL") }) }));
			//            } else if (this._SourceOfGR === this._SourceOfGRIsProductionOrder) {
			//                this.getView().byId("POInput").addSuggestionColumn(new sap.m.Column({ header: new sap.m.Label({ text: this.getResourceBundle().getText("PROD_SEARCH_FIELD_LABEL") }) }));
			//            } else {
			//                this.getView().byId("POInput").addSuggestionColumn(new sap.m.Column({ header: new sap.m.Label({ text: this.getResourceBundle().getText("DL_SEARCH_FIELD_LABEL") }) }));
			//            }
			//            if (this._oPersonalizedDataContainer.SelectPROD === true && this._SourceOfGR === this._SourceOfGRIsProductionOrder) {
			//                T.addCell(new sap.m.Label({ text: "{parts:[{path: 'oData>OrderTypeName'},{path: 'oData>OrderType'}], formatter: '.formatter.concatenateNameIdFormatter'}" }));
			//                this.getView().byId("POInput").addSuggestionColumn(new sap.m.Column({ header: new sap.m.Label({ text: this.getResourceBundle().getText("ORDERTYPE_SEARCH_FIELD_LABEL") }) }));
			//                T.addCell(new sap.m.Label({ text: "{path: 'oData>MfgOrderPlannedStartDate', type:'sap.ui.model.type.Date', pattern: 'yyyy/MM/dd' }" }));
			//                this.getView().byId("POInput").addSuggestionColumn(new sap.m.Column({ header: new sap.m.Label({ text: this.getResourceBundle().getText("STARTDATE_SEARCH_FIELD_LABEL") }) }));
			//                T.addCell(new sap.m.Label({ text: "{path: 'oData>MfgOrderPlannedEndDate', type:'sap.ui.model.type.Date', pattern: 'yyyy/MM/dd' }" }));
			//                this.getView().byId("POInput").addSuggestionColumn(new sap.m.Column({ header: new sap.m.Label({ text: this.getResourceBundle().getText("ENDDATE_SEARCH_FIELD_LABEL") }) }));
			//            } else {
			//                if (this._SourceOfGR === this._SourceOfGRIsPurchaseOrder || this._SourceOfGR === this._SourceOfGRIsInboundDelivery) {
			//                    T.addCell(new sap.m.Label({ text: "{oData>VendorName}" }));
			//                    this.getView().byId("POInput").addSuggestionColumn(new sap.m.Column({ header: new sap.m.Label({ text: this.getResourceBundle().getText("SUPPLIER_SEARCH_FIELD_LABEL") }) }));
			//                }
			//                if (this._SourceOfGR === this._SourceOfGRIsPurchaseOrder) {
			//                    T.addCell(new sap.m.Label({ text: "{oData>SupplyingPlant}" }));
			//                    this.getView().byId("POInput").addSuggestionColumn(new sap.m.Column({ header: new sap.m.Label({ text: this.getResourceBundle().getText("SUPPLYINGPLANT_SEARCH_FIELD_LABEL") }) }));
			//                }
			//            }
			//            this.getView().byId("POInput").bindAggregation("suggestionRows", {
			//                path: "/GR4PO_DL_Headers",
			//                model: "oData",
			//                filters: h,
			//                template: T
			//            });
			//            if (this.getView().byId("POInput").getBinding("suggestionRows")) {
			//                this.getView().byId("POInput").getBinding("suggestionRows").attachDataReceived(this._setEbelnPossibleLength, this);
			//            }
			//        }
			//    },
			//    _setEbelnPossibleLength: function (E) {
			//        if (E.getParameter("data") && E.getParameter("data").results.length > 0) {
			//            var a = this.getView().getModel("oFrontend").getProperty("/Ebeln_possibleLength");
			//            var s;
			//            for (var i = 0; i < E.getParameter("data").results.length; i++) {
			//                if (E.getParameter("data").results[i].InboundDelivery || E.getParameter("data").results[i].DeliveryDocument) {
			//                    s = E.getParameter("data").results[i].InboundDelivery || E.getParameter("data").results[i].DeliveryDocument;
			//                } else {
			//                    if (E.getParameter("data").results[i].PurchaseOrder) {
			//                        s = E.getParameter("data").results[i].PurchaseOrder;
			//                    } else {
			//                        s = E.getParameter("data").results[i].OrderID;
			//                    }
			//                }
			//                if (a.indexOf(parseInt(s.length, 10)) === -1) {
			//                    a.push(parseInt(s.length, 10));
			//                    if (this.getView().getModel("oFrontend").getProperty("/Ebeln_maxLength") < parseInt(s.length, 10)) {
			//                        this.getView().getModel("oFrontend").setProperty("/Ebeln_maxLength", parseInt(s.length, 10));
			//                    }
			//                }
			//            }
			//            this.getView().getModel("oFrontend").setProperty("/Ebeln_possibleLength", a);
			//        }
			//    },
			//    handlePOHelp: function (E) {
			//        var r = this.getResourceBundle();
			//        var t = this;
			//        var T = "";
			//        if (this._SourceOfGR === this._SourceOfGRIsPurchaseOrder) {
			//            T = r.getText("TITLE_PO_HELP");
			//        } else if (this._SourceOfGR === this._SourceOfGRIsProductionOrder) {
			//            T = r.getText("TITLE_PROD_HELP");
			//        } else {
			//            T = r.getText("TITLE_DL_HELP");
			//        }
			//        var p = this.getView().byId("POInput");
			//        var s = "";
			//        if (p.getValue().length > 0) {
			//            s = p.getValue();
			//        }
			//        var P = new sap.ui.comp.valuehelpdialog.ValueHelpDialog({
			//            basicSearchText: s,
			//            id: "idValueHelpDialog",
			//            title: T,
			//            supportMultiselect: false,
			//            supportRanges: false,
			//            supportRangesOnly: false,
			//            ok: function (v) {
			//                var w = v.getParameter("tokens");
			//                var R = w[0].data();
			//                var x = "";
			//                P.close();
			//                if (t._SourceOfGR === t._SourceOfGRIsPurchaseOrder) {
			//                    x = R.row.PurchaseOrder;
			//                } else if (t._SourceOfGR === t._SourceOfGRIsProductionOrder) {
			//                    x = R.row.OrderID;
			//                } else {
			//                    x = R.row.DeliveryDocument;
			//                }
			//                if (x) {
			//                    var p = t.getView().byId("POInput");
			//                    p.setValue(x);
			//                    p.fireChangeEvent(x);
			//                }
			//            },
			//            cancel: function (v) {
			//                P.close();
			//            },
			//            afterClose: function () {
			//                P.destroy();
			//            }
			//        });
			//        var a = "";
			//        var o = {};
			//        var C;
			//        if (P.getTable().getMetadata().getElementName() !== "sap.m.Table") {
			//            a = "rows";
			//            C = false;
			//        } else {
			//            a = "items";
			//            C = true;
			//        }
			//        var h = "";
			//        var i = [];
			//        var k = "";
			//        if (t._SourceOfGR === t._SourceOfGRIsPurchaseOrder) {
			//            h = "/PoHelpSet";
			//            i = [
			//                {
			//                    label: r.getText("LABEL_PO_COL"),
			//                    template: "PurchaseOrder"
			//                },
			//                {
			//                    label: r.getText("LABEL_PO_CATEGORY_TEXT"),
			//                    template: "PurchasingDocumentCategoryName"
			//                },
			//                {
			//                    label: r.getText("LABEL_PO_TYPE_TEXT"),
			//                    template: "PurchasingDocumentTypeName"
			//                }
			//            ];
			//            k = "PurchaseOrder,PurchasingDocumentCategoryName,PurchasingDocumentTypeName";
			//            i.push({
			//                label: r.getText("LABEL_SUP_COL"),
			//                template: "Supplier"
			//            });
			//            i.push({
			//                label: r.getText("LABEL_SUP_NAME_COL"),
			//                template: "SupplierName"
			//            });
			//            i.push({
			//                label: r.getText("LABEL_CITY_COL"),
			//                template: "SupplierCityName"
			//            });
			//            k += ",Supplier,SupplierName,SupplierCityName";
			//            i.push({
			//                label: r.getText("SUPPLYINGPLANT_SEARCH_FIELD_LABEL"),
			//                template: "SupplyingPlant"
			//            });
			//            i.push({
			//                label: r.getText("SUPPLYINGPLANTNAME_SEARCH_FIELD_LABEL"),
			//                template: "SupplyingPlantName"
			//            });
			//            k += ",SupplyingPlant,SupplyingPlantName";
			//            i.push({
			//                label: r.getText("LABEL_MATERIAL_COL"),
			//                template: "Material"
			//            });
			//            i.push({
			//                label: r.getText("LABEL_MATERIAL_TXT_COL"),
			//                template: "PurchaseOrderItemText"
			//            });
			//            k += ",Material,PurchaseOrderItemText";
			//        } else if (t._SourceOfGR === t._SourceOfGRIsProductionOrder) {
			//            h = "/MMIMProductionOrderVH";
			//            i = [
			//                {
			//                    label: r.getText("LABEL_PROD_COL"),
			//                    template: "OrderID"
			//                },
			//                {
			//                    label: r.getText("LABEL_MATERIAL_COL"),
			//                    template: "Material"
			//                },
			//                {
			//                    label: r.getText("LABEL_MATERIAL_PROD_TXT_COL"),
			//                    template: "MaterialName"
			//                },
			//                {
			//                    label: r.getText("PRODUCTION_PLANT_LABEL"),
			//                    template: "ProductionPlant"
			//                },
			//                {
			//                    label: r.getText("PLANNING_PLANT_LABEL"),
			//                    template: "PlannedPlant"
			//                },
			//                {
			//                    label: r.getText("PROD_TYPE_LABEL"),
			//                    template: "OrderTypeName"
			//                }
			//            ];
			//            k = "OrderID,Material,MaterialName,ProductionPlant,PlannedPlant,OrderTypeName";
			//        } else {
			//            h = "/InbDelHelpSet";
			//            i = [
			//                {
			//                    label: r.getText("LABEL_DL_COL"),
			//                    template: "DeliveryDocument"
			//                },
			//                {
			//                    label: r.getText("LABEL_DL_ITEM_TEXT"),
			//                    template: "DeliveryDocumentItem"
			//                },
			//                {
			//                    label: r.getText("LABEL_MATERIAL_TXT_COL"),
			//                    template: "DeliveryDocumentItemText"
			//                },
			//                {
			//                    label: r.getText("LABEL_SUP_COL"),
			//                    template: "Supplier"
			//                },
			//                {
			//                    label: r.getText("LABEL_SUP_NAME_COL"),
			//                    template: "SupplierName"
			//                },
			//                {
			//                    label: r.getText("LABEL_CITY_COL"),
			//                    template: "SupplierCityName"
			//                },
			//                {
			//                    label: r.getText("LABEL_PO_COL"),
			//                    template: "PurchaseOrder"
			//                },
			//                {
			//                    label: r.getText("LABEL_PO_ITEMTYPE_TEXT"),
			//                    template: "PurchaseOrderItem"
			//                }
			//            ];
			//            k = "DeliveryDocument,DeliveryDocumentItem,DeliveryDocumentItemText,PurchaseOrder,PurchaseOrderItem,Supplier,SupplierName,SupplierCityName";
			//        }
			//        var l = new sap.ui.model.json.JSONModel({ cols: i });
			//        P.setModel(l, "columns");
			//        if (C === true) {
			//            o = new sap.m.ColumnListItem({ cells: [] });
			//            for (var j = 0; j < i.length; j++) {
			//                o.addCell(new sap.m.Label({ text: "{" + i[j].template + "}" }));
			//            }
			//        }
			//        P.setModel(this.getView().getModel("oData"));
			//        switch (t._SourceOfGR) {
			//        case t._SourceOfGRIsPurchaseOrder:
			//            P.setKey("PurchaseOrder");
			//            break;
			//        case t._SourceOfGRIsInboundDelivery:
			//            P.setKey("DeliveryDocument");
			//            break;
			//        default:
			//            P.setKey("OrderID");
			//            break;
			//        }
			//        var m = new sap.ui.comp.filterbar.FilterBar({
			//            advancedMode: true,
			//            expandAdvancedArea: true,
			//            search: function (E) {
			//                var v = sap.ui.getCore().byId("idSearch");
			//                var w = v.getValue();
			//                var x = E.getParameter("selectionSet");
			//                var y = x.reduce(function (R, G) {
			//                    if (G.getSelectedItem() && G.getSelectedItem().getKey()) {
			//                        R.push(new F({
			//                            path: G.getName(),
			//                            operator: b.Contains,
			//                            value1: G.getSelectedItem().getKey()
			//                        }));
			//                    }
			//                    return R;
			//                }, []);
			//                var z = new sap.ui.model.Filter(y, true);
			//                if (w.length > 0) {
			//                    var A = {
			//                        custom: { "search": w },
			//                        select: k
			//                    };
			//                    if (C === false) {
			//                        P.getTable().bindAggregation(a, {
			//                            path: h,
			//                            parameters: A,
			//                            filters: z
			//                        });
			//                    } else {
			//                        P.getTable().bindAggregation(a, {
			//                            path: h,
			//                            template: o,
			//                            parameters: A,
			//                            filters: z
			//                        });
			//                    }
			//                    P.getTable().setBusy(true);
			//                } else {
			//                    if (C === false) {
			//                        P.getTable().bindAggregation(a, {
			//                            path: h,
			//                            parameters: { select: k },
			//                            filters: z
			//                        });
			//                    } else {
			//                        P.getTable().bindAggregation(a, {
			//                            path: h,
			//                            template: o,
			//                            parameters: { select: k },
			//                            filters: z
			//                        });
			//                    }
			//                    P.getTable().setBusy(true);
			//                }
			//                P.getTable().getBinding(a).attachDataReceived(function (G) {
			//                    if (G.getParameter("data") && G.getParameter("data").results.length === 0) {
			//                        P.TableStateDataFilled();
			//                    }
			//                    P.getTable().setBusy(false);
			//                    t._setEbelnPossibleLength(G);
			//                }, this);
			//            }
			//        });
			//        var n = new sap.ui.comp.filterbar.FilterGroupItem({
			//            groupName: "PD01",
			//            name: "PurchasingDocumentCategoryName",
			//            label: this.getResourceBundle().getText("LABEL_PO_CATEGORY_TEXT"),
			//            visibleInFilterBar: true
			//        });
			//        if (this._SourceOfGR === this._SourceOfGRIsPurchaseOrder) {
			//            var q = [
			//                new sap.ui.core.Item({
			//                    key: "",
			//                    text: this.getResourceBundle().getText("TEXT_ALL_CATERGORIES")
			//                }),
			//                new sap.ui.core.Item({
			//                    key: "F",
			//                    text: this.getResourceBundle().getText("TEXT_PURCHASE_ORDERS")
			//                }),
			//                new sap.ui.core.Item({
			//                    key: "L",
			//                    text: this.getResourceBundle().getText("TEXT_SCHEDULING_AGREEMENT")
			//                })
			//            ];
			//            n.setControl(new sap.m.Select({
			//                name: "PurchasingDocumentCategory",
			//                items: q
			//            }));
			//            m.addFilterGroupItem(n);
			//        }
			//        m.setBasicSearch(new sap.m.SearchField({
			//            id: "idSearch",
			//            value: s,
			//            tooltip: this.getResourceBundle().getText("SEARCH_FIELD_TOOLTIP"),
			//            showSearchButton: false,
			//            search: function (E) {
			//                if (!E.getParameter("clearButtonPressed")) {
			//                    P.getFilterBar().search();
			//                }
			//            }.bind(this)
			//        }));
			//        P.setFilterBar(m);
			//        if (s) {
			//            var u = {
			//                custom: { "search": s },
			//                select: k
			//            };
			//            if (C === false) {
			//                P.getTable().bindAggregation(a, {
			//                    path: h,
			//                    parameters: u
			//                });
			//            } else {
			//                P.getTable().bindAggregation(a, {
			//                    path: h,
			//                    template: o,
			//                    parameters: u
			//                });
			//            }
			//            P.getTable().setBusy(true);
			//            P.getTable().getBinding(a).attachDataReceived(function (v) {
			//                if (v.getParameter("data") && v.getParameter("data").results.length === 0) {
			//                    P.TableStateDataFilled();
			//                }
			//                P.getTable().setBusy(false);
			//                t._setEbelnPossibleLength(v);
			//            }, this);
			//        }
			//        P.open();
			//    },
			//    handleStorageLocationHelp: function (E) {
			//        var v = [];
			//        var a = [];
			//        var m = "";
			//        var p = "";
			//        var s = "";
			//        var h = false;
			//        if (this.getView().sViewName === "s2p.mm.im.goodsreceipt.purchaseorder.view.S1") {
			//            var o = E.getSource();
			//            var P = o.getParent();
			//            var C = P.getCells();
			//            if (this._SourceOfGR !== this._SourceOfGRIsNoReference) {
			//                m = C[2].getText();
			//                m = m.substr(1, m.length - 1);
			//                this._SelectedTableIndex = this._getSelectedItemInModel(E);
			//                var j = this.getView().getModel("oFrontend");
			//                var k = j.getProperty("/Items");
			//                p = k[this._SelectedTableIndex].Plant;
			//                s = k[this._SelectedTableIndex].StockType_selectedKey;
			//                v = k[this._SelectedTableIndex].StockType_input;
			//            } else {
			//                this._SelectedTableIndex = this._getSelectedItemInModel(E);
			//                var j = this.getView().getModel("oFrontend");
			//                var k = j.getProperty("/Items");
			//                m = k[this._SelectedTableIndex].Material_Input;
			//                p = k[this._SelectedTableIndex].Plant;
			//                s = k[this._SelectedTableIndex].StockType_selectedKey;
			//                v = k[this._SelectedTableIndex].StockType_input;
			//            }
			//        }
			//        if (this.getView().sViewName === "s2p.mm.im.goodsreceipt.purchaseorder.view.S2") {
			//            var l = this.getModel("oItem");
			//            if (this._SourceOfGR !== this._SourceOfGRIsNoReference) {
			//                m = l.getProperty("/Material");
			//            } else {
			//                m = l.getProperty("/Material_Input");
			//            }
			//            p = l.getProperty("/Plant");
			//            s = l.getProperty("/StockType_selectedKey");
			//            v = l.getProperty("/StockType_input");
			//        }
			//        for (var i = 0; i < v.length; i++) {
			//            if (v[i].key === s || v[i].key === "" && s === undefined) {
			//                h = v[i].StorLocAutoCreationIsAllowed;
			//            }
			//            switch (v[i].key) {
			//            case " ":
			//                a.push("CurrentStock");
			//                break;
			//            case "":
			//                a.push("CurrentStock");
			//                break;
			//            case "2":
			//                a.push("QualityInspectionStockQuantity");
			//                break;
			//            case "3":
			//                a.push("BlockedStockQuantity");
			//            }
			//        }
			//        var t = this;
			//        var n = {};
			//        n.Material = m;
			//        n.Plant = p;
			//        n.StorLocAutoCreationIsAllowed = h;
			//        n.DisplayedStockTypes = a;
			//        if (this._ResetStorageLocationBuffer === true && this._SourceOfGR !== this._SourceOfGRIsNoReference) {
			//            n.resetBuffer = true;
			//            this._ResetStorageLocationBuffer = false;
			//        }
			//        this._oValueHelpController.displayValueHelpStorageLocation4Material(n, function (r) {
			//            t._handleValueHelpStorageLocationCallback(r);
			//        }, t);
			//    },
			//    _isStorageBinInItems: function (a) {
			//        for (var i = 0; i < a.length; i++) {
			//            if (a[i].WarehouseStorageBin) {
			//                return true;
			//            }
			//        }
			//        return false;
			//    },
			//    _handleValueHelpStorageLocationCallback: function (r) {
			//        var s = false;
			//        var m;
			//        var p;
			//        var u;
			//        var a;
			//        var h;
			//        if (r.selected === true) {
			//            var o = this.getModel("oFrontend");
			//            if (this.getView().sViewName === "s2p.mm.im.goodsreceipt.purchaseorder.view.S1") {
			//                o.setProperty("/Items/" + this._SelectedTableIndex + "/StorageLocation", r.StorageLocation);
			//                o.setProperty("/Items/" + this._SelectedTableIndex + "/WarehouseStorageBin", r.StorageBin);
			//                o.setProperty("/Items/" + this._SelectedTableIndex + "/StorageLocation_input", r.StorageLocationName);
			//                o.setProperty("/Items/" + this._SelectedTableIndex + "/StorageLocation_valueState", sap.ui.core.ValueState.None);
			//                o.setProperty("/Items/" + this._SelectedTableIndex + "/StorageLocation_valueStateText", "");
			//                if (this._SourceOfGR !== this._SourceOfGRIsNoReference) {
			//                    s = this._ItemConsistent(o.getProperty("/Items/" + this._SelectedTableIndex));
			//                    if (s === true) {
			//                        o.setProperty("/Items/" + this._SelectedTableIndex + "/SelectEnabled", s);
			//                        o.setProperty("/Items/" + this._SelectedTableIndex + "/Selected", s);
			//                    }
			//                    this._setSelectEnabled(o.getProperty("/Items/" + this._SelectedTableIndex));
			//                    this._controlSelectAllAndPostButton();
			//                    this._updateHiglightProperty();
			//                }
			//                m = o.getProperty("/Items/" + this._SelectedTableIndex + "/Material_Input");
			//                p = o.getProperty("/Items/" + this._SelectedTableIndex + "/Plant");
			//                u = o.getProperty("/Items/" + this._SelectedTableIndex + "/DeliveredUnit_input");
			//                a = o.getProperty("/Items/" + this._SelectedTableIndex + "/StorageLocation");
			//                h = o.getProperty("/Items/" + this._SelectedTableIndex + "/StockType_selectedKey");
			//            }
			//            if (this.getView().sViewName === "s2p.mm.im.goodsreceipt.purchaseorder.view.S2") {
			//                var i = this.getView().getModel("oItem");
			//                i.setProperty("/StorageLocation", r.StorageLocation);
			//                i.setProperty("/StorageLocation_input", r.StorageLocationName);
			//                i.setProperty("/WarehouseStorageBin", r.StorageBin);
			//                i.setProperty("/StorageLocation_valueState", sap.ui.core.ValueState.None);
			//                i.setProperty("/StorageLocation_valueStateText", "");
			//                i.setProperty("/ApplyButtonEnabled", this._applyButtonEnabled(i.getData()));
			//                m = i.getProperty("/Material_Input");
			//                p = i.getProperty("/Plant");
			//                u = i.getProperty("/DeliveredUnit_input");
			//                a = i.getProperty("/StorageLocation");
			//                h = i.getProperty("/StockType_selectedKey");
			//                if (this._SourceOfGR !== this._SourceOfGRIsNoReference) {
			//                    s = this._ItemConsistent(i.getData());
			//                    if (s === true) {
			//                        i.setProperty("/SelectEnabled", s);
			//                        i.setProperty("/Selected", s);
			//                    }
			//                }
			//            }
			//            if (this._SourceOfGR === this._SourceOfGRIsNoReference) {
			//                this._handleValidationMasterData(m, u, p, a, this._SelectedTableIndex);
			//                if (this.getView().sViewName === "s2p.mm.im.goodsreceipt.purchaseorder.view.S1") {
			//                    p = o.getProperty("/Items/" + this._SelectedTableIndex + "/Plant");
			//                } else {
			//                    p = i.getProperty("/Plant");
			//                }
			//                this._getControlFields(m, p, this._SelectedTableIndex, h);
			//            }
			//            o.setProperty("/ColumnStorageBinVisible", this._isStorageBinInItems(o.getData().Items));
			//        }
			//    },
			//    handleAUoMHelp: function (E) {
			//        var m = "";
			//        var s = E.getSource();
			//        if (this.getView().sViewName === "s2p.mm.im.goodsreceipt.purchaseorder.view.S2") {
			//            if (this._SourceOfGR !== this._SourceOfGRIsNoReference) {
			//                m = this.getView().getModel("oItem").getProperty("/Material");
			//            } else {
			//                m = this.getView().getModel("oItem").getProperty("/Material_Input");
			//            }
			//        } else {
			//            var p = s.getParent().getParent();
			//            var C = p.getCells();
			//            if (this._SourceOfGR !== this._SourceOfGRIsNoReference) {
			//                m = C[2].getText();
			//                m = m.substr(1, m.length - 1);
			//            } else {
			//                var a = this._getSelectedItemInModel(E);
			//                m = this.getView().getModel("oFrontend").getProperty("/Items/" + a + "/Material_Input");
			//            }
			//            this._SelectedTableIndex = this._getSelectedItemInModel(E);
			//        }
			//        var t = this;
			//        var P = {};
			//        P.Material = m;
			//        this._oValueHelpController.displayValueHelpAUOM4Material(P, function (r) {
			//            t._handleValueHelpAUOMCallback(r);
			//        }, t);
			//    },
			//    handleComponentAUoMHelp: function (E) {
			//        var o = E.getSource().getBindingContext("oItem");
			//        var s = o.getPath();
			//        var m = o.getProperty("Material");
			//        var p = {};
			//        var t = this;
			//        p.Material = m;
			//        this._oValueHelpController.displayValueHelpAUOM4Material(p, function (r) {
			//            if (r.selected === true) {
			//                var a = t.getView().getModel("oItem");
			//                a.setProperty(s + "/EntryUnit", r.AUoM);
			//            }
			//        }, t);
			//    },
			//    _handleValueHelpAUOMCallback: function (r) {
			//        var m = {};
			//        var s;
			//        var p;
			//        var u;
			//        var a;
			//        var h;
			//        var i;
			//        if (r.selected === true) {
			//            if (this.getView().sViewName === "s2p.mm.im.goodsreceipt.purchaseorder.view.S2") {
			//                m = this.getView().getModel("oItem");
			//                if (this._SourceOfGR !== this._SourceOfGRIsNoReference) {
			//                    i = this._ItemConsistent(m.getData());
			//                    if (i === true) {
			//                        m.setProperty("/SelectEnabled", i);
			//                        m.setProperty("/Selected", i);
			//                    }
			//                }
			//                m.setProperty("/DeliveredUnit_input", r.AUoM);
			//                s = m.getProperty("/Material_Input");
			//                p = m.getProperty("/Plant");
			//                u = m.getProperty("/DeliveredUnit_input");
			//                a = m.getProperty("/StorageLocation");
			//                h = m.getProperty("/StockType_selectedKey");
			//            } else {
			//                m = this.getView().getModel("oFrontend");
			//                var j = m.getProperty("/Items");
			//                if (j[this._SelectedTableIndex].DeliveredUnit_input !== r.AUoM) {
			//                    j[this._SelectedTableIndex].DeliveredUnit_input = r.AUoM;
			//                }
			//                if (this._SourceOfGR !== this._SourceOfGRIsNoReference) {
			//                    i = this._ItemConsistent(j[this._SelectedTableIndex], j);
			//                    if (i === true) {
			//                        j[this._SelectedTableIndex].SelectEnabled = i;
			//                        j[this._SelectedTableIndex].Selected = i;
			//                    }
			//                    this._setSelectEnabled(j[this._SelectedTableIndex], j);
			//                    this._controlSelectAllAndPostButton();
			//                    this._updateHiglightProperty();
			//                    if (j[this._SelectedTableIndex].ItemHasComponent && j[this._SelectedTableIndex].ItemComponentVisible) {
			//                        this._calculateComponentQuantity(m.getProperty("/Ebeln"), j[this._SelectedTableIndex], this._SelectedTableIndex);
			//                    }
			//                }
			//                m.setProperty("/Items", j);
			//                s = m.getProperty("/Items/" + this._SelectedTableIndex + "/Material_Input");
			//                p = m.getProperty("/Items/" + this._SelectedTableIndex + "/Plant");
			//                u = m.getProperty("/Items/" + this._SelectedTableIndex + "/DeliveredUnit_input");
			//                a = m.getProperty("/Items/" + this._SelectedTableIndex + "/StorageLocation");
			//                h = m.getProperty("/Items/" + this._SelectedTableIndex + "/StockType_selectedKey");
			//            }
			//            if (this._SourceOfGR === this._SourceOfGRIsNoReference) {
			//                this._handleValidationMasterData(s, u, p, a, this._SelectedTableIndex);
			//                if (this.getView().sViewName === "s2p.mm.im.goodsreceipt.purchaseorder.view.S1") {
			//                    m = this.getView().getModel("oFrontend");
			//                    p = m.getProperty("/Items/" + this._SelectedTableIndex + "/Plant");
			//                } else {
			//                    m = this.getView().getModel("oItem");
			//                    p = m.getProperty("/Plant");
			//                }
			//                this._getControlFields(s, p, this._SelectedTableIndex, h);
			//            }
			//        }
			//    },
			//    handleBatchHelp: function (E) {
			//        if (this._ResetBatchBuffer === true) {
			//            this._ResetBatchBuffer = false;
			//            this._oBatchHelp = {};
			//        }
			//        var i = {};
			//        if (!this._oBatchDialog) {
			//            this._oBatchDialog = sap.ui.xmlfragment(this.getView().getId(), "s2p.mm.im.goodsreceipt.purchaseorder.view.selectBatch", this);
			//            this.getView().addDependent(this._oBatchDialog);
			//            jQuery.sap.syncStyleClass("sapUiSizeCompact", this.getView(), this._oBatchDialog);
			//        }
			//        var m;
			//        var p;
			//        if (this.getView().sViewName === "s2p.mm.im.goodsreceipt.purchaseorder.view.S2") {
			//            i = this.getView().getModel("oItem").getData();
			//            if (this._SourceOfGR === this._SourceOfGRIsNoReference) {
			//                m = i.Material_Input;
			//            } else {
			//                m = i.Material;
			//            }
			//            p = i.Plant;
			//        } else {
			//            var o = this.getView().getModel("oFrontend");
			//            var s = this._getSelectedItemInModel(E);
			//            i = o.getProperty("/Items/" + s);
			//            var a = o.getProperty("/Items");
			//            if (this._SourceOfGR === this._SourceOfGRIsNoReference) {
			//                m = a[s].Material_Input;
			//            } else {
			//                m = a[s].Material;
			//            }
			//            p = a[s].Plant;
			//            this._SelectedTableIndex = s;
			//        }
			//        var h = sap.ui.core.Fragment.byId(this.getView().getId(), "idBatchStockChart");
			//        var k = "";
			//        h.removeAllData();
			//        for (var j = 0; j < i.StockType_input.length; j++) {
			//            switch (i.StockType_input[j].key) {
			//            case " ":
			//                k = "CurrentStock";
			//                break;
			//            case "2":
			//                k = "QualityInspectionStockQuantity";
			//                break;
			//            case "3":
			//                k = "BlockedStockQuantity";
			//                break;
			//            default:
			//                continue;
			//            }
			//            h.addData(new sap.suite.ui.microchart.ComparisonMicroChartData({
			//                color: "Good",
			//                displayValue: "{oBatchCollection>" + k + "_Dis" + "}",
			//                value: "{oBatchCollection>" + k + "_Int" + "}",
			//                title: "{i18n>BATCH_VALUE_HELP_CHART_TITLE_" + k.toUpperCase() + "}"
			//            }));
			//        }
			//        var l = [];
			//        if (this._SourceOfGR !== this._SourceOfGRIsNoReference) {
			//            l.push(new sap.ui.model.Filter("Material", sap.ui.model.FilterOperator.EQ, i.Material));
			//        } else {
			//            l.push(new sap.ui.model.Filter("Material", sap.ui.model.FilterOperator.EQ, i.Material_Input));
			//        }
			//        l.push(new sap.ui.model.Filter("Plant", sap.ui.model.FilterOperator.EQ, i.Plant));
			//        l.push(new sap.ui.model.Filter("StorageLocation", sap.ui.model.FilterOperator.EQ, i.StorageLocation));
			//        l.push(new sap.ui.model.Filter("DeliveryDocumentItem", sap.ui.model.FilterOperator.EQ, i.DocumentItem));
			//        l.push(new sap.ui.model.Filter("InboundDelivery", sap.ui.model.FilterOperator.EQ, this.getView().getModel("oFrontend").getProperty("/Ebeln")));
			//        this.getView().getModel("oData").read("/MaterialBatchHelps", {
			//            filters: l,
			//            success: jQuery.proxy(this._successBatchLoad, this, i),
			//            error: jQuery.proxy(this._handleOdataError, this)
			//        });
			//    },
			//    _successBatchLoad: function (p, o) {
			//        var a = new Array();
			//        for (var i = 0; i < o.results.length; i++) {
			//            var h = {};
			//            h.Batch = o.results[i].Batch;
			//            h.BaseUnit = o.results[i].BaseUnit;
			//            h.BlockedStockQuantity_Dis = this._NumberFormatter.format(o.results[i].BlockedStockQuantity, h.BaseUnit) + " ";
			//            h.CurrentStock_Dis = this._NumberFormatter.format(o.results[i].CurrentStock, h.BaseUnit) + " ";
			//            h.QualityInspectionStockQuantity_Dis = this._NumberFormatter.format(o.results[i].QualityInspectionStockQuantity, h.BaseUnit) + " ";
			//            h.BlockedStockQuantity_Int = parseFloat(o.results[i].BlockedStockQuantity);
			//            h.CurrentStock_Int = parseFloat(o.results[i].CurrentStock);
			//            h.QualityInspectionStockQuantity_Int = parseFloat(o.results[i].QualityInspectionStockQuantity);
			//            h.BlockedStockQuantity = o.results[i].BlockedStockQuantity;
			//            h.CurrentStock = o.results[i].CurrentStock;
			//            h.QualityInspectionStockQuantity = o.results[i].QualityInspectionStockQuantity;
			//            h.Material = o.results[i].Material;
			//            h.Plant = o.results[i].Plant;
			//            h.ShelfLifeExpirationDate = o.results[i].ShelfLifeExpirationDate;
			//            h.ManufactureDate = o.results[i].ManufactureDate;
			//            a.push(h);
			//        }
			//        this._oBatchHelp[p.Material + p.Plant] = a;
			//        var j = new sap.ui.model.json.JSONModel();
			//        j.setDefaultBindingMode("OneWay");
			//        j.setProperty("/BatchCollection", this._oBatchHelp[p.Material + p.Plant]);
			//        var m = this._getMinMaxOfDisplayedStocks(this._oBatchHelp[p.Material + p.Plant], p.StockType_input);
			//        j.setProperty("/minValue", m.minValue);
			//        j.setProperty("/maxValue", m.maxValue);
			//        this._oBatchDialog.setModel(j, "oBatchCollection");
			//        this._oBatchDialog.open();
			//    },
			//    _getMinMaxOfDisplayedStocks: function (C, a) {
			//        var m = {
			//            minValue: 0,
			//            maxValue: 0
			//        };
			//        var s = "";
			//        for (var i = 0; i < a.length; i++) {
			//            switch (a[i].key) {
			//            case "2":
			//                s = "QualityInspectionStockQuantity";
			//                break;
			//            case "3":
			//                s = "BlockedStockQuantity";
			//                break;
			//            default:
			//                s = "CurrentStock";
			//            }
			//            for (var j = 0; j < C.length; j++) {
			//                if (C[j][s + "_Int"] > m.maxValue) {
			//                    m.maxValue = C[j][s + "_Int"];
			//                }
			//                if (C[j][s + "_Int"] < m.minValue) {
			//                    m.minValue = C[j][s + "_Int"];
			//                }
			//            }
			//        }
			//        return m;
			//    },
			//    handleBatchValueHelpSearch: function (E) {
			//        var v = E.getParameter("value");
			//        var o = new sap.ui.model.Filter("Batch", sap.ui.model.FilterOperator.Contains, v);
			//        var a = E.getSource().getBinding("items");
			//        a.filter([o]);
			//    },
			//    handleBatchValueHelpCancel: function (E) {
			//        E.getSource().getBinding("items").filter([]);
			//        this._sComponentBindingPath = "";
			//    },
			//    handleBatchValueHelpConfirm: function (E) {
			//        E.getSource().getBinding("items").filter([]);
			//        var C = E.getParameter("selectedContexts");
			//        var m;
			//        var p;
			//        var u;
			//        var s;
			//        var a;
			//        E.getSource().getBinding("items").filter([]);
			//        if (C.length) {
			//            if (this.getView().sViewName === "s2p.mm.im.goodsreceipt.purchaseorder.view.S2") {
			//                if (this._sComponentBindingPath) {
			//                    var h = C[0].getObject().Batch;
			//                    var i = this.getView().getModel("oItem");
			//                    i.setProperty(this._sComponentBindingPath + "/Batch", h);
			//                    i.setProperty(this._sComponentBindingPath + "/Batch_valueState", sap.ui.core.ValueState.None);
			//                    var o = i.getData();
			//                    var A = this._applyButtonEnabled(o);
			//                    var j = this._ItemConsistent(o);
			//                    i.setProperty("/Selected", j);
			//                    i.setProperty("/SelectEnabled", j);
			//                    i.setProperty("/ApplyButtonEnabled", A);
			//                    this._sComponentBindingPath = "";
			//                    return;
			//                }
			//                this.getView().getModel("oItem").setProperty("/Batch", C[0].getObject().Batch);
			//                this.getView().getModel("oItem").setProperty("/Batch_valueState", sap.ui.core.ValueState.None);
			//                this.getView().getModel("oItem").setProperty("/ShelfLifeExpirationDate", this._oDateFormat.format(C[0].getObject().ShelfLifeExpirationDate));
			//                this.getView().getModel("oItem").setProperty("/ShelfLifeExpirationDate_valueState", sap.ui.core.ValueState.None);
			//                this.getView().getModel("oItem").setProperty("/ManufactureDate", this._oDateFormat.format(C[0].getObject().ManufactureDate));
			//                this.getView().getModel("oItem").setProperty("/ManufactureDate_valueState", sap.ui.core.ValueState.None);
			//                this._setValueStateMandatoryFields(this.getView().getModel("oItem").getData());
			//                if (this._SourceOfGR !== this._SourceOfGRIsNoReference) {
			//                    a = this._ItemConsistent(this.getView().getModel("oItem").getData());
			//                    if (a === true) {
			//                        this.getView().getModel("oItem").setProperty("/SelectEnabled", a);
			//                        this.getView().getModel("oItem").setProperty("/Selected", a);
			//                        this.getView().getModel("oItem").setProperty("/ApplyButtonEnabled", this._applyButtonEnabled(this.getView().getModel("oItem").getData()));
			//                    }
			//                }
			//                m = this.getView().getModel("oItem").getProperty("/Material_Input");
			//                p = this.getView().getModel("oItem").getProperty("/Plant");
			//                u = this.getView().getModel("oItem").getProperty("/DeliveredUnit_input");
			//                s = this.getView().getModel("oItem").getProperty("/StorageLocation");
			//            } else {
			//                var k = this.getView().getModel("oFrontend");
			//                k.setProperty("/Items/" + this._SelectedTableIndex + "/Batch", C[0].getObject().Batch);
			//                k.setProperty("/Items/" + this._SelectedTableIndex + "/Batch_valueState", sap.ui.core.ValueState.None);
			//                k.setProperty("/Items/" + this._SelectedTableIndex + "/ShelfLifeExpirationDate", this._oDateFormat.format(C[0].getObject().ShelfLifeExpirationDate));
			//                k.setProperty("/Items/" + this._SelectedTableIndex + "/ShelfLifeExpirationDate_valueState", sap.ui.core.ValueState.None);
			//                k.setProperty("/Items/" + this._SelectedTableIndex + "/ManufactureDate", this._oDateFormat.format(C[0].getObject().ManufactureDate));
			//                k.setProperty("/Items/" + this._SelectedTableIndex + "/ManufactureDate_valueState", sap.ui.core.ValueState.None);
			//                this._setValueStateMandatoryFields(k.getProperty("/Items/" + this._SelectedTableIndex));
			//                if (this._SourceOfGR !== this._SourceOfGRIsNoReference) {
			//                    a = this._ItemConsistent(k.getProperty("/Items/" + this._SelectedTableIndex));
			//                    if (a === true) {
			//                        k.setProperty("/Items/" + this._SelectedTableIndex + "/SelectEnabled", a);
			//                        k.setProperty("/Items/" + this._SelectedTableIndex + "/Selected", a);
			//                    }
			//                    this._setSelectEnabled(k.getProperty("/Items/" + this._SelectedTableIndex));
			//                    this._controlSelectAllAndPostButton();
			//                    this._updateHiglightProperty();
			//                }
			//                m = k.getProperty("/Items/" + this._SelectedTableIndex + "/Material_Input");
			//                p = k.getProperty("/Items/" + this._SelectedTableIndex + "/Plant");
			//                u = k.getProperty("/Items/" + this._SelectedTableIndex + "/DeliveredUnit_input");
			//                s = k.getProperty("/Items/" + this._SelectedTableIndex + "/StorageLocation");
			//            }
			//            if (this._SourceOfGR === this._SourceOfGRIsNoReference) {
			//                this._handleValidationMasterData(m, u, p, s, this._SelectedTableIndex);
			//                if (this.getView().sViewName === "s2p.mm.im.goodsreceipt.purchaseorder.view.S1") {
			//                    p = k.getProperty("/Items/" + this._SelectedTableIndex + "/Plant");
			//                } else {
			//                    p = k.getProperty("/Plant");
			//                }
			//                this._getControlFields(m, p, this._SelectedTableIndex);
			//            }
			//        }
			//    },
			//    handleDisplayComponentMaterialLinkPress: function (E) {
			//        var m = E.getSource().data("Material");
			//        var i = this.getView().getModel("oItem");
			//        var p = { Material: m };
			//        var h = sap.ui.core.routing.HashChanger.getInstance();
			//        h.setHash("");
			//        this._oNavigationService.navigate("Material", "displayFactSheet", p, this._getInnerAppState("", null, i.getData()));
			//    },
			//    handleCreateBatch: function (E) {
			//        var i = this.getView().getModel("oItem");
			//        var p;
			//        if (this._SourceOfGR === this._SourceOfGRIsNoReference) {
			//            p = {
			//                Material: i.getProperty("/Material_Name"),
			//                Plant: i.getProperty("/Plant")
			//            };
			//        } else {
			//            p = {
			//                Material: i.getProperty("/Material"),
			//                Plant: i.getProperty("/Plant")
			//            };
			//        }
			//        this._ResetBatchBuffer = true;
			//        var h = sap.ui.core.routing.HashChanger.getInstance();
			//        h.setHash("");
			//        if (this._SourceOfGR !== this._SourceOfGRIsNoReference) {
			//            this._oNavigationService.navigate("Batch", "create", p, this._getInnerAppState("", {
			//                DocumentItem: i.getProperty("/DocumentItem"),
			//                ItemCounter: i.getProperty("/ItemCounter")
			//            }));
			//        } else {
			//            this._oNavigationService.navigate("Batch", "create", p, this._getInnerAppState("", { DocumentItem: i.getProperty("/DocumentItem") }));
			//        }
			//    },
			//    handleSearch: function (E) {
			//        var v = E.getParameter("query");
			//        var t = this.getView().byId("idProductsTable");
			//        var m = this.getView().getModel("oFrontend");
			//        var o = t.getBinding("items");
			//        var a = {};
			//        var h = [];
			//        if (v.length > 0) {
			//            h.push(new sap.ui.model.Filter("Material", sap.ui.model.FilterOperator.Contains, v));
			//            h.push(new sap.ui.model.Filter("MaterialName", sap.ui.model.FilterOperator.Contains, v));
			//            h.push(new sap.ui.model.Filter("PurchaseOrderItemText", sap.ui.model.FilterOperator.Contains, v));
			//            a = new sap.ui.model.Filter(h, false);
			//            t.getBinding("items").filter(a);
			//        } else {
			//            t.getBinding("items").filter([]);
			//        }
			//        var r = this.getResourceBundle();
			//        var j = t.getItems();
			//        var k = 0;
			//        for (var i = 0; i < j.length; i++) {
			//            var l = j[i].getCells()[0].getProperty("visible");
			//            if (l == true) {
			//                k++;
			//            }
			//        }
			//        var p = r.getText("TABLE_TOTAL_ITEMS_LABEL", [k]);
			//        m.setProperty("/POItemsCountTableHeader", p);
			//        this._updateStackedBarChartColumn();
			//    },
			//    handleSearchAccounting: function (E) {
			//        var v = E.getParameter("query");
			//        var t = this.getView().byId("idAccountAssingmentsTable");
			//        var o = {};
			//        var a = [];
			//        if (v.length > 0) {
			//            a.push(new sap.ui.model.Filter("GLAccount", sap.ui.model.FilterOperator.Contains, v));
			//            a.push(new sap.ui.model.Filter("GLAccountName", sap.ui.model.FilterOperator.Contains, v));
			//            a.push(new sap.ui.model.Filter("CostCenter", sap.ui.model.FilterOperator.Contains, v));
			//            a.push(new sap.ui.model.Filter("CostCenterName", sap.ui.model.FilterOperator.Contains, v));
			//            a.push(new sap.ui.model.Filter("AssetNumber", sap.ui.model.FilterOperator.Contains, v));
			//            a.push(new sap.ui.model.Filter("AssetNumberName", sap.ui.model.FilterOperator.Contains, v));
			//            a.push(new sap.ui.model.Filter("FunctionalArea", sap.ui.model.FilterOperator.Contains, v));
			//            a.push(new sap.ui.model.Filter("ProfitCenter", sap.ui.model.FilterOperator.Contains, v));
			//            a.push(new sap.ui.model.Filter("ProfitCenterName", sap.ui.model.FilterOperator.Contains, v));
			//            a.push(new sap.ui.model.Filter("Project", sap.ui.model.FilterOperator.Contains, v));
			//            a.push(new sap.ui.model.Filter("ProjectDescription", sap.ui.model.FilterOperator.Contains, v));
			//            a.push(new sap.ui.model.Filter("SalesOrder", sap.ui.model.FilterOperator.Contains, v));
			//            a.push(new sap.ui.model.Filter("OrderID", sap.ui.model.FilterOperator.Contains, v));
			//            a.push(new sap.ui.model.Filter("GoodsRecipientName", sap.ui.model.FilterOperator.Contains, v));
			//            a.push(new sap.ui.model.Filter("UnloadingPointName", sap.ui.model.FilterOperator.Contains, v));
			//            o = new sap.ui.model.Filter(a, false);
			//            t.getBinding("items").filter(o);
			//        } else {
			//            t.getBinding("items").filter([]);
			//        }
			//    },
			//    onDisplayAccountAssignment: function (E) {
			//        if (!this._oAccAssDialog) {
			//            this._oAccAssDialog = sap.ui.xmlfragment("s2p.mm.im.goodsreceipt.purchaseorder.view.accountAssignment", this);
			//            this.getView().addDependent(this._oAccAssDialog);
			//        }
			//        var s = this._getSelectedItemInModel(E);
			//        var o = this.getView().getModel("oFrontend");
			//        var m = o.getData();
			//        var a = JSON.parse(JSON.stringify(m.Items[s]));
			//        for (var i = 0; i < a.AccountAssignments.length; i++) {
			//            a.AccountAssignments[i].ValueColor = this._aSemanticChartColors[i];
			//        }
			//        var h = new sap.ui.model.json.JSONModel();
			//        h.setData(a);
			//        this._oAccAssDialog.setModel(h, "oItem");
			//        var j = E.getSource();
			//        jQuery.sap.delayedCall(0, this, function () {
			//            this._oAccAssDialog.openBy(j);
			//        });
			//    },
			//    handleSelectAll: function (E) {
			//        var s = E.getParameter("selected");
			//        var m = this.getView().getModel("oFrontend");
			//        var a = m.getProperty("/Items");
			//        var v;
			//        if (s) {
			//            for (var i = 0; i < a.length; i++) {
			//                if (a[i].SelectEnabled) {
			//                    a[i].Selected = true;
			//                }
			//            }
			//            for (var i = 0; i < a.length; i++) {
			//                if (this._SourceOfGR !== this._SourceOfGRIsNoReference) {
			//                    m.setProperty("/PostButtonEnabled", true);
			//                }
			//            }
			//            m.setProperty("/CopyButtonVisible", true);
			//            m.setProperty("/DeleteButtonVisible", true);
			//        } else {
			//            for (var i = 0; i < a.length; i++) {
			//                if (a[i].SelectEnabled) {
			//                    a[i].Selected = false;
			//                }
			//                if (this._SourceOfGR !== this._SourceOfGRIsNoReference) {
			//                    m.setProperty("/PostButtonEnabled", false);
			//                }
			//            }
			//            m.setProperty("/CopyButtonVisible", false);
			//            m.setProperty("/DeleteButtonVisible", false);
			//        }
			//        m.setProperty("/Items", a);
			//    },
			//    handleSelect: function (E) {
			//        var s = E.getParameter("selected");
			//        var m = this.getView().getModel("oFrontend");
			//        var a = m.getProperty("/Items");
			//        var h = this._getSelectedItemInModel(E);
			//        var j;
			//        j = a[h].DocumentItem;
			//        var k = 0;
			//        for (var i = 0; i < a.length; i++) {
			//            if (a[i].DocumentItem == j) {
			//                a[i].Selected = s;
			//            }
			//            if (a[i].Selected) {
			//                k++;
			//            }
			//        }
			//        var A = this._allItemsInTableSelected(a);
			//        this._controlSelectAllCheckBox(k > 0, A);
			//        if (this._SourceOfGR !== this._SourceOfGRIsNoReference) {
			//            if (k > 0) {
			//                m.setProperty("/PostButtonEnabled", true);
			//            } else {
			//                m.setProperty("/PostButtonEnabled", false);
			//            }
			//        } else {
			//            var v = false;
			//            if (a[h].Selected === true) {
			//                m.setProperty("/CopyButtonVisible", true);
			//                m.setProperty("/DeleteButtonVisible", true);
			//            } else {
			//                if (k === 0) {
			//                    m.setProperty("/CopyButtonVisible", false);
			//                    m.setProperty("/DeleteButtonVisible", false);
			//                }
			//            }
			//        }
			//        m.setProperty("/Items", a);
			//    },
			//    handleInputChange: function (E) {
			//        var i = E.getSource();
			//        if (this.getView().sViewName === "s2p.mm.im.goodsreceipt.purchaseorder.view.S2") {
			//            var o = this.getView().getModel("oItem");
			//            if (this._oQuantFormat.parse(i.getValue()) >= 0) {
			//                o.setProperty("/DeliveredQuantity_valueState", sap.ui.core.ValueState.None);
			//                o.setProperty("/DeliveredQuantity_valueStateText", "");
			//                o.setProperty("/DeliveredQuantity_input", this._oQuantFormat.parse(i.getValue()));
			//                if (this._SourceOfGR !== this._SourceOfGRIsNoReference) {
			//                    if (o.getProperty("/StorageLocation_input") === "" && o.getProperty("/StorageLocationVisible") == true) {
			//                        o.setProperty("/StorageLocation_valueState", sap.ui.core.ValueState.Error);
			//                        o.setProperty("/StorageLocation_valueStateText", this.getResourceBundle().getText("STORAGELOCATION_VALUE_STATE_TEXT"));
			//                    }
			//                    var a = this._ItemConsistent(o.getData());
			//                    o.setProperty("/Selected", a);
			//                    o.setProperty("/SelectEnabled", a);
			//                    o.setProperty("/ApplyButtonEnabled", this._applyButtonEnabled(o.getData()));
			//                }
			//            } else {
			//                if (this._SourceOfGR !== this._SourceOfGRIsNoReference) {
			//                    o.setProperty("/Selected", false);
			//                    o.setProperty("/SelectEnabled", false);
			//                }
			//                o.setProperty("/ApplyButtonEnabled", false);
			//                o.setProperty("/DeliveredQuantity_valueState", sap.ui.core.ValueState.Error);
			//                o.setProperty("/DeliveredQuantity_valueStateText", this.getResourceBundle().getText("DELIVEREDQUANTITY_VALUE_STATE_TEXT"));
			//            }
			//        } else {
			//            var s = this._getSelectedItemInModel(E);
			//            var m = this.getView().getModel("oFrontend");
			//            if (this._oQuantFormat.parse(i.getValue()) >= 0) {
			//                m.setProperty("/Items/" + s + "/DeliveredQuantity_valueState", sap.ui.core.ValueState.None);
			//                m.setProperty("/Items/" + s + "/DeliveredQuantity_valueStateText", "");
			//                m.setProperty("/Items/" + s + "/DeliveredQuantity_input", this._oQuantFormat.parse(i.getValue()));
			//                if (this._SourceOfGR !== this._SourceOfGRIsNoReference) {
			//                    if (m.getProperty("/Items/" + s + "/StorageLocation_input") == "" && m.getProperty("/Items/" + s + "/StorageLocationVisible") == true) {
			//                        m.setProperty("/Items/" + s + "/StorageLocation_valueState", sap.ui.core.ValueState.Error);
			//                        m.setProperty("/Items/" + s + "/StorageLocation_valueStateText", this.getResourceBundle().getText("STORAGELOCATION_VALUE_STATE_TEXT"));
			//                    }
			//                    var a = this._ItemConsistent(m.getProperty("/Items")[s], m.getProperty("/Items"));
			//                    m.setProperty("/Items/" + s + "/Selected", a);
			//                    m.setProperty("/Items/" + s + "/SelectEnabled", a);
			//                    var h = m.getProperty("/Items");
			//                    this._setSelectEnabled(h[s], h);
			//                    h = m.getProperty("/Items");
			//                    this._controlSelectAllAndPostButton(h);
			//                    this._updateHiglightProperty();
			//                    var p = m.getProperty("/Items/" + s);
			//                    if (p.ItemHasComponent && p.ItemComponentVisible) {
			//                        this._calculateComponentQuantity(m.getProperty("/Ebeln"), p, s);
			//                    }
			//                }
			//            } else {
			//                m.setProperty("/Items/" + s + "/DeliveredQuantity_valueState", sap.ui.core.ValueState.Error);
			//                m.setProperty("/Items/" + s + "/DeliveredQuantity_valueStateText", this.getResourceBundle().getText("DELIVEREDQUANTITY_VALUE_STATE_TEXT"));
			//                m.setProperty("/Items/" + s + "/DeliveredQuantity_input", "");
			//                m.setProperty("/Items/" + s + "/ApplyButtonEnabled", false);
			//                var h = m.getProperty("/Items");
			//                if (this._SourceOfGR !== this._SourceOfGRIsNoReference) {
			//                    m.setProperty("/Items/" + s + "/Selected", false);
			//                    m.setProperty("/Items/" + s + "/SelectEnabled", false);
			//                    this._setSelectEnabled(h[s], h);
			//                }
			//                this._controlSelectAllAndPostButton(h);
			//                this._updateHiglightProperty();
			//            }
			//        }
			//        if (this._SourceOfGR === this._SourceOfGRIsNoReference) {
			//            this._setGuidedTour(s);
			//        }
			//    },
			//    _calculateComponentQuantity: function (i, p, s) {
			//        this.getOwnerComponent().getModel("oData").callFunction("/ComponentMatQty", {
			//            method: "GET",
			//            urlParameters: {
			//                DeliveryDocumentItem: p.DocumentItem,
			//                InboundDelivery: i,
			//                Material: p.Material,
			//                EntryUnit: p.DeliveredUnit_input,
			//                QuantityInEntryUnit: p.DeliveredQuantity_input.toString(),
			//                OrderUnit: p.OrderedQuantityUnit,
			//                SourceOfGR: this._SourceOfGR
			//            },
			//            success: jQuery.proxy(this._successComponentQuantityLoad, this, s),
			//            error: jQuery.proxy(this._handleOdataError, this)
			//        });
			//        this._toggleBusy(true);
			//    },
			//    _successComponentQuantityLoad: function (s, o, r) {
			//        this._toggleBusy(false);
			//        if (o.results) {
			//            var a = this.getView().getModel("oFrontend").getProperty("/Items/" + s);
			//            if (o.results.length > 0) {
			//                var j = S.createSubItemData(a, o.results, this._isIntentSupported.MaterialDisplay, true);
			//                this.getView().getModel("oFrontend").setProperty("/Items/" + s, j);
			//            } else {
			//                for (var i = 0; i < a.SubItems.length; i++) {
			//                    a.SubItems[i].OpenQuantity = 0;
			//                    a.SubItems[i].QuantityInEntryUnit = 0;
			//                }
			//                this.getView().getModel("oFrontend").setProperty("/Items/" + s, a);
			//            }
			//            this._controlSelectAllAndPostButton();
			//            this._updateHiglightProperty();
			//        }
			//    },
			//    handleStockTypeChange: function (E) {
			//        var C = E.getSource().getSelectedItem().data("ControlOfBatchTableField");
			//        var s = E.getSource().getSelectedItem().data("ControlOfReasonCodeTableField");
			//        var a = E.getSource().getSelectedItem().data("ControlOfExpirationDate");
			//        var h = E.getSource().getSelectedItem().data("ControlOfManufactureDate");
			//        var i = {};
			//        var j;
			//        var m;
			//        var p;
			//        var u;
			//        var k;
			//        var l;
			//        if (this.getView().sViewName === "s2p.mm.im.goodsreceipt.purchaseorder.view.S2") {
			//            i = this.getView().getModel("oItem").getData();
			//            this._evaluateFieldControl("Batch", C, i);
			//            this._evaluateFieldControl("GoodsMovementReasonCode", s, i);
			//            this._evaluateFieldControl("ShelfLifeExpirationDate", a, i);
			//            i.ShelfLifeExpirationDate_valueState = sap.ui.core.ValueState.None;
			//            this._evaluateFieldControl("ManufactureDate", h, i);
			//            i.ManufactureDate_valueState = sap.ui.core.ValueState.None;
			//            if (this._SourceOfGR !== this._SourceOfGRIsNoReference) {
			//                if (i.StockType_selectedKey === "U") {
			//                    i.StorageLocationVisible = false;
			//                    i.StorageLocation_valueState = sap.ui.core.ValueState.None;
			//                    i.StorageLocation_valueStateText = "";
			//                    if (i.ItemHasComponent && i.ItemComponentVisible) {
			//                        i.ItemComponentVisible = false;
			//                    }
			//                } else {
			//                    i.StorageLocationVisible = true;
			//                    if (i.StorageLocation_input === "") {
			//                        i.StorageLocation_valueState = sap.ui.core.ValueState.Error;
			//                        i.StorageLocation_valueStateText = this.getResourceBundle().getText("STORAGELOCATION_VALUE_STATE_TEXT");
			//                    }
			//                    if (i.ItemHasComponent && !i.ItemComponentVisible) {
			//                        i.ItemComponentVisible = true;
			//                    }
			//                }
			//            }
			//            this._setValueStateMandatoryFields(i);
			//            this.getView().getModel("oItem").setData(i);
			//            this._setReasonCodeFilter(i);
			//            if (this._SourceOfGR !== this._SourceOfGRIsNoReference) {
			//                j = this._ItemConsistent(i);
			//                this.getView().getModel("oItem").setProperty("/Selected", j);
			//                this.getView().getModel("oItem").setProperty("/SelectEnabled", j);
			//                this.getView().getModel("oItem").setProperty("/ApplyButtonEnabled", this._applyButtonEnabled(i));
			//            }
			//            m = i.Material_Input;
			//            p = i.Plant;
			//            u = i.DeliveredUnit_input;
			//            k = i.StorageLocation;
			//            l = i.StockType_selectedKey;
			//        } else {
			//            var n = this._getSelectedItemInModel(E);
			//            var o = this.getView().getModel("oFrontend");
			//            i = o.getProperty("/Items/" + n);
			//            this._evaluateFieldControl("Batch", C, i);
			//            this._evaluateFieldControl("GoodsMovementReasonCode", s, i);
			//            this._evaluateFieldControl("ShelfLifeExpirationDate", a, i);
			//            i.ShelfLifeExpirationDate_valueState = sap.ui.core.ValueState.None;
			//            this._evaluateFieldControl("ManufactureDate", h, i);
			//            i.ManufactureDate_valueState = sap.ui.core.ValueState.None;
			//            if (this._SourceOfGR !== this._SourceOfGRIsNoReference) {
			//                if (i.StockType_selectedKey === "U") {
			//                    i.StorageLocationVisible = false;
			//                    i.StorageLocation_valueState = sap.ui.core.ValueState.None;
			//                    i.StorageLocation_valueStateText = "";
			//                    if (i.ItemHasComponent && i.ItemComponentVisible) {
			//                        i.ItemComponentVisible = false;
			//                    }
			//                } else {
			//                    i.StorageLocationVisible = true;
			//                    if (i.StorageLocation_input === "") {
			//                        i.StorageLocation_valueState = sap.ui.core.ValueState.Error;
			//                        i.StorageLocation_valueStateText = this.getResourceBundle().getText("STORAGELOCATION_VALUE_STATE_TEXT");
			//                    }
			//                    if (i.ItemHasComponent && !i.ItemComponentVisible) {
			//                        i.ItemComponentVisible = true;
			//                        this._calculateComponentQuantity(o.getProperty("/Ebeln"), i, n);
			//                    }
			//                }
			//            }
			//            this._setValueStateMandatoryFields(i);
			//            o.setProperty("/Items/" + n, i);
			//            if (this._SourceOfGR !== this._SourceOfGRIsNoReference) {
			//                j = this._ItemConsistent(o.getProperty("/Items")[n], o.getProperty("/Items"));
			//                o.setProperty("/Items/" + n + "/Selected", j);
			//                o.setProperty("/Items/" + n + "/SelectEnabled", j);
			//                var q = o.getProperty("/Items");
			//                this._setSelectEnabled(q[n], q);
			//                q = o.getProperty("/Items");
			//                this._controlSelectAllAndPostButton(q);
			//                this._updateHiglightProperty();
			//            }
			//            m = o.getProperty("/Items/" + n + "/Material_Input");
			//            p = o.getProperty("/Items/" + n + "/Plant");
			//            u = o.getProperty("/Items/" + n + "/DeliveredUnit_input");
			//            k = o.getProperty("/Items/" + n + "/StorageLocation");
			//            l = o.getProperty("/Items/" + n + "/StockType_selectedKey");
			//        }
			//        if (i.BatchVisible === true) {
			//            this.getView().getModel("oFrontend").setProperty("/ColumnBatchVisible", true);
			//        }
			//        if (i.ManufactureDateVisible === true) {
			//            this.getView().getModel("oFrontend").setProperty("/ColumnManufactureDateVisible", true);
			//        }
			//        if (i.ShelfLifeExpirationDateVisible === true) {
			//            this.getView().getModel("oFrontend").setProperty("/ColumnShelfLifeExpirationDateVisible", true);
			//        }
			//        if (this._SourceOfGR === this._SourceOfGRIsNoReference) {
			//            this._handleValidationMasterData(m, u, p, k, this._SelectedTableIndex);
			//            if (this.getView().sViewName === "s2p.mm.im.goodsreceipt.purchaseorder.view.S1") {
			//                o = this.getView().getModel("oFrontend");
			//                p = o.getProperty("/Items/" + this._SelectedTableIndex + "/Plant");
			//            } else {
			//                o = this.getView().getModel("oItem");
			//                p = o.getProperty("/Plant");
			//            }
			//            this._getControlFields(m, p, this._SelectedTableIndex, l);
			//        }
			//    },
			//    handleDateChange: function (E) {
			//        var v = sap.ui.core.ValueState.None;
			//        if (E.getParameter("valid") == false || E.getParameters().value == "") {
			//            v = sap.ui.core.ValueState.Error;
			//        }
			//        E.getSource().setValueState(v);
			//        if (this._SourceOfGR !== this._SourceOfGRIsNoReference) {
			//            this._controlSelectAllAndPostButton();
			//        } else {
			//            var s;
			//            var m = this.getView().getModel("oFrontend");
			//            var i = m.getProperty("/Items");
			//            for (var j = 0; j < i.length; j++) {
			//                s = this._validationNoRefItem(j);
			//                if (s === false) {
			//                    m.setProperty("/PostButtonEnabled", false);
			//                    break;
			//                } else {
			//                    m.setProperty("/PostButtonEnabled", true);
			//                }
			//            }
			//        }
			//    },
			//    handleShelfLifeExpirationDateChange: function (E) {
			//        var v = sap.ui.core.ValueState.None;
			//        if (this.getView().sViewName === "s2p.mm.im.goodsreceipt.purchaseorder.view.S1") {
			//            var s = this._getSelectedItemInModel(E);
			//            var m = this.getView().getModel("oFrontend");
			//            var i = m.getProperty("/Items/" + s);
			//            if (m.getProperty("/Items/" + s + "/ShelfLifeExpirationDateVisible") !== true) {
			//                m.setProperty("/Items/" + s + "/ShelfLifeExpirationDate_valueState", v);
			//            }
			//            if (E.getParameter("valid") === false || E.getParameters().value === "") {
			//                v = sap.ui.core.ValueState.Error;
			//                m.setProperty("/Items/" + s + "/ShelfLifeExpirationDate_valueState", v);
			//                m.setProperty("/Items/" + this._SelectedTableIndex + "/ShelfLifeExpirationDate_valueStateText", this.getResourceBundle().getText("SHELFLIFE_VALUE_STATE_TEXT"));
			//            } else {
			//                m.setProperty("/Items/" + s + "/ShelfLifeExpirationDate_valueState", v);
			//            }
			//            this._setValueStateMandatoryFields(i);
			//            m.setProperty("/Items/" + s, i);
			//            var a = this._ItemConsistent(m.getProperty("/Items")[s], m.getProperty("/Items"));
			//            if (this._SourceOfGR !== this._SourceOfGRIsNoReference) {
			//                m.setProperty("/Items/" + s + "/Selected", a);
			//                m.setProperty("/Items/" + s + "/SelectEnabled", a);
			//            }
			//            this._setSelectEnabled(m.getProperty("/Items/" + s));
			//            this._controlSelectAllAndPostButton();
			//            this._updateHiglightProperty();
			//        } else {
			//            if (this.getView().sViewName === "s2p.mm.im.goodsreceipt.purchaseorder.view.S2") {
			//                var i = this.getView().getModel("oItem");
			//                if (i.getData().ShelfLifeExpirationDateVisible !== true) {
			//                    i.setProperty("/ShelfLifeExpirationDate_valueState", v);
			//                }
			//                if (E.getParameter("valid") === false || E.getParameters().value === "") {
			//                    v = sap.ui.core.ValueState.Error;
			//                    i.setProperty("/ShelfLifeExpirationDate_valueState", v);
			//                    i.setProperty("/ShelfLifeExpirationDate_valueStateText", this.getResourceBundle().getText("SHELFLIFE_VALUE_STATE_TEXT"));
			//                } else {
			//                    i.setProperty("/ShelfLifeExpirationDate_valueState", v);
			//                }
			//                this._setValueStateMandatoryFields(i.getData());
			//                var h = this._ItemConsistent(i.getData());
			//                if (this._SourceOfGR !== this._SourceOfGRIsNoReference) {
			//                    i.setProperty("/SelectEnabled", h);
			//                    i.setProperty("/Selected", h);
			//                    i.setProperty("/ApplyButtonEnabled", this._applyButtonEnabled(i.getData()));
			//                }
			//            }
			//        }
			//        if (this._SourceOfGR === this._SourceOfGRIsNoReference) {
			//            this._setGuidedTour(s);
			//        }
			//        this.getView().byId("idShelfLifeExpirationDate").focus();
			//    },
			//    handleManufactureDateChange: function (E) {
			//        var v = sap.ui.core.ValueState.None;
			//        if (this.getView().sViewName === "s2p.mm.im.goodsreceipt.purchaseorder.view.S1") {
			//            var s = this._getSelectedItemInModel(E);
			//            var m = this.getView().getModel("oFrontend");
			//            var i = m.getProperty("/Items/" + s);
			//            if (i.ManufactureDateMandatory === true && E.getParameters().value === "") {
			//                v = sap.ui.core.ValueState.Error;
			//                m.setProperty("/Items/" + s + "/ManufactureDate_valueState", v);
			//                m.setProperty("/Items/" + s + "/ManufactureDate_valueStateText", this.getResourceBundle().getText("PRODUCTION_VALUE_STATE_TEXT"));
			//            } else {
			//                if (E.getParameter("valid") === false) {
			//                    v = sap.ui.core.ValueState.Error;
			//                    m.setProperty("/Items/" + s + "/ManufactureDate_valueState", v);
			//                    m.setProperty("/Items/" + s + "/ManufactureDate_valueStateText", this.getResourceBundle().getText("PRODUCTION_VALUE_STATE_TEXT"));
			//                } else {
			//                    m.setProperty("/Items/" + s + "/ManufactureDate_valueState", v);
			//                    if (i.ShelfLifeExpirationDateEnabled !== true) {
			//                        this._calculateExpirationDate(m.oData.Ebeln, i, s);
			//                    }
			//                }
			//            }
			//            this._setValueStateMandatoryFields(i);
			//            m.setProperty("/Items/" + s, i);
			//            var a = this._ItemConsistent(m.getProperty("/Items")[s], m.getProperty("/Items"));
			//            m.setProperty("/Items/" + s + "/Selected", a);
			//            m.setProperty("/Items/" + s + "/SelectEnabled", a);
			//            this._controlSelectAllAndPostButton();
			//            this._updateHiglightProperty();
			//        } else {
			//            if (this.getView().sViewName === "s2p.mm.im.goodsreceipt.purchaseorder.view.S2") {
			//                var o = this.getView().getModel("oFrontend").getData(o);
			//                var i = this.getView().getModel("oItem");
			//                if (i.getData().ManufactureDateMandatory === true && E.getParameters().value === "") {
			//                    v = sap.ui.core.ValueState.Error;
			//                    i.setProperty("/ManufactureDate_valueState", v);
			//                    i.setProperty("/ManufactureDate_valueStateText", this.getResourceBundle().getText("PRODUCTION_VALUE_STATE_TEXT"));
			//                } else {
			//                    if (E.getParameter("valid") === false) {
			//                        v = sap.ui.core.ValueState.Error;
			//                        i.setProperty("/ManufactureDate_valueState", v);
			//                        i.setProperty("/ManufactureDate_valueStateText", this.getResourceBundle().getText("PRODUCTION_VALUE_STATE_TEXT"));
			//                    } else {
			//                        i.setProperty("/ManufactureDate_valueState", v);
			//                        if (i.getData().ShelfLifeExpirationDateEnabled !== true) {
			//                            this._calculateExpirationDate(o.Ebeln, i.getData());
			//                        }
			//                    }
			//                }
			//                this._setValueStateMandatoryFields(i.getData());
			//                var h = this._ItemConsistent(i.getData());
			//                if (this._SourceOfGR !== this._SourceOfGRIsNoReference) {
			//                    i.setProperty("/SelectEnabled", h);
			//                    i.setProperty("/Selected", h);
			//                    i.setProperty("/ApplyButtonEnabled", this._applyButtonEnabled(i.getData()));
			//                }
			//            }
			//        }
			//        if (this._SourceOfGR === this._SourceOfGRIsNoReference) {
			//            this._setGuidedTour(s);
			//        }
			//        this.getView().byId("idManufactureDate").focus();
			//    },
			//    handleUpperCase: function (E) {
			//        var v = E.getSource().getValue();
			//        if (v) {
			//            E.getSource().setValue(v.toUpperCase());
			//        }
			//    },
			//    handleItemSplit: function (E) {
			//        var s = this._getSelectedItemInModel(E);
			//        var o = this.getView().getModel("oFrontend");
			//        var m = o.getData();
			//        if (m.Items[s].SplitButtonIcon === "sap-icon://add") {
			//            var n = JSON.parse(JSON.stringify(m.Items[s]));
			//            n.ItemCounter = this._getMaxItemOfDocumentIteminModel(m.Items[s].DocumentItem, o);
			//            n.ItemCounter++;
			//            n.SplitEnabled = true;
			//            n.MaterialVisible = false;
			//            n.AccountAssignmentVisible = false;
			//            n.PlantVisible = false;
			//            n.StockTypeVisible = true;
			//            n.DeliveredQuantity_input = 0;
			//            n.SplitButtonIcon = "sap-icon://less";
			//            if (n.SubItems && n.SubItems.length > 0) {
			//                if (n.ComponentAutoAdjusted) {
			//                    n.ComponentIconState = I.Positive;
			//                    if (n.highlight === sap.ui.core.MessageType.Warning) {
			//                        n.highlight = sap.ui.core.MessageType.None;
			//                    }
			//                }
			//                n.ComponentManualAdjusted = false;
			//                n.ComponentAutoAdjusted = false;
			//                for (var i = 0; i < n.SubItems.length; i++) {
			//                    n.SubItems[i].QuantityInEntryUnit = 0;
			//                    n.SubItems[i].OpenQuantity = 0;
			//                }
			//            }
			//            m.Items.splice(++s, 0, n);
			//            o.setData(m);
			//        } else {
			//            m.Items.splice(s, 1);
			//            o.setData(m);
			//        }
			//        var t = this.getView().byId("idProductsTable").getItems();
			//        var a = t.length;
			//        for (var i = 1; i < a; i++) {
			//            if (m.Items[i].SplitButtonIcon === "sap-icon://less") {
			//                t[i].getCells()[9].setTooltip(this.getResourceBundle().getText("LABEL_DISTRIBUTION_DELETE"));
			//            }
			//        }
			//        this._updateStackedBarChartColumn();
			//    },
			//    handleDetailPress: function (E) {
			//        var r = sap.ui.core.UIComponent.getRouterFor(this);
			//        var o = this.getView().getModel("oFrontend");
			//        var i = o.getProperty("/Items");
			//        var s = this._getSelectedItemInModel(E);
			//        r.navTo("subscreen", { POItem: s }, true);
			//    },
			//    handleNavButtonPress: function (E) {
			//        var o = this.getModel("oItem").getData();
			//        var a = this.getModel("oFrontend");
			//        var h = a.getProperty("/Items");
			//        var j;
			//        if (this._aExtendedFields && this._aExtendedFields.length > 0) {
			//            var k = this.getView().byId("idExtensionForm").getElementBinding().getBoundContext().getObject();
			//            for (var i = 0; i < this._aExtendedFields.length; i++) {
			//                if (this._isExtendedField(this._aExtendedFields[i].name) === true) {
			//                    o[this._aExtendedFields[i].name] = k[this._aExtendedFields[i].name];
			//                }
			//            }
			//        }
			//        if (this._SourceOfGR != this._SourceOfGRIsNoReference) {
			//            if (this._applyButtonEnabled(o)) {
			//                if (h) {
			//                    for (var i = 0; i < h.length; i++) {
			//                        if (h[i].DocumentItem === o.DocumentItem && h[i].ItemCounter === o.ItemCounter) {
			//                            if (!o.ComponentManualAdjusted && o.SubItems && o.SubItems.length > 0 && h[i].SubItems && h[i].SubItems.length > 0) {
			//                                var C = S.checkIfSubItemChanged(h[i], o);
			//                                if (C) {
			//                                    o.ComponentIconState = I.Positive;
			//                                    o.ComponentAutoAdjusted = false;
			//                                }
			//                                o.ComponentManualAdjusted = C;
			//                            }
			//                            h[i] = o;
			//                        }
			//                    }
			//                    a.setProperty("/Items", h);
			//                }
			//                this._setSelectEnabled(o, h);
			//            }
			//        } else {
			//            if (h) {
			//                for (var i = 0; i < h.length; i++) {
			//                    if (h[i].DocumentItem === o.DocumentItem && h[i].ItemCounter === o.ItemCounter) {
			//                        h[i] = o;
			//                    }
			//                }
			//                a.setProperty("/Items", h);
			//            }
			//            var l = this.getView().getModel("oItem");
			//            var s = l.getProperty("/DocumentItem");
			//            var m;
			//            m = this.getResourceBundle().getText("ITEM_APPLIED", [s]);
			//            M.show(m, {
			//                duration: 1500,
			//                closeOnBrowserNavigation: false
			//            });
			//        }
			//        var n = null;
			//        if (this.getView().byId("idBatchLabel").getVisible() === true && this.getView().byId("idBatchLabel").getFields().length > 1) {
			//            n = this.getView().byId("idBatchLabel").removeField("idCreateBatchButton");
			//        }
			//        if (n) {
			//            n.detachPress(this.handleCreateBatch, this).destroy();
			//        }
			//        a.setProperty("/ColumnStorageBinVisible", this._isStorageBinInItems(a.getData().Items));
			//        var r = sap.ui.core.UIComponent.getRouterFor(this);
			//        r.navTo("fullscreen", { abort: "false" }, true);
			//    },
			//    handleCancelButtonPress: function (E) {
			//        var o = null;
			//        if (this.getView().byId("idBatchLabel").getVisible() === true && this.getView().byId("idBatchLabel").getFields().length > 1) {
			//            o = this.getView().byId("idBatchLabel").removeField("idCreateBatchButton");
			//        }
			//        if (o) {
			//            o.detachPress(this.handleCreateBatch, this).destroy();
			//        }
			//        var r = sap.ui.core.UIComponent.getRouterFor(this);
			//        r.navTo("fullscreen", { abort: "true" }, true);
			//    },
			//    _handleRouteMatched: function (E, C) {
			//        if (C.getView().sViewName === "s2p.mm.im.goodsreceipt.purchaseorder.view.S1" && E.getParameters().name === "subscreenAppState" && C._oDetailPageData) {
			//            var r = sap.ui.core.UIComponent.getRouterFor(C);
			//            var v = r.getView("s2p.mm.im.goodsreceipt.purchaseorder.view.S2", sap.ui.core.mvc.ViewType.XML);
			//            var o = new sap.ui.model.json.JSONModel(C._oDetailPageData);
			//            v.setModel(o, "oItem");
			//            C._oDetailPageData = null;
			//            return;
			//        }
			//        if (C.getView().sViewName === "s2p.mm.im.goodsreceipt.purchaseorder.view.S1" && E.getParameters().name === "fullscreen") {
			//            var a = "true";
			//            a = E.getParameter("arguments").abort;
			//            var h = C.getView().getModel("oFrontend");
			//            var k = h.getProperty("/Items");
			//            if (a === "false") {
			//                if (C._SourceOfGR !== C._SourceOfGRIsNoReference) {
			//                    C._controlSelectAllAndPostButton(k);
			//                    C._updateHiglightProperty();
			//                } else {
			//                    C._updateHiglightProperty();
			//                    var s;
			//                    var l = false;
			//                    for (var j = 0; j < k.length; j++) {
			//                        s = C._validationNoRefItem(j);
			//                        var m = C.getView().getModel("oFrontend");
			//                        if (k[j].BatchVisible === true && l === false) {
			//                            m.setProperty("/ColumnBatchVisible", true);
			//                        }
			//                        if (s === false) {
			//                            m = C.getView().getModel("oFrontend");
			//                            m.setProperty("/PostButtonEnabled", false);
			//                            break;
			//                        } else {
			//                            m = C.getView().getModel("oFrontend");
			//                            m.setProperty("/PostButtonEnabled", true);
			//                        }
			//                    }
			//                }
			//            }
			//            for (var i = 0; i < k.length; i++) {
			//                if (k[i].Selected) {
			//                    h.setProperty("/CopyButtonVisible", true);
			//                    h.setProperty("/DeleteButtonVisible", true);
			//                }
			//            }
			//        } else {
			//            if (C.getView().sViewName === "s2p.mm.im.goodsreceipt.purchaseorder.view.S1" && (E.getParameters().name === "fullscreen2" || E.getParameters().name === "fullscreen3")) {
			//                var H = sap.ui.core.routing.HashChanger.getInstance();
			//                var n = H.getHash();
			//                if (n.indexOf("key") > -1) {
			//                    var K = n.split("/");
			//                    if (K.length >= 2) {
			//                        var p = K[K.length - 1];
			//                        var P = C.getView().byId("POInput");
			//                        if (P.getValue() !== p) {
			//                            P.setValue(p);
			//                            P.fireChangeEvent(p);
			//                        }
			//                    }
			//                }
			//            } else {
			//                if (C.getView().sViewName === "s2p.mm.im.goodsreceipt.purchaseorder.view.S1" && E.getParameters().name === "fullscreen4") {
			//                } else {
			//                    var r = sap.ui.core.UIComponent.getRouterFor(C);
			//                    var q = C.getModel("oFrontend").getProperty("/Items/" + E.getParameter("arguments").POItem + "/");
			//                    var t = {};
			//                    jQuery.extend(true, t, q);
			//                    var u = new sap.ui.model.json.JSONModel(t);
			//                    var v = r.getView("s2p.mm.im.goodsreceipt.purchaseorder.view.S2", sap.ui.core.mvc.ViewType.XML);
			//                    if (C._SourceOfGR === C._SourceOfGRIsNoReference) {
			//                        var s = C._validationNoRefItem(E.getParameter("arguments").POItem);
			//                        if (s === false) {
			//                            u.setProperty("/ApplyButtonEnabled", false);
			//                        } else {
			//                            if (q.Material_Input === "") {
			//                                u.setProperty("/ApplyButtonEnabled", false);
			//                            } else {
			//                                u.setProperty("/ApplyButtonEnabled", true);
			//                            }
			//                        }
			//                    } else {
			//                        var w = C._ItemConsistent(q);
			//                        u.setProperty("/SelectEnabled", w);
			//                        u.setProperty("/Selected", w);
			//                        u.setProperty("/ApplyButtonEnabled", C._applyButtonEnabled(q));
			//                    }
			//                    v.setModel(u, "oItem");
			//                    v.setModel(C.getModel("oFrontend"), "oFrontend");
			//                    v.getController()._setReasonCodeFilter(u.getData());
			//                    v.byId("idTableSearchAccounting").setValue("");
			//                    var x = C.getModel("oFrontend").getProperty("/CreateBatchActive");
			//                    if (q.BatchVisible === true && x === true) {
			//                        v.byId("idBatchLabel").addField(new sap.m.Button("idCreateBatchButton", {
			//                            visible: true,
			//                            text: "{i18n>BUTTON_CREATE_BATCH}",
			//                            tooltip: "{i18n>TOOLTIP_CREATE_BATCH}",
			//                            enabled: "{oItem>/ItemEnabled}"
			//                        }).attachPress(v.getController().handleCreateBatch, v.getController()));
			//                    }
			//                    if (C._aExtendedFields && C._aExtendedFields.length > 0) {
			//                        var y = C.getOwnerComponent().getModel("oData");
			//                        var z = E.getParameter("arguments").POItem;
			//                        v.byId("idExtensionForm").bindElement({ path: "/GR4PO_DL_Items(InboundDelivery='" + C.getModel("oFrontend").getProperty("/Ebeln") + "',DeliveryDocumentItem='" + q.DocumentItem + "',SourceOfGR='" + C._SourceOfGR + "',AccountAssignmentNumber='')" });
			//                    }
			//                }
			//            }
			//        }
			//    },
			//    _allItemsInTableSelected: function (t) {
			//        var a = [];
			//        if (t) {
			//            a = t;
			//        } else {
			//            var m = this.getView().getModel("oFrontend");
			//            a = m.getProperty("/Items");
			//        }
			//        var s = false;
			//        if (a.length > 0) {
			//            s = true;
			//            for (var i = 0; i < a.length; i++) {
			//                if (a[i].Selected == false && a[i].ItemCounter == 0) {
			//                    s = false;
			//                }
			//            }
			//        }
			//        return s;
			//    },
			//    _oneItemsInTableSelected: function (t) {
			//        var a = [];
			//        if (t) {
			//            a = t;
			//        } else {
			//            var m = this.getView().getModel("oFrontend");
			//            a = m.getProperty("/Items");
			//        }
			//        var s = false;
			//        for (var i = 0; i < a.length; i++) {
			//            if (a[i].Selected == true && a[i].ItemCounter == 0) {
			//                s = true;
			//            }
			//        }
			//        return s;
			//    },
			//    _oneItemsInTableEnabled: function (t) {
			//        var a = [];
			//        if (t) {
			//            a = t;
			//        } else {
			//            var m = this.getView().getModel("oFrontend");
			//            a = m.getProperty("/Items");
			//        }
			//        var s = false;
			//        for (var i = 0; i < a.length; i++) {
			//            if (a[i].SelectEnabled == true && a[i].ItemCounter == 0) {
			//                s = true;
			//            }
			//        }
			//        return s;
			//    },
			//    _ItemConsistent: function (o, t) {
			//        var a;
			//        if (t) {
			//            a = t;
			//        } else {
			//            var m = this.getView().getModel("oFrontend");
			//            a = m.getProperty("/Items");
			//        }
			//        var C = true;
			//        for (var i = 0; i < a.length; i++) {
			//            if (a[i].DocumentItem === o.DocumentItem) {
			//                if (a[i].ItemCounter === o.ItemCounter) {
			//                    C = this._applyButtonEnabled(o);
			//                } else {
			//                    C = this._applyButtonEnabled(a[i]);
			//                }
			//            }
			//        }
			//        return C;
			//    },
			//    _applyButtonEnabled: function (C) {
			//        var E = true;
			//        for (var p in C) {
			//            if (p.indexOf("_valueState") > 0 && p.indexOf("_valueStateText") < 0) {
			//                if (C[p] !== sap.ui.core.ValueState.None && C[p] !== sap.ui.core.ValueState.Success) {
			//                    E = false;
			//                }
			//            }
			//        }
			//        if (E && C.ItemComponentVisible) {
			//            E = S._applyButtonEnabledForSubItems(C);
			//        }
			//        return E;
			//    },
			//    _updateHighlightForEachItem: function (i) {
			//        var h = sap.ui.core.MessageType.None;
			//        for (var p in i) {
			//            if (p.indexOf("_valueState") > 0 && p.indexOf("_valueStateText") < 0) {
			//                if (i[p] === sap.ui.core.ValueState.Error) {
			//                    h = sap.ui.core.MessageType.Error;
			//                    break;
			//                } else if (i[p] === sap.ui.core.ValueState.Warning && h === sap.ui.core.MessageType.None) {
			//                    h = sap.ui.core.MessageType.Warning;
			//                }
			//            }
			//            if (i.ItemComponentVisible && p.indexOf("ComponentIconState") >= 0) {
			//                if (i[p] === I.Negative) {
			//                    h = sap.ui.core.MessageType.Error;
			//                    break;
			//                } else if (i[p] === I.Critical) {
			//                    h = sap.ui.core.MessageType.Warning;
			//                }
			//            }
			//        }
			//        return h;
			//    },
			//    _updateHiglightProperty: function () {
			//        var m = this.getModel("oFrontend");
			//        var t = this.getView().byId("idProductsTable").getItems();
			//        var s = m.getData().Items;
			//        for (var i = 0; i < t.length; i++) {
			//            for (var j = 0; j < s.length; j++) {
			//                if (t[i].getBindingContext("oFrontend").getObject().DocumentItem === s[j].DocumentItem && t[i].getBindingContext("oFrontend").getObject().ItemCounter === s[j].ItemCounter) {
			//                    m.setProperty("/Items/" + j + "/highlight", this._updateHighlightForEachItem(s[j]));
			//                    break;
			//                }
			//            }
			//        }
			//    },
			//    _setValueStateMandatoryFields: function (i) {
			//        var a = "";
			//        for (var p in i) {
			//            if (p.indexOf("Mandatory") > 0 && i[p] === true) {
			//                a = p.substring(0, p.indexOf("Mandatory"));
			//                if (i[a] !== undefined && i[a] === "" || i[a + "_selectedKey"] !== undefined && i[a + "_selectedKey"] === "") {
			//                    i[a + "_valueState"] = sap.ui.core.ValueState.Error;
			//                    i.highlight = sap.ui.core.ValueState.Error;
			//                }
			//            }
			//        }
			//    },
			//    _controlSelectAllCheckBox: function (o, a) {
			//        var s = this.getView().byId("idSelectAll");
			//        if (a) {
			//            s.setSelected(true).setPartiallySelected(false);
			//        } else if (o) {
			//            s.setSelected(true).setPartiallySelected(true);
			//        } else {
			//            s.setSelected(false);
			//        }
			//    },
			//    _controlSelectAllAndPostButton: function (t) {
			//        var i = [];
			//        var m = this.getView().getModel("oFrontend");
			//        if (t) {
			//            i = t;
			//        } else {
			//            i = m.getProperty("/Items");
			//        }
			//        var o = this._oneItemsInTableSelected(i);
			//        var a = this._allItemsInTableSelected(i);
			//        var n = this._SourceOfGR === this._SourceOfGRIsNoReference;
			//        if (m.getProperty("/DocumentDate_valueState") == sap.ui.core.ValueState.None && m.getProperty("/PostingDate_valueState") == sap.ui.core.ValueState.None) {
			//            m.setProperty("/PostButtonEnabled", o || n);
			//        } else {
			//            m.setProperty("/PostButtonEnabled", false);
			//        }
			//        this.getView().byId("idSelectAll").setEnabled(this._oneItemsInTableEnabled(i));
			//        this._controlSelectAllCheckBox(o, a);
			//    },
			//    _setSelectEnabled: function (o, t) {
			//        var a;
			//        var m = this.getView().getModel("oFrontend");
			//        if (t) {
			//            a = t;
			//        } else {
			//            a = m.getProperty("/Items");
			//        }
			//        for (var i = 0; i < a.length; i++) {
			//            if (a[i].DocumentItem == o.DocumentItem && (a[i].Selected !== o.Selected || a[i].SelectEnabled !== o.SelectEnabled)) {
			//                m.setProperty("/Items/" + i + "/SelectEnabled", o.SelectEnabled);
			//                m.setProperty("/Items/" + i + "/Selected", o.Selected);
			//            }
			//        }
			//    },
			//    _getSelectedItemInModel: function (E) {
			//        var p = E.getSource().getBindingContext("oFrontend").getPath();
			//        return parseInt(p.substring(7, p.length));
			//    },
			//    _getMaxItemOfDocumentIteminModel: function (s, o) {
			//        var m = {};
			//        if (!o) {
			//            m = this.getView().getModel("oFrontend");
			//        } else {
			//            m = o;
			//        }
			//        var a = m.getProperty("/Items");
			//        var h = 0;
			//        for (var i = 0; i < a.length; i++) {
			//            if (a[i].DocumentItem === s && a[i].ItemCounter > h) {
			//                h = a[i].ItemCounter;
			//            }
			//        }
			//        return h;
			//    },
			//    _getInnerAppState: function (j, o, a) {
			//        var s = { customData: {} };
			//        var h;
			//        if (!j) {
			//            h = this.getModel("oFrontend").getData();
			//        } else {
			//            h = j;
			//        }
			//        for (var k = 0; k < this._oNavigationServiceFields.aHeaderFields.length; k++) {
			//            s.customData[this._oNavigationServiceFields.aHeaderFields[k]] = h[this._oNavigationServiceFields.aHeaderFields[k]];
			//        }
			//        s.customData.Temp_Key = this.temp_objectKey;
			//        s.customData.Items = h.Items;
			//        if (o) {
			//            s.customData.oBatchCreate = o;
			//        }
			//        if (a) {
			//            s.customData.DetailPageData = a;
			//        }
			//        return s;
			//    },
			//    _getSuccessPostDialogState: function (j) {
			//        var s = { customData: { successPostDialog: j } };
			//        return s;
			//    },
			//    _restoreInnerAppStateSourceOfGRIsNoReference: function (a) {
			//        var j = this.getView().getModel("oFrontend").getData();
			//        for (var k = 0; k < this._oNavigationServiceFields.aHeaderFields.length; k++) {
			//            j[this._oNavigationServiceFields.aHeaderFields[k]] = a[this._oNavigationServiceFields.aHeaderFields[k]];
			//        }
			//        j.Items = a.Items;
			//        this.getView().getModel("oFrontend").setData(j);
			//    },
			//    _setSearchPlaceholderText: function () {
			//        var s = "";
			//        if (this._SourceOfGR === this._SourceOfGRIsPurchaseOrder) {
			//            s = this.getResourceBundle().getText("SEARCH_PLACEHOLDER_TEXT_STO_PO");
			//        } else if (this._SourceOfGR === this._SourceOfGRIsProductionOrder) {
			//            s = this.getResourceBundle().getText("SEARCH_PLACEHOLDER_TEXT_PROD");
			//        } else {
			//            s = this.getResourceBundle().getText("SEARCH_PLACEHOLDER_TEXT_DL");
			//        }
			//        this.getModel("oFrontend").setProperty("/searchPlaceholderText", s);
			//    },
			//    _updateStackedBarChartColumn: function () {
			//        var s = this.getModel("oFrontend").getData();
			//        var a = this.getView().byId("idProductsTable").getItems();
			//        for (var i = 0; i < a.length; i++) {
			//            for (var j = 0; j < s.Items.length; j++) {
			//                if (s.Items[j].AccountAssignmentVisible === true) {
			//                    if (a[i].getBindingContext("oFrontend").getObject().DocumentItem === s.Items[j].DocumentItem && a[i].getBindingContext("oFrontend").getObject().ItemCounter === 0) {
			//                        this._updateStackedBarChart(a[i], s.Items[j]);
			//                        break;
			//                    }
			//                }
			//            }
			//        }
			//    },
			//    onUpdateFinished: function () {
			//        this._updateStackedBarChartColumn();
			//    },
			//    _updateStackedBarChart: function (t, o) {
			//        if (o.AccountAssignmentVisible === true) {
			//            var C = t.getCells();
			//            var s = null;
			//            for (var i = 0; i < C.length; i++) {
			//                if (C[i].getId().indexOf("idAccountAssignment") > 0) {
			//                    s = i;
			//                }
			//            }
			//            t.getCells()[s].getContent()[1].removeAllBars();
			//            var a = o.AccountAssignments.length;
			//            if (a < 2) {
			//                o.AccountAssignments[0].MultipleAcctAssgmtDistrPercent = 100;
			//            }
			//            for (var y = 0; y < o.AccountAssignments.length; y++) {
			//                var h = new sap.suite.ui.microchart.StackedBarMicroChartBar({
			//                    value: parseFloat(o.AccountAssignments[y].MultipleAcctAssgmtDistrPercent),
			//                    displayValue: o.AccountAssignments[y].MultipleAcctAssgmtDistrPercent + " %",
			//                    valueColor: this._aSemanticChartColors[y]
			//                });
			//                t.getCells()[s].getContent()[1].addBar(h);
			//            }
			//        }
			//    },
			//    _setScanButtonVisibility: function () {
			//        if (jQuery.support.touch) {
			//            this.getModel("oFrontend").setProperty("/ScanButtonVisible", this._oPersonalizedDataContainer.EnableBarcodeScanning);
			//        } else {
			//            this.getModel("oFrontend").setProperty("/ScanButtonVisible", false);
			//        }
			//    },
			//    _evaluateFieldControl: function (s, o, i) {
			//        if (o.substring(0, 1) === "1") {
			//            i[s + "Visible"] = true;
			//        } else {
			//            i[s + "Visible"] = false;
			//        }
			//        if (o.substring(1, 2) === "1") {
			//            i[s + "Mandatory"] = true;
			//        } else {
			//            i[s + "Mandatory"] = false;
			//        }
			//        if (o.substring(2, 3) === "1") {
			//            i[s + "Enabled"] = true;
			//        } else {
			//            i[s + "Enabled"] = false;
			//        }
			//        if (o.substring(3, 4) === "1") {
			//            i[s + "ValueHelpVisible"] = true;
			//        } else {
			//            i[s + "ValueHelpVisible"] = false;
			//        }
			//        if (o.substring(4, 5) === "1") {
			//            i[s + "CreateButtonVisible"] = true;
			//        } else {
			//            i[s + "CreateButtonVisible"] = false;
			//        }
			//    },
			//    _setReasonCodeFilter: function (i) {
			//        if (i.GoodsMovementReasonCodeVisible === true) {
			//            var m = this._getMovementType(i);
			//            var a = [];
			//            a.push(new sap.ui.model.Filter("MovementType", sap.ui.model.FilterOperator.EQ, m));
			//            this.getView().byId("idGoodsMovementReasonCodeSelect").getBinding("items").filter(a);
			//        }
			//    },
			//    _calculateExpirationDate: function (E, i, s) {
			//        var o = sap.ui.core.format.DateFormat.getDateTimeInstance({ pattern: "yyyy-MM-dd" });
			//        var G = E;
			//        if (this._SourceOfGR === this._SourceOfGRIsInboundDelivery) {
			//            G = "000" + G;
			//        }
			//        if (this._SourceOfGR === this._SourceOfGRIsPurchaseOrder) {
			//            G = "00" + G;
			//        }
			//        if (this._SourceOfGR === this._SourceOfGRIsNoReference) {
			//            G = "";
			//        }
			//        var m = "";
			//        var a;
			//        if (this._SourceOfGR !== this._SourceOfGRIsNoReference) {
			//            a = i.Material;
			//        } else {
			//            a = i.Material_Input;
			//        }
			//        var h = this._getMovementType(i);
			//        this.getOwnerComponent().getModel("oData").callFunction("/ShelfLifeExpirationDate", {
			//            method: "GET",
			//            urlParameters: {
			//                DeliveryDocumentItem: i.DocumentItem,
			//                InboundDelivery: G,
			//                ManufactureDate: o.format(this._oDateFormat.parse(i.ManufactureDate)),
			//                Material: a,
			//                MovementType: h,
			//                Plant: i.Plant,
			//                SourceOfGR: this._SourceOfGR,
			//                StorageLocation: i.StorageLocation
			//            },
			//            success: jQuery.proxy(this._successExpirationDateLoad, this, s),
			//            error: jQuery.proxy(this._handleOdataError, this)
			//        });
			//    },
			//    _successExpirationDateLoad: function (s, o, r) {
			//        if (o.results[0]) {
			//            if (this.getView().sViewName === "s2p.mm.im.goodsreceipt.purchaseorder.view.S1") {
			//                this.getView().getModel("oFrontend").setProperty("/Items/" + s + "/ShelfLifeExpirationDate", this._oDateFormat.format(o.results[0].ShelfLifeExpirationDate));
			//            } else {
			//                this.getView().getModel("oItem").setProperty("/ShelfLifeExpirationDate", this._oDateFormat.format(o.results[0].ShelfLifeExpirationDate));
			//            }
			//        }
			//    },
			//    _isExtendedField: function (s) {
			//        if (s.lastIndexOf("_COB") === s.length - 4) {
			//            return true;
			//        } else {
			//            return false;
			//        }
			//    },
			//    handleViewSettingsDialogButtonPressed: function (E) {
			//        if (!this._oSettingsDialog) {
			//            this._oSettingsDialog = sap.ui.xmlfragment("s2p.mm.im.goodsreceipt.purchaseorder.view.settings", this);
			//            this.getView().addDependent(this._oSettingsDialog);
			//        }
			//        this._oSettingsDialog.open();
			//    },
			//    handleViewSettingsConfirm: function (E) {
			//        var v = this.getView();
			//        var t = v.byId("idProductsTable");
			//        var p = E.getParameters();
			//        var o = t.getBinding("items");
			//        var s = [];
			//        var P = p.sortItem.getKey();
			//        var a = p.sortDescending;
			//        s.push(new sap.ui.model.Sorter(P, a));
			//        if (P == "Material" || P == "MaterialName") {
			//            s.push(new sap.ui.model.Sorter("DocumentItem_int", false));
			//        }
			//        s.push(new sap.ui.model.Sorter("ItemCounter", false));
			//        o.sort(s);
			//    },
			//    handleViewSettingsCancel: function (E) {
			//    },
			//    handlePost: function () {
			//        if (sap.ui.getCore().getMessageManager().getMessageModel().getData().length > 0) {
			//            sap.ui.getCore().getMessageManager().removeAllMessages();
			//        }
			//        var m = this.getView().getModel("oFrontend");
			//        var o = sap.ui.core.format.DateFormat.getDateTimeInstance({ pattern: "yyyy-MM-dd" });
			//        var j = m.getData();
			//        var a = {};
			//        var C = [];
			//        a.InboundDelivery = "";
			//        var h = m.getProperty("/DocumentDate");
			//        a.DocumentDate = o.format(this._oDateFormat.parse(h)) + "T00:00:00";
			//        h = m.getProperty("/PostingDate");
			//        a.PostingDate = o.format(this._oDateFormat.parse(h)) + "T00:00:00";
			//        a.InboundDelivery = m.getProperty("/Ebeln");
			//        a.SourceOfGR = this._SourceOfGR;
			//        a.DeliveryDocumentByVendor = m.getProperty("/DeliveryDocumentByVendor");
			//        a.MaterialDocumentHeaderText = m.getProperty("/MaterialDocumentHeaderText");
			//        a.Temp_Key = this.temp_objectKey;
			//        a.BillOfLading = m.getProperty("/BillOfLading");
			//        a.VersionForPrintingSlip = m.getProperty("/VersionForPrintingSlip_selectedKey");
			//        var l;
			//        a.Header2Items = new Array();
			//        for (var i = 0; i < j.Items.length; i++) {
			//            l = {};
			//            l.Material = j.Items[i].Material;
			//            if (this._SourceOfGR === this._SourceOfGRIsNoReference) {
			//                l.Material = j.Items[i].Material_Input;
			//            }
			//            l.InboundDelivery = m.getProperty("/Ebeln");
			//            l.DeliveryDocumentItem = j.Items[i].DocumentItem;
			//            l.DocumentItemText = j.Items[i].DocumentItemText;
			//            l.QuantityInEntryUnit = "" + j.Items[i].DeliveredQuantity_input;
			//            l.EntryUnit = j.Items[i].DeliveredUnit_input;
			//            l.OpenQuantity = j.Items[i].OpenQuantity;
			//            l.UnitOfMeasure = j.Items[i].Unit;
			//            l.Plant = j.Items[i].Plant;
			//            l.StorageLocation = j.Items[i].StorageLocation;
			//            l.StockType = j.Items[i].StockType_selectedKey;
			//            if (l.StockType === " ") {
			//                l.StockType = "";
			//            }
			//            l.Batch = j.Items[i].Batch;
			//            l.AcctAssignmentCategory = j.Items[i].AcctAssignmentCategory;
			//            l.AcctAssignmentCategoryName = j.Items[i].AcctAssignmentCategoryName;
			//            l.AssetNumber = j.Items[i].AssetNumber;
			//            l.AssetNumberName = j.Items[i].AssetNumberName;
			//            l.SubAssetNumber = j.Items[i].SubAssetNumber;
			//            l.GLAccount = j.Items[i].GLAccount;
			//            l.GLAccountName = j.Items[i].GLAccountName;
			//            l.Project = j.Items[i].Project;
			//            l.ProjectDescription = j.Items[i].ProjectDescription;
			//            l.InventorySpecialStockType = j.Items[i].InventorySpecialStockType;
			//            l.SalesOrder = j.Items[i].SalesOrder;
			//            l.SalesOrderItem = j.Items[i].SalesOrderItem;
			//            l.WBSElement = j.Items[i].Project;
			//            l.WBSElementDescription = j.Items[i].ProjectDescription;
			//            l.Supplier = j.Items[i].Lifnr;
			//            if (j.Items[i].DeliveryCompleted === true) {
			//                l.DeliveryCompleted = "X";
			//            }
			//            l.UnloadingPointName = j.Items[i].UnloadingPointName;
			//            l.GoodsRecipientName = j.Items[i].GoodsRecipientName;
			//            l.SubItem = j.Items[i].ItemCounter.toString();
			//            l.GoodsMovementReasonCode = j.Items[i].GoodsMovementReasonCode_selectedKey;
			//            if (j.Items[i].ShelfLifeExpirationDate !== "") {
			//                l.ShelfLifeExpirationDate = o.format(this._oDateFormat.parse(j.Items[i].ShelfLifeExpirationDate)) + "T00:00:00";
			//            }
			//            if (j.Items[i].ManufactureDate !== "") {
			//                l.ManufactureDate = o.format(this._oDateFormat.parse(j.Items[i].ManufactureDate)) + "T00:00:00";
			//            }
			//            if (this._aExtendedFields && this._aExtendedFields.length > 0) {
			//                for (var k = 0; k < this._aExtendedFields.length; k++) {
			//                    if (this._isExtendedField(this._aExtendedFields[k].name) === true) {
			//                        l[this._aExtendedFields[k].name] = j.Items[i][this._aExtendedFields[k].name];
			//                    }
			//                }
			//            }
			//            if (this._SourceOfGR !== this._SourceOfGRIsNoReference) {
			//                if (l.QuantityInEntryUnit >= 0 && j.Items[i].Selected === true) {
			//                    if (j.Items[i].ComponentManualAdjusted && j.Items[i].SubItems && l.StockType !== "U") {
			//                        l = S.handleSubItemDataForPosting(l, j.Items[i].SubItems);
			//                    }
			//                    a.Header2Items.push(l);
			//                }
			//            } else {
			//                if (l.QuantityInEntryUnit > 0) {
			//                    a.Header2Items.push(l);
			//                }
			//            }
			//        }
			//        a.Header2Refs = [{}];
			//        this._toggleBusy(true);
			//        this.getView().getModel("oData").create("/GR4PO_DL_Headers", a, {
			//            success: jQuery.proxy(this._handlePostSuccess, this),
			//            error: jQuery.proxy(this._handleOdataError, this)
			//        });
			//    },
			//    _handleErrorResponse: function (j) {
			//        var r, s, a, t, h, k, C, l;
			//        var o = this.getView().getModel("oFrontend");
			//        var n = this._SourceOfGR === this._SourceOfGRIsNoReference;
			//        function m(o, T, p) {
			//            switch (T) {
			//            case "PostingDate":
			//                o.setProperty("/" + T + "_valueState", sap.ui.core.ValueState.Error);
			//                o.setProperty("/" + T + "_valueStateText", p);
			//                break;
			//            default:
			//                r = /Item=(\d*)/g;
			//                a = r.exec(T);
			//                k = /Counter=(\d*)/g;
			//                C = k.exec(T);
			//                if (a) {
			//                    s = a[1];
			//                    l = C[1];
			//                    t = T.substring(T.lastIndexOf("/") + 1, T.length);
			//                    h = o.getProperty("/Items");
			//                    for (var i = 0; i < h.length; i++) {
			//                        if ((h[i].DocumentItem === s || s.endsWith(h[i].DocumentItem)) && (h[i].ItemCounter.toString() === l || l.endsWith(h[i].ItemCounter.toString()))) {
			//                            h[i][t + "_valueState"] = "Error";
			//                            h[i][t + "_valueStateText"] = p;
			//                            h[i].Selected = false;
			//                            h[i].SelectEnabled = n || false;
			//                            h[i].highlight = "Error";
			//                            h[i].ApplyButtonEnabled = false;
			//                            break;
			//                        }
			//                    }
			//                }
			//                break;
			//            }
			//        }
			//        m(o, j.target, j.message);
			//        if (j.details) {
			//            for (var i = 0; i < j.details.length; i++) {
			//                m(o, j.details[i].target, j.details[i].message);
			//            }
			//        }
			//        this._controlSelectAllAndPostButton(o.getProperty("/Items"));
			//    },
			//    _handlePostSuccess: function (o, r) {
			//        this._toggleBusy(false);
			//        var a = r.headers["sap-message"];
			//        var j = JSON.parse(a);
			//        if (j.code === "MIGO/012" || j.code === "MBND_CLOUD/017" || j.code === "MBND_CLOUD/018") {
			//            this._initialDataLoaded = null;
			//            this._openSuccessDialog(o, j);
			//            sap.ui.getCore().getMessageManager().removeAllMessages();
			//            this.getView().getModel("oFrontend").setData(this._getInitFrontend());
			//            this._ResetStorageLocationBuffer = true;
			//            this._ResetBatchBuffer = true;
			//            this.getView().byId("idProductsTable").getBinding("items").filter([]);
			//            this.getView().byId("idSelectAll").setSelected(false);
			//            this.getView().byId("idTableSearch").setValue("");
			//            this.getView().byId("POInput").setValue("");
			//            this.getView().byId("POInput").setEditable(true);
			//            if (this.oCompAttachProj) {
			//                delete this.oCompAttachProj;
			//            }
			//        } else {
			//            if (j.severity === "error" && j.target) {
			//                this._handleErrorResponse(j);
			//            }
			//            if (j.code === "MBND_CLOUD/002") {
			//                var R = [];
			//                var h = {};
			//                h.MessageText = j.message;
			//                h.Severity = j.severity;
			//                var m = j.target.split(";");
			//                h.valueState = m[m.length - 1] + "_valueState";
			//                h.valueStateText = m[m.length - 1] + "_valueStateText";
			//                h.DocumentItem = m[m.length - 2];
			//                R.push(h);
			//                for (var i = 0; i < j.details.length; i++) {
			//                    h = {};
			//                    h.MessageText = j.details[i].message;
			//                    h.Severity = j.details[i].severity;
			//                    var m = j.details[i].target.split(";");
			//                    h.valueState = m[m.length - 1] + "_valueState";
			//                    h.valueStateText = m[m.length - 1] + "_valueStateText";
			//                    h.DocumentItem = m[m.length - 2];
			//                    R.push(h);
			//                }
			//                this._SetStatus(R, this.getView().getModel("oFrontend"), o);
			//            }
			//            this.getView().getModel("message").fireMessageChange();
			//        }
			//    },
			//    _openSuccessDialog: function (o) {
			//        var p, P;
			//        P = {
			//            DialogState: "Success",
			//            DialogTitle: this.getResourceBundle().getText("TITLE_SUCC_POST"),
			//            CopilotEnabled: this._aCopilotChats && this._aCopilotChats.length > 0,
			//            CopilotActive: this.getView().getModel("oFrontend").getProperty("/CopilotActive")
			//        };
			//        if (o.Header2Refs && o.Header2Refs.results.length > 0) {
			//            this._createDataForDocuments(o.Header2Refs.results, P);
			//            p = new sap.ui.model.json.JSONModel(P);
			//            this._oPostDialog.setModel(p);
			//            this._oPostDialog.open();
			//        }
			//    },
			//    _createDataForDocuments: function (h, p) {
			//        var s = [], a = [];
			//        for (var i = 0; i < h.length; i++) {
			//            h[i].CopilotActive = p.CopilotActive;
			//            if (h[i].DocCrtSuccess === "X") {
			//                h[i].LinkActive = !!(this._isIntentSupported[h[i].SemanticObject + "Display"] && h[i].SemanticObject && h[i].SemanticAction && h[i].SemanticParam);
			//                h[i].CopilotEnabled = p.CopilotEnabled && !!(h[i].ServiceName && h[i].NaviTarget && h[i].NaviPath);
			//                s.push(h[i]);
			//            } else {
			//                a.push(h[i]);
			//            }
			//        }
			//        if (a.length > 0) {
			//            p.DialogState = "Warning";
			//            p.DialogTitle = this.getResourceBundle().getText("TITLE_WARN_POST");
			//        }
			//        p.SuccessMessageHeadline = this.getResourceBundle().getText("SUCC_POST_TEXT", s.length);
			//        p.FailedMessageHeadline = this.getResourceBundle().getText("FAIL_POST_TEXT", a.length);
			//        p.FailedMessageHeadlineVisible = a.length > 0;
			//        p.SuccessDocuments = s;
			//        p.FailedDocuments = a;
			//    },
			//    _SetStatus: function (r, o, a) {
			//        var h = {};
			//        if (!o) {
			//            h = this.getView().getModel("oFrontend");
			//        } else {
			//            h = o;
			//        }
			//        var j = h.getProperty("/Items");
			//        for (var i = 0; i < r.length; i++) {
			//            for (var y = 0; y < j.length; y++) {
			//                if (r[i].DocumentItem == j[y].DocumentItem) {
			//                    if (r[i].valueState == "DocumentItem_valueState") {
			//                        j[y].Selected = false;
			//                        j[y].SelectEnabled = false;
			//                        j[y].ItemEnabled = false;
			//                        j[y].SplitEnabled = false;
			//                    } else {
			//                        j[y][r[i].valueState] = sap.ui.core.ValueState.Warning;
			//                        j[y][r[i].valueStateText] = r[i].MessageText;
			//                        for (var z = 0; z < a.Header2Items.results.length; z++) {
			//                            if (j[y].DocumentItem == a.Header2Items.results[z].DeliveryDocumentItem) {
			//                                j[y].Unit = a.Header2Items.results[z].UnitOfMeasure;
			//                                j[y].OpenQuantity = a.Header2Items.results[z].OpenQuantity;
			//                                if (j[y].ItemCounter == 0) {
			//                                    j[y].DeliveredQuantity_input = a.Header2Items.results[z].QuantityInEntryUnit;
			//                                } else {
			//                                    j[y].DeliveredQuantity_input = 0;
			//                                }
			//                                j[y].DeliveredUnit_input = a.Header2Items.results[z].EntryUnit;
			//                            }
			//                        }
			//                    }
			//                }
			//            }
			//        }
			//        h.setProperty("/Items", j);
			//    },
			//    handlePostCloseButton: function (E) {
			//        if (this._SourceOfGR === this._SourceOfGRIsNoReference && this.getView().getModel("oFrontend").getData().Items.length === 0) {
			//            this._getInitialItem(0);
			//        }
			//        var h = sap.ui.core.routing.HashChanger.getInstance();
			//        h.replaceHash("");
			//        this._oPostDialog.close();
			//    },
			//    handleFactSheetLinkPress: function (E) {
			//        var a = E.getSource().getCustomData();
			//        var s = a[0].getValue();
			//        var A = a[1].getValue();
			//        var p = a[2].getValue();
			//        var P = {};
			//        if (p) {
			//            var h = p.split("&");
			//            for (var i in h) {
			//                var j = h[i].split("=");
			//                P[j[0]] = j[1];
			//            }
			//        }
			//        this._removeAbortHashBeforeNavigation();
			//        var o = this._getSuccessPostDialogState(this._oPostDialog.getModel().getData());
			//        this._oNavigationService.navigate(s, A, P, o);
			//    },
			//    handleDisplayMaterialLinkPress: function (E) {
			//        var m = E.getSource().data("Material");
			//        this._nav2Material(m);
			//    },
			//    handleDisplaySupplierLinkPress: function (E) {
			//        var o = this.getView().getModel("oFrontend");
			//        this._nav2Supplier(o.getProperty("/Lifnr"));
			//    },
			//    handleDisplayPurchaseOrderLinkPress: function (E) {
			//        var o = this.getView().getModel("oFrontend");
			//        this._nav2PurchaseOrderOrInboundDelivery(o.getProperty("/Ebeln"));
			//    },
			//    handleScanSuccess: function (E) {
			//        if (E.getParameters().cancelled === false && E.getParameters().text !== "" && jQuery.isNumeric(E.getParameters().text) === true) {
			//            var p = this.getView().byId("POInput");
			//            p.setValue(E.getParameters().text);
			//            p.fireChangeEvent(E.getParameters().text);
			//        }
			//    },
			//    handleInputChangeEvent: function (E) {
			//        var s = E.getParameters().value.trim();
			//        var t = this;
			//        var r = t.getResourceBundle();
			//        var C = true;
			//        var m = this.getView().getModel("oFrontend").getProperty("/Ebeln_possibleLength");
			//        var a = JSON.stringify(this._getInnerAppState());
			//        if (a && this._initialDataLoaded && this._initialDataLoaded != null) {
			//            var o = JSON.stringify(this._getInnerAppState(this._initialDataLoaded));
			//            if (o !== a) {
			//                var C = false;
			//                sap.m.MessageBox.confirm(r.getText("MESSAGE_DATA_LOSS"), {
			//                    icon: sap.m.MessageBox.Icon.QUESTION,
			//                    title: r.getText("MESSAGE_DATA_LOSS_TITLE"),
			//                    onClose: h,
			//                    styleClass: "sapUiSizeCompact",
			//                    initialFocus: sap.m.MessageBox.Action.CANCEL
			//                });
			//            }
			//        }
			//        if (C === true) {
			//            if (m.indexOf(s.length) !== -1 && jQuery.isNumeric(s) === true || this.getView().byId("POInput").getEditable() === false) {
			//                this._readPO(s);
			//            } else {
			//                this._toggleBusy(false);
			//                this.getView().byId("POInput").fireSuggest({ suggestValue: s });
			//            }
			//            if (this.oCompAttachProj) {
			//                delete this.oCompAttachProj;
			//            }
			//        }
			//        function h(R) {
			//            if (R === "OK") {
			//                if (t.oCompAttachProj) {
			//                    delete t.oCompAttachProj;
			//                }
			//                if (m.indexOf(s.length) !== -1 && jQuery.isNumeric(s) === true) {
			//                    t._readPO(s);
			//                } else {
			//                    t._toggleBusy(false);
			//                    t.getView().byId("POInput").fireSuggest({ suggestValue: s });
			//                }
			//            } else {
			//                var p = t.getView().byId("POInput");
			//                p.setValue(t._initialDataLoaded.Ebeln);
			//            }
			//        }
			//    },
			//    handleInputBatchChangeEvent: function (E) {
			//        var s = E.getParameters().value.trim();
			//        var t = this;
			//        var r = t.getResourceBundle();
			//        var i;
			//        if (this.getView().sViewName === "s2p.mm.im.goodsreceipt.purchaseorder.view.S2") {
			//            i = this.getView().getModel("oItem").getData();
			//        } else {
			//            var m = this.getView().getModel("oFrontend");
			//            var a = this._getSelectedItemInModel(E);
			//            i = m.getProperty("/Items/" + a);
			//        }
			//        this._readBatch(s, a, i);
			//    },
			//    _readBatch: function (s, a, i) {
			//        var h = [];
			//        var m = "";
			//        if (this._SourceOfGR !== this._SourceOfGRIsNoReference) {
			//            h.push(new sap.ui.model.Filter("Material", sap.ui.model.FilterOperator.EQ, i.Material));
			//        } else {
			//            h.push(new sap.ui.model.Filter("Material", sap.ui.model.FilterOperator.EQ, i.Material_Input));
			//        }
			//        h.push(new sap.ui.model.Filter("Plant", sap.ui.model.FilterOperator.EQ, i.Plant));
			//        h.push(new sap.ui.model.Filter("StorageLocation", sap.ui.model.FilterOperator.EQ, i.StorageLocation));
			//        h.push(new sap.ui.model.Filter("DeliveryDocumentItem", sap.ui.model.FilterOperator.EQ, i.DocumentItem));
			//        h.push(new sap.ui.model.Filter("Batch", sap.ui.model.FilterOperator.EQ, i.Batch));
			//        h.push(new sap.ui.model.Filter("InboundDelivery", sap.ui.model.FilterOperator.EQ, this.getView().getModel("oFrontend").getProperty("/Ebeln")));
			//        h.push(new sap.ui.model.Filter("SourceOfGR", sap.ui.model.FilterOperator.EQ, this._SourceOfGR));
			//        var j = this._getMovementType(i);
			//        h.push(new sap.ui.model.Filter("GoodsMovementType", sap.ui.model.FilterOperator.EQ, j));
			//        this.getView().getModel("oData").read("/MaterialBatchHelps", {
			//            filters: h,
			//            success: jQuery.proxy(this._successMyBatchLoad, this, s, a, i),
			//            error: jQuery.proxy(this._handleOdataError, this)
			//        });
			//    },
			//    _nav2Material: function (m) {
			//        var p = { Material: m };
			//        var h = sap.ui.core.routing.HashChanger.getInstance();
			//        h.setHash("");
			//        this._oNavigationService.navigate("Material", "displayFactSheet", p, this._getInnerAppState());
			//    },
			//    _nav2Supplier: function (l) {
			//        var p = { Supplier: l };
			//        var h = sap.ui.core.routing.HashChanger.getInstance();
			//        h.setHash("");
			//        this._oNavigationService.navigate("Supplier", "displayFactSheet", p, this._getInnerAppState());
			//    },
			//    _nav2PurchaseOrderOrInboundDelivery: function (E) {
			//        var s = "";
			//        var p = {};
			//        if (this._SourceOfGR === this._SourceOfGRIsPurchaseOrder) {
			//            s = "PurchaseOrder";
			//            p = { PurchaseOrder: E };
			//        } else if (this._SourceOfGR === this._SourceOfGRIsProductionOrder) {
			//            s = "ProductionOrder";
			//            p = { ProductionOrder: E };
			//        } else {
			//            s = "InboundDelivery";
			//            p = { InboundDelivery: E };
			//        }
			//        var h = sap.ui.core.routing.HashChanger.getInstance();
			//        h.setHash("");
			//        this._oNavigationService.navigate(s, "displayFactSheet", p, this._getInnerAppState());
			//    },
			//    _readPO: function (p, a) {
			//        var t = this;
			//        var h = [];
			//        if (p) {
			//            if (sap.ui.getCore().getMessageManager().getMessageModel().getData().length > 0) {
			//                sap.ui.getCore().getMessageManager().removeAllMessages();
			//            }
			//            if (this._SourceOfGR === this._SourceOfGRIsInboundDelivery) {
			//                if (p.length === 9) {
			//                    p = "000" + p;
			//                } else {
			//                    p = "00" + p;
			//                }
			//            }
			//            if (this._SourceOfGR === this._SourceOfGRIsPurchaseOrder) {
			//                p = "00" + p;
			//            }
			//            h.push(new sap.ui.model.Filter("SourceOfGR", sap.ui.model.FilterOperator.EQ, this._SourceOfGR));
			//            h.push(new sap.ui.model.Filter("InboundDelivery", sap.ui.model.FilterOperator.EQ, p));
			//            this._toggleBusy(true);
			//            this.getOwnerComponent().getModel("oData").read("/GR4PO_DL_Headers", {
			//                urlParameters: { $expand: "Header2Items,Header2Items/Item2StockTypes,Header2Items/Item2SubItems" },
			//                filters: h,
			//                success: jQuery.proxy(this._successPOLoad, this, a),
			//                error: jQuery.proxy(this._handleOdataError, this)
			//            });
			//        }
			//    },
			//    _successMyBatchLoad: function (s, a, A, o, r) {
			//        var h = false;
			//        var H = r.headers["sap-message"];
			//        var i;
			//        if (H) {
			//            var j = JSON.parse(H);
			//            if (j.code && j.severity === "error") {
			//                h = true;
			//            }
			//        }
			//        if (o.results.length !== 1 || s === "") {
			//            if (this.getView().sViewName === "s2p.mm.im.goodsreceipt.purchaseorder.view.S2") {
			//                this.getView().getModel("oItem").setProperty("/ShelfLifeExpirationDate", "");
			//                this.getView().getModel("oItem").setProperty("/ShelfLifeExpirationDate_valueState", sap.ui.core.ValueState.None);
			//                this.getView().getModel("oItem").setProperty("/ManufactureDate", "");
			//                this.getView().getModel("oItem").setProperty("/ManufactureDate_valueState", sap.ui.core.ValueState.None);
			//                this.getView().getModel("oItem").setProperty("/ApplyButtonEnabled", this._applyButtonEnabled(this.getView().getModel("oItem").getData()));
			//                if (h === true && s !== "") {
			//                    this.getView().getModel("oItem").setProperty("/Batch_valueState", sap.ui.core.ValueState.Error);
			//                } else {
			//                    this.getView().getModel("oItem").setProperty("/Batch_valueState", sap.ui.core.ValueState.None);
			//                }
			//                ;
			//                this._setValueStateMandatoryFields(this.getView().getModel("oItem").getData());
			//                this.getView().getModel("oItem").updateBindings();
			//                i = this._ItemConsistent(this.getView().getModel("oItem").getData());
			//                if (i === true) {
			//                    this.getView().getModel("oItem").setProperty("/SelectEnabled", i);
			//                    this.getView().getModel("oItem").setProperty("/Selected", i);
			//                }
			//            } else {
			//                var m = this.getView().getModel("oFrontend");
			//                m.setProperty("/Items/" + a + "/ShelfLifeExpirationDate", "");
			//                m.setProperty("/Items/" + a + "/ShelfLifeExpirationDate_valueState", sap.ui.core.ValueState.None);
			//                m.setProperty("/Items/" + a + "/ManufactureDate", "");
			//                m.setProperty("/Items/" + a + "/ManufactureDate_valueState", sap.ui.core.ValueState.None);
			//                if (h === true && s !== "") {
			//                    m.setProperty("/Items/" + a + "/Batch_valueState", sap.ui.core.ValueState.Error);
			//                } else {
			//                    m.setProperty("/Items/" + a + "/Batch_valueState", sap.ui.core.ValueState.None);
			//                }
			//                ;
			//                this._setValueStateMandatoryFields(m.getProperty("/Items/" + a));
			//                i = this._ItemConsistent(m.getProperty("/Items/" + a));
			//                if (i === true) {
			//                    m.setProperty("/Items/" + a + "/SelectEnabled", i);
			//                    m.setProperty("/Items/" + a + "/Selected", i);
			//                }
			//                this._setSelectEnabled(m.getProperty("/Items/" + a));
			//                this._controlSelectAllAndPostButton();
			//                this._updateHiglightProperty();
			//            }
			//            h = true;
			//        } else {
			//            if (this.getView().sViewName === "s2p.mm.im.goodsreceipt.purchaseorder.view.S2") {
			//                this.getView().getModel("oItem").setProperty("/Batch", o.results[0].Batch);
			//                this.getView().getModel("oItem").setProperty("/Batch_valueState", sap.ui.core.ValueState.None);
			//                this.getView().getModel("oItem").setProperty("/ShelfLifeExpirationDate", this._oDateFormat.format(o.results[0].ShelfLifeExpirationDate));
			//                this.getView().getModel("oItem").setProperty("/ShelfLifeExpirationDate_valueState", sap.ui.core.ValueState.None);
			//                this.getView().getModel("oItem").setProperty("/ManufactureDate", this._oDateFormat.format(o.results[0].ManufactureDate));
			//                this.getView().getModel("oItem").setProperty("/ManufactureDate_valueState", sap.ui.core.ValueState.None);
			//                this.getView().getModel("oItem").setProperty("/ApplyButtonEnabled", this._applyButtonEnabled(this.getView().getModel("oItem").getData()));
			//                this._setValueStateMandatoryFields(this.getView().getModel("oItem").getData());
			//                this.getView().getModel("oItem").updateBindings();
			//                i = this._ItemConsistent(this.getView().getModel("oItem").getData());
			//                if (i === true) {
			//                    this.getView().getModel("oItem").setProperty("/SelectEnabled", i);
			//                    this.getView().getModel("oItem").setProperty("/Selected", i);
			//                }
			//            } else {
			//                var m = this.getView().getModel("oFrontend");
			//                m.setProperty("/Items/" + a + "/Batch", o.results[0].Batch);
			//                m.setProperty("/Items/" + a + "/Batch_valueState", sap.ui.core.ValueState.None);
			//                m.setProperty("/Items/" + a + "/ShelfLifeExpirationDate", this._oDateFormat.format(o.results[0].ShelfLifeExpirationDate));
			//                m.setProperty("/Items/" + a + "/ShelfLifeExpirationDate_valueState", sap.ui.core.ValueState.None);
			//                m.setProperty("/Items/" + a + "/ManufactureDate", this._oDateFormat.format(o.results[0].ManufactureDate));
			//                m.setProperty("/Items/" + a + "/ManufactureDate_valueState", sap.ui.core.ValueState.None);
			//                this._setValueStateMandatoryFields(m.getProperty("/Items/" + a));
			//                i = this._ItemConsistent(m.getProperty("/Items/" + a));
			//                if (i === true) {
			//                    m.setProperty("/Items/" + a + "/SelectEnabled", i);
			//                    m.setProperty("/Items/" + a + "/Selected", i);
			//                }
			//                this._setSelectEnabled(m.getProperty("/Items/" + a));
			//                this._controlSelectAllAndPostButton();
			//                this._updateHiglightProperty();
			//            }
			//            return;
			//        }
			//    },
			//    _successPOLoad: function (a, o, r) {
			//        var A = false;
			//        var h;
			//        var O = "";
			//        var H = r.headers["sap-message"];
			//        if (H) {
			//            var l = JSON.parse(H);
			//            if (l.code && l.severity === "error") {
			//                A = true;
			//            }
			//        }
			//        if (o.results.length === 0) {
			//            A = true;
			//        }
			//        var n = this.getView().getModel("oFrontend");
			//        if (A !== false) {
			//            n.setProperty("/PO_Input_valueState", sap.ui.core.ValueState.Error);
			//        } else {
			//            var s = false;
			//            n.setProperty("/PO_Input_valueState", sap.ui.core.ValueState.None);
			//            var p = {};
			//            p.maxFractionDigits = "3";
			//            p.visible = true;
			//            p.personalizationEnabled = true;
			//            p.SupplierDisplayActive = this._isIntentSupported.SupplierDisplay;
			//            if (o.results[0].PurchasingDocumentCategory === "L") {
			//                p.PurchaseOrderDisplayActive = false;
			//            } else {
			//                p.PurchaseOrderDisplayActive = this._isIntentSupported.PurchaseOrderDisplay;
			//            }
			//            p.CreateBatchActive = this._isIntentSupported.BatchCreate;
			//            p.MaterialDisplayActive = this._isIntentSupported.MaterialDisplay;
			//            p.VersionForPrintingSlip = this._aVersionForPrintingSlip;
			//            p.VersionForPrintingSlipAppSetting = this._aVersionForPrintingSlipAppSetting;
			//            if (this._oPersonalizedDataContainer.VersionForPrintingSlip !== "none") {
			//                p.VersionForPrintingSlip_selectedKey = this._oPersonalizedDataContainer.VersionForPrintingSlip;
			//            } else if (o.results[0].VersionForPrintingSlip) {
			//                p.VersionForPrintingSlip_selectedKey = o.results[0].VersionForPrintingSlip;
			//            } else {
			//                p.VersionForPrintingSlip_selectedKey = "0";
			//            }
			//            p.Lifname = o.results[0].VendorName;
			//            p.Lifnr = o.results[0].Vendor;
			//            p.Ebeln = o.results[0].InboundDelivery;
			//            p.DocumentDate = o.results[0].DocumentDate;
			//            p.PostingDate = o.results[0].PostingDate;
			//            p.DocumentDate_valueState = sap.ui.core.ValueState.None;
			//            p.PostingDate_valueState = sap.ui.core.ValueState.None;
			//            p.DeliveryDocumentByVendor = "";
			//            p.MaterialDocumentHeaderText = o.results[0].MaterialDocumentHeaderText;
			//            p.BillOfLading = "";
			//            p.PurchasingDocumentType = o.results[0].PurchasingDocumentType;
			//            p.PurchasingDocumentTypeName = o.results[0].PurchasingDocumentTypeName;
			//            p.SupplyingPlant = o.results[0].SupplyingPlant;
			//            p.SupplyingPlantName = o.results[0].SupplyingPlantName;
			//            p.OrderType = o.results[0].OrderType;
			//            p.OrderTypeName = o.results[0].OrderTypeName;
			//            p.ColumnAccountAssignmentVisible = false;
			//            p.ColumnSplitVisible = false;
			//            p.ColumnPlantVisible = false;
			//            p.ColumnStorageBinVisible = false;
			//            p.ColumnStorageLocationVisible = false;
			//            p.ColumnStockTypeVisible = false;
			//            p.ColumnBatchVisible = false;
			//            p.ColumnManufactureDateVisible = false;
			//            p.ColumnShelfLifeExpirationDateVisible = false;
			//            p.ColumnNonVltdGRBlockedStockQty = false;
			//            p.ColumnIsReturnsItemVisible = false;
			//            p.HasSubcontractingItem = false;
			//            p.Items = [];
			//            if (p.DocumentDate == null) {
			//                p.DocumentDate = this._oDateFormat.format(new Date());
			//            } else {
			//                p.DocumentDate = this._oDateFormat.format(p.DocumentDate);
			//            }
			//            if (p.PostingDate == null) {
			//                p.PostingDate = this._oDateFormat.format(new Date());
			//            } else {
			//                p.PostingDate = this._oDateFormat.format(p.PostingDate);
			//            }
			//            for (var i = 0; i < o.results[0].Header2Items.results.length; i++) {
			//                if (O !== o.results[0].Header2Items.results[i].DeliveryDocumentItem) {
			//                    O = o.results[0].Header2Items.results[i].DeliveryDocumentItem;
			//                    var u = [];
			//                    u[0] = {};
			//                    var q = {};
			//                    q.highlight = sap.ui.core.MessageType.None;
			//                    q.ItemCounter = 0;
			//                    q.Selected = false;
			//                    if (o.results[0].Header2Items.results[i].OpenQuantity >= 0) {
			//                        q.SelectEnabled = true;
			//                    } else {
			//                        q.SelectEnabled = false;
			//                    }
			//                    q.OpenQuantity_valueState = sap.ui.core.ValueState.None;
			//                    q.OpenQuantity_valueStateText = "";
			//                    q.SplitEnabled = true;
			//                    q.DocumentItem = o.results[0].Header2Items.results[i].DeliveryDocumentItem;
			//                    q.DocumentItem_int = parseInt(o.results[0].Header2Items.results[i].DeliveryDocumentItem);
			//                    q.Material = o.results[0].Header2Items.results[i].Material;
			//                    q.MaterialName = o.results[0].Header2Items.results[i].MaterialName;
			//                    q.DocumentItemText = o.results[0].Header2Items.results[i].DocumentItemText;
			//                    q.PurchaseOrderItemText = o.results[0].Header2Items.results[i].PurchaseOrderItemText;
			//                    q.WarehouseStorageBin = o.results[0].Header2Items.results[i].WarehouseStorageBin;
			//                    if (q.WarehouseStorageBin) {
			//                        p.ColumnStorageBinVisible = true;
			//                    }
			//                    if (q.PurchaseOrderItemText !== "") {
			//                        q.MaterialText = q.PurchaseOrderItemText;
			//                    } else {
			//                        q.MaterialText = q.MaterialName;
			//                    }
			//                    if (this._SourceOfGR === this._SourceOfGRIsProductionOrder && p.Objectheader !== o.results[0].Header2Items.results[0].Material) {
			//                        p.Objectheader = q.MaterialText;
			//                        p.Objectheadertext = q.Material;
			//                    }
			//                    if (this._oPersonalizedDataContainer.PresetDocumentItemTextFromPO === true) {
			//                        q.DocumentItemText = q.PurchaseOrderItemText;
			//                    }
			//                    if (this._SourceOfGR !== this._SourceOfGRIsNoReference) {
			//                        q.DeliveredQuantityEditable = true;
			//                        q.DeliveredUnitEditable = true;
			//                        q.StockTypeNOREFEnabled = true;
			//                    }
			//                    q.Unit = o.results[0].Header2Items.results[i].UnitOfMeasure;
			//                    q.OpenQuantity = o.results[0].Header2Items.results[i].OpenQuantity;
			//                    q.OpenQuantity_number = parseFloat(o.results[0].Header2Items.results[i].OpenQuantity);
			//                    q.GoodsReceiptQty = o.results[0].Header2Items.results[i].GoodsReceiptQty;
			//                    q.GoodsReceiptQty_number = parseFloat(o.results[0].Header2Items.results[i].GoodsReceiptQty);
			//                    q.OrderedQuantity = o.results[0].Header2Items.results[i].OrderedQuantity;
			//                    q.OrderedQuantity_number = parseFloat(o.results[0].Header2Items.results[i].OrderedQuantity);
			//                    if (o.results[0].PurchasingDocumentCategory === "L") {
			//                        q.ChartVisible = false;
			//                        q.GRQuantity = q.GoodsReceiptQty;
			//                        q.GRQuantity_number = q.GoodsReceiptQty_number;
			//                    } else {
			//                        q.ChartVisible = true;
			//                        q.GRQuantity = q.OrderedQuantity - q.OpenQuantity;
			//                        q.GRQuantity_number = q.OrderedQuantity_number - q.OpenQuantity_number;
			//                    }
			//                    q.OrderedQuantityUnit = o.results[0].Header2Items.results[i].OrderedQuantityUnit;
			//                    q.NonVltdGRBlockedStockQty = o.results[0].Header2Items.results[i].NonVltdGRBlockedStockQty;
			//                    q.NonVltdGRBlockedStockQty_number = parseFloat(o.results[0].Header2Items.results[i].NonVltdGRBlockedStockQty);
			//                    if (q.NonVltdGRBlockedStockQty_number > 0) {
			//                        p.ColumnNonVltdGRBlockedStockQty = true;
			//                    }
			//                    if (o.results[0].Header2Items.results[i].DeliveryCompleted === "") {
			//                        q.DeliveryCompleted = false;
			//                    } else {
			//                        q.DeliveryCompleted = true;
			//                    }
			//                    if (parseFloat(q.OpenQuantity) > 0 || parseFloat(q.NonVltdGRBlockedStockQty)) {
			//                        q.ItemEnabled = true;
			//                        q.MaterialVisible = true;
			//                    } else {
			//                        q.ItemEnabled = false;
			//                        q.SplitEnabled = false;
			//                        q.MaterialVisible = true;
			//                    }
			//                    q.SplitButtonIcon = "sap-icon://add";
			//                    if (this._oPersonalizedDataContainer.deliveredQuantityDefault2open === true) {
			//                        q.DeliveredQuantity_input = parseFloat(o.results[0].Header2Items.results[i].QuantityInEntryUnit);
			//                    } else {
			//                        q.DeliveredQuantity_input = parseFloat("0.00");
			//                    }
			//                    q.DeliveredQuantity_valueState = sap.ui.core.ValueState.None;
			//                    q.DeliveredQuantity_valueStateText = "";
			//                    q.DeliveredUnit_input = o.results[0].Header2Items.results[i].EntryUnit;
			//                    q.DeliveredUnit_input_valueState = sap.ui.core.ValueState.None;
			//                    q.DeliveredUnit_input_valueStateText = "";
			//                    if (this._SourceOfGR === this._SourceOfGRIsProductionOrder) {
			//                        q.Plant_input = o.results[0].Header2Items.results[i].PlannedPlantName;
			//                        q.Plant = o.results[0].Header2Items.results[i].PlannedPlant;
			//                        q.LABEL_STACKED_BAR = this.getResourceBundle().getText("LABEL_STACKED_BAR_PROD");
			//                    } else {
			//                        q.Plant_input = o.results[0].Header2Items.results[i].PlantName;
			//                        q.Plant = o.results[0].Header2Items.results[i].Plant;
			//                        if (this._SourceOfGR === this._SourceOfGRIsInboundDelivery) {
			//                            q.LABEL_STACKED_BAR = this.getResourceBundle().getText("LABEL_STACKED_BAR_INBD");
			//                        } else {
			//                            q.LABEL_STACKED_BAR = this.getResourceBundle().getText("LABEL_STACKED_BAR_PO");
			//                        }
			//                    }
			//                    q.Batch = o.results[0].Header2Items.results[i].Batch;
			//                    q.ShelfLifeExpirationDate = o.results[0].Header2Items.results[i].ShelfLifeExpirationDate;
			//                    q.ManufactureDate = o.results[0].Header2Items.results[i].ManufactureDate;
			//                    q.IsReturnsItem = o.results[0].Header2Items.results[i].IsReturnsItem;
			//                    if (q.IsReturnsItem === true) {
			//                        p.ColumnIsReturnsItemVisible = true;
			//                    }
			//                    q.IsConsumptionMovement = o.results[0].Header2Items.results[i].IsConsumptionMovement;
			//                    q.AcctAssignmentCategory = o.results[0].Header2Items.results[i].AcctAssignmentCategory;
			//                    q.AcctAssignmentCategoryName = o.results[0].Header2Items.results[i].AcctAssignmentCategoryName;
			//                    q.HasMultipleAccountAssignment = o.results[0].Header2Items.results[i].HasMultipleAccountAssignment;
			//                    q.MultipleAcctAssgmtDistribution = o.results[0].Header2Items.results[i].MultipleAcctAssgmtDistribution;
			//                    q.MultipleAcctAssgmtDistrName = o.results[0].Header2Items.results[i].MultipleAcctAssgmtDistrName;
			//                    q.PartialInvoiceDistribution = o.results[0].Header2Items.results[i].PartialInvoiceDistribution;
			//                    q.PartialInvoiceDistributionName = o.results[0].Header2Items.results[i].PartialInvoiceDistributionName;
			//                    if (q.IsConsumptionMovement === false) {
			//                        q.AccountAssignmentVisible = false;
			//                        q.PlantVisible = true;
			//                        q.StorageLocationVisible = true;
			//                        q.StockTypeVisible = true;
			//                        p.ColumnSplitVisible = true;
			//                        p.ColumnPlantVisible = true;
			//                        p.ColumnStorageLocationVisible = true;
			//                        p.ColumnStockTypeVisible = true;
			//                    } else {
			//                        q.SplitEnabled = false;
			//                        q.PlantVisible = false;
			//                        q.StorageLocationVisible = false;
			//                        q.StockTypeVisible = false;
			//                    }
			//                    if (q.AcctAssignmentCategory !== "") {
			//                        p.ColumnAccountAssignmentVisible = true;
			//                        q.AccountAssignmentVisible = true;
			//                        if (o.results[0].Header2Items.results[i].GoodsReceiptIsNonValuated === true) {
			//                            q.AccountAssignmentChartVisible = false;
			//                            q.MultipleAcctAssignmentNoValuated = this.getResourceBundle().getText("TEXT_MAA_NOVALUATED");
			//                        } else {
			//                            q.AccountAssignmentChartVisible = true;
			//                        }
			//                    }
			//                    q.Project = o.results[0].Header2Items.results[i].Project;
			//                    q.ProjectDescription = o.results[0].Header2Items.results[i].ProjectDescription;
			//                    q.InventorySpecialStockType = o.results[0].Header2Items.results[i].InventorySpecialStockType;
			//                    q.InventorySpecialStockTypeName = o.results[0].Header2Items.results[i].InventorySpecialStockTypeName;
			//                    q.Lifname = o.results[0].VendorName;
			//                    q.Lifnr = o.results[0].Vendor;
			//                    q.SalesOrder = o.results[0].Header2Items.results[i].SalesOrder;
			//                    q.SalesOrderItem = o.results[0].Header2Items.results[i].SalesOrderItem;
			//                    q.OrderID = o.results[0].Header2Items.results[i].OrderID;
			//                    q.StorageLocation = o.results[0].Header2Items.results[i].StorageLocation;
			//                    q.StorageLocation_input = o.results[0].Header2Items.results[i].StorageLocationName;
			//                    q.GoodsMovementReasonCode_selectedKey = o.results[0].Header2Items.results[i].GoodsMovementReasonCode;
			//                    if (q.AcctAssignmentCategory === "") {
			//                        if (q.StorageLocation === "" && q.DeliveredQuantity_input > 0) {
			//                            q.StorageLocation_valueState = sap.ui.core.ValueState.Error;
			//                            q.highlight = sap.ui.core.MessageType.Error;
			//                            q.StorageLocation_valueStateText = this.getResourceBundle().getText("STORAGELOCATION_VALUE_STATE_TEXT");
			//                        } else {
			//                            q.StorageLocation_valueState = sap.ui.core.ValueState.None;
			//                            q.StorageLocation_valueStateText = "";
			//                        }
			//                    } else {
			//                        q.StorageLocation_valueState = sap.ui.core.ValueState.None;
			//                        q.StorageLocation_valueStateText = "";
			//                    }
			//                    if (this._SourceOfGR === this._SourceOfGRIsPurchaseOrder) {
			//                        q.StorageLocationEditable = true;
			//                        q.Plant_input_editable = false;
			//                        q.SalesOrder_editable = false;
			//                    } else if (this._SourceOfGR === this._SourceOfGRIsProductionOrder) {
			//                        q.StorageLocationEditable = true;
			//                        q.Plant_input_editable = false;
			//                        q.SalesOrder_editable = false;
			//                    } else if (this._SourceOfGR === this._SourceOfGRIsNoReference) {
			//                        q.StorageLocationEditable = true;
			//                        q.Plant_input_editable = false;
			//                        q.SalesOrder_editable = false;
			//                    } else {
			//                        q.Plant_input_editable = false;
			//                        q.SalesOrder_editable = false;
			//                        if (q.StorageLocation === "") {
			//                            q.StorageLocationEditable = true;
			//                        } else {
			//                            q.StorageLocationEditable = false;
			//                        }
			//                    }
			//                    if (o.results[0].Header2Items.results[i].ShelfLifeExpirationDate) {
			//                        q.ShelfLifeExpirationDate = this._oDateFormat.format(o.results[0].Header2Items.results[i].ShelfLifeExpirationDate);
			//                    } else {
			//                        q.ShelfLifeExpirationDate = "";
			//                    }
			//                    q.ShelfLifeExpirationDateMinDate = new Date();
			//                    if (o.results[0].Header2Items.results[i].ManufactureDate) {
			//                        q.ManufactureDate = this._oDateFormat.format(o.results[0].Header2Items.results[i].ManufactureDate);
			//                    } else {
			//                        q.ManufactureDate = "";
			//                    }
			//                    var t = new Array();
			//                    var v = false;
			//                    for (var j = 0; j < o.results[0].Header2Items.results[i].Item2StockTypes.results.length; j++) {
			//                        if (o.results[0].Header2Items.results[i].Item2StockTypes.results[j].StockType === "") {
			//                            t.push({
			//                                key: " ",
			//                                text: o.results[0].Header2Items.results[i].Item2StockTypes.results[j].StockTypeName,
			//                                ControlOfBatchTableField: o.results[0].Header2Items.results[i].Item2StockTypes.results[j].ControlOfBatchTableField,
			//                                ControlOfReasonCodeTableField: o.results[0].Header2Items.results[i].Item2StockTypes.results[j].ControlOfReasonCodeTableField,
			//                                ControlOfExpirationDate: o.results[0].Header2Items.results[i].Item2StockTypes.results[j].ControlOfExpirationDate,
			//                                ControlOfManufactureDate: o.results[0].Header2Items.results[i].Item2StockTypes.results[j].ControlOfManufactureDate,
			//                                StorLocAutoCreationIsAllowed: o.results[0].Header2Items.results[i].Item2StockTypes.results[j].StorLocAutoCreationIsAllowed
			//                            });
			//                        } else {
			//                            t.push({
			//                                key: o.results[0].Header2Items.results[i].Item2StockTypes.results[j].StockType,
			//                                text: o.results[0].Header2Items.results[i].Item2StockTypes.results[j].StockTypeName,
			//                                ControlOfBatchTableField: o.results[0].Header2Items.results[i].Item2StockTypes.results[j].ControlOfBatchTableField,
			//                                ControlOfReasonCodeTableField: o.results[0].Header2Items.results[i].Item2StockTypes.results[j].ControlOfReasonCodeTableField,
			//                                ControlOfExpirationDate: o.results[0].Header2Items.results[i].Item2StockTypes.results[j].ControlOfExpirationDate,
			//                                ControlOfManufactureDate: o.results[0].Header2Items.results[i].Item2StockTypes.results[j].ControlOfManufactureDate,
			//                                StorLocAutoCreationIsAllowed: o.results[0].Header2Items.results[i].Item2StockTypes.results[j].StorLocAutoCreationIsAllowed
			//                            });
			//                        }
			//                        if (o.results[0].Header2Items.results[i].Item2StockTypes.results[j].StockType === o.results[0].Header2Items.results[i].StockType) {
			//                            v = true;
			//                            this._evaluateFieldControl("Batch", o.results[0].Header2Items.results[i].Item2StockTypes.results[j].ControlOfBatchTableField, q);
			//                            this._evaluateFieldControl("GoodsMovementReasonCode", o.results[0].Header2Items.results[i].Item2StockTypes.results[j].ControlOfReasonCodeTableField, q);
			//                            this._evaluateFieldControl("ShelfLifeExpirationDate", o.results[0].Header2Items.results[i].Item2StockTypes.results[j].ControlOfExpirationDate, q);
			//                            this._evaluateFieldControl("ManufactureDate", o.results[0].Header2Items.results[i].Item2StockTypes.results[j].ControlOfManufactureDate, q);
			//                        }
			//                    }
			//                    q.StockType_input = t;
			//                    if (o.results[0].Header2Items.results[i].StockTypeName !== "" && v === true) {
			//                        q.StockType_selectedKey = o.results[0].Header2Items.results[i].StockType;
			//                        if (q.StockType_selectedKey === "") {
			//                            q.StockType_selectedKey = " ";
			//                        }
			//                    } else {
			//                        if (t.length > 0) {
			//                            q.StockType_selectedKey = t[0].key;
			//                            this._evaluateFieldControl("Batch", t[0].ControlOfBatchTableField, q);
			//                            this._evaluateFieldControl("GoodsMovementReasonCode", t[0].ControlOfReasonCodeTableField, q);
			//                            this._evaluateFieldControl("ShelfLifeExpirationDate", t[0].ControlOfExpirationDate, q);
			//                            this._evaluateFieldControl("ManufactureDate", t[0].ControlOfManufactureDate, q);
			//                        } else {
			//                            q.StockType_selectedKey = " ";
			//                            s = true;
			//                        }
			//                    }
			//                    if (q.StockType_input.length > 1) {
			//                        q.StockTypeEnabled = true;
			//                    } else {
			//                        q.StockTypeEnabled = false;
			//                    }
			//                    if (q.BatchVisible === true) {
			//                        p.ColumnBatchVisible = true;
			//                    }
			//                    if (q.ManufactureDateVisible === true) {
			//                        p.ColumnManufactureDateVisible = true;
			//                    }
			//                    if (q.ShelfLifeExpirationDateVisible === true) {
			//                        p.ColumnShelfLifeExpirationDateVisible = true;
			//                    }
			//                    this._setValueStateMandatoryFields(q);
			//                    q.DetailHeaderText = this.getResourceBundle().getText("DETAILSCREEN_TITLE2") + " " + q.MaterialName + " (" + q.Material + ")";
			//                    if (this._aExtendedFields && this._aExtendedFields.length > 0) {
			//                        for (var k = 0; k < this._aExtendedFields.length; k++) {
			//                            if (this._isExtendedField(this._aExtendedFields[k].name) === true) {
			//                                q[this._aExtendedFields[k].name] = o.results[0].Header2Items.results[i][this._aExtendedFields[k].name];
			//                            }
			//                        }
			//                    }
			//                    q.AccountAssignments = [];
			//                    q.AccountAssignmentsColumnAssetNumberVisible = false;
			//                    q.AccountAssignmentsColumnSubAssetNumberVisible = false;
			//                    q.AccountAssignmentsColumnGLAccountVisible = false;
			//                    q.AccountAssignmentsColumnGoodsRecipientVisible = false;
			//                    q.AccountAssignmentsColumnUnloadingPointVisible = false;
			//                    q.AccountAssignmentsColumnFunctionalAreaVisible = false;
			//                    q.AccountAssignmentsColumnProfitCenterVisible = false;
			//                    q.AccountAssignmentsColumnCostCenterVisible = false;
			//                    q.AccountAssignmentsColumnProjectVisible = false;
			//                    q.AccountAssignmentsColumnSalesOrderVisible = false;
			//                    q.AccountAssignmentsColumnOrderIDVisible = false;
			//                    if (o.results[0].Header2Items.results[i].Item2SubItems && o.results[0].Header2Items.results[i].Item2SubItems.results && o.results[0].Header2Items.results[i].Item2SubItems.results.length > 0) {
			//                        q = S.createSubItemData(q, o.results[0].Header2Items.results[i].Item2SubItems.results, this._isIntentSupported.MaterialDisplay);
			//                        p.HasSubcontractingItem = true;
			//                    } else {
			//                        q.ItemHasComponent = false;
			//                        q.ItemComponentVisible = false;
			//                    }
			//                    p.Items.push(q);
			//                    q.SelectEnabled = this._ItemConsistent(q, p.Items);
			//                    q.ApplyButtonEnabled = q.SelectEnabled;
			//                }
			//                var w = {};
			//                w.AccountAssignmentNumber = o.results[0].Header2Items.results[i].AccountAssignmentNumber;
			//                w.MultipleAcctAssgmtDistrPercent = o.results[0].Header2Items.results[i].MultipleAcctAssgmtDistrPercent;
			//                w.MultipleAcctAssgmtDistrQty = o.results[0].Header2Items.results[i].MultipleAcctAssgmtDistrQty;
			//                w.AssetNumber = o.results[0].Header2Items.results[i].AssetNumber;
			//                w.AssetNumberName = o.results[0].Header2Items.results[i].AssetNumberName;
			//                if (w.AssetNumberName !== "") {
			//                    q.AccountAssignmentsColumnAssetNumberVisible = true;
			//                }
			//                w.SubAssetNumber = o.results[0].Header2Items.results[i].SubAssetNumber;
			//                if (w.SubAssetNumber !== "") {
			//                    q.AccountAssignmentsColumnSubAssetNumberVisible = true;
			//                }
			//                w.GLAccount = o.results[0].Header2Items.results[i].GLAccount;
			//                w.GLAccountName = o.results[0].Header2Items.results[i].GLAccountName;
			//                if (w.GLAccount !== "") {
			//                    q.AccountAssignmentsColumnGLAccountVisible = true;
			//                }
			//                w.GoodsRecipientName = o.results[0].Header2Items.results[i].GoodsRecipientName;
			//                if (w.GoodsRecipientName !== "") {
			//                    q.AccountAssignmentsColumnGoodsRecipientVisible = true;
			//                }
			//                w.UnloadingPointName = o.results[0].Header2Items.results[i].UnloadingPointName;
			//                if (w.UnloadingPointName !== "") {
			//                    q.AccountAssignmentsColumnUnloadingPointVisible = true;
			//                }
			//                w.FunctionalArea = o.results[0].Header2Items.results[i].FunctionalArea;
			//                if (w.FunctionalArea !== "") {
			//                    q.AccountAssignmentsColumnFunctionalAreaVisible = true;
			//                }
			//                w.ProfitCenter = o.results[0].Header2Items.results[i].ProfitCenter;
			//                w.ProfitCenterName = o.results[0].Header2Items.results[i].ProfitCenterName;
			//                if (w.ProfitCenter !== "") {
			//                    q.AccountAssignmentsColumnProfitCenterVisible = true;
			//                }
			//                w.CostCenter = o.results[0].Header2Items.results[i].CostCenter;
			//                w.CostCenterName = o.results[0].Header2Items.results[i].CostCenterName;
			//                if (w.CostCenter !== "") {
			//                    q.AccountAssignmentsColumnCostCenterVisible = true;
			//                }
			//                w.Project = o.results[0].Header2Items.results[i].Project;
			//                w.ProjectDescription = o.results[0].Header2Items.results[i].ProjectDescription;
			//                if (w.Project !== "") {
			//                    q.AccountAssignmentsColumnProjectVisible = true;
			//                }
			//                w.SalesOrder = o.results[0].Header2Items.results[i].SalesOrder;
			//                w.SalesOrderItem = o.results[0].Header2Items.results[i].SalesOrderItem;
			//                if (w.SalesOrder !== "") {
			//                    q.AccountAssignmentsColumnSalesOrderVisible = true;
			//                }
			//                w.OrderID = o.results[0].Header2Items.results[i].OrderID;
			//                if (w.OrderID !== "") {
			//                    q.AccountAssignmentsColumnOrderIDVisible = true;
			//                }
			//                q.AccountAssignments.push(w);
			//            }
			//            this._iTableRowsCount = p.Items.length;
			//            p.POItemsCountTableHeader = this.getResourceBundle().getText("TABLE_TOTAL_ITEMS_LABEL", [this._iTableRowsCount]);
			//            if (p.SupplyingPlant !== "") {
			//                p.Objectheader = this.formatter.concatenateNameIdFormatter(p.SupplyingPlantName, p.SupplyingPlant);
			//                p.SupplierDisplayActive = false;
			//            } else {
			//                if (this._SourceOfGR !== this._SourceOfGRIsProductionOrder) {
			//                    p.Objectheader = p.Lifname;
			//                }
			//            }
			//            if (this._SourceOfGR === this._SourceOfGRIsPurchaseOrder) {
			//                p.fullscreenTitle = this.getResourceBundle().getText("FULLSCREEN_TITLE_PO");
			//                p.shareOnJamTitle = this.getResourceBundle().getText("FULLSCREEN_TITLE_PO");
			//                p.searchFieldLabel = this.getResourceBundle().getText("SEARCH_FIELD_LABEL_PO");
			//                p.Ebeln_label = this.getResourceBundle().getText("SEARCH_FIELD_LABEL_PO");
			//                p.Ebeln_maxLength = 10;
			//                p.HeaderContentVisible = true;
			//            } else if (this._SourceOfGR === this._SourceOfGRIsProductionOrder) {
			//                p.fullscreenTitle = this.getResourceBundle().getText("FULLSCREEN_TITLE_PROD");
			//                p.shareOnJamTitle = this.getResourceBundle().getText("FULLSCREEN_TITLE_PROD");
			//                p.searchFieldLabel = this.getResourceBundle().getText("SEARCH_FIELD_LABEL_PROD");
			//                p.Ebeln_label = this.getResourceBundle().getText("SEARCH_FIELD_LABEL_PROD");
			//                p.Ebeln_maxLength = 12;
			//                p.HeaderContentVisible = true;
			//                p.BillOfLadingVisible = false;
			//            } else if (this._SourceOfGR === this._SourceOfGRIsNoReference) {
			//                p.fullscreenTitle = this.getResourceBundle().getText("FULLSCREEN_TITLE_NOREF");
			//                p.shareOnJamTitle = this.getResourceBundle().getText("FULLSCREEN_TITLE_NoREF");
			//                p.BillOfLadingVisible = false;
			//            } else {
			//                p.fullscreenTitle = this.getResourceBundle().getText("FULLSCREEN_TITLE_DL");
			//                p.shareOnJamTitle = this.getResourceBundle().getText("FULLSCREEN_TITLE_DL");
			//                p.searchFieldLabel = this.getResourceBundle().getText("SEARCH_FIELD_LABEL_DL");
			//                p.Ebeln_label = this.getResourceBundle().getText("SEARCH_FIELD_LABEL_DL");
			//                p.HeaderContentVisible = true;
			//                p.Ebeln_maxLength = 10;
			//            }
			//            p.SourceOfGR = this._SourceOfGR;
			//            if (this._aExtendedFields.length > 0) {
			//                p.ExtensionSectionVisible = true;
			//            } else {
			//                p.ExtensionSectionVisible = false;
			//            }
			//            p.Ebeln_possibleLength = this.getView().getModel("oFrontend").getProperty("/Ebeln_possibleLength");
			//            p.maxSuggestionWidth = this.getView().getModel("oFrontend").getProperty("/maxSuggestionWidth");
			//            var x = false;
			//            if (a) {
			//                for (var k = 0; k < this._oNavigationServiceFields.aHeaderFields.length; k++) {
			//                    p[this._oNavigationServiceFields.aHeaderFields[k]] = a[this._oNavigationServiceFields.aHeaderFields[k]];
			//                }
			//                var y = false;
			//                var z = 0;
			//                for (var m = 0; m < a.Items.length; m++) {
			//                    y = false;
			//                    z = 0;
			//                    while (z < p.Items.length && y === false) {
			//                        if (a.Items[m].DocumentItem === p.Items[z].DocumentItem) {
			//                            y = true;
			//                        } else {
			//                            z++;
			//                        }
			//                    }
			//                    if (y === true) {
			//                        if (a.Items[m].ItemCounter === 0) {
			//                            p.Items[z].Selected = a.Items[m].Selected;
			//                            p.Items[z].DocumentItemText = a.Items[m].DocumentItemText;
			//                            p.Items[z].DeliveryCompleted = a.Items[m].DeliveryCompleted;
			//                            p.Items[z].DeliveredUnit_input = a.Items[m].DeliveredUnit_input;
			//                            p.Items[z].DeliveredQuantity_input = a.Items[m].DeliveredQuantity_input;
			//                            p.Items[z].StockType_selectedKey = a.Items[m].StockType_selectedKey;
			//                            p.Items[z].StorageLocation = a.Items[m].StorageLocation;
			//                            p.Items[z].StorageLocation_input = a.Items[m].StorageLocation_input;
			//                            p.Items[z].ShelfLifeExpirationDate = a.Items[m].ShelfLifeExpirationDate;
			//                            p.Items[z].ManufactureDate = a.Items[m].ManufactureDate;
			//                            p.Items[z].ReasonCode = a.Items[m].ReasonCode;
			//                            if (p.Items[z].ShelfLifeExpirationDate !== "") {
			//                                p.Items[z].ShelfLifeExpirationDate_valueState = sap.ui.core.ValueState.None;
			//                            }
			//                            if (p.Items[z].ManufactureDate !== "") {
			//                                p.Items[z].ManufactureDate_valueState = sap.ui.core.ValueState.None;
			//                            }
			//                            if (p.Items[z].ReasonCode !== "") {
			//                                p.Items[z].ReasonCode_valueState = sap.ui.core.ValueState.None;
			//                            }
			//                            if (p.Items[z].StockType_selectedKey === "U") {
			//                                p.Items[z].StorageLocationVisible = false;
			//                            }
			//                            if (p.Items[z].Plant !== a.Items[m].Plant) {
			//                                p.Items[z].StorageLocation_valueState = sap.ui.core.ValueState.Warning;
			//                                p.Items[z].highlight = p.Items[z].highlight === sap.ui.core.ValueState.Error ? sap.ui.core.ValueState.Error : sap.ui.core.ValueState.Warning;
			//                                p.Items[z].StorageLocation_valueStateText = "";
			//                                p.Items[z].Selected = false;
			//                            } else {
			//                                if (p.Items[z].StorageLocation !== "") {
			//                                    p.Items[z].StorageLocation_valueState = sap.ui.core.ValueState.None;
			//                                }
			//                            }
			//                            p.Items[z].Plant = a.Items[m].Plant;
			//                            if (p.Items[z].OpenQuantity !== a.Items[m].OpenQuantity || p.Items[z].Unit !== a.Items[m].Unit || p.Items[z].NonVltdGRBlockedStockQty !== a.Items[m].NonVltdGRBlockedStockQty) {
			//                                p.Items[z].DeliveredQuantity_valueState = sap.ui.core.ValueState.Warning;
			//                                p.Items[z].highlight = p.Items[z].highlight === sap.ui.core.ValueState.Error ? sap.ui.core.ValueState.Error : sap.ui.core.ValueState.Warning;
			//                                p.Items[z].DeliveredQuantity_valueStateText = "";
			//                                p.Items[z].Selected = false;
			//                            }
			//                            if (p.Items[z].ItemHasComponent && a.Items[m].ItemHasComponent) {
			//                                p.Items[z].ItemComponentVisible = a.Items[m].ItemComponentVisible;
			//                                p.Items[z].ComponentIconState = a.Items[m].ComponentIconState;
			//                                p.Items[z].ComponentAutoAdjusted = a.Items[m].ComponentAutoAdjusted;
			//                                p.Items[z].ComponentManualAdjusted = a.Items[m].ComponentManualAdjusted;
			//                                p.Items[z].SubItems = a.Items[m].SubItems;
			//                            }
			//                        } else {
			//                            var C = JSON.parse(JSON.stringify(p.Items[z]));
			//                            C.ItemCounter = a.Items[m].ItemCounter;
			//                            C.SplitEnabled = true;
			//                            C.MaterialVisible = false;
			//                            C.AccountAssignmentVisible = false;
			//                            C.PlantVisible = false;
			//                            C.StorageLocationVisible = true;
			//                            C.StockTypeVisible = true;
			//                            C.DeliveredQuantity_input = 0;
			//                            C.SplitButtonIcon = "sap-icon://less";
			//                            C.Selected = true;
			//                            C.DocumentItemText = a.Items[m].DocumentItemText;
			//                            C.DeliveryCompleted = a.Items[m].DeliveryCompleted;
			//                            C.DeliveredUnit_input = a.Items[m].DeliveredUnit_input;
			//                            C.DeliveredQuantity_input = a.Items[m].DeliveredQuantity_input;
			//                            C.StockType_selectedKey = a.Items[m].StockType_selectedKey;
			//                            C.StorageLocation = a.Items[m].StorageLocation;
			//                            C.StorageLocation_input = a.Items[m].StorageLocation_input;
			//                            C.ShelfLifeExpirationDate = a.Items[m].ShelfLifeExpirationDate;
			//                            C.ManufactureDate = a.Items[m].ManufactureDate;
			//                            C.ReasonCode = a.Items[m].ReasonCode;
			//                            if (C.StockType_selectedKey === "U") {
			//                                C.StorageLocationVisible = false;
			//                            }
			//                            if (C.StorageLocation !== "") {
			//                                C.StorageLocation_valueState = sap.ui.core.ValueState.None;
			//                            }
			//                            if (C.ShelfLifeExpirationDate !== "") {
			//                                C.ShelfLifeExpirationDate_valueState = sap.ui.core.ValueState.None;
			//                            }
			//                            if (C.ReasonCode !== "") {
			//                                C.ReasonCode_valueState = sap.ui.core.ValueState.None;
			//                            }
			//                            if (C.ManufactureDate !== "") {
			//                                C.ManufactureDate_valueState = sap.ui.core.ValueState.None;
			//                            }
			//                            p.Items.splice(++z, 0, C);
			//                        }
			//                    } else {
			//                        x = true;
			//                    }
			//                }
			//                var R = sap.ui.core.UIComponent.getRouterFor(this);
			//                var E;
			//                if (a.oBatchCreate) {
			//                    for (E = 0; E < p.Items.length; E++) {
			//                        if (p.Items[E].DocumentItem === a.oBatchCreate.DocumentItem && p.Items[E].ItemCounter === a.oBatchCreate.ItemCounter) {
			//                            break;
			//                        }
			//                    }
			//                    R.navTo("subscreen", { POItem: E }, true);
			//                }
			//                if (a.DetailPageData) {
			//                    this._oDetailPageData = a.DetailPageData;
			//                    for (E = 0; E < p.Items.length; E++) {
			//                        if (p.Items[E].DocumentItem === a.DetailPageData.DocumentItem && p.Items[E].ItemCounter === a.DetailPageData.ItemCounter) {
			//                            break;
			//                        }
			//                    }
			//                    R.navTo("subscreenAppState", { POItem: E }, true);
			//                }
			//            }
			//            n.setData(p);
			//            this._setSearchPlaceholderText();
			//            this._setScanButtonVisibility();
			//            this.getView().bindElement({
			//                path: "/GR4PO_DL_Headers(InboundDelivery='" + p.Ebeln + "',SourceOfGR='" + this._SourceOfGR + "')",
			//                model: "oData"
			//            });
			//            this._initialDataLoaded = JSON.parse(JSON.stringify(p));
			//            n.setProperty("/PostButtonVisible", true);
			//            var G = [];
			//            G.push(new sap.ui.model.Sorter("DocumentItem_int", false));
			//            G.push(new sap.ui.model.Sorter("ItemCounter", false));
			//            this.getView().byId("idProductsTable").removeSelections(true);
			//            this.getView().byId("idProductsTable").getBinding("items").filter([]);
			//            this.getView().byId("idProductsTable").getBinding("items").sort(G);
			//            this.getView().byId("idTableSearch").setValue("");
			//            this._controlSelectAllAndPostButton();
			//            if (a) {
			//                this._loadAttachmentComponent(a.Temp_Key);
			//            } else {
			//                this._loadAttachmentComponent();
			//            }
			//            if (x === true) {
			//                M.show(this.getResourceBundle().getText("MESSAGE_CHANGED_PO"));
			//            }
			//            if (s === true) {
			//                this._toggleBusy(false);
			//                M.show(this.getResourceBundle().getText("MESSAGE_CONFIGURATION"));
			//            }
			//        }
			//        this._toggleBusy(false);
			//        var K = this;
			//        if (sap.cp && sap.cp.ui.services && sap.cp.ui.services.CopilotApi) {
			//            sap.cp.ui.services.CopilotApi.getChats().then(function (L) {
			//                K._aCopilotChats = L;
			//            });
			//            this._oCopilotActive = true;
			//            this.getView().getModel("oFrontend").setProperty("/CopilotActive", this._oCopilotActive);
			//        }
			//    },
			//    _removeAbortHashBeforeNavigation: function (a) {
			//        var h = sap.ui.core.routing.HashChanger.getInstance();
			//        var C = h.getHash();
			//        if (C.includes("false") || C.includes("true")) {
			//            if (a) {
			//                h.replaceHash("sap-iapp-state=" + a);
			//            } else {
			//                h.replaceHash("");
			//            }
			//        }
			//    },
			//    _generateAppStateKey: function () {
			//        var s = this._oNavigationService.storeInnerAppStateWithImmediateReturn(this._getInnerAppState(), false);
			//        var o = s.promise;
			//        o.done(function (a) {
			//            this._removeAbortHashBeforeNavigation(a);
			//        }.bind(this));
			//        return s.appStateKey;
			//    },
			//    _generateAppStateExternalUrl: function () {
			//        var a = this._generateAppStateKey();
			//        var C = sap.ushell.Container.getService("CrossApplicationNavigation");
			//        var h;
			//        var s;
			//        var p;
			//        var A = "createGR";
			//        if (this._SourceOfGR === this._SourceOfGRIsPurchaseOrder) {
			//            s = "PurchaseOrder";
			//            p = { "SourceOfGR": [this._SourceOfGR] };
			//        } else if (this._SourceOfGR === this._SourceOfGRIsProductionOrder) {
			//            s = "ProductionOrder";
			//            p = { "SourceOfGR": [this._SourceOfGR] };
			//        } else if (this._SourceOfGR === this._SourceOfGRIsNoReference) {
			//            A = "createGRwoReference";
			//            s = "Material";
			//            p = { "SourceOfGR": [this._SourceOfGR] };
			//        } else {
			//            s = "InboundDelivery";
			//            p = { "SourceOfGR": [this._SourceOfGR] };
			//        }
			//        h = C && C.hrefForExternal({
			//            target: {
			//                semanticObject: s,
			//                action: A
			//            },
			//            params: p,
			//            appStateKey: a
			//        }) || "";
			//        return h;
			//    },
			//    handleBookmarkBeforePress: function () {
			//        var t = "";
			//        if (this._SourceOfGR === this._SourceOfGRIsPurchaseOrder) {
			//            t = this.getResourceBundle().getText("FULLSCREEN_TITLE_PO");
			//        } else if (this._SourceOfGR === this._SourceOfGRIsProductionOrder) {
			//            t = this.getResourceBundle().getText("FULLSCREEN_TITLE_PROD");
			//        } else if (this._SourceOfGR === this._SourceOfGRIsNoReference) {
			//            t = this.getResourceBundle().getText("FULLSCREEN_TITLE_NOREF");
			//        } else {
			//            t = this.getResourceBundle().getText("FULLSCREEN_TITLE_DL");
			//        }
			//        var o = this.getView().getModel("oFrontend");
			//        var P = o.getProperty("/Ebeln");
			//        o.setProperty("/saveAsTileTitle", t);
			//        o.setProperty("/saveAsTileSubtitle", P);
			//        o.setProperty("/saveAsTileURL", this._generateAppStateExternalUrl());
			//    },
			//    handleSelectDeliveryCompleted: function (E) {
			//        var a = E.getParameter("selected");
			//        var m = this.getView().getModel("oItem");
			//        if (a) {
			//            m.setProperty("/Selected", a);
			//        }
			//    },
			//    onPersoButtonPressed: function (E) {
			//        if (!this._oPersDialog) {
			//            this._oPersDialog = sap.ui.xmlfragment("s2p.mm.im.goodsreceipt.purchaseorder.view.personalization", this);
			//            this.getView().addDependent(this._oPersDialog);
			//        }
			//        var p = new sap.ui.model.json.JSONModel();
			//        p.setData(JSON.parse(JSON.stringify(this._oPersonalizedDataContainer)));
			//        this._oPersDialog.setModel(p);
			//        this._oPersDialog.open();
			//    },
			//    handlePersonalizationSave: function (E) {
			//        var m = this._oPersDialog.getModel();
			//        this._oPersonalizedDataContainer = m.getData();
			//        if (this._oPersonalizer) {
			//            var o = this.getView().getModel("oFrontend");
			//            o.setProperty("/personalizationEnabled", false);
			//            var s = this._oPersonalizer.setPersData(this._oPersonalizedDataContainer).done(function () {
			//                o.setProperty("/personalizationEnabled", true);
			//            }).fail(function () {
			//                jQuery.sap.log.error("Writing personalization data failed.");
			//                o.setProperty("/personalizationEnabled", true);
			//            });
			//        }
			//        this._oPersDialog.close();
			//    },
			//    handlePersonalizationAbort: function (E) {
			//        this._oPersDialog.close();
			//    },
			//    _showSettingsDialog: function (E) {
			//        if (!this._oApplicationSettingsDialog) {
			//            if (this._SourceOfGR === this._SourceOfGRIsPurchaseOrder) {
			//                this._oApplicationSettingsDialog = sap.ui.xmlfragment({
			//                    fragmentName: "s2p.mm.im.goodsreceipt.purchaseorder.view.ApplicationSettingsPurchaseOrder",
			//                    type: "XML",
			//                    id: "s2p.mm.im.goodsreceipt.purchaseorder.ApplicationSettings"
			//                }, this);
			//            } else if (this._SourceOfGR === this._SourceOfGRIsProductionOrder) {
			//                this._oApplicationSettingsDialog = sap.ui.xmlfragment({
			//                    fragmentName: "s2p.mm.im.goodsreceipt.purchaseorder.view.ApplicationSettingsProductionOrder",
			//                    type: "XML",
			//                    id: "s2p.mm.im.goodsreceipt.purchaseorder.ApplicationSettings"
			//                }, this);
			//            } else if (this._SourceOfGR === this._SourceOfGRIsInboundDelivery) {
			//                this._oApplicationSettingsDialog = sap.ui.xmlfragment({
			//                    fragmentName: "s2p.mm.im.goodsreceipt.purchaseorder.view.ApplicationSettingsInboundDelivery",
			//                    type: "XML",
			//                    id: "s2p.mm.im.goodsreceipt.purchaseorder.ApplicationSettings"
			//                }, this);
			//            }
			//            this.getView().addDependent(this._oApplicationSettingsDialog);
			//        }
			//        var p = new sap.ui.model.json.JSONModel();
			//        p.setData(JSON.parse(JSON.stringify(this._oPersonalizedDataContainer)));
			//        this._oApplicationSettingsDialog.setModel(p);
			//        this._oApplicationSettingsDialog.open();
			//    },
			//    handleApplicationSettingsSave: function (E) {
			//        var m = this._oApplicationSettingsDialog.getModel();
			//        this._oPersonalizedDataContainer = m.getData();
			//        if (this._oPersonalizer) {
			//            var o = this.getView().getModel("oFrontend");
			//            o.setProperty("/personalizationEnabled", false);
			//            var s = this._oPersonalizer.setPersData(this._oPersonalizedDataContainer).done(function () {
			//                o.setProperty("/personalizationEnabled", true);
			//            }).fail(function () {
			//                jQuery.sap.log.error("Writing personalization data failed.");
			//                o.setProperty("/personalizationEnabled", true);
			//            });
			//        }
			//        this._setSearchPlaceholderText();
			//        this._setScanButtonVisibility();
			//        this._oApplicationSettingsDialog.close();
			//    },
			//    handleApplicationSettingsAbort: function (E) {
			//        this._oApplicationSettingsDialog.close();
			//    },
			//    matidformatter: function (s) {
			//        if (s !== "") {
			//            s = " " + s + "";
			//        }
			//        return s;
			//    },
			//    soformatter: function (s, a) {
			//        return s + "/" + a;
			//    },
			//    _getInitialItem: function (m, a) {
			//        var o = this.getView().getModel("oFrontend");
			//        var h = o.getData();
			//        var n = {};
			//        var i = new Array();
			//        n.ItemCounter = 0;
			//        n.POItemsCountTableHeader = "01";
			//        n.Selected = false;
			//        n.SelectEnabled = true;
			//        n.Material_Input = "";
			//        n.StockTypeNOREFEnabled = false;
			//        n.DeliveredQuantityEditable = false;
			//        n.DeliveredUnitEditable = false;
			//        n.DocumentItem = m + 1;
			//        n.ChartVisible = false;
			//        if (n.DocumentItem < 10) {
			//            n.DocumentItem = "0" + n.DocumentItem;
			//        } else {
			//            n.DocumentItem = n.DocumentItem.toString();
			//        }
			//        n.ItemEnabled = true;
			//        n.SplitEnabled = false;
			//        n.MaterialText = this.getResourceBundle().getText("ITEM_DETAILTITLE", [n.DocumentItem]);
			//        n.MaterialEditable = true;
			//        n.Plant_input_editable = false;
			//        n.SalesOrder_editable = false;
			//        n.StorageLocationEditable = false;
			//        n.BatchEditable = false;
			//        n.AccountAssignmentVisible = false;
			//        n.PlantVisible = true;
			//        n.Plant = "";
			//        n.StorageLocationVisible = true;
			//        n.StorageLocation = "";
			//        n.WarehouseStorageBin = "";
			//        n.StockTypeVisible = true;
			//        n.StockType = "";
			//        n.StockTypeEnabled = true;
			//        n.StockType_input = i;
			//        n.UnloadingPoint_editable = true;
			//        n.GoodsRecipientName_editable = true;
			//        n.InventorySpecialStockTypeName = this.getResourceBundle().getText("NONE");
			//        n.DeliveredQuantity_input = 0;
			//        n.BatchVisible = false;
			//        n.ManufactureDateVisible = false;
			//        n.ShelfLifeExpirationDate = "";
			//        n.ManufactureDate = "";
			//        n.ShelfLifeExpirationDateVisible = false;
			//        n.GoodsMovementReasonCodeVisible = false;
			//        h.Items.push(n);
			//        this._initialDataLoaded = JSON.parse(JSON.stringify(h));
			//        this._loadAttachmentComponentNOREF();
			//        if (a === true) {
			//            h.CopyButtonVisible = true;
			//            h.DeleteButtonVisible = true;
			//        } else {
			//            h.CopyButtonVisible = false;
			//            h.DeleteButtonVisible = false;
			//        }
			//        var j = this.getView().getModel("oFrontend");
			//        if (j.getProperty("/SpecialStock_input") === "" || j.getProperty("/SpecialStock_input") === undefined) {
			//            this.getOwnerComponent().getModel("oData").read("/MMIMInventSpecialStockTypeVH", {
			//                success: jQuery.proxy(this._successSpecialStockLoad, this),
			//                error: jQuery.proxy(this._handleOdataError, this)
			//            });
			//        }
			//        o.setData(h);
			//        if (this.getView().sViewName === "s2p.mm.im.goodsreceipt.purchaseorder.view.S1") {
			//            this.getView().byId("idProductsTable").setNoDataText(this.getResourceBundle().getText("TABLE_NODATA_TEXT"));
			//        }
			//    },
			//    handleAddButtonPressed: function (E) {
			//        var o = this.getView().getModel("oFrontend");
			//        var m = o.getData();
			//        var a = 0;
			//        for (var i = 0; i < m.Items.length; i++) {
			//            if (a < parseInt(m.Items[i].DocumentItem)) {
			//                a = parseInt(m.Items[i].DocumentItem);
			//            }
			//        }
			//        var h = this.getView().getModel("oFrontend");
			//        var k;
			//        var v;
			//        k = h.getProperty("/Items");
			//        for (var j = 0; j < k.length; j++) {
			//            v = this._validationNoRefItem(j);
			//            if (v === false) {
			//                h.setProperty("/PostButtonEnabled", false);
			//                break;
			//            } else {
			//                h.setProperty("/PostButtonEnabled", true);
			//            }
			//        }
			//        this._getInitialItem(a, m.CopyButtonVisible);
			//        this.getView().byId("idSelectAll").setEnabled(true);
			//        this.getView().byId("idAddButton").focus();
			//        var k = o.getProperty("/Items");
			//        var s = 0;
			//        for (var i = 0; i < k.length; i++) {
			//            if (k[i].Selected) {
			//                s++;
			//            }
			//        }
			//        var A = this._allItemsInTableSelected(k);
			//        this._controlSelectAllCheckBox(s > 0, A);
			//    },
			//    handleDeleteButtonPressed: function (E) {
			//        var o = this.getView().getModel("oFrontend");
			//        var m = o.getData();
			//        var a = new Array();
			//        var j = 0;
			//        var x;
			//        var h;
			//        var p;
			//        for (var i = 0; i < m.Items.length; i++) {
			//            if (m.Items[i].Selected === true) {
			//                a.push({ item: i });
			//                x = m.Items[i].DocumentItem;
			//            }
			//        }
			//        if (a.length === 1) {
			//            p = this.getResourceBundle().getText("DELETE_POPUP_MIN", [x]);
			//        } else {
			//            p = this.getResourceBundle().getText("DELETE_POPUP_MAX", [a.length]);
			//        }
			//        var C = false;
			//        var t = this;
			//        var r = t.getResourceBundle();
			//        sap.m.MessageBox.warning(p, {
			//            icon: sap.m.MessageBox.Icon.WARNING,
			//            title: this.getResourceBundle().getText("DELETE"),
			//            actions: [
			//                this.getResourceBundle().getText("DELETE"),
			//                sap.m.MessageBox.Action.CANCEL
			//            ],
			//            onClose: k,
			//            styleClass: "sapUiSizeCompact",
			//            initialFocus: sap.m.MessageBox.Action.CANCEL
			//        });
			//        function k(R) {
			//            var j = 0;
			//            if (R === t.getResourceBundle().getText("DELETE")) {
			//                for (var i = 0; i < a.length; i++) {
			//                    m.Items.splice(a[i].item - j, 1);
			//                    j++;
			//                }
			//                if (m.Items.length === 0) {
			//                    t.getView().byId("idSelectAll").setSelected(false);
			//                    t.getView().byId("idSelectAll").setEnabled(true);
			//                }
			//                m.CopyButtonVisible = false;
			//                m.DeleteButtonVisible = false;
			//                if (a.length === 1) {
			//                    h = t.getResourceBundle().getText("DELETE_MESSAGE_MIN", [x]);
			//                } else {
			//                    h = t.getResourceBundle().getText("DELETE_MESSAGE_MAX", [a.length]);
			//                }
			//                M.show(h);
			//                o.setData(m);
			//                var l;
			//                var v;
			//                l = o.getProperty("/Items");
			//                if (l.length === 0) {
			//                    o.setProperty("/PostButtonEnabled", false);
			//                } else {
			//                    for (var s = 0; s < l.length; s++) {
			//                        v = t._validationNoRefItem(s);
			//                        if (v === false) {
			//                            o.setProperty("/PostButtonEnabled", false);
			//                            break;
			//                        } else {
			//                            o.setProperty("/PostButtonEnabled", true);
			//                        }
			//                    }
			//                }
			//                t.getView().byId("idAddButton").focus();
			//                sap.ui.getCore().getMessageManager().removeAllMessages();
			//                var n = t.getView().getModel("oFrontend");
			//                var l = n.getProperty("/Items");
			//                for (var j = 0; j < l.length; j++) {
			//                    var q = n.getProperty("/Items/" + j + "/DocumentItem");
			//                    if (n.getProperty("/Items/" + j + "/ManufactureDate_valueState") === sap.ui.core.ValueState.Error || n.getProperty("/Items/" + j + "/ShelfLifeExpirationDate_valueState") === sap.ui.core.ValueState.Error) {
			//                        var u = new e({
			//                            message: t.getResourceBundle().getText("TITLE_ERROR_DETAILVIEW"),
			//                            type: d.Error,
			//                            target: "Special Stock",
			//                            processor: n,
			//                            additionalText: t.getResourceBundle().getText("TEXT_ERROR_DETAILVIEW", [q]),
			//                            description: t.getResourceBundle().getText("TEXT_ERROR_DETAILVIEW", [q])
			//                        });
			//                        sap.ui.getCore().getMessageManager().addMessages(u);
			//                    }
			//                }
			//                var w = 0;
			//                for (var i = 0; i < l.length; i++) {
			//                    if (l[i].Selected) {
			//                        w++;
			//                    }
			//                }
			//                var A = t._allItemsInTableSelected(l);
			//                t._controlSelectAllCheckBox(w > 0, A);
			//            }
			//        }
			//    },
			//    handleCopyButtonPressed: function (E) {
			//        var o = this.getView().getModel("oFrontend");
			//        var m = o.getData();
			//        var a = 0;
			//        var j;
			//        var y = 0;
			//        var s = [];
			//        for (var i = 0; i < m.Items.length; i++) {
			//            if (a < parseInt(m.Items[i].DocumentItem)) {
			//                a = parseInt(m.Items[i].DocumentItem);
			//            }
			//        }
			//        for (var i = 0; i < m.Items.length; i++) {
			//            if (m.Items[i].Selected === true) {
			//                var n = JSON.parse(JSON.stringify(m.Items[i]));
			//                s[y] = n.DocumentItem;
			//                y++;
			//                n.Selected = false;
			//                a++;
			//                n.DocumentItem = a;
			//                if (n.DocumentItem < 10) {
			//                    n.DocumentItem = "0" + n.DocumentItem;
			//                } else {
			//                    n.DocumentItem = n.DocumentItem.toString();
			//                }
			//                s[y] = n.DocumentItem;
			//                y++;
			//                n.MaterialText = "Item " + n.DocumentItem;
			//                n.highlight = sap.ui.core.MessageType.Information;
			//                m.Items.splice(0, 0, n);
			//                j = i + 1;
			//                m.Items[j].Selected = false;
			//            }
			//        }
			//        var h = this.getView().byId("idSelectAll");
			//        h.setSelected(false);
			//        o.setData(m);
			//        o.setProperty("/CopyButtonVisible", false);
			//        o.setProperty("/DeleteButtonVisible", false);
			//        this.getView().byId("idAddButton").focus();
			//        sap.ui.getCore().getMessageManager().removeAllMessages();
			//        var k = this.getView().getModel("oFrontend");
			//        var l = k.getProperty("/Items");
			//        for (var j = 0; j < l.length; j++) {
			//            var p = k.getProperty("/Items/" + j + "/DocumentItem");
			//            if (k.getProperty("/Items/" + j + "/ManufactureDate_valueState") === sap.ui.core.ValueState.Error || k.getProperty("/Items/" + j + "/ShelfLifeExpirationDate_valueState") === sap.ui.core.ValueState.Error) {
			//                var q = new e({
			//                    message: this.getResourceBundle().getText("TITLE_ERROR_DETAILVIEW"),
			//                    type: d.Error,
			//                    target: "Special Stock",
			//                    processor: k,
			//                    additionalText: this.getResourceBundle().getText("TEXT_ERROR_DETAILVIEW", [p]),
			//                    description: this.getResourceBundle().getText("TEXT_ERROR_DETAILVIEW", [p])
			//                });
			//                sap.ui.getCore().getMessageManager().addMessages(q);
			//            }
			//        }
			//    },
			//    handleSpecialStockChange: function (E) {
			//        var i = {};
			//        i = this.getView().getModel("oItem").getData();
			//        i.InventorySpecialStockType = i.SpecialStock_selectedKey;
			//        for (var x = 0; x < i.SpecialStock_input.length; x++) {
			//            if (i.SpecialStock_input[x].key === i.SpecialStock_selectedKey) {
			//                i.InventorySpecialStockTypeName = i.SpecialStock_input[x].text;
			//                break;
			//            }
			//        }
			//        if (i.InventorySpecialStockType === "E") {
			//            i.SalesOrder_editable = true;
			//            i.SalesOrder_inputMandatory = true;
			//            i.Lifnr_inputMandatory = false;
			//            i.Project_inputMandatory = false;
			//            i.SpecialStock_input_State = sap.ui.core.ValueState.None;
			//            i.SpecialStock_input_StateText = "";
			//            i.Lifnr_State = sap.ui.core.ValueState.None;
			//            i.Lifnr_StateText = "";
			//            sap.ui.getCore().getMessageManager().removeAllMessages();
			//        }
			//        if (i.InventorySpecialStockType === "Q") {
			//            i.Project_inputMandatory = true;
			//            i.SalesOrder_inputMandatory = false;
			//            i.Lifnr_inputMandatory = false;
			//            i.SpecialStock_input_State = sap.ui.core.ValueState.None;
			//            i.SpecialStock_input_StateText = "";
			//            i.Lifnr_State = sap.ui.core.ValueState.None;
			//            i.Lifnr_StateText = "";
			//            sap.ui.getCore().getMessageManager().removeAllMessages();
			//        }
			//        if (i.InventorySpecialStockType === "K") {
			//            i.Lifnr_inputMandatory = true;
			//            i.Project_inputMandatory = false;
			//            i.SalesOrder_inputMandatory = false;
			//            i.Lifname = "";
			//            i.Lifnr = "";
			//            i.SpecialStock_input_State = sap.ui.core.ValueState.None;
			//            i.SpecialStock_input_StateText = "";
			//            i.Lifnr_State = sap.ui.core.ValueState.None;
			//            i.Lifnr_StateText = "";
			//            sap.ui.getCore().getMessageManager().removeAllMessages();
			//            var a = [];
			//            var m = this.getView().getModel("oItem").getProperty("/Material_Input");
			//            var o = this.getView().getModel("oItem");
			//            o.setDefaultBindingMode(sap.ui.model.BindingMode.TwoWay);
			//            this.getView().setModel(o);
			//            a.push(new sap.ui.model.Filter("Material", sap.ui.model.FilterOperator.EQ, m));
			//            this.getOwnerComponent().getModel("oData").read("/MMIMSupplierMaterialVH", {
			//                filters: a,
			//                success: jQuery.proxy(this._successSupplierLoad, this),
			//                error: jQuery.proxy(this._handleOdataError, this)
			//            });
			//        }
			//        if (i.InventorySpecialStockType === "") {
			//            i.SalesOrder_inputMandatory = false;
			//            i.Lifnr_inputMandatory = false;
			//            i.Project_inputMandatory = false;
			//            i.SpecialStock_input_State = sap.ui.core.ValueState.None;
			//            i.SpecialStock_input_StateText = "";
			//            i.Lifnr_State = sap.ui.core.ValueState.None;
			//            i.Lifnr_StateText = "";
			//            sap.ui.getCore().getMessageManager().removeAllMessages();
			//        }
			//        if (i.InventorySpecialStockType !== "E") {
			//            i.SalesOrder = "";
			//            i.SalesOrderItem = "";
			//        }
			//        if (i.InventorySpecialStockType !== "Q") {
			//            i.Project = "";
			//            i.ProjectDescription = "";
			//        }
			//        this.getView().getModel("oItem").setData(i);
			//        this._setGuidedTour();
			//        this.getView().byId("idInventorySpecialStockSelection").focus();
			//    },
			//    _successSupplierLoad: function (o, r) {
			//        var i = this.getView().getModel("oItem");
			//        if (o.results.length <= 0) {
			//            i.setProperty("/SpecialStock_input_State", sap.ui.core.ValueState.Error);
			//            i.setProperty("/SpecialStock_input_StateText", this.getResourceBundle().getText("LABEL_LIFNR_NOFOUND"));
			//            i.setProperty("/Lifnr_State", sap.ui.core.ValueState.Error);
			//            i.setProperty("/Lifnr_StateText", this.getResourceBundle().getText("LABEL_LIFNR_NOFOUND2"));
			//            if (sap.ui.getCore().getMessageManager().getMessageModel().getData().length === 0) {
			//                var m = new e({
			//                    message: this.getResourceBundle().getText("LABEL_LIFNR_NOFOUND"),
			//                    type: d.Error,
			//                    target: "Special Stock",
			//                    processor: i,
			//                    additionalText: this.getResourceBundle().getText("LABEL_SPECIALSTOCK")
			//                });
			//                sap.ui.getCore().getMessageManager().addMessages(m);
			//                m = new e({
			//                    message: this.getResourceBundle().getText("LABEL_LIFNR_NOFOUND2"),
			//                    type: d.Error,
			//                    target: "Special Stock",
			//                    processor: i,
			//                    additionalText: this.getResourceBundle().getText("SUPPLIER"),
			//                    description: this.getResourceBundle().getText("TEXT_LIFNR_NOFOUND")
			//                });
			//                sap.ui.getCore().getMessageManager().addMessages(m);
			//            }
			//        } else {
			//            i.setProperty("/SpecialStock_input_State", sap.ui.core.ValueState.None);
			//            i.setProperty("/SpecialStock_input_StateText", "");
			//            i.setProperty("/Lifnr_State", sap.ui.core.ValueState.None);
			//            i.setProperty("/Lifnr_StateText", "");
			//        }
			//    },
			//    handleMaterialValueHelp: function (E) {
			//        var t = this;
			//        var m = E.getSource();
			//        var p = {};
			//        var s;
			//        var a;
			//        var P;
			//        var u;
			//        var h;
			//        if (this.getView().sViewName === "s2p.mm.im.goodsreceipt.purchaseorder.view.S1") {
			//            this._SelectedTableIndex = this._getSelectedItemInModel(E);
			//            var o = this.getView().getModel("oFrontend");
			//            var i = o.getProperty("/Items");
			//            s = i[this._SelectedTableIndex].Material_Input;
			//            a = i[this._SelectedTableIndex].Material_Name;
			//            P = i[this._SelectedTableIndex].Plant;
			//            u = i[this._SelectedTableIndex].DeliveredUnit_input;
			//            h = i[this._SelectedTableIndex].StorageLocation_input;
			//        } else {
			//            var j = this.getModel("oItem");
			//            s = j.getProperty("/Material_Input");
			//            a = j.getProperty("/Material_Name");
			//            P = j.getProperty("/Plant");
			//            u = j.DeliveredUnit_input;
			//            h = j.StorageLocation_input;
			//        }
			//        p.Material = a;
			//        this._oValueHelpController.displayValueHelpMaterialGeneral(p, function (r) {
			//            t._handleMaterialValueHelpCallback(r);
			//            if (m.getValue() !== r.MaterialName && r.selected === true) {
			//                m.setValue(r.MaterialName);
			//            }
			//        });
			//    },
			//    _handleMaterialValueHelpCallback: function (r) {
			//        var s = false;
			//        var m;
			//        var p;
			//        var u;
			//        var a;
			//        var h;
			//        var v = sap.ui.core.ValueState.None;
			//        var o;
			//        if (r.selected === true) {
			//            if (this.getView().sViewName === "s2p.mm.im.goodsreceipt.purchaseorder.view.S1") {
			//                var i = this.getView().getModel("oFrontend");
			//                i.setProperty("/Items/" + this._SelectedTableIndex + "/Material_Input", r.Material);
			//                i.setProperty("/Items/" + this._SelectedTableIndex + "/Material_Name", r.MaterialName);
			//                i.setProperty("/Items/" + this._SelectedTableIndex + "/Material_Input_valueState", sap.ui.core.ValueState.None);
			//                i.setProperty("/Items/" + this._SelectedTableIndex + "/Material_Input_valueStateText", "");
			//                i.setProperty("/Items/" + this._SelectedTableIndex + "/Plant", r.Plant);
			//                i.setProperty("/Items/" + this._SelectedTableIndex + "/Plant_input", r.PlantName);
			//                i.setProperty("/Items/" + this._SelectedTableIndex + "/Plant_valueState", sap.ui.core.ValueState.None);
			//                i.setProperty("/Items/" + this._SelectedTableIndex + "/Plant_valueStateText", "");
			//                i.setProperty("/Items/" + this._SelectedTableIndex + "/Batch", "");
			//                if (i.getProperty("/Items/" + this._SelectedTableIndex + "/SpecialStock_selectedKey") === "K") {
			//                    i.setProperty("/Items/" + this._SelectedTableIndex + "/Lifnr", "");
			//                    i.setProperty("/Items/" + this._SelectedTableIndex + "/Lifname", "");
			//                    i.setProperty("/Items/" + this._SelectedTableIndex + "/Lifnr_State", sap.ui.core.ValueState.None);
			//                    i.setProperty("/Items/" + this._SelectedTableIndex + "/Lifnr_StateText", "");
			//                    i.setProperty("/Items/" + this._SelectedTableIndex + "/SpecialStock_input_State", sap.ui.core.ValueState.None);
			//                    var j = i.getProperty("/Items/" + this._SelectedTableIndex);
			//                    if (j.SpecialStock_input.length > 0) {
			//                        for (var x = 0; x < j.SpecialStock_input.length; x++) {
			//                            if (j.SpecialStock_input[x].key === "") {
			//                                var k = j.SpecialStock_input[x].text;
			//                                break;
			//                            }
			//                        }
			//                        i.setProperty("/Items/" + this._SelectedTableIndex + "/SpecialStock_selectedKey", "");
			//                        i.setProperty("/Items/" + this._SelectedTableIndex + "/InventorySpecialStockTypeName", k);
			//                        i.setProperty("/Items/" + this._SelectedTableIndex + "/Lifnr_inputMandatory", false);
			//                    }
			//                }
			//                this._setValueStateMandatoryFields(i.getProperty("/Items/" + this._SelectedTableIndex));
			//                if (r.Material === "") {
			//                    v = sap.ui.core.ValueState.Error;
			//                    i.setProperty("/Items/" + this._SelectedTableIndex + "/Material_Input_valueState", v);
			//                } else {
			//                    i.setProperty("/Items/" + this._SelectedTableIndex + "/Material_Input_valueState", v);
			//                }
			//                if (i.getProperty("/Items/" + this._SelectedTableIndex + "/SpecialStock_input") === undefined) {
			//                    o = i.getProperty("/SpecialStock_input");
			//                    i.setProperty("/Items/" + this._SelectedTableIndex + "/SpecialStock_input", o);
			//                }
			//                m = r.Material;
			//                p = i.getProperty("/Items/" + this._SelectedTableIndex + "/Plant");
			//                u = i.getProperty("/Items/" + this._SelectedTableIndex + "/DeliveredUnit_input");
			//                a = i.getProperty("/Items/" + this._SelectedTableIndex + "/StorageLocation");
			//                h = i.getProperty("/Items/" + this._SelectedTableIndex + "/StockType_selectedKey");
			//            } else {
			//                var l = this.getView().getModel("oFrontend");
			//                var n = this.getView().getModel("oItem");
			//                n.setProperty("/Material_Input", r.Material);
			//                n.setProperty("/Material_Name", r.MaterialName);
			//                n.setProperty("/Material_Input_valueState", sap.ui.core.ValueState.None);
			//                n.setProperty("/Material_Input_valueStateText", "");
			//                n.setProperty("/Plant", r.Plant);
			//                n.setProperty("/Plant_input", r.PlantName);
			//                n.setProperty("/Plant_valueState", sap.ui.core.ValueState.None);
			//                n.setProperty("/Plant_valueStateText", "");
			//                n.setProperty("/Batch", "");
			//                if (n.getProperty("/SpecialStock_selectedKey") === "K") {
			//                    n.setProperty("/Lifnr", "");
			//                    n.setProperty("/Lifname", "");
			//                    n.setProperty("/Lifnr_State", sap.ui.core.ValueState.None);
			//                    n.setProperty("/Lifnr_StateText", "");
			//                    n.setProperty("/SpecialStock_input_State", sap.ui.core.ValueState.None);
			//                    var j = n.getData();
			//                    if (j.SpecialStock_input !== undefined && j.SpecialStock_input.length > 0) {
			//                        for (var x = 0; x < j.SpecialStock_input.length; x++) {
			//                            if (j.SpecialStock_input[x].key === "") {
			//                                var k = j.SpecialStock_input[x].text;
			//                                break;
			//                            }
			//                        }
			//                        n.setProperty("/SpecialStock_selectedKey", "");
			//                        n.setProperty("/InventorySpecialStockTypeName", k);
			//                        n.setProperty("/Lifnr_inputMandatory", false);
			//                    }
			//                }
			//                if (r.Material === "") {
			//                    v = sap.ui.core.ValueState.Error;
			//                    n.setProperty("/Material_Input_valueState", v);
			//                } else {
			//                    n.setProperty("/Material_Input_valueState", v);
			//                }
			//                this.getView().byId("idQuantity").focus();
			//                if (n.getProperty("/SpecialStock_input") === undefined) {
			//                    o = l.getProperty("/SpecialStock_input");
			//                    n.setProperty("/SpecialStock_input", o);
			//                }
			//                m = r.Material;
			//                p = n.getProperty("/Plant");
			//                u = n.getProperty("/DeliveredUnit_input");
			//                a = n.getProperty("/StorageLocation");
			//                h = n.getProperty("/StockType_selectedKey");
			//            }
			//            this._oValueHelpController.fillBufferForMaterialExpanded(r, this._validationCallbBack, this);
			//            this._handleValidationMasterData(m, u, p, a, this._SelectedTableIndex);
			//            if (this.getView().sViewName === "s2p.mm.im.goodsreceipt.purchaseorder.view.S1") {
			//                i = this.getView().getModel("oFrontend");
			//                p = i.getProperty("/Items/" + this._SelectedTableIndex + "/Plant");
			//            } else {
			//                n = this.getView().getModel("oItem");
			//                p = n.getProperty("/Plant");
			//            }
			//            this._getControlFields(m, p, this._SelectedTableIndex, h);
			//        }
			//    },
			//    handlePlantHelp: function (E) {
			//        var t = this;
			//        var p = {};
			//        var m;
			//        var P;
			//        var u;
			//        var s;
			//        if (this.getView().sViewName === "s2p.mm.im.goodsreceipt.purchaseorder.view.S1") {
			//            this._SelectedTableIndex = this._getSelectedItemInModel(E);
			//            var o = this.getView().getModel("oFrontend");
			//            var i = o.getProperty("/Items");
			//            m = i[this._SelectedTableIndex].Material_Input;
			//            P = i[this._SelectedTableIndex].Plant;
			//            u = i[this._SelectedTableIndex].DeliveredUnit_input;
			//            s = i[this._SelectedTableIndex].StorageLocation_input;
			//        } else {
			//            var a = this.getModel("oItem");
			//            m = a.getProperty("/Material_Input");
			//            P = a.getProperty("/Plant");
			//            u = a.DeliveredUnit_input;
			//            s = a.StorageLocation_input;
			//        }
			//        p.Material = m;
			//        p.Plant = P;
			//        p.UoM = u;
			//        p.StorageLocation = s;
			//        this._oValueHelpController.displayValueHelpPlant4Material(p, function (r) {
			//            t._handlePlantValueHelpCallback(r);
			//        }, t);
			//    },
			//    _handlePlantValueHelpCallback: function (r) {
			//        var s = false;
			//        var m;
			//        var u;
			//        var p;
			//        var a;
			//        var h;
			//        if (r.selected === true) {
			//            if (this.getView().sViewName === "s2p.mm.im.goodsreceipt.purchaseorder.view.S1") {
			//                var o = this.getView().getModel("oFrontend");
			//                o.setProperty("/Items/" + this._SelectedTableIndex + "/Plant", r.Plant);
			//                o.setProperty("/Items/" + this._SelectedTableIndex + "/Plant_input", r.PlantName);
			//                o.setProperty("/Items/" + this._SelectedTableIndex + "/Batch", "");
			//                if (o.getProperty("/Items/" + this._SelectedTableIndex + "/SpecialStock_selectedKey") === "K") {
			//                    o.setProperty("/Items/" + this._SelectedTableIndex + "/Lifnr", "");
			//                    o.setProperty("/Items/" + this._SelectedTableIndex + "/Lifname", "");
			//                    o.setProperty("/Items/" + this._SelectedTableIndex + "/Lifnr_State", sap.ui.core.ValueState.None);
			//                    o.setProperty("/Items/" + this._SelectedTableIndex + "/Lifnr_StateText", "");
			//                    o.setProperty("/Items/" + this._SelectedTableIndex + "/SpecialStock_input_State", sap.ui.core.ValueState.None);
			//                    var i = o.getProperty("/Items/" + this._SelectedTableIndex);
			//                    if (i.SpecialStock_input !== undefined && i.SpecialStock_input.length > 0) {
			//                        for (var x = 0; x < i.SpecialStock_input.length; x++) {
			//                            if (i.SpecialStock_input[x].key === "") {
			//                                var j = i.SpecialStock_input[x].text;
			//                                break;
			//                            }
			//                        }
			//                        o.setProperty("/Items/" + this._SelectedTableIndex + "/SpecialStock_selectedKey", "");
			//                        o.setProperty("/Items/" + this._SelectedTableIndex + "/InventorySpecialStockTypeName", j);
			//                        o.setProperty("/Items/" + this._SelectedTableIndex + "/Lifnr_inputMandatory", false);
			//                    }
			//                }
			//                m = o.getProperty("/Items/" + this._SelectedTableIndex + "/Material_Input");
			//                p = o.getProperty("/Items/" + this._SelectedTableIndex + "/Plant");
			//                u = o.getProperty("/Items/" + this._SelectedTableIndex + "/DeliveredUnit_input");
			//                a = o.getProperty("/Items/" + this._SelectedTableIndex + "/StorageLocation");
			//                h = o.getProperty("/Items/" + this._SelectedTableIndex + "/StockType_selectedKey");
			//            } else {
			//                var k = this.getView().getModel("oItem");
			//                k.setProperty("/Plant", r.Plant);
			//                k.setProperty("/Plant_input", r.PlantName);
			//                k.setProperty("/Batch", "");
			//                if (k.getProperty("/SpecialStock_selectedKey") === "K") {
			//                    k.setProperty("/Lifnr", "");
			//                    k.setProperty("/Lifname", "");
			//                    k.setProperty("/Lifnr_State", sap.ui.core.ValueState.None);
			//                    k.setProperty("/Lifnr_StateText", "");
			//                    k.setProperty("/SpecialStock_input_State", sap.ui.core.ValueState.None);
			//                    var i = k.getData();
			//                    if (i.SpecialStock_input !== undefined && i.SpecialStock_input.length > 0) {
			//                        for (var x = 0; x < i.SpecialStock_input.length; x++) {
			//                            if (i.SpecialStock_input[x].key === "") {
			//                                var j = i.SpecialStock_input[x].text;
			//                                break;
			//                            }
			//                        }
			//                        k.setProperty("/SpecialStock_selectedKey", "");
			//                        k.setProperty("/InventorySpecialStockTypeName", j);
			//                        k.setProperty("/Lifnr_inputMandatory", false);
			//                    }
			//                }
			//                m = k.getProperty("/Material_Input");
			//                p = k.getProperty("/Plant");
			//                u = k.getProperty("/DeliveredUnit_input");
			//                a = k.getProperty("/StorageLocation");
			//                h = k.getProperty("/StockType_selectedKey");
			//            }
			//            this._handleValidationMasterData(m, u, p, a, this._SelectedTableIndex);
			//            if (this.getView().sViewName === "s2p.mm.im.goodsreceipt.purchaseorder.view.S1") {
			//                o = this.getView().getModel("oFrontend");
			//                p = o.getProperty("/Items/" + this._SelectedTableIndex + "/Plant");
			//            } else {
			//                k = this.getView().getModel("oItem");
			//                p = k.getProperty("/Plant");
			//            }
			//            this._getControlFields(m, r.Plant, this._SelectedTableIndex, h);
			//        }
			//    },
			//    handleMaterialSuggest: function (E) {
			//        var t = E.getParameter("suggestValue").trim().toUpperCase();
			//        var o = {};
			//        var O = [];
			//        O.push(new sap.ui.model.Filter("Material", sap.ui.model.FilterOperator.Contains, t));
			//        O.push(new sap.ui.model.Filter("MaterialName", sap.ui.model.FilterOperator.Contains, t));
			//        o = new sap.ui.model.Filter(O, false);
			//        if (!E.getSource().getBinding("suggestionItems")) {
			//            E.getSource().bindAggregation("suggestionItems", {
			//                path: "/MaterialHelps",
			//                model: "oDataHelp",
			//                template: new sap.ui.core.ListItem({
			//                    additionalText: "{oDataHelp>Material}",
			//                    text: "{oDataHelp>MaterialName}"
			//                })
			//            });
			//        }
			//        E.getSource().getBinding("suggestionItems").filter(o);
			//    },
			//    handleSuggestionMaterialSelected: function (E) {
			//        var m;
			//        var s;
			//        var p;
			//        var a;
			//        var u;
			//        var h;
			//        var i;
			//        var o;
			//        var v = sap.ui.core.ValueState.None;
			//        if (this.getView().sViewName === "s2p.mm.im.goodsreceipt.purchaseorder.view.S1") {
			//            this._SelectedTableIndex = this._getSelectedItemInModel(E);
			//            var j = this.getView().getModel("oFrontend");
			//            var k = j.getProperty("/Items");
			//            s = E.getParameter("selectedItem").getText();
			//            m = E.getParameter("selectedItem").getAdditionalText();
			//            p = p = k[this._SelectedTableIndex].Plant;
			//            j.setProperty("/Items/" + this._SelectedTableIndex + "/Material_Name", s);
			//            j.setProperty("/Items/" + this._SelectedTableIndex + "/Material_Input", m);
			//            j.setProperty("/Items/" + this._SelectedTableIndex + "/Material_Input_valueState", sap.ui.core.ValueState.None);
			//            j.setProperty("/Items/" + this._SelectedTableIndex + "/Material_Input_valueStateText", "");
			//            j.setProperty("/Items/" + this._SelectedTableIndex + "/Batch", "");
			//            if (j.getProperty("/Items/" + this._SelectedTableIndex + "/SpecialStock_selectedKey") === "K") {
			//                j.setProperty("/Items/" + this._SelectedTableIndex + "/Lifnr", "");
			//                j.setProperty("/Items/" + this._SelectedTableIndex + "/Lifname", "");
			//                j.setProperty("/Items/" + this._SelectedTableIndex + "/Lifnr_State", sap.ui.core.ValueState.None);
			//                j.setProperty("/Items/" + this._SelectedTableIndex + "/Lifnr_StateText", "");
			//                j.setProperty("/Items/" + this._SelectedTableIndex + "/SpecialStock_input_State", sap.ui.core.ValueState.None);
			//                var l = j.getProperty("/Items/" + this._SelectedTableIndex);
			//                if (l.SpecialStock_input !== undefined && l.SpecialStock_input.length > 0) {
			//                    for (var x = 0; x < l.SpecialStock_input.length; x++) {
			//                        if (l.SpecialStock_input[x].key === "") {
			//                            var n = l.SpecialStock_input[x].text;
			//                            break;
			//                        }
			//                    }
			//                    j.setProperty("/Items/" + this._SelectedTableIndex + "/SpecialStock_selectedKey", "");
			//                    j.setProperty("/Items/" + this._SelectedTableIndex + "/InventorySpecialStockTypeName", n);
			//                    j.setProperty("/Items/" + this._SelectedTableIndex + "/Lifnr_inputMandatory", false);
			//                }
			//            }
			//            p = j.getProperty("/Items/" + this._SelectedTableIndex + "/Plant");
			//            u = j.getProperty("/Items/" + this._SelectedTableIndex + "/DeliveredUnit_input");
			//            h = j.getProperty("/Items/" + this._SelectedTableIndex + "/StorageLocation");
			//            i = j.getProperty("/Items/" + this._SelectedTableIndex + "/StockType_selectedKey");
			//            if (j.getProperty("/Items/" + this._SelectedTableIndex + "/SpecialStock_input") === undefined) {
			//                o = j.getProperty("/SpecialStock_input");
			//                j.setProperty("/Items/" + this._SelectedTableIndex + "/SpecialStock_input", o);
			//            }
			//            if (E.getParameter("valid") === false || E.getParameters().value === "") {
			//                v = sap.ui.core.ValueState.Error;
			//                j.setProperty("/Items/" + this._SelectedTableIndex + "/Material_Input_valueState", v);
			//            } else {
			//                j.setProperty("/Items/" + this._SelectedTableIndex + "/Material_Input_valueState", v);
			//            }
			//        } else {
			//            var q = this.getView().getModel("oItem");
			//            var r = this.getView().getModel("oFrontend");
			//            s = E.getParameter("selectedItem").getText();
			//            m = E.getParameter("selectedItem").getAdditionalText();
			//            q.setProperty("/Material_Input", m);
			//            q.setProperty("/Material_Name", s);
			//            q.setProperty("/Material_Input_valueState", sap.ui.core.ValueState.None);
			//            q.setProperty("/Material_Input_valueStateText", "");
			//            q.setProperty("/Batch", "");
			//            if (q.setProperty("/SpecialStock_selectedKey") === "K") {
			//                q.setProperty("/Lifnr", "");
			//                q.setProperty("/Lifname", "");
			//                q.setProperty("/Lifnr_State", sap.ui.core.ValueState.None);
			//                q.setProperty("/Lifnr_StateText", "");
			//                q.setProperty("/SpecialStock_input_State", sap.ui.core.ValueState.None);
			//                var l = q.getData();
			//                if (l.SpecialStock_input !== undefined && l.SpecialStock_input.length > 0) {
			//                    for (var x = 0; x < l.SpecialStock_input.length; x++) {
			//                        if (l.SpecialStock_input[x].key === "") {
			//                            var n = l.SpecialStock_input[x].text;
			//                            break;
			//                        }
			//                    }
			//                    q.setProperty("/SpecialStock_selectedKey", "");
			//                    q.setProperty("/InventorySpecialStockTypeName", n);
			//                    q.setProperty("/Lifnr_inputMandatory", false);
			//                }
			//            }
			//            if (q.getProperty("/SpecialStock_input") === undefined) {
			//                o = r.getProperty("/SpecialStock_input");
			//                q.setProperty("/SpecialStock_input", o);
			//            }
			//            p = q.getProperty("/Plant");
			//            u = q.getProperty("/DeliveredUnit_input");
			//            h = q.getProperty("/StorageLocation");
			//            i = q.getProperty("/StockType_selectedKey");
			//            if (E.getParameter("valid") === false || E.getParameters().value === "") {
			//                v = sap.ui.core.ValueState.Error;
			//                q.setProperty("/Material_Input_valueState", v);
			//            } else {
			//                q.setProperty("/Material_Input_valueState", v);
			//            }
			//            this._setValueStateMandatoryFields(q.getData());
			//            p = q.getProperty("/Plant");
			//        }
			//        this._handleValidationMasterData(m, u, p, h, this._SelectedTableIndex);
			//        if (this.getView().sViewName === "s2p.mm.im.goodsreceipt.purchaseorder.view.S1") {
			//            p = j.getProperty("/Items/" + this._SelectedTableIndex + "/Plant");
			//        } else {
			//            p = q.getProperty("/Plant");
			//        }
			//        this._getControlFields(m, p, this._SelectedTableIndex, i);
			//    },
			//    _getControlFields: function (m, p, s, i) {
			//        if (i === undefined || i === "" || i === 0) {
			//            i = 0;
			//        } else {
			//            i = i - 1;
			//        }
			//        this.getOwnerComponent().getModel("oData").callFunction("/MatlPlntControlDpdtFields", {
			//            method: "GET",
			//            urlParameters: {
			//                Material: m,
			//                Plant: p,
			//                SourceOfGR: this._SourceOfGR
			//            },
			//            success: jQuery.proxy(this._successControlFieldsLoad, this, s, i),
			//            error: jQuery.proxy(this._handleOdataError, this)
			//        });
			//    },
			//    _successControlFieldsLoad: function (s, i, o, r) {
			//        var m = this.getView().getModel("oFrontend");
			//        var a = m.getProperty("/Items");
			//        var h = new Array();
			//        var k;
			//        var l;
			//        if (o.results[0]) {
			//            for (var j = 0; j < o.results.length; j++) {
			//                h.push({
			//                    key: o.results[j].StockType,
			//                    text: o.results[j].StockTypeName,
			//                    ControlOfBatchTableField: o.results[j].ControlOfBatchTableField,
			//                    ControlOfReasonCodeTableField: o.results[j].ControlOfReasonCodeTableField,
			//                    ControlOfExpirationDate: o.results[j].ControlOfExpirationDate,
			//                    ControlOfManufactureDate: o.results[j].ControlOfManufactureDate,
			//                    StorLocAutoCreationIsAllowed: o.results[j].StorLocAutoCreationIsAllowed
			//                });
			//            }
			//        } else {
			//            h.push({
			//                key: "",
			//                text: "",
			//                ControlOfBatchTableField: "00000",
			//                ControlOfReasonCodeTableField: "00000",
			//                ControlOfExpirationDate: "00000",
			//                ControlOfManufactureDate: "00000",
			//                StorLocAutoCreationIsAllowed: "00000"
			//            });
			//        }
			//        if (this.getView().sViewName === "s2p.mm.im.goodsreceipt.purchaseorder.view.S2") {
			//            var n = this.getView().getModel("oItem").getData();
			//            if (o.results[i] !== undefined) {
			//                this._evaluateFieldControl("Batch", o.results[i].ControlOfBatchTableField, n);
			//                this._evaluateFieldControl("GoodsMovementReasonCode", o.results[i].ControlOfReasonCodeTableField, n);
			//                this._evaluateFieldControl("ShelfLifeExpirationDate", o.results[i].ControlOfExpirationDate, n);
			//                this._evaluateFieldControl("ManufactureDate", o.results[i].ControlOfManufactureDate, n);
			//            }
			//            this.getView().getModel("oItem").setProperty("/StockType_input", h);
			//            if (n.BatchVisible === true) {
			//                this.getView().getModel("oItem").setProperty("/ColumnBatchVisible", true);
			//                this.getView().getModel("oItem").setProperty("/BatchVisible", true);
			//            } else {
			//                this.getView().getModel("oItem").setProperty("/ColumnBatchVisible", false);
			//                this.getView().getModel("oItem").setProperty("/Batch_valueState", sap.ui.core.ValueState.None);
			//            }
			//            if (n.ManufactureDateVisible === true) {
			//                this.getView().getModel("oItem").setProperty("/ColumnManufactureDateVisible", true);
			//            } else {
			//                this.getView().getModel("oItem").setProperty("/ColumnManufactureDateVisible", false);
			//                this.getView().getModel("oItem").setProperty("/ManufactureDate_valueState", sap.ui.core.ValueState.None);
			//            }
			//            if (n.ShelfLifeExpirationDateVisible === true) {
			//                this.getView().getModel("oItem").setProperty("/ColumnShelfLifeExpirationDateVisible", true);
			//            } else {
			//                this.getView().getModel("oItem").setProperty("/ColumnShelfLifeExpirationDateVisible", false);
			//                this.getView().getModel("oItem").setProperty("/ShelfLifeExpirationDate_valueState", sap.ui.core.ValueState.None);
			//            }
			//            this.getView().getModel("oItem").setData(n);
			//            this._setReasonCodeFilter(n);
			//        } else {
			//            this.getView().getModel("oFrontend").setProperty("/Items/" + s + "/StockType_input", h);
			//            if (o.results[i] !== undefined) {
			//                this._evaluateFieldControl("Batch", o.results[i].ControlOfBatchTableField, a[s]);
			//                this._evaluateFieldControl("GoodsMovementReasonCode", o.results[i].ControlOfReasonCodeTableField, a[s]);
			//                this._evaluateFieldControl("ShelfLifeExpirationDate", o.results[i].ControlOfExpirationDate, a[s]);
			//                this._evaluateFieldControl("ManufactureDate", o.results[i].ControlOfManufactureDate, a[s]);
			//            }
			//            if (a[s].ManufactureDateVisible === true) {
			//                this.getView().getModel("oFrontend").setProperty("/ColumnManufactureDateVisible", true);
			//            } else {
			//                this.getView().getModel("oFrontend").setProperty("/ColumnManufactureDateVisible", false);
			//                this.getView().getModel("oFrontend").setProperty("/Items/" + this._SelectedTableIndex + "/ManufactureDate_valueState", sap.ui.core.ValueState.None);
			//            }
			//            ;
			//            if (a[s].ShelfLifeExpirationDateVisible === true) {
			//                this.getView().getModel("oFrontend").setProperty("/ColumnShelfLifeExpirationDateVisible", true);
			//            } else {
			//                this.getView().getModel("oFrontend").setProperty("/ColumnShelfLifeExpirationDateVisible", false);
			//                this.getView().getModel("oFrontend").setProperty("/Items/" + this._SelectedTableIndex + "/ShelfLifeExpirationDate_valueState", sap.ui.core.ValueState.None);
			//            }
			//            ;
			//            sap.ui.getCore().getMessageManager().removeAllMessages();
			//            for (var j = 0; j < a.length; j++) {
			//                var p = m.getProperty("/Items/" + j + "/DocumentItem");
			//                if (m.getProperty("/Items/" + j + "/ManufactureDate_valueState") === sap.ui.core.ValueState.Error || m.getProperty("/Items/" + j + "/ShelfLifeExpirationDate_valueState") === sap.ui.core.ValueState.Error) {
			//                    var q = new e({
			//                        message: this.getResourceBundle().getText("TITLE_ERROR_DETAILVIEW"),
			//                        type: d.Error,
			//                        target: "Special Stock",
			//                        processor: m,
			//                        additionalText: this.getResourceBundle().getText("TEXT_ERROR_DETAILVIEW", [p]),
			//                        description: this.getResourceBundle().getText("TEXT_ERROR_DETAILVIEW", [p])
			//                    });
			//                    sap.ui.getCore().getMessageManager().addMessages(q);
			//                }
			//            }
			//            if (a[s].BatchVisible === true) {
			//                this.getView().getModel("oFrontend").setProperty("/ColumnBatchVisible", true);
			//            } else {
			//                for (var j = 0; j < a.length; j++) {
			//                    this.getView().getModel("oFrontend").setProperty("/Items/" + this._SelectedTableIndex + "/BatchVisible", false);
			//                    if (a[j].BatchVisible === true) {
			//                        l = true;
			//                        return;
			//                    }
			//                }
			//                if (l === true) {
			//                    this.getView().getModel("oFrontend").setProperty("/ColumnBatchVisible", false);
			//                    this.getView().getModel("oFrontend").setProperty("/Items/" + this._SelectedTableIndex + "/Batch_valueState", sap.ui.core.ValueState.None);
			//                }
			//            }
			//            ;
			//            n = m.getProperty("/Items/" + s);
			//            this._setValueStateMandatoryFields(n);
			//            m.setProperty("/Items/" + s, n);
			//            this._setSelectEnabled(m.getProperty("/Items/" + this._SelectedTableIndex));
			//            this._controlSelectAllAndPostButton();
			//            this._updateHiglightProperty();
			//        }
			//    },
			//    _handleValidationMasterData: function (m, u, p, s, i) {
			//        var r = {};
			//        var a;
			//        this._SelectedTableIndex = i;
			//        this._oValueHelpController.validateMasterData(m, u, p, s, this._validationCallbBack, this);
			//    },
			//    _validationCallbBack: function (r) {
			//        if (this.getView().sViewName === "s2p.mm.im.goodsreceipt.purchaseorder.view.S1") {
			//            var m = this.getView().getModel("oFrontend");
			//            if (r.bMaterialIsValid !== true) {
			//                m.setProperty("/Items/" + this._SelectedTableIndex + "/Material_Input", "");
			//                m.setProperty("/Items/" + this._SelectedTableIndex + "/Material_Input_valueState", sap.ui.core.ValueState.Error);
			//                m.setProperty("/Items/" + this._SelectedTableIndex + "/Material_Input_valueStateText", "");
			//            }
			//            if (r.bUoMIsValid !== true) {
			//                m.setProperty("/Items/" + this._SelectedTableIndex + "/DeliveredUnit_input", "");
			//            }
			//            if (r.bPlantIsValid !== true) {
			//                m.setProperty("/Items/" + this._SelectedTableIndex + "/Plant", "");
			//                m.setProperty("/Items/" + this._SelectedTableIndex + "/Plant_input", "");
			//                m.setProperty("/Items/" + this._SelectedTableIndex + "/Plant_valueState", sap.ui.core.ValueState.None);
			//                m.setProperty("/Items/" + this._SelectedTableIndex + "/Plant_valueStateText", "");
			//            }
			//            if (r.bStorageLocationIsValid !== true) {
			//                m.setProperty("/Items/" + this._SelectedTableIndex + "/StorageLocation", "");
			//                m.setProperty("/Items/" + this._SelectedTableIndex + "/StorageLocation_input", "");
			//                m.setProperty("/Items/" + this._SelectedTableIndex + "/StorageLocation_valueState", sap.ui.core.ValueState.None);
			//                m.setProperty("/Items/" + this._SelectedTableIndex + "/StorageLocation_valueStateText", "");
			//                m.setProperty("/Items/" + this._SelectedTableIndex + "/BatchEditable", false);
			//            }
			//        } else {
			//            var i = this.getView().getModel("oItem");
			//            if (r.bMaterialIsValid !== true) {
			//                i.setProperty("/Material_Input", "");
			//                i.setProperty("/Material_Input_valueState", sap.ui.core.ValueState.Error);
			//                i.setProperty("/Material_Input_valueStateText", "");
			//            }
			//            if (r.bUoMIsValid !== true) {
			//                i.setProperty("/DeliveredUnit_input", "");
			//            }
			//            if (r.bPlantIsValid !== true) {
			//                i.setProperty("/Plant", "");
			//                i.setProperty("/Plant_input", "");
			//                i.setProperty("/Plant_valueState", sap.ui.core.ValueState.None);
			//                i.setProperty("/Plant_valueStateText", "");
			//            }
			//            if (r.bStorageLocationIsValid !== true) {
			//                i.setProperty("/StorageLocation", "");
			//                i.setProperty("/StorageLocation_input", "");
			//                i.setProperty("/StorageLocation_valueState", sap.ui.core.ValueState.None);
			//                i.setProperty("/StorageLocation_valueStateText", "");
			//                i.setProperty("/BatchEditable", false);
			//            }
			//        }
			//        this._setGuidedTour(this._SelectedTableIndex);
			//    },
			//    _setGuidedTour: function (a) {
			//        var h;
			//        var o = this.getModel("oFrontend");
			//        var m;
			//        var q;
			//        var A;
			//        var p;
			//        var k;
			//        var l;
			//        var n = true;
			//        var v;
			//        var r;
			//        var t;
			//        if (this.getView().sViewName === "s2p.mm.im.goodsreceipt.purchaseorder.view.S1") {
			//            var u = this.getView().getModel("oFrontend");
			//            var w;
			//            w = u.getProperty("/Items");
			//            var T = this.getView().byId("idProductsTable").getItems();
			//            for (var i = 0; i < w.length; i++) {
			//                if (u.getProperty("/Items/" + i + "/Material_Input") !== "") {
			//                    t = this._oValueHelpController.getBufferOfMaterial(u.getProperty("/Items/" + i + "/Material_Input"));
			//                    m = t.Material;
			//                    A = t.AUoM;
			//                    p = t.Plant;
			//                    k = t.StorageLocation;
			//                    u.setProperty("/Items/" + i + "/DeliveredQuantityEditable", true);
			//                    if (A.AUoMCollection.length === 1) {
			//                        u.setProperty("/Items/" + i + "/DeliveredUnit_input", t.AUoM.AUoMCollection[0].BaseUnit);
			//                    }
			//                    u.setProperty("/Items/" + i + "/DeliveredUnitEditable", true);
			//                    if (u.getProperty("/Items/" + i + "/DeliveredQuantity_input") !== 0) {
			//                        if (u.getProperty("/Items/" + i + "/DeliveredUnit_input") !== "") {
			//                            if (p.PlantCollection.length === 1) {
			//                                u.setProperty("/Items/" + i + "/Plant_input", t.Plant.PlantCollection[0].PlantName);
			//                                u.setProperty("/Items/" + i + "/Plant", t.Plant.PlantCollection[0].Plant);
			//                                this._getControlFields(u.getProperty("/Items/" + i + "/Material_Input"), t.Plant.PlantCollection[0].Plant, i, "");
			//                            }
			//                            u.setProperty("/Items/" + i + "/Plant_input_editable", true);
			//                            if (u.getProperty("/Items/" + i + "/Plant_input") !== "") {
			//                                r = k[u.getProperty("/Items/" + i + "/Plant")].StorageLocationCollection;
			//                                var x = 0;
			//                                var L = 0;
			//                                if (u.getData().Items[0].StorageLocation !== "") {
			//                                    var y = false;
			//                                    for (var s = 0; s < r.length; s++) {
			//                                        if (u.getProperty("/Items/" + i + "/StorageLocation_input") === r[s].StorageLocationName) {
			//                                            if (u.getProperty("/Items/" + i + "/StorageLocation") === r[s].StorageLocation) {
			//                                                y = true;
			//                                            }
			//                                        }
			//                                    }
			//                                    if (y === false) {
			//                                        u.setProperty("/Items/" + i + "/StorageLocation", "");
			//                                        u.setProperty("/Items/" + i + "/StorageLocation_input", "");
			//                                        u.setProperty("/Items/" + i + "/StorageLocation_valueState", sap.ui.core.ValueState.None);
			//                                        u.setProperty("/Items/" + i + "/StorageLocation_valueStateText", "");
			//                                    }
			//                                }
			//                                if (u.getData().Items[0].StorageLocation === "") {
			//                                    for (var s = 0; s < r.length; s++) {
			//                                        var z = r[s].StorLocAutoCreationIsAllowed;
			//                                        if (z === false) {
			//                                            x++;
			//                                            L = s;
			//                                        }
			//                                    }
			//                                    if (x === 1) {
			//                                        u.setProperty("/Items/" + i + "/StorageLocation_input", r[L].StorageLocationName);
			//                                        u.setProperty("/Items/" + i + "/StorageLocation", r[L].StorageLocation);
			//                                        this._getControlFields(u.getProperty("/Items/" + i + "/Material_Input"), u.getProperty("/Items/" + i + "/Plant"), i, "");
			//                                    } else if (x === 0 && r.length === 1) {
			//                                        u.setProperty("/Items/" + i + "/StorageLocation_input", r[0].StorageLocationName);
			//                                        u.setProperty("/Items/" + i + "/StorageLocation", r[0].StorageLocation);
			//                                        this._getControlFields(u.getProperty("/Items/" + i + "/Material_Input"), u.getProperty("/Items/" + i + "/Plant"), i, "");
			//                                    }
			//                                }
			//                                u.setProperty("/Items/" + i + "/StorageLocationEditable", true);
			//                                if (u.getProperty("/Items/" + i + "/StorageLocation_input") !== "") {
			//                                    u.setProperty("/Items/" + i + "/StockTypeNOREFEnabled", true);
			//                                    u.setProperty("/Items/" + i + "/SpecialStockSelection_Visible", true);
			//                                    u.setProperty("/Items/" + i + "/BatchEditable", true);
			//                                } else {
			//                                    u.setProperty("/Items/" + i + "/BatchEditable", false);
			//                                }
			//                            } else {
			//                                u.setProperty("/Items/" + i + "/StorageLocationEditable", false);
			//                            }
			//                        } else {
			//                            u.setProperty("/Items/" + i + "/Plant_input_editable", false);
			//                            u.setProperty("/Items/" + i + "/StorageLocationEditable", false);
			//                        }
			//                    } else {
			//                        u.setProperty("/Items/" + i + "/Plant_input_editable", false);
			//                        u.setProperty("/Items/" + i + "/StorageLocationEditable", false);
			//                    }
			//                }
			//                this._setValueStateMandatoryFields(u.getProperty("/Items/" + i));
			//            }
			//            var C = a + 0;
			//            if (u.getProperty("/Items/" + a + "/Material_Input") !== "") {
			//                T[C].getCells()[8].getContent()[0].focus();
			//                if (u.getProperty("/Items/" + a + "/DeliveredQuantity_input") !== 0) {
			//                    T[C].getCells()[8].getContent()[1].focus();
			//                    if (u.getProperty("/Items/" + a + "/DeliveredUnit_input") !== "") {
			//                        T[C].getCells()[10].focus();
			//                        if (u.getProperty("/Items/" + a + "/Plant_input") !== "") {
			//                            T[C].getCells()[12].focus();
			//                            if (u.getProperty("/Items/" + a + "/StorageLocation_input") !== "" && u.getProperty("/Items/" + a + "/BatchVisible") === true) {
			//                                T[C].getCells()[16].focus();
			//                            }
			//                        }
			//                    }
			//                }
			//            }
			//            sap.ui.getCore().getMessageManager().removeAllMessages();
			//            for (var j = 0; j < w.length; j++) {
			//                var E = u.getProperty("/Items/" + j + "/DocumentItem");
			//                if (u.getProperty("/Items/" + j + "/ManufactureDate_valueState") === sap.ui.core.ValueState.Error || u.getProperty("/Items/" + j + "/ShelfLifeExpirationDate_valueState") === sap.ui.core.ValueState.Error) {
			//                    var G = new e({
			//                        message: this.getResourceBundle().getText("TITLE_ERROR_DETAILVIEW"),
			//                        type: d.Error,
			//                        target: "Special Stock",
			//                        processor: u,
			//                        additionalText: this.getResourceBundle().getText("TEXT_ERROR_DETAILVIEW", [E]),
			//                        description: this.getResourceBundle().getText("TEXT_ERROR_DETAILVIEW", [E])
			//                    });
			//                    sap.ui.getCore().getMessageManager().addMessages(G);
			//                }
			//            }
			//            for (var j = 0; j < w.length; j++) {
			//                v = this._validationNoRefItem(j);
			//                if (v === false) {
			//                    u.setProperty("/PostButtonEnabled", false);
			//                    break;
			//                } else {
			//                    u.setProperty("/PostButtonEnabled", true);
			//                }
			//            }
			//            this._updateHiglightProperty();
			//            if (this.getView().getModel("oFrontend").setProperty("/Items/" + a + "/ManufactureDateMandatory") === true) {
			//                this.getView().getModel("oFrontend").setProperty("/Items/" + a + "/ManufactureDate_valueStateText", this.getResourceBundle().getText("PRODUCTION_VALUE_STATE_TEXT"));
			//            }
			//            if (this.getView().getModel("oFrontend").setProperty("/Items/" + a + "/ShelfLifeExpirationDateMandatory") === true) {
			//                this.getView().getModel("oFrontend").setProperty("/Items/" + a + "/ShelfLifeExpirationDatee_valueStateText", this.getResourceBundle().getText("SHELFLIFE_VALUE_STATE_TEXT"));
			//            }
			//        } else {
			//            var H = this.getView().getModel("oItem");
			//            if (H.getProperty("/Material_Input") !== "") {
			//                t = this._oValueHelpController.getBufferOfMaterial(H.getProperty("/Material_Input"));
			//                k = t.StorageLocation;
			//                H.setProperty("/DeliveredQuantityEditable", true);
			//                H.setProperty("/DeliveredUnitEditable", true);
			//                this.getView().byId("idQuantity").focus();
			//                if (H.getProperty("/DeliveredQuantity_input") !== 0) {
			//                    this.getView().byId("idUOM").focus();
			//                    if (H.getProperty("/DeliveredUnit_input") !== "") {
			//                        H.setProperty("/Plant_input_editable", true);
			//                        this.getView().byId("idPlantInput").focus();
			//                        if (H.getProperty("/Plant_input") !== "") {
			//                            H.setProperty("/StorageLocationEditable", true);
			//                            this.getView().byId("idStorageLocationInput").focus();
			//                            if (H.getProperty("/StorageLocation_input") !== "") {
			//                                r = k[H.getProperty("/Plant")].StorageLocationCollection;
			//                                var y = false;
			//                                for (var s = 0; s < r.length; s++) {
			//                                    if (H.getProperty("/StorageLocation") === r[s].StorageLocation) {
			//                                        if (H.getProperty("/StorageLocation_input") === r[s].StorageLocationName) {
			//                                            y = true;
			//                                        }
			//                                    }
			//                                }
			//                                if (y === true) {
			//                                    H.setProperty("/StockTypeNOREFEnabled", true);
			//                                    H.setProperty("/SpecialStockSelection_Visible", true);
			//                                    H.setProperty("/BatchEditable", true);
			//                                    this.getView().byId("idBatchInput").focus();
			//                                    if (H.getProperty("/InventorySpecialStockType") === "E") {
			//                                        H.setProperty("/SalesOrder_inputMandatory", true);
			//                                    } else {
			//                                        H.setProperty("/SalesOrder_inputMandatory", false);
			//                                    }
			//                                } else {
			//                                    H.setProperty("/StorageLocation", "");
			//                                    H.setProperty("/StorageLocation_input", "");
			//                                    H.setProperty("/StorageLocation_valueState", sap.ui.core.ValueState.None);
			//                                    H.setProperty("/StorageLocation_valueStateText", "");
			//                                    H.setProperty("/BatchEditable", false);
			//                                }
			//                            }
			//                        } else {
			//                            H.setProperty("/StorageLocationEditable", false);
			//                        }
			//                    } else {
			//                        H.setProperty("/Plant_input_editable", false);
			//                        H.setProperty("/StorageLocationEditable", false);
			//                    }
			//                } else {
			//                    H.setProperty("/Plant_input_editable", false);
			//                    H.setProperty("/StorageLocationEditable", false);
			//                }
			//            }
			//            this._setValueStateMandatoryFields(H);
			//            v = this._validationNoRefItem();
			//            if (v === false) {
			//                H.setProperty("/ApplyButtonEnabled", false);
			//            } else {
			//                H.setProperty("/ApplyButtonEnabled", true);
			//            }
			//            this._updateItemHiglightProperty();
			//            if (this.getView().getModel("oFrontend").setProperty("/Items/" + a + "/ManufactureDateMandatory") === true) {
			//                this.getView().getModel("oFrontend").setProperty("/Items/" + a + "/ManufactureDate_valueStateText", this.getResourceBundle().getText("PRODUCTION_VALUE_STATE_TEXT"));
			//            }
			//            if (this.getView().getModel("oFrontend").setProperty("/Items/" + a + "/ShelfLifeExpirationDateMandatory") === true) {
			//                this.getView().getModel("oFrontend").setProperty("/Items/" + a + "/ShelfLifeExpirationDatee_valueStateText", this.getResourceBundle().getText("SHELFLIFE_VALUE_STATE_TEXT"));
			//            }
			//            sap.ui.getCore().getMessageManager().removeAllMessages();
			//        }
			//    },
			//    handleSalesOrderValueHelp: function (E) {
			//        var t = this.getView().getModel("oItem").getProperty("/SpecialStock_selectedKey");
			//        var a = this;
			//        if (!this._oSalesOrderValueHelpDialog) {
			//            this._oSalesOrderValueHelpDialog = new sap.ui.comp.valuehelpdialog.ValueHelpDialog({
			//                supportMultiselect: false,
			//                supportRanges: false,
			//                supportRangesOnly: false,
			//                ok: function (j) {
			//                    var T = j.getParameter("tokens");
			//                    var r = T[T.length - 1].data();
			//                    a.getView().getModel("oItem").setProperty("/SalesOrder", r.row.SalesOrder);
			//                    a.getView().getModel("oItem").setProperty("/SalesOrderItem", r.row.SalesOrderItem);
			//                    a._setGuidedTour();
			//                    a.getView().byId("idSalesOrderDocumentSpecialStockInputText").focus();
			//                    a._oSalesOrderValueHelpDialog.close();
			//                    a._oSalesOrderValueHelpDialog.destroy();
			//                    a._oSalesOrderValueHelpDialog = undefined;
			//                },
			//                cancel: function (j) {
			//                    a._oSalesOrderValueHelpDialog.close();
			//                }
			//            });
			//            this._oSalesOrderValueHelpDialog.setKeys([
			//                "SalesOrder",
			//                "SalesOrderItem"
			//            ]);
			//            var s = "";
			//            var o = new sap.ui.comp.filterbar.FilterBar({
			//                advancedMode: true,
			//                expandAdvancedArea: true,
			//                search: function (E) {
			//                    var j = sap.ui.getCore().byId("idSalesOrderSearch");
			//                    var k = j.getValue();
			//                    var p = {};
			//                    if (k.length > 0) {
			//                        var p = { custom: { "search": k } };
			//                        a._oSalesOrderValueHelpDialog.getTable().bindAggregation("rows", {
			//                            path: "/MMIMSalesOrderVH",
			//                            parameters: p
			//                        });
			//                    } else {
			//                        a._oSalesOrderValueHelpDialog.getTable().bindAggregation("rows", { path: "/MMIMSalesOrderVH" });
			//                    }
			//                }
			//            });
			//            o.setBasicSearch(new sap.m.SearchField({
			//                id: "idSalesOrderSearch",
			//                value: s,
			//                tooltip: this.getResourceBundle().getText("SEARCH_FIELD_TOOLTIP"),
			//                showSearchButton: false,
			//                search: function (E) {
			//                    a._oSalesOrderValueHelpDialog.getFilterBar().search();
			//                }
			//            }));
			//            this._oSalesOrderValueHelpDialog.setFilterBar(o);
			//            this._oSalesOrderValueHelpDialog.setModel(this.getOwnerComponent().getModel("oData"));
			//        }
			//        this._oSalesOrderValueHelpDialog.setTitle(a.getResourceBundle().getText("SALES_ORDER"));
			//        var C = [
			//            {
			//                label: a.getResourceBundle().getText("SALES_ORDER"),
			//                template: "SalesOrder"
			//            },
			//            {
			//                label: a.getResourceBundle().getText("LABEL_SALES_ORDER_ITEMS"),
			//                template: "SalesOrderItem"
			//            },
			//            {
			//                label: a.getResourceBundle().getText("LABEL_MATERIAL_COL"),
			//                template: "Material"
			//            },
			//            {
			//                label: a.getResourceBundle().getText("TABLE_COLUMN_PLANT_TEXT"),
			//                template: "Plant"
			//            },
			//            {
			//                label: a.getResourceBundle().getText("SOLD_TO_PARTY"),
			//                template: "SoldToParty"
			//            },
			//            {
			//                label: a.getResourceBundle().getText("CUSTOMER"),
			//                template: "Customer"
			//            },
			//            {
			//                label: a.getResourceBundle().getText("SALES_ORGANIZATION"),
			//                template: "SalesOrganization"
			//            },
			//            {
			//                label: a.getResourceBundle().getText("DISTRIBUTION_CHANNEL"),
			//                template: "DistributionChannel"
			//            },
			//            {
			//                label: a.getResourceBundle().getText("DIVISION"),
			//                template: "OrganizationDivision"
			//            },
			//            {
			//                label: a.getResourceBundle().getText("SALES_ORDER_TYPE"),
			//                template: "SalesOrderType"
			//            }
			//        ];
			//        var h = "SalesOrder,SalesOrderItem,Material,Plant,SoldToParty,Customer,SalesOrganization, DistributionChannel,OrganizationDivision, SalesOrderType";
			//        this._oSalesOrderValueHelpDialog.getTable().bindAggregation("rows", { path: "/MMIMSalesOrderVH" });
			//        var i = new sap.ui.model.json.JSONModel();
			//        i.setData({ cols: C });
			//        this._oSalesOrderValueHelpDialog.setModel(i, "columns");
			//        this._oSalesOrderValueHelpDialog.TableStateDataFilled();
			//        this._oSalesOrderValueHelpDialog.open();
			//    },
			//    handleWBSValueHelp: function (E) {
			//        var t = this.getView().getModel("oItem").getProperty("/SpecialStock_selectedKey");
			//        var a = this;
			//        if (!this._oWBSValueHelpDialog) {
			//            this._oWBSValueHelpDialog = new sap.ui.comp.valuehelpdialog.ValueHelpDialog({
			//                supportMultiselect: false,
			//                supportRanges: false,
			//                supportRangesOnly: false,
			//                ok: function (j) {
			//                    var T = j.getParameter("tokens");
			//                    var r = T[T.length - 1].data();
			//                    a.getView().getModel("oItem").setProperty("/Project", r.row.WBSElement);
			//                    a.getView().getModel("oItem").setProperty("/ProjectDescription", r.row.WBSDescription);
			//                    a._setGuidedTour();
			//                    a.getView().byId("idProjectNameSpecialStockText").focus();
			//                    a._oWBSValueHelpDialog.close();
			//                    a._oWBSValueHelpDialog.destroy();
			//                    a._oWBSValueHelpDialog = undefined;
			//                },
			//                cancel: function (j) {
			//                    a._oWBSValueHelpDialog.close();
			//                }
			//            });
			//            this._oWBSValueHelpDialog.setKey("WBSElement");
			//            this._oWBSValueHelpDialog.setDescriptionKey("WBSElement");
			//            var s = "";
			//            var o = new sap.ui.comp.filterbar.FilterBar({
			//                advancedMode: true,
			//                expandAdvancedArea: true,
			//                search: function (E) {
			//                    var j = sap.ui.getCore().byId("idWBSSearch");
			//                    var k = j.getValue();
			//                    var p = {};
			//                    if (k.length > 0) {
			//                        var p = { custom: { "search": k } };
			//                        a._oWBSValueHelpDialog.getTable().bindAggregation("rows", {
			//                            path: "/MMIMWBSElementVH",
			//                            parameters: p
			//                        });
			//                    } else {
			//                        a._oWBSValueHelpDialog.getTable().bindAggregation("rows", { path: "/MMIMWBSElementVH" });
			//                    }
			//                }
			//            });
			//            o.setBasicSearch(new sap.m.SearchField({
			//                id: "idWBSSearch",
			//                value: s,
			//                tooltip: this.getResourceBundle().getText("SEARCH_FIELD_TOOLTIP"),
			//                showSearchButton: false,
			//                search: function (E) {
			//                    a._oWBSValueHelpDialog.getFilterBar().search();
			//                }
			//            }));
			//            this._oWBSValueHelpDialog.setFilterBar(o);
			//            this._oWBSValueHelpDialog.setModel(this.getOwnerComponent().getModel("oData"));
			//        }
			//        this._oWBSValueHelpDialog.setTitle(a.getResourceBundle().getText("WBS_ELEMENT"));
			//        var C = [
			//            {
			//                label: a.getResourceBundle().getText("WBS_ELEMENT"),
			//                template: "WBSElement"
			//            },
			//            {
			//                label: a.getResourceBundle().getText("WBS_DESCRIPTION"),
			//                template: "WBSDescription"
			//            },
			//            {
			//                label: a.getResourceBundle().getText("WBS_PROJECT"),
			//                template: "Project"
			//            },
			//            {
			//                label: a.getResourceBundle().getText("WBS_PROJECT_DESCRIPTION"),
			//                template: "ProjectDescription"
			//            }
			//        ];
			//        var h = "WBSElement,WBSDescription,Project,ProjectDescription";
			//        this._oWBSValueHelpDialog.getTable().bindAggregation("rows", { path: "/MMIMWBSElementVH" });
			//        var i = new sap.ui.model.json.JSONModel();
			//        i.setData({ cols: C });
			//        this._oWBSValueHelpDialog.setModel(i, "columns");
			//        this._oWBSValueHelpDialog.TableStateDataFilled();
			//        this._oWBSValueHelpDialog.open();
			//    },
			//    handleLifnrValueHelp: function (E) {
			//        var t = this.getView().getModel("oItem").getProperty("/SpecialStock_selectedKey");
			//        var a = this;
			//        var C;
			//        var h = [];
			//        var m = this.getView().getModel("oItem").getProperty("/Material_Input");
			//        if (t === "K") {
			//            var o = this.getView().getModel("oItem");
			//            o.setDefaultBindingMode(sap.ui.model.BindingMode.TwoWay);
			//            this.getView().setModel(o);
			//            h.push(new sap.ui.model.Filter("Material", sap.ui.model.FilterOperator.EQ, m));
			//            this.getOwnerComponent().getModel("oData").read("/MMIMSupplierMaterialVH", {
			//                filters: h,
			//                success: jQuery.proxy(this._successSupplierLoad, this),
			//                error: jQuery.proxy(this._handleOdataError, this)
			//            });
			//        }
			//        h.push(new sap.ui.model.Filter("Material", sap.ui.model.FilterOperator.EQ, m));
			//        if (!this._oLifnrValueHelpDialog) {
			//            this._oLifnrValueHelpDialog = new sap.ui.comp.valuehelpdialog.ValueHelpDialog({
			//                supportMultiselect: false,
			//                supportRanges: false,
			//                supportRangesOnly: false,
			//                ok: function (l) {
			//                    var T = l.getParameter("tokens");
			//                    var r = T[T.length - 1].data();
			//                    a.getView().getModel("oItem").setProperty("/Lifnr", r.row.Supplier);
			//                    a.getView().getModel("oItem").setProperty("/Lifname", r.row.SupplierName);
			//                    a._setGuidedTour();
			//                    a.getView().byId("idVendorNameSpecialStockInputText").focus();
			//                    a._oLifnrValueHelpDialog.close();
			//                    a._oLifnrValueHelpDialog.destroy();
			//                    a._oLifnrValueHelpDialog = undefined;
			//                },
			//                cancel: function (l) {
			//                    a._oLifnrValueHelpDialog.close();
			//                }
			//            });
			//            this._oLifnrValueHelpDialog.setKey("Supplier");
			//            this._oLifnrValueHelpDialog.setDescriptionKey("Supplier");
			//            var s = "";
			//            var i = new sap.ui.comp.filterbar.FilterBar({
			//                advancedMode: true,
			//                expandAdvancedArea: true,
			//                search: function (E) {
			//                    var l = sap.ui.getCore().byId("idLifnrSearch");
			//                    var n = l.getValue();
			//                    var p = {};
			//                    if (n.length > 0) {
			//                        var p = { custom: { "search": n } };
			//                        switch (t) {
			//                        case "K":
			//                            a._oLifnrValueHelpDialog.getTable().bindAggregation("rows", {
			//                                path: "/MMIMSupplierMaterialVH",
			//                                parameters: p,
			//                                filters: h
			//                            });
			//                            break;
			//                        default:
			//                            a._oLifnrValueHelpDialog.getTable().bindAggregation("rows", {
			//                                path: "/MMIMSupplierGeneralVH",
			//                                parameters: p
			//                            });
			//                            break;
			//                        }
			//                    } else {
			//                        switch (t) {
			//                        case "K":
			//                            a._oLifnrValueHelpDialog.getTable().bindAggregation("rows", {
			//                                path: "/MMIMSupplierMaterialVH",
			//                                filters: h
			//                            });
			//                            break;
			//                        default:
			//                            a._oLifnrValueHelpDialog.getTable().bindAggregation("rows", { path: "/MMIMSupplierGeneralVH" });
			//                            break;
			//                        }
			//                    }
			//                }
			//            });
			//            i.setBasicSearch(new sap.m.SearchField({
			//                id: "idLifnrSearch",
			//                value: s,
			//                tooltip: this.getResourceBundle().getText("SEARCH_FIELD_TOOLTIP"),
			//                showSearchButton: false,
			//                search: function (E) {
			//                    a._oLifnrValueHelpDialog.getFilterBar().search();
			//                }
			//            }));
			//            this._oLifnrValueHelpDialog.setFilterBar(i);
			//            this._oLifnrValueHelpDialog.setModel(this.getOwnerComponent().getModel("oData"));
			//        }
			//        this._oLifnrValueHelpDialog.setTitle(a.getResourceBundle().getText("SUPPLIER"));
			//        switch (t) {
			//        case "K":
			//            C = [
			//                {
			//                    label: a.getResourceBundle().getText("SUPPLIER"),
			//                    template: "Supplier"
			//                },
			//                {
			//                    label: a.getResourceBundle().getText("SUPPLIERNAME"),
			//                    template: "SupplierName"
			//                },
			//                {
			//                    label: a.getResourceBundle().getText("COMPANYCODE"),
			//                    template: "CompanyCode"
			//                },
			//                {
			//                    label: a.getResourceBundle().getText("COUNTRY"),
			//                    template: "Country"
			//                },
			//                {
			//                    label: a.getResourceBundle().getText("POSTALCODE"),
			//                    template: "PostalCode"
			//                },
			//                {
			//                    label: a.getResourceBundle().getText("CITYNAME"),
			//                    template: "CityName"
			//                }
			//            ];
			//            break;
			//        default:
			//            C = [
			//                {
			//                    label: a.getResourceBundle().getText("SUPPLIER"),
			//                    template: "Supplier"
			//                },
			//                {
			//                    label: a.getResourceBundle().getText("SUPPLIERNAME"),
			//                    template: "SupplierName"
			//                },
			//                {
			//                    label: a.getResourceBundle().getText("COUNTRY"),
			//                    template: "Country"
			//                },
			//                {
			//                    label: a.getResourceBundle().getText("POSTALCODE"),
			//                    template: "PostalCode"
			//                },
			//                {
			//                    label: a.getResourceBundle().getText("CITYNAME"),
			//                    template: "CityName"
			//                }
			//            ];
			//            break;
			//        }
			//        var j = "Supplier,SupplierName,Country,PostalCode,CityName";
			//        switch (t) {
			//        case "K":
			//            this._oLifnrValueHelpDialog.getTable().bindAggregation("rows", {
			//                path: "/MMIMSupplierMaterialVH",
			//                filters: h
			//            });
			//            break;
			//        default:
			//            this._oLifnrValueHelpDialog.getTable().bindAggregation("rows", { path: "/MMIMSupplierGeneralVH" });
			//            break;
			//        }
			//        ;
			//        var k = new sap.ui.model.json.JSONModel();
			//        k.setData({ cols: C });
			//        this._oLifnrValueHelpDialog.setModel(k, "columns");
			//        this._oLifnrValueHelpDialog.TableStateDataFilled();
			//        this._oLifnrValueHelpDialog.open();
			//    },
			//    _updateItemHiglightProperty: function () {
			//        var i = this.getView().getModel("oItem");
			//        var a = function (C) {
			//            var h = sap.ui.core.MessageType.None;
			//            for (var p in C) {
			//                if (p.indexOf("_valueState") > 0 && p.indexOf("_valueStateText") < 0) {
			//                    if (C[p] === sap.ui.core.ValueState.Error) {
			//                        h = sap.ui.core.MessageType.Error;
			//                    } else {
			//                        if (C[p] === sap.ui.core.ValueState.Warning && h === sap.ui.core.MessageType.None) {
			//                            h = sap.ui.core.MessageType.Warning;
			//                        }
			//                    }
			//                }
			//            }
			//            return h;
			//        };
			//        i.setProperty("/highlight", a(i));
			//    },
			//    handleAppylyAndNewButtonPress: function (E) {
			//        var o = this.getModel("oItem").getData();
			//        var a = this.getModel("oFrontend");
			//        var h = a.getProperty("/Items");
			//        var j;
			//        if (this._aExtendedFields && this._aExtendedFields.length > 0) {
			//            var k = this.getView().byId("idExtensionForm").getElementBinding().getBoundContext().getObject();
			//            for (var i = 0; i < this._aExtendedFields.length; i++) {
			//                if (this._isExtendedField(this._aExtendedFields[i].name) === true) {
			//                    o[this._aExtendedFields[i].name] = k[this._aExtendedFields[i].name];
			//                }
			//            }
			//        }
			//        var m = 0;
			//        if (h) {
			//            for (var i = 0; i < h.length; i++) {
			//                if (h[i].DocumentItem === o.DocumentItem && h[i].ItemCounter === o.ItemCounter) {
			//                    h[i] = o;
			//                }
			//                if (m < parseInt(h[i].DocumentItem)) {
			//                    m = parseInt(h[i].DocumentItem);
			//                }
			//                if (h[i].Selected) {
			//                    a.setProperty("/CopyButtonVisible", true);
			//                    a.setProperty("/DeleteButtonVisible", true);
			//                }
			//            }
			//            a.setProperty("/Items", h);
			//        }
			//        var l = this.getView().getModel("oItem");
			//        var s = l.getProperty("/DocumentItem");
			//        var n;
			//        n = this.getResourceBundle().getText("ITEM_APPLIED", [s]);
			//        M.show(n);
			//        this._getInitialItem(m);
			//        var v = this._validationNoRefItem();
			//        if (v === false) {
			//            a.setProperty("/PostButtonEnabled", false);
			//        } else {
			//            a.setProperty("/PostButtonEnabled", true);
			//        }
			//        var p = m++;
			//        var r = sap.ui.core.UIComponent.getRouterFor(this);
			//        var q = null;
			//        if (this.getView().byId("idBatchLabel").getVisible() === true && this.getView().byId("idBatchLabel").getFields().length > 1) {
			//            q = this.getView().byId("idBatchLabel").removeField("idCreateBatchButton");
			//        }
			//        if (q) {
			//            q.detachPress(this.handleCreateBatch, this).destroy();
			//        }
			//        a.setProperty("/ColumnStorageBinVisible", this._isStorageBinInItems(a.getData().Items));
			//        r.navTo("subscreen", { POItem: p }, true);
			//    },
			//    _loadAttachmentComponentNOREF: function () {
			//        try {
			//            var m = this.getView().getModel("oFrontend");
			//            var t = this.getUniqueKey();
			//            var a = "I";
			//            var o = "BUS2017";
			//            var h = this;
			//            this.temp_objectKey = "GR" + t;
			//            if (!this.oCompAttachProj) {
			//                if (this.getOwnerComponent().getModel("oDataHelp").getServiceMetadata().dataServices.schema[0].entityType.length >= 15) {
			//                    this.oCompAttachProj = this.getOwnerComponent().createComponent({
			//                        usage: "attachmentReuseComponent",
			//                        settings: {
			//                            mode: a,
			//                            objectKey: this.temp_objectKey,
			//                            objectType: o
			//                        }
			//                    });
			//                    this.oCompAttachProj.then(function (s) {
			//                        h.byId("idastestcompContainer").setComponent(s);
			//                    });
			//                } else {
			//                    m.setProperty("/AttachmentVisible", false);
			//                }
			//            }
			//        } catch (i) {
			//            m.setProperty("/AttachmentVisible", false);
			//        }
			//    },
			//    handleNavButtonPressNew: function (E) {
			//        var o = this.getModel("oItem").getData();
			//        var a = this.getView().getModel("oItem");
			//        var h = this.getModel("oFrontend");
			//        var j = h.getProperty("/Items");
			//        var k;
			//        var C = false;
			//        var r;
			//        if (this._aExtendedFields && this._aExtendedFields.length > 0) {
			//            var l = this.getView().byId("idExtensionForm").getElementBinding().getBoundContext().getObject();
			//            for (var i = 0; i < this._aExtendedFields.length; i++) {
			//                if (this._isExtendedField(this._aExtendedFields[i].name) === true) {
			//                    o[this._aExtendedFields[i].name] = l[this._aExtendedFields[i].name];
			//                }
			//            }
			//        }
			//        if (j) {
			//            for (var i = 0; i < j.length; i++) {
			//                if (j[i].DocumentItem === o.DocumentItem && j[i].ItemCounter === o.ItemCounter) {
			//                    for (var p in o) {
			//                        if (p.indexOf("ApplyButton") < 0 && p.indexOf("CancelButton") < 0 && p.indexOf("ItemCounter") < 0 && (p.indexOf("Selected") < 0 && p.indexOf("GoodsMovementReasonCode_selectedKey") < 0)) {
			//                            if (j[i][p] === undefined && p.indexOf("ApplyButton") < 0 && p.indexOf("CancelButton") < 0) {
			//                                C = true;
			//                                break;
			//                            } else {
			//                                if (j[i][p].toString() !== o[p].toString()) {
			//                                    C = true;
			//                                    break;
			//                                } else if (p === "SubItems" && S.checkIfSubItemChanged(j[i], o)) {
			//                                    C = true;
			//                                    break;
			//                                } else {
			//                                    C = false;
			//                                }
			//                            }
			//                        }
			//                    }
			//                }
			//            }
			//        }
			//        var m = false;
			//        var t = this;
			//        var n = t.getResourceBundle();
			//        if (C === true) {
			//            sap.m.MessageBox.confirm(n.getText("MESSAGE_DATA_LOSS"), {
			//                icon: sap.m.MessageBox.Icon.QUESTION,
			//                title: n.getText("MESSAGE_DATA_LOSS_TITLE"),
			//                onClose: s,
			//                styleClass: "sapUiSizeCompact",
			//                initialFocus: sap.m.MessageBox.Action.CANCEL
			//            });
			//        } else {
			//            var q = null;
			//            if (this.getView().byId("idBatchLabel").getVisible() === true && this.getView().byId("idBatchLabel").getFields().length > 1) {
			//                q = this.getView().byId("idBatchLabel").removeField("idCreateBatchButton");
			//            }
			//            if (q) {
			//                q.detachPress(this.handleCreateBatch, this).destroy();
			//            }
			//            r = sap.ui.core.UIComponent.getRouterFor(t);
			//            r.navTo("fullscreen", { abort: "false" }, true);
			//        }
			//        function s(R) {
			//            if (R === "OK") {
			//                var q = null;
			//                if (t.getView().byId("idBatchLabel").getVisible() === true && t.getView().byId("idBatchLabel").getFields().length > 1) {
			//                    q = t.getView().byId("idBatchLabel").removeField("idCreateBatchButton");
			//                }
			//                if (q) {
			//                    q.detachPress(t.handleCreateBatch, t).destroy();
			//                }
			//                r = sap.ui.core.UIComponent.getRouterFor(t);
			//                r.navTo("fullscreen", { abort: "false" }, true);
			//            }
			//        }
			//    },
			//    handleMaterialChangeEvent: function (E) {
			//        var m = E.getParameters().value.toUpperCase();
			//        var s;
			//        var p;
			//        var a;
			//        var u;
			//        var h;
			//        var v = sap.ui.core.ValueState.None;
			//        var o;
			//        if (this.getView().sViewName === "s2p.mm.im.goodsreceipt.purchaseorder.view.S1") {
			//            this._SelectedTableIndex = this._getSelectedItemInModel(E);
			//            var i = this.getView().getModel("oFrontend");
			//            var j = i.getProperty("/Items");
			//            p = p = j[this._SelectedTableIndex].Plant;
			//            i.setProperty("/Items/" + this._SelectedTableIndex + "/Material_Input", m);
			//            if (i.getProperty("/Items/" + this._SelectedTableIndex + "/SpecialStock_selectedKey") === "K") {
			//                i.setProperty("/Items/" + this._SelectedTableIndex + "/Lifnr", "");
			//                i.setProperty("/Items/" + this._SelectedTableIndex + "/Lifname", "");
			//                i.setProperty("/Items/" + this._SelectedTableIndex + "/Lifnr_State", sap.ui.core.ValueState.None);
			//                i.setProperty("/Items/" + this._SelectedTableIndex + "/Lifnr_StateText", "");
			//                i.setProperty("/Items/" + this._SelectedTableIndex + "/SpecialStock_input_State", sap.ui.core.ValueState.None);
			//                var k = i.getProperty("/Items/" + this._SelectedTableIndex);
			//                if (k.SpecialStock_input !== undefined && k.SpecialStock_input.length > 0) {
			//                    for (var x = 0; x < k.SpecialStock_input.length; x++) {
			//                        if (k.SpecialStock_input[x].key === "") {
			//                            var l = k.SpecialStock_input[x].text;
			//                            break;
			//                        }
			//                    }
			//                    i.setProperty("/Items/" + this._SelectedTableIndex + "/SpecialStock_selectedKey", "");
			//                    i.setProperty("/Items/" + this._SelectedTableIndex + "/InventorySpecialStockTypeName", l);
			//                    i.setProperty("/Items/" + this._SelectedTableIndex + "/Lifnr_inputMandatory", false);
			//                }
			//            }
			//            p = i.getProperty("/Items/" + this._SelectedTableIndex + "/Plant");
			//            u = i.getProperty("/Items/" + this._SelectedTableIndex + "/DeliveredUnit_input");
			//            h = i.getProperty("/Items/" + this._SelectedTableIndex + "/StorageLocation");
			//            if (i.getProperty("/Items/" + this._SelectedTableIndex + "/SpecialStock_input") === undefined) {
			//                o = i.getProperty("/SpecialStock_input");
			//                i.setProperty("/Items/" + this._SelectedTableIndex + "/SpecialStock_input", o);
			//            }
			//            if (E.getParameter("valid") === false || E.getParameters().value === "") {
			//                v = sap.ui.core.ValueState.Error;
			//                i.setProperty("/Items/" + this._SelectedTableIndex + "/Material_Input_valueState", v);
			//                i.setProperty("/Items/" + this._SelectedTableIndex + "/Material_Input_valueStateText", this.getResourceBundle().getText("MATERIAL_VALUE_STATE_TEXT"));
			//            } else {
			//                i.setProperty("/Items/" + this._SelectedTableIndex + "/Material_Input_valueState", v);
			//            }
			//            if (m === "") {
			//                i.setProperty("/PostButtonEnabled", false);
			//            }
			//        } else {
			//            var n = this.getView().getModel("oFrontend");
			//            var q = this.getView().getModel("oItem");
			//            q.setProperty("/Material_Input", m);
			//            if (q.getProperty("/SpecialStock_selectedKey") === "K") {
			//                q.setProperty("/Lifnr", "");
			//                q.setProperty("/Lifname", "");
			//                q.setProperty("/Lifnr_State", sap.ui.core.ValueState.None);
			//                q.setProperty("/Lifnr_StateText", "");
			//                q.setProperty("/SpecialStock_input_State", sap.ui.core.ValueState.None);
			//                var k = q.getData();
			//                if (k.SpecialStock_input !== undefined && k.SpecialStock_input.length > 0) {
			//                    for (var x = 0; x < k.SpecialStock_input.length; x++) {
			//                        if (k.SpecialStock_input[x].key === "") {
			//                            var l = k.SpecialStock_input[x].text;
			//                            break;
			//                        }
			//                    }
			//                    q.setProperty("/SpecialStock_selectedKey", "");
			//                    q.setProperty("/InventorySpecialStockTypeName", l);
			//                    q.setProperty("/Lifnr_inputMandatory", false);
			//                }
			//            }
			//            p = q.getProperty("/Plant");
			//            u = q.getProperty("/DeliveredUnit_input");
			//            h = q.getProperty("/StorageLocation");
			//            if (q.getProperty("/SpecialStock_input") === undefined) {
			//                o = n.getProperty("/SpecialStock_input");
			//                q.setProperty("/SpecialStock_input", o);
			//            }
			//            if (E.getParameter("valid") === false || E.getParameters().value === "") {
			//                v = sap.ui.core.ValueState.Error;
			//                q.setProperty("/Material_Input_valueState", v);
			//                q.setProperty("/Material_Input_valueStateText", this.getResourceBundle().getText("MATERIAL_VALUE_STATE_TEXT"));
			//            } else {
			//                q.setProperty("/Material_Input_valueState", v);
			//            }
			//            this._setValueStateMandatoryFields(q.getData());
			//            p = q.getProperty("/Plant");
			//            if (m === "") {
			//                q.setProperty("/ApplyButtonEnabled", false);
			//            }
			//        }
			//        if (m !== "") {
			//            this._handleValidationMasterData(m, u, p, h, this._SelectedTableIndex);
			//        }
			//        if (this.getView().sViewName === "s2p.mm.im.goodsreceipt.purchaseorder.view.S1") {
			//            p = i.getProperty("/Items/" + this._SelectedTableIndex + "/Plant");
			//        } else {
			//            p = q.getProperty("/Plant");
			//        }
			//        this._getControlFields(m, p, this._SelectedTableIndex);
			//    },
			//    handleUnloadingPointChangeEvent: function (E) {
			//        var u = E.getParameters().value;
			//        var i = this.getView().getModel("oItem");
			//        i.setProperty("/UnloadingPointName", u);
			//    },
			//    handleGoodsRecipientNameEvent: function (E) {
			//        var G = E.getParameters().value;
			//        var i = this.getView().getModel("oItem");
			//        i.setProperty("/GoodsRecipientName", G);
			//    },
			//    handleDocumentItemTextEvent: function (E) {
			//        var s = E.getParameters().value;
			//        var i = this.getView().getModel("oItem");
			//        i.setProperty("/DocumentItemText", s);
			//    },
			//    _successSpecialStockLoad: function (o, r) {
			//        var m = this.getView().getModel("oFrontend");
			//        var s = new Array();
			//        var n = this.getResourceBundle().getText("NONE");
			//        s.push({
			//            key: "",
			//            text: n
			//        });
			//        for (var i = 0; i < o.results.length; i++) {
			//            s.push({
			//                key: o.results[i].InventorySpecialStockType,
			//                text: o.results[i].InventorySpecialStockTypeName
			//            });
			//        }
			//        m.setProperty("/SpecialStock_input", s);
			//    },
			//    _validationNoRefItem: function (s) {
			//        var m;
			//        var i;
			//        var a;
			//        var q;
			//        var A;
			//        var p;
			//        var h;
			//        var k;
			//        var l;
			//        var n = true;
			//        var o = true;
			//        var r = true;
			//        var w = true;
			//        var L = true;
			//        var v;
			//        var t;
			//        if (this.getView().sViewName === "s2p.mm.im.goodsreceipt.purchaseorder.view.S1") {
			//            m = this.getModel("oFrontend");
			//            var u = m.getData();
			//            var x = m.getProperty("/Items");
			//            for (var j = 0; j < x.length; j++) {
			//                if (x[j].Material_Input !== "") {
			//                    t = true;
			//                    break;
			//                }
			//            }
			//            a = m.getProperty("/Items/" + s + "/Material_Input");
			//            q = m.getProperty("/Items/" + s + "/DeliveredQuantity_input");
			//            A = m.getProperty("/Items/" + s + "/DeliveredUnit_input");
			//            p = m.getProperty("/Items/" + s + "/Plant_input");
			//            h = m.getProperty("/Items/" + s + "/StorageLocation_input");
			//            l = this._ItemConsistent(m.getProperty("/Items/" + s));
			//        } else {
			//            i = this.getView().getModel("oItem");
			//            if (a !== "") {
			//                t = true;
			//            }
			//            a = i.getProperty("/Material_Input");
			//            q = i.getProperty("/DeliveredQuantity_input");
			//            A = i.getProperty("/DeliveredUnit_input");
			//            p = i.getProperty("/Plant_input");
			//            h = i.getProperty("/StorageLocation_input");
			//            l = this._ItemConsistent(i.getData());
			//            if (i.getProperty("/ManufactureDateMandatory") === true && (i.getProperty("/ManufactureDate") === "" || i.getProperty("/ManufactureDate") === undefined)) {
			//                n = false;
			//            }
			//            if (i.getProperty("/ShelfLifeExpirationDateMandatory") === true && (i.getProperty("/ShelfLifeExpirationDate") === "" || i.getProperty("/ShelfLifeExpirationDate") === undefined)) {
			//                o = false;
			//            }
			//            if (i.getProperty("/InventorySpecialStockType") === "E" && (i.getProperty("/SalesOrder") === "" || i.getProperty("/SalesOrder") === undefined)) {
			//                r = false;
			//            }
			//            if (i.getProperty("/InventorySpecialStockType") === "Q" && (i.getProperty("/Project") === "" || i.getProperty("/Project") === undefined)) {
			//                w = false;
			//            }
			//            if (i.getProperty("/InventorySpecialStockType") === "K" && (i.getProperty("/Lifnr") === "" || i.getProperty("/Lifnr") === undefined)) {
			//                L = false;
			//            }
			//        }
			//        k = false;
			//        if (a !== "" && p !== "" && q !== "" && A !== "" && h !== "") {
			//            k = true;
			//        }
			//        if (a === "" && (p === undefined || p === "") && q === 0 && (A === "" || A === undefined) && (h === "" || h === undefined)) {
			//            k = true;
			//        }
			//        if (k === true && l === true && t === true && n === true && o === true && r === true && w === true && L === true) {
			//            v = true;
			//        } else {
			//            v = false;
			//        }
			//        return v;
			//    },
			//    onCopilot: function (E) {
			//        var t = this;
			//        var C = E.getSource();
			//        if (!this._oCopilotPopover) {
			//            this._oCopilotPopover = sap.ui.xmlfragment("s2p.mm.im.goodsreceipt.purchaseorder.view.CoPilotChatPopover", this);
			//            this.getView().addDependent(this._oCopilotPopover);
			//            jQuery.sap.syncStyleClass("sapUiSizeCompact", this.getView(), this._oCopilotPopover);
			//        }
			//        sap.cp.ui.services.CopilotApi.getChats().then(function (a) {
			//            t._aCopilotChats = a;
			//            var h = [];
			//            var o = {};
			//            for (var i = 0; i < t._aCopilotChats.length; i++) {
			//                o = {};
			//                o.title = t._aCopilotChats[i].getProperties().title;
			//                o.createdOn = t._aCopilotChats[i].getProperties().createdOn;
			//                o.guid = t._aCopilotChats[i].getProperties().guid;
			//                h.push(o);
			//            }
			//            var j = new sap.ui.model.json.JSONModel({
			//                ServiceName: C.getCustomData()[0].getValue(),
			//                AnnotationPath: C.getCustomData()[1].getValue(),
			//                ContextPath: C.getCustomData()[2].getValue(),
			//                Chats: h
			//            });
			//            j.setDefaultBindingMode(sap.ui.model.BindingMode.OneWay);
			//            t._oCopilotPopover.setModel(j);
			//            t._oCopilotPopover.openBy(C);
			//        });
			//    },
			//    handleAddDocument2CopilotChat: function (E) {
			//        this._oCopilotPopover.close();
			//        var s = E.getSource().getBindingContext().getObject().guid;
			//        var C = null;
			//        for (var i = 0; i < this._aCopilotChats.length; i++) {
			//            if (this._aCopilotChats[i].getProperties().guid === s) {
			//                C = i;
			//            }
			//        }
			//        if (C !== null) {
			//            var a = E.getSource().getModel().getProperty("/ServiceName");
			//            var A = E.getSource().getModel().getProperty("/AnnotationPath");
			//            var h = E.getSource().getModel().getProperty("/ContextPath");
			//            var o = new sap.ui.model.Context(new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/" + a + "/", { annotationURI: "/sap/opu/odata/IWFND/CATALOGSERVICE;v=2/Annotations(TechnicalName='" + A + "',Version='0001')/$value/" }), h);
			//            var t = this;
			//            this._aCopilotChats[C].addObjectFromContext(o).then(function (O) {
			//                M.show(t.getResourceBundle().getText("SUCCESS_MESSAGE_COPILOT"));
			//            });
			//        }
			//    },
			//    handleComponentConsiderSelect: function (E) {
			//        S.onHandleComponentConsiderSelect.call(this, E);
			//    },
			//    handleComponentBatchHelp: function (E) {
			//        S.onHandleComponentBatchHelp.call(this, E);
			//    },
			//    handleComponentQuantityInputChange: function (E) {
			//        S.onHandleComponentQuantityInputChange.call(this, E);
			//    },
			//    getSubItemController: function () {
			//        return S;
			//    },
			//    _getMovementType: function (i) {
			//        var m = "";
			//        if (this._SourceOfGR !== this._SourceOfGRIsNoReference) {
			//            if (i.IsReturnsItem === true) {
			//                m = "161";
			//            } else {
			//                switch (i.StockType_selectedKey) {
			//                case "U":
			//                    m = "103";
			//                    break;
			//                case "V":
			//                    m = "105";
			//                    break;
			//                case "W":
			//                    m = "105";
			//                    break;
			//                case "Z":
			//                    m = "105";
			//                    break;
			//                default:
			//                    m = "101";
			//                }
			//            }
			//        } else {
			//            switch (i.StockType_selectedKey) {
			//            case "2":
			//                m = "503";
			//                break;
			//            case "3":
			//                m = "505";
			//                break;
			//            default:
			//                m = "501";
			//            }
			//        }
			//        return m;
			//    }
	});
});