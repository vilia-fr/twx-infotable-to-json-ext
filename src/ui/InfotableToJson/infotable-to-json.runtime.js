TW.Runtime.Widgets.InfotableToJson = function() {

	var thiz = this;

	this.updateProperty = function(updatePropertyInfo) {
		if (updatePropertyInfo.TargetProperty === "Data") {
			thiz.setProperty('Output', updatePropertyInfo.ActualDataRows);
		}
	};
	
    this.renderHtml = function() {
        return '<div class="widget-content"></div>';
    };
};