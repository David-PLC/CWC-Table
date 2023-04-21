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
    types: {}
};

var UnifiedInterface = function () {
    var _initialize = function () {
        console.log('Comi-Table: UnifiedInterface initialized');
    };

    var _setProps = function (data) {
        console.log('Table: Key <', data.key, '>');
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