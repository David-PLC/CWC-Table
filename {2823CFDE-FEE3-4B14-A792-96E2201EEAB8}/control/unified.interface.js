const _extensions = ['HMI'];
const _timeout = 1000;
const _contract = {
    methods: {},
    events: [
        'ev_selectRow',
        'ev_updateRows',
        'ev_updateRow'
    ],
    properties: {
        'select': false,
        'pageLength': 0,
        'columns': '[]',
        'columnsEdit': '[]',
        'columnsShow': '[]',
        'rows': '[]',
        'searching': false
    },
    types: {
        "thColor": null,
        "tdColor": null,
        "selTdColor": null,
        "selTrColor": null
    }
};

var UnifiedInterface = function () {
    var _initialize = function () {
        console.log('Comi-Table: UnifiedInterface initialized');
    };

    var _setProps = function (data) {
        console.log('Comi-Table: Key <', data.key, '>');
        // if (WebCC.Properties.hasOwnProperty(data.key)) {
        //     WebCC.Properties[data.key] = data.value;
        // } else {
        //     console.log('Comi-Table: Unrecognized key <', data.key, '>');
        // }
        // refresh table
        tableInit(WebCC.Properties);
    };

    return {
        Local: {
            initialize: _initialize,
            setProps: _setProps
        },
        HostListener: _contract
    };
}();

var unifiedInterfaceInit = function () {
    // Initialize 
    UnifiedInterface.Local.initialize();

    // Subscribe for value changes
    if (WebCC && WebCC.onPropertyChanged) {
        WebCC.onPropertyChanged.subscribe(UnifiedInterface.Local.setProps);
    }

    console.log('Comi-Table: properties', WebCC.Properties);
};