shipmentModule.controller('ImportShipmentGridController', ['$scope', 'ImportShipmentService', function ($scope, ImportShipmentService) {
    $scope.importShipmentCollection = ImportShipmentService.query();

    $scope.gridSettings = {
        dataSource: this.importShipmentCollection,
        columns: ['shipmentDate', 'tariffCode', 'consigneeName', 'consigneeCity', 'consigneeProvince', 'origExtPortDescription', 'shipperAddressCountryShortName'],
        columnChooser: {
            enabled: true
        },
        allowColumnReordering: true,
        sorting: {
            mode: 'multiple'
        },
        groupPanel: {
            visible: true,
            emptyPanelText: 'Drag a column header here to group grid records'
        },
        pager: {
            visible: true
        },
        paging: {
            pageSize: 7
        },
        editing: {
            editEnabled: true,
            editMode: 'row',
            insertEnabled: true,
            removeEnabled: true
        },
        filterRow: {
            visible: true
        },
        searchPanel: {
            visible: true
        },
        selection: {
            mode: 'none'
        },
        bindingOptions: {
            dataSource: 'importShipmentCollection'
        }
    }
 }]);