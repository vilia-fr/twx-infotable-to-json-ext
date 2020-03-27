TW.IDE.Widgets.InfotableToJson = function() {

    this.widgetProperties = function() {
        return {
            'name': 'Infotable to JSON',
            'description': 'Converts Infotable to JSON, which can be used in Expressions, i.e. allows to use INFOTABLE return values in expressions',
            'defaultBindingTargetProperty': 'Data',
            'properties': {
                'Data': { 'isBindingTarget': true, 'baseType': 'INFOTABLE', 'warnIfNotBoundAsTarget': true, 'description': 'Data source' },
				'Output': { 'isBindingSource': true, 'baseType': 'JSON', 'description': 'JSON representing the input Infotable' }
            }
        };
    };

    this.renderHtml = function() {
        return '<div class="widget-content">🛀🏾</div>';
    };

};