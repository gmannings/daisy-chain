var dc = (function(dc) {

    /**
     * Am object that determines what methods can be used on the data
     * @param data
     * @constructor
     */
    var DaisyChain = function(data) {

        /* Public methods */

        /**
         * Test whether the supplied item is an object
         * @param item
         */
        this.isObject = function(item) {
            return Object.prototype.toString.call( item ) === '[object Object]';
        };

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

        /**
         * Retrieve the value of the manipulated data (whatever the format)
         * or the original data if it has not been amended
         */
        this.result = function() {
            return (this.useManipulatedData) ?
                        this.manipulatedData :
                        this.data;
        };

        /* Constructor */

        // Set the data values
        this.data       = data;
        this.dataType   = this.findDataType(data);

        // Use manipulated data after the initial processing
        this.manipulatedData        = null;
        this.useManipulatedData     = false;

    };

    /**
     * Sum the values inside of an array or object
     */
    DaisyChain.prototype.sum = function() {

        var
            data    = (this.useManipulatedData) ? this.manipulatedData : this.data,
            newData = 0;

        // Sum depending on Object type
        switch (this.findDataType(data)) {
            case 'Array':
                this.data.map(function(val) {
                    newData += val;
                });
                break;
            case 'Object':
                for (var o in this.data) {
                    newData += (this.isNumber(this.data[o])) ? this.data[o] : 0;
                }
                break;
            case 'String':
                break;
            case 'Number':
                break;
        }

        if (newData) {
            this.useManipulatedData = true;
            this.manipulatedData    = newData;
        }

        // Return this for chaining
        return this;
    };

    DaisyChain.prototype.addFn = function(name, method) {
        DaisyChain.prototype[name] = method;
    };

    dc = function(data) {
        return new DaisyChain(data);
    };

    return dc;

})(dc);