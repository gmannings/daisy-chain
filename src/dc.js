var dc = (function(dc) {

    /**
     * Am object that determines what methods can be used on the data
     * @param data
     * @constructor
     */
    var DaisyChain = function(data) {

        /* Public methods */

        /**
         * Test whether the supplied item is an array
         * @param item
         */
        this.isArray = function(item) {
            return Object.prototype.toString.call( item ) === '[object Array]';
        };

        /**
         * Test whether the supplied item is a string
         * @param item
         */
        this.isString = function(item) {
            return typeof item === 'string';
        };

        /**
         * Test whether the supplied item is a number
         * @param item
         */
        this.isNumber = function(item) {
            return typeof item === 'number';
        };

        /**
         * Determine the type of data
         * @param item
         * @returns {string}
         */
        this.findDataType = function(item) {
            if (this.isArray(item)) {
                return 'Array';
            } else if (this.isNumber(item)) {
                return 'Number';
            } else if (this.isString(item)) {
                return 'String';
            } else {
                return 'Object';
            }
        };

        /* Constructor */
        this.data = data;
        this.dataType = this.findDataType(data);

    };

    DaisyChain.prototype.extend = function(method, name) {
        DaisyChain.prototype[name] = method;
    };

    dc = function(data) {
        return new DaisyChain(data);
    };

    return dc;

})(dc);