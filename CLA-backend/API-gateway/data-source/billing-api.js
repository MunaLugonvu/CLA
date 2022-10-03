const DataSource = require('apollo-datasource-rest').RESTDataSource;


class BillingRestAPIs extends DataSource{
    constructor(){
        super();
        this.baseURL = '';
    }
}

module.exports = BillingRestAPIs;